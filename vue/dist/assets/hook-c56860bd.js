import{$ as q,bO as D,bd as E,aC as P}from"./index-af270b30.js";import{h as $,u as z,b as G,f as L,a as O,c as Q,d as R,e as V,i as _}from"./FileItem-a4055f0b.js";const N=()=>{const e=q(),c=D(),l=$(),{stackViewEl:u,multiSelectedIdxs:r,stack:m,scroller:n}=z({images:e}).toRefs(),{itemSize:v,gridItems:d,cellWidth:g}=G(),{showMenuIdx:f}=L();O();const{onFileDragStart:I,onFileDragEnd:p}=Q(),{showGenInfo:h,imageGenInfo:w,q:x,onContextMenuClick:o,onFileItemClick:S}=R({openNext:E}),{previewIdx:C,previewing:F,onPreviewVisibleChange:b,previewImgMove:k,canPreview:M}=V(),y=async(s,t,a)=>{m.value=[{curr:"",files:e.value}],await o(s,t,a)};_("removeFiles",async({paths:s})=>{var t;e.value=(t=e.value)==null?void 0:t.filter(a=>!s.includes(a.fullpath))});const i=()=>{const s=n.value;if(s&&e.value){const t=e.value.slice(Math.max(s.$_startIndex-10,0),s.$_endIndex+10).map(a=>a.fullpath);l.fetchImageTags(t)}},T=P(i,300);return{scroller:n,queue:c,images:e,onContextMenuClickU:y,stackViewEl:u,previewIdx:C,previewing:F,onPreviewVisibleChange:b,previewImgMove:k,canPreview:M,itemSize:v,gridItems:d,showGenInfo:h,imageGenInfo:w,q:x,onContextMenuClick:o,onFileItemClick:S,showMenuIdx:f,multiSelectedIdxs:r,onFileDragStart:I,onFileDragEnd:p,cellWidth:g,onScroll:T,updateImageTag:i}};export{N as u};
