import s from"./ContentSlot.540b210f.js";import{d as o,z as m,l as p,L as u}from"./entry.c20f1630.js";import"./utils.104ea8b9.js";import"./preview.f2383a75.js";const d=o({name:"Markdown",extends:s,setup(t){const{parent:e}=u(),{between:n,default:r}=m(),a=p(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:r,tags:a,between:n,parent:e}}});export{d as default};