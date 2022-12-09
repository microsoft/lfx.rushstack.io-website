"use strict";(self.webpackChunklfx_rushstack_io=self.webpackChunklfx_rushstack_io||[]).push([[46],{158:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(6393);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),u=o,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return t?a.createElement(h,i(i({ref:n},c),{},{components:t})):a.createElement(h,i({ref:n},c))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1805:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var a=t(216),o=t(2228),r=(t(6393),t(158)),i=["components"],s={title:"Version conflicts"},l=void 0,p={unversionedId:"pages/concepts/version_conflicts",id:"pages/concepts/version_conflicts",title:"Version conflicts",description:"From a high level perspective, Lockfile Explorer is a tool for coordinating versions of library packages.",source:"@site/docs/pages/concepts/version_conflicts.md",sourceDirName:"pages/concepts",slug:"/pages/concepts/version_conflicts",permalink:"/pages/concepts/version_conflicts",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/lfx.rushstack.io/docs/pages/concepts/version_conflicts.md",tags:[],version:"current",frontMatter:{title:"Version conflicts"},sidebar:"docsSidebar",previous:{title:"Getting started",permalink:"/pages/basics/getting_started"},next:{title:"SemVer",permalink:"/pages/concepts/semver"}},c={},d=[{value:"An example problem",id:"an-example-problem",level:2},{value:"Possible solutions",id:"possible-solutions",level:2},{value:"Is there a shortcut?",id:"is-there-a-shortcut",level:2}],m={toc:d};function u(e){var n=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"From a high level perspective, Lockfile Explorer is a tool for coordinating versions of library packages.\nThis is a classic problem in compature science, sometimes called ",(0,r.kt)("strong",{parentName:"p"},"dependency hell")," or ",(0,r.kt)("strong",{parentName:"p"},"DLL hell"),"."),(0,r.kt)("h2",{id:"an-example-problem"},"An example problem"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Some notation")),(0,r.kt)("p",{parentName:"blockquote"},"The expression ",(0,r.kt)("inlineCode",{parentName:"p"},"calendar@1.0.0")," indicates the published version ",(0,r.kt)("inlineCode",{parentName:"p"},"1.0.0")," of the NPM package ",(0,r.kt)("inlineCode",{parentName:"p"},"calendar"),".\nReal NPM packages sometimes also include a scope, for example ",(0,r.kt)("inlineCode",{parentName:"p"},"@my-company/calendar"),", in which case\nwe would write ",(0,r.kt)("inlineCode",{parentName:"p"},"@my-company/calendar@1.0.0"),"."),(0,r.kt)("p",{parentName:"blockquote"},"As a shorthand, where the package name doesn't matter, we may replace the package name with a\ncapital letter variable such as ",(0,r.kt)("inlineCode",{parentName:"p"},"A@1.2.3")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"B@3.2.1"),". If the extra SemVer parts are unimportant,\nwe may write ",(0,r.kt)("inlineCode",{parentName:"p"},"A@1")," as a shorthand for ",(0,r.kt)("inlineCode",{parentName:"p"},"A@1.0.0"),". These shorthand notations are not legal NPM package\nnames or versions.")),(0,r.kt)("p",null,"As a motivating example, suppose we're developing a project ",(0,r.kt)("inlineCode",{parentName:"p"},"my-app")," that depends on two hypothetical\nlibrary packages ",(0,r.kt)("inlineCode",{parentName:"p"},"calendar@1.0.0")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"video-player@2.0.0"),". Let's suppose that these two libraries\nboth depend on ",(0,r.kt)("inlineCode",{parentName:"p"},"fancy-button"),", but different versions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"calendar@1.0.0")," depends on ",(0,r.kt)("inlineCode",{parentName:"li"},"fancy-button@3.0.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"video-player@2.0.0")," depends on ",(0,r.kt)("inlineCode",{parentName:"li"},"fancy-button@4.0.0"))),(0,r.kt)("p",null,"Why are the versions inconsistent? Perhaps the latest release of ",(0,r.kt)("inlineCode",{parentName:"p"},"calendar")," was published sometime ago,\nwhereas ",(0,r.kt)("inlineCode",{parentName:"p"},"video-player")," just got a new release, so it's using the new version 4 of ",(0,r.kt)("inlineCode",{parentName:"p"},"fancy-button"),".\nThis creates a ",(0,r.kt)("strong",{parentName:"p"},'"diamond dependency"'),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"my-app")," directly depends on ",(0,r.kt)("inlineCode",{parentName:"p"},"calendar")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"video-player"),"\nbut indirectly depends on ",(0,r.kt)("inlineCode",{parentName:"p"},"fancy-button"),". And in this case, the diamond dependency causes ",(0,r.kt)("strong",{parentName:"p"},"side-by-side\nversions")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"fancy-button"),". Specifically the versions ",(0,r.kt)("inlineCode",{parentName:"p"},"3.0.0")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"4.0.0"),"."),(0,r.kt)("p",null,"Side-by-side versions may cause performance issues, such as bloating the size of your bundled app.\nThey may cause compile failures, for example if the TypeScript types for ",(0,r.kt)("inlineCode",{parentName:"p"},"fancy-button")," conflict\nwith each other. They may also cause runtime failures, for example initializing multiple instances\nof an object that is supposed to be a singleton."),(0,r.kt)("h2",{id:"possible-solutions"},"Possible solutions"),(0,r.kt)("p",null,"How can we eliminate these side-by-side versions? Here's some possible ideas:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ideally, we should upgrade ",(0,r.kt)("inlineCode",{parentName:"p"},"calendar")," to a newer version that uses ",(0,r.kt)("inlineCode",{parentName:"p"},"fancy-button@4.0.0"),".\nIn our example, ",(0,r.kt)("inlineCode",{parentName:"p"},"1.0.0")," was the latest release, so this means we need to contact the maintainers\nand get them to publish a new release. This can often take days or even months.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Force ",(0,r.kt)("inlineCode",{parentName:"p"},"calendar")," to use ",(0,r.kt)("inlineCode",{parentName:"p"},"fancy-button@4.0.0"),". The PNPM package manager provides mechanisms such\nas ",(0,r.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," that can override the ",(0,r.kt)("strong",{parentName:"p"},"package.json")," file for ",(0,r.kt)("inlineCode",{parentName:"p"},"calendar")," to force it to use\na different version. This can be a handy shortcut, but it is risky: ",(0,r.kt)("inlineCode",{parentName:"p"},"calendar")," wasn't tested with\n",(0,r.kt)("inlineCode",{parentName:"p"},"fancy-button@4.0.0"),". If Version 4 includes a breaking change, for example renaming an API,\nthen the code will malfunction.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Downgrade ",(0,r.kt)("inlineCode",{parentName:"p"},"video-player")," to an older version that uses ",(0,r.kt)("inlineCode",{parentName:"p"},"fancy-button@3.0.0"),". This is a less\nhappy solution, since an older release of ",(0,r.kt)("inlineCode",{parentName:"p"},"video-player")," may be missing features that we need.\nWe may have to go very far back in time to find a compatible version, or it may be the case\nthat there is no such version -- the first release of ",(0,r.kt)("inlineCode",{parentName:"p"},"video-player")," was already using ",(0,r.kt)("inlineCode",{parentName:"p"},"fancy-button"),"\nversion 4."))),(0,r.kt)("p",null,"It's not always obvious which approach is best. It can require some trial and error.\nOur example here involved only four packages (",(0,r.kt)("inlineCode",{parentName:"p"},"my-app"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"calendar"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"video-player"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"fancy-button"),'),\nwhereas a typical monorepo has thousands of package dependencies. And side-by-side versions are just one\nof many possible version conflicts that can arise among libraries. It does feel like dependency "hell."'),(0,r.kt)("p",null,"However, take heart! With some practice, and some guiding principles, and help from Lockfile Explorer,\nyou can learn how to solve these problems."),(0,r.kt)("h2",{id:"is-there-a-shortcut"},"Is there a shortcut?"),(0,r.kt)("p",null,"Version conflicts arise from a lack of ",(0,r.kt)("strong",{parentName:"p"},"coherence")," in authoring of source code: In our example,\nthe maintainers of ",(0,r.kt)("inlineCode",{parentName:"p"},"calendar"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"video-player"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"fancy-button")," work in different Git repositories.\nThey publish at different times. They probably don't even communicate with each other. When\n",(0,r.kt)("inlineCode",{parentName:"p"},"fancy-button")," releases ",(0,r.kt)("inlineCode",{parentName:"p"},"4.0.0"),", we can't upgrade ",(0,r.kt)("inlineCode",{parentName:"p"},"my-app")," until each intermediary dependency has\nupgraded and published a new version. This time lag can be considerable, especially if Version 4\nhas breaking API changes that require nontrivial work to fix. Lack of coherence creates time lags,\nwhich cause this trouble."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Shortcut 1: Full coherence")," The fully coherent way of working is the ",(0,r.kt)("strong",{parentName:"p"},"monorepo"),":\nAll your source code goes in a single branch of a single repo. If a breaking change is made to the\nAPI for ",(0,r.kt)("inlineCode",{parentName:"p"},"fancy-button"),", all consumers must be fixed at the time when that change is merged.\nThe cost of fixing downstream consumers is paid by the person who introduced the break\n(\"you broke it, you fix it\"), which avoids creating downstream victims, and ensures costs and effects\nare fully analyzed before a prospective change is released. Monorepos work great for a large code base\nthat's maintained partner teams within a single organization, but of course it's not a realistic model\nfor external libraries maintained by different parties on the internet. Nonetheless, if you think about it,\nthe various mitigations that we'll be presenting are basically approximating a monorepo, by manipulating\nyour ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," dependencies as if they were part of your own set of projects."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Shortcut 2: Full decoherence:")," The other escape hatch is to develop fully self-contained libraries,\nwhose ",(0,r.kt)("strong",{parentName:"p"},"package.json")," files have no dependencies at all. (In fact, this model was enforced by the\nBower package manager that predated NPM.) Unfortunately a complete lack of code sharing brings its\nown problems, of duplicated code and reinvented wheels."))}u.isMDXComponent=!0}}]);