/*!
 * OverlayScrollbars
 * Version: 2.9.1
 *
 * Copyright (c) Rene Haas | KingSora.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 */
var OverlayScrollbarsGlobal=function(t){"use strict";const e=(t,e)=>{const{o:n,i:r,u:o}=t;let s,i=n;const c=(t,e)=>{const n=i,c=t,l=e||(r?!r(n,c):n!==c);return(l||o)&&(i=c,s=n),[i,l,s]};return[e?t=>c(e(i,s),t):c,t=>[i,!!t,s]]},n="undefined"!=typeof window&&"undefined"!=typeof HTMLElement&&window.document?window:{},r=Math.max,o=Math.min,s=Math.round,i=Math.abs,c=Math.sign,l=n.cancelAnimationFrame,a=n.requestAnimationFrame,u=n.setTimeout,d=n.clearTimeout,p=t=>void 0!==n[t]?n[t]:void 0,y=p("MutationObserver"),h=p("IntersectionObserver"),f=p("ResizeObserver"),v=p("ScrollTimeline"),b=t=>void 0===t,x=t=>null===t,g=t=>"number"==typeof t,w=t=>"string"==typeof t,m=t=>"boolean"==typeof t,$=t=>"function"==typeof t,S=t=>Array.isArray(t),O=t=>"object"==typeof t&&!S(t)&&!x(t),M=t=>{const e=!!t&&t.length,n=g(e)&&e>-1&&e%1==0;return!(!(S(t)||!$(t)&&n)||e>0&&O(t)&&!(e-1 in t))},C=t=>!!t&&t.constructor===Object,D=t=>t instanceof HTMLElement,R=t=>t instanceof Element,T=()=>performance.now(),k=(t,e,n,o,s)=>{let i=0;const c=T(),u=r(0,n),d=n=>{const l=T(),p=l-c>=u,y=n?1:1-(r(0,c+u-l)/u||0),h=(e-t)*($(s)?s(y,y*u,0,1,u):y)+t,f=p||1===y;o&&o(h,y,f),i=f?0:a((()=>d()))};return d(),t=>{l(i),t&&d(t)}};function H(t,e){if(M(t))for(let n=0;n<t.length&&!1!==e(t[n],n,t);n++);else t&&H(Object.keys(t),(n=>e(t[n],n,t)));return t}const A=(t,e)=>t.indexOf(e)>=0,P=(t,e)=>t.concat(e),E=(t,e,n)=>(n||w(e)||!M(e)?t.push(e):Array.prototype.push.apply(t,e),t),L=t=>Array.from(t||[]),I=t=>S(t)?t:!w(t)&&M(t)?L(t):[t],z=t=>!!t&&!t.length,_=t=>L(new Set(t)),j=(t,e,n)=>{H(t,(t=>t&&t.apply(void 0,e||[]))),!n&&(t.length=0)},N="paddingTop",F="paddingRight",V="paddingLeft",K="paddingBottom",Z="marginLeft",B="marginRight",U="marginBottom",W="overflowX",Y="overflowY",X="width",q="height",J="visible",G="hidden",Q="scroll",tt=(t,e,n,r)=>{if(t&&e){let o=!0;return H(n,(n=>{(r?r(t[n]):t[n])!==(r?r(e[n]):e[n])&&(o=!1)})),o}return!1},et=(t,e)=>tt(t,e,["w","h"]),nt=(t,e)=>tt(t,e,["x","y"]),rt=(t,e)=>tt(t,e,["t","r","b","l"]),ot=()=>{},st=(t,...e)=>t.bind(0,...e),it=t=>{let e;const n=t?u:a,r=t?d:l;return[o=>{r(e),e=n((()=>o()),$(t)?t():t)},()=>r(e)]},ct=(t,e)=>{const{_:n,v:r,p:o,S:s}=e||{};let i,c,p,y,h=ot;const f=function(e){h(),d(i),y=i=c=void 0,h=ot,t.apply(this,e)},v=t=>s&&c?s(c,t):t,b=()=>{h!==ot&&f(v(p)||p)},x=function(){const t=L(arguments),e=$(n)?n():n;if(g(e)&&e>=0){const n=$(r)?r():r,s=g(n)&&n>=0,x=e>0?u:a,w=e>0?d:l,m=v(t)||t,S=f.bind(0,m);let O;h(),o&&!y?(S(),y=!0,O=x((()=>y=void 0),e)):(O=x(S,e),s&&!i&&(i=u(b,n))),h=()=>w(O),c=p=m}else f(t)};return x.m=b,x},lt=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),at=t=>t?Object.keys(t):[],ut=(t,e,n,r,o,s,i)=>{const c=[e,n,r,o,s,i];return"object"==typeof t&&!x(t)||$(t)||(t={}),H(c,(e=>{H(e,((n,r)=>{const o=e[r];if(t===o)return!0;const s=S(o);if(o&&C(o)){const e=t[r];let n=e;s&&!S(e)?n=[]:s||C(e)||(n={}),t[r]=ut(n,o)}else t[r]=s?o.slice():o}))})),t},dt=(t,e)=>H(ut({},t),((t,n,r)=>{void 0===t?delete r[n]:e&&t&&C(t)&&(r[n]=dt(t,e))})),pt=t=>!at(t).length,yt=(t,e,n)=>r(t,o(e,n)),ht=t=>_((S(t)?t:(t||"").split(" ")).filter((t=>t))),ft=(t,e)=>t&&t.getAttribute(e),vt=(t,e)=>t&&t.hasAttribute(e),bt=(t,e,n)=>{H(ht(e),(e=>{t&&t.setAttribute(e,String(n||""))}))},xt=(t,e)=>{H(ht(e),(e=>t&&t.removeAttribute(e)))},gt=(t,e)=>{const n=ht(ft(t,e)),r=st(bt,t,e),o=(t,e)=>{const r=new Set(n);return H(ht(t),(t=>{r[e](t)})),L(r).join(" ")};return{O:t=>r(o(t,"delete")),$:t=>r(o(t,"add")),C:t=>{const e=ht(t);return e.reduce(((t,e)=>t&&n.includes(e)),e.length>0)}}},wt=(t,e,n)=>(gt(t,e).O(n),st(mt,t,e,n)),mt=(t,e,n)=>(gt(t,e).$(n),st(wt,t,e,n)),$t=(t,e,n,r)=>(r?mt:wt)(t,e,n),St=(t,e,n)=>gt(t,e).C(n),Ot=t=>gt(t,"class"),Mt=(t,e)=>{Ot(t).O(e)},Ct=(t,e)=>(Ot(t).$(e),st(Mt,t,e)),Dt=(t,e)=>{const n=e?R(e)&&e:document;return n?L(n.querySelectorAll(t)):[]},Rt=(t,e)=>R(t)&&t.matches(e),Tt=t=>Rt(t,"body"),kt=t=>t?L(t.childNodes):[],Ht=t=>t&&t.parentElement,At=(t,e)=>R(t)&&t.closest(e),Pt=t=>(t||document).activeElement,Et=t=>{H(I(t),(t=>{const e=Ht(t);t&&e&&e.removeChild(t)}))},Lt=(t,e)=>st(Et,t&&e&&H(I(e),(e=>{e&&t.appendChild(e)}))),It=t=>{const e=document.createElement("div");return bt(e,"class",t),e},zt=t=>{const e=It();return e.innerHTML=t.trim(),H(kt(e),(t=>Et(t)))},_t=(t,e)=>t.getPropertyValue(e)||t[e]||"",jt=t=>{const e=t||0;return isFinite(e)?e:0},Nt=t=>jt(parseFloat(t||"")),Ft=t=>Math.round(1e4*t)/1e4,Vt=t=>`${Ft(jt(t))}px`;function Kt(t,e){t&&e&&H(e,((e,n)=>{try{const r=t.style,o=x(e)||m(e)?"":g(e)?Vt(e):e;0===n.indexOf("--")?r.setProperty(n,o):r[n]=o}catch(r){}}))}function Zt(t,e,r){const o=w(e);let s=o?"":{};if(t){const i=n.getComputedStyle(t,r)||t.style;s=o?_t(i,e):L(e).reduce(((t,e)=>(t[e]=_t(i,e),t)),s)}return s}const Bt=(t,e,n)=>{const r=e?`${e}-`:"",o=n?`-${n}`:"",s=`${r}top${o}`,i=`${r}right${o}`,c=`${r}bottom${o}`,l=`${r}left${o}`,a=Zt(t,[s,i,c,l]);return{t:Nt(a[s]),r:Nt(a[i]),b:Nt(a[c]),l:Nt(a[l])}},Ut=(t,e)=>`translate${O(t)?`(${t.x},${t.y})`:`${e?"X":"Y"}(${t})`}`,Wt={w:0,h:0},Yt=(t,e)=>e?{w:e[`${t}Width`],h:e[`${t}Height`]}:Wt,Xt=t=>Yt("inner",t||n),qt=st(Yt,"offset"),Jt=st(Yt,"client"),Gt=st(Yt,"scroll"),Qt=t=>{const e=parseFloat(Zt(t,X))||0,n=parseFloat(Zt(t,q))||0;return{w:e-s(e),h:n-s(n)}},te=t=>t.getBoundingClientRect(),ee=t=>!(!t||!t[q]&&!t[X]),ne=(t,e)=>{const n=ee(t);return!ee(e)&&n},re=(t,e,n,r)=>{H(ht(e),(e=>{t&&t.removeEventListener(e,n,r)}))},oe=(t,e,n,r)=>{var o;const s=null==(o=r&&r.H)||o,i=r&&r.I||!1,c=r&&r.A||!1,l={passive:s,capture:i};return st(j,ht(e).map((e=>{const r=c?o=>{re(t,e,r,i),n&&n(o)}:n;return t&&t.addEventListener(e,r,l),st(re,t,e,r,i)})))},se=t=>t.stopPropagation(),ie=t=>t.preventDefault(),ce=t=>se(t)||ie(t),le=(t,e)=>{const{x:n,y:r}=g(e)?{x:e,y:e}:e||{};g(n)&&(t.scrollLeft=n),g(r)&&(t.scrollTop=r)},ae=t=>({x:t.scrollLeft,y:t.scrollTop}),ue=(t,e)=>{const{D:n,T:r}=t,{w:o,h:s}=e,l=(t,e,n)=>{let r=c(t)*n,o=c(e)*n;if(r===o){const n=i(t),s=i(e);o=n>s?0:o,r=n<s?0:r}return r=r===o?0:r,[r+0,o+0]},[a,u]=l(n.x,r.x,o),[d,p]=l(n.y,r.y,s);return{D:{x:a,y:d},T:{x:u,y:p}}},de=({D:t,T:e})=>{const n=(t,e)=>0===t&&t<=e;return{x:n(t.x,e.x),y:n(t.y,e.y)}},pe=({D:t,T:e},n)=>{const r=(t,e,n)=>yt(0,1,(t-n)/(t-e)||0);return{x:r(t.x,e.x,n.x),y:r(t.y,e.y,n.y)}},ye=t=>{t&&t.focus&&t.focus({preventScroll:!0})},he=(t,e)=>{H(I(e),t)},fe=t=>{const e=new Map,n=(t,n)=>{if(t){const r=e.get(t);he((t=>{r&&r[t?"delete":"clear"](t)}),n)}else e.forEach((t=>{t.clear()})),e.clear()},r=(t,o)=>{if(w(t)){const r=e.get(t)||new Set;return e.set(t,r),he((t=>{$(t)&&r.add(t)}),o),st(n,t,o)}m(o)&&o&&n();const s=at(t),i=[];return H(s,(e=>{const n=t[e];n&&E(i,r(e,n))})),st(j,i)};return r(t||{}),[r,n,(t,n)=>{H(L(e.get(t)),(t=>{n&&!z(n)?t.apply(0,n):t()}))}]},ve=t=>JSON.stringify(t,((t,e)=>{if($(e))throw 0;return e})),be=(t,e)=>t?`${e}`.split(".").reduce(((t,e)=>t&&lt(t,e)?t[e]:void 0),t):void 0,xe={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:[0,33],attributes:null,ignoreMutation:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-dark",visibility:"auto",autoHide:"never",autoHideDelay:1300,autoHideSuspend:!1,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}},ge=(t,e)=>{const n={};return H(P(at(e),at(t)),(r=>{const o=t[r],s=e[r];if(O(o)&&O(s))ut(n[r]={},ge(o,s)),pt(n[r])&&delete n[r];else if(lt(e,r)&&s!==o){let t=!0;if(S(o)||S(s))try{ve(o)===ve(s)&&(t=!1)}catch(i){}t&&(n[r]=s)}})),n},we=(t,e,n)=>r=>[be(t,r),n||void 0!==be(e,r)],me=`data-overlayscrollbars`,$e="os-environment",Se=`${$e}-scrollbar-hidden`,Oe=`${me}-initialize`,Me="noClipping",Ce=`${me}-body`,De=me,Re="host",Te=`${me}-viewport`,ke=W,He=Y,Ae="arrange",Pe="measuring",Ee="scrolling",Le="scrollbarHidden",Ie="noContent",ze=`${me}-padding`,_e=`${me}-content`,je="os-size-observer",Ne=`${je}-appear`,Fe=`${je}-listener`,Ve=`${Fe}-scroll`,Ke=`${Fe}-item`,Ze=`${Ke}-final`,Be="os-trinsic-observer",Ue="os-theme-none",We="os-scrollbar",Ye=`${We}-rtl`,Xe=`${We}-horizontal`,qe=`${We}-vertical`,Je=`${We}-track`,Ge=`${We}-handle`,Qe=`${We}-visible`,tn=`${We}-cornerless`,en=`${We}-interaction`,nn=`${We}-unusable`,rn=`${We}-auto-hide`,on=`${rn}-hidden`,sn=`${We}-wheel`,cn=`${Je}-interactive`,ln=`${Ge}-interactive`;let an,un;const dn=()=>(un||(un=(()=>{const t=(t,e,n)=>{Lt(document.body,t),Lt(document.body,t);const r=Jt(t),o=qt(t),s=Qt(e);return n&&Et(t),{x:o.h-r.h+s.h,y:o.w-r.w+s.w}},r=zt(`<div class="${$e}"><div></div><style>${`.${$e}{scroll-behavior:auto!important;position:fixed;opacity:0;visibility:hidden;overflow:scroll;height:200px;width:200px;z-index:-1}.${$e} div{width:200%;height:200%;margin:10px 0}.${Se}{scrollbar-width:none!important}.${Se}::-webkit-scrollbar,.${Se}::-webkit-scrollbar-corner{appearance:none!important;display:none!important;width:0!important;height:0!important}`}</style></div>`)[0],o=r.firstChild,s=r.lastChild,i=an;i&&(s.nonce=i);const[c,,l]=fe(),[a,u]=e({o:t(r,o),i:nt},st(t,r,o,!0)),[d]=u(),p=(t=>{let e=!1;const n=Ct(t,Se);try{e="none"===Zt(t,"scrollbar-width")||"none"===Zt(t,"display","::-webkit-scrollbar")}catch(r){}return n(),e})(r),y={x:0===d.x,y:0===d.y},h={elements:{host:null,padding:!p,viewport:t=>p&&Tt(t)&&t,content:!1},scrollbars:{slot:!0},cancel:{nativeScrollbarsOverlaid:!1,body:null}},f=ut({},xe),b=st(ut,{},f),x=st(ut,{},h),g={M:d,k:y,R:p,V:!!v,L:st(c,"r"),U:x,P:t=>ut(h,t)&&x(),N:b,q:t=>ut(f,t)&&b(),j:ut({},h),B:ut({},f)};if(xt(r,"style"),Et(r),oe(n,"resize",(()=>{l("r",[])})),$(n.matchMedia)&&!p&&(!y.x||!y.y)){const t=e=>{const r=n.matchMedia(`(resolution: ${n.devicePixelRatio}dppx)`);oe(r,"change",(()=>{e(),t(e)}),{A:!0})};t((()=>{const[t,e]=a();ut(g.M,t),l("r",[e])}))}return g})()),un),pn=(t,e)=>$(e)?e.apply(0,t):e,yn=(t,e,n,r)=>{const o=b(r)?n:r;return pn(t,o)||e.apply(0,t)},hn=(t,e,n,r)=>{const o=b(r)?n:r,s=pn(t,o);return!!s&&(D(s)?s:e.apply(0,t))},fn=new WeakMap,vn=t=>fn.get(t),bn=(t,e,n,r)=>{let o=!1;const{F:s,X:i,Y:c,W:l,G:a,J:u}=r||{},d=ct((()=>o&&n(!0)),{_:33,v:99}),[p,h]=((t,e,n)=>{let r=!1;const o=!!n&&new WeakMap,s=s=>{if(o&&n){const i=n.map((e=>{const[n,r]=e||[];return[r&&n?(s||Dt)(n,t):[],r]}));H(i,(n=>H(n[0],(s=>{const i=n[1],c=o.get(s)||[];if(t.contains(s)&&i){const t=oe(s,i,(n=>{r?(t(),o.delete(s)):e(n)}));o.set(s,E(c,t))}else j(c),o.delete(s)}))))}};return s(),[()=>{r=!0},s]})(t,d,c),f=i||[],v=P(s||[],f),b=(o,s)=>{if(!z(s)){const i=a||ot,c=u||ot,d=[],p=[];let y=!1,v=!1;if(H(s,(n=>{const{attributeName:o,target:s,type:a,oldValue:u,addedNodes:h,removedNodes:b}=n,x="attributes"===a,g="childList"===a,m=t===s,$=x&&o,S=$&&ft(s,o||""),O=w(S)?S:null,M=$&&u!==O,C=A(f,o)&&M;if(e&&(g||!m)){const e=x&&M,a=e&&l&&Rt(s,l),p=(a?!i(s,o,u,O):!x||e)&&!c(n,!!a,t,r);H(h,(t=>E(d,t))),H(b,(t=>E(d,t))),v=v||p}!e&&m&&M&&!i(s,o,u,O)&&(E(p,o),y=y||C)})),h((t=>_(d).reduce(((e,n)=>(E(e,Dt(t,n)),Rt(n,t)?E(e,n):e)),[]))),e)return!o&&v&&n(!1),[!1];if(!z(p)||y){const t=[_(p),y];return!o&&n.apply(0,t),t}}},x=new y(st(b,!1));return[()=>(x.observe(t,{attributes:!0,attributeOldValue:!0,attributeFilter:v,subtree:e,childList:e,characterData:e}),o=!0,()=>{o&&(p(),x.disconnect(),o=!1)}),()=>{if(o)return d.m(),b(!0,x.takeRecords())}]},xn={},gn={},wn=(t,e,n)=>at(t).map((r=>{const{static:o,instance:s}=t[r],[i,c,l]=n||[],a=n?s:o;if(a){const t=n?a(i,c,e):a(e);return(l||gn)[r]=t}})),mn=t=>gn[t],$n="__osOptionsValidationPlugin",Sn="__osSizeObserverPlugin",On=(()=>({[Sn]:{static:()=>(t,e,n)=>{const r=3333333,o="scroll",s=zt(`<div class="${Ke}" dir="ltr"><div class="${Ke}"><div class="${Ze}"></div></div><div class="${Ke}"><div class="${Ze}" style="width: 200%; height: 200%"></div></div></div>`),i=s[0],c=i.lastChild,u=i.firstChild,d=null==u?void 0:u.firstChild;let p,y=qt(i),h=y,f=!1;const v=()=>{le(u,r),le(c,r)},b=t=>{p=0,f&&(y=h,e(!0===t))},x=t=>{h=qt(i),f=!t||!et(h,y),t?(se(t),f&&!p&&(l(p),p=a(b))):b(!1===t),v()},g=[Lt(t,s),oe(u,o,x),oe(c,o,x)];return Ct(t,Ve),Kt(d,{[X]:r,[q]:r}),a(v),[n?st(x,!1):v,g]}}}))(),Mn=(t,e)=>{const{k:n}=e,[r,o]=t("showNativeOverlaidScrollbars");return[r&&n.x&&n.y,o]},Cn=t=>0===t.indexOf(J),Dn=(t,e)=>{const n=(t,e,n,r)=>{const o=t===J?G:t.replace(`${J}-`,""),s=Cn(t),i=Cn(n);return e||r?s&&i?J:s?e&&r?o:e?J:G:e?o:i&&r?J:G:G},r={x:n(e.x,t.x,e.y,t.y),y:n(e.y,t.y,e.x,t.x)};return{K:r,Z:{x:r.x===Q,y:r.y===Q}}},Rn="__osScrollbarsHidingPlugin",Tn=(()=>({[Rn]:{static:()=>({tt:(t,e,n,r,o)=>{const{nt:s,ot:i}=t,{R:c,k:l,M:a}=r,u=!s&&!c&&(l.x||l.y),[d]=Mn(o,r),p=t=>{const{Z:e}=t,n=c||d?0:42,r=(t,e,r)=>[e&&!c?t?n:r:0,t&&!!n],[o,s]=r(l.x,e.x,a.x),[i,u]=r(l.y,e.y,a.y);return{st:{x:o,y:i},et:{x:s,y:u}}},y=(t,{ct:n},r)=>{if(!s){const o=ut({},{[B]:0,[U]:0,[Z]:0}),{st:s,et:i}=p(t),{x:c,y:l}=i,{x:a,y:u}=s,{rt:d}=e,y=n?Z:B,h=n?V:F,f=d[y],v=d[U],b=d[h],x=d[K];return o[X]=`calc(100% + ${u+-1*f}px)`,o[y]=-u+f,o[U]=-a+v,r&&(o[h]=b+(l?u:0),o[K]=x+(c?a:0)),o}};return{lt:p,it:(t,r,o)=>{if(u){const{rt:s}=e,{st:c,et:l}=p(t),{x:a,y:u}=l,{x:d,y}=c,{ct:h}=n,f=s[h?F:V],v=s.paddingTop,b=r.w+o.w,x=r.h+o.h,g={w:y&&u?`${y+b-f}px`:"",h:d&&a?`${d+x-v}px`:""};Kt(i,{"--os-vaw":g.w,"--os-vah":g.h})}return u},ut:t=>{if(u){const r=t||(()=>{const t=t=>{const e=Zt(i,t);return[e,e===Q]},[e,n]=t(W),[r,o]=t(Y);return{K:{x:e,y:r},Z:{x:n,y:o}}})(),{rt:o}=e,{et:s}=p(r),{x:c,y:l}=s,a={},d=t=>H(t,(t=>{a[t]=o[t]}));c&&d([U,N,K]),l&&d([Z,B,V,F]);const h=Zt(i,at(a)),f=wt(i,Te,Ae);return Kt(i,a),[()=>{Kt(i,ut({},h,y(r,n,u))),f()},r]}return[ot]},_t:y}}})}}))(),kn="__osClickScrollPlugin",Hn=(()=>({[kn]:{static:()=>(t,e,n,r,o)=>{let s=!1,i=ot,c=ot;const[l,a]=it(133),u=(i,a,d)=>k(i,i+r*Math.sign(n),a?133:222,((n,i,d)=>{t(n);const p=e(),y=()=>{c=u(n,a+1)};s||!d||o>=p&&o<=p+r||(a?y():l(y))}),d);return i=u(0,0,(t=>1-(1-t)*(1-t))),t=>{s=!0,a(),t?(i(),c()):c()}}}}))(),An=(t,n,r)=>{const{dt:o}=r||{},s=mn(Sn),[i]=e({o:!1,u:!0});return()=>{const e=[],r=zt(`<div class="${je}"><div class="${Fe}"></div></div>`)[0],c=r.firstChild,l=t=>{let e=!1,r=!1;if(t instanceof ResizeObserverEntry){const[n,,o]=i(t.contentRect),s=ee(n);r=ne(n,o),e=!r&&!s}else r=!0===t;e||n({ft:!0,dt:r})};if(f){const t=new f((t=>l(t.pop())));t.observe(c),E(e,(()=>{t.disconnect()}))}else{if(!s)return ot;{const[t,n]=s(c,l,o);E(e,P([Ct(r,Ne),oe(r,"animationstart",t)],n))}}return st(j,E(e,Lt(t,r)))}},Pn=(t,n)=>{let r;const o=It(Be),[s]=e({o:!1}),i=(t,e)=>{if(t){const r=s((t=>0===t.h||t.isIntersecting||t.intersectionRatio>0)(t)),[,o]=r;return o&&!e&&n(r)&&[r]}},c=(t,e)=>i(e.pop(),t);return[()=>{const e=[];if(h)r=new h(st(c,!1),{root:t}),r.observe(o),E(e,(()=>{r.disconnect()}));else{const t=()=>{const t=qt(o);i(t)};E(e,An(o,t)()),t()}return st(j,E(e,Lt(t,o)))},()=>r&&c(!0,r.takeRecords())]},En=(t,n,r,o)=>{let s,i,c,l,a,u;const d=`[${De}]`,p=`[${Te}]`,y=["id","class","style","open","wrap","cols","rows"],{vt:h,gt:v,ot:b,ht:x,bt:w,nt:m,wt:O,yt:M,St:C,Ot:D}=t,T=t=>"rtl"===Zt(t,"direction"),k={$t:!1,ct:T(h)},H=dn(),A=mn(Rn),[E]=e({i:et,o:{w:0,h:0}},(()=>{const e=A&&A.tt(t,n,k,H,r).ut,o=!(O&&m)&&St(v,De,Me),s=!m&&M(Ae),i=s&&ae(x),c=i&&D(),l=C(Pe,o),a=s&&e&&e()[0],u=Gt(b),d=Qt(b);return a&&a(),le(x,i),c&&c(),o&&l(),{w:u.w+d.w,h:u.h+d.h}})),L=ct(o,{_:()=>s,v:()=>i,S(t,e){const[n]=t,[r]=e;return[P(at(n),at(r)).reduce(((t,e)=>(t[e]=n[e]||r[e],t)),{})]}}),I=t=>{const e=T(h);ut(t,{Ct:u!==e}),ut(k,{ct:e}),u=e},z=(t,e)=>{const[n,r]=t,s={xt:r};return ut(k,{$t:n}),!e&&o(s),s},_=({ft:t,dt:e})=>{const n=t&&!e||!H.R?o:L,r={ft:t||e,dt:e};I(r),n(r)},j=(t,e)=>{const[,n]=E(),r={Ht:n};return I(r),n&&!e&&(t?o:L)(r),r},N=(t,e,n)=>{const r={Et:e};return I(r),e&&!n&&L(r),r},[F,V]=w?Pn(v,z):[],K=!m&&An(v,_,{dt:!0}),[Z,B]=bn(v,!1,N,{X:y,F:y}),U=m&&f&&new f((t=>{const e=t[t.length-1].contentRect;_({ft:!0,dt:ne(e,a)}),a=e})),W=ct((()=>{const[,t]=E();o({Ht:t})}),{_:222,p:!0});return[()=>{U&&U.observe(v);const t=K&&K(),e=F&&F(),n=Z(),r=H.L((t=>{t?L({zt:t}):W()}));return()=>{U&&U.disconnect(),t&&t(),e&&e(),l&&l(),n(),r()}},({It:t,At:e,Dt:n})=>{const r={},[o]=t("update.ignoreMutation"),[a,u]=t("update.attributes"),[h,f]=t("update.elementEvents"),[v,x]=t("update.debounce"),O=e||n;if(f||u){c&&c(),l&&l();const[t,e]=bn(w||b,!0,j,{F:P(y,a||[]),Y:h,W:d,J:(t,e)=>{const{target:n,attributeName:r}=t;return!(e||!r||m)&&((t,e,n)=>{const r=At(t,e),o=t&&((t,e)=>{const n=e?R(e)&&e:document;return n&&n.querySelector(t)})(n,r),s=At(o,e)===r;return!(!r||!o)&&(r===t||o===t||s&&At(At(t,n),e)!==r)})(n,d,p)||!!At(n,`.${We}`)||!!(t=>$(o)&&o(t))(t)}});l=t(),c=e}if(x)if(L.m(),S(v)){const t=v[0],e=v[1];s=g(t)&&t,i=g(e)&&e}else g(v)?(s=v,i=!1):(s=!1,i=!1);if(O){const t=B(),e=V&&V(),n=c&&c();t&&ut(r,N(t[0],t[1],O)),e&&ut(r,z(e[0],O)),n&&ut(r,j(n[0],O))}return I(r),r},k]},Ln=(t,e,n,r)=>{const o="--os-viewport-percent",s="--os-scroll-percent",i="--os-scroll-direction",{U:c}=dn(),{scrollbars:l}=c(),{slot:a}=l,{vt:u,gt:d,ot:p,Tt:y,ht:h,wt:f,nt:b}=e,{scrollbars:x}=y?{}:t,{slot:g}=x||{},w=[],$=[],S=[],O=hn([u,d,p],(()=>b&&f?u:d),a,g),M=t=>{if(v){const e=new v({source:h,axis:t}),n=t=>{const n=t.Mt.animate({clear:["left"],[s]:[0,1]},{timeline:e});return()=>n.cancel()};return{kt:n}}},C={x:M("x"),y:M("y")},D=(t,e,n)=>{const r=n?Ct:Mt;H(t,(t=>{r(t.Mt,e)}))},R=(t,e)=>{H(t,(t=>{const[n,r]=e(t);Kt(n,r)}))},T=(t,e,n)=>{const r=m(n),o=!r||!n;(!r||n)&&D($,t,e),o&&D(S,t,e)},k=t=>{const e=t?"x":"y",n=It(`${We} ${t?Xe:qe}`),o=It(Je),s=It(Ge),i={Mt:n,Ut:o,Pt:s},c=C[e];return E(t?$:S,i),E(w,[Lt(n,o),Lt(o,s),st(Et,n),c&&c.kt(i),r(i,T,t)]),i},A=st(k,!0),P=st(k,!1);return A(),P(),[{Nt:()=>{const t=(()=>{const{Rt:t,Vt:e}=n,r=(t,e)=>yt(0,1,t/(t+e)||0);return{x:r(e.x,t.x),y:r(e.y,t.y)}})(),e=t=>e=>[e.Mt,{[o]:Ft(t)+""}];R($,e(t.x)),R(S,e(t.y))},qt:()=>{if(!v){const{Lt:t}=n,e=pe(t,ae(h)),r=t=>e=>[e.Mt,{[s]:Ft(t)+""}];R($,r(e.x)),R(S,r(e.y))}},jt:()=>{const{Lt:t}=n,e=de(t),r=t=>e=>[e.Mt,{[i]:t?"0":"1"}];R($,r(e.x)),R(S,r(e.y))},Bt:()=>{if(b&&!f){const{Rt:t,Lt:e}=n,r=de(e),o=pe(e,ae(h)),s=e=>{const{Mt:n}=e,s=Ht(n)===p&&n,i=(t,e,n)=>{const r=e*t;return Vt(n?r:-r)};return[s,s&&{transform:Ut({x:i(o.x,t.x,r.x),y:i(o.y,t.y,r.y)})}]};R($,s),R(S,s)}},Ft:T,Xt:{Yt:$,Wt:A,Gt:st(R,$)},Jt:{Yt:S,Wt:P,Gt:st(R,S)}},()=>(Lt(O,$[0].Mt),Lt(O,S[0].Mt),st(j,w))]},In=(t,e,n,r)=>(o,c,l)=>{const{gt:a,ot:d,nt:p,ht:y,Kt:h,Ot:f}=e,{Mt:v,Ut:b,Pt:x}=o,[g,w]=it(333),[m,S]=it(444),O=t=>{$(y.scrollBy)&&y.scrollBy({behavior:"smooth",left:t.x,top:t.y})};let M=!0;return st(j,[oe(x,"pointermove pointerleave",r),oe(v,"pointerenter",(()=>{c(en,!0)})),oe(v,"pointerleave pointercancel",(()=>{c(en,!1)})),!p&&oe(v,"mousedown",(()=>{const t=Pt();(vt(t,Te)||vt(t,De)||t===document.body)&&u(st(ye,d),25)})),oe(v,"wheel",(t=>{const{deltaX:e,deltaY:n,deltaMode:r}=t;M&&0===r&&Ht(v)===a&&O({x:e,y:n}),M=!1,c(sn,!0),g((()=>{M=!0,c(sn)})),ie(t)}),{H:!1,I:!0}),oe(v,"pointerdown",st(oe,h,"click",ce,{A:!0,I:!0,H:!1}),{I:!0}),(()=>{const e="pointerup pointercancel lostpointercapture",r=`client${l?"X":"Y"}`,o=l?X:q,c=l?"left":"top",a=l?"w":"h",u=l?"x":"y",d=(t,e)=>r=>{const{Rt:o}=n,s=qt(b)[a]-qt(x)[a],i=e*r/s*o[u];le(y,{[u]:t+i})},p=[];return oe(b,"pointerdown",(n=>{const l=At(n.target,`.${Ge}`)===x,v=l?x:b,g=t.scrollbars,{button:w,isPrimary:$,pointerType:M}=n,{pointers:C}=g;if(0===w&&$&&g[l?"dragScroll":"clickScroll"]&&(C||[]).includes(M)){j(p),S();const t=!l&&n.shiftKey,g=st(te,x),w=st(te,b),$=(t,e)=>(t||g())[c]-(e||w())[c],M=s(te(y)[o])/qt(y)[a]||1,C=d(ae(y)[u],1/M),D=n[r],R=g(),T=w(),k=R[o],H=$(R,T)+k/2,A=D-T[c],P=l?0:A-H,L=t=>{j(z),v.releasePointerCapture(t.pointerId)},I=f(),z=[()=>{const t=ae(y);I();const e=ae(y),n={x:e.x-t.x,y:e.y-t.y};(i(n.x)>3||i(n.y)>3)&&(f(),le(y,t),O(n),m(I))},oe(h,e,L),oe(h,"selectstart",(t=>ie(t)),{H:!1}),oe(b,e,L),oe(b,"pointermove",(e=>{const n=e[r]-D;(l||t)&&C(P+n)}))];if(v.setPointerCapture(n.pointerId),t)C(P);else if(!l){const t=mn(kn);if(t){const e=t(C,$,P,k,A);E(z,st(e)),E(p,st(e,!0))}}}}))})(),w,S])},zn=t=>{const e=dn(),{U:r,R:o}=e,{elements:s}=r(),{padding:i,viewport:c,content:l}=s,a=D(t),u=a?{}:t,{elements:d}=u,{padding:p,viewport:y,content:h}=d||{},f=a?t:u.target,v=Tt(f),b=f.ownerDocument,x=b.documentElement,g=()=>b.defaultView||n,w=st(yn,[f]),m=st(hn,[f]),$=st(It,""),S=st(w,$,c),O=st(m,$,l),M=S(y),C=M===f,R=C&&v,T=!C&&O(h),k=!C&&M===T,H=R?x:M,P=R?H:f,L=!C&&m($,i,p),I=!k&&T,z=[I,H,L,P].map((t=>D(t)&&!Ht(t)&&t)),_=t=>t&&A(z,t),N=!_(H)&&(t=>{const e=qt(t),n=Gt(t),r=Zt(t,W),o=Zt(t,Y);return n.w-e.w>0&&!Cn(r)||n.h-e.h>0&&!Cn(o)})(H)?H:f,F=R?x:H,V={vt:f,gt:P,ot:H,ln:L,bt:I,ht:F,Qt:R?b:H,an:v?x:N,Kt:b,wt:v,Tt:a,nt:C,un:g,yt:t=>St(H,Te,t),St:(t,e)=>$t(H,Te,t,e),Ot:()=>$t(F,Te,Ee,!0)},{vt:K,gt:Z,ln:B,ot:U,bt:X}=V,q=[()=>{xt(Z,[De,Oe]),xt(K,Oe),v&&xt(x,[Oe,De])}];let J=kt([X,U,B,Z,K].find((t=>t&&!_(t))));const G=R?K:X||U,Q=st(j,q);return[V,()=>{const t=g(),e=Pt(),n=t=>{Lt(Ht(t),kt(t)),Et(t)},r=t=>oe(t,"focusin focusout focus blur",ce,{I:!0,H:!1}),s="tabindex",i=ft(U,s),c=r(e);return bt(Z,De,C?"":Re),bt(B,ze,""),bt(U,Te,""),bt(X,_e,""),C||(bt(U,s,i||"-1"),v&&bt(x,Ce,"")),Lt(G,J),Lt(Z,B),Lt(B||Z,!C&&U),Lt(U,X),E(q,[c,()=>{const t=Pt(),e=_(U),o=e&&t===U?K:t,c=r(o);xt(B,ze),xt(X,_e),xt(U,Te),v&&xt(x,Ce),i?bt(U,s,i):xt(U,s),_(X)&&n(X),e&&n(U),_(B)&&n(B),ye(o),c()}]),o&&!C&&(mt(U,Te,Le),E(q,st(xt,U,Te))),ye(!C&&v&&e===K&&t.top===t?U:e),c(),J=0,Q},Q]},_n=({bt:t})=>({Zt:e,_n:n,Dt:r})=>{const{xt:o}=e||{},{$t:s}=n;t&&(o||r)&&Kt(t,{[q]:s&&"100%"})},jn=({gt:t,ln:n,ot:r,nt:o},s)=>{const[i,c]=e({i:rt,o:Bt()},st(Bt,t,"padding",""));return({It:t,Zt:e,_n:l,Dt:a})=>{let[u,d]=c(a);const{R:p}=dn(),{ft:y,Ht:h,Ct:f}=e||{},{ct:v}=l,[b,x]=t("paddingAbsolute");(y||d||a||h)&&([u,d]=i(a));const g=!o&&(x||f||d);if(g){const t=!b||!n&&!p,e=u.r+u.l,o=u.t+u.b,i={[B]:t&&!v?-e:0,[U]:t?-o:0,[Z]:t&&v?-e:0,top:t?-u.t:0,right:t?v?-u.r:"auto":0,left:t?v?"auto":-u.l:0,[X]:t&&`calc(100% + ${e}px)`},c={[N]:t?u.t:0,[F]:t?u.r:0,[K]:t?u.b:0,[V]:t?u.l:0};Kt(n||r,i),Kt(r,c),ut(s,{ln:u,dn:!t,rt:n?c:ut({},i,c)})}return{fn:g}}},Nn=(t,o)=>{const s=dn(),{gt:i,ln:c,ot:l,nt:u,Qt:d,ht:p,wt:y,St:h,un:f}=t,{R:v}=s,b=y&&u,x=st(r,0),g=["display","direction","flexDirection","writingMode"],w={i:et,o:{w:0,h:0}},m={i:nt,o:{}},$=t=>{h(Pe,!b&&t)},S=(t,e)=>{const r=n.devicePixelRatio%1!=0?1:0,o={w:x(t.w-e.w),h:x(t.h-e.h)};return{w:o.w>r?o.w:0,h:o.h>r?o.h:0}},[O,M]=e(w,st(Qt,l)),[C,D]=e(w,st(Gt,l)),[R,T]=e(w),[k]=e(m),[H,A]=e(w),[P]=e(m),[E]=e({i:(t,e)=>tt(t,e,g),o:{}},(()=>(t=>!!t&&(t=>!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))(t))(l)?Zt(l,g):{})),[L,I]=e({i:(t,e)=>nt(t.D,e.D)&&nt(t.T,e.T),o:{D:{x:0,y:0},T:{x:0,y:0}}},(()=>{$(!0);const t=ae(p),e=h(Ie,!0),n=oe(d,Q,(e=>{const n=ae(p);e.isTrusted&&n.x===t.x&&n.y===t.y&&se(e)}),{I:!0,A:!0});le(p,{x:0,y:0}),e();const r=ae(p),o=Gt(p);le(p,{x:o.w,y:o.h});const s=ae(p);le(p,{x:s.x-r.x<1&&-o.w,y:s.y-r.y<1&&-o.h});const i=ae(p);return le(p,t),a((()=>n())),{D:r,T:i}})),z=mn(Rn),_=(t,e)=>`${e?ke:He}${(t=>{const e=String(t||"");return e?e[0].toUpperCase()+e.slice(1):""})(t)}`,j=t=>{const e=t=>[J,G,Q].map((e=>_(e,t))),n=e(!0).concat(e()).join(" ");h(n),h(at(t).map((e=>_(t[e],"x"===e))).join(" "),!0)};return({It:e,Zt:n,_n:r,Dt:a},{fn:u})=>{const{ft:d,Ht:p,Ct:y,dt:g,zt:w}=n||{},m=z&&z.tt(t,o,r,s,e),{it:_,ut:N,_t:F}=m||{},[V,K]=Mn(e,s),[Z,B]=e("overflow"),U=Cn(Z.x),W=Cn(Z.y);let Y=M(a),X=D(a),q=T(a),J=A(a);K&&v&&h(Le,!V);{St(i,De,Me)&&$(!0);const[t]=N?N():[],[e]=Y=O(a),[n]=X=C(a),r=Jt(l),o=b&&Xt(f()),s={w:x(n.w+e.w),h:x(n.h+e.h)},c={w:x((o?o.w:r.w+x(r.w-n.w))+e.w),h:x((o?o.h:r.h+x(r.h-n.h))+e.h)};t&&t(),J=H(c),q=R(S(s,c),a)}const[G,Q]=J,[tt,et]=q,[nt,rt]=X,[ot,st]=Y,[it,ct]=k({x:tt.w>0,y:tt.h>0}),lt=U&&W&&(it.x||it.y)||U&&it.x&&!it.y||W&&it.y&&!it.x,at=u||y||w||st||rt||Q||et||B||K||!0,dt=Dn(it,Z),[pt,yt]=P(dt.K),[,ht]=E(a),ft=y||g||ht||ct||a,[vt,bt]=ft?L(a):I();return at&&(yt&&j(dt.K),F&&_&&Kt(l,F(dt,r,_(dt,nt,ot)))),$(!1),$t(i,De,Me,lt),$t(c,ze,Me,lt),ut(o,{K:pt,Vt:{x:G.w,y:G.h},Rt:{x:tt.w,y:tt.h},rn:it,Lt:ue(vt,tt)}),{en:yt,nn:Q,sn:et,cn:bt||et,vn:ft}}},Fn=t=>{const[e,n,r]=zn(t),o={ln:{t:0,r:0,b:0,l:0},dn:!1,rt:{[B]:0,[U]:0,[Z]:0,[N]:0,[F]:0,[K]:0,[V]:0},Vt:{x:0,y:0},Rt:{x:0,y:0},K:{x:G,y:G},rn:{x:!1,y:!1},Lt:{D:{x:0,y:0},T:{x:0,y:0}}},{vt:s,ht:i,nt:c,Ot:l}=e,{R:a,k:u}=dn(),d=!a&&(u.x||u.y),p=[_n(e),jn(e,o),Nn(e,o)];return[n,t=>{const e={},n=d&&ae(i),r=n&&l();return H(p,(n=>{ut(e,n(t,e)||{})})),le(i,n),r&&r(),!c&&le(s,0),e},o,e,r]},Vn=(t,e,n)=>{const{N:r}=dn(),o=D(t),s=o?t:t.target,i=vn(s);if(e&&!i){let i=!1;const c=[],l={},a=t=>{const e=dt(t,!0),n=mn($n);return n?n(e,!0):e},u=ut({},r(),a(e)),[d,p,y]=fe(),[h,f,v]=fe(n),g=(t,e)=>{v(t,e),y(t,e)},[w,m,$,S,O]=((t,e,n,r,o)=>{let s=!1;const i=we(e,{}),[c,l,a,u,d]=Fn(t),[p,y,h]=En(u,a,i,(t=>{w({},t)})),[f,v,,b]=((t,e,n,r,o,s)=>{let i,c,l,a,u,d=ot,p=0;const y=t=>"mouse"===t.pointerType,[h,f]=it(),[v,b]=it(100),[x,g]=it(100),[w,m]=it((()=>p)),[$,S]=Ln(t,o,r,In(e,o,r,(t=>y(t)&&P()))),{gt:O,Qt:M,wt:C}=o,{Ft:D,Nt:R,qt:T,jt:k,Bt:H}=$,A=(t,e)=>{if(m(),t)D(on);else{const t=st(D,on,!0);p>0&&!e?w(t):t()}},P=()=>{(l?i:a)||(A(!0),v((()=>{A(!1)})))},L=t=>{D(rn,t,!0),D(rn,t,!1)},I=t=>{y(t)&&(i=l,l&&A(!0))},z=[m,b,g,f,()=>d(),oe(O,"pointerover",I,{A:!0}),oe(O,"pointerenter",I),oe(O,"pointerleave",(t=>{y(t)&&(i=!1,l&&A(!1))})),oe(O,"pointermove",(t=>{y(t)&&c&&P()})),oe(M,"scroll",(t=>{h((()=>{T(),P()})),s(t),H()}))];return[()=>st(j,E(z,S())),({It:t,Dt:e,Zt:o,tn:s})=>{const{nn:i,sn:y,en:h,cn:f}=s||{},{Ct:v,dt:b}=o||{},{ct:g}=n,{k:w}=dn(),{K:m,rn:$}=r,[S,O]=t("showNativeOverlaidScrollbars"),[P,E]=t("scrollbars.theme"),[I,z]=t("scrollbars.visibility"),[_,j]=t("scrollbars.autoHide"),[N,F]=t("scrollbars.autoHideSuspend"),[V]=t("scrollbars.autoHideDelay"),[K,Z]=t("scrollbars.dragScroll"),[B,U]=t("scrollbars.clickScroll"),[W,Y]=t("overflow"),X=b&&!e,q=$.x||$.y,G=i||y||f||v||e,tt=h||z||Y,et=S&&w.x&&w.y,nt=(t,e,n)=>{const r=t.includes(Q)&&(I===J||"auto"===I&&e===Q);return D(Qe,r,n),r};if(p=V,X&&(N&&q?(L(!1),d(),x((()=>{d=oe(M,"scroll",st(L,!0),{A:!0})}))):L(!0)),O&&D(Ue,et),E&&(D(u),D(P,!0),u=P),F&&!N&&L(!0),j&&(c="move"===_,l="leave"===_,a="never"===_,A(a,!0)),Z&&D(ln,K),U&&D(cn,B),tt){const t=nt(W.x,m.x,!0),e=nt(W.y,m.y,!1);D(tn,!(t&&e))}G&&(T(),R(),H(),f&&k(),D(nn,!$.x,!0),D(nn,!$.y,!1),D(Ye,g&&!C))},{},$]})(t,e,h,a,u,(t=>g("scroll",[C,t]))),x=t=>at(t).some((e=>!!t[e])),w=(t,o)=>{if(n())return!1;const{pn:i,Dt:c,At:a,gn:u}=t,d=i||{},p=!!c||!s,f={It:we(e,d,p),pn:d,Dt:p};if(u)return v(f),!1;const b=o||y(ut({},f,{At:a})),g=l(ut({},f,{_n:h,Zt:b}));v(ut({},f,{Zt:b,tn:g}));const w=x(b),m=x(g),$=w||m||!pt(d)||p;return s=!0,$&&r(t,{Zt:b,tn:g}),$};return[()=>{const{an:t,ht:e,Ot:n}=u,r=ae(t),o=[p(),c(),f()],s=n();return le(e,r),s(),st(j,o)},w,()=>({hn:h,bn:a}),{wn:u,yn:b},d]})(t,u,(()=>i),(({pn:t,Dt:e},{Zt:n,tn:r})=>{const{ft:o,Ct:s,xt:i,Ht:c,Et:l,dt:a}=n,{nn:u,sn:d,en:p,cn:y}=r;g("updated",[C,{updateHints:{sizeChanged:!!o,directionChanged:!!s,heightIntrinsicChanged:!!i,overflowEdgeChanged:!!u,overflowAmountChanged:!!d,overflowStyleChanged:!!p,scrollCoordinatesChanged:!!y,contentMutation:!!c,hostMutation:!!l,appear:!!a},changedOptions:t||{},force:!!e}])})),M=t=>{(t=>{fn.delete(t)})(s),j(c),i=!0,g("destroyed",[C,t]),p(),f()},C={options(t,e){if(t){const n=e?r():{},o=ge(u,ut(n,a(t)));pt(o)||(ut(u,o),m({pn:o}))}return ut({},u)},on:h,off:(t,e)=>{t&&e&&f(t,e)},state(){const{hn:t,bn:e}=$(),{ct:n}=t,{Vt:r,Rt:o,K:s,rn:c,ln:l,dn:a,Lt:u}=e;return ut({},{overflowEdge:r,overflowAmount:o,overflowStyle:s,hasOverflow:c,scrollCoordinates:{start:u.D,end:u.T},padding:l,paddingAbsolute:a,directionRTL:n,destroyed:i})},elements(){const{vt:t,gt:e,ln:n,ot:r,bt:o,ht:s,Qt:i}=S.wn,{Xt:c,Jt:l}=S.yn,a=t=>{const{Pt:e,Ut:n,Mt:r}=t;return{scrollbar:r,track:n,handle:e}},u=t=>{const{Yt:e,Wt:n}=t,r=a(e[0]);return ut({},r,{clone:()=>{const t=a(n());return m({gn:!0}),t}})};return ut({},{target:t,host:e,padding:n||r,viewport:r,content:o||r,scrollOffsetElement:s,scrollEventElement:i,scrollbarHorizontal:u(c),scrollbarVertical:u(l)})},update:t=>m({Dt:t,At:!0}),destroy:st(M,!1),plugin:t=>l[at(t)[0]]};return E(c,[O]),((t,e)=>{fn.set(t,e)})(s,C),wn(xn,Vn,[C,d,l]),((t,e)=>{const{nativeScrollbarsOverlaid:n,body:r}=e||{},{k:o,R:s,U:i}=dn(),{nativeScrollbarsOverlaid:c,body:l}=i().cancel,a=null!=n?n:c,u=b(r)?l:r,d=(o.x||o.y)&&a,p=t&&(x(u)?!s:u);return!!d||!!p})(S.wn.wt,!o&&t.cancel)?(M(!0),C):(E(c,w()),g("initialized",[C]),C.update(),C)}return i};return Vn.plugin=t=>{const e=S(t),n=e?t:[t],r=n.map((t=>wn(t,Vn)[0]));return(t=>{H(t,(t=>H(t,((e,n)=>{xn[n]=t[n]}))))})(n),e?r:r[0]},Vn.valid=t=>{const e=t&&t.elements,n=$(e)&&e();return C(n)&&!!vn(n.target)},Vn.env=()=>{const{M:t,k:e,R:n,V:r,j:o,B:s,U:i,P:c,N:l,q:a}=dn();return ut({},{scrollbarsSize:t,scrollbarsOverlaid:e,scrollbarsHiding:n,scrollTimeline:r,staticDefaultInitialization:o,staticDefaultOptions:s,getDefaultInitialization:i,setDefaultInitialization:c,getDefaultOptions:l,setDefaultOptions:a})},Vn.nonce=t=>{an=t},t.ClickScrollPlugin=Hn,t.OverlayScrollbars=Vn,t.ScrollbarsHidingPlugin=Tn,t.SizeObserverPlugin=On,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),t}({});
/**
 * @popperjs/core v2.11.8 - MIT License
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).Popper={})}(this,(function(e){"use strict";function t(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function n(e){return e instanceof t(e).Element||e instanceof Element}function r(e){return e instanceof t(e).HTMLElement||e instanceof HTMLElement}function o(e){return"undefined"!=typeof ShadowRoot&&(e instanceof t(e).ShadowRoot||e instanceof ShadowRoot)}var i=Math.max,a=Math.min,s=Math.round;function f(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function c(){return!/^((?!chrome|android).)*safari/i.test(f())}function p(e,o,i){void 0===o&&(o=!1),void 0===i&&(i=!1);var a=e.getBoundingClientRect(),f=1,p=1;o&&r(e)&&(f=e.offsetWidth>0&&s(a.width)/e.offsetWidth||1,p=e.offsetHeight>0&&s(a.height)/e.offsetHeight||1);var u=(n(e)?t(e):window).visualViewport,l=!c()&&i,d=(a.left+(l&&u?u.offsetLeft:0))/f,h=(a.top+(l&&u?u.offsetTop:0))/p,m=a.width/f,v=a.height/p;return{width:m,height:v,top:h,right:d+m,bottom:h+v,left:d,x:d,y:h}}function u(e){var n=t(e);return{scrollLeft:n.pageXOffset,scrollTop:n.pageYOffset}}function l(e){return e?(e.nodeName||"").toLowerCase():null}function d(e){return((n(e)?e.ownerDocument:e.document)||window.document).documentElement}function h(e){return p(d(e)).left+u(e).scrollLeft}function m(e){return t(e).getComputedStyle(e)}function v(e){var t=m(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function y(e,n,o){void 0===o&&(o=!1);var i,a,f=r(n),c=r(n)&&function(e){var t=e.getBoundingClientRect(),n=s(t.width)/e.offsetWidth||1,r=s(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(n),m=d(n),y=p(e,c,o),g={scrollLeft:0,scrollTop:0},b={x:0,y:0};return(f||!f&&!o)&&(("body"!==l(n)||v(m))&&(g=(i=n)!==t(i)&&r(i)?{scrollLeft:(a=i).scrollLeft,scrollTop:a.scrollTop}:u(i)),r(n)?((b=p(n,!0)).x+=n.clientLeft,b.y+=n.clientTop):m&&(b.x=h(m))),{x:y.left+g.scrollLeft-b.x,y:y.top+g.scrollTop-b.y,width:y.width,height:y.height}}function g(e){var t=p(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function b(e){return"html"===l(e)?e:e.assignedSlot||e.parentNode||(o(e)?e.host:null)||d(e)}function x(e){return["html","body","#document"].indexOf(l(e))>=0?e.ownerDocument.body:r(e)&&v(e)?e:x(b(e))}function w(e,n){var r;void 0===n&&(n=[]);var o=x(e),i=o===(null==(r=e.ownerDocument)?void 0:r.body),a=t(o),s=i?[a].concat(a.visualViewport||[],v(o)?o:[]):o,f=n.concat(s);return i?f:f.concat(w(b(s)))}function O(e){return["table","td","th"].indexOf(l(e))>=0}function j(e){return r(e)&&"fixed"!==m(e).position?e.offsetParent:null}function E(e){for(var n=t(e),i=j(e);i&&O(i)&&"static"===m(i).position;)i=j(i);return i&&("html"===l(i)||"body"===l(i)&&"static"===m(i).position)?n:i||function(e){var t=/firefox/i.test(f());if(/Trident/i.test(f())&&r(e)&&"fixed"===m(e).position)return null;var n=b(e);for(o(n)&&(n=n.host);r(n)&&["html","body"].indexOf(l(n))<0;){var i=m(n);if("none"!==i.transform||"none"!==i.perspective||"paint"===i.contain||-1!==["transform","perspective"].indexOf(i.willChange)||t&&"filter"===i.willChange||t&&i.filter&&"none"!==i.filter)return n;n=n.parentNode}return null}(e)||n}var D="top",A="bottom",L="right",P="left",M="auto",k=[D,A,L,P],W="start",B="end",H="viewport",T="popper",R=k.reduce((function(e,t){return e.concat([t+"-"+W,t+"-"+B])}),[]),S=[].concat(k,[M]).reduce((function(e,t){return e.concat([t,t+"-"+W,t+"-"+B])}),[]),V=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function q(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function C(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&o(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function N(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function I(e,r,o){return r===H?N(function(e,n){var r=t(e),o=d(e),i=r.visualViewport,a=o.clientWidth,s=o.clientHeight,f=0,p=0;if(i){a=i.width,s=i.height;var u=c();(u||!u&&"fixed"===n)&&(f=i.offsetLeft,p=i.offsetTop)}return{width:a,height:s,x:f+h(e),y:p}}(e,o)):n(r)?function(e,t){var n=p(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(r,o):N(function(e){var t,n=d(e),r=u(e),o=null==(t=e.ownerDocument)?void 0:t.body,a=i(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=i(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),f=-r.scrollLeft+h(e),c=-r.scrollTop;return"rtl"===m(o||n).direction&&(f+=i(n.clientWidth,o?o.clientWidth:0)-a),{width:a,height:s,x:f,y:c}}(d(e)))}function _(e,t,o,s){var f="clippingParents"===t?function(e){var t=w(b(e)),o=["absolute","fixed"].indexOf(m(e).position)>=0&&r(e)?E(e):e;return n(o)?t.filter((function(e){return n(e)&&C(e,o)&&"body"!==l(e)})):[]}(e):[].concat(t),c=[].concat(f,[o]),p=c[0],u=c.reduce((function(t,n){var r=I(e,n,s);return t.top=i(r.top,t.top),t.right=a(r.right,t.right),t.bottom=a(r.bottom,t.bottom),t.left=i(r.left,t.left),t}),I(e,p,s));return u.width=u.right-u.left,u.height=u.bottom-u.top,u.x=u.left,u.y=u.top,u}function F(e){return e.split("-")[0]}function U(e){return e.split("-")[1]}function z(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function X(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?F(o):null,a=o?U(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case D:t={x:s,y:n.y-r.height};break;case A:t={x:s,y:n.y+n.height};break;case L:t={x:n.x+n.width,y:f};break;case P:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var c=i?z(i):null;if(null!=c){var p="y"===c?"height":"width";switch(a){case W:t[c]=t[c]-(n[p]/2-r[p]/2);break;case B:t[c]=t[c]+(n[p]/2-r[p]/2)}}return t}function Y(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function G(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function J(e,t){void 0===t&&(t={});var r=t,o=r.placement,i=void 0===o?e.placement:o,a=r.strategy,s=void 0===a?e.strategy:a,f=r.boundary,c=void 0===f?"clippingParents":f,u=r.rootBoundary,l=void 0===u?H:u,h=r.elementContext,m=void 0===h?T:h,v=r.altBoundary,y=void 0!==v&&v,g=r.padding,b=void 0===g?0:g,x=Y("number"!=typeof b?b:G(b,k)),w=m===T?"reference":T,O=e.rects.popper,j=e.elements[y?w:m],E=_(n(j)?j:j.contextElement||d(e.elements.popper),c,l,s),P=p(e.elements.reference),M=X({reference:P,element:O,strategy:"absolute",placement:i}),W=N(Object.assign({},O,M)),B=m===T?W:P,R={top:E.top-B.top+x.top,bottom:B.bottom-E.bottom+x.bottom,left:E.left-B.left+x.left,right:B.right-E.right+x.right},S=e.modifiersData.offset;if(m===T&&S){var V=S[i];Object.keys(R).forEach((function(e){var t=[L,A].indexOf(e)>=0?1:-1,n=[D,A].indexOf(e)>=0?"y":"x";R[e]+=V[n]*t}))}return R}var K={placement:"bottom",modifiers:[],strategy:"absolute"};function Q(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function Z(e){void 0===e&&(e={});var t=e,r=t.defaultModifiers,o=void 0===r?[]:r,i=t.defaultOptions,a=void 0===i?K:i;return function(e,t,r){void 0===r&&(r=a);var i,s,f={placement:"bottom",orderedModifiers:[],options:Object.assign({},K,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],p=!1,u={state:f,setOptions:function(r){var i="function"==typeof r?r(f.options):r;l(),f.options=Object.assign({},a,f.options,i),f.scrollParents={reference:n(e)?w(e):e.contextElement?w(e.contextElement):[],popper:w(t)};var s,p,d=function(e){var t=q(e);return V.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((s=[].concat(o,f.options.modifiers),p=s.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(p).map((function(e){return p[e]}))));return f.orderedModifiers=d.filter((function(e){return e.enabled})),f.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:f,name:t,instance:u,options:r}),a=function(){};c.push(i||a)}})),u.update()},forceUpdate:function(){if(!p){var e=f.elements,t=e.reference,n=e.popper;if(Q(t,n)){f.rects={reference:y(t,E(n),"fixed"===f.options.strategy),popper:g(n)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach((function(e){return f.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<f.orderedModifiers.length;r++)if(!0!==f.reset){var o=f.orderedModifiers[r],i=o.fn,a=o.options,s=void 0===a?{}:a,c=o.name;"function"==typeof i&&(f=i({state:f,options:s,name:c,instance:u})||f)}else f.reset=!1,r=-1}}},update:(i=function(){return new Promise((function(e){u.forceUpdate(),e(f)}))},function(){return s||(s=new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(i())}))}))),s}),destroy:function(){l(),p=!0}};if(!Q(e,t))return u;function l(){c.forEach((function(e){return e()})),c=[]}return u.setOptions(r).then((function(e){!p&&r.onFirstUpdate&&r.onFirstUpdate(e)})),u}}var $={passive:!0};var ee={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var n=e.state,r=e.instance,o=e.options,i=o.scroll,a=void 0===i||i,s=o.resize,f=void 0===s||s,c=t(n.elements.popper),p=[].concat(n.scrollParents.reference,n.scrollParents.popper);return a&&p.forEach((function(e){e.addEventListener("scroll",r.update,$)})),f&&c.addEventListener("resize",r.update,$),function(){a&&p.forEach((function(e){e.removeEventListener("scroll",r.update,$)})),f&&c.removeEventListener("resize",r.update,$)}},data:{}};var te={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=X({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},ne={top:"auto",right:"auto",bottom:"auto",left:"auto"};function re(e){var n,r=e.popper,o=e.popperRect,i=e.placement,a=e.variation,f=e.offsets,c=e.position,p=e.gpuAcceleration,u=e.adaptive,l=e.roundOffsets,h=e.isFixed,v=f.x,y=void 0===v?0:v,g=f.y,b=void 0===g?0:g,x="function"==typeof l?l({x:y,y:b}):{x:y,y:b};y=x.x,b=x.y;var w=f.hasOwnProperty("x"),O=f.hasOwnProperty("y"),j=P,M=D,k=window;if(u){var W=E(r),H="clientHeight",T="clientWidth";if(W===t(r)&&"static"!==m(W=d(r)).position&&"absolute"===c&&(H="scrollHeight",T="scrollWidth"),W=W,i===D||(i===P||i===L)&&a===B)M=A,b-=(h&&W===k&&k.visualViewport?k.visualViewport.height:W[H])-o.height,b*=p?1:-1;if(i===P||(i===D||i===A)&&a===B)j=L,y-=(h&&W===k&&k.visualViewport?k.visualViewport.width:W[T])-o.width,y*=p?1:-1}var R,S=Object.assign({position:c},u&&ne),V=!0===l?function(e,t){var n=e.x,r=e.y,o=t.devicePixelRatio||1;return{x:s(n*o)/o||0,y:s(r*o)/o||0}}({x:y,y:b},t(r)):{x:y,y:b};return y=V.x,b=V.y,p?Object.assign({},S,((R={})[M]=O?"0":"",R[j]=w?"0":"",R.transform=(k.devicePixelRatio||1)<=1?"translate("+y+"px, "+b+"px)":"translate3d("+y+"px, "+b+"px, 0)",R)):Object.assign({},S,((n={})[M]=O?b+"px":"",n[j]=w?y+"px":"",n.transform="",n))}var oe={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c={placement:F(t.placement),variation:U(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,re(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,re(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}};var ie={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},o=t.attributes[e]||{},i=t.elements[e];r(i)&&l(i)&&(Object.assign(i.style,n),Object.keys(o).forEach((function(e){var t=o[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var o=t.elements[e],i=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});r(o)&&l(o)&&(Object.assign(o.style,a),Object.keys(i).forEach((function(e){o.removeAttribute(e)})))}))}},requires:["computeStyles"]};var ae={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=S.reduce((function(e,n){return e[n]=function(e,t,n){var r=F(e),o=[P,D].indexOf(r)>=0?-1:1,i="function"==typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[P,L].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],f=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}},se={left:"right",right:"left",bottom:"top",top:"bottom"};function fe(e){return e.replace(/left|right|bottom|top/g,(function(e){return se[e]}))}var ce={start:"end",end:"start"};function pe(e){return e.replace(/start|end/g,(function(e){return ce[e]}))}function ue(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,c=void 0===f?S:f,p=U(r),u=p?s?R:R.filter((function(e){return U(e)===p})):k,l=u.filter((function(e){return c.indexOf(e)>=0}));0===l.length&&(l=u);var d=l.reduce((function(t,n){return t[n]=J(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[F(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}var le={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,c=n.padding,p=n.boundary,u=n.rootBoundary,l=n.altBoundary,d=n.flipVariations,h=void 0===d||d,m=n.allowedAutoPlacements,v=t.options.placement,y=F(v),g=f||(y===v||!h?[fe(v)]:function(e){if(F(e)===M)return[];var t=fe(e);return[pe(e),t,pe(t)]}(v)),b=[v].concat(g).reduce((function(e,n){return e.concat(F(n)===M?ue(t,{placement:n,boundary:p,rootBoundary:u,padding:c,flipVariations:h,allowedAutoPlacements:m}):n)}),[]),x=t.rects.reference,w=t.rects.popper,O=new Map,j=!0,E=b[0],k=0;k<b.length;k++){var B=b[k],H=F(B),T=U(B)===W,R=[D,A].indexOf(H)>=0,S=R?"width":"height",V=J(t,{placement:B,boundary:p,rootBoundary:u,altBoundary:l,padding:c}),q=R?T?L:P:T?A:D;x[S]>w[S]&&(q=fe(q));var C=fe(q),N=[];if(i&&N.push(V[H]<=0),s&&N.push(V[q]<=0,V[C]<=0),N.every((function(e){return e}))){E=B,j=!1;break}O.set(B,N)}if(j)for(var I=function(e){var t=b.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return E=t,"break"},_=h?3:1;_>0;_--){if("break"===I(_))break}t.placement!==E&&(t.modifiersData[r]._skip=!0,t.placement=E,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function de(e,t,n){return i(e,a(t,n))}var he={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,s=void 0===o||o,f=n.altAxis,c=void 0!==f&&f,p=n.boundary,u=n.rootBoundary,l=n.altBoundary,d=n.padding,h=n.tether,m=void 0===h||h,v=n.tetherOffset,y=void 0===v?0:v,b=J(t,{boundary:p,rootBoundary:u,padding:d,altBoundary:l}),x=F(t.placement),w=U(t.placement),O=!w,j=z(x),M="x"===j?"y":"x",k=t.modifiersData.popperOffsets,B=t.rects.reference,H=t.rects.popper,T="function"==typeof y?y(Object.assign({},t.rects,{placement:t.placement})):y,R="number"==typeof T?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),S=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,V={x:0,y:0};if(k){if(s){var q,C="y"===j?D:P,N="y"===j?A:L,I="y"===j?"height":"width",_=k[j],X=_+b[C],Y=_-b[N],G=m?-H[I]/2:0,K=w===W?B[I]:H[I],Q=w===W?-H[I]:-B[I],Z=t.elements.arrow,$=m&&Z?g(Z):{width:0,height:0},ee=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=ee[C],ne=ee[N],re=de(0,B[I],$[I]),oe=O?B[I]/2-G-re-te-R.mainAxis:K-re-te-R.mainAxis,ie=O?-B[I]/2+G+re+ne+R.mainAxis:Q+re+ne+R.mainAxis,ae=t.elements.arrow&&E(t.elements.arrow),se=ae?"y"===j?ae.clientTop||0:ae.clientLeft||0:0,fe=null!=(q=null==S?void 0:S[j])?q:0,ce=_+ie-fe,pe=de(m?a(X,_+oe-fe-se):X,_,m?i(Y,ce):Y);k[j]=pe,V[j]=pe-_}if(c){var ue,le="x"===j?D:P,he="x"===j?A:L,me=k[M],ve="y"===M?"height":"width",ye=me+b[le],ge=me-b[he],be=-1!==[D,P].indexOf(x),xe=null!=(ue=null==S?void 0:S[M])?ue:0,we=be?ye:me-B[ve]-H[ve]-xe+R.altAxis,Oe=be?me+B[ve]+H[ve]-xe-R.altAxis:ge,je=m&&be?function(e,t,n){var r=de(e,t,n);return r>n?n:r}(we,me,Oe):de(m?we:ye,me,m?Oe:ge);k[M]=je,V[M]=je-me}t.modifiersData[r]=V}},requiresIfExists:["offset"]};var me={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=F(n.placement),f=z(s),c=[P,L].indexOf(s)>=0?"height":"width";if(i&&a){var p=function(e,t){return Y("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:G(e,k))}(o.padding,n),u=g(i),l="y"===f?D:P,d="y"===f?A:L,h=n.rects.reference[c]+n.rects.reference[f]-a[f]-n.rects.popper[c],m=a[f]-n.rects.reference[f],v=E(i),y=v?"y"===f?v.clientHeight||0:v.clientWidth||0:0,b=h/2-m/2,x=p[l],w=y-u[c]-p[d],O=y/2-u[c]/2+b,j=de(x,O,w),M=f;n.modifiersData[r]=((t={})[M]=j,t.centerOffset=j-O,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&C(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ve(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ye(e){return[D,L,A,P].some((function(t){return e[t]>=0}))}var ge={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=J(t,{elementContext:"reference"}),s=J(t,{altBoundary:!0}),f=ve(a,r),c=ve(s,o,i),p=ye(f),u=ye(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":u})}},be=Z({defaultModifiers:[ee,te,oe,ie]}),xe=[ee,te,oe,ie,ae,le,he,me,ge],we=Z({defaultModifiers:xe});e.applyStyles=ie,e.arrow=me,e.computeStyles=oe,e.createPopper=we,e.createPopperLite=be,e.defaultModifiers=xe,e.detectOverflow=J,e.eventListeners=ee,e.flip=le,e.hide=ge,e.offset=ae,e.popperGenerator=Z,e.popperOffsets=te,e.preventOverflow=he,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=popper.min.js.map

/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("@popperjs/core")):"function"==typeof define&&define.amd?define(["@popperjs/core"],e):(t="undefined"!=typeof globalThis?globalThis:t||self).bootstrap=e(t.Popper)}(this,(function(t){"use strict";function e(t){const e=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(t)for(const i in t)if("default"!==i){const s=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>t[i]})}return e.default=t,Object.freeze(e)}const i=e(t),s=new Map,n={set(t,e,i){s.has(t)||s.set(t,new Map);const n=s.get(t);n.has(e)||0===n.size?n.set(e,i):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)},get:(t,e)=>s.has(t)&&s.get(t).get(e)||null,remove(t,e){if(!s.has(t))return;const i=s.get(t);i.delete(e),0===i.size&&s.delete(t)}},o="transitionend",r=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,((t,e)=>`#${CSS.escape(e)}`))),t),a=t=>{t.dispatchEvent(new Event(o))},l=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),c=t=>l(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(r(t)):null,h=t=>{if(!l(t)||0===t.getClientRects().length)return!1;const e="visible"===getComputedStyle(t).getPropertyValue("visibility"),i=t.closest("details:not([open])");if(!i)return e;if(i!==t){const e=t.closest("summary");if(e&&e.parentNode!==i)return!1;if(null===e)return!1}return e},d=t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")),u=t=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?u(t.parentNode):null},_=()=>{},g=t=>{t.offsetHeight},f=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,m=[],p=()=>"rtl"===document.documentElement.dir,b=t=>{var e;e=()=>{const e=f();if(e){const i=t.NAME,s=e.fn[i];e.fn[i]=t.jQueryInterface,e.fn[i].Constructor=t,e.fn[i].noConflict=()=>(e.fn[i]=s,t.jQueryInterface)}},"loading"===document.readyState?(m.length||document.addEventListener("DOMContentLoaded",(()=>{for(const t of m)t()})),m.push(e)):e()},v=(t,e=[],i=t)=>"function"==typeof t?t(...e):i,y=(t,e,i=!0)=>{if(!i)return void v(t);const s=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:i}=window.getComputedStyle(t);const s=Number.parseFloat(e),n=Number.parseFloat(i);return s||n?(e=e.split(",")[0],i=i.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(i))):0})(e)+5;let n=!1;const r=({target:i})=>{i===e&&(n=!0,e.removeEventListener(o,r),v(t))};e.addEventListener(o,r),setTimeout((()=>{n||a(e)}),s)},w=(t,e,i,s)=>{const n=t.length;let o=t.indexOf(e);return-1===o?!i&&s?t[n-1]:t[0]:(o+=i?1:-1,s&&(o=(o+n)%n),t[Math.max(0,Math.min(o,n-1))])},A=/[^.]*(?=\..*)\.|.*/,E=/\..*/,C=/::\d+$/,T={};let k=1;const $={mouseenter:"mouseover",mouseleave:"mouseout"},S=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function L(t,e){return e&&`${e}::${k++}`||t.uidEvent||k++}function O(t){const e=L(t);return t.uidEvent=e,T[e]=T[e]||{},T[e]}function I(t,e,i=null){return Object.values(t).find((t=>t.callable===e&&t.delegationSelector===i))}function D(t,e,i){const s="string"==typeof e,n=s?i:e||i;let o=M(t);return S.has(o)||(o=t),[s,n,o]}function N(t,e,i,s,n){if("string"!=typeof e||!t)return;let[o,r,a]=D(e,i,s);if(e in $){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};r=t(r)}const l=O(t),c=l[a]||(l[a]={}),h=I(c,r,o?i:null);if(h)return void(h.oneOff=h.oneOff&&n);const d=L(r,e.replace(A,"")),u=o?function(t,e,i){return function s(n){const o=t.querySelectorAll(e);for(let{target:r}=n;r&&r!==this;r=r.parentNode)for(const a of o)if(a===r)return F(n,{delegateTarget:r}),s.oneOff&&j.off(t,n.type,e,i),i.apply(r,[n])}}(t,i,r):function(t,e){return function i(s){return F(s,{delegateTarget:t}),i.oneOff&&j.off(t,s.type,e),e.apply(t,[s])}}(t,r);u.delegationSelector=o?i:null,u.callable=r,u.oneOff=n,u.uidEvent=d,c[d]=u,t.addEventListener(a,u,o)}function P(t,e,i,s,n){const o=I(e[i],s,n);o&&(t.removeEventListener(i,o,Boolean(n)),delete e[i][o.uidEvent])}function x(t,e,i,s){const n=e[i]||{};for(const[o,r]of Object.entries(n))o.includes(s)&&P(t,e,i,r.callable,r.delegationSelector)}function M(t){return t=t.replace(E,""),$[t]||t}const j={on(t,e,i,s){N(t,e,i,s,!1)},one(t,e,i,s){N(t,e,i,s,!0)},off(t,e,i,s){if("string"!=typeof e||!t)return;const[n,o,r]=D(e,i,s),a=r!==e,l=O(t),c=l[r]||{},h=e.startsWith(".");if(void 0===o){if(h)for(const i of Object.keys(l))x(t,l,i,e.slice(1));for(const[i,s]of Object.entries(c)){const n=i.replace(C,"");a&&!e.includes(n)||P(t,l,r,s.callable,s.delegationSelector)}}else{if(!Object.keys(c).length)return;P(t,l,r,o,n?i:null)}},trigger(t,e,i){if("string"!=typeof e||!t)return null;const s=f();let n=null,o=!0,r=!0,a=!1;e!==M(e)&&s&&(n=s.Event(e,i),s(t).trigger(n),o=!n.isPropagationStopped(),r=!n.isImmediatePropagationStopped(),a=n.isDefaultPrevented());const l=F(new Event(e,{bubbles:o,cancelable:!0}),i);return a&&l.preventDefault(),r&&t.dispatchEvent(l),l.defaultPrevented&&n&&n.preventDefault(),l}};function F(t,e={}){for(const[i,s]of Object.entries(e))try{t[i]=s}catch(e){Object.defineProperty(t,i,{configurable:!0,get:()=>s})}return t}function z(t){if("true"===t)return!0;if("false"===t)return!1;if(t===Number(t).toString())return Number(t);if(""===t||"null"===t)return null;if("string"!=typeof t)return t;try{return JSON.parse(decodeURIComponent(t))}catch(e){return t}}function H(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}const B={setDataAttribute(t,e,i){t.setAttribute(`data-bs-${H(e)}`,i)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${H(e)}`)},getDataAttributes(t){if(!t)return{};const e={},i=Object.keys(t.dataset).filter((t=>t.startsWith("bs")&&!t.startsWith("bsConfig")));for(const s of i){let i=s.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),e[i]=z(t.dataset[s])}return e},getDataAttribute:(t,e)=>z(t.getAttribute(`data-bs-${H(e)}`))};class q{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const i=l(e)?B.getDataAttribute(e,"config"):{};return{...this.constructor.Default,..."object"==typeof i?i:{},...l(e)?B.getDataAttributes(e):{},..."object"==typeof t?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[s,n]of Object.entries(e)){const e=t[s],o=l(e)?"element":null==(i=e)?`${i}`:Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(n).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${o}" but expected type "${n}".`)}var i}}class W extends q{constructor(t,e){super(),(t=c(t))&&(this._element=t,this._config=this._getConfig(e),n.set(this._element,this.constructor.DATA_KEY,this))}dispose(){n.remove(this._element,this.constructor.DATA_KEY),j.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,i=!0){y(t,e,i)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return n.get(c(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.3.3"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const R=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let i=t.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i=`#${i.split("#")[1]}`),e=i&&"#"!==i?i.trim():null}return e?e.split(",").map((t=>r(t))).join(","):null},K={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),parents(t,e){const i=[];let s=t.parentNode.closest(e);for(;s;)i.push(s),s=s.parentNode.closest(e);return i},prev(t,e){let i=t.previousElementSibling;for(;i;){if(i.matches(e))return[i];i=i.previousElementSibling}return[]},next(t,e){let i=t.nextElementSibling;for(;i;){if(i.matches(e))return[i];i=i.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(",");return this.find(e,t).filter((t=>!d(t)&&h(t)))},getSelectorFromElement(t){const e=R(t);return e&&K.findOne(e)?e:null},getElementFromSelector(t){const e=R(t);return e?K.findOne(e):null},getMultipleElementsFromSelector(t){const e=R(t);return e?K.find(e):[]}},V=(t,e="hide")=>{const i=`click.dismiss${t.EVENT_KEY}`,s=t.NAME;j.on(document,i,`[data-bs-dismiss="${s}"]`,(function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),d(this))return;const n=K.getElementFromSelector(this)||this.closest(`.${s}`);t.getOrCreateInstance(n)[e]()}))},Q=".bs.alert",X=`close${Q}`,Y=`closed${Q}`;class U extends W{static get NAME(){return"alert"}close(){if(j.trigger(this._element,X).defaultPrevented)return;this._element.classList.remove("show");const t=this._element.classList.contains("fade");this._queueCallback((()=>this._destroyElement()),this._element,t)}_destroyElement(){this._element.remove(),j.trigger(this._element,Y),this.dispose()}static jQueryInterface(t){return this.each((function(){const e=U.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}V(U,"close"),b(U);const G='[data-bs-toggle="button"]';class J extends W{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each((function(){const e=J.getOrCreateInstance(this);"toggle"===t&&e[t]()}))}}j.on(document,"click.bs.button.data-api",G,(t=>{t.preventDefault();const e=t.target.closest(G);J.getOrCreateInstance(e).toggle()})),b(J);const Z=".bs.swipe",tt=`touchstart${Z}`,et=`touchmove${Z}`,it=`touchend${Z}`,st=`pointerdown${Z}`,nt=`pointerup${Z}`,ot={endCallback:null,leftCallback:null,rightCallback:null},rt={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class at extends q{constructor(t,e){super(),this._element=t,t&&at.isSupported()&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return ot}static get DefaultType(){return rt}static get NAME(){return"swipe"}dispose(){j.off(this._element,Z)}_start(t){this._supportPointerEvents?this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX):this._deltaX=t.touches[0].clientX}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),v(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=40)return;const e=t/this._deltaX;this._deltaX=0,e&&v(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(j.on(this._element,st,(t=>this._start(t))),j.on(this._element,nt,(t=>this._end(t))),this._element.classList.add("pointer-event")):(j.on(this._element,tt,(t=>this._start(t))),j.on(this._element,et,(t=>this._move(t))),j.on(this._element,it,(t=>this._end(t))))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&("pen"===t.pointerType||"touch"===t.pointerType)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const lt=".bs.carousel",ct=".data-api",ht="next",dt="prev",ut="left",_t="right",gt=`slide${lt}`,ft=`slid${lt}`,mt=`keydown${lt}`,pt=`mouseenter${lt}`,bt=`mouseleave${lt}`,vt=`dragstart${lt}`,yt=`load${lt}${ct}`,wt=`click${lt}${ct}`,At="carousel",Et="active",Ct=".active",Tt=".carousel-item",kt=Ct+Tt,$t={ArrowLeft:_t,ArrowRight:ut},St={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Lt={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Ot extends W{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=K.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===At&&this.cycle()}static get Default(){return St}static get DefaultType(){return Lt}static get NAME(){return"carousel"}next(){this._slide(ht)}nextWhenVisible(){!document.hidden&&h(this._element)&&this.next()}prev(){this._slide(dt)}pause(){this._isSliding&&a(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval((()=>this.nextWhenVisible()),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?j.one(this._element,ft,(()=>this.cycle())):this.cycle())}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding)return void j.one(this._element,ft,(()=>this.to(t)));const i=this._getItemIndex(this._getActive());if(i===t)return;const s=t>i?ht:dt;this._slide(s,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&j.on(this._element,mt,(t=>this._keydown(t))),"hover"===this._config.pause&&(j.on(this._element,pt,(()=>this.pause())),j.on(this._element,bt,(()=>this._maybeEnableCycle()))),this._config.touch&&at.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const t of K.find(".carousel-item img",this._element))j.on(t,vt,(t=>t.preventDefault()));const t={leftCallback:()=>this._slide(this._directionToOrder(ut)),rightCallback:()=>this._slide(this._directionToOrder(_t)),endCallback:()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((()=>this._maybeEnableCycle()),500+this._config.interval))}};this._swipeHelper=new at(this._element,t)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=$t[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=K.findOne(Ct,this._indicatorsElement);e.classList.remove(Et),e.removeAttribute("aria-current");const i=K.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);i&&(i.classList.add(Et),i.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const i=this._getActive(),s=t===ht,n=e||w(this._getItems(),i,s,this._config.wrap);if(n===i)return;const o=this._getItemIndex(n),r=e=>j.trigger(this._element,e,{relatedTarget:n,direction:this._orderToDirection(t),from:this._getItemIndex(i),to:o});if(r(gt).defaultPrevented)return;if(!i||!n)return;const a=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=n;const l=s?"carousel-item-start":"carousel-item-end",c=s?"carousel-item-next":"carousel-item-prev";n.classList.add(c),g(n),i.classList.add(l),n.classList.add(l),this._queueCallback((()=>{n.classList.remove(l,c),n.classList.add(Et),i.classList.remove(Et,c,l),this._isSliding=!1,r(ft)}),i,this._isAnimated()),a&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return K.findOne(kt,this._element)}_getItems(){return K.find(Tt,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return p()?t===ut?dt:ht:t===ut?ht:dt}_orderToDirection(t){return p()?t===dt?ut:_t:t===dt?_t:ut}static jQueryInterface(t){return this.each((function(){const e=Ot.getOrCreateInstance(this,t);if("number"!=typeof t){if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}else e.to(t)}))}}j.on(document,wt,"[data-bs-slide], [data-bs-slide-to]",(function(t){const e=K.getElementFromSelector(this);if(!e||!e.classList.contains(At))return;t.preventDefault();const i=Ot.getOrCreateInstance(e),s=this.getAttribute("data-bs-slide-to");return s?(i.to(s),void i._maybeEnableCycle()):"next"===B.getDataAttribute(this,"slide")?(i.next(),void i._maybeEnableCycle()):(i.prev(),void i._maybeEnableCycle())})),j.on(window,yt,(()=>{const t=K.find('[data-bs-ride="carousel"]');for(const e of t)Ot.getOrCreateInstance(e)})),b(Ot);const It=".bs.collapse",Dt=`show${It}`,Nt=`shown${It}`,Pt=`hide${It}`,xt=`hidden${It}`,Mt=`click${It}.data-api`,jt="show",Ft="collapse",zt="collapsing",Ht=`:scope .${Ft} .${Ft}`,Bt='[data-bs-toggle="collapse"]',qt={parent:null,toggle:!0},Wt={parent:"(null|element)",toggle:"boolean"};class Rt extends W{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const i=K.find(Bt);for(const t of i){const e=K.getSelectorFromElement(t),i=K.find(e).filter((t=>t===this._element));null!==e&&i.length&&this._triggerArray.push(t)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return qt}static get DefaultType(){return Wt}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t=>t!==this._element)).map((t=>Rt.getOrCreateInstance(t,{toggle:!1})))),t.length&&t[0]._isTransitioning)return;if(j.trigger(this._element,Dt).defaultPrevented)return;for(const e of t)e.hide();const e=this._getDimension();this._element.classList.remove(Ft),this._element.classList.add(zt),this._element.style[e]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=`scroll${e[0].toUpperCase()+e.slice(1)}`;this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(zt),this._element.classList.add(Ft,jt),this._element.style[e]="",j.trigger(this._element,Nt)}),this._element,!0),this._element.style[e]=`${this._element[i]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(j.trigger(this._element,Pt).defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,g(this._element),this._element.classList.add(zt),this._element.classList.remove(Ft,jt);for(const t of this._triggerArray){const e=K.getElementFromSelector(t);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0,this._element.style[t]="",this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(zt),this._element.classList.add(Ft),j.trigger(this._element,xt)}),this._element,!0)}_isShown(t=this._element){return t.classList.contains(jt)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=c(t.parent),t}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(Bt);for(const e of t){const t=K.getElementFromSelector(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}}_getFirstLevelChildren(t){const e=K.find(Ht,this._config.parent);return K.find(t,this._config.parent).filter((t=>!e.includes(t)))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const i of t)i.classList.toggle("collapsed",!e),i.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return"string"==typeof t&&/show|hide/.test(t)&&(e.toggle=!1),this.each((function(){const i=Rt.getOrCreateInstance(this,e);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t]()}}))}}j.on(document,Mt,Bt,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();for(const t of K.getMultipleElementsFromSelector(this))Rt.getOrCreateInstance(t,{toggle:!1}).toggle()})),b(Rt);const Kt="dropdown",Vt=".bs.dropdown",Qt=".data-api",Xt="ArrowUp",Yt="ArrowDown",Ut=`hide${Vt}`,Gt=`hidden${Vt}`,Jt=`show${Vt}`,Zt=`shown${Vt}`,te=`click${Vt}${Qt}`,ee=`keydown${Vt}${Qt}`,ie=`keyup${Vt}${Qt}`,se="show",ne='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',oe=`${ne}.${se}`,re=".dropdown-menu",ae=p()?"top-end":"top-start",le=p()?"top-start":"top-end",ce=p()?"bottom-end":"bottom-start",he=p()?"bottom-start":"bottom-end",de=p()?"left-start":"right-start",ue=p()?"right-start":"left-start",_e={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},ge={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class fe extends W{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=K.next(this._element,re)[0]||K.prev(this._element,re)[0]||K.findOne(re,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return _e}static get DefaultType(){return ge}static get NAME(){return Kt}toggle(){return this._isShown()?this.hide():this.show()}show(){if(d(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!j.trigger(this._element,Jt,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const t of[].concat(...document.body.children))j.on(t,"mouseover",_);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(se),this._element.classList.add(se),j.trigger(this._element,Zt,t)}}hide(){if(d(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!j.trigger(this._element,Ut,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))j.off(t,"mouseover",_);this._popper&&this._popper.destroy(),this._menu.classList.remove(se),this._element.classList.remove(se),this._element.setAttribute("aria-expanded","false"),B.removeDataAttribute(this._menu,"popper"),j.trigger(this._element,Gt,t)}}_getConfig(t){if("object"==typeof(t=super._getConfig(t)).reference&&!l(t.reference)&&"function"!=typeof t.reference.getBoundingClientRect)throw new TypeError(`${Kt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(void 0===i)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;"parent"===this._config.reference?t=this._parent:l(this._config.reference)?t=c(this._config.reference):"object"==typeof this._config.reference&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=i.createPopper(t,this._menu,e)}_isShown(){return this._menu.classList.contains(se)}_getPlacement(){const t=this._parent;if(t.classList.contains("dropend"))return de;if(t.classList.contains("dropstart"))return ue;if(t.classList.contains("dropup-center"))return"top";if(t.classList.contains("dropdown-center"))return"bottom";const e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return t.classList.contains("dropup")?e?le:ae:e?he:ce}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||"static"===this._config.display)&&(B.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...v(this._config.popperConfig,[t])}}_selectMenuItem({key:t,target:e}){const i=K.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter((t=>h(t)));i.length&&w(i,e,t===Yt,!i.includes(e)).focus()}static jQueryInterface(t){return this.each((function(){const e=fe.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}static clearMenus(t){if(2===t.button||"keyup"===t.type&&"Tab"!==t.key)return;const e=K.find(oe);for(const i of e){const e=fe.getInstance(i);if(!e||!1===e._config.autoClose)continue;const s=t.composedPath(),n=s.includes(e._menu);if(s.includes(e._element)||"inside"===e._config.autoClose&&!n||"outside"===e._config.autoClose&&n)continue;if(e._menu.contains(t.target)&&("keyup"===t.type&&"Tab"===t.key||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const o={relatedTarget:e._element};"click"===t.type&&(o.clickEvent=t),e._completeHide(o)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),i="Escape"===t.key,s=[Xt,Yt].includes(t.key);if(!s&&!i)return;if(e&&!i)return;t.preventDefault();const n=this.matches(ne)?this:K.prev(this,ne)[0]||K.next(this,ne)[0]||K.findOne(ne,t.delegateTarget.parentNode),o=fe.getOrCreateInstance(n);if(s)return t.stopPropagation(),o.show(),void o._selectMenuItem(t);o._isShown()&&(t.stopPropagation(),o.hide(),n.focus())}}j.on(document,ee,ne,fe.dataApiKeydownHandler),j.on(document,ee,re,fe.dataApiKeydownHandler),j.on(document,te,fe.clearMenus),j.on(document,ie,fe.clearMenus),j.on(document,te,ne,(function(t){t.preventDefault(),fe.getOrCreateInstance(this).toggle()})),b(fe);const me="backdrop",pe="show",be=`mousedown.bs.${me}`,ve={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},ye={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class we extends q{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return ve}static get DefaultType(){return ye}static get NAME(){return me}show(t){if(!this._config.isVisible)return void v(t);this._append();const e=this._getElement();this._config.isAnimated&&g(e),e.classList.add(pe),this._emulateAnimation((()=>{v(t)}))}hide(t){this._config.isVisible?(this._getElement().classList.remove(pe),this._emulateAnimation((()=>{this.dispose(),v(t)}))):v(t)}dispose(){this._isAppended&&(j.off(this._element,be),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add("fade"),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=c(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),j.on(t,be,(()=>{v(this._config.clickCallback)})),this._isAppended=!0}_emulateAnimation(t){y(t,this._getElement(),this._config.isAnimated)}}const Ae=".bs.focustrap",Ee=`focusin${Ae}`,Ce=`keydown.tab${Ae}`,Te="backward",ke={autofocus:!0,trapElement:null},$e={autofocus:"boolean",trapElement:"element"};class Se extends q{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return ke}static get DefaultType(){return $e}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),j.off(document,Ae),j.on(document,Ee,(t=>this._handleFocusin(t))),j.on(document,Ce,(t=>this._handleKeydown(t))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,j.off(document,Ae))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const i=K.focusableChildren(e);0===i.length?e.focus():this._lastTabNavDirection===Te?i[i.length-1].focus():i[0].focus()}_handleKeydown(t){"Tab"===t.key&&(this._lastTabNavDirection=t.shiftKey?Te:"forward")}}const Le=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Oe=".sticky-top",Ie="padding-right",De="margin-right";class Ne{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Ie,(e=>e+t)),this._setElementAttributes(Le,Ie,(e=>e+t)),this._setElementAttributes(Oe,De,(e=>e-t))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Ie),this._resetElementAttributes(Le,Ie),this._resetElementAttributes(Oe,De)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const s=this.getWidth();this._applyManipulationCallback(t,(t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+s)return;this._saveInitialAttribute(t,e);const n=window.getComputedStyle(t).getPropertyValue(e);t.style.setProperty(e,`${i(Number.parseFloat(n))}px`)}))}_saveInitialAttribute(t,e){const i=t.style.getPropertyValue(e);i&&B.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){this._applyManipulationCallback(t,(t=>{const i=B.getDataAttribute(t,e);null!==i?(B.removeDataAttribute(t,e),t.style.setProperty(e,i)):t.style.removeProperty(e)}))}_applyManipulationCallback(t,e){if(l(t))e(t);else for(const i of K.find(t,this._element))e(i)}}const Pe=".bs.modal",xe=`hide${Pe}`,Me=`hidePrevented${Pe}`,je=`hidden${Pe}`,Fe=`show${Pe}`,ze=`shown${Pe}`,He=`resize${Pe}`,Be=`click.dismiss${Pe}`,qe=`mousedown.dismiss${Pe}`,We=`keydown.dismiss${Pe}`,Re=`click${Pe}.data-api`,Ke="modal-open",Ve="show",Qe="modal-static",Xe={backdrop:!0,focus:!0,keyboard:!0},Ye={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Ue extends W{constructor(t,e){super(t,e),this._dialog=K.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Ne,this._addEventListeners()}static get Default(){return Xe}static get DefaultType(){return Ye}static get NAME(){return"modal"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||j.trigger(this._element,Fe,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Ke),this._adjustDialog(),this._backdrop.show((()=>this._showElement(t))))}hide(){this._isShown&&!this._isTransitioning&&(j.trigger(this._element,xe).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Ve),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated())))}dispose(){j.off(window,Pe),j.off(this._dialog,Pe),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new we({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Se({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=K.findOne(".modal-body",this._dialog);e&&(e.scrollTop=0),g(this._element),this._element.classList.add(Ve),this._queueCallback((()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,j.trigger(this._element,ze,{relatedTarget:t})}),this._dialog,this._isAnimated())}_addEventListeners(){j.on(this._element,We,(t=>{"Escape"===t.key&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())})),j.on(window,He,(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()})),j.on(this._element,qe,(t=>{j.one(this._element,Be,(e=>{this._element===t.target&&this._element===e.target&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())}))}))}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(Ke),this._resetAdjustments(),this._scrollBar.reset(),j.trigger(this._element,je)}))}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(j.trigger(this._element,Me).defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._element.style.overflowY;"hidden"===e||this._element.classList.contains(Qe)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(Qe),this._queueCallback((()=>{this._element.classList.remove(Qe),this._queueCallback((()=>{this._element.style.overflowY=e}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0;if(i&&!t){const t=p()?"paddingLeft":"paddingRight";this._element.style[t]=`${e}px`}if(!i&&t){const t=p()?"paddingRight":"paddingLeft";this._element.style[t]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const i=Ue.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t](e)}}))}}j.on(document,Re,'[data-bs-toggle="modal"]',(function(t){const e=K.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),j.one(e,Fe,(t=>{t.defaultPrevented||j.one(e,je,(()=>{h(this)&&this.focus()}))}));const i=K.findOne(".modal.show");i&&Ue.getInstance(i).hide(),Ue.getOrCreateInstance(e).toggle(this)})),V(Ue),b(Ue);const Ge=".bs.offcanvas",Je=".data-api",Ze=`load${Ge}${Je}`,ti="show",ei="showing",ii="hiding",si=".offcanvas.show",ni=`show${Ge}`,oi=`shown${Ge}`,ri=`hide${Ge}`,ai=`hidePrevented${Ge}`,li=`hidden${Ge}`,ci=`resize${Ge}`,hi=`click${Ge}${Je}`,di=`keydown.dismiss${Ge}`,ui={backdrop:!0,keyboard:!0,scroll:!1},_i={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class gi extends W{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return ui}static get DefaultType(){return _i}static get NAME(){return"offcanvas"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||j.trigger(this._element,ni,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||(new Ne).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(ei),this._queueCallback((()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(ti),this._element.classList.remove(ei),j.trigger(this._element,oi,{relatedTarget:t})}),this._element,!0))}hide(){this._isShown&&(j.trigger(this._element,ri).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(ii),this._backdrop.hide(),this._queueCallback((()=>{this._element.classList.remove(ti,ii),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new Ne).reset(),j.trigger(this._element,li)}),this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=Boolean(this._config.backdrop);return new we({className:"offcanvas-backdrop",isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?()=>{"static"!==this._config.backdrop?this.hide():j.trigger(this._element,ai)}:null})}_initializeFocusTrap(){return new Se({trapElement:this._element})}_addEventListeners(){j.on(this._element,di,(t=>{"Escape"===t.key&&(this._config.keyboard?this.hide():j.trigger(this._element,ai))}))}static jQueryInterface(t){return this.each((function(){const e=gi.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}j.on(document,hi,'[data-bs-toggle="offcanvas"]',(function(t){const e=K.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),d(this))return;j.one(e,li,(()=>{h(this)&&this.focus()}));const i=K.findOne(si);i&&i!==e&&gi.getInstance(i).hide(),gi.getOrCreateInstance(e).toggle(this)})),j.on(window,Ze,(()=>{for(const t of K.find(si))gi.getOrCreateInstance(t).show()})),j.on(window,ci,(()=>{for(const t of K.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(t).position&&gi.getOrCreateInstance(t).hide()})),V(gi),b(gi);const fi={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},mi=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),pi=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,bi=(t,e)=>{const i=t.nodeName.toLowerCase();return e.includes(i)?!mi.has(i)||Boolean(pi.test(t.nodeValue)):e.filter((t=>t instanceof RegExp)).some((t=>t.test(i)))},vi={allowList:fi,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},yi={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},wi={entry:"(string|element|function|null)",selector:"(string|element)"};class Ai extends q{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return vi}static get DefaultType(){return yi}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map((t=>this._resolvePossibleFunction(t))).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[e,i]of Object.entries(this._config.content))this._setContent(t,i,e);const e=t.children[0],i=this._resolvePossibleFunction(this._config.extraClass);return i&&e.classList.add(...i.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,i]of Object.entries(t))super._typeCheckConfig({selector:e,entry:i},wi)}_setContent(t,e,i){const s=K.findOne(i,t);s&&((e=this._resolvePossibleFunction(e))?l(e)?this._putElementInTemplate(c(e),s):this._config.html?s.innerHTML=this._maybeSanitize(e):s.textContent=e:s.remove())}_maybeSanitize(t){return this._config.sanitize?function(t,e,i){if(!t.length)return t;if(i&&"function"==typeof i)return i(t);const s=(new window.DOMParser).parseFromString(t,"text/html"),n=[].concat(...s.body.querySelectorAll("*"));for(const t of n){const i=t.nodeName.toLowerCase();if(!Object.keys(e).includes(i)){t.remove();continue}const s=[].concat(...t.attributes),n=[].concat(e["*"]||[],e[i]||[]);for(const e of s)bi(e,n)||t.removeAttribute(e.nodeName)}return s.body.innerHTML}(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return v(t,[this])}_putElementInTemplate(t,e){if(this._config.html)return e.innerHTML="",void e.append(t);e.textContent=t.textContent}}const Ei=new Set(["sanitize","allowList","sanitizeFn"]),Ci="fade",Ti="show",ki=".modal",$i="hide.bs.modal",Si="hover",Li="focus",Oi={AUTO:"auto",TOP:"top",RIGHT:p()?"left":"right",BOTTOM:"bottom",LEFT:p()?"right":"left"},Ii={allowList:fi,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Di={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Ni extends W{constructor(t,e){if(void 0===i)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return Ii}static get DefaultType(){return Di}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),j.off(this._element.closest(ki),$i,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const t=j.trigger(this._element,this.constructor.eventName("show")),e=(u(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!e)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:s}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(s.append(i),j.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(i),i.classList.add(Ti),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))j.on(t,"mouseover",_);this._queueCallback((()=>{j.trigger(this._element,this.constructor.eventName("shown")),!1===this._isHovered&&this._leave(),this._isHovered=!1}),this.tip,this._isAnimated())}hide(){if(this._isShown()&&!j.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(Ti),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))j.off(t,"mouseover",_);this._activeTrigger.click=!1,this._activeTrigger[Li]=!1,this._activeTrigger[Si]=!1,this._isHovered=null,this._queueCallback((()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),j.trigger(this._element,this.constructor.eventName("hidden")))}),this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(Ci,Ti),e.classList.add(`bs-${this.constructor.NAME}-auto`);const i=(t=>{do{t+=Math.floor(1e6*Math.random())}while(document.getElementById(t));return t})(this.constructor.NAME).toString();return e.setAttribute("id",i),this._isAnimated()&&e.classList.add(Ci),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new Ai({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Ci)}_isShown(){return this.tip&&this.tip.classList.contains(Ti)}_createPopper(t){const e=v(this._config.placement,[this,t,this._element]),s=Oi[e.toUpperCase()];return i.createPopper(this._element,t,this._getPopperConfig(s))}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_resolvePossibleFunction(t){return v(t,[this._element])}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:t=>{this._getTipElement().setAttribute("data-popper-placement",t.state.placement)}}]};return{...e,...v(this._config.popperConfig,[e])}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if("click"===e)j.on(this._element,this.constructor.eventName("click"),this._config.selector,(t=>{this._initializeOnDelegatedTarget(t).toggle()}));else if("manual"!==e){const t=e===Si?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),i=e===Si?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");j.on(this._element,t,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusin"===t.type?Li:Si]=!0,e._enter()})),j.on(this._element,i,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusout"===t.type?Li:Si]=e._element.contains(t.relatedTarget),e._leave()}))}this._hideModalHandler=()=>{this._element&&this.hide()},j.on(this._element.closest(ki),$i,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout((()=>{this._isHovered&&this.show()}),this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout((()=>{this._isHovered||this.hide()}),this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=B.getDataAttributes(this._element);for(const t of Object.keys(e))Ei.has(t)&&delete e[t];return t={...e,..."object"==typeof t&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=!1===t.container?document.body:c(t.container),"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const[e,i]of Object.entries(this._config))this.constructor.Default[e]!==i&&(t[e]=i);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each((function(){const e=Ni.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}b(Ni);const Pi={...Ni.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},xi={...Ni.DefaultType,content:"(null|string|element|function)"};class Mi extends Ni{static get Default(){return Pi}static get DefaultType(){return xi}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each((function(){const e=Mi.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}b(Mi);const ji=".bs.scrollspy",Fi=`activate${ji}`,zi=`click${ji}`,Hi=`load${ji}.data-api`,Bi="active",qi="[href]",Wi=".nav-link",Ri=`${Wi}, .nav-item > ${Wi}, .list-group-item`,Ki={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},Vi={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Qi extends W{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement="visible"===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Ki}static get DefaultType(){return Vi}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=c(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,"string"==typeof t.threshold&&(t.threshold=t.threshold.split(",").map((t=>Number.parseFloat(t)))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(j.off(this._config.target,zi),j.on(this._config.target,zi,qi,(t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const i=this._rootElement||window,s=e.offsetTop-this._element.offsetTop;if(i.scrollTo)return void i.scrollTo({top:s,behavior:"smooth"});i.scrollTop=s}})))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver((t=>this._observerCallback(t)),t)}_observerCallback(t){const e=t=>this._targetLinks.get(`#${t.target.id}`),i=t=>{this._previousScrollData.visibleEntryTop=t.target.offsetTop,this._process(e(t))},s=(this._rootElement||document.documentElement).scrollTop,n=s>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=s;for(const o of t){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(o));continue}const t=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(n&&t){if(i(o),!s)return}else n||t||i(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=K.find(qi,this._config.target);for(const e of t){if(!e.hash||d(e))continue;const t=K.findOne(decodeURI(e.hash),this._element);h(t)&&(this._targetLinks.set(decodeURI(e.hash),e),this._observableSections.set(e.hash,t))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(Bi),this._activateParents(t),j.trigger(this._element,Fi,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains("dropdown-item"))K.findOne(".dropdown-toggle",t.closest(".dropdown")).classList.add(Bi);else for(const e of K.parents(t,".nav, .list-group"))for(const t of K.prev(e,Ri))t.classList.add(Bi)}_clearActiveClass(t){t.classList.remove(Bi);const e=K.find(`${qi}.${Bi}`,t);for(const t of e)t.classList.remove(Bi)}static jQueryInterface(t){return this.each((function(){const e=Qi.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}j.on(window,Hi,(()=>{for(const t of K.find('[data-bs-spy="scroll"]'))Qi.getOrCreateInstance(t)})),b(Qi);const Xi=".bs.tab",Yi=`hide${Xi}`,Ui=`hidden${Xi}`,Gi=`show${Xi}`,Ji=`shown${Xi}`,Zi=`click${Xi}`,ts=`keydown${Xi}`,es=`load${Xi}`,is="ArrowLeft",ss="ArrowRight",ns="ArrowUp",os="ArrowDown",rs="Home",as="End",ls="active",cs="fade",hs="show",ds=".dropdown-toggle",us=`:not(${ds})`,_s='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',gs=`.nav-link${us}, .list-group-item${us}, [role="tab"]${us}, ${_s}`,fs=`.${ls}[data-bs-toggle="tab"], .${ls}[data-bs-toggle="pill"], .${ls}[data-bs-toggle="list"]`;class ms extends W{constructor(t){super(t),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),j.on(this._element,ts,(t=>this._keydown(t))))}static get NAME(){return"tab"}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),i=e?j.trigger(e,Yi,{relatedTarget:t}):null;j.trigger(t,Gi,{relatedTarget:e}).defaultPrevented||i&&i.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){t&&(t.classList.add(ls),this._activate(K.getElementFromSelector(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),j.trigger(t,Ji,{relatedTarget:e})):t.classList.add(hs)}),t,t.classList.contains(cs)))}_deactivate(t,e){t&&(t.classList.remove(ls),t.blur(),this._deactivate(K.getElementFromSelector(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),j.trigger(t,Ui,{relatedTarget:e})):t.classList.remove(hs)}),t,t.classList.contains(cs)))}_keydown(t){if(![is,ss,ns,os,rs,as].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=this._getChildren().filter((t=>!d(t)));let i;if([rs,as].includes(t.key))i=e[t.key===rs?0:e.length-1];else{const s=[ss,os].includes(t.key);i=w(e,t.target,s,!0)}i&&(i.focus({preventScroll:!0}),ms.getOrCreateInstance(i).show())}_getChildren(){return K.find(gs,this._parent)}_getActiveElem(){return this._getChildren().find((t=>this._elemIsActive(t)))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const t of e)this._setInitialAttributesOnChild(t)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),i=this._getOuterElement(t);t.setAttribute("aria-selected",e),i!==t&&this._setAttributeIfNotExists(i,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=K.getElementFromSelector(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`${t.id}`))}_toggleDropDown(t,e){const i=this._getOuterElement(t);if(!i.classList.contains("dropdown"))return;const s=(t,s)=>{const n=K.findOne(t,i);n&&n.classList.toggle(s,e)};s(ds,ls),s(".dropdown-menu",hs),i.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,i){t.hasAttribute(e)||t.setAttribute(e,i)}_elemIsActive(t){return t.classList.contains(ls)}_getInnerElement(t){return t.matches(gs)?t:K.findOne(gs,t)}_getOuterElement(t){return t.closest(".nav-item, .list-group-item")||t}static jQueryInterface(t){return this.each((function(){const e=ms.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}j.on(document,Zi,_s,(function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),d(this)||ms.getOrCreateInstance(this).show()})),j.on(window,es,(()=>{for(const t of K.find(fs))ms.getOrCreateInstance(t)})),b(ms);const ps=".bs.toast",bs=`mouseover${ps}`,vs=`mouseout${ps}`,ys=`focusin${ps}`,ws=`focusout${ps}`,As=`hide${ps}`,Es=`hidden${ps}`,Cs=`show${ps}`,Ts=`shown${ps}`,ks="hide",$s="show",Ss="showing",Ls={animation:"boolean",autohide:"boolean",delay:"number"},Os={animation:!0,autohide:!0,delay:5e3};class Is extends W{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Os}static get DefaultType(){return Ls}static get NAME(){return"toast"}show(){j.trigger(this._element,Cs).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(ks),g(this._element),this._element.classList.add($s,Ss),this._queueCallback((()=>{this._element.classList.remove(Ss),j.trigger(this._element,Ts),this._maybeScheduleHide()}),this._element,this._config.animation))}hide(){this.isShown()&&(j.trigger(this._element,As).defaultPrevented||(this._element.classList.add(Ss),this._queueCallback((()=>{this._element.classList.add(ks),this._element.classList.remove(Ss,$s),j.trigger(this._element,Es)}),this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove($s),super.dispose()}isShown(){return this._element.classList.contains($s)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e}if(e)return void this._clearTimeout();const i=t.relatedTarget;this._element===i||this._element.contains(i)||this._maybeScheduleHide()}_setListeners(){j.on(this._element,bs,(t=>this._onInteraction(t,!0))),j.on(this._element,vs,(t=>this._onInteraction(t,!1))),j.on(this._element,ys,(t=>this._onInteraction(t,!0))),j.on(this._element,ws,(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=Is.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return V(Is),b(Is),{Alert:U,Button:J,Carousel:Ot,Collapse:Rt,Dropdown:fe,Modal:Ue,Offcanvas:gi,Popover:Mi,ScrollSpy:Qi,Tab:ms,Toast:Is,Tooltip:Ni}}));
//# sourceMappingURL=bootstrap.min.js.map
/*!
 * AdminLTE v4.0.0-beta1 (https://adminlte.io)
 * Copyright 2014-2024 Colorlib <https://colorlib.com>
 * Licensed under MIT (https://github.com/ColorlibHQ/AdminLTE/blob/master/LICENSE)
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.adminlte = {}));
})(this, (function (exports) { 'use strict';

    const domContentLoadedCallbacks = [];
    const onDOMContentLoaded = (callback) => {
        if (document.readyState === 'loading') {
            // add listener on the first call when the document is in loading state
            if (!domContentLoadedCallbacks.length) {
                document.addEventListener('DOMContentLoaded', () => {
                    for (const callback of domContentLoadedCallbacks) {
                        callback();
                    }
                });
            }
            domContentLoadedCallbacks.push(callback);
        }
        else {
            callback();
        }
    };
    /* SLIDE UP */
    const slideUp = (target, duration = 500) => {
        target.style.transitionProperty = 'height, margin, padding';
        target.style.transitionDuration = `${duration}ms`;
        target.style.boxSizing = 'border-box';
        target.style.height = `${target.offsetHeight}px`;
        target.style.overflow = 'hidden';
        window.setTimeout(() => {
            target.style.height = '0';
            target.style.paddingTop = '0';
            target.style.paddingBottom = '0';
            target.style.marginTop = '0';
            target.style.marginBottom = '0';
        }, 1);
        window.setTimeout(() => {
            target.style.display = 'none';
            target.style.removeProperty('height');
            target.style.removeProperty('padding-top');
            target.style.removeProperty('padding-bottom');
            target.style.removeProperty('margin-top');
            target.style.removeProperty('margin-bottom');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
        }, duration);
    };
    /* SLIDE DOWN */
    const slideDown = (target, duration = 500) => {
        target.style.removeProperty('display');
        let { display } = window.getComputedStyle(target);
        if (display === 'none') {
            display = 'block';
        }
        target.style.display = display;
        const height = target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = '0';
        target.style.paddingTop = '0';
        target.style.paddingBottom = '0';
        target.style.marginTop = '0';
        target.style.marginBottom = '0';
        window.setTimeout(() => {
            target.style.boxSizing = 'border-box';
            target.style.transitionProperty = 'height, margin, padding';
            target.style.transitionDuration = `${duration}ms`;
            target.style.height = `${height}px`;
            target.style.removeProperty('padding-top');
            target.style.removeProperty('padding-bottom');
            target.style.removeProperty('margin-top');
            target.style.removeProperty('margin-bottom');
        }, 1);
        window.setTimeout(() => {
            target.style.removeProperty('height');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
        }, duration);
    };

    /**
     * --------------------------------------------
     * @file AdminLTE layout.ts
     * @description Layout for AdminLTE.
     * @license MIT
     * --------------------------------------------
     */
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    const CLASS_NAME_HOLD_TRANSITIONS = 'hold-transition';
    const CLASS_NAME_APP_LOADED = 'app-loaded';
    /**
     * Class Definition
     * ====================================================
     */
    class Layout {
        constructor(element) {
            this._element = element;
        }
        holdTransition() {
            let resizeTimer;
            window.addEventListener('resize', () => {
                document.body.classList.add(CLASS_NAME_HOLD_TRANSITIONS);
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(() => {
                    document.body.classList.remove(CLASS_NAME_HOLD_TRANSITIONS);
                }, 400);
            });
        }
    }
    onDOMContentLoaded(() => {
        const data = new Layout(document.body);
        data.holdTransition();
        setTimeout(() => {
            document.body.classList.add(CLASS_NAME_APP_LOADED);
        }, 400);
    });

    /**
     * --------------------------------------------
     * @file AdminLTE push-menu.ts
     * @description Push menu for AdminLTE.
     * @license MIT
     * --------------------------------------------
     */
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    const DATA_KEY$4 = 'lte.push-menu';
    const EVENT_KEY$4 = `.${DATA_KEY$4}`;
    const EVENT_OPEN = `open${EVENT_KEY$4}`;
    const EVENT_COLLAPSE = `collapse${EVENT_KEY$4}`;
    const CLASS_NAME_SIDEBAR_MINI = 'sidebar-mini';
    const CLASS_NAME_SIDEBAR_COLLAPSE = 'sidebar-collapse';
    const CLASS_NAME_SIDEBAR_OPEN = 'sidebar-open';
    const CLASS_NAME_SIDEBAR_EXPAND = 'sidebar-expand';
    const CLASS_NAME_SIDEBAR_OVERLAY = 'sidebar-overlay';
    const CLASS_NAME_MENU_OPEN$1 = 'menu-open';
    const SELECTOR_APP_SIDEBAR = '.app-sidebar';
    const SELECTOR_SIDEBAR_MENU = '.sidebar-menu';
    const SELECTOR_NAV_ITEM$1 = '.nav-item';
    const SELECTOR_NAV_TREEVIEW = '.nav-treeview';
    const SELECTOR_APP_WRAPPER = '.app-wrapper';
    const SELECTOR_SIDEBAR_EXPAND = `[class*="${CLASS_NAME_SIDEBAR_EXPAND}"]`;
    const SELECTOR_SIDEBAR_TOGGLE = '[data-lte-toggle="sidebar"]';
    const Defaults = {
        sidebarBreakpoint: 992
    };
    /**
     * Class Definition
     * ====================================================
     */
    class PushMenu {
        constructor(element, config) {
            this._element = element;
            this._config = Object.assign(Object.assign({}, Defaults), config);
        }
        // TODO
        menusClose() {
            const navTreeview = document.querySelectorAll(SELECTOR_NAV_TREEVIEW);
            navTreeview.forEach(navTree => {
                navTree.style.removeProperty('display');
                navTree.style.removeProperty('height');
            });
            const navSidebar = document.querySelector(SELECTOR_SIDEBAR_MENU);
            const navItem = navSidebar === null || navSidebar === void 0 ? void 0 : navSidebar.querySelectorAll(SELECTOR_NAV_ITEM$1);
            if (navItem) {
                navItem.forEach(navI => {
                    navI.classList.remove(CLASS_NAME_MENU_OPEN$1);
                });
            }
        }
        expand() {
            const event = new Event(EVENT_OPEN);
            document.body.classList.remove(CLASS_NAME_SIDEBAR_COLLAPSE);
            document.body.classList.add(CLASS_NAME_SIDEBAR_OPEN);
            this._element.dispatchEvent(event);
        }
        collapse() {
            const event = new Event(EVENT_COLLAPSE);
            document.body.classList.remove(CLASS_NAME_SIDEBAR_OPEN);
            document.body.classList.add(CLASS_NAME_SIDEBAR_COLLAPSE);
            this._element.dispatchEvent(event);
        }
        addSidebarBreakPoint() {
            var _a, _b, _c;
            const sidebarExpandList = (_b = (_a = document.querySelector(SELECTOR_SIDEBAR_EXPAND)) === null || _a === void 0 ? void 0 : _a.classList) !== null && _b !== void 0 ? _b : [];
            const sidebarExpand = (_c = Array.from(sidebarExpandList).find(className => className.startsWith(CLASS_NAME_SIDEBAR_EXPAND))) !== null && _c !== void 0 ? _c : '';
            const sidebar = document.getElementsByClassName(sidebarExpand)[0];
            const sidebarContent = window.getComputedStyle(sidebar, '::before').getPropertyValue('content');
            this._config = Object.assign(Object.assign({}, this._config), { sidebarBreakpoint: Number(sidebarContent.replace(/[^\d.-]/g, '')) });
            if (window.innerWidth <= this._config.sidebarBreakpoint) {
                this.collapse();
            }
            else {
                if (!document.body.classList.contains(CLASS_NAME_SIDEBAR_MINI)) {
                    this.expand();
                }
                if (document.body.classList.contains(CLASS_NAME_SIDEBAR_MINI) && document.body.classList.contains(CLASS_NAME_SIDEBAR_COLLAPSE)) {
                    this.collapse();
                }
            }
        }
        toggle() {
            if (document.body.classList.contains(CLASS_NAME_SIDEBAR_COLLAPSE)) {
                this.expand();
            }
            else {
                this.collapse();
            }
        }
        init() {
            this.addSidebarBreakPoint();
        }
    }
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
    onDOMContentLoaded(() => {
        var _a;
        const sidebar = document === null || document === void 0 ? void 0 : document.querySelector(SELECTOR_APP_SIDEBAR);
        if (sidebar) {
            const data = new PushMenu(sidebar, Defaults);
            data.init();
            window.addEventListener('resize', () => {
                data.init();
            });
        }
        const sidebarOverlay = document.createElement('div');
        sidebarOverlay.className = CLASS_NAME_SIDEBAR_OVERLAY;
        (_a = document.querySelector(SELECTOR_APP_WRAPPER)) === null || _a === void 0 ? void 0 : _a.append(sidebarOverlay);
        sidebarOverlay.addEventListener('touchstart', event => {
            event.preventDefault();
            const target = event.currentTarget;
            const data = new PushMenu(target, Defaults);
            data.collapse();
        }, { passive: true });
        sidebarOverlay.addEventListener('click', event => {
            event.preventDefault();
            const target = event.currentTarget;
            const data = new PushMenu(target, Defaults);
            data.collapse();
        });
        const fullBtn = document.querySelectorAll(SELECTOR_SIDEBAR_TOGGLE);
        fullBtn.forEach(btn => {
            btn.addEventListener('click', event => {
                event.preventDefault();
                let button = event.currentTarget;
                if ((button === null || button === void 0 ? void 0 : button.dataset.lteToggle) !== 'sidebar') {
                    button = button === null || button === void 0 ? void 0 : button.closest(SELECTOR_SIDEBAR_TOGGLE);
                }
                if (button) {
                    event === null || event === void 0 ? void 0 : event.preventDefault();
                    const data = new PushMenu(button, Defaults);
                    data.toggle();
                }
            });
        });
    });

    /**
     * --------------------------------------------
     * @file AdminLTE treeview.ts
     * @description Treeview plugin for AdminLTE.
     * @license MIT
     * --------------------------------------------
     */
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    // const NAME = 'Treeview'
    const DATA_KEY$3 = 'lte.treeview';
    const EVENT_KEY$3 = `.${DATA_KEY$3}`;
    const EVENT_EXPANDED$2 = `expanded${EVENT_KEY$3}`;
    const EVENT_COLLAPSED$2 = `collapsed${EVENT_KEY$3}`;
    // const EVENT_LOAD_DATA_API = `load${EVENT_KEY}`
    const CLASS_NAME_MENU_OPEN = 'menu-open';
    const SELECTOR_NAV_ITEM = '.nav-item';
    const SELECTOR_NAV_LINK = '.nav-link';
    const SELECTOR_TREEVIEW_MENU = '.nav-treeview';
    const SELECTOR_DATA_TOGGLE$1 = '[data-lte-toggle="treeview"]';
    const Default$1 = {
        animationSpeed: 300,
        accordion: true
    };
    /**
     * Class Definition
     * ====================================================
     */
    class Treeview {
        constructor(element, config) {
            this._element = element;
            this._config = Object.assign(Object.assign({}, Default$1), config);
        }
        open() {
            var _a, _b;
            const event = new Event(EVENT_EXPANDED$2);
            if (this._config.accordion) {
                const openMenuList = (_a = this._element.parentElement) === null || _a === void 0 ? void 0 : _a.querySelectorAll(`${SELECTOR_NAV_ITEM}.${CLASS_NAME_MENU_OPEN}`);
                openMenuList === null || openMenuList === void 0 ? void 0 : openMenuList.forEach(openMenu => {
                    if (openMenu !== this._element.parentElement) {
                        openMenu.classList.remove(CLASS_NAME_MENU_OPEN);
                        const childElement = openMenu === null || openMenu === void 0 ? void 0 : openMenu.querySelector(SELECTOR_TREEVIEW_MENU);
                        if (childElement) {
                            slideUp(childElement, this._config.animationSpeed);
                        }
                    }
                });
            }
            this._element.classList.add(CLASS_NAME_MENU_OPEN);
            const childElement = (_b = this._element) === null || _b === void 0 ? void 0 : _b.querySelector(SELECTOR_TREEVIEW_MENU);
            if (childElement) {
                slideDown(childElement, this._config.animationSpeed);
            }
            this._element.dispatchEvent(event);
        }
        close() {
            var _a;
            const event = new Event(EVENT_COLLAPSED$2);
            this._element.classList.remove(CLASS_NAME_MENU_OPEN);
            const childElement = (_a = this._element) === null || _a === void 0 ? void 0 : _a.querySelector(SELECTOR_TREEVIEW_MENU);
            if (childElement) {
                slideUp(childElement, this._config.animationSpeed);
            }
            this._element.dispatchEvent(event);
        }
        toggle() {
            if (this._element.classList.contains(CLASS_NAME_MENU_OPEN)) {
                this.close();
            }
            else {
                this.open();
            }
        }
    }
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
    onDOMContentLoaded(() => {
        const button = document.querySelectorAll(SELECTOR_DATA_TOGGLE$1);
        button.forEach(btn => {
            btn.addEventListener('click', event => {
                const target = event.target;
                const targetItem = target.closest(SELECTOR_NAV_ITEM);
                const targetLink = target.closest(SELECTOR_NAV_LINK);
                if ((target === null || target === void 0 ? void 0 : target.getAttribute('href')) === '#' || (targetLink === null || targetLink === void 0 ? void 0 : targetLink.getAttribute('href')) === '#') {
                    event.preventDefault();
                }
                if (targetItem) {
                    const data = new Treeview(targetItem, Default$1);
                    data.toggle();
                }
            });
        });
    });

    /**
     * --------------------------------------------
     * @file AdminLTE direct-chat.ts
     * @description Direct chat for AdminLTE.
     * @license MIT
     * --------------------------------------------
     */
    /**
     * Constants
     * ====================================================
     */
    const DATA_KEY$2 = 'lte.direct-chat';
    const EVENT_KEY$2 = `.${DATA_KEY$2}`;
    const EVENT_EXPANDED$1 = `expanded${EVENT_KEY$2}`;
    const EVENT_COLLAPSED$1 = `collapsed${EVENT_KEY$2}`;
    const SELECTOR_DATA_TOGGLE = '[data-lte-toggle="chat-pane"]';
    const SELECTOR_DIRECT_CHAT = '.direct-chat';
    const CLASS_NAME_DIRECT_CHAT_OPEN = 'direct-chat-contacts-open';
    /**
     * Class Definition
     * ====================================================
     */
    class DirectChat {
        constructor(element) {
            this._element = element;
        }
        toggle() {
            if (this._element.classList.contains(CLASS_NAME_DIRECT_CHAT_OPEN)) {
                const event = new Event(EVENT_COLLAPSED$1);
                this._element.classList.remove(CLASS_NAME_DIRECT_CHAT_OPEN);
                this._element.dispatchEvent(event);
            }
            else {
                const event = new Event(EVENT_EXPANDED$1);
                this._element.classList.add(CLASS_NAME_DIRECT_CHAT_OPEN);
                this._element.dispatchEvent(event);
            }
        }
    }
    /**
     *
     * Data Api implementation
     * ====================================================
     */
    onDOMContentLoaded(() => {
        const button = document.querySelectorAll(SELECTOR_DATA_TOGGLE);
        button.forEach(btn => {
            btn.addEventListener('click', event => {
                event.preventDefault();
                const target = event.target;
                const chatPane = target.closest(SELECTOR_DIRECT_CHAT);
                if (chatPane) {
                    const data = new DirectChat(chatPane);
                    data.toggle();
                }
            });
        });
    });

    /**
     * --------------------------------------------
     * @file AdminLTE card-widget.ts
     * @description Card widget for AdminLTE.
     * @license MIT
     * --------------------------------------------
     */
    /**
     * Constants
     * ====================================================
     */
    const DATA_KEY$1 = 'lte.card-widget';
    const EVENT_KEY$1 = `.${DATA_KEY$1}`;
    const EVENT_COLLAPSED = `collapsed${EVENT_KEY$1}`;
    const EVENT_EXPANDED = `expanded${EVENT_KEY$1}`;
    const EVENT_REMOVE = `remove${EVENT_KEY$1}`;
    const EVENT_MAXIMIZED$1 = `maximized${EVENT_KEY$1}`;
    const EVENT_MINIMIZED$1 = `minimized${EVENT_KEY$1}`;
    const CLASS_NAME_CARD = 'card';
    const CLASS_NAME_COLLAPSED = 'collapsed-card';
    const CLASS_NAME_COLLAPSING = 'collapsing-card';
    const CLASS_NAME_EXPANDING = 'expanding-card';
    const CLASS_NAME_WAS_COLLAPSED = 'was-collapsed';
    const CLASS_NAME_MAXIMIZED = 'maximized-card';
    const SELECTOR_DATA_REMOVE = '[data-lte-toggle="card-remove"]';
    const SELECTOR_DATA_COLLAPSE = '[data-lte-toggle="card-collapse"]';
    const SELECTOR_DATA_MAXIMIZE = '[data-lte-toggle="card-maximize"]';
    const SELECTOR_CARD = `.${CLASS_NAME_CARD}`;
    const SELECTOR_CARD_BODY = '.card-body';
    const SELECTOR_CARD_FOOTER = '.card-footer';
    const Default = {
        animationSpeed: 500,
        collapseTrigger: SELECTOR_DATA_COLLAPSE,
        removeTrigger: SELECTOR_DATA_REMOVE,
        maximizeTrigger: SELECTOR_DATA_MAXIMIZE
    };
    class CardWidget {
        constructor(element, config) {
            this._element = element;
            this._parent = element.closest(SELECTOR_CARD);
            if (element.classList.contains(CLASS_NAME_CARD)) {
                this._parent = element;
            }
            this._config = Object.assign(Object.assign({}, Default), config);
        }
        collapse() {
            var _a, _b;
            const event = new Event(EVENT_COLLAPSED);
            if (this._parent) {
                this._parent.classList.add(CLASS_NAME_COLLAPSING);
                const elm = (_a = this._parent) === null || _a === void 0 ? void 0 : _a.querySelectorAll(`${SELECTOR_CARD_BODY}, ${SELECTOR_CARD_FOOTER}`);
                elm.forEach(el => {
                    if (el instanceof HTMLElement) {
                        slideUp(el, this._config.animationSpeed);
                    }
                });
                setTimeout(() => {
                    if (this._parent) {
                        this._parent.classList.add(CLASS_NAME_COLLAPSED);
                        this._parent.classList.remove(CLASS_NAME_COLLAPSING);
                    }
                }, this._config.animationSpeed);
            }
            (_b = this._element) === null || _b === void 0 ? void 0 : _b.dispatchEvent(event);
        }
        expand() {
            var _a, _b;
            const event = new Event(EVENT_EXPANDED);
            if (this._parent) {
                this._parent.classList.add(CLASS_NAME_EXPANDING);
                const elm = (_a = this._parent) === null || _a === void 0 ? void 0 : _a.querySelectorAll(`${SELECTOR_CARD_BODY}, ${SELECTOR_CARD_FOOTER}`);
                elm.forEach(el => {
                    if (el instanceof HTMLElement) {
                        slideDown(el, this._config.animationSpeed);
                    }
                });
                setTimeout(() => {
                    if (this._parent) {
                        this._parent.classList.remove(CLASS_NAME_COLLAPSED);
                        this._parent.classList.remove(CLASS_NAME_EXPANDING);
                    }
                }, this._config.animationSpeed);
            }
            (_b = this._element) === null || _b === void 0 ? void 0 : _b.dispatchEvent(event);
        }
        remove() {
            var _a;
            const event = new Event(EVENT_REMOVE);
            if (this._parent) {
                slideUp(this._parent, this._config.animationSpeed);
            }
            (_a = this._element) === null || _a === void 0 ? void 0 : _a.dispatchEvent(event);
        }
        toggle() {
            var _a;
            if ((_a = this._parent) === null || _a === void 0 ? void 0 : _a.classList.contains(CLASS_NAME_COLLAPSED)) {
                this.expand();
                return;
            }
            this.collapse();
        }
        maximize() {
            var _a;
            const event = new Event(EVENT_MAXIMIZED$1);
            if (this._parent) {
                this._parent.style.height = `${this._parent.offsetHeight}px`;
                this._parent.style.width = `${this._parent.offsetWidth}px`;
                this._parent.style.transition = 'all .15s';
                setTimeout(() => {
                    const htmlTag = document.querySelector('html');
                    if (htmlTag) {
                        htmlTag.classList.add(CLASS_NAME_MAXIMIZED);
                    }
                    if (this._parent) {
                        this._parent.classList.add(CLASS_NAME_MAXIMIZED);
                        if (this._parent.classList.contains(CLASS_NAME_COLLAPSED)) {
                            this._parent.classList.add(CLASS_NAME_WAS_COLLAPSED);
                        }
                    }
                }, 150);
            }
            (_a = this._element) === null || _a === void 0 ? void 0 : _a.dispatchEvent(event);
        }
        minimize() {
            var _a;
            const event = new Event(EVENT_MINIMIZED$1);
            if (this._parent) {
                this._parent.style.height = 'auto';
                this._parent.style.width = 'auto';
                this._parent.style.transition = 'all .15s';
                setTimeout(() => {
                    var _a;
                    const htmlTag = document.querySelector('html');
                    if (htmlTag) {
                        htmlTag.classList.remove(CLASS_NAME_MAXIMIZED);
                    }
                    if (this._parent) {
                        this._parent.classList.remove(CLASS_NAME_MAXIMIZED);
                        if ((_a = this._parent) === null || _a === void 0 ? void 0 : _a.classList.contains(CLASS_NAME_WAS_COLLAPSED)) {
                            this._parent.classList.remove(CLASS_NAME_WAS_COLLAPSED);
                        }
                    }
                }, 10);
            }
            (_a = this._element) === null || _a === void 0 ? void 0 : _a.dispatchEvent(event);
        }
        toggleMaximize() {
            var _a;
            if ((_a = this._parent) === null || _a === void 0 ? void 0 : _a.classList.contains(CLASS_NAME_MAXIMIZED)) {
                this.minimize();
                return;
            }
            this.maximize();
        }
    }
    /**
     *
     * Data Api implementation
     * ====================================================
     */
    onDOMContentLoaded(() => {
        const collapseBtn = document.querySelectorAll(SELECTOR_DATA_COLLAPSE);
        collapseBtn.forEach(btn => {
            btn.addEventListener('click', event => {
                event.preventDefault();
                const target = event.target;
                const data = new CardWidget(target, Default);
                data.toggle();
            });
        });
        const removeBtn = document.querySelectorAll(SELECTOR_DATA_REMOVE);
        removeBtn.forEach(btn => {
            btn.addEventListener('click', event => {
                event.preventDefault();
                const target = event.target;
                const data = new CardWidget(target, Default);
                data.remove();
            });
        });
        const maxBtn = document.querySelectorAll(SELECTOR_DATA_MAXIMIZE);
        maxBtn.forEach(btn => {
            btn.addEventListener('click', event => {
                event.preventDefault();
                const target = event.target;
                const data = new CardWidget(target, Default);
                data.toggleMaximize();
            });
        });
    });

    /**
     * --------------------------------------------
     * @file AdminLTE fullscreen.ts
     * @description Fullscreen plugin for AdminLTE.
     * @license MIT
     * --------------------------------------------
     */
    /**
     * Constants
     * ============================================================================
     */
    const DATA_KEY = 'lte.fullscreen';
    const EVENT_KEY = `.${DATA_KEY}`;
    const EVENT_MAXIMIZED = `maximized${EVENT_KEY}`;
    const EVENT_MINIMIZED = `minimized${EVENT_KEY}`;
    const SELECTOR_FULLSCREEN_TOGGLE = '[data-lte-toggle="fullscreen"]';
    const SELECTOR_MAXIMIZE_ICON = '[data-lte-icon="maximize"]';
    const SELECTOR_MINIMIZE_ICON = '[data-lte-icon="minimize"]';
    /**
     * Class Definition.
     * ============================================================================
     */
    class FullScreen {
        constructor(element, config) {
            this._element = element;
            this._config = config;
        }
        inFullScreen() {
            const event = new Event(EVENT_MAXIMIZED);
            const iconMaximize = document.querySelector(SELECTOR_MAXIMIZE_ICON);
            const iconMinimize = document.querySelector(SELECTOR_MINIMIZE_ICON);
            void document.documentElement.requestFullscreen();
            if (iconMaximize) {
                iconMaximize.style.display = 'none';
            }
            if (iconMinimize) {
                iconMinimize.style.display = 'block';
            }
            this._element.dispatchEvent(event);
        }
        outFullscreen() {
            const event = new Event(EVENT_MINIMIZED);
            const iconMaximize = document.querySelector(SELECTOR_MAXIMIZE_ICON);
            const iconMinimize = document.querySelector(SELECTOR_MINIMIZE_ICON);
            void document.exitFullscreen();
            if (iconMaximize) {
                iconMaximize.style.display = 'block';
            }
            if (iconMinimize) {
                iconMinimize.style.display = 'none';
            }
            this._element.dispatchEvent(event);
        }
        toggleFullScreen() {
            if (document.fullscreenEnabled) {
                if (document.fullscreenElement) {
                    this.outFullscreen();
                }
                else {
                    this.inFullScreen();
                }
            }
        }
    }
    /**
     * Data Api implementation
     * ============================================================================
     */
    onDOMContentLoaded(() => {
        const buttons = document.querySelectorAll(SELECTOR_FULLSCREEN_TOGGLE);
        buttons.forEach(btn => {
            btn.addEventListener('click', event => {
                event.preventDefault();
                const target = event.target;
                const button = target.closest(SELECTOR_FULLSCREEN_TOGGLE);
                if (button) {
                    const data = new FullScreen(button, undefined);
                    data.toggleFullScreen();
                }
            });
        });
    });

    exports.CardWidget = CardWidget;
    exports.DirectChat = DirectChat;
    exports.FullScreen = FullScreen;
    exports.Layout = Layout;
    exports.PushMenu = PushMenu;
    exports.Treeview = Treeview;

}));
//# sourceMappingURL=adminlte.js.map
