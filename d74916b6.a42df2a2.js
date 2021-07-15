(window.webpackJsonp=window.webpackJsonp||[]).push([[2349],{2420:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),p=(n(0),n(2839)),l=["components"],o={},c={unversionedId:"puppeteer.elementhandle.type",id:"puppeteer.elementhandle.type",isDocsHomePage:!1,title:"puppeteer.elementhandle.type",description:"Home &gt; puppeteer &gt; ElementHandle &gt; type",source:"@site/docs\\puppeteer.elementhandle.type.md",slug:"/puppeteer.elementhandle.type",permalink:"/puppeteer/docs/next/puppeteer.elementhandle.type",version:"current",sidebar:"docs",previous:{title:"puppeteer.elementhandle.tap",permalink:"/puppeteer/docs/next/puppeteer.elementhandle.tap"},next:{title:"puppeteer.elementhandle.uploadfile",permalink:"/puppeteer/docs/next/puppeteer.elementhandle.uploadfile"}},i=[{value:"ElementHandle.type() method",id:"elementhandletype-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Example 1",id:"example-1",children:[]},{value:"Example 2",id:"example-2",children:[]}],u={toc:i};function b(e){var t=e.components,n=Object(a.a)(e,l);return Object(p.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.elementhandle"},"ElementHandle")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.elementhandle.type"},"type")),Object(p.b)("h2",{id:"elementhandletype-method"},"ElementHandle.type() method"),Object(p.b)("p",null,"Focuses the element, and then sends a ",Object(p.b)("inlineCode",{parentName:"p"},"keydown"),", ",Object(p.b)("inlineCode",{parentName:"p"},"keypress"),"/",Object(p.b)("inlineCode",{parentName:"p"},"input"),", and ",Object(p.b)("inlineCode",{parentName:"p"},"keyup")," event for each character in the text."),Object(p.b)("p",null,"To press a special key, like ",Object(p.b)("inlineCode",{parentName:"p"},"Control")," or ",Object(p.b)("inlineCode",{parentName:"p"},"ArrowDown"),", use ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.elementhandle.press"},"ElementHandle.press()"),"."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"type(text: string, options?: {\n        delay: number;\n    }): Promise<void>;\n")),Object(p.b)("h2",{id:"parameters"},"Parameters"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Parameter"),Object(p.b)("th",{parentName:"tr",align:null},"Type"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"text"),Object(p.b)("td",{parentName:"tr",align:null},"string"),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"options"),Object(p.b)("td",{parentName:"tr",align:null},"{ delay: number; }"),Object(p.b)("td",{parentName:"tr",align:null})))),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,"Promise","<","void",">"),Object(p.b)("h2",{id:"example-1"},"Example 1"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-js"},"await elementHandle.type('Hello'); // Types instantly\nawait elementHandle.type('World', {delay: 100}); // Types slower, like a user\n\n")),Object(p.b)("h2",{id:"example-2"},"Example 2"),Object(p.b)("p",null,"An example of typing into a text field and then submitting the form:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-js"},"const elementHandle = await page.$('input');\nawait elementHandle.type('some text');\nawait elementHandle.press('Enter');\n\n")))}b.isMDXComponent=!0},2839:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,s=b["".concat(l,".").concat(d)]||b[d]||m[d]||p;return n?a.a.createElement(s,o(o({ref:t},i),{},{components:n})):a.a.createElement(s,o({ref:t},i))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,l=new Array(p);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var i=2;i<p;i++)l[i]=n[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);