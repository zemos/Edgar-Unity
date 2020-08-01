(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{208:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),i=n(6),o=(n(0),n(241)),a=n(245),c={title:"Generator pipeline"},l={unversionedId:"generator-pipeline/introduction",id:"version-1.0.3/generator-pipeline/introduction",isDocsHomePage:!1,title:"Generator pipeline",description:"From the beginning, I wanted the plugin to be as extensible as possible, but also usable for people who are not programmers. The main goals were:",source:"@site/versioned_docs\\version-1.0.3\\generator-pipeline\\introduction.md",permalink:"/Edgar-Unity/docs/1.0.3/generator-pipeline/introduction",editUrl:"https://github.com/OndrejNepozitek/Edgar-Unity/tree/docusaurus/versioned_docs/version-1.0.3/generator-pipeline/introduction.md",version:"1.0.3",sidebar:"version-1.0.3/docs",previous:{title:"Platformers",permalink:"/Edgar-Unity/docs/1.0.3/examples/platformers"},next:{title:"Pipeline payload",permalink:"/Edgar-Unity/docs/1.0.3/generator-pipeline/pipeline-payload"}},s=[],p={rightToc:s};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"From the beginning, I wanted the plugin to be as extensible as possible, but also usable for people who are not programmers. The main goals were:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"For users to be able to configure the generator in Editor."),Object(o.b)("li",{parentName:"ul"},"For users to be able to easily replace individual parts of the algorithm without having to change the plugin's code."),Object(o.b)("li",{parentName:"ul"},"For me to be able to provide basic functionality that can be combined with functionality added by users.")),Object(o.b)("p",null,"After some research, I decided to implement the plugin as a pipeline consisting of tasks that operate on a payload that goes through all the tasks. Below you can see an example of a pipeline - both an abstract example and a real-life example."),Object(o.b)(a.c,{src:"img/original/pipeline_diagram.png",caption:"Pipeline example",mdxType:"Image"}),Object(o.b)("p",null,"Internally, the generator is simply an array of pipeline tasks together with a script that can initialize the payload. And because all these scripts inherit from ScriptableObject, we can easily work with them in the inspector window."),Object(o.b)(a.c,{src:"img/original/pipeline_inspector.png",caption:"Example pipeline as seen in the inspector window.",mdxType:"Image"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:")," You are not forced to divide your own code into multiple tasks. If you feel like there is no benefit in doing that, you can simply create one task and put all your logic there.")))}u.isMDXComponent=!0},241:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,f=u["".concat(a,".").concat(b)]||u[b]||d[b]||o;return n?i.a.createElement(f,c(c({ref:t},s),{},{components:n})):i.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},242:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));var r=n(243),i=n(244);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.a)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(r)return t+n;const a=!n.startsWith(t)?t+n.replace(/^\//,""):n;return o?e+a:a}(t,e,n,r)}}function a(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},243:function(e,t,n){"use strict";var r=n(0),i=n(20);t.a=function(){const e=Object(r.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},244:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))},245:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return u}));var r=n(2),i=n(0),o=n.n(i),a=n(242);const c=e=>o.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:`calc(${100/e.cols}% - 4px)`,verticalAlign:"top"}},e.children),l=e=>o.a.createElement("div",{style:{fontSize:"0px",margin:"20px 0"}},o.a.Children.map(e.children,t=>o.a.cloneElement(t,{cols:e.cols||4,fixedHeight:e.fixedHeight}))),s=e=>o.a.createElement(c,{cols:e.cols},o.a.createElement("a",{href:Object(a.a)(e.src),target:"_blank"},o.a.createElement("img",{src:Object(a.a)(e.src),alt:"result",style:{height:!0===e.fixedHeight?800/e.cols+"px":"auto",objectFit:!0===e.fixedHeight?"cover":"initial"}})),void 0!==e.caption&&o.a.createElement(p,null,e.caption)),p=e=>o.a.createElement("div",{style:{fontSize:16,fontStyle:"italic",textAlign:"center",margin:"10px 0px 15px"}},e.children),u=e=>{const{src:t,caption:n,...i}=e;return o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("img",Object(r.a)({src:Object(a.a)(e.src)},i)),void 0!==e.caption&&o.a.createElement(p,null,e.caption))}}}]);