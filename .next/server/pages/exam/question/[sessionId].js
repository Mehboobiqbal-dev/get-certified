(()=>{var e={};e.id=294,e.ids=[220,294,636],e.modules={1428:e=>{"use strict";e.exports=import("axios")},4722:e=>{"use strict";e.exports=require("next-auth/react")},8732:e=>{"use strict";e.exports=require("react/jsx-runtime")},12830:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(8732),a=r(82341);function n(){return(0,s.jsxs)(a.Html,{lang:"en",children:[(0,s.jsxs)(a.Head,{children:[(0,s.jsx)("meta",{charSet:"UTF-8"}),(0,s.jsx)("meta",{name:"description",content:"CertifiedSkill.org - Your Certification Platform"})]}),(0,s.jsxs)("body",{className:"antialiased",children:[(0,s.jsx)(a.Main,{}),(0,s.jsx)(a.NextScript,{})]})]})}},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},19542:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>u});var a=r(8732);r(52768);var n=r(4722),i=r(41415),o=r(99846),c=e([i,o]);function u({Component:e,pageProps:{session:t,...r}}){return(0,a.jsxs)(n.SessionProvider,{session:t,children:[(0,a.jsx)(e,{...r}),(0,a.jsx)(i.Toaster,{richColors:!0})]})}[i,o]=c.then?(await c)():c,s()}catch(e){s(e)}})},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},40361:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},41415:e=>{"use strict";e.exports=import("sonner")},50549:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{config:()=>P,default:()=>d,getServerSideProps:()=>m,getStaticPaths:()=>x,getStaticProps:()=>p,reportWebVitals:()=>h,routeModule:()=>v,unstable_getServerProps:()=>j,unstable_getServerSideProps:()=>b,unstable_getStaticParams:()=>S,unstable_getStaticPaths:()=>f,unstable_getStaticProps:()=>g});var a=r(63885),n=r(80237),i=r(81413),o=r(12830),c=r(19542),u=r(91208),l=e([c,u]);[c,u]=l.then?(await l)():l;let d=(0,i.M)(u,"default"),p=(0,i.M)(u,"getStaticProps"),x=(0,i.M)(u,"getStaticPaths"),m=(0,i.M)(u,"getServerSideProps"),P=(0,i.M)(u,"config"),h=(0,i.M)(u,"reportWebVitals"),g=(0,i.M)(u,"unstable_getStaticProps"),f=(0,i.M)(u,"unstable_getStaticPaths"),S=(0,i.M)(u,"unstable_getStaticParams"),j=(0,i.M)(u,"unstable_getServerProps"),b=(0,i.M)(u,"unstable_getServerSideProps"),v=new a.PagesRouteModule({definition:{kind:n.A.PAGES,page:"/exam/question/[sessionId]",pathname:"/exam/question/[sessionId]",bundlePath:"",filename:""},components:{App:c.default,Document:o.default},userland:u});s()}catch(e){s(e)}})},52768:()=>{},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},80237:(e,t)=>{"use strict";Object.defineProperty(t,"A",{enumerable:!0,get:function(){return r}});var r=function(e){return e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE",e.IMAGE="IMAGE",e}({})},81413:(e,t)=>{"use strict";Object.defineProperty(t,"M",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},82015:e=>{"use strict";e.exports=require("react")},91208:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>u});var a=r(8732),n=r(82015),i=r(16220),o=r(1428),c=e([o]);function u({params:e={}}){let{sessionId:t}=e||{},[r,s]=(0,n.useState)(null),[c,u]=(0,n.useState)(!0),[l,d]=(0,n.useState)(null),p=(0,i.useRouter)(),x=async()=>{try{u(!0);let e=await o.default.get(`/api/exam/question/${t}`);"Exam completed"===e.data.msg?(alert("Exam completed!"),p.push("/exam/completed")):s(e.data)}catch(e){m("Failed to load question. Please try again later."),console.error(e)}finally{u(!1)}},m=e=>{alert(e),d(e),p.push("/error")};return c?(0,a.jsx)("p",{className:"text-center mt-10",children:"Loading..."}):l?(0,a.jsx)("p",{className:"text-center mt-10 text-red-500",children:l}):(0,a.jsx)("div",{className:"flex flex-col items-center justify-center min-h-screen",children:r?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h2",{className:"text-xl font-semibold",children:r.text}),(0,a.jsx)("ul",{className:"mt-4",children:r.options?.map((e,t)=>a.jsx("li",{className:"p-2 border rounded mb-2",children:e},t))}),(0,a.jsx)("button",{onClick:x,className:"mt-4 px-4 py-2 bg-blue-500 text-white rounded",children:"Next Question"})]}):(0,a.jsx)("p",{children:"No more questions available."})})}o=(c.then?(await c)():c)[0],s()}catch(e){s(e)}})},99846:e=>{"use strict";e.exports=import("@vercel/analytics/react")}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[341,839],()=>r(50549));module.exports=s})();