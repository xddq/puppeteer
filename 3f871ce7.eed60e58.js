(window.webpackJsonp=window.webpackJsonp||[]).push([[687],{2839:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return s}));var n=t(0),a=t.n(n);function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){p(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),m=function(e){var r=a.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=m(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=m(t),b=n,s=l["".concat(o,".").concat(b)]||l[b]||f[b]||p;return t?a.a.createElement(s,c(c({ref:r},u),{},{components:t})):a.a.createElement(s,c({ref:r},u))}));function s(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var p=t.length,o=new Array(p);o[0]=b;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<p;u++)o[u]=t[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},758:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return u})),t.d(r,"default",(function(){return l}));var n=t(3),a=t(7),p=(t(0),t(2839)),o=["components"],c={},i={unversionedId:"puppeteer.page.mainframe",id:"puppeteer.page.mainframe",isDocsHomePage:!1,title:"puppeteer.page.mainframe",description:"Home &gt; puppeteer &gt; Page &gt; mainFrame",source:"@site/docs\\puppeteer.page.mainframe.md",slug:"/puppeteer.page.mainframe",permalink:"/puppeteer/docs/next/puppeteer.page.mainframe",version:"current"},u=[{value:"Page.mainFrame() method",id:"pagemainframe-method",children:[]},{value:"Remarks",id:"remarks",children:[]}],m={toc:u};function l(e){var r=e.components,t=Object(a.a)(e,o);return Object(p.b)("wrapper",Object(n.a)({},m,t,{components:r,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.page"},"Page")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.page.mainframe"},"mainFrame")),Object(p.b)("h2",{id:"pagemainframe-method"},"Page.mainFrame() method"),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"mainFrame(): Frame;\n")),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.frame"},"Frame")),Object(p.b)("p",null,"The page's main frame."),Object(p.b)("h2",{id:"remarks"},"Remarks"),Object(p.b)("p",null,"Page is guaranteed to have a main frame which persists during navigations."))}l.isMDXComponent=!0}}]);