import{d as x,X as $,aH as g,dj as b,r as w,O as p,Q as d,R as a,c as r,Z as i,S as u,T as n,U as B,a3 as I,$ as m,t as R,v as _,x as v,af as W,ag as D,dk as N,W as V}from"./index-60751f65.js";/* empty css              */const F={class:"container"},L={class:"actions"},T={class:"desc"},U={class:"snapshot"},j=x({__name:"index",props:{tabIdx:{},paneIdx:{},id:{},paneKey:{}},setup(q){const h=$(),t=g(),f=e=>{h.tabList=R(e.tabs)},k=b(async e=>{await N(`workspace_snapshot_${e.id}`),t.snapshots=t.snapshots.filter(c=>c.id!==e.id),_.success(v("deleteSuccess"))}),o=w(""),y=async()=>{if(!o.value){_.error(v("nameRequired"));return}const e=t.createSnapshot(o.value);await t.addSnapshot(e),_.success(v("saveCompleted"))};return(e,c)=>{const C=W,l=D;return p(),d("div",F,[a("div",L,[r(C,{value:o.value,"onUpdate:value":c[0]||(c[0]=s=>o.value=s),placeholder:e.$t("name"),style:{"max-width":"300px"}},null,8,["value","placeholder"]),r(l,{type:"primary",onClick:y},{default:i(()=>[u(n(e.$t("saveWorkspaceSnapshot")),1)]),_:1})]),a("p",T,n(e.$t("WorkspaceSnapshotDesc")),1),a("ul",U,[(p(!0),d(B,null,I(m(t).snapshots,s=>(p(),d("li",{key:s.id},[a("div",null,[a("span",null,n(s.name),1)]),a("div",null,[r(l,{onClick:S=>f(s)},{default:i(()=>[u(n(e.$t("restore")),1)]),_:2},1032,["onClick"]),r(l,{onClick:S=>m(k)(s)},{default:i(()=>[u(n(e.$t("remove")),1)]),_:2},1032,["onClick"])])]))),128))])])}}});const G=V(j,[["__scopeId","data-v-292fd2a3"]]);export{G as default};
