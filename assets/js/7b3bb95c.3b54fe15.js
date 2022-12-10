"use strict";(self.webpackChunklfx_rushstack_io=self.webpackChunklfx_rushstack_io||[]).push([[399],{158:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(6393);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),h=s(a),d=n,k=h["".concat(p,".").concat(d)]||h[d]||c[d]||o;return a?r.createElement(k,i(i({ref:t},m),{},{components:a})):r.createElement(k,i({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1045:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=a(216),n=a(2228),o=(a(6393),a(158)),i=["components"],l={title:"Demos repository"},p=void 0,s={unversionedId:"pages/scenarios/demos_repo",id:"pages/scenarios/demos_repo",title:"Demos repository",description:"This section contains a series of hands-on tutorials that explore various lockfile versioning scenarios.",source:"@site/docs/pages/scenarios/demos_repo.md",sourceDirName:"pages/scenarios",slug:"/pages/scenarios/demos_repo",permalink:"/pages/scenarios/demos_repo",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/lfx.rushstack.io/docs/pages/scenarios/demos_repo.md",tags:[],version:"current",frontMatter:{title:"Demos repository"},sidebar:"docsSidebar",previous:{title:"Strict settings",permalink:"/pages/concepts/strict_settings"},next:{title:"Side-by-side versions",permalink:"/pages/scenarios/side-by-side_versions"}},m={},c=[{value:"Preparing the Verdaccio environment",id:"preparing-the-verdaccio-environment",level:2},{value:"Checking out a demo branch",id:"checking-out-a-demo-branch",level:2},{value:"Diagram notation",id:"diagram-notation",level:2},{value:"Demo branches",id:"demo-branches",level:2}],h={toc:c};function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section contains a series of hands-on tutorials that explore various lockfile versioning scenarios.\nThe demo content can be checked out from this repo:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/lockfile-explorer-demos"},"https://github.com/microsoft/lockfile-explorer-demos")),(0,o.kt)("p",null,"The demo packages have names like ",(0,o.kt)("inlineCode",{parentName:"p"},"@rushstack/a"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"@rushstack/b"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"@rushstack/c"),", etc.\nThey are not real packages; instead you publish them to a ",(0,o.kt)("a",{parentName:"p",href:"https://verdaccio.org/"},"Verdaccio")," service\nthat is running on your ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost")," network, which is used by ",(0,o.kt)("inlineCode",{parentName:"p"},"rush install")," in the demo branches."),(0,o.kt)("h2",{id:"preparing-the-verdaccio-environment"},"Preparing the Verdaccio environment"),(0,o.kt)("p",null,"If you want to invoke ",(0,o.kt)("inlineCode",{parentName:"p"},"rush install")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"rush update")," in the demo branches, the ",(0,o.kt)("a",{parentName:"p",href:"https://verdaccio.org/"},"Verdaccio"),"\nNPM registry service must be running. Launch it like this:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Clone the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," branch of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/lockfile-explorer-demos"},"lockfile-explorer-demos"),"\nrepository. Since you'll need two clones of the repository, we recommend to name this folder\n",(0,o.kt)("inlineCode",{parentName:"p"},'"lockfile-explorer-demos-verdaccio"'),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/microsoft/lockfile-explorer-demos.git lockfile-explorer-demos-verdaccio\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use the ",(0,o.kt)("a",{parentName:"p",href:"https://pnpm.io/"},"PNPM package manager")," to install the tooling dependencies:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm install\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Launch the Verdaccio service:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm start\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"In a separate shell window"))," run ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm publish-all")," to publish all of the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/lockfile-explorer-demos/tree/main/demo-packages"},"demo NPM packages"),"\nto ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# (Open a separate shell window, since "pnpm start" is still running from step 3)\ncd lockfile-explorer-demos-verdaccio\n\npnpm publish-all\n')))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Deleting the Verdaccio database"),(0,o.kt)("p",{parentName:"blockquote"},"If want to experiment with changing the locally published ",(0,o.kt)("strong",{parentName:"p"},"package.json")," files, you MUST delete the Verdaccio\ndatabase first:"),(0,o.kt)("ol",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ol"},"Stop the service if it's already running (CTRL+C)"),(0,o.kt)("li",{parentName:"ol"},"Delete the temporary files ",(0,o.kt)("inlineCode",{parentName:"li"},"temp/verdaccio/storage/*")," by running: ",(0,o.kt)("inlineCode",{parentName:"li"},"rm -Rf temp")),(0,o.kt)("li",{parentName:"ol"},'Now you can redo the steps above ("Preparing the Verdaccio environment")'))),(0,o.kt)("h2",{id:"checking-out-a-demo-branch"},"Checking out a demo branch"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},'Is your "rush install" stalling with ECONNREFUSED warnings?'))),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},"WARN\u2009 GET http://127.0.0.1:54321/@rushstack/p/-/p-2.0.3.tgz error (ECONNREFUSED).\nWill retry in 10 seconds. 2 retries left.\n")),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"How to fix it:")," Make sure Verdaccio is running!")),(0,o.kt)("p",null,"Here's the steps for checking out the ",(0,o.kt)("inlineCode",{parentName:"p"},"demo/sample-1")," branch. Other branches can be checked out\nin the same way."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"We'll need a second clone for checking out branches. The documentation assumes this one is\ncalled ",(0,o.kt)("inlineCode",{parentName:"p"},'"lockfile-explorer-demos"')," (whereas your ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," branch clone is ",(0,o.kt)("inlineCode",{parentName:"p"},'"lockfile-explorer-demos-verdaccio"'),"):"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/microsoft/lockfile-explorer-demos.git lockfile-explorer-demos\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check out the demo branch:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# We occasionally update the demos, so make sure you have the latest branch\ngit fetch\n\n# WARNING: THIS COMMAND WILL DELETE ANY LOCAL CHANGES YOU MADE\ngit checkout -f -B demo/sample-1 remotes/origin/demo/sample-1\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install the NPM packages using ",(0,o.kt)("a",{parentName:"p",href:"https://rushjs.io/"},"Rush"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Verdaccio must be running for this command!\n\n# If you made changes to package.json, use "rush update --full" here instead\nrush install\n\n# NOTE: If Rush complains that package checksum hashes have changed, you may need\n# to do "rush purge" first.\n')))),(0,o.kt)("h2",{id:"diagram-notation"},"Diagram notation"),(0,o.kt)("p",null,"The GitHub branch for each scenario will be labeled like this:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"GitHub checkout branch:")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/lockfile-explorer-demos/tree/demo/sample-1"},"demo/sample-1")),(0,o.kt)("p",null,"The lockfile is always found in Rush's standard location of the branch:\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/lockfile-explorer-demos/blob/demo/sample-1/common/config/rush/pnpm-lock.yaml"},"common/config/rush/pnpm-lock.yaml")),(0,o.kt)("p",null,"Each demo includes a visual illustration of the lockfile for that branch. Here's the illustration for ",(0,o.kt)("inlineCode",{parentName:"p"},"demo/sample-1"),":"),(0,o.kt)("a",{className:"no-external-link-icon",href:"https://raw.githubusercontent.com/microsoft/lockfile-explorer-demos/demo/sample-1/common/images/lfx-demo-sample-1.svg"},(0,o.kt)("img",{src:"https://raw.githubusercontent.com/microsoft/lockfile-explorer-demos/demo/sample-1/common/images/lfx-demo-sample-1.svg"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"Some notes about the above notation:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The circled nodes (",(0,o.kt)("inlineCode",{parentName:"p"},"A"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"B"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"C"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"D"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"E"),") are local workspace projects.\nIn the Lockfile Explorer UI, these appear in the ",(0,o.kt)("strong",{parentName:"p"},'"Projects"')," tab.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The rectangular nodes (",(0,o.kt)("inlineCode",{parentName:"p"},"J@1_N2"),') are installed external NPM package folders.\nIn the Lockfile Explorer UI, these are called "lockfile entries" and appear on the ',(0,o.kt)("strong",{parentName:"p"},"Packages")," tab.\nThe labels use a shorthand for the PNPM entry identifier; for example ",(0,o.kt)("inlineCode",{parentName:"p"},"J@1_N2")," is shorthand\nfor ",(0,o.kt)("inlineCode",{parentName:"p"},"@rushstack/j/1.0.0_@rushstack+n@2.0.0")," in the above lockfile.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The vertical dashed line indicates the boundary between local workspace projects and external NPM packages.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The blue arrows indicate dependency relationships: If ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," points to ",(0,o.kt)("inlineCode",{parentName:"p"},"B"),", this means ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," has a dependency on ",(0,o.kt)("inlineCode",{parentName:"p"},"B"),".\nIf the ",(0,o.kt)("strong",{parentName:"p"},"package.json")," version specifier is relevant, it is shown next to the arrow.\nFor example, ",(0,o.kt)("inlineCode",{parentName:"p"},"J: ^1.0.0")," is shorthand for ",(0,o.kt)("inlineCode",{parentName:"p"},'"@rushstack/j": "^1.0.0"')," in the ",(0,o.kt)("inlineCode",{parentName:"p"},'"dependencies"')," or ",(0,o.kt)("inlineCode",{parentName:"p"},'"devDependencies"'),"\nof ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/lockfile-explorer-demos/blob/demo/sample-1/projects/d/package.json"},"projects/d/package.json"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If the ",(0,o.kt)("strong",{parentName:"p"},"package.json")," has ",(0,o.kt)("inlineCode",{parentName:"p"},'"peerDependencies"'),", they are shown as green lines.\nIf the peer is satisfied, then the arrow points to the resolved target lockfile entry."))),(0,o.kt)("h2",{id:"demo-branches"},"Demo branches"),(0,o.kt)("p",null,"Here's a quick list of the demo branches used in this tutorial series:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/lockfile-explorer-demos/tree/demo/doppel-1"},"demo/doppel-1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/lockfile-explorer-demos/tree/demo/doppel-2"},"demo/doppel-2")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/lockfile-explorer-demos/tree/demo/doppel-3"},"demo/doppel-3")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/lockfile-explorer-demos/tree/demo/peer-1"},"demo/peer-1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/lockfile-explorer-demos/tree/demo/peer-2"},"demo/peer-2")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/lockfile-explorer-demos/tree/demo/peer-3"},"demo/peer-3")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/lockfile-explorer-demos/tree/demo/peer-4"},"demo/peer-4")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/lockfile-explorer-demos/tree/demo/peer-5"},"demo/peer-5")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/lockfile-explorer-demos/tree/demo/sample-1"},"demo/sample-1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/lockfile-explorer-demos/tree/demo/sbs-1"},"demo/sbs-1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/lockfile-explorer-demos/tree/demo/sbs-2"},"demo/sbs-2")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/lockfile-explorer-demos/tree/demo/sbs-3"},"demo/sbs-3"))))}d.isMDXComponent=!0}}]);