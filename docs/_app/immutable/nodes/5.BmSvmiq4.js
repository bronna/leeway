import{a as $,t as W,d as V}from"../chunks/disclose-version.BdkajYJs.js";import{C as Ee,Q as je,l as Z,m as ee,q as T,o as N,aA as ie,ay as F,t as P,j as e,a5 as Y,aB as c,aC as ce,ax as Ae,F as n,aD as r,k as y,aE as Ie,a4 as qe,aF as De,aG as He}from"../chunks/runtime.DWqJclMK.js";import{e as ne,i as re,f as K,g as Te,d as We}from"../chunks/attributes.DLfvVLEf.js";import{s as de,d as ve,h as Ce}from"../chunks/misc.ClgJyYx7.js";import{t as ae,d as Pe,I as we,s as be,b as ge,e as Me}from"../chunks/Icon.D5YWbuh3.js";import{i as le,b as he}from"../chunks/this.DqcCUh1Z.js";import{i as te}from"../chunks/lifecycle.BKdeyG5Z.js";import{s as Fe,e as me}from"../chunks/render.CShCdIXQ.js";import{p as b,o as pe,l as xe,s as ye,c as Ke}from"../chunks/index-client.BW7BJKHw.js";import{s as $e,a as X}from"../chunks/store.zxBaxouy.js";import{r as Ne,w as se}from"../chunks/index.B5x_ZYMj.js";import{a as Ve,s as _e}from"../chunks/shared.Bxd3kz3a.js";function fe(s,t,a){var i=je(s,t);i&&i.set&&(s[t]=a,Ee(()=>{s[t]=null}))}function Le(s,t){Ve(window,["resize"],()=>t(window[s]))}var Oe=W('<div class="block svelte-s3rw5i"></div>'),Be=W('<div class="block svelte-s3rw5i"></div>'),Ge=W('<div class="chapter svelte-s3rw5i"><span class="text svelte-s3rw5i"> <span class="title svelte-s3rw5i"> </span></span> <!></div>'),Qe=W('<div class="chapters svelte-s3rw5i"></div>');function Re(s,t){Z(t,!1);let a=b(t,"activeSlide",8),i=b(t,"sections",8),d=b(t,"allSlides",8);te();var v=Qe();ne(v,5,i,re,(o,u,_)=>{let p=()=>e(u).title,S=()=>e(u).slides;var f=Ge();const z=Y(()=>d()[a()].section===_);var w=N(f),q=N(w);q.nodeValue=_+1;var x=ie(q),H=N(x);T(x),T(w);var k=ie(w,2);le(k,()=>e(z),m=>{var E=V(),h=F(E);ne(h,1,S,re,(l,g)=>{var A=Oe();const j=Y(()=>e(g).i===a());P(()=>ae(A,"active",e(j))),$(l,A)}),$(m,E)},m=>{var E=Be();$(m,E)}),T(f),P(()=>{ae(f,"active",e(z)),Fe(H,`— ${p()??""}`)}),$(o,f)}),T(v),$(s,v),ee()}const Je=()=>{var s;return((s=window==null?void 0:window.visualViewport)==null?void 0:s.width)||document.documentElement.clientWidth},Ue=()=>{var s;return((s=window==null?void 0:window.visualViewport)==null?void 0:s.height)||document.documentElement.clientHeight},Xe=Ne({width:0,height:0},s=>{const t=()=>s({width:Je(),height:Ue()});return t(),window.addEventListener("resize",Pe(t,250)),()=>{window.removeEventListener("resize",t)}});var Ye=W('<figure class="svelte-4vfsg0">visual goes here</figure>');function Ze(s,t){Z(t,!1);const a=$e(),i=()=>X(Xe,"$viewport",a),d=r(),v=r();let o=b(t,"activeSlide",8),u=r(),_=!1;const p=async()=>{if(_){await Ae();const f=document.getElementById(`slide-${o()}`);n(u,f.clientHeight+e(v))}};pe(()=>{_=!0,p()}),c(()=>i(),()=>{n(d,i().width<600)}),c(()=>e(d),()=>{n(v,e(d)?10:100)}),c(()=>(y(o()),i()),()=>{o(),i().width,p()}),ce(),te();var S=Ye();P(()=>K(S,"style",`--offset: ${e(u)}px; --buffer: 2rem`)),$(s,S),ee()}function et(s,t){const a=xe(t,["children","$$slots","$$events","$$legacy"]);we(s,ye({name:"chevron-left"},()=>a,{iconNode:[["path",{d:"m15 18-6-6 6-6"}]],children:(d,v)=>{var o=V(),u=F(o);de(u,ve(t),{}),$(d,o)},$$slots:{default:!0}}))}function tt(s,t){const a=xe(t,["children","$$slots","$$events","$$legacy"]);we(s,ye({name:"chevron-right"},()=>a,{iconNode:[["path",{d:"m9 18 6-6-6-6"}]],children:(d,v)=>{var o=V(),u=F(o);de(u,ve(t),{}),$(d,o)},$$slots:{default:!0}}))}var st=W('<span class="svelte-jjzds"><!></span>'),it=W("<button><!></button>"),nt=W('<section class="svelte-jjzds"></section>');function rt(s,t){Z(t,!1);const a=r(),i=r(),d=r(),v=r();let o=b(t,"debug",8,!1),u=b(t,"enableKeyboard",8,!1),_=b(t,"full",8,!1),p=b(t,"showArrows",8,!1),S=b(t,"disable",24,()=>[]),f=b(t,"directions",24,()=>["left","right"]),z=b(t,"size",8,"64px"),w=b(t,"arrowSize",8,"48px"),q=b(t,"arrowStroke",8,"#000"),x=b(t,"arrowStrokeWidth",8,"2"),H=b(t,"arrowPosition",8,"center");const k=Ke();let m=r();c(()=>(y(z()),y(f()),y(_())),()=>{n(a,h=>Array.isArray(z())?z()[f().indexOf(h)]:_()?"100%":z())}),c(()=>(y(z()),y(_())),()=>{n(i,h=>["up","down"].includes(h)?z():_()?"100%":z())}),c(()=>(y(f()),y(u())),()=>{n(d,h=>{const l=h.key.replace("Arrow","").toLowerCase(),g=f().includes(l);u()&&g&&(h.preventDefault(),k("tap",l))})}),c(()=>(y(f()),y(p())),()=>{n(v,f().filter(h=>typeof p()=="boolean"?p():p().includes(h)))}),ce(),te();var E=nt();me("keydown",Ie,function(...h){var l;(l=e(d))==null||l.apply(this,h)}),ne(E,5,f,re,(h,l)=>{var g=it(),A=qe(()=>k("tap",e(l)));const j=Y(()=>e(a)(e(l))??""),G=Y(()=>e(i)(e(l))??"");P(()=>K(g,"style",`width: ${e(j)}; height: ${e(G)};`)),P(()=>g.disabled=S().includes(e(l)));var L=N(g);le(L,()=>e(v).includes(e(l)),C=>{var D=st(),Q=N(D);le(Q,()=>e(l)==="left",M=>{et(M,{get color(){return q()},get strokeWidth(){return x()}})},M=>{var O=V(),R=F(O);le(R,()=>e(l)==="right",J=>{tt(J,{get color(){return q()},get strokeWidth(){return x()}})},null,!0),$(M,O)}),T(D),P(()=>K(D,"style",`font-size: ${w()??""};`)),$(C,D)}),T(g),P(()=>{K(g,"aria-label",e(l)),be(g,`${e(l)??""} ${H()??""} svelte-jjzds`),ae(g,"full",_())}),me("click",g,function(...C){var D;(D=e(A))==null||D.apply(this,C)}),$(h,g)}),T(E),P(()=>{K(E,"style",`height: ${e(m)??""}px;`),ae(E,"debug",o())}),Le("innerHeight",h=>n(m,h)),$(s,E),ee()}var at=W('<section aria-label="carousel"><div class="slides svelte-1ceqw5z"><!></div></section>');function ot(s,t){Z(t,!1);const a=r(),i=r(),d=r(),v=r(),o=r(),u=r(),_=r(),p=r(),S=r(),f=r(),z=r();let w=b(t,"direction",8,"horizontal"),q=b(t,"duration",8,"500ms"),x=b(t,"timing",8,"ease"),H=b(t,"count",12,0),k=b(t,"current",12,0);const m=()=>U(1),E=()=>U(-1),h=I=>U(I,!0);let l=r(0),g=r(0),A=r(),j=r(),G=!1,L=r(),C=r(),D,Q=se(),M=se(),O=se(),R=se(),J=se();const U=(I,ze)=>{if(!G)return!1;const ke=ze?I:e(g)+I;n(g,Math.max(0,Math.min(e(l)-1,ke))),k(e(g))},ue=I=>{G=I[0].isIntersecting};pe(()=>{n(l,e(C).children.length),H(e(l)),J.set(H()),D=new IntersectionObserver(ue,{root:null,rootMargin:"-1px"}),D.observe(e(L)),n(j,e(j)),n(A,e(A))}),c(()=>(y(w()),e(l),e(A)),()=>{n(a,w()==="horizontal"?`${e(l)*e(A)}px`:"100%")}),c(()=>(y(w()),e(l),e(j)),()=>{n(i,w()==="vertical"?`${e(l)*e(j)}px`:"100%")}),c(()=>(y(w()),e(g),e(A)),()=>{n(d,w()==="horizontal"?`${e(g)*e(A)*-1}px`:0)}),c(()=>(y(w()),e(g),e(j)),()=>{n(v,w()==="vertical"?`${e(g)*e(j)*-1}px`:0)}),c(()=>e(a),()=>{n(o,`width: ${e(a)};`)}),c(()=>e(i),()=>{n(u,`height: ${e(i)};`)}),c(()=>(e(d),e(v)),()=>{n(_,`transform: translate3d(${e(d)}, ${e(v)}, 0);`)}),c(()=>y(q()),()=>{n(p,`transition-duration: ${q()};`)}),c(()=>y(x()),()=>{n(S,`transition-timing-function: ${x()};`)}),c(()=>(e(o),e(u),e(_),e(p),e(S)),()=>{n(f,`${e(o)} ${e(u)} ${e(_)} ${e(p)} ${e(S)}`)}),c(()=>y(w()),()=>{Q.set(w())}),c(()=>e(A),()=>{M.set(e(A))}),c(()=>e(j),()=>{O.set(e(j))}),c(()=>y(k()),()=>{R.set(k())}),c(()=>{},()=>{n(z,{dir:Q,cur:R,w:M,h:O,count:J})}),c(()=>e(z),()=>{De("Slider",e(z))}),ce(),te();var B=at();he(B,I=>n(L,I),()=>e(L));var oe=N(B);he(oe,I=>n(C,I),()=>e(C));var Se=N(oe);return de(Se,ve(t),{}),T(oe),T(B),P(()=>{be(B,`slider ${w()??""} svelte-1ceqw5z`),K(oe,"style",e(f))}),ge(B,"clientWidth",I=>n(A,I)),ge(B,"clientHeight",I=>n(j,I)),$(s,B),fe(t,"next",m),fe(t,"prev",E),fe(t,"jump",h),ee({next:m,prev:E,jump:h})}function lt(s,t){const a=["a","button","input","textarea","select","details","[tabindex]:not([tabindex='-1'])"],i=o=>{v.forEach(u=>{o&&o.disable?u.setAttribute("tabindex",-1):u.removeAttribute("tabindex")})},d=a.join(", "),v=[...s.querySelectorAll(d)];return i(t),{update(o){i(o)},destroy(){v.forEach(o=>o.removeAttribute("tabindex"))}}}var ct=W('<div class="slide svelte-1h814z3" role="group"><!></div>');function dt(s,t){Z(t,!1);const a=$e(),i=()=>X(z,"$dir",a),d=()=>X(q,"$w",a),v=()=>X(x,"$h",a),o=()=>X(w,"$cur",a),u=()=>X(H,"$count",a),_=r(),p=r(),S=r(),f=r(),{dir:z,cur:w,w:q,h:x,count:H}=He("Slider");let k=b(t,"index",8);c(()=>(i(),d()),()=>{n(_,i()==="horizontal"?`${d()}px`:"100%")}),c(()=>(i(),v()),()=>{n(p,i()==="vertical"?`${v()}px`:"100%")}),c(()=>(y(k()),o()),()=>{n(S,k()===o())}),c(()=>e(S),()=>{n(f,!e(S))}),ce(),te();var m=ct(),E=N(m);de(E,ve(t),{}),T(m),P(()=>{K(m,"id",`slide-${k()??""}`),K(m,"aria-label",`slide ${k()+1} of ${u()??""}`),K(m,"aria-current",e(S)),ae(m,"visible",e(S)),_e(m,"width",e(_)),_e(m,"height",e(p))}),Te(m,(h,l)=>lt(h,l),()=>({disable:e(f)})),$(s,m),ee()}var vt=W('<!> <article class="svelte-1myyodm"><!></article> <!> <!>',1);function ut(s,t){Z(t,!1);let a=r(),i=r(0);const d=[{title:"Intro",slides:[{i:0,text:[{type:"h1",text:"title"},{type:"p",text:"welcome"}]}]},{title:"Middle",slides:[{i:1,text:[{type:"p",text:"the quick brown"},{type:"p",text:"the quick brown"},{type:"p",text:"the quick brown"}]},{i:2,text:[{type:"p",text:"fox jumps over"},{type:"p",text:"fox jumps over"}]},{i:3,text:[{type:"p",text:"the lazy dog"}]}]},{title:"Outro",slides:[{i:4,text:[{type:"h2",text:"the end."}]}]}],v=d.map((x,H)=>x.slides.map(k=>({...k,section:H}))).flat(),o=({detail:x})=>{x==="right"?e(a).next():e(a).prev(),window.scrollTo(0,0)};te();var u=vt(),_=F(u);Re(_,{get activeSlide(){return e(i)},sections:d,allSlides:v});var p=ie(_,2),S=N(p);he(ot(S,{get current(){return e(i)},set current(x){n(i,x)},duration:"0",children:(x,H)=>{var k=V(),m=F(k);ne(m,1,()=>v,re,(E,h,l)=>{dt(E,{index:l,children:(g,A)=>{var j=V(),G=F(j);ne(G,1,()=>e(h).text,re,(L,C)=>{let D=()=>e(C).type,Q=()=>e(C).text;var M=V(),O=F(M);Me(O,D,!1,(R,J)=>{We(R,null,{class:"slide-content"},"svelte-1myyodm");var U=V(),ue=F(U);Ce(ue,Q),$(J,U)}),$(L,M)}),$(g,j)},$$slots:{default:!0}})}),$(x,k)},$$slots:{default:!0},$$legacy:!0}),x=>n(a,x),()=>e(a)),T(p);var f=ie(p,2);Ze(f,{get activeSlide(){return e(i)}});var z=ie(f,2),w=Y(()=>e(i)===0?["right"]:["left","right"]),q=Y(()=>e(i)===0?"100%":["33%","67%"]);rt(z,{debug:!1,full:!0,get directions(){return e(w)},get size(){return e(q)},enableKeyboard:!0,marginTop:0,$$events:{tap:o}}),$(s,u),ee()}function zt(s){ut(s,{})}export{zt as component};