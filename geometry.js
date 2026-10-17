/* Pixel-space geometry: equal angular spacing must not be stretched into an ellipse. */
(function(root){
  'use strict';
  function radialStar(config,width,height){
    const ids=Object.keys(config.initial).map(Number),degree=Object.fromEntries(ids.map(v=>[v,0]));
    if(ids.length<3||config.edges.length!==ids.length-1)return null;
    for(const [a,b]of config.edges){degree[a]++;degree[b]++;}
    const hub=ids.find(v=>degree[v]===ids.length-1);
    if(hub===undefined||ids.some(v=>v!==hub&&degree[v]!==1))return null;
    const leaves=ids.filter(v=>v!==hub).sort((a,b)=>a-b),n=leaves.length;
    const order={2:[0,1],3:[2,1,0],4:[2,3,1,0],5:[3,4,1,0,2]}[n]||leaves.map((_,i)=>i);
    const start=n===4?-135:-90;
    const snap=x=>Math.abs(x)<1e-12?0:x;
    const directions=order.map((i,j)=>({id:leaves[i],angle:start+360*j/n,x:snap(Math.cos((start+360*j/n)*Math.PI/180)),y:snap(Math.sin((start+360*j/n)*Math.PI/180))}));
    const xs=directions.map(p=>p.x),ys=directions.map(p=>p.y),minx=Math.min(...xs),maxx=Math.max(...xs),miny=Math.min(...ys),maxy=Math.max(...ys);
    const radius=Math.min((height-70)/(maxy-miny),maxx-minx>1e-12?width*.36/(maxx-minx):Infinity);
    const cx=width/2-radius*(minx+maxx)/2,cy=height/2-radius*(miny+maxy)/2;
    const positions={[hub]:{x:cx,y:cy}};
    for(const p of directions)positions[p.id]={x:cx+radius*p.x,y:cy+radius*p.y};
    return {positions,hub,leaves:directions.map(p=>p.id),radius,angle:360/n};
  }
  function layeredStar(config,width,height){
    const star=radialStar(config,width,height);
    if(!star)return null;
    const leaves=star.leaves.slice().sort((a,b)=>a-b),gap=Math.min(280,(width-192)/(leaves.length-1));
    const hubY=Math.max(66,Math.min(115,height*.25)),leafY=Math.max(hubY+64,Math.min(height*.66,height-122));
    const positions={[star.hub]:{x:width/2,y:hubY}};
    leaves.forEach((id,i)=>positions[id]={x:width/2+(i-(leaves.length-1)/2)*gap,y:leafY});
    return {positions,hub:star.hub,leaves,gap,kind:'layered-star'};
  }
  // Keep the path named by the configuration straight. Pendant vertices do
  // not bend the spine, and all positions stay independent of the move.
  function treeSpine(config,width,height){
    const ids=Object.keys(config.initial).map(Number),adj=Object.fromEntries(ids.map(v=>[v,[]]));
    if(ids.length<3||config.edges.length!==ids.length-1)return null;
    for(const [a,b]of config.edges){adj[a].push(b);adj[b].push(a);}
    const seen=new Set(),pending=[ids[0]];
    while(pending.length){const v=pending.pop();if(seen.has(v))continue;seen.add(v);pending.push(...adj[v]);}
    if(seen.size!==ids.length)return null;
    if(ids.every(v=>adj[v].length<=2)){
      const spine=[],start=ids.filter(v=>adj[v].length===1).sort((a,b)=>a-b)[0];
      let v=start,previous;
      while(v!==undefined){spine.push(v);const next=adj[v].find(u=>u!==previous);previous=v;v=next;}
      const step=Math.min(130,(width-140)/(spine.length-1));
      const positions=Object.fromEntries(spine.map((v,i)=>[v,{x:width/2+(i-(spine.length-1)/2)*step,y:height/2}]));
      return {positions,spine,arms:[],kind:'horizontal-path'};
    }
    let spine,arms;
    if(config.claim===3){
      spine=[1,3,2];arms=[[4,1,-1,0],[5,1,1,0]];
      if(config.branch==='k-6')arms.push([6,1,0,-1]);
    }else if(config.claim===5){
      spine=[3,2,1];arms=[[4,3,-1,0],[5,3,1,0]];
      if(config.branch==='k-5')arms.push([6,3,0,-1]);
    }else if(config.claim===6){
      spine=[1,2];arms=[[3,1,-1,0],[4,1,1,0],[5,2,-1,0],[6,2,1,0]];
    }else if(config.claim===18){
      spine=[1,2,3];arms=[[4,1,-1,0],[5,3,-1,0],[6,2,1,0]];
    }else if(config.claim===20){
      spine=[1,4,5,6];arms=[[2,1,-1,0],[3,1,1,0]];
      if(config.branch==='k-5')arms.push([7,4,1,0]);
    }else if(config.claim===21){
      spine=[1,2,3];arms=[[4,1,-1,0],[5,2,1,0],[6,3,-1,0]];
    }else return null;
    if(config.claim===3||config.claim===5||config.claim===6){
      const positions={},annotationHints={},root=spine[0];
      if(config.claim===6){
        const length=Math.min(160,(width-280)/(1+Math.SQRT2),Math.SQRT2*(height/2-36)),diagonal=length/Math.SQRT2;
        positions[1]={x:0,y:0};positions[2]={x:length,y:0};
        positions[3]={x:-diagonal,y:-diagonal};positions[4]={x:-diagonal,y:diagonal};
        positions[5]={x:length+diagonal,y:-diagonal};positions[6]={x:length+diagonal,y:diagonal};
        annotationHints[1]={direction:1};annotationHints[2]={direction:-1};
        for(const id of [3,4])annotationHints[id]={side:'left',gap:28,offset:false};
        for(const id of [5,6])annotationHints[id]={side:'right',gap:28,offset:false};
      }else{
        const fourWay=ids.length===6;
        const length=fourWay?Math.min(270,(width-324)/2):Math.min(config.claim===5?170:160,(width-280)/(2+1/Math.SQRT2),Math.SQRT2*(height/2-36));
        const reach=fourWay?Math.min(135,height/2-35):length/Math.SQRT2;
        spine.forEach((v,i)=>positions[v]={x:fourWay&&i===2?length+Math.min(160,length):i*length,y:0});
        positions[4]={x:fourWay?0:-reach,y:-reach};positions[5]={x:fourWay?0:-reach,y:reach};
        if(fourWay)positions[6]={x:-length,y:0};
        annotationHints[root]={direction:1};
        for(const id of fourWay?[4,5,6]:[4,5])annotationHints[id]={side:'left',gap:28,offset:false};
      }
      const xs=Object.values(positions).map(p=>p.x),shift=width/2-(Math.min(...xs)+Math.max(...xs))/2;
      for(const p of Object.values(positions)){p.x+=shift;p.y+=height/2;}
      return {positions,spine,arms,annotationHints,kind:'horizontal-branched-path'};
    }
    const rank=Object.fromEntries(spine.map((v,i)=>[v,i]));
    const low=Math.min(0,...arms.map(([,parent,,dy])=>rank[parent]+dy));
    const high=Math.max(spine.length-1,...arms.map(([,parent,,dy])=>rank[parent]+dy));
    const step=Math.min(180,(width-160)/(high-low)),arm=Math.min(76,Math.max(50,(height-196)/2));
    const center=(low+high)/2,positions={};
    for(const v of spine)positions[v]={x:width/2+(rank[v]-center)*step,y:height/2};
    for(const [v,parent,side,dy]of arms)positions[v]={x:width/2+(rank[parent]+dy-center)*step,y:height/2+side*arm};
    if(ids.some(v=>!positions[v]))return null;
    return {positions,spine,arms,kind:'horizontal-branched-path'};
  }
  function squareCycle(config,width,height){
    if(config.claim!==4)return null;
    const cx=width/2,cy=height/2,radius=Math.min(132,height/2-84,width/4);
    // Widen the cycle without moving its top/bottom or crowding side formulas.
    const horizontal=Math.max(radius,Math.min(radius*1.6,210,width/2-180));
    return {positions:{1:{x:cx,y:cy+radius},2:{x:cx-horizontal,y:cy},3:{x:cx,y:cy-radius},4:{x:cx+horizontal,y:cy}},preferredSides:{1:'below',2:'left',3:'above',4:'right'},kind:'square-cycle'};
  }
  function roomyInterior(config,layout,width,height){
    const ids=Object.keys(config.initial).map(Number),adj=Object.fromEntries(ids.map(v=>[v,[]]));
    for(const [a,b]of config.edges){adj[a].push(b);adj[b].push(a);}
    const hubs=ids.filter(v=>adj[v].length===3),pureK23=ids.length===5&&hubs.length===2&&ids.filter(v=>!hubs.includes(v)).every(v=>adj[v].length===2&&hubs.every(u=>adj[v].includes(u)));
    if(!pureK23&&config.claim!==13)return null;
    const points=Object.values(layout.vertices),ym=(Math.min(...points.map(p=>p.y))+Math.max(...points.map(p=>p.y)))/2;
    const span=Math.min(270,width/2-140),positions={};
    const xs=points.map(p=>p.x),xm=(Math.min(...xs)+Math.max(...xs))/2,half=(Math.max(...xs)-Math.min(...xs))/2;
    for(const [id,p]of Object.entries(layout.vertices))positions[id]={x:width/2+(p.x-xm)*span/half,y:height*(50+(p.y-ym)*.76)/100};
    if(pureK23){
      const reach=Math.min(165,Math.max(72,height/2-80)),horizontal=Math.min(height<450?420:300,(width-200)/2);
      const ordered=hubs.sort((a,b)=>layout.vertices[a].y-layout.vertices[b].y);
      const common=ids.filter(v=>!hubs.includes(v)).sort((a,b)=>layout.vertices[a].x-layout.vertices[b].x);
      positions[ordered[0]]={x:width/2-horizontal,y:height/2};
      positions[ordered[1]]={x:width/2+horizontal,y:height/2};
      common.forEach((v,i)=>positions[v]={x:width/2,y:height/2+(i-1)*reach});
      return {positions,preferredSides:{[ordered[0]]:'above',[ordered[1]]:'below',[common[0]]:'above',[common[1]]:'below',[common[2]]:'below'},kind:'horizontal-k23'};
    }
    if(config.claim===13&&height<300){
      const column=ids.filter(id=>Math.abs(positions[id].x-width/2)<1).sort((a,b)=>positions[a].y-positions[b].y);
      const gap=Math.min(38,(height-46)/(column.length-1));
      column.forEach((id,i)=>positions[id].y=height/2+(i-(column.length-1)/2)*gap);
    }
    return {positions,kind:'roomy-interior'};
  }
  function fourCycles(config){
    const ids=Object.keys(config.initial).map(Number),adj=Object.fromEntries(ids.map(v=>[v,[]])),found=new Map();
    for(const [a,b]of config.edges){adj[a].push(b);adj[b].push(a);}
    for(const a of ids)for(const b of adj[a])for(const c of adj[b])for(const d of adj[c]){
      if(new Set([a,b,c,d]).size!==4||!adj[d].includes(a))continue;
      const orders=[a,b,c,d].map((_,i)=>[a,b,c,d].slice(i).concat([a,b,c,d].slice(0,i)));
      const key=orders.concat(orders.map(row=>[row[0],...row.slice(1).reverse()])).map(row=>row.join(',')).sort()[0];
      found.set(key,key.split(',').map(Number));
    }
    return [...found.values()];
  }
  function insidePolygon(p,polygon){
    let inside=false;
    for(let i=0,j=polygon.length-1;i<polygon.length;j=i++){
      const a=polygon[i],b=polygon[j];
      if((a.y>p.y)!==(b.y>p.y)&&p.x<(b.x-a.x)*(p.y-a.y)/(b.y-a.y)+a.x)inside=!inside;
    }
    return inside;
  }
  // Expand the whole configuration, including pendants and shared cycles.
  // A single affine change preserves incidences, symmetry and straight edges.
  function expandedCycles(config,layout,width,height){
    if(config.claim===4||roomyInterior(config,layout,width,height))return null;
    const cycles=fourCycles(config);
    if(!cycles.length)return null;
    const points=Object.values(layout.vertices),xs=points.map(p=>p.x),ys=points.map(p=>p.y);
    const xm=(Math.min(...xs)+Math.max(...xs))/2,ym=(Math.min(...ys)+Math.max(...ys))/2;
    const base=Object.fromEntries(Object.entries(layout.vertices).map(([id,p])=>[id,{x:width*(50+(p.x-xm)*.40)/100,y:height*(50+(p.y-ym)*.76)/100}]));
    let desired=1.5;
    for(const cycle of cycles){
      const cx=cycle.map(id=>base[id].x),cy=cycle.map(id=>base[id].y);
      const spanX=Math.max(...cx)-Math.min(...cx),spanY=Math.max(...cy)-Math.min(...cy);
      if(spanX>1e-9)desired=Math.max(desired,spanY*1.45/spanX);
    }
    const baseXs=Object.values(base).map(p=>p.x),span=Math.max(...baseXs)-Math.min(...baseXs);
    const available=span>1e-9?(width-360)/span:1;
    const scale=Math.max(1,Math.min(3,desired,available));
    const positions=Object.fromEntries(Object.entries(base).map(([id,p])=>[id,{x:width/2+(p.x-width/2)*scale,y:p.y}]));
    return {positions,kind:'wide-cycle-configuration',scale,cycles};
  }
  // Put the long axis of a composite configuration along the long canvas axis.
  // Rotate raw geometry first, including all tails and shared vertices.
  function landscapeCycles(config,layout,width,height){
    if(config.claim===4||!fourCycles(config).length)return null;
    if(config.claim!==13&&roomyInterior(config,layout,width,height))return null;
    const points=Object.values(layout.vertices),xs=points.map(p=>p.x),ys=points.map(p=>p.y);
    const minX=Math.min(...xs),maxX=Math.max(...xs),minY=Math.min(...ys),maxY=Math.max(...ys);
    const spanX=maxX-minX,spanY=maxY-minY;
    if(spanY<=spanX*1.1||spanX<1e-9)return null;
    const xm=(minX+maxX)/2,ym=(minY+maxY)/2;
    const sx=Math.max(1,(width-280)/spanY),sy=Math.max(1,Math.min((height-180)/spanX,sx));
    const positions=Object.fromEntries(Object.entries(layout.vertices).map(([id,p])=>[id,{x:width/2+(p.y-ym)*sx,y:height/2-(p.x-xm)*sy}]));
    const preferredSides=Object.fromEntries(Object.entries(positions).map(([id,p])=>[id,Math.abs(p.y-height/2)>5?(p.y<height/2?'above':'below'):p.x<width/2?'left':'right']));
    return {positions,preferredSides,kind:'landscape-cycle-configuration',rotation:90};
  }
  // Reserve real caption space at the boundary instead of enlarging a scrollable
  // canvas. This uses only the configuration and viewport, never the current move
  // or the measured formula widths, so vertices remain fixed through a scheme.
  function comfortableLayout(config,source,width,height,captionSizes={}){
    const ids=Object.keys(source).map(Number);
    if(!ids.length||!Number.isFinite(width)||!Number.isFinite(height))return null;
    const positions=Object.fromEntries(ids.map(id=>[id,{x:source[id].x,y:source[id].y}]));
    const horizontalMargin=Math.min(112,Math.max(76,width*.125));
    const verticalMargin=Math.min(88,Math.max(62,height*.18));
    const frame={left:horizontalMargin,right:width-horizontalMargin,top:verticalMargin,bottom:height-verticalMargin};
    const preferredSides={};
    const star=radialStar(config,width,height);
    let kind='caption-safe-frame';
    if((config.claim===30||config.claim===31)&&config.branch==='edge'){
      // Mirror-paired four-cycles with the extra 3--6 edge on the upper boundary.
      // Interior vertices have their own horizontal lanes, rather than both
      // being squeezed directly above the common vertex.
      const cx=width/2,top=frame.top,bottom=frame.bottom;
      const outer=Math.max(78,(width-2*horizontalMargin)/2);
      const inner=outer*.43,shoulder=outer*.83;
      const mid=top+(bottom-top)*.50,inside=top+(bottom-top)*.36;
      Object.assign(positions,{
        1:{x:cx,y:bottom},2:{x:cx-shoulder,y:mid},3:{x:cx-outer,y:top},
        4:{x:cx-inner,y:inside},5:{x:cx+shoulder,y:mid},
        6:{x:cx+outer,y:top},7:{x:cx+inner,y:inside}
      });
      Object.assign(preferredSides,{1:'below',2:'left',3:'above',4:'below',5:'right',6:'above',7:'below'});
      if(config.claim===31){
        positions[8]={x:cx-outer*.62,y:bottom};preferredSides[8]='below';
      }
      kind='comfortable-mirror-cycles';
    }else{
      if(config.claim===30&&config.branch==='noedge')
        Object.assign(preferredSides,{1:'left',3:'right',6:'left'});
      // Affine fitting preserves every straight-edge incidence and symmetry.
      // Do not expand already roomy geometry: only reclaim margins that the
      // earlier per-configuration positions had spent on graph edges.
      const xs=Object.values(positions).map(p=>p.x),ys=Object.values(positions).map(p=>p.y);
      const minx=Math.min(...xs),maxx=Math.max(...xs),miny=Math.min(...ys),maxy=Math.max(...ys);
      const fitAxis=(value,min,max,low,high)=>{
        if(max-min<1e-9)return Math.max(low,Math.min(high,value));
        if(min>=low&&max<=high)return value;
        return low+(value-min)*(high-low)/(max-min);
      };
      for(const p of Object.values(positions)){
        p.x=fitAxis(p.x,minx,maxx,frame.left,frame.right);
        p.y=fitAxis(p.y,miny,maxy,frame.top,frame.bottom);
      }
      if(star){
        const leaves=star.leaves.slice().sort((a,b)=>a-b);
        const widths=leaves.map(id=>Math.max(44,Number(captionSizes[id]?.w)||0));
        const hasSizes=leaves.every(id=>Number.isFinite(captionSizes[id]?.w)&&captionSizes[id].w>0);
        const crowded=hasSizes&&leaves.slice(1).some((id,i)=>
          positions[id].x-positions[leaves[i]].x<(widths[i]+widths[i+1])/2+12);
        if(crowded){
          const gap=12,total=widths.reduce((sum,w)=>sum+w,0)+gap*(leaves.length-1);
          if(total<=width-16){
            let left=(width-total)/2;
            leaves.forEach((id,i)=>{
              positions[id].x=left+widths[i]/2;
              left+=widths[i]+gap;
            });
            // Center on the caption span, not on an arbitrary middle leaf.
            positions[star.hub].x=width/2;
            kind='caption-safe-layered-star';
          }
        }
      }
    }
    return {positions,preferredSides,frame,kind};
  }
  // Degree badges are metadata, independent of list updates and deletion.
  // Put four-cycle badges inside a cycle, and keep every badge close to its node.
  function degreeBadges(config,positions,obstacles,width,height,badgeWidth=20,badgeHeight=18){
    const ids=Object.keys(positions).map(Number),cycles=fourCycles(config),halfW=badgeWidth/2,halfH=badgeHeight/2;
    const overlap=(a,b,pad=2)=>a.x<b.x+b.w+pad&&a.x+a.w+pad>b.x&&a.y<b.y+b.h+pad&&a.y+a.h+pad>b.y;
    function crosses(a,b,r){
      let lo=0,hi=1;const dx=b.x-a.x,dy=b.y-a.y;
      for(const [p,q]of [[-dx,a.x-r.x],[dx,r.x+r.w-a.x],[-dy,a.y-r.y],[dy,r.y+r.h-a.y]]){
        if(Math.abs(p)<1e-9){if(q<0)return false;}
        else if(p<0)lo=Math.max(lo,q/p);else hi=Math.min(hi,q/p);
        if(lo>hi)return false;
      }
      return true;
    }
    const polygons=cycles.map(cycle=>({ids:cycle,points:cycle.map(v=>positions[v])}));
    const candidates={};
    for(const id of ids){
      const p=positions[id],incident=polygons.filter(c=>c.ids.includes(id)),angles=[];
      if(config.claim===13&&id===6)angles.push(-Math.PI/2);
      if(config.claim===13&&id===7)angles.push(Math.PI/2);
      for(const c of incident){
        const center={x:c.points.reduce((s,q)=>s+q.x,0)/4,y:c.points.reduce((s,q)=>s+q.y,0)/4};
        const angle=Math.atan2(center.y-p.y,center.x-p.x);
        for(const delta of [0,-15,15,-30,30])angles.push(angle+delta*Math.PI/180);
      }
      // Free corners are preferable to sitting directly on a path edge.
      for(const degrees of [-45,-135,45,135,-90,90,0,180])angles.push(degrees*Math.PI/180);
      for(let degrees=0;degrees<360;degrees+=15)angles.push(degrees*Math.PI/180);
      const list=[],seen=new Set(),radii=badgeWidth<20?[28,30,32,36,40,44,50,56,60]:[32,36,40,44,50,56,60];
      for(const radius of radii)for(let k=0;k<angles.length;k++){
        const angle=angles[k],x=p.x+radius*Math.cos(angle),y=p.y+radius*Math.sin(angle),key=x.toFixed(2)+','+y.toFixed(2);
        if(seen.has(key))continue;seen.add(key);
        const rect={x:x-halfW,y:y-halfH,w:badgeWidth,h:badgeHeight};
        if(rect.x<6||rect.y<6||rect.x+rect.w>width-6||rect.y+rect.h>height-6)continue;
        if(ids.some(v=>{const q=positions[v],dx=Math.max(rect.x-q.x,0,q.x-rect.x-rect.w),dy=Math.max(rect.y-q.y,0,q.y-rect.y-rect.h);return Math.hypot(dx,dy)<20;}))continue;
        if(obstacles.some(r=>overlap(rect,r)))continue;
        const expanded={x:rect.x-3,y:rect.y-3,w:rect.w+6,h:rect.h+6};
        if(config.edges.some(([a,b])=>crosses(positions[a],positions[b],expanded)))continue;
        const corners=[{x:rect.x,y:rect.y},{x:rect.x+rect.w,y:rect.y},{x:rect.x,y:rect.y+rect.h},{x:rect.x+rect.w,y:rect.y+rect.h}];
        const inward=incident.some(c=>corners.every(corner=>insidePolygon(corner,c.points)));
        list.push({x,y,rect,inward,score:(incident.length&&!inward?10000:0)+(radius-radii[0])*4+k*.05});
      }
      candidates[id]=list.sort((a,b)=>a.score-b.score);
    }
    let ordered=ids.slice();const placed={},rects=[];
    let attempts=0;
    function place(index,inwardOnly){
      if(index===ordered.length)return true;
      if(attempts++>6000)return false;
      const id=ordered[index];
      for(const candidate of candidates[id]){
        if(inwardOnly&&polygons.some(c=>c.ids.includes(id))&&!candidate.inward)continue;
        if(rects.some(r=>overlap(candidate.rect,r)))continue;
        placed[id]=candidate;rects.push(candidate.rect);
        if(place(index+1,inwardOnly))return true;
        rects.pop();delete placed[id];
      }
      return false;
    }
    const countFor=id=>candidates[id].filter(c=>!polygons.some(p=>p.ids.includes(id))||c.inward).length;
    ordered.sort((a,b)=>countFor(a)-countFor(b)||a-b);
    let complete=place(0,true);
    if(!complete){attempts=0;rects.length=0;for(const id of ids)delete placed[id];ordered.sort((a,b)=>candidates[a].length-candidates[b].length||a-b);complete=place(0,false);}
    if(!complete){
      // Retain the best locally clear position if an exceptionally small viewport
      // has no joint placement. The normal desktop/mobile layouts are tested.
      for(const id of ids)placed[id]=candidates[id].find(c=>!Object.values(placed).filter(Boolean).some(p=>overlap(c.rect,p.rect)))||null;
    }
    return placed;
  }
  // The entire caption box must belong to its vertex, not just its center.
  function labelOwnerClearance(rect,id,positions){
    const p=positions[id],corners=[[rect.x,rect.y],[rect.x+rect.w,rect.y],[rect.x,rect.y+rect.h],[rect.x+rect.w,rect.y+rect.h]];
    let clearance=Infinity;
    for(const [other,q]of Object.entries(positions)){
      if(String(other)===String(id))continue;
      const dx=q.x-p.x,dy=q.y-p.y,d=Math.hypot(dx,dy);
      if(d<1e-9)return -Infinity;
      const mx=(p.x+q.x)/2,my=(p.y+q.y)/2;
      for(const [x,y]of corners)clearance=Math.min(clearance,((mx-x)*dx+(my-y)*dy)/d);
    }
    return clearance;
  }
  // Legal centers of an anonymous caption form a convex polygon. Erode every
  // vertex's Voronoi half-plane by the entire caption, not just its center.
  // These candidates deliberately do not avoid nodes, edges or other captions.
  function anonymousCaptionCandidates(rectWidth,rectHeight,id,positions,width,height,margin=8){
    if(!positions||![rectWidth,rectHeight,width,height,margin].every(Number.isFinite)
      ||rectWidth<=0||rectHeight<=0||width<=0||height<=0||margin<0)return [];
    const p=positions[id],entries=Object.entries(positions);
    if(!p||entries.some(([,q])=>!q||!Number.isFinite(q.x)||!Number.isFinite(q.y)))return [];
    const halfW=rectWidth/2,halfH=rectHeight/2,pad=8,eps=1e-8;
    const minX=pad+halfW,maxX=width-pad-halfW,minY=pad+halfH,maxY=height-pad-halfH;
    if(minX>maxX||minY>maxY)return [];
    const planes=[];
    for(const [other,q]of entries){
      if(String(other)===String(id))continue;
      const dx=q.x-p.x,dy=q.y-p.y,d=Math.hypot(dx,dy);
      if(d<1e-9)return [];
      const a=dx/d,b=dy/d;
      planes.push({a,b,c:a*(p.x+q.x)/2+b*(p.y+q.y)/2-margin-Math.abs(a)*halfW-Math.abs(b)*halfH});
    }
    const clean=points=>points.filter((v,i)=>!points.slice(0,i).some(q=>Math.hypot(v.x-q.x,v.y-q.y)<eps));
    let polygon=clean([{x:minX,y:minY},{x:maxX,y:minY},{x:maxX,y:maxY},{x:minX,y:maxY}]);
    for(const {a,b,c}of planes){
      const clipped=[];
      for(let i=0;i<polygon.length;i++){
        const A=polygon[i],B=polygon[(i+1)%polygon.length],da=a*A.x+b*A.y-c,db=a*B.x+b*B.y-c;
        const inA=da<=eps,inB=db<=eps;
        if(inA)clipped.push(A);
        if(inA!==inB){
          const denominator=da-db;
          if(Math.abs(denominator)>eps){
            const t=Math.max(0,Math.min(1,da/denominator));
            clipped.push({x:A.x+(B.x-A.x)*t,y:A.y+(B.y-A.y)*t});
          }
        }
      }
      polygon=clean(clipped);
      if(!polygon.length)return [];
    }
    const inside=c=>c.x>=minX-eps&&c.x<=maxX+eps&&c.y>=minY-eps&&c.y<=maxY+eps
      &&planes.every(({a,b,c:bound})=>a*c.x+b*c.y<=bound+eps);
    const projection=(target,A,B)=>{
      const dx=B.x-A.x,dy=B.y-A.y,length=dx*dx+dy*dy;
      const t=length>eps*eps?Math.max(0,Math.min(1,((target.x-A.x)*dx+(target.y-A.y)*dy)/length)):0;
      return{x:A.x+t*dx,y:A.y+t*dy};
    };
    const nearest=target=>{
      if(inside(target))return target;
      let best=polygon[0],distance=Infinity;
      for(let i=0;i<polygon.length;i++){
        const candidate=projection(target,polygon[i],polygon[(i+1)%polygon.length]);
        const d=Math.hypot(candidate.x-target.x,candidate.y-target.y);
        if(d<distance){best=candidate;distance=d;}
      }
      return best;
    };
    const result=[],seen=new Set();
    const add=center=>{
      if(!inside(center))return;
      const x=Math.max(pad,Math.min(width-pad-rectWidth,center.x-halfW));
      const y=Math.max(pad,Math.min(height-pad-rectHeight,center.y-halfH));
      const rect={x,y,w:rectWidth,h:rectHeight};
      if(labelOwnerClearance(rect,id,positions)<margin)return;
      const key=x.toFixed(5)+','+y.toFixed(5);
      if(seen.has(key))return;
      seen.add(key);
      const dx=x+halfW-p.x,dy=y+halfH-p.y;
      const side=Math.abs(dx)/(halfW+1)>Math.abs(dy)/(halfH+1)?dx<0?'left':'right':dy<0?'above':'below';
      result.push({...rect,side});
    };
    add(nearest(p));
    for(const gap of [26,40,54]){
      add(nearest({x:p.x,y:p.y-halfH-gap}));add(nearest({x:p.x,y:p.y+halfH+gap}));
      add(nearest({x:p.x-halfW-gap,y:p.y}));add(nearest({x:p.x+halfW+gap,y:p.y}));
    }
    for(let i=0;i<polygon.length;i++){
      const A=polygon[i],B=polygon[(i+1)%polygon.length];
      add(A);add(projection(p,A,B));add({x:(A.x+B.x)/2,y:(A.y+B.y)/2});
    }
    add({x:polygon.reduce((sum,q)=>sum+q.x,0)/polygon.length,y:polygon.reduce((sum,q)=>sum+q.y,0)/polygon.length});
    for(const dx of [-64,-32,0,32,64])for(const dy of [-64,-32,0,32,64])add({x:p.x+dx,y:p.y+dy});
    const xs=polygon.map(q=>q.x),ys=polygon.map(q=>q.y),left=Math.min(...xs),right=Math.max(...xs),top=Math.min(...ys),bottom=Math.max(...ys);
    for(let i=0;i<=4;i++)for(let j=0;j<=4;j++)add({x:left+(right-left)*i/4,y:top+(bottom-top)*j/4});
    const distance=r=>Math.hypot(Math.max(r.x-p.x,0,p.x-r.x-r.w),Math.max(r.y-p.y,0,p.y-r.y-r.h))
      +Math.hypot(r.x+halfW-p.x,r.y+halfH-p.y)*.15;
    return result.sort((a,b)=>distance(a)-distance(b)||a.y-b.y||a.x-b.x).slice(0,96);
  }
  const api={radialStar,layeredStar,treeSpine,squareCycle,roomyInterior,expandedCycles,landscapeCycles,comfortableLayout,fourCycles,degreeBadges,labelOwnerClearance,anonymousCaptionCandidates};
  if(typeof module==='object'&&module.exports)module.exports=api;else root.ReductionGeometry=api;
})(typeof globalThis!=='undefined'?globalThis:this);
