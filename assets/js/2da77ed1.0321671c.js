"use strict";(self.webpackChunklfx_rushstack_io=self.webpackChunklfx_rushstack_io||[]).push([[999],{158:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>g});var r=o(6393);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function p(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?p(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)o=p[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)o=p[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var a=r.createContext({}),i=function(e){var t=r.useContext(a),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=i(e.components);return r.createElement(a.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,p=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=i(o),u=n,g=m["".concat(a,".").concat(u)]||m[u]||d[u]||p;return o?r.createElement(g,s(s({ref:t},c),{},{components:o})):r.createElement(g,s({ref:t},c))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=o.length,s=new Array(p);s[0]=u;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[m]="string"==typeof e?e:n,s[1]=l;for(var i=2;i<p;i++)s[i]=o[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},9545:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var r=o(9122),n=o(2501),p=(o(6393),o(158)),s=["components"],l={title:"NPM doppelgangers"},a=void 0,i={unversionedId:"pages/scenarios/npm_doppelgangers",id:"pages/scenarios/npm_doppelgangers",title:"NPM doppelgangers",description:"_This hands-on demo uses the lockfile-explorer-demos environment.",source:"@site/docs/pages/scenarios/npm_doppelgangers.md",sourceDirName:"pages/scenarios",slug:"/pages/scenarios/npm_doppelgangers",permalink:"/pages/scenarios/npm_doppelgangers",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/lfx.rushstack.io/docs/pages/scenarios/npm_doppelgangers.md",tags:[],version:"current",frontMatter:{title:"NPM doppelgangers"},sidebar:"docsSidebar",previous:{title:"Peer dependencies",permalink:"/pages/scenarios/peer_dependencies"},next:{title:"Help",permalink:"/pages/support/help"}},c={},m=[{value:"Step 1",id:"step-1",level:2},{value:"Step 2",id:"step-2",level:2},{value:"Step 3",id:"step-3",level:2}],d={toc:m},u="wrapper";function g(e){var t=e.components,o=(0,n.Z)(e,s);return(0,p.kt)(u,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"This hands-on demo uses the ",(0,p.kt)("inlineCode",{parentName:"em"},"lockfile-explorer-demos")," environment.\nFor setup instructions, read the ",(0,p.kt)("a",{parentName:"em",href:"/pages/scenarios/demos_repo"},"Demos repository")," article.")),(0,p.kt)("h2",{id:"step-1"},"Step 1"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"GitHub checkout branch:")," ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/microsoft/lockfile-explorer-demos/tree/demo/doppel-1"},"demo/doppel-1")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"cd lockfile-explorer-demos\n\n# WARNING: THIS COMMAND WILL DELETE ANY LOCAL CHANGES YOU MADE\ngit checkout -f -B demo/doppel-1 remotes/origin/demo/doppel-1\nrush install\n")),(0,p.kt)("a",{className:"no-external-link-icon",href:"https://raw.githubusercontent.com/microsoft/lockfile-explorer-demos/demo/doppel-1/common/images/lfx-demo-doppel-1.svg"},(0,p.kt)("img",{src:"https://raw.githubusercontent.com/microsoft/lockfile-explorer-demos/demo/doppel-1/common/images/lfx-demo-doppel-1.svg"})),(0,p.kt)("br",null),(0,p.kt)("h2",{id:"step-2"},"Step 2"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"GitHub checkout branch:")," ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/microsoft/lockfile-explorer-demos/tree/demo/doppel-2"},"demo/doppel-2")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"# WARNING: THIS COMMAND WILL DELETE ANY LOCAL CHANGES YOU MADE\ngit checkout -f -B demo/doppel-2 remotes/origin/demo/doppel-2\nrush install\n")),(0,p.kt)("a",{className:"no-external-link-icon",href:"https://raw.githubusercontent.com/microsoft/lockfile-explorer-demos/demo/doppel-2/common/images/lfx-demo-doppel-2.svg"},(0,p.kt)("img",{src:"https://raw.githubusercontent.com/microsoft/lockfile-explorer-demos/demo/doppel-2/common/images/lfx-demo-doppel-2.svg"})),(0,p.kt)("br",null),(0,p.kt)("h2",{id:"step-3"},"Step 3"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"GitHub checkout branch:")," ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/microsoft/lockfile-explorer-demos/tree/demo/doppel-3"},"demo/doppel-3")),(0,p.kt)("a",{className:"no-external-link-icon",href:"https://raw.githubusercontent.com/microsoft/lockfile-explorer-demos/demo/doppel-3/common/images/lfx-demo-doppel-3.svg"},(0,p.kt)("img",{src:"https://raw.githubusercontent.com/microsoft/lockfile-explorer-demos/demo/doppel-3/common/images/lfx-demo-doppel-3.svg"})),(0,p.kt)("br",null),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"# WARNING: THIS COMMAND WILL DELETE ANY LOCAL CHANGES YOU MADE\ngit checkout -f -B demo/doppel-3 remotes/origin/demo/doppel-3\nrush install\n")))}g.isMDXComponent=!0}}]);