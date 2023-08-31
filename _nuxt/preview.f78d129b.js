import{E as O,L as z,I,x as U,v as R,Q as L,P as j,a as x}from"./entry.745af789.js";const w=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function H(r,s){if(typeof r!="string")throw new TypeError("argument str must be a string");const n={},e=(s||{}).decode||F;let o=0;for(;o<r.length;){const i=r.indexOf("=",o);if(i===-1)break;let c=r.indexOf(";",o);if(c===-1)c=r.length;else if(c<i){o=r.lastIndexOf(";",i-1)+1;continue}const a=r.slice(o,i).trim();if(n[a]===void 0){let u=r.slice(i+1,c).trim();u.codePointAt(0)===34&&(u=u.slice(1,-1)),n[a]=D(u,e)}o=c+1}return n}function b(r,s,n){const t=n||{},e=t.encode||q;if(typeof e!="function")throw new TypeError("option encode is invalid");if(!w.test(r))throw new TypeError("argument name is invalid");const o=e(s);if(o&&!w.test(o))throw new TypeError("argument val is invalid");let i=r+"="+o;if(t.maxAge!==void 0&&t.maxAge!==null){const c=t.maxAge-0;if(Number.isNaN(c)||!Number.isFinite(c))throw new TypeError("option maxAge is invalid");i+="; Max-Age="+Math.floor(c)}if(t.domain){if(!w.test(t.domain))throw new TypeError("option domain is invalid");i+="; Domain="+t.domain}if(t.path){if(!w.test(t.path))throw new TypeError("option path is invalid");i+="; Path="+t.path}if(t.expires){if(!M(t.expires)||Number.isNaN(t.expires.valueOf()))throw new TypeError("option expires is invalid");i+="; Expires="+t.expires.toUTCString()}if(t.httpOnly&&(i+="; HttpOnly"),t.secure&&(i+="; Secure"),t.priority)switch(typeof t.priority=="string"?t.priority.toLowerCase():t.priority){case"low":i+="; Priority=Low";break;case"medium":i+="; Priority=Medium";break;case"high":i+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}if(t.sameSite)switch(typeof t.sameSite=="string"?t.sameSite.toLowerCase():t.sameSite){case!0:i+="; SameSite=Strict";break;case"lax":i+="; SameSite=Lax";break;case"strict":i+="; SameSite=Strict";break;case"none":i+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return i}function M(r){return Object.prototype.toString.call(r)==="[object Date]"||r instanceof Date}function D(r,s){try{return s(r)}catch{return r}}function F(r){return r.includes("%")?decodeURIComponent(r):r}function q(r){return encodeURIComponent(r)}const J={ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1};function m(r,s={}){s={...J,...s};const n=B(s);return n.dispatch(r),n.toString()}function B(r){const s=[];let n=[];const t=e=>{s.push(e)};return{toString(){return s.join("")},getContext(){return n},dispatch(e){return r.replacer&&(e=r.replacer(e)),this["_"+(e===null?"null":typeof e)](e)},_object(e){if(e&&typeof e.toJSON=="function")return this._object(e.toJSON());const o=/\[object (.*)]/i,i=Object.prototype.toString.call(e),c=o.exec(i),a=c?c[1].toLowerCase():"unknown:["+i.toLowerCase()+"]";let u=null;if((u=n.indexOf(e))>=0)return this.dispatch("[CIRCULAR:"+u+"]");if(n.push(e),typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(e))return t("buffer:"),t(e.toString("utf8"));if(a!=="object"&&a!=="function"&&a!=="asyncfunction")this["_"+a]?this["_"+a](e):r.ignoreUnknown||this._unkown(e,a);else{let l=Object.keys(e);r.unorderedObjects&&(l=l.sort()),r.respectType!==!1&&!k(e)&&l.splice(0,0,"prototype","__proto__","letructor"),r.excludeKeys&&(l=l.filter(function(p){return!r.excludeKeys(p)})),t("object:"+l.length+":");for(const p of l)this.dispatch(p),t(":"),r.excludeValues||this.dispatch(e[p]),t(",")}},_array(e,o){if(o=typeof o<"u"?o:r.unorderedArrays!==!1,t("array:"+e.length+":"),!o||e.length<=1){for(const a of e)this.dispatch(a);return}const i=[],c=e.map(a=>{const u=B(r);return u.dispatch(a),i.push(u.getContext()),u.toString()});return n=[...n,...i],c.sort(),this._array(c,!1)},_date(e){return t("date:"+e.toJSON())},_symbol(e){return t("symbol:"+e.toString())},_unkown(e,o){if(t(o),!!e&&(t(":"),e&&typeof e.entries=="function"))return this._array(Array.from(e.entries()),!0)},_error(e){return t("error:"+e.toString())},_boolean(e){return t("bool:"+e.toString())},_string(e){t("string:"+e.length+":"),t(e.toString())},_function(e){t("fn:"),k(e)?this.dispatch("[native]"):this.dispatch(e.toString()),r.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(e.name)),r.respectFunctionProperties&&this._object(e)},_number(e){return t("number:"+e.toString())},_xml(e){return t("xml:"+e.toString())},_null(){return t("Null")},_undefined(){return t("Undefined")},_regexp(e){return t("regex:"+e.toString())},_uint8array(e){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint8clampedarray(e){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},_int8array(e){return t("int8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint16array(e){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},_int16array(e){return t("int16array:"),this.dispatch(Array.prototype.slice.call(e))},_uint32array(e){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},_int32array(e){return t("int32array:"),this.dispatch(Array.prototype.slice.call(e))},_float32array(e){return t("float32array:"),this.dispatch(Array.prototype.slice.call(e))},_float64array(e){return t("float64array:"),this.dispatch(Array.prototype.slice.call(e))},_arraybuffer(e){return t("arraybuffer:"),this.dispatch(new Uint8Array(e))},_url(e){return t("url:"+e.toString())},_map(e){t("map:");const o=[...e];return this._array(o,r.unorderedSets!==!1)},_set(e){t("set:");const o=[...e];return this._array(o,r.unorderedSets!==!1)},_file(e){return t("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},_blob(){if(r.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow(){return t("domwindow")},_bigint(e){return t("bigint:"+e.toString())},_process(){return t("process")},_timer(){return t("timer")},_pipe(){return t("pipe")},_tcp(){return t("tcp")},_udp(){return t("udp")},_tty(){return t("tty")},_statwatcher(){return t("statwatcher")},_securecontext(){return t("securecontext")},_connection(){return t("connection")},_zlib(){return t("zlib")},_context(){return t("context")},_nodescript(){return t("nodescript")},_httpparser(){return t("httpparser")},_dataview(){return t("dataview")},_signal(){return t("signal")},_fsevent(){return t("fsevent")},_tlswrap(){return t("tlswrap")}}}function k(r){return typeof r!="function"?!1:/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code]\s+}$/i.exec(Function.prototype.toString.call(r))!=null}class d{constructor(s,n){s=this.words=s||[],this.sigBytes=n!==void 0?n:s.length*4}toString(s){return(s||W).stringify(this)}concat(s){if(this.clamp(),this.sigBytes%4)for(let n=0;n<s.sigBytes;n++){const t=s.words[n>>>2]>>>24-n%4*8&255;this.words[this.sigBytes+n>>>2]|=t<<24-(this.sigBytes+n)%4*8}else for(let n=0;n<s.sigBytes;n+=4)this.words[this.sigBytes+n>>>2]=s.words[n>>>2];return this.sigBytes+=s.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new d([...this.words])}}const W={stringify(r){const s=[];for(let n=0;n<r.sigBytes;n++){const t=r.words[n>>>2]>>>24-n%4*8&255;s.push((t>>>4).toString(16),(t&15).toString(16))}return s.join("")}},K={stringify(r){const s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=[];for(let t=0;t<r.sigBytes;t+=3){const e=r.words[t>>>2]>>>24-t%4*8&255,o=r.words[t+1>>>2]>>>24-(t+1)%4*8&255,i=r.words[t+2>>>2]>>>24-(t+2)%4*8&255,c=e<<16|o<<8|i;for(let a=0;a<4&&t*8+a*6<r.sigBytes*8;a++)n.push(s.charAt(c>>>6*(3-a)&63))}return n.join("")}},V={parse(r){const s=r.length,n=[];for(let t=0;t<s;t++)n[t>>>2]|=(r.charCodeAt(t)&255)<<24-t%4*8;return new d(n,s)}},$={parse(r){return V.parse(unescape(encodeURIComponent(r)))}};class Q{constructor(){this._minBufferSize=0,this.blockSize=512/32,this.reset()}reset(){this._data=new d,this._nDataBytes=0}_append(s){typeof s=="string"&&(s=$.parse(s)),this._data.concat(s),this._nDataBytes+=s.sigBytes}_doProcessBlock(s,n){}_process(s){let n,t=this._data.sigBytes/(this.blockSize*4);s?t=Math.ceil(t):t=Math.max((t|0)-this._minBufferSize,0);const e=t*this.blockSize,o=Math.min(e*4,this._data.sigBytes);if(e){for(let i=0;i<e;i+=this.blockSize)this._doProcessBlock(this._data.words,i);n=this._data.words.splice(0,e),this._data.sigBytes-=o}return new d(n,o)}}class G extends Q{update(s){return this._append(s),this._process(),this}finalize(s){s&&this._append(s)}}const X=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],Y=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],h=[];class Z extends G{constructor(){super(),this.reset()}reset(){super.reset(),this._hash=new d([...X])}_doProcessBlock(s,n){const t=this._hash.words;let e=t[0],o=t[1],i=t[2],c=t[3],a=t[4],u=t[5],l=t[6],p=t[7];for(let f=0;f<64;f++){if(f<16)h[f]=s[n+f]|0;else{const y=h[f-15],P=(y<<25|y>>>7)^(y<<14|y>>>18)^y>>>3,g=h[f-2],N=(g<<15|g>>>17)^(g<<13|g>>>19)^g>>>10;h[f]=P+h[f-7]+N+h[f-16]}const v=a&u^~a&l,C=e&o^e&i^o&i,T=(e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22),A=(a<<26|a>>>6)^(a<<21|a>>>11)^(a<<7|a>>>25),S=p+A+v+Y[f]+h[f],E=T+C;p=l,l=u,u=a,a=c+S|0,c=i,i=o,o=e,e=S+E|0}t[0]=t[0]+e|0,t[1]=t[1]+o|0,t[2]=t[2]+i|0,t[3]=t[3]+c|0,t[4]=t[4]+a|0,t[5]=t[5]+u|0,t[6]=t[6]+l|0,t[7]=t[7]+p|0}finalize(s){super.finalize(s);const n=this._nDataBytes*8,t=this._data.sigBytes*8;return this._data.words[t>>>5]|=128<<24-t%32,this._data.words[(t+64>>>9<<4)+14]=Math.floor(n/4294967296),this._data.words[(t+64>>>9<<4)+15]=n,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function tt(r){return new Z().finalize(r).toString(K)}function at(r,s={}){const n=typeof r=="string"?r:m(r,s);return tt(n).slice(0,10)}function et(r,s,n={}){return r===s||m(r,n)===m(s,n)}const rt={path:"/",watch:!0,decode:r=>L(decodeURIComponent(r)),encode:r=>encodeURIComponent(typeof r=="string"?r:JSON.stringify(r))};function _(r,s){var o;const n={...rt,...s},t=nt(n)||{},e=O(t[r]??((o=n.default)==null?void 0:o.call(n)));{const i=typeof BroadcastChannel>"u"?null:new BroadcastChannel(`nuxt:cookies:${r}`);z()&&I(()=>{i==null||i.close()});const c=()=>{it(r,e.value,n),i==null||i.postMessage(j(e.value))};let a=!1;i&&(i.onmessage=u=>{a=!0,e.value=u.data,U(()=>{a=!1})}),n.watch?R(e,(u,l)=>{a||et(u,l)||c()},{deep:n.watch!=="shallow"}):c()}return e}function nt(r={}){return H(document.cookie,r)}function st(r,s,n={}){return s==null?b(r,s,{...n,maxAge:-1}):b(r,s,n)}function it(r,s,n={}){document.cookie=st(r,s,n)}const ct=()=>({isEnabled:()=>{const t=x().query;return Object.prototype.hasOwnProperty.call(t,"preview")&&!t.preview?!1:!!(t.preview||_("previewToken").value||sessionStorage.getItem("previewToken"))},getPreviewToken:()=>_("previewToken").value||sessionStorage.getItem("previewToken")||void 0,setPreviewToken:t=>{_("previewToken").value=t,x().query.preview=t||"",t?sessionStorage.setItem("previewToken",t):sessionStorage.removeItem("previewToken"),window.location.reload()}});export{at as h,ct as u};
