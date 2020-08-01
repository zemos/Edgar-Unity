(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),i=n(6),a=(n(0),n(241)),o={title:"Fixed input"},p={unversionedId:"pipeline-tasks/fixed-input",id:"version-1.0.3/pipeline-tasks/fixed-input",isDocsHomePage:!1,title:"Fixed input",description:"This pipeline task is used to setup an input for the dungeon generator from a given level graph. Prepared input is added to the payload. It is called Fixed input because the input is created through GUI and is therefore always the same. If you want to precedurally create level graphs, you have to implement your own pipeline task.",source:"@site/versioned_docs\\version-1.0.3\\pipeline-tasks\\fixed-input.md",permalink:"/Edgar-Unity/docs/1.0.3/pipeline-tasks/fixed-input",editUrl:"https://github.com/OndrejNepozitek/Edgar-Unity/tree/docusaurus/versioned_docs/version-1.0.3/pipeline-tasks/fixed-input.md",version:"1.0.3",sidebar:"version-1.0.3/docs",previous:{title:"Run pipeline",permalink:"/Edgar-Unity/docs/1.0.3/generator-pipeline/run-pipeline"},next:{title:"Graph based generator",permalink:"/Edgar-Unity/docs/1.0.3/pipeline-tasks/graph-based-generator"}},l=[],c={rightToc:l};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This pipeline task is used to setup an input for the dungeon generator from a given level graph. Prepared input is added to the payload. It is called ",Object(a.b)("em",{parentName:"p"},"Fixed input")," because the input is created through GUI and is therefore always the same. If you want to precedurally create level graphs, you have to implement your own pipeline task."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Basic information:")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Menu location: ",Object(a.b)("em",{parentName:"li"},"Dungeon generator/Pipeline/Fixed input")),Object(a.b)("li",{parentName:"ul"},"Implementation: ",Object(a.b)("inlineCode",{parentName:"li"},"FixedInputConfig")," and ",Object(a.b)("inlineCode",{parentName:"li"},"FixedInputTask")," classes")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Options:")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"Level Graph"),": level graph to be used"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"Use Corridors"),": whether corridors are enabled or not",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"with corridors enabled, there must be at least one corridor room template in a given level graph")))))}u.isMDXComponent=!0},241:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),b=r,m=s["".concat(o,".").concat(b)]||s[b]||d[b]||a;return n?i.a.createElement(m,p(p({ref:t},c),{},{components:n})):i.a.createElement(m,p({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var c=2;c<a;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);