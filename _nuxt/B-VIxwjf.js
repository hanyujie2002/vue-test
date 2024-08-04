import{s as P,C as Y,U}from"./DEAGoHIn.js";import{g as z,a as K,b as E,s as W,c as R,w as b,d as B,f as J}from"./C3ZmrJ5H.js";import{p as F}from"./GW34aOAv.js";import{u as D}from"./B-7rYOEz.js";import"./CrpO60KO.js";const H="memory",q=()=>{const e=new Map;return{name:H,options:{},hasItem(t){return e.has(t)},getItem(t){return e.get(t)??null},getItemRaw(t){return e.get(t)??null},setItem(t,n){e.set(t,n)},setItemRaw(t,n){e.set(t,n)},removeItem(t){e.delete(t)},getKeys(){return Array.from(e.keys())},clear(){e.clear()},dispose(){e.clear()}}},G=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,k=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,Z=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function V(e,t){if(e==="__proto__"||e==="constructor"&&t&&typeof t=="object"&&"prototype"in t){Q(e);return}return t}function Q(e){console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)}function $(e,t={}){if(typeof e!="string")return e;const n=e.trim();if(e[0]==='"'&&e.endsWith('"')&&!e.includes("\\"))return n.slice(1,-1);if(n.length<=9){const i=n.toLowerCase();if(i==="true")return!0;if(i==="false")return!1;if(i==="undefined")return;if(i==="null")return null;if(i==="nan")return Number.NaN;if(i==="infinity")return Number.POSITIVE_INFINITY;if(i==="-infinity")return Number.NEGATIVE_INFINITY}if(!Z.test(e)){if(t.strict)throw new SyntaxError("[destr] Invalid JSON");return e}try{if(G.test(e)||k.test(e)){if(t.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(e,V)}return JSON.parse(e)}catch(i){if(t.strict)throw i;return e}}function X(e){return!e||typeof e.then!="function"?Promise.resolve(e):e}function g(e,...t){try{return X(e(...t))}catch(n){return Promise.reject(n)}}function ee(e){const t=typeof e;return e===null||t!=="object"&&t!=="function"}function te(e){const t=Object.getPrototypeOf(e);return!t||t.isPrototypeOf(Object)}function _(e){if(ee(e))return String(e);if(te(e)||Array.isArray(e))return JSON.stringify(e);if(typeof e.toJSON=="function")return _(e.toJSON());throw new Error("[unstorage] Cannot stringify value!")}function T(){if(typeof Buffer===void 0)throw new TypeError("[unstorage] Buffer is not supported!")}const N="base64:";function re(e){if(typeof e=="string")return e;T();const t=Buffer.from(e).toString("base64");return N+t}function ne(e){return typeof e!="string"||!e.startsWith(N)?e:(T(),Buffer.from(e.slice(N.length),"base64"))}const ie=["hasItem","getItem","getItemRaw","setItem","setItemRaw","removeItem","getMeta","setMeta","removeMeta","getKeys","clear","mount","unmount"];function se(e,t){if(t=A(t),!t)return e;const n={...e};for(const i of ie)n[i]=(o="",...u)=>e[i](t+o,...u);return n.getKeys=(i="",...o)=>e.getKeys(t+i,...o).then(u=>u.map(l=>l.slice(t.length))),n}function d(e){return e?e.split("?")[0].replace(/[/\\]/g,":").replace(/:+/g,":").replace(/^:|:$/g,""):""}function ae(...e){return d(e.join(":"))}function A(e){return e=d(e),e?e+":":""}const oe="memory",ue=()=>{const e=new Map;return{name:oe,options:{},hasItem(t){return e.has(t)},getItem(t){return e.get(t)??null},getItemRaw(t){return e.get(t)??null},setItem(t,n){e.set(t,n)},setItemRaw(t,n){e.set(t,n)},removeItem(t){e.delete(t)},getKeys(){return Array.from(e.keys())},clear(){e.clear()},dispose(){e.clear()}}};function ce(e={}){const t={mounts:{"":e.driver||ue()},mountpoints:[""],watching:!1,watchListeners:[],unwatch:{}},n=r=>{for(const s of t.mountpoints)if(r.startsWith(s))return{base:s,relativeKey:r.slice(s.length),driver:t.mounts[s]};return{base:"",relativeKey:r,driver:t.mounts[""]}},i=(r,s)=>t.mountpoints.filter(a=>a.startsWith(r)||s&&r.startsWith(a)).map(a=>({relativeBase:r.length>a.length?r.slice(a.length):void 0,mountpoint:a,driver:t.mounts[a]})),o=(r,s)=>{if(t.watching){s=d(s);for(const a of t.watchListeners)a(r,s)}},u=async()=>{if(!t.watching){t.watching=!0;for(const r in t.mounts)t.unwatch[r]=await x(t.mounts[r],o,r)}},l=async()=>{if(t.watching){for(const r in t.unwatch)await t.unwatch[r]();t.unwatch={},t.watching=!1}},h=(r,s,a)=>{const c=new Map,f=m=>{let y=c.get(m.base);return y||(y={driver:m.driver,base:m.base,items:[]},c.set(m.base,y)),y};for(const m of r){const y=typeof m=="string",v=d(y?m:m.key),w=y?void 0:m.value,I=y||!m.options?s:{...s,...m.options},O=n(v);f(O).items.push({key:v,value:w,relativeKey:O.relativeKey,options:I})}return Promise.all([...c.values()].map(m=>a(m))).then(m=>m.flat())},p={hasItem(r,s={}){r=d(r);const{relativeKey:a,driver:c}=n(r);return g(c.hasItem,a,s)},getItem(r,s={}){r=d(r);const{relativeKey:a,driver:c}=n(r);return g(c.getItem,a,s).then(f=>$(f))},getItems(r,s){return h(r,s,a=>a.driver.getItems?g(a.driver.getItems,a.items.map(c=>({key:c.relativeKey,options:c.options})),s).then(c=>c.map(f=>({key:ae(a.base,f.key),value:$(f.value)}))):Promise.all(a.items.map(c=>g(a.driver.getItem,c.relativeKey,c.options).then(f=>({key:c.key,value:$(f)})))))},getItemRaw(r,s={}){r=d(r);const{relativeKey:a,driver:c}=n(r);return c.getItemRaw?g(c.getItemRaw,a,s):g(c.getItem,a,s).then(f=>ne(f))},async setItem(r,s,a={}){if(s===void 0)return p.removeItem(r);r=d(r);const{relativeKey:c,driver:f}=n(r);f.setItem&&(await g(f.setItem,c,_(s),a),f.watch||o("update",r))},async setItems(r,s){await h(r,s,async a=>{if(a.driver.setItems)return g(a.driver.setItems,a.items.map(c=>({key:c.relativeKey,value:_(c.value),options:c.options})),s);a.driver.setItem&&await Promise.all(a.items.map(c=>g(a.driver.setItem,c.relativeKey,_(c.value),c.options)))})},async setItemRaw(r,s,a={}){if(s===void 0)return p.removeItem(r,a);r=d(r);const{relativeKey:c,driver:f}=n(r);if(f.setItemRaw)await g(f.setItemRaw,c,s,a);else if(f.setItem)await g(f.setItem,c,re(s),a);else return;f.watch||o("update",r)},async removeItem(r,s={}){typeof s=="boolean"&&(s={removeMeta:s}),r=d(r);const{relativeKey:a,driver:c}=n(r);c.removeItem&&(await g(c.removeItem,a,s),(s.removeMeta||s.removeMata)&&await g(c.removeItem,a+"$",s),c.watch||o("remove",r))},async getMeta(r,s={}){typeof s=="boolean"&&(s={nativeOnly:s}),r=d(r);const{relativeKey:a,driver:c}=n(r),f=Object.create(null);if(c.getMeta&&Object.assign(f,await g(c.getMeta,a,s)),!s.nativeOnly){const m=await g(c.getItem,a+"$",s).then(y=>$(y));m&&typeof m=="object"&&(typeof m.atime=="string"&&(m.atime=new Date(m.atime)),typeof m.mtime=="string"&&(m.mtime=new Date(m.mtime)),Object.assign(f,m))}return f},setMeta(r,s,a={}){return this.setItem(r+"$",s,a)},removeMeta(r,s={}){return this.removeItem(r+"$",s)},async getKeys(r,s={}){r=A(r);const a=i(r,!0);let c=[];const f=[];for(const m of a){const v=(await g(m.driver.getKeys,m.relativeBase,s)).map(w=>m.mountpoint+d(w)).filter(w=>!c.some(I=>w.startsWith(I)));f.push(...v),c=[m.mountpoint,...c.filter(w=>!w.startsWith(m.mountpoint))]}return r?f.filter(m=>m.startsWith(r)&&!m.endsWith("$")):f.filter(m=>!m.endsWith("$"))},async clear(r,s={}){r=A(r),await Promise.all(i(r,!1).map(async a=>{if(a.driver.clear)return g(a.driver.clear,a.relativeBase,s);if(a.driver.removeItem){const c=await a.driver.getKeys(a.relativeBase||"",s);return Promise.all(c.map(f=>a.driver.removeItem(f,s)))}}))},async dispose(){await Promise.all(Object.values(t.mounts).map(r=>C(r)))},async watch(r){return await u(),t.watchListeners.push(r),async()=>{t.watchListeners=t.watchListeners.filter(s=>s!==r),t.watchListeners.length===0&&await l()}},async unwatch(){t.watchListeners=[],await l()},mount(r,s){if(r=A(r),r&&t.mounts[r])throw new Error(`already mounted at ${r}`);return r&&(t.mountpoints.push(r),t.mountpoints.sort((a,c)=>c.length-a.length)),t.mounts[r]=s,t.watching&&Promise.resolve(x(s,o,r)).then(a=>{t.unwatch[r]=a}).catch(console.error),p},async unmount(r,s=!0){r=A(r),!(!r||!t.mounts[r])&&(t.watching&&r in t.unwatch&&(t.unwatch[r](),delete t.unwatch[r]),s&&await C(t.mounts[r]),t.mountpoints=t.mountpoints.filter(a=>a!==r),delete t.mounts[r])},getMount(r=""){r=d(r)+":";const s=n(r);return{driver:s.driver,base:s.base}},getMounts(r="",s={}){return r=d(r),i(r,s.parents).map(c=>({driver:c.driver,base:c.mountpoint}))}};return p}function x(e,t,n){return e.watch?e.watch((i,o)=>t(i,n+o)):()=>{}}async function C(e){typeof e.dispose=="function"&&await g(e.dispose)}function fe(e={}){const t=le(n,e.operators);function n(i,o){return typeof o!="object"||o instanceof RegExp?t.$eq(i,o):Object.keys(o||{}).every(u=>{const l=o[u];if(u.startsWith("$")&&t[u]){const h=t[u];return typeof h=="function"?h(i,l):!1}return n(z(i,u),l)})}return n}function le(e,t={}){return{$match:(n,i)=>e(n,i),$eq:(n,i)=>i instanceof RegExp?i.test(n):n===i,$ne:(n,i)=>i instanceof RegExp?!i.test(n):n!==i,$not:(n,i)=>!e(n,i),$and:(n,i)=>(K(i,"$and requires an array as condition"),i.every(o=>e(n,o))),$or:(n,i)=>(K(i,"$or requires an array as condition"),i.some(o=>e(n,o))),$in:(n,i)=>E(i).some(o=>Array.isArray(n)?e(n,{$contains:o}):e(n,o)),$contains:(n,i)=>(n=Array.isArray(n)?n:String(n),E(i).every(o=>n.includes(o))),$icontains:(n,i)=>{if(typeof i!="string")throw new TypeError("$icontains requires a string, use $contains instead");return n=String(n).toLocaleLowerCase(),E(i).every(o=>n.includes(o.toLocaleLowerCase()))},$containsAny:(n,i)=>(K(i,"$containsAny requires an array as condition"),n=Array.isArray(n)?n:String(n),i.some(o=>n.includes(o))),$exists:(n,i)=>i?typeof n<"u":typeof n>"u",$type:(n,i)=>typeof n===String(i),$regex:(n,i)=>{if(!(i instanceof RegExp)){const o=String(i).match(/\/(.*)\/([dgimsuy]*)$/);i=o?new RegExp(o[1],o[2]||""):new RegExp(i)}return i.test(String(n||""))},$lt:(n,i)=>n<i,$lte:(n,i)=>n<=i,$gt:(n,i)=>n>i,$gte:(n,i)=>n>=i,...t||{}}}function M(e){const t=fe(),n=(o,{query:u,before:l,after:h})=>{const p=typeof u=="string"?{_path:u}:u,r=o.findIndex(a=>t(a,p));l=l??1,h=h??1;const s=new Array(l+h).fill(null,0);return r===-1?s:s.map((a,c)=>o[r-l+c+ +(c>=l)]||null)},i=[(o,u)=>o.filter(l=>E(u.where).every(h=>t(l,h))),(o,u)=>E(u.sort).forEach(l=>W(o,l)),(o,u)=>u.surround?n(o,u.surround):o,(o,u)=>u.skip?o.slice(u.skip):o,(o,u)=>u.limit?o.slice(0,u.limit):o,(o,u)=>R(b(u.without))(o),(o,u)=>R(B(u.only))(o)];return async o=>{const u=await e(),l=o.params(),h=i.reduce((p,r)=>r(p,l)||p,u);return l.first?h[0]:h}}var me=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},pe={exports:{}};(function(e,t){(function(n,i,o){e.exports=o(),e.exports.default=o()})("slugify",me,function(){var n=JSON.parse(`{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E'","Ը":"Y'","Թ":"T'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C'","Կ":"K","Հ":"H","Ձ":"D'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P'","Ք":"Q'","Օ":"O''","Ֆ":"F","և":"EV","ء":"a","آ":"aa","أ":"a","ؤ":"u","إ":"i","ئ":"e","ا":"a","ب":"b","ة":"h","ت":"t","ث":"th","ج":"j","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"dh","ط":"t","ظ":"z","ع":"a","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ى":"a","ي":"y","ً":"an","ٌ":"on","ٍ":"en","َ":"a","ُ":"u","ِ":"e","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","پ":"p","چ":"ch","ژ":"zh","ک":"k","گ":"g","ی":"y","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ṣ":"S","ṣ":"s","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"'","’":"'","“":"\\"","”":"\\"","„":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial","ﻵ":"laa","ﻷ":"laa","ﻹ":"lai","ﻻ":"la"}`),i=JSON.parse('{"bg":{"Й":"Y","Ц":"Ts","Щ":"Sht","Ъ":"A","Ь":"Y","й":"y","ц":"ts","щ":"sht","ъ":"a","ь":"y"},"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","ß":"ss","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","¢":"centavos","£":"libras","¤":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","¢":"centavo","∑":"soma","£":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"},"da":{"Ø":"OE","ø":"oe","Å":"AA","å":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"større end"},"nb":{"&":"og","Å":"AA","Æ":"AE","Ø":"OE","å":"aa","æ":"ae","ø":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","Å":"AA","Ä":"AE","Ö":"OE","å":"aa","ä":"ae","ö":"oe"}}');function o(u,l){if(typeof u!="string")throw new Error("slugify: string argument expected");l=typeof l=="string"?{replacement:l}:l||{};var h=i[l.locale]||{},p=l.replacement===void 0?"-":l.replacement,r=l.trim===void 0?!0:l.trim,s=u.normalize().split("").reduce(function(a,c){var f=h[c];return f===void 0&&(f=n[c]),f===void 0&&(f=c),f===p&&(f=" "),a+f.replace(l.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")},"");return l.strict&&(s=s.replace(/[^A-Za-z0-9\s]/g,"")),r&&(s=s.trim()),s=s.replace(/\s+/g,p),l.lower&&(s=s.toLowerCase()),s}return o.extend=function(u){Object.assign(n,u)},o})})(pe);const he=e=>e.split(/[\s-]/g).map(F).join(" ");function ge(e,t){const{navigation:n}=P().public.content,i=u=>({...ye(["title",...n.fields])(u),...we(u==null?void 0:u.navigation)?u.navigation:{}}),o=e.sort((u,l)=>u._path.localeCompare(l._path)).reduce((u,l)=>{const h=l._path.substring(1).split("/"),p=l._id.split(":").slice(1),r=!!p[p.length-1].match(/([1-9][0-9]*\.)?index.md/g),s=f=>({title:f.title,_path:f._path,_file:f._file,children:[],...i(f),...f._draft?{_draft:!0}:{}}),a=s(l);if(r){const f=t[a._path];if(typeof(f==null?void 0:f.navigation)<"u"&&!(f!=null&&f.navigation))return u;if(l._path!=="/"){const m=s(l);a.children.push(m)}Object.assign(a,i(f))}return h.length===1?(u.push(a),u):(h.slice(0,-1).reduce((f,m,y)=>{const v="/"+h.slice(0,y+1).join("/"),w=t[v];if(typeof(w==null?void 0:w.navigation)<"u"&&!w.navigation)return[];let I=f.find(O=>O._path===v);return I||(I={title:he(m),_path:v,_file:l._file,children:[],...i(w)},f.push(I)),I.children},u).push(a),u)},[]);return L(o)}const de=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"});function L(e){var n;const t=e.sort((i,o)=>de.compare(i._file,o._file));for(const i of t)(n=i.children)!=null&&n.length?L(i.children):delete i.children,delete i._file;return e}function ye(e){return t=>(t=t||{},e&&e.length?e.filter(n=>typeof t[n]<"u").reduce((n,i)=>Object.assign(n,{[i]:t[i]}),{}):t)}function we(e){return Object.prototype.toString.call(e)==="[object Object]"}const ve=e=>U(e,P().public.content.api.baseURL),Ie=se(ce({driver:q()}),"@content");function Ae(e){async function t(){const n=new Set(await e.getKeys("cache:")),i=D().getPreviewToken();if(i){const u=await e.getItem(`${i}$`).then(p=>p||{});if(Array.isArray(u.ignoreSources)){const p=u.ignoreSources.map(r=>`cache:${r.trim()}:`);for(const r of n)p.some(s=>r.startsWith(s))&&n.delete(r)}const l=await e.getKeys(`${i}:`),h=await Promise.all(l.map(p=>e.getItem(p)));for(const p of h)n.delete(`cache:${p._id}`),p.__deleted||n.add(`${i}:${p._id}`)}return await Promise.all(Array.from(n).map(u=>e.getItem(u)))}return{storage:e,fetch:M(t),query:n=>J(M(t),n)}}let j=null,S=null;async function Ee(){return S?await S:j||(S=Oe(),j=await S),j}async function Oe(){const e=Y(),{content:t}=P().public,n=Ae(Ie),i=await n.storage.getItem("integrity");if(t.integrity!==+(i||0)){const{contents:o,navigation:u}=await $fetch(ve(t.integrity?`cache.${t.integrity}.json`:"cache.json"));await Promise.all(o.map(l=>n.storage.setItem(`cache:${l._id}`,l))),await n.storage.setItem("navigation",u),await n.storage.setItem("integrity",t.integrity)}return await e.callHook("content:storage",n.storage),n}async function Ne(e){const t=await Ee();if(!D().getPreviewToken()&&Object.keys(e||{}).length===0)return t.storage.getItem("navigation");const n=await t.query(e).where({_partial:!1,navigation:{$ne:!1}}).find(),o=(await t.query().where({_path:/\/_dir$/i,_partial:!0}).find()).reduce((u,l)=>{var p;((p=l.title)==null?void 0:p.toLowerCase())==="dir"&&(l.title=void 0);const h=l._path.split("/").slice(0,-1).join("/")||"/";return u[h]={...l,...l.body},u},{});return ge(n,o)}export{Ie as contentStorage,Ae as createDB,Ne as generateNavigation,Ee as useContentDatabase};