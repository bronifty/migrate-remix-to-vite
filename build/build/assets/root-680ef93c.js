import{r as n,j as t}from"./jsx-runtime-26afeca0.js";import{b as j,d as m,e as p,f as y,L as a,M as S,g as f,O as w,S as g}from"./components-eb3f5fdc.js";/**
 * @remix-run/react v2.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let l="positions";function k({getKey:r,...c}){let o=j(),d=m();p({getKey:r,storageKey:l});let u=n.useMemo(()=>{if(!r)return null;let e=r(o,d);return e!==o.key?e:null},[]),x=((e,h)=>{if(!window.history.state||!window.history.state.key){let s=Math.random().toString(32).slice(2);window.history.replaceState({key:s},"")}try{let i=JSON.parse(sessionStorage.getItem(e)||"{}")[h||window.history.state.key];typeof i=="number"&&window.scrollTo(0,i)}catch(s){console.error(s),sessionStorage.removeItem(e)}}).toString();return n.createElement("script",y({},c,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${x})(${JSON.stringify(l)}, ${JSON.stringify(u)})`}}))}const L=()=>null;function M(){return t.jsxs("ul",{className:"text-red-500",children:[t.jsx("li",{children:t.jsx(a,{to:"test",children:"Go to test!"})}),t.jsx("li",{children:t.jsx(a,{to:"/",children:"Go bacc!"})})]})}function O(){return t.jsxs("html",{lang:"en",children:[t.jsxs("head",{children:[t.jsx("meta",{charSet:"utf-8"}),t.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),t.jsx(S,{}),t.jsx(f,{})]}),t.jsxs("body",{children:[t.jsx(M,{}),t.jsx(w,{}),t.jsx(k,{}),t.jsx(L,{}),t.jsx(g,{})]})]})}export{O as default};
