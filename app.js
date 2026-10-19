(function(){
  'use strict';
  const D=window.ReductionData,R=window.Reductions,$=id=>document.getElementById(id);
  const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const math=(s,display=false)=>{
    try{return window.katex.renderToString(s,{throwOnError:true,displayMode:display,strict:'ignore',trust:false,output:'htmlAndMathml'});}
    catch(error){return '<span class="math-error" title="'+escape(error.message)+'">'+escape(s)+'</span>';}
  };
  const rich=(s,forceMath=false)=>!s?'':s.includes('$')?s.split(/\$([^$]+)\$/g).map((p,i)=>i%2?math(p):escape(p)).join(''):forceMath||/\\|^[A-Za-z]_/.test(s)?math(s):escape(s);
  let number=2,branch='k-6',step=0,config,meta,caseMeta,states,layout,structure,labelCenters={},geometry={},annotationSides={},labelPlacements={},degreeReservations=[],captionSizes={},captionKey='',fontEpoch=0;
  const vertex=v=>caseMeta.labels[String(v)]||'v_{'+v+'}';
  const expression=(x,s=states[step])=>R.tex(x,s.relations,number===9);
  const diagramPolynomial=(x,s=states[step])=>{
    let result=R.E(x);
    if(number===9)return result;
    for(const rel of [...s.relations].reverse()){
      const S='s'+rel.pair,T='q'+rel.pair,V='r'+rel.pair;
      const source=result[S]||0,other=result[T]||0;
      if(source&&(result[V]||0)===source)
        result=R.add(result,{[S]:-source,[V]:-source,[T]:-source},R.scale(rel.amount,source));
      else if(other&&(result[V]||0)===other)
        result=R.add(result,{[T]:-other,[V]:-other,[S]:-other},R.scale(rel.amount,other));
    }
    return result;
  };
  const diagramExpression=(x,node,s=states[step])=>R.tex(diagramPolynomial(x,s),s.relations,number===9);
  const listRelation=(node,s=states[step])=>R.exactSize(node,s.relations)?'=':'\\geq ';
  const listFormula=(node,name='f',s=states[step])=>name+listRelation(node,s)+diagramExpression(node.f,node,s);
  const ownerClearance=(rect,id)=>{
    const p=geometry.positions[id],pw=Math.min(24,rect.w),ph=Math.min(24,rect.h);
    // The end nearest the node establishes ownership, while the complete
    // caption must still avoid every node, edge, badge and other caption.
    const probe={x:Math.max(rect.x,Math.min(rect.x+rect.w-pw,p.x-pw/2)),y:Math.max(rect.y,Math.min(rect.y+rect.h-ph,p.y-ph/2)),w:pw,h:ph};
    return window.ReductionGeometry.labelOwnerClearance(probe,id,geometry.positions);
  };
  function measureCaptionSizes(){
    const key=number+'|'+branch+'|'+fontEpoch;
    if(captionKey===key)return;
    captionSizes={};
    const probe=document.createElement('div');
    probe.className='vertex-values';
    probe.style.cssText='position:absolute;visibility:hidden;width:max-content;left:0;top:0;pointer-events:none';
    $('graph').appendChild(probe);
    for(const s of states)for(const [id,node]of Object.entries(s.nodes)){
      const relation=R.exactSize(node,s.relations)?'=':'\\geq ';
      probe.innerHTML='<div>'+math('f'+relation+diagramExpression(node.f,node,s))+'</div><div>'+math('g='+diagramExpression(node.g,node,s))+'</div>';
      const r=probe.getBoundingClientRect(),old=captionSizes[id]||{w:0,h:0};
      captionSizes[id]={w:Math.max(old.w,Math.ceil(r.width)),h:Math.max(old.h,Math.ceil(r.height))};
    }
    probe.remove();captionKey=key;
  }
  const count=n=>n===1?'one':String(n);
  const currentVertices=op=>op.kind==='initial'?[]:op.kind==='q'?[op.a,op.b]:op.v?[op.v]:[];
  function operation(op){
    if(op.kind==='initial') return '\\text{Initial state}';
    if(number===1) return '\\text{extend to }'+vertex(1);
    if(op.kind==='d') return '\\langle '+vertex(op.v)+'\\rangle';
    if(op.kind==='r') return '\\langle '+vertex(op.v)+'\\downarrow '+expression(op.amount)+'\\rangle';
    if(op.kind==='q') return '\\langle\\{'+vertex(op.a)+','+vertex(op.b)+'\\}\\mid '+vertex(op.target)+','+expression(op.amount)+'\\rangle^{*}';
    if(op.kind==='set9a') return '\\langle v_2,S\\cup R\\rangle';
    if(op.kind==='set9b') return '\\langle v_4,T\\cup R\\rangle';
    if(op.kind==='p'){
      if(number===31&&branch==='edge'){
        if(op.v===1&&op.protect.length===2) return '\\langle v_1,B\\rangle';
      }
      if(op.protect.length===1) return '\\langle '+vertex(op.v)+'\\mid '+vertex(op.protect[0])+','+expression(op.amount)+'\\rangle';
      if(number===23&&['case-2','case-3'].includes(branch)) return '\\langle '+vertex(op.v)+'\\mid\\{'+op.protect.map(vertex).join(',')+'\\},'+expression(op.amount)+'\\rangle';
      return '\\langle '+vertex(op.v)+',A\\rangle';
    }
    return '';
  }
  function chooseClaim(n,chosen){
    $('graph').style.minWidth='';
    number=n;meta=D.claims.find(c=>c.claim===n);
    branch=chosen||meta.cases[0].branch;
    if(!meta.cases.some(c=>c.branch===branch))branch=meta.cases[0].branch;
    caseMeta=meta.cases.find(c=>c.branch===branch);
    config=D.cases.find(c=>c.claim===number&&c.branch===branch);
    structure=window.ReductionStructure.build(config);
    states=R.build(config);step=0;
    layout=(window.ReductionLayouts||[]).find(l=>l.claim===number&&l.branch===branch);
    if(!layout){
      const positions=caseMeta.layout?.positions||{};
      layout={vertices:Object.fromEntries(Object.keys(config.initial).map((id,i)=>{
        const p=positions[id]||[.5,(i+1)/(Object.keys(config.initial).length+1)];
        return[id,{x:p[0]*100,y:p[1]*100,side:p[0]<.5?'left':'right'}];
      }))};
    }
    $('claim-select').value=String(number);
    $('claim-title').textContent='Claim '+number;
    document.title='Claim '+number+' · Reduction steps';
    $('statement').innerHTML=rich(meta.statementSourceTex||meta.statementTex);
    $('case-heading').innerHTML='';
    $('case-heading').hidden=true;
    const caseLabels={
      4:{'case-1':'d(v_3)=4,\\quad d(v_4)=4','case-2':'d(v_3)=4,\\quad d(v_4)=3','case-3':'d(v_3)=3,\\quad d(v_4)=4'},
      8:{noedge:'v_3v_5\\notin E(G)',edge:'v_3v_5\\in E(G)'},
      13:{edge:'v_6v_7\\in E(G)',noedge:'v_5v_7,v_6v_7\\notin E(G)'},
      15:{distinct:'v_6\\ne v_3',coincident:'v_6=v_3'},
      23:{'case-1':'v_4v_6\\in E(G)','case-2':'v_4v_6\\notin E(G)\\text{ and }v_5v_7\\in E(G)','case-3':'v_4v_6\\notin E(G)\\text{ and }v_5v_7\\notin E(G)'},
      24:{'case-1':'v_1v_5\\in E(G)','case-2-via-23':'v_1v_5\\notin E(G)\\text{ and }v_6v_7\\in E(G)','case-3':'v_1v_5\\notin E(G)\\text{ and }v_6v_7\\notin E(G)'},
      25:{distinct:'v_6\\ne v_3\\text{ and }v_7\\ne v_3',coincident:'v_6=v_3\\text{ or }v_7=v_3'},
      28:{distinct:'v_6\\ne v_3'},
      30:{noedge:'v_3v_6\\notin E(H)',edge:'v_3v_6\\in E(H)'},
      31:{noedge:'v_3v_6\\notin E(G)',edge:'v_3v_6\\in E(G)'}
    };
    $('case-options').hidden=meta.cases.length===1;
    $('case-options').style.display=meta.cases.length===1?'none':'';
    document.querySelector('.case-label').hidden=meta.cases.length===1;
    $('case-options').innerHTML=meta.cases.length===1?'':meta.cases.map(c=>{
      const label=caseLabels[number]?.[c.branch]||(c.branch.startsWith('k-')?'k='+c.branch.slice(2):c.caseTex);
      return '<button data-branch="'+escape(c.branch)+'" aria-pressed="'+(c.branch===branch)+'">'+math(label)+'</button>';
    }).join('');
    $('case-options').querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>chooseClaim(number,b.dataset.branch)));
    render();
  }
  function nodeHTML(node,old){
    const p=layout.vertices[node.id],changedF=old&&!R.eq(old.f,node.f),changedG=old&&!R.eq(old.g,node.g);
    // Geometry never depends on formula width or on the current move.
    // Path annotations alternate above/below. Other graphs use two side lanes.
    const side=annotationSides[node.id],position=geometry.positions[node.id],box=$('graph').getBoundingClientRect(),x=position.x/box.width*100,y=position.y/box.height*100;
    const lane=side==='left'?geometry.minx-32:geometry.maxx+32;
    const offset=Math.abs(lane-position.x)+17;
    const placement=labelPlacements[node.id];
    let valuesStyle='top:'+(labelCenters[node.id]-position.y-8)+'px;'+(side==='left'?'right:':'left:')+offset+'px;';
    if(geometry.star){
      valuesStyle=node.id===geometry.star.hub?'left:57px;top:17px;transform:translateY(-100%);text-align:left;':'left:17px;top:49px;transform:translateX(-50%);text-align:center;';
    }else if(geometry.horizontal){
      if(placement.side==='left')valuesStyle='left:'+(17-placement.gap)+'px;top:17px;transform:translate(-100%,-50%);text-align:right;';
      else if(placement.side==='right')valuesStyle='left:'+(17+placement.gap)+'px;top:17px;transform:translateY(-50%);text-align:left;';
      else valuesStyle='left:17px;'+(placement.side==='above'?'bottom:43px;':'top:43px;')+'transform:translateX(-50%);text-align:center;';
    }
    valuesStyle+='width:'+captionSizes[node.id].w+'px;min-height:'+captionSizes[node.id].h+'px;';
    return '<div class="vertex-anchor '+(geometry.horizontal||geometry.star?'annotation-'+placement.side+' ':side==='left'?'side-left ':'')+(currentVertices(states[step].move).includes(node.id)?'current ':'')+(states[step].updates.includes(node.id)?'updated ':'')+(!node.alive?'removed':'')+'" id="node-'+node.id+'" data-vertex="'+node.id+'" data-partition="'+(number===1?'':structure.U.includes(node.id)?'U_H':'F_H')+'" data-alive="'+node.alive+'" style="left:'+x+'%;top:'+y+'%" aria-label="'+escape(vertex(node.id))+(node.alive?'':' removed')+'">'
      +'<div class="circle"'+(node.alive?'':' title="'+(number===1?'Coloring completed':'Removed, coloring deferred to the reverse extension')+'"')+'>'+math(vertex(node.id))+'</div><span class="degree-badge" hidden data-degree="'+config.degrees[node.id-1]+'" title="Degree in the original graph G = '+config.degrees[node.id-1]+'" aria-label="'+escape(vertex(node.id))+' degree in the original graph G is '+config.degrees[node.id-1]+'">'+math(String(config.degrees[node.id-1]))+'</span><div class="vertex-values" data-caption-layout="stacked" data-caption-anchor-side="'+(geometry.sideCaptionAnchors?.[node.id]||'')+'" data-f-relation="'+(R.exactSize(node,states[step].relations)?'exact':'lower-bound')+'" style="'+valuesStyle+'"><div class="'+(changedF?'math-change':'')+'">'+math(listFormula(node))+'</div><div class="'+(changedG?'math-change':'')+'">'+math('g='+diagramExpression(node.g,node))+'</div></div>'
      +(node.alive?'':'<div class="node-status" hidden>'+ (number===1?'colored':'deferred')+'</div>')+'</div>';
  }
  function placeNodeStatuses(){
    const graph=$('graph').getBoundingClientRect(),positions=geometry.positions,placed=[];
    const overlap=(a,b)=>a.x<b.x+b.w+4&&a.x+a.w+4>b.x&&a.y<b.y+b.h+4&&a.y+a.h+4>b.y;
    const rectOf=el=>{const r=el.getBoundingClientRect();return{x:r.left-graph.left,y:r.top-graph.top,w:r.width,h:r.height};};
    const labels=[...$('nodes').querySelectorAll('.vertex-values')].map(rectOf);
    const badges=[...$('nodes').querySelectorAll('.degree-badge:not([hidden])')].map(rectOf);
    const hidden=[];
    const crosses=(a,b,r)=>{
      let lo=0,hi=1;const dx=b.x-a.x,dy=b.y-a.y;
      for(const [p,q]of [[-dx,a.x-r.x],[dx,r.x+r.w-a.x],[-dy,a.y-r.y],[dy,r.y+r.h-a.y]]){
        if(Math.abs(p)<1e-9){if(q<0)return false;}
        else if(p<0)lo=Math.max(lo,q/p);else hi=Math.min(hi,q/p);
        if(lo>hi)return false;
      }
      return true;
    };
    for(const el of $('nodes').querySelectorAll('.node-status')){
      el.hidden=false;
      const old=rectOf(el);if(!old.w||!old.h)continue;
      const id=el.parentElement.dataset.vertex,p=positions[id],candidates=[];
      const caption=rectOf(el.parentElement.querySelector('.vertex-values'));
      const away={x:p.x-caption.x-caption.w/2,y:p.y-caption.y-caption.h/2};
      for(const radius of [28,30,34,38,44,50,56,64])for(const angle of [90,-90,0,180,45,135,-45,-135,30,150,-30,-150,60,120,-60,-120,15,75,105,165,-15,-75,-105,-165]){
        const dx=radius*Math.cos(angle*Math.PI/180),dy=radius*Math.sin(angle*Math.PI/180);
        candidates.push({x:p.x+dx-old.w/2,y:p.y+dy-old.h/2,w:old.w,h:old.h});
      }
      const valid=r=>r.x>=6&&r.y>=6&&r.x+r.w<=graph.width-6&&r.y+r.h<=graph.height-6
        &&ownerClearance(r,id)>=8
        &&Object.values(positions).every(q=>Math.hypot(Math.max(r.x-q.x,0,q.x-r.x-r.w),Math.max(r.y-q.y,0,q.y-r.y-r.h))>=22)
        &&!placed.some(b=>overlap(r,b))
        &&!labels.some(b=>overlap(r,b))
        &&!badges.some(b=>overlap(r,b))
        &&!config.edges.some(([a,b])=>crosses(positions[a],positions[b],{x:r.x-3,y:r.y-3,w:r.w+6,h:r.h+6}));
      const score=r=>{
        const dx=r.x+r.w/2-p.x,dy=r.y+r.h/2-p.y,d=Math.hypot(dx,dy);
        const alignment=(dx*away.x+dy*away.y)/(d*Math.hypot(away.x,away.y)||1);
        return d+(1-alignment)*24;
      };
      candidates.sort((a,b)=>score(a)-score(b));
      const best=candidates.find(valid);
      if(best){el.style.left=(17+best.x-p.x)+'px';el.style.top=(17+best.y-p.y)+'px';el.style.bottom='auto';el.style.transform='none';placed.push(best);}
      else{el.hidden=true;hidden.push(id);}
    }
    $('graph').dataset.hiddenStatuses=hidden.join(',');
  }
  function placeDegreeBadges(){
    const box=$('graph').getBoundingClientRect(),small=false,w=20,h=18;
    const obstacles=[...$('nodes').querySelectorAll('.vertex-values')].map(el=>{
      const b=el.getBoundingClientRect();return{x:b.left-box.left,y:b.top-box.top,w:b.width,h:b.height};
    });
    let placements=window.ReductionGeometry.degreeBadges(config,geometry.positions,obstacles,box.width,box.height,w,h);
    const badgeSmall=false;
    const missing=[];
    for(const [id,p]of Object.entries(placements)){
      const badge=$('node-'+id).querySelector('.degree-badge'),node=geometry.positions[id];
      if(!p){badge.hidden=true;missing.push(id);continue;}
      badge.hidden=false;
      badge.classList.toggle('small',badgeSmall);
      const fixed=geometry.star?.leaves.includes(+id);
      badge.style.left=(fixed?49:17+p.x-node.x)+'px';badge.style.top=(fixed?17+(+id===geometry.star.leaves[0]?8:0):17+p.y-node.y)+'px';
      badge.dataset.inward=p.inward?'true':'false';
    }
    $('graph').dataset.unplacedDegrees=missing.join(',');
  }
  function reserveCycleDegrees(){
    degreeReservations=[];
    const box=$('graph').getBoundingClientRect(),small=false;
    if(geometry.star){
      degreeReservations=geometry.star.leaves.map(id=>({x:geometry.positions[id].x+32-(small?8:10),y:geometry.positions[id].y+(id===geometry.star.leaves[0]?8:0)-(small?7:9),w:small?16:20,h:small?14:18}));
      return;
    }
    $('graph').dataset.degreeSize=small?'small':'normal';
    $('graph').dataset.compactCycle=number===4&&box.height<285?'true':'false';
  }
  function edges(){
    const graph=$('graph'),box=graph.getBoundingClientRect(),s=states[step];
    $('edges').setAttribute('viewBox','0 0 '+box.width+' '+box.height);
    $('edges').innerHTML=s.edges.map(([a,b])=>{
      const A=$('node-'+a).getBoundingClientRect(),B=$('node-'+b).getBoundingClientRect();
      const x=A.left+A.width/2-box.left,y=A.top+A.height/2-box.top,u=B.left+B.width/2-box.left,v=B.top+B.height/2-box.top;
      const dx=u-x,dy=v-y,len=Math.hypot(dx,dy),r=18;
      const initialF=step===0&&number!==1&&structure.F.includes(a)&&structure.F.includes(b);
      return '<line x1="'+(x+dx*r/len)+'" y1="'+(y+dy*r/len)+'" x2="'+(u-dx*r/len)+'" y2="'+(v-dy*r/len)+'" data-edge="'+a+','+b+'" class="'+(initialF?'initial-f-edge ':'')+(!s.nodes[a].alive||!s.nodes[b].alive?'removed-edge':'')+'"/>';
    }).join('');
  }
  function arrangeAnnotations(){
    $('geometry-note').innerHTML='';
    $('graph').dataset.star=window.ReductionGeometry.layeredStar(config,1000,1000)?'true':'false';
    const box=$('graph').getBoundingClientRect(),h=box.height,w=box.width;
    const points=Object.values(layout.vertices),xs=points.map(p=>p.x),ys=points.map(p=>p.y);
    const xm=(Math.min(...xs)+Math.max(...xs))/2,ym=(Math.min(...ys)+Math.max(...ys))/2;
    const square=window.ReductionGeometry.squareCycle(config,w,h),star=window.ReductionGeometry.layeredStar(config,w,h),path=star?null:window.ReductionGeometry.treeSpine(config,w,h);
    const interior=window.ReductionGeometry.roomyInterior(config,layout,w,h);
    const landscape=square||star||path?null:window.ReductionGeometry.landscapeCycles(config,layout,w,h);
    const expanded=square||star||path||interior||landscape?null:window.ReductionGeometry.expandedCycles(config,layout,w,h);
    const positions=square?square.positions:star?star.positions:path?path.positions:landscape?landscape.positions:interior?interior.positions:expanded?expanded.positions:Object.fromEntries(Object.entries(layout.vertices).map(([id,p])=>[id,{x:w*(50+(p.x-xm)*.40)/100,y:h*(50+(p.y-ym)*.76)/100}]));
    if(number===13){
      const cx=w/2+50,cy=h/2,span=w*.38,reach=Math.max(44,Math.min(130,h/2-66)),tilt=branch==='noedge'?(w<720?25:15):35;
      Object.assign(positions,{1:{x:cx-span,y:cy},2:{x:cx,y:cy+reach},3:{x:cx+span,y:cy},4:{x:cx,y:cy-reach},5:{x:cx-span-90,y:cy},6:{x:cx-100,y:cy-tilt},7:{x:cx+100,y:cy+tilt}});
    }
    if(number===22){
      const cy=h/2,reach=Math.max(70,Math.min(130,h/2-82));
      Object.assign(positions,{1:{x:w*.38,y:cy},2:{x:w*.65,y:cy-reach},3:{x:w*.865,y:cy},4:{x:w*.65,y:cy+reach},5:{x:w*.12,y:cy-reach},6:{x:w*.12,y:cy+reach}});
      if(w<720){
        const corner=Math.min(110,h/2-75),fold=Math.min(65,corner*.65);
        Object.assign(positions,{1:{x:w*.42,y:cy+corner},2:{x:w*.42,y:cy-corner},3:{x:w*.78,y:cy-corner},4:{x:w*.78,y:cy+corner},5:{x:w*.16,y:cy-fold},6:{x:w*.16,y:cy+fold}});
      }
    }
    if(number===23&&branch==='case-1'){
      const cy=h/2,reach=Math.min(170,h/2-80),fold=Math.min(140,reach*.75);
      Object.assign(positions,{1:{x:w*.145,y:cy},2:{x:w*.50,y:cy-reach},3:{x:w*.50,y:cy},4:{x:w*.50,y:cy+reach},5:{x:w*.145,y:cy+fold},6:{x:w*.855,y:cy}});
    }
    if(number===23&&branch==='case-2'){
      const cy=h/2,reach=Math.min(130,h/2-80);
      Object.assign(positions,{5:{x:w*.10,y:cy-reach},6:{x:w*.10,y:cy+reach},1:{x:w*.37,y:cy-reach},4:{x:w*.37,y:cy+reach},2:{x:w*.64,y:cy-reach},3:{x:w*.64,y:cy+reach},7:{x:w*.89,y:cy-reach}});
    }
    if(number===20){
      const reach=Math.min(110,h/2-36);
      positions[2].y=positions[1].y-reach;positions[3].y=positions[1].y+reach;
    }
    if(number===23&&branch==='case-3'){
      const cy=h/2,reach=Math.min(130,h/2-80);
      Object.assign(positions,{1:{x:w*.33,y:cy},2:{x:w*.56,y:cy-reach},3:{x:w*.81,y:cy},4:{x:w*.56,y:cy+reach},5:{x:w*.11,y:cy-reach},6:{x:w*.81,y:cy+reach},7:{x:w*.81,y:cy-reach}});
    }
    if(number===24&&branch==='case-1'){
      const cx=w/2,cy=h/2,span=Math.min(270,(w-150)/2),reach=Math.min(150,h/2-26);
      Object.assign(positions,{1:{x:cx-span,y:cy},2:{x:cx,y:cy+90},3:{x:cx+span,y:cy},4:{x:cx,y:cy-reach},5:{x:cx,y:cy},6:{x:cx+140,y:cy-reach}});
    }
    if(number===24&&branch==='case-2-via-23'){
      const cy=h/2,reach=Math.min(130,h/2-80);
      Object.assign(positions,{5:{x:w*.13,y:cy-reach},6:{x:w*.13,y:cy+reach},1:{x:w*.50,y:cy-reach},4:{x:w*.50,y:cy+reach},2:{x:w*.87,y:cy-reach},3:{x:w*.87,y:cy+reach}});
    }
    if(number===24&&branch==='case-3')positions[6]={x:positions[4].x-100,y:positions[4].y+30};
    if(number===25&&branch==='coincident'){
      const cx=w/2,cy=h/2,span=Math.min(300,(w-200)/2),reach=Math.min(165,h/2-80);
      Object.assign(positions,{1:{x:cx-span,y:cy},2:{x:cx,y:cy},3:{x:cx+span,y:cy},4:{x:cx,y:cy-reach},5:{x:cx,y:cy+reach},6:{x:cx+span,y:cy+reach}});
    }
    if(number===30&&branch==='noedge'){
      const cx=positions[1].x,scale=Math.min(1,(w-120)/640);
      positions[2].x=positions[4].x=cx-220*scale;positions[5].x=positions[7].x=cx+220*scale;positions[3].x=cx-320*scale;positions[6].x=cx+320*scale;
    }
    if(number===30&&branch==='edge')positions[4].y=positions[7].y=h/2+10;
    if(number===31&&branch==='edge')positions[8]={x:positions[1].x-100,y:positions[1].y+60};
    const comfortable=window.ReductionGeometry.comfortableLayout(config,positions,w,h,captionSizes);
    if(comfortable)Object.assign(positions,comfortable.positions);
    if(number===20){
      const left=captionSizes[1].w+40,xs=Object.values(positions).map(p=>p.x),minx=Math.min(...xs),maxx=Math.max(...xs);
      if(minx<left)for(const p of Object.values(positions))p.x=left+(p.x-minx)*(maxx-left)/(maxx-minx);
    }
    const actualXs=Object.values(positions).map(p=>p.x);
    geometry={positions,minx:Math.min(...actualXs),maxx:Math.max(...actualXs),xm:(Math.min(...actualXs)+Math.max(...actualXs))/2,horizontal:!!path,path,star,preferredSides:square?square.preferredSides:landscape?landscape.preferredSides:interior?.preferredSides,strictSides:!!square};
    if(number===13){
      geometry.preferredSides={...geometry.preferredSides,2:'right',4:'right',6:'below',7:'above'};
      geometry.fixedLabelSides={2:'right',4:'right',6:'below',7:'above'};
      geometry.sideCaptionAnchors={2:'right',4:'right'};
      geometry.sideCaptionOffsets={2:24,4:-24};
    }
    if(number===20){
      geometry.preferredSides={...geometry.preferredSides,1:'left'};
      geometry.fixedLabelSides={1:'left'};
    }
    if(number===22)geometry.preferredSides=w<720?{1:'below',2:'above',3:'above',4:'below',5:'above',6:'below'}:{1:'above',2:'above',3:'right',4:'below',5:'above',6:'below'};
    if(number===23&&branch==='case-1'){
      geometry.preferredSides={1:'above',2:'above',3:'right',4:'below',5:'below',6:'above'};
      geometry.fixedLabelSides={5:'below'};
      geometry.verticalCaptionGaps=[23,24,26,32,38,44,48,52,56,60,64,65,80,108,136,148,164];
    }
    if(number===23&&branch==='case-2'){
      geometry.preferredSides={1:'above',2:'above',3:'below',4:'below',5:'above',6:'below',7:'above'};
      geometry.verticalCaptionGaps=[23,24,26,32,38,44,48,52,56,60,64,65,80,108,136];
    }
    if(number===23&&branch==='case-3'){
      geometry.preferredSides={1:'below',2:'above',3:'below',4:'below',5:'above',6:'below',7:'above'};
      geometry.verticalCaptionGaps=[23,24,26,32,38,44,48,52,56,60,64,65,80,108,136];
    }
    if(number===24&&branch==='case-2-via-23'){
      geometry.preferredSides={1:'above',2:'above',3:'below',4:'below',5:'above',6:'below'};
      geometry.verticalCaptionGaps=[23,24,26,32,38,44,48,52,56,60,64,65,80,108,136];
    }
    if(number===25&&branch==='coincident')geometry.preferredSides={1:'above',2:'below',3:'above',4:'above',5:'below',6:'below'};
    if(comfortable)geometry.preferredSides={...geometry.preferredSides,...comfortable.preferredSides};
    $('graph').dataset.claim=number;
    $('graph').dataset.branch=branch;
    $('graph').dataset.layout=square?square.kind:star?star.kind:path?path.kind:landscape?landscape.kind:interior?interior.kind:expanded?expanded.kind:'layered';
    $('graph').dataset.rotation=landscape?'90':'0';
    $('graph').dataset.cycleScale=expanded?expanded.scale:1;
    $('graph').dataset.spine=path?path.spine.join(','):'';
    $('graph').dataset.hub=star?star.hub:'';
    $('graph').dataset.spokes=star?star.leaves.length:'';
    labelPlacements={};
    if(star){
      labelPlacements[star.hub]={side:'right'};
      star.leaves.forEach(id=>labelPlacements[id]={side:'below'});
      return;
    }
    if(path){
      path.spine.forEach((id,i)=>{
        const arms=path.arms.filter(([,parent])=>parent===id),up=arms.some(([, ,side])=>side<0),down=arms.some(([, ,side])=>side>0);
        labelPlacements[id]={side:up&&!down?'below':down&&!up?'above':i%2?'below':'above',offset:up&&down,index:i};
      });
      path.arms.forEach(([id,parent,side])=>labelPlacements[id]={side:side<0?'above':side>0?'below':labelPlacements[parent].side==='above'?'below':'above',offset:false});
      for(const [id,hint]of Object.entries(path.annotationHints||{}))Object.assign(labelPlacements[id],hint);
      return;
    }
    const counts={left:0,right:0},axis=[];
    for(const [id,p] of Object.entries(positions)){
      if(Math.abs(p.x-geometry.xm)<1e-6)axis.push([id,p]);
      else{const side=p.x<geometry.xm?'left':'right';annotationSides[id]=side;counts[side]++;}
    }
    axis.sort((a,b)=>a[1].y-b[1].y).forEach(([id,p])=>{
      const side=counts.left===counts.right?(layout.vertices[id].side==='left'?'left':'right'):counts.left<counts.right?'left':'right';
      annotationSides[id]=side;counts[side]++;
    });
    for(const side of ['left','right']){
      const points=Object.entries(positions).filter(([id])=>annotationSides[id]===side).sort((a,b)=>a[1].y-b[1].y||a[1].x-b[1].x);
      const gap=Math.min(59,(h-52)/Math.max(1,points.length-1));
      let ys=points.map(([,p])=>Math.max(27,Math.min(h-27,p.y)));
      for(let i=1;i<ys.length;i++)ys[i]=Math.max(ys[i],ys[i-1]+gap);
      if(ys.length&&ys[ys.length-1]>h-27){ys[ys.length-1]=h-27;for(let i=ys.length-2;i>=0;i--)ys[i]=Math.min(ys[i],ys[i+1]-gap);}
      points.forEach(([id],i)=>labelCenters[id]=ys[i]);
    }
  }
  function placeHorizontalLabels(){
    const graph=$('graph').getBoundingClientRect(),w=graph.width,h=graph.height,positions=geometry.positions;
    const rectOf=el=>{const r=el.getBoundingClientRect();return{x:r.left-graph.left,y:r.top-graph.top,w:r.width,h:r.height};};
    const elements=Object.fromEntries([...$('nodes').querySelectorAll('.vertex-anchor')].map(el=>[el.dataset.vertex,el.querySelector('.vertex-values')]));
    const rects=Object.fromEntries(Object.entries(elements).map(([id,el])=>[id,rectOf(el)]));
    const statuses=[...$('nodes').querySelectorAll('.node-status')].map(rectOf);
    const overlap=(a,b)=>a.x<b.x+b.w+4&&a.x+a.w+4>b.x&&a.y<b.y+b.h+4&&a.y+a.h+4>b.y;
    function crosses(a,b,r){
      let lo=0,hi=1;const dx=b.x-a.x,dy=b.y-a.y;
      for(const [p,q]of [[-dx,a.x-r.x],[dx,r.x+r.w-a.x],[-dy,a.y-r.y],[dy,r.y+r.h-a.y]]){
        if(Math.abs(p)<1e-9){if(q<0)return false;}
        else if(p<0)lo=Math.max(lo,q/p);else hi=Math.min(hi,q/p);
        if(lo>hi)return false;
      }
      return true;
    }
    function valid(r,id){
      if(r.x<8||r.y<8||r.x+r.w>w-8||r.y+r.h>h-8)return false;
      if(ownerClearance(r,id)<8)return false;
      for(const q of Object.values(positions)){
        const x=Math.max(r.x,Math.min(r.x+r.w,q.x)),y=Math.max(r.y,Math.min(r.y+r.h,q.y));
        if(Math.hypot(x-q.x,y-q.y)<23)return false;
      }
      if(Object.entries(rects).some(([other,b])=>other!==id&&overlap(r,b))||statuses.some(b=>overlap(r,b)))return false;
      const padded={x:r.x-3,y:r.y-3,w:r.w+6,h:r.h+6};
      return !config.edges.some(([a,b])=>crosses(positions[a],positions[b],padded));
    }
    for(const [id,p]of Object.entries(labelPlacements)){
      if(!p.offset)continue;
      const values=elements[id],old=rects[id],width=old.w,x=positions[id].x;
      let direction=p.direction||(p.index===0?-1:p.index===geometry.path.spine.length-1?1:x<w/2?-1:1);
      if(direction<0?x-width-28<8:x+width+28>w-8)direction=-direction;
      // Shift only far enough to clear a branch, not a full formula width.
      const candidates=[];
      for(const gap of [26,34,42,54])for(let shift=0;shift<=width/2+32;shift+=4)for(const sign of [direction,-direction]){
        candidates.push({x:x+sign*shift-width/2,y:p.side==='above'?positions[id].y-gap-old.h:positions[id].y+gap,w:width,h:old.h,side:p.side,sign});
      }
      for(const side of ['left','right'])for(const gap of [26,34,42])for(const dy of [0,-24,24,-40,40]){
        candidates.push({x:side==='left'?x-gap-width:x+gap,y:positions[id].y+dy-old.h/2,w:width,h:old.h,side});
      }
      const score=r=>Math.hypot(r.x+r.w/2-x,r.y+r.h/2-positions[id].y)+(r.side===p.side?0:24)+(r.sign&&r.sign!==direction?.01:0);
      candidates.sort((a,b)=>score(a)-score(b));
      const best=candidates.find(r=>valid(r,id))||(valid(old,id)?old:null);
      if(best){
        values.style.left=(best.x-x+17)+'px';values.style.top=(best.y-positions[id].y+17)+'px';values.style.bottom='auto';values.style.transform='none';values.style.textAlign=best.side==='left'?'right':best.side==='right'?'left':'center';rects[id]=best;
      }else{
        values.style.left=(17+direction*(width/2+28))+'px';rects[id]=rectOf(values);
      }
    }
  }
  function placeNearbyLabels(pass=0,only=null){
    const graph=$('graph').getBoundingClientRect(),w=graph.width,h=graph.height,positions=geometry.positions;
    const elements=Object.fromEntries([...$('nodes').querySelectorAll('.vertex-anchor')].map(el=>[el.dataset.vertex,el.querySelector('.vertex-values')]));
    const rectOf=el=>{const b=el.getBoundingClientRect();return {x:b.left-graph.left,y:b.top-graph.top,w:b.width,h:b.height};};
    const rects=Object.fromEntries(Object.entries(elements).map(([id,el])=>[id,rectOf(el)]));
    const statuses=[...$('nodes').querySelectorAll('.node-status')].map(rectOf).filter(r=>r.w&&r.h);
    const overlap=(a,b)=>a.x<b.x+b.w+6&&a.x+a.w+6>b.x&&a.y<b.y+b.h+6&&a.y+a.h+6>b.y;
    function crosses(a,b,r){
      let lo=0,hi=1;const dx=b.x-a.x,dy=b.y-a.y;
      for(const [p,q]of [[-dx,a.x-r.x],[dx,r.x+r.w-a.x],[-dy,a.y-r.y],[dy,r.y+r.h-a.y]]){
        if(Math.abs(p)<1e-9){if(q<0)return false;}
        else if(p<0)lo=Math.max(lo,q/p);else hi=Math.min(hi,q/p);
        if(lo>hi)return false;
      }
      return true;
    }
    function valid(r,id){
      if(r.x<8||r.y<8||r.x+r.w>w-8||r.y+r.h>h-8)return false;
      if(ownerClearance(r,id)<8)return false;
      const p=positions[id];
      const fixedSide=geometry.fixedLabelSides?.[id];
      if(fixedSide==='left'&&r.x+r.w>p.x-23||fixedSide==='right'&&r.x<p.x+23)return false;
      if(fixedSide==='above'&&r.y+r.h>p.y-23||fixedSide==='below'&&r.y<p.y+23)return false;
      if((fixedSide==='left'||fixedSide==='right')&&Math.abs(r.y+r.h/2-p.y)>36)return false;
      const sideOffset=geometry.sideCaptionOffsets?.[id];
      if(sideOffset&&Math.sign(sideOffset)*(r.y+r.h/2-p.y)<16)return false;
      if(Math.hypot(Math.max(r.x-p.x,0,p.x-r.x-r.w),Math.max(r.y-p.y,0,p.y-r.y-r.h))>65)return false;
      if(geometry.star){
        if(+id===geometry.star.hub){if(r.x<p.x+26)return false;}
        else if(r.y<p.y+26||Math.abs(r.x+r.w/2-p.x)>1)return false;
      }
      for(const p of Object.values(positions)){
        const x=Math.max(r.x,Math.min(r.x+r.w,p.x)),y=Math.max(r.y,Math.min(r.y+r.h,p.y));
        if(Math.hypot(x-p.x,y-p.y)<23)return false;
      }
      if(Object.entries(rects).some(([other,b])=>other!==id&&ownerClearance(b,other)>=8&&overlap(r,b)))return false;
      if(statuses.some(b=>overlap(r,b)))return false;
      if(degreeReservations.some(b=>overlap(r,b)))return false;
      const padded={x:r.x-3,y:r.y-3,w:r.w+6,h:r.h+6};
      return !config.edges.some(([a,b])=>crosses(positions[a],positions[b],padded));
    }
    const failed=new Set();
    const order=Object.keys(elements).filter(id=>!only||only.has(id)).sort((a,b)=>{
      const priority=id=>{
        const p=positions[id],near=Object.entries(positions).filter(([other,q])=>other!==id&&Math.hypot(p.x-q.x,p.y-q.y)<110).length;
        return elements[id].dataset.named&&near>=2?100-config.edges.filter(e=>e.includes(+id)).length:0;
      };
      if(priority(a)!==priority(b))return priority(b)-priority(a);
      const distance=id=>Math.hypot(rects[id].x+rects[id].w/2-positions[id].x,rects[id].y+rects[id].h/2-positions[id].y);
      return distance(b)-distance(a);
    });
    for(const id of order){
      const p=positions[id],old=rects[id],preferred=geometry.preferredSides?.[id]||labelPlacements[id]?.side||annotationSides[id],candidates=[];
      if(pass===0&&valid(old,id)){delete elements[id].dataset.needsName;continue;}
      for(const side of ['left','right'])for(const gap of [23,24,26,28,36,44,64,65])for(const dy of [0,...Array.from({length:16},(_,i)=>(i+1)*4).flatMap(y=>[-y,y]),-80,80,-108,108]){
        candidates.push({x:side==='left'?p.x-gap-old.w:p.x+gap,y:p.y+dy-old.h/2,w:old.w,h:old.h,side});
      }
      for(const side of ['above','below'])for(const dx of [0,...Array.from({length:20},(_,i)=>(i+1)*8).flatMap(x=>[-x,x])])for(const gap of geometry.verticalCaptionGaps||[23,24,26,32,38,44,48,52,56,60,64,65,80,108,136,148,164]){
        candidates.push({x:p.x+dx-old.w/2,y:side==='above'?p.y-gap-old.h:p.y+gap,w:old.w,h:old.h,side});
      }
      if(!geometry.star)candidates.push(...window.ReductionGeometry.anonymousCaptionCandidates(old.w,old.h,id,positions,w,h));
      const score=r=>Math.hypot(Math.max(r.x-p.x,0,p.x-r.x-r.w),Math.max(r.y-p.y,0,p.y-r.y-r.h))+Math.hypot(r.x+r.w/2-p.x,r.y+r.h/2-p.y)*.15+(r.side===preferred?0:geometry.strictSides?300:10)+Math.max(0,8-ownerClearance(r,id))*.15+(geometry.sideCaptionOffsets?.[id]?Math.abs(r.y+r.h/2-p.y-geometry.sideCaptionOffsets[id])*.5:0);
      candidates.sort((a,b)=>score(a)-score(b));
      const best=candidates.find(r=>valid(r,id))||(valid(old,id)?old:null);
      if(!best){failed.add(id);continue;}
      const el=elements[id];el.style.left=(best.x-p.x+17)+'px';el.style.top=(best.y-p.y+17)+'px';el.style.right='auto';el.style.bottom='auto';el.style.transform='none';el.style.textAlign=best.side==='left'?'right':best.side==='right'?'left':Math.abs(best.x+best.w/2-p.x)>20?(best.x+best.w/2<p.x?'right':'left'):'center';
      el.dataset.captionAnchor='nearest-end';
      rects[id]=best;
    }
    return failed;
  }
  function legalRows(input){
    const out=[];
    for(const value of Array.isArray(input)?input:[input]){
      const body=value.replace(/^\\begin\{aligned\}/,'').replace(/\\end\{aligned\}$/,'');
      for(const row of body.split('\\\\')){
        const tex=row.replace(/&/g,'').replace(/^\{\}/,'').trim();
        if(!tex)continue;
        if(out.length&&/^(?:[=+-]|\\(?:geq?|leq?|subseteq|supseteq|neq)\b)/.test(tex))out[out.length-1]+=tex;
        else if(out.length&&/^[ijk]\\in/.test(tex))out[out.length-1]+='\\quad '+tex;
        else out.push(tex);
      }
    }
    return out;
  }
  function legalHTML(input,type='equation'){
    return legalRows(input).map(tex=>'<div class="'+type+'" data-formula="'+escape(tex)+'">'+math(tex)+'</div>').join('');
  }
  function fitLegalEquations(){
    // Try the complete formula first. Break only when its measured width
    // exceeds the current panel, keeping every term and comparison intact.
    for(const el of $('check-equations').parentElement.querySelectorAll('[data-formula]')){
      const tex=el.dataset.formula,available=el.clientWidth-2;
      if(available<=0)continue;
      const probe=document.createElement('span');
      probe.style.cssText='position:absolute;visibility:hidden;white-space:nowrap;width:max-content;pointer-events:none';
      el.appendChild(probe);
      const cache=new Map(),width=(t,continued=false)=>{
        const key=(continued?'continued:':'full:')+t;
        if(!cache.has(key)){probe.innerHTML=math((continued?'{}':'')+t);cache.set(key,probe.getBoundingClientRect().width);}
        return cache.get(key);
      };
      const fullWidth=width(tex);
      el.dataset.fullWidth=String(fullWidth);
      if(fullWidth<=available){probe.remove();el.dataset.rows='1';continue;}
      const atoms=[];let atom='',depth=0;
      const flush=()=>{if(atom){atoms.push(atom);atom='';}};
      for(let i=0;i<tex.length;){
        if(tex[i]==='\\'){
          const command=tex.slice(i).match(/^\\[A-Za-z]+|^\\./)?.[0]||'\\';
          if(depth===0&&/^\\(?:geq?|leq?|subseteq|supseteq|neq|cap|cup|quad)$/.test(command))flush();
          atom+=command;i+=command.length;
        }else{
          const ch=tex[i++];
          if(depth===0&&/[=+,-]/.test(ch))flush();
          atom+=ch;
          if(ch==='{')depth++;
          if(ch==='}')depth--;
        }
      }
      flush();
      // Keep the evaluated result, and a short final constraint clause,
      // together instead of leaving an isolated '=m' or '>=0' on a row.
      const lastEqual=atoms.findLastIndex(a=>a.startsWith('='));
      if(lastEqual>=0&&width(atoms.slice(lastEqual).join(''),true)<=available)atoms.splice(lastEqual,atoms.length-lastEqual,atoms.slice(lastEqual).join(''));
      const lastClause=atoms.findLastIndex(a=>a.startsWith('\\quad'));
      if(lastClause>=0&&width(atoms.slice(lastClause).join(''),true)<=available)atoms.splice(lastClause,atoms.length-lastClause,atoms.slice(lastClause).join(''));
      const rows=[];let row='';
      for(const part of atoms){
        if(row&&width(row+part,true)>available){rows.push(row);row=part;}
        else row+=part;
      }
      if(row)rows.push(row);
      probe.remove();
      el.innerHTML=math('\\begin{aligned}'+rows.map(r=>'&{}'+r).join('\\\\')+'\\end{aligned}');
      el.dataset.rows=String(rows.length);
    }
  }
  function pairLowerBound(expr,relations,used=new Set()){
    let bound=R.E(expr);
    for(const rel of [...relations].reverse()){
      const keys=['s','q','r'].map(name=>name+rel.pair);
      const coefficients=keys.map(key=>bound[key]||0);
      if(coefficients.some(Boolean))used.add(rel.pair);
      const least=Math.min(...coefficients);
      for(const key of keys)delete bound[key];
      // x+y+z=K, x,y,z>=0: ax+by+cz >= min(a,b,c)K.
      bound=R.add(bound,R.scale(rel.amount,least));
    }
    return bound;
  }
  function pairConstraints(s){
    return s.relations.map(rel=>{
      const j=number===9?'':'_{'+rel.pair+'}',S='S'+j,T='T'+j,V='R'+j;
      return legalHTML('|'+S+'|,|'+T+'|,|'+V+'|\\ge0,\\quad |'+S+'|+|'+T+'|+|'+V+'|='+expression(rel.amount,s));
    }).join('');
  }
  function linearCalculationRows(lhs,expr,s,raw=false,relation='='){
    return '&'+lhs+relation+R.tex(expr,raw?[]:s.relations,number===9);
  }
  function explain(s){
    const op=s.move,old=step?states[step-1].nodes:null,raw=x=>R.tex(x,[],number===9);
    let eqs='',extra='';
    const requiredRelations=new Set();
    const markRelations=expr=>Object.keys(expr).filter(key=>/^[sqr]\d+$/.test(key)).forEach(key=>requiredRelations.add(Number(key.slice(1))));
    const calculation=rows=>'\\begin{aligned}'+rows.join('\\\\')+'\\end{aligned}';
    const line=(label,rows,rule='',kind='',ids=[])=>'<div class="legal-check" data-check="'+kind+'" data-vertices="'+ids.join(',')+'"><div class="check-label">'+rich(label)+'</div>'+(rule?legalHTML(rule,'criterion'):'')+legalHTML(rows)+'</div>';
    const polynomial=(lhs,expr,relation='=',simplify=true)=>{
      const rows=[linearCalculationRows(lhs,expr,s,true,relation)];
      if(simplify&&raw(expr)!==expression(expr,s))rows.push(linearCalculationRows('',expr,s));
      return rows;
    };
    const difference=(lhs,terms,result,relation='\\ge',tail='')=>{
      // Substitute the individual list/demand bounds before collecting terms.
      return (lhs?lhs+relation:'')+terms.map((term,i)=>(i?term.sign:'')+'('+raw(term.expr)+')').join('')+'='+expression(result,s)+tail;
    };
    const protectedNote=ids=>ids.filter(id=>!R.exactSize(old[id],s.relations)).map(id=>'|L('+vertex(id)+')|\\le '+expression(old[id].hi,s)).join(',\\quad ');
    const remaining=()=>{
      const changed=s.checks.filter(c=>c.kind==='remaining'&&s.updates.includes(c.v));
      const groups={};
      for(const c of changed){
        const node=s.nodes[c.v],relation=listRelation(node,s);
        const key=raw(node.f)+'|'+raw(node.g)+'|'+relation;
        (groups[key]||(groups[key]={node,margin:c.margin,relation,ids:[]})).ids.push(c.v);
      }
      if(changed.length)eqs+='<div class="check-label condition-heading">'+math('|L^\\prime(w)|\\ge g^\\prime(w)')+'</div>';
      for(const {node,margin,relation,ids} of Object.values(groups)){
        const w=ids.length===1?vertex(ids[0]):'w';
        eqs+=line('At $'+ids.map(vertex).join(',')+'$',difference('|L^\\prime('+w+')|-g^\\prime('+w+')',[{expr:node.f},{sign:'-',expr:node.g}],margin,relation,'\\ge0'),'', 'remaining',ids);
      }
      if(changed.length<Object.values(s.nodes).filter(node=>node.alive).length){
        eqs+=line('Other current vertices','|L^\\prime(w)|-g^\\prime(w)=|L(w)|-g(w)\\ge0','', 'unchanged');
      }
    };
    const starredRemaining=()=>{
      const groups={};
      for(const node of Object.values(s.nodes).filter(node=>node.alive)){
        const rawMargin=R.sub(node.f,node.g),margin=R.canonical(rawMargin,s.relations),relation=listRelation(node,s);
        markRelations(rawMargin);
        const key=expression(margin,s)+'|'+relation;
        const source=[op.a,op.b].includes(node.id),unchanged=!s.updates.includes(node.id);
        const basis=source||unchanged?old[node.id]:null;
        const group=groups[key]||(groups[key]={margin,relation,ids:[],bases:[]});
        group.ids.push(node.id);group.bases.push(basis);
      }
      for(const {margin,relation,ids,bases} of Object.values(groups)){
        const lower=pairLowerBound(margin,s.relations,requiredRelations);
        const tail=(R.eq(margin,lower)?'':'\\ge '+expression(lower,s))+'\\ge0';
        const labels=ids.map(vertex),indices=labels.map(label=>label.match(/^v_\{?(\d+)\}?$/)?.[1]).map(Number);
        const allLeaves=ids.length>2&&indices.every((n,i)=>n===i+1);
        const w=ids.length===1?labels[0]:allLeaves?'v_i':'w';
        const label=allLeaves?'At $v_i$ ($i\\in['+ids.length+']$)':'At $'+labels.join(',')+'$';
        const lhs='|L^\\prime('+w+')|-g^\\prime('+w+')';
        const simple=bases.every(basis=>basis&&[...Object.keys(basis.f),...Object.keys(basis.g)].every(key=>['m','t','one'].includes(key)))
          &&bases.every(basis=>R.eq(basis.f,bases[0].f)&&R.eq(basis.g,bases[0].g));
        const formula=simple?difference(lhs,[{expr:bases[0].f},{sign:'-',expr:bases[0].g}],margin,relation,tail):lhs+relation+expression(margin,s)+tail;
        eqs+=line(label,formula,'','remaining',ids);
      }
    };
    if(op.kind==='initial'){
      const groups={};
      for(const node of Object.values(s.nodes)){
        const margin=R.sub(node.f,node.g),key=raw(margin);
        (groups[key]||(groups[key]={margin,ids:[]})).ids.push(node.id);
      }
      if(number!==1)for(const {margin,ids} of Object.values(groups))
        eqs+=line('At $'+ids.map(vertex).join(',')+'$',polynomial('f_H(w)-g_H(w)',margin).map((row,i,a)=>row+(i===a.length-1?'\\ge0':'')),'','initial',ids);
      if(number===9){
        eqs+=line('Pair-selection condition',difference('',[{expr:{m:5,t:2}},{sign:'+',expr:{m:5,t:2}},{sign:'-',expr:{m:9,t:3}}],{m:1,t:1},'=', '\\ge m'),'|L(v_2)|+|L(v_4)|\\ge |L(v_1)|+m','pair-existence',[2,4]);
      }
      if(number===1)eqs+=line('Available list',[
        '|L_0(v)|&\\ge15m+4t-'+config.degrees[0]+'(4m+t)\\\\&\\ge4m+t'
      ],'d_G(v)\\le2','initial',[1]);
    }else if(op.kind==='d'){
      const c=s.checks.find(x=>x.kind==='delete'),v=vertex(c.v);
      eqs+=line('Deletion condition','|L('+v+')|\\ge g('+v+')+\\sum_{w\\in N('+v+')}g(w)','', 'delete-condition',[c.v]);
      const neighborSum=c.near.map(id=>'('+raw(old[id].g)+')').join('+')||'0';
      const substitution='('+raw(old[c.v].f)+')-('+raw(old[c.v].g)+')'+(c.near.length?'-('+neighborSum+')':'');
      eqs+=line('Substitution',substitution+'='+expression(c.margin,s)+(R.eq(R.canonical(c.margin,s.relations),{})?'':'\\ge0'),'', 'delete',[c.v]);
    }else if(op.kind==='r'){
      const v=vertex(op.v);
      eqs+=line('Trim condition','g('+v+')\\le k\\le |L('+v+')|','', 'trim-condition',[op.v]);
      eqs+=line('Substitution',expression(old[op.v].g,s)+'\\le '+expression(op.amount,s)+'\\le '+expression(old[op.v].f,s)+'\\le |L('+v+')|','', 'trim',[op.v]);
    }else{
      if(op.kind==='q'){
        const j='_{'+op.pair+'}',S='S'+j,T='T'+j,V='R'+j,a=vertex(op.a),b=vertex(op.b),w=vertex(op.target);
        eqs+=line('Sets from the current lists, as defined','\\phi('+a+')='+S+'\\cup '+V+',\\quad\\phi('+b+')='+T+'\\cup '+V,a+b+'\\notin E(H)','partial',[op.a,op.b]);
        const c=s.checks.find(x=>x.kind==='pair-existence'),gap=R.sub(c.left,old[op.target].hi);
        [old[op.a].f,old[op.b].f,old[op.target].hi].forEach(markRelations);
        const same=R.eq(R.canonical(old[op.a].f,s.relations),R.canonical(old[op.b].f,s.relations));
        const total=same?'2('+expression(old[op.a].f,s)+')':'('+expression(R.add(old[op.a].f,old[op.b].f),s)+')';
        eqs+=line('Set selection',total+'-('+expression(old[op.target].hi,s)+')='+expression(gap,s)+'\\ge '+expression(op.amount,s),protectedNote([op.target]),'pair-existence',[op.a,op.b]);
        const lowA=pairLowerBound(old[op.a].g,s.relations,requiredRelations),lowB=pairLowerBound(old[op.b].g,s.relations,requiredRelations);
        const common=R.E(Object.fromEntries([...new Set([...Object.keys(lowA),...Object.keys(lowB)])].map(key=>[key,Math.min(lowA[key]||0,lowB[key]||0)])));
        const exactCommon=R.eq(R.canonical(old[op.a].g,s.relations),common)&&R.eq(R.canonical(old[op.b].g,s.relations),common);
        eqs+=line('Pre-move demand at both sources','\\max\\{|'+S+'|+|'+V+'|,|'+T+'|+|'+V+'|\\}\\le '+expression(op.amount,s)+'\\le '+expression(common,s)+(exactCommon?'':'\\le\\min\\{g('+a+'),g('+b+')\\}'),'','demand',[op.a,op.b]);
      }else if(op.kind==='p'){
        const v=vertex(op.v),protect=op.protect||[op.target],outside=protect.length?'\\setminus('+protect.map(id=>'L('+vertex(id)+')').join('\\cup ')+')':'';
        eqs+=line('Partial-coloring conditions',[
          '\\phi('+v+')&\\subseteq L('+v+')'+outside,
          '|\\phi('+v+')|&='+expression(op.amount||{k:1},s)
        ],'', 'partial',[op.v]);
        const demand=s.checks.find(c=>c.kind==='demand');
        eqs+=line('Demand','0\\le '+expression(demand.right,s)+'\\le '+expression(demand.left,s)+'=g('+v+')','','demand',[op.v]);
        const available=s.checks.find(c=>c.kind==='available');
        const terms=[{expr:old[op.v].f},...protect.map(id=>({sign:'-',expr:old[id].hi}))];
        const jointSaving=number===23&&['case-2','case-3'].includes(branch)&&op.v===2&&protect.length===2;
        const simpleSaving=number===24&&branch==='case-2-via-23';
        const simpleTail=simpleSaving&&!R.eq(available.left,available.right)?'\\ge '+expression(available.right,s):'';
        eqs+=line(jointSaving||simpleSaving?'Available colors, lower bound':'Available colors',
          jointSaving||simpleSaving?difference('',terms,available.left)+simpleTail:difference('|L('+v+')'+outside+'|',terms,available.left,'\\ge','\\ge '+expression(available.right,s)),
          protectedNote(protect),'available',[op.v]);
      }else if(op.kind==='set9a'||op.kind==='set9b'){
        const v=vertex(op.v),set=op.kind==='set9a'?'S\\cup R':'T\\cup R';
        eqs+=line('Fixed partial coloring',[
          '\\phi('+v+')&='+set+'\\subseteq L('+v+')',
          '|\\phi('+v+')|&='+raw(op.amount)+'\\\\&\\le m\\le '+expression(old[op.v].g,s)
        ],'', 'partial',[op.v]);
        if(op.kind==='set9a'){
          eqs+=line('List losses',[
            '|L(v_1)\\setminus L^\\prime(v_1)|&=|R|',
            '|L(v_3)\\setminus L^\\prime(v_3)|&\\le |S|+|R|'
          ],'S\\subseteq L(v_2)\\setminus L(v_1)','loss',[1,3]);
          // These are the original fixed sets, selected before either move.
          extra+='<div class="equation">'+math('T\\subseteq L(v_4)\\setminus L(v_1)')+'</div>';
          extra+='<div class="equation">'+math('R\\subseteq L(v_2)\\cap L(v_4)\\cap L(v_1)')+'</div>';
        }else{
          eqs+=line('Second fixed set',[
            'v_2v_4&\\notin E(H)',
            'R\\cap L(v_1)&=R\\cap L(v_3)=\\varnothing',
            '|L(v_1)\\setminus L^\\prime(v_1)|&=0',
            '|L(v_3)\\setminus L^\\prime(v_3)|&\\le |T|'
          ],'', 'loss',[1,3]);
        }
      }
      if(op.kind==='q')starredRemaining();else remaining();
    }
    // Include every set-size relation used in the displayed substitutions,
    // including dependencies in the saving amount of later starred moves.
    const needed=new Set(s.relations.filter(rel=>number===9||['S','T','R'].some(name=>eqs.includes(name+'_{'+rel.pair+'}'))).map(rel=>rel.pair));
    for(const pair of requiredRelations)needed.add(pair);
    for(const rel of [...s.relations].reverse())if(needed.has(rel.pair))for(const key of Object.keys(rel.amount))if(/^[sqr]\d+$/.test(key))needed.add(Number(key.slice(1)));
    $('explanation-title').textContent=step?'MOVE '+step+' / '+(states.length-1)+' · LEGALITY CONDITIONS':'INITIAL STATE';
    $('check-equations').innerHTML=eqs;
    $('constraints').innerHTML=pairConstraints({...s,relations:s.relations.filter(rel=>needed.has(rel.pair))})+extra;
    // Legacy special-case relations use the same fit-first renderer.
    for(const el of $('constraints').querySelectorAll('.equation:not([data-formula])')){
      const tex=el.querySelector('annotation')?.textContent;
      if(tex)el.outerHTML=legalHTML(tex);
    }
    fitLegalEquations();
  }
  function render(){
    const s=states[step],old=step?states[step-1].nodes:null;
    renderStructure();
    const desk=document.querySelector('.proof-desk');
    desk.style.setProperty('--desk-top',desk.offsetTop+'px');
    const alive=Object.values(s.nodes).filter(v=>v.alive).length;
    $('empty-note').textContent='';
    if(!alive)$('configuration-stage').textContent=number===1?'EXTENSION COMPLETED':'REDUCTION COMPLETED';
    $('state-count').textContent='State '+step+' / '+(states.length-1)+' · '+count(alive)+' remaining';
    $('current-operation').innerHTML=math(operation(s.move));
    $('previous').disabled=step===0;$('next').disabled=step===states.length-1;$('reset').disabled=step===0;
    $('next').innerHTML=step===0&&number!==1?'Start '+math('\\Omega')+' →':'Next →';
    $('progress').style.width=(100*step/(states.length-1))+'%';
    $('timeline').innerHTML=states.map((st,i)=>'<button data-step="'+i+'" aria-label="'+String(i).padStart(2,'0')+'" aria-current="'+(i===step?'step':'false')+'"><span class="step-number">'+String(i).padStart(2,'0')+'</span>'+math(operation(st.move))+'</button>').join('');
    $('timeline').querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>setStep(+b.dataset.step)));
    explain(s);
    // Measure the diagram after the case heading and move controls have settled.
    $('graph').style.minWidth='';
    measureCaptionSizes();
    arrangeAnnotations();
    $('nodes').innerHTML=Object.values(s.nodes).map(node=>nodeHTML(node,old&&old[node.id])).join('');
    degreeReservations=[];
    reserveCycleDegrees();
    placeNearbyLabels();
    let failed=placeNearbyLabels(1);
    if(failed.size)failed=placeNearbyLabels(1,failed);
    $('graph').dataset.unplacedLabels=[...failed].join(',');
    // List sizes and demands keep their first-choice spaces. Secondary metadata
    // is fitted only after the value captions have settled.
    placeDegreeBadges();
    placeNodeStatuses();
    edges();
    const active=$('timeline').querySelector('[aria-current="step"]');
    if(active)$('timeline').scrollLeft=Math.max(0,active.offsetLeft-$('timeline').offsetLeft-$('timeline').clientWidth/2+active.clientWidth/2);
    history.replaceState(null,'','#claim='+number+'&case='+encodeURIComponent(branch)+'&move='+step);
  }
  function renderStructure(){
    const setup=step===0&&number!==1,box=$('initial-structure');
    $('graph').dataset.stage=setup?'setup':'moves';
    $('diagram-legend').dataset.stage=setup?'setup':'moves';
    $('configuration-stage').textContent=setup?'INITIAL H · BEFORE Ω':'CURRENT CONFIGURATION';
    $('legality-heading').innerHTML=setup?'Before '+math('\\Omega'):'Why this move is legal';
    box.hidden=!setup;
    if(!setup){box.innerHTML='';return;}
    const set=ids=>ids.length?'\\{'+ids.map(vertex).join(',')+'\\}':'\\varnothing';
    const types=structure.components.map(c=>c.type);
    box.innerHTML='<div class="partition-set partition-u-text">'+math('U_H='+set(structure.U))+'</div>'
      +'<div class="partition-set">'+math('V(F_H)='+set(structure.F))+'</div>'
      +(structure.nice?'<div class="structure-type">'+math(types.includes('other')?'\\Delta(F_H)='+structure.maxDegreeF:'F_H'+(types.length?'\\cong '+types.join('\\sqcup '):'=\\varnothing'))+'</div>':'');
  }
  function setStep(n){step=Math.max(0,Math.min(states.length-1,n));render();}
  $('claim-select').innerHTML=D.claims.sort((a,b)=>a.claim-b.claim).map(c=>'<option value="'+c.claim+'">Claim '+c.claim+'</option>').join('');
  $('claim-select').addEventListener('change',e=>chooseClaim(+e.target.value));
  $('next').addEventListener('click',()=>setStep(step+1));$('previous').addEventListener('click',()=>setStep(step-1));$('reset').addEventListener('click',()=>setStep(0));
  document.querySelectorAll('[data-tex]').forEach(e=>e.innerHTML=math(e.dataset.tex));
  document.addEventListener('keydown',e=>{
    if(['SELECT','INPUT','TEXTAREA'].includes(e.target.tagName))return;
    const actions={ArrowRight:()=>setStep(step+1),ArrowLeft:()=>setStep(step-1),Home:()=>setStep(0),End:()=>setStep(states.length-1)};
    if(actions[e.key]){e.preventDefault();actions[e.key]();}
  });
  let resizeFrame;
  window.addEventListener('resize',()=>{cancelAnimationFrame(resizeFrame);resizeFrame=requestAnimationFrame(()=>{$('graph').style.minWidth='';render();});});
  // A newly used TeX font can change a caption's width after case selection.
  // Refresh the badge clearances once the actual font metrics are available.
  if(document.fonts)document.fonts.addEventListener('loadingdone',()=>{fontEpoch++;render();});
  const hash=new URLSearchParams(location.hash.slice(1)),n=Number(hash.get('claim'));
  chooseClaim(D.claims.some(c=>c.claim===n)?n:2,hash.get('case')||(n&&n!==2?null:'k-6'));
  if(Number(hash.get('move')))setStep(Number(hash.get('move')));
})();
