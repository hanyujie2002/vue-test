import s from"./ContentSlot.d64912b0.js";import{d as o,z as m,l as p,L as u}from"./entry.b70e6071.js";import"./utils.afae8fcc.js";import"./preview.bdf5db7f.js";const d=o({name:"Markdown",extends:s,setup(t){const{parent:e}=u(),{between:n,default:r}=m(),a=p(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:r,tags:a,between:n,parent:e}}});export{d as default};