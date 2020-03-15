(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{117:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return b}));var n=r(1),a=r(6),o=(r(0),r(191)),i=r(194),l={title:"Dungeon generator"},c={id:"version-2.0.0-alpha.0/generators/dungeon-generator",title:"Dungeon generator",description:'import { Image, Gallery, GalleryImage } from "@theme/Gallery";\r',source:"@site/versioned_docs\\version-2.0.0-alpha.0\\generators\\dungeon-generator.md",permalink:"/ProceduralLevelGenerator-Unity/docs/2.0.0-alpha.0/generators/dungeon-generator",editUrl:"https://github.com/OndrejNepozitek/ProceduralLevelGenerator-Unity/tree/docusaurus/versioned_docs/version-2.0.0-alpha.0/generators/dungeon-generator.md",version:"2.0.0-alpha.0",sidebar:"version-2.0.0-alpha.0/docs",previous:{title:"Performance tips",permalink:"/ProceduralLevelGenerator-Unity/docs/2.0.0-alpha.0/basics/performance-tips"},next:{title:"(PRO) Platformer generator",permalink:"/ProceduralLevelGenerator-Unity/docs/2.0.0-alpha.0/generators/platformer-generator"}},s=[{value:"Minimal setup",id:"minimal-setup",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Call the generator from script",id:"call-the-generator-from-script",children:[{value:"(PRO) With coroutines",id:"pro-with-coroutines",children:[]}]}],p={rightToc:s};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"minimal-setup"},"Minimal setup"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Add the ",Object(o.b)("strong",{parentName:"li"},"Dungeon Generator Component")," to any Game Object in the Scene."),Object(o.b)("li",{parentName:"ul"},"Assign your level graph to the ",Object(o.b)("strong",{parentName:"li"},"Level Graph")," field."),Object(o.b)("li",{parentName:"ul"},"Hit the ",Object(o.b)("strong",{parentName:"li"},"Generate dungeon")," button or enable ",Object(o.b)("strong",{parentName:"li"},"Generate on start")," and enter play mode")),Object(o.b)(i.c,{src:"img/v2/generators/dungeon_generator_inspector.png",caption:"Dungeon generator runner",width:"500px",mdxType:"Image"}),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("h4",{id:"input-config"},"Input config"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Level Graph")," - Level graph that should be used. Must not be null."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Use corridors")," - Whether corridors should be used between neighboring rooms. If enabled, corridor room templates must be provided in the level graph.")),Object(o.b)("h4",{id:"generator-config"},"Generator config"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Root Game Object")," - Game Object to which the generated level will be attached. New Game Object will be created if null."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Timeout")," - How long (in milliseconds) should we wait for the algorithm to generate a level. We may sometimes create an input that is too hard for the algoritm so it is good to stop after some amount of time with an error."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Repeat Mode Override")," - Whether to override the repeat mode of individual room templates.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"No override")," - Nothing is overriden, keep repeat modes from room templates."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Allow repeat")," - All room templates may repeat in generated levels."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"No immeadiate")," - Neighboring room must have different room templates."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"No repeat")," - All rooms must have different room templates.")))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:")," If you provide too few room templates, they may repeat in generated levels even if you choose the ",Object(o.b)("strong",{parentName:"p"},"No immeadiate")," or ",Object(o.b)("strong",{parentName:"p"},"No repeat")," options. To make sure that the repeat mode is satisifed, please provide enough room templates to choose from.")),Object(o.b)("h4",{id:"post-processing-config"},"Post processing config"),Object(o.b)("p",null,"Please refer see the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../generators/post-process"}),"Post processing")," page to find detailed information this configuration."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Initialize Shared Tilemaps")," - Whether to initialize tilemaps that will hold the generated level."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Tilemap Layers Handler")," - Which tilemap layers handler should be used to initialize shared tilemaps. Uses the ",Object(o.b)("inlineCode",{parentName:"li"},"DungeonTilemapLayersHandler")," if not set."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Copy Tiles To Shared Tilemaps")," - Whether to copy tiles from individual room template to the shared tilemaps."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Center Grid")," - Whether to move the level so that its center is approximately at (0,0). Useful for debugging in Scene view in editor."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Disable Room Template Renderers")," - Whether to disable tilemap renderers of individual rooms, useful only when ",Object(o.b)("em",{parentName:"li"},"Copy Tiles To Shared Tilemaps")," is enabled."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Disable Room Template Colliders")," - Whether to disable tilemap colliders of individual rooms, useful only when ",Object(o.b)("em",{parentName:"li"},"Copy Tiles To Shared Tilemaps")," is enabled.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"TODO:")," Link to page with tilemap layers.")),Object(o.b)("h4",{id:"other-config"},"Other config"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Use Random Seed")," - Whether to use a random seed for each new generated level. "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Random Generator Seed")," - Random generator seed that will be used when ",Object(o.b)("strong",{parentName:"li"},"Use Random Seed")," is disabled. Useful for debugging."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Generate On Start")," - Whether to generate a new level when play mode is entered.")),Object(o.b)("h2",{id:"call-the-generator-from-script"},"Call the generator from script"),Object(o.b)("p",null,"It is very simple to call the generator from a script:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Get the ",Object(o.b)("inlineCode",{parentName:"li"},"DungeonGenerator")," component from the game object that holds the generator"),Object(o.b)("li",{parentName:"ol"},"Call the ",Object(o.b)("inlineCode",{parentName:"li"},"Generate()")," method")),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),'var generator = GameObject.Find("Dungeon Generator").GetComponent<DungeonGenerator>();\ngenerator.Generate();\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:")," The ",Object(o.b)("inlineCode",{parentName:"p"},"Generate()")," method blocks the main Unity thread so the game may freeze while the dungeon is generated. The PRO version comes with an implementation that uses coroutines to make sure that the games does not freeze.")),Object(o.b)("h3",{id:"pro-with-coroutines"},"(PRO) With coroutines"))}b.isMDXComponent=!0},191:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(r),u=n,d=b["".concat(i,".").concat(u)]||b[u]||m[u]||o;return r?a.a.createElement(d,l({ref:t},s,{components:r})):a.a.createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},192:function(e,t,r){"use strict";var n=r(0),a=r(32);t.a=function(){return Object(n.useContext)(a.a)}},193:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(192);function a(e){const{siteConfig:t}=Object(n.a)(),{baseUrl:r="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},194:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return p})),r.d(t,"c",(function(){return m}));var n=r(1),a=r(6),o=r(0),i=r.n(o),l=r(193),c=function(e){return i.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:"calc("+100/e.cols+"% - 4px)",verticalAlign:"top"}},e.children)},s=function(e){return i.a.createElement("div",{style:{fontSize:"0px",margin:"20px 0"}},i.a.Children.map(e.children,(function(t){return i.a.cloneElement(t,{cols:e.cols||4,fixedHeight:e.fixedHeight})})))},p=function(e){return i.a.createElement(c,{cols:e.cols},i.a.createElement("a",{href:Object(l.a)(e.src),target:"_blank"},i.a.createElement("img",{src:Object(l.a)(e.src),alt:"result",style:{height:!0===e.fixedHeight?800/e.cols+"px":"auto",objectFit:!0===e.fixedHeight?"cover":"initial"}})),void 0!==e.caption&&i.a.createElement(b,null,e.caption))},b=function(e){return i.a.createElement("div",{style:{fontSize:16,fontStyle:"italic",textAlign:"center",margin:"10px 0px 15px"}},e.children)},m=function(e){e.src,e.caption;var t=Object(a.a)(e,["src","caption"]);return i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement("img",Object(n.a)({src:Object(l.a)(e.src)},t)),void 0!==e.caption&&i.a.createElement(b,null,e.caption))}}}]);