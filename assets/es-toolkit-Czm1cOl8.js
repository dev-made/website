class E extends Error{constructor(e="The operation was aborted"){super(e),this.name="AbortError"}}function w(l,e,{signal:o,edges:r}={}){let n,t=null;const c=r!=null&&r.includes("leading"),d=r==null||r.includes("trailing"),f=()=>{t!==null&&(l.apply(n,t),n=void 0,t=null)},m=()=>{d&&f(),s()};let u=null;const a=()=>{u!=null&&clearTimeout(u),u=setTimeout(()=>{u=null,m()},e)},b=()=>{u!==null&&(clearTimeout(u),u=null)},s=()=>{b(),n=void 0,t=null},h=()=>{b(),f()},i=function(...T){if(o!=null&&o.aborted)return;n=this,t=T;const p=u==null;a(),c&&p&&f()};return i.schedule=a,i.cancel=s,i.flush=h,o==null||o.addEventListener("abort",s,{once:!0}),i}function v(l,{signal:e}={}){return new Promise((o,r)=>{const n=()=>{r(new E)},t=()=>{clearTimeout(c),n()};if(e!=null&&e.aborted)return n();const c=setTimeout(()=>{e==null||e.removeEventListener("abort",t),o()},l);e==null||e.addEventListener("abort",t,{once:!0})})}function A(l,e,{signal:o,edges:r=["leading","trailing"]}={}){let n=null;const t=w(l,e,{signal:o,edges:r}),c=function(...d){n==null?n=Date.now():Date.now()-n>=e&&(n=Date.now(),t.cancel(),t(...d)),t(...d)};return c.cancel=t.cancel,c.flush=t.flush,c}export{v as d,A as t};
