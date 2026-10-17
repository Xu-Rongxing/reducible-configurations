/* Symbolic interval arithmetic. f is a lower bound, not an actual list size. */
(function(root){
  'use strict';
  const E = x => Object.fromEntries(Object.entries(x || {}).filter(([,c])=>c));
  const add = (...xs) => E(xs.reduce((a,x)=>{for(const [k,c] of Object.entries(x)) a[k]=(a[k]||0)+c;return a;},{}));
  const scale = (x,n) => E(Object.fromEntries(Object.entries(x).map(([k,c])=>[k,c*n])));
  const sub = (a,b) => add(a,scale(b,-1));
  const eq = (a,b) => Object.keys(sub(a,b)).length===0;
  const value = (a,values) => Object.entries(a).reduce((n,[k,c])=>n+c*(values[k]||0),0);
  const clone = x => JSON.parse(JSON.stringify(x));
  function canonical(expr, relations){
    let result=E(expr);
    // When both outside-set coefficients agree, use s_j+q_j+r_j=amount_j.
    // Work backwards because a later amount can depend on an earlier r_j.
    for(const rel of [...relations].reverse()){
      const a=result['s'+rel.pair]||0, b=result['q'+rel.pair]||0;
      if(a && a===b){
        delete result['s'+rel.pair];delete result['q'+rel.pair];
        result=add(result,scale(rel.amount,a),{['r'+rel.pair]:-a});
      }
    }
    return E(result);
  }
  const exactSize=(node,relations=[])=>eq(canonical(node.f,relations),canonical(node.hi,relations));
  function tex(expr,relations=[],unindexed=false){
    const result=canonical(expr,relations), order=k=>k==='m'?0:k==='t'?1:k==='k'?2:k==='ell'?3:k==='one'?99:4+Number(k.slice(1))*3+({s:0,q:1,r:2}[k[0]]||0);
    const keys=Object.keys(result).sort((a,b)=>order(a)-order(b));
    if(!keys.length) return '0';
    const symbol=k=>k==='one'?'':k==='ell'?'\\ell_7':/^[sqr]\d+$/.test(k)?'|'+({s:'S',q:'T',r:'R'}[k[0]])+(unindexed?'':'_{'+k.slice(1)+'}')+'|':k;
    return keys.map((k,i)=>{const n=result[k],c=Math.abs(n);return(n<0?'-':i?'+':'')+(c===1&&k!=='one'?'':c)+symbol(k);}).join('');
  }
  const M={m:1};
  function build(config){
    const state={nodes:{},edges:clone(config.edges),relations:[],move:{kind:'initial'},checks:[],updates:[]};
    for(const [id,v] of Object.entries(config.initial)) state.nodes[id]={id:+id,f:E(v.f),hi:config.claim===1?{m:15,t:4}:E(v.f),g:E(v.g),alive:true};
    if(config.claim===9) state.relations.push({pair:1,amount:M});
    const snapshots=[clone(state)];
    const neighbors=v=>state.edges.filter(e=>e.includes(v)).map(e=>e[0]===v?e[1]:e[0]).filter(w=>state.nodes[w].alive);
    const check=(kind,left,right,details={})=>state.checks.push({kind,left:E(left),right:E(right),margin:sub(left,right),...details});
    function partial(v,amount,protect){
      const node=state.nodes[v];
      check('demand',node.g,amount,{v});
      check('available',sub(node.f,add(...protect.map(w=>state.nodes[w].hi))),amount,{v,protect});
      node.f=sub(node.f,amount);node.hi=sub(node.hi,amount);node.g=sub(node.g,amount);
      for(const w of neighbors(v)) if(!protect.includes(w)) state.nodes[w].f=sub(state.nodes[w].f,amount);
    }
    for(const raw of config.moves){
      state.move=clone(raw);state.checks=[];
      const old=clone(state.nodes),op=state.move;
      if(op.kind==='d'){
        const node=state.nodes[op.v],near=neighbors(op.v);
        check('delete',node.f,add(node.g,...near.map(w=>state.nodes[w].g)),{v:op.v,near});
        if(config.claim===1){node.f=sub(node.f,node.g);node.hi=sub(node.hi,node.g);node.g={};}
        node.alive=false;
      } else if(op.kind==='r'){
        const node=state.nodes[op.v];
        check('trim-demand',op.amount,node.g,{v:op.v});
        check('trim-list',node.f,op.amount,{v:op.v});
        node.f=E(op.amount);node.hi=E(op.amount);
      } else if(op.kind==='p') partial(op.v,op.amount,op.protect);
      else if(op.kind==='q'){
        const {a,b,target,amount,pair}=op,A=state.nodes[a],B=state.nodes[b];
        state.relations.push({pair,amount:E(amount)});
        const s={['s'+pair]:1},q={['q'+pair]:1},r={['r'+pair]:1},pa=add(s,r),pb=add(q,r);
        op.assignedA=pa;op.assignedB=pb;
        check('pair-existence',add(A.f,B.f),add(state.nodes[target].hi,amount),{a,b,target});
        check('demand',A.g,pa,{v:a});check('demand',B.g,pb,{v:b});
        A.f=sub(A.f,pa);A.hi=sub(A.hi,pa);A.g=sub(A.g,pa);
        B.f=sub(B.f,pb);B.hi=sub(B.hi,pb);B.g=sub(B.g,pb);
        const na=neighbors(a),nb=neighbors(b);
        for(const v of Object.keys(state.nodes).map(Number)){
          const node=state.nodes[v];if(!node.alive||v===a||v===b) continue;
          if(v===target){node.f=sub(node.f,r);node.hi=sub(node.hi,r);}
          else if(na.includes(v)&&nb.includes(v)) node.f=sub(node.f,amount);
          else if(na.includes(v)) node.f=sub(node.f,pa);
          else if(nb.includes(v)) node.f=sub(node.f,pb);
        }
      } else if(op.kind==='set9a'||op.kind==='set9b'){
        const node=state.nodes[op.v];
        check('demand',node.g,op.amount,{v:op.v});
        node.f=sub(node.f,op.amount);node.hi=sub(node.hi,op.amount);node.g=sub(node.g,op.amount);
        if(op.kind==='set9a'){
          state.nodes[1].f=sub(state.nodes[1].f,{r1:1});state.nodes[1].hi=sub(state.nodes[1].hi,{r1:1});
          state.nodes[3].f=sub(state.nodes[3].f,op.amount);
        } else {
          // Colors of R that lie in either common neighbor's list were already
          // removed by the first move (R need not be wholly contained in L(v_3)).
          // Only T can contribute a NEW loss at v_3; T avoids L(v_1).
          state.nodes[3].f=sub(state.nodes[3].f,{q1:1});
        }
      } else throw Error('Unknown move: '+op.kind);
      state.updates=Object.keys(state.nodes).filter(v=>!eq(old[v].f,state.nodes[v].f)||!eq(old[v].g,state.nodes[v].g)||old[v].alive!==state.nodes[v].alive).map(Number);
      for(const node of Object.values(state.nodes)) if(node.alive) check('remaining',node.f,node.g,{v:node.id});
      snapshots.push(clone(state));
    }
    return snapshots;
  }
  const api={E,add,sub,scale,eq,value,canonical,exactSize,tex,build};
  if(typeof module==='object'&&module.exports) module.exports=api;else root.Reductions=api;
})(typeof globalThis!=='undefined'?globalThis:this);
