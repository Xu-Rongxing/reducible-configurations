/* The partition of the original H is fixed before the reduction scheme. */
(function(root){
  'use strict';
  function build(config){
    const ids=Object.keys(config.initial).map(Number),adj=Object.fromEntries(ids.map(id=>[id,[]]));
    for(const [a,b]of config.edges){adj[a].push(b);adj[b].push(a);}
    const external=Object.fromEntries(ids.map(id=>[id,config.degrees[id-1]-adj[id].length]));
    const U=ids.filter(id=>external[id]<=1),F=ids.filter(id=>!U.includes(id));
    const edges=config.edges.filter(([a,b])=>F.includes(a)&&F.includes(b));
    const seen=new Set(),components=[];
    for(const start of F){
      if(seen.has(start))continue;
      const vertices=[],pending=[start];
      while(pending.length){const id=pending.pop();if(seen.has(id))continue;seen.add(id);vertices.push(id);pending.push(...adj[id].filter(v=>F.includes(v)&&!seen.has(v)));}
      vertices.sort((a,b)=>a-b);
      const componentEdges=edges.filter(([a,b])=>vertices.includes(a)&&vertices.includes(b));
      const degrees=vertices.map(id=>componentEdges.filter(edge=>edge.includes(id)).length);
      let type='other';
      if(componentEdges.length===vertices.length-1&&degrees.every(d=>d<=2))type='P_'+vertices.length;
      else if(vertices.length===4&&componentEdges.length===3&&degrees.slice().sort().join(',')==='1,1,1,3')type='K_{1,3}';
      components.push({vertices,edges:componentEdges,type});
    }
    const degreesF=Object.fromEntries(F.map(id=>[id,edges.filter(edge=>edge.includes(id)).length]));
    const maxDegreeF=Math.max(0,...Object.values(degreesF));
    return {U,F,edges,external,components,degreesF,maxDegreeF,nice:U.length>0&&ids.every(id=>external[id]>=0&&external[id]<=2)&&maxDegreeF<=3};
  }
  const api={build};
  if(typeof module==='object'&&module.exports)module.exports=api;else root.ReductionStructure=api;
})(typeof globalThis!=='undefined'?globalThis:this);
