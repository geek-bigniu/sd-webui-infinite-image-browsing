import{d as E,r as S,aW as L,x as H,o as c,l as T,c as a,m as o,n as e,p as V,q as z,t as F,A as Q,y as A,I as f,H as R,aL as j,K,O as W}from"./index-9cc5a0e4.js";import{u as J,b as X,f as Y,c as Z,d as ee,e as se,h as le,j as te,k as ie,t as ae,L as ne,R as oe,l as re,S as ce}from"./fullScreenContextMenu-083c9ced.js";import{g as de,M as ue}from"./db-81af9a8b.js";import"./index-235fc08e.js";import"./_baseIteratee-2a992630.js";import"./button-8e78b0cf.js";const me={class:"hint"},pe={key:1,class:"preview-switch"},ve=E({__name:"MatchedImageGrid",props:{tabIdx:null,paneIdx:null,selectedTagIds:null,id:null},setup($){const d=$,l=S(),k=L();H(()=>d.selectedTagIds,async()=>{var s;const{res:i}=k.pushAction(()=>de(d.selectedTagIds));l.value=await i,(s=u.value)==null||s.scrollToItem(0)},{immediate:!0});const u=S(),g={tabIdx:-1,target:"local",paneIdx:-1,walkMode:!1},{stackViewEl:B,multiSelectedIdxs:I,stack:G}=J().toRefs(),{itemSize:w,gridItems:N}=X(g),{showMenuIdx:m}=Y();Z();const{showGenInfo:r,imageGenInfo:x,q:O,onContextMenuClick:P,onFileItemClick:U}=ee(g,{openNext:j}),{previewIdx:n,previewing:C,onPreviewVisibleChange:q,previewImgMove:b,canPreview:_}=se(d,{scroller:u,files:l}),y=async(i,s,p)=>{G.value=[{curr:"",files:l.value}];const v=I.value;await P(i,s,p),i.key==="deleteFiles"&&(l.value=l.value.filter((h,t)=>!v.includes(t)))};return(i,s)=>{const p=K,v=ue,h=ce;return c(),T("div",{class:"container",ref_key:"stackViewEl",ref:B},[a(h,{size:"large",spinning:!e(k).isIdle},{default:o(()=>[a(v,{visible:e(r),"onUpdate:visible":s[1]||(s[1]=t=>V(r)?r.value=t:null),width:"70vw","mask-closable":"",onOk:s[2]||(s[2]=t=>r.value=!1)},{cancelText:o(()=>[]),default:o(()=>[a(p,{active:"",loading:!e(O).isIdle},{default:o(()=>[z("div",{style:{width:"100%","word-break":"break-all","white-space":"pre-line","max-height":"70vh",overflow:"auto"},onDblclick:s[0]||(s[0]=t=>e(le)(e(x),"copied"))},[z("div",me,F(i.$t("doubleClickToCopy")),1),Q(" "+F(e(x)),1)],32)]),_:1},8,["loading"])]),_:1},8,["visible"]),l.value?(c(),A(e(te),{key:0,ref_key:"scroller",ref:u,class:"file-list",items:l.value,"item-size":e(w).first,"key-field":"fullpath","item-secondary-size":e(w).second,gridItems:e(N)},{default:o(({item:t,index:M})=>[a(ie,{idx:M,file:t,"show-menu-idx":e(m),"onUpdate:showMenuIdx":s[3]||(s[3]=D=>V(m)?m.value=D:null),onFileItemClick:e(U),"full-screen-preview-image-url":l.value[e(n)]?e(ae)(l.value[e(n)]):"",selected:e(I).includes(M),onContextMenuClick:y,onPreviewVisibleChange:e(q)},null,8,["idx","file","show-menu-idx","onFileItemClick","full-screen-preview-image-url","selected","onPreviewVisibleChange"])]),_:1},8,["items","item-size","item-secondary-size","gridItems"])):f("",!0),e(C)?(c(),T("div",pe,[a(e(ne),{onClick:s[4]||(s[4]=t=>e(b)("prev")),class:R({disable:!e(_)("prev")})},null,8,["class"]),a(e(oe),{onClick:s[5]||(s[5]=t=>e(b)("next")),class:R({disable:!e(_)("next")})},null,8,["class"])])):f("",!0)]),_:1},8,["spinning"]),e(C)&&l.value&&l.value[e(n)]?(c(),A(re,{key:0,file:l.value[e(n)],idx:e(n),onContextMenuClick:y},null,8,["file","idx"])):f("",!0)],512)}}});const Ce=W(ve,[["__scopeId","data-v-2be2bafb"]]);export{Ce as default};
