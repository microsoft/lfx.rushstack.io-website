"use strict";(self.webpackChunklfx_rushstack_io=self.webpackChunklfx_rushstack_io||[]).push([[971],{158:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(6393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4395:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=r(216),a=r(2228),i=(r(6393),r(158)),o=["components"],l={title:"Overview",hide_title:!0},s=void 0,p={unversionedId:"index",id:"index",title:"Overview",description:'<img src="/images/site/lockfile-explorer.svg" alt="Lockfile Explorer" title="Lockfile Explorer"',source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/lfx.rushstack.io/docs/index.md",tags:[],version:"current",frontMatter:{title:"Overview",hide_title:!0},sidebar:"docsSidebar",next:{title:"Getting started",permalink:"/pages/basics/getting_started"}},c={},u=[{value:"Essentials",id:"essentials",level:2}],m={toc:u};function d(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("img",{src:"/images/site/lockfile-explorer.svg",alt:"Lockfile Explorer",title:"Lockfile Explorer",style:{width:"400px",paddingBottom:"1rem"}}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Rush Lockfile Explorer")," helps you investigate and solve version conflicts when working in a monorepo\nthat uses the ",(0,i.kt)("a",{parentName:"p",href:"https://pnpm.io/"},"PNPM package manager"),". It's designed for the ",(0,i.kt)("a",{parentName:"p",href:"https://rushjs.io/"},"Rush"),"\nbuild orchestrator, but you can also use it to analyze a standalone PNPM workspace without Rush."),(0,i.kt)("p",null,"Lockfile Explorer helps with problems such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Understanding why a multiple versions of an NPM package are appearing in your ",(0,i.kt)("inlineCode",{parentName:"li"},"node_modules")," folder"),(0,i.kt)("li",{parentName:"ul"},"Tracing dependencies to determine which project caused an NPM package to be installed"),(0,i.kt)("li",{parentName:"ul"},"Finding and eliminating ",(0,i.kt)("a",{parentName:"li",href:"/pages/scenarios/npm_doppelgangers"},'"doppelgangers"'),"\n(multiple installations of the same version of the same package)"),(0,i.kt)("li",{parentName:"ul"},"Troubleshooting problems involving peer dependencies")),(0,i.kt)("p",null,"The app is distributed as a regular NPM package. You invoke it from the shell command line,\nand it launches a Node.js service on ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost"),":"),(0,i.kt)("a",{href:"pathname:///images/docs/screenshot.png"},(0,i.kt)("img",{src:r(1291).Z,alt:"App Screenshot"})),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Lockfile Explorer main window")),(0,i.kt)("h2",{id:"essentials"},"Essentials"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/pages/basics/getting_started"},"Getting Started")," installing and using the app"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"NPM package:")," ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@rushstack/lockfile-explorer"},"@rushstack/lockfile-explorer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"What's new:")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/blob/main/apps/lockfile-explorer/CHANGELOG.md"},"CHANGELOG.md")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Source code:")," github.com/microsoft/rushstack/ ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/tree/main/apps/lockfile-explorer"},"apps/lockfile-explorer"))),(0,i.kt)("p",null,"Lockfile Explorer is part of the ",(0,i.kt)("a",{parentName:"p",href:"https://rushstack.io/"},"Rush Stack")," family of open source projects."))}d.isMDXComponent=!0},1291:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/screenshot-c5770dd26bcebae5023fc8d87485638d.png"}}]);