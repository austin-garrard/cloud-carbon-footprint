(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(122)),i={id:"running-the-cli",title:"Running the CLI",slug:"/running-the-cli"},c={unversionedId:"running-the-cli",id:"running-the-cli",isDocsHomePage:!1,title:"Running the CLI",description:"We believe that getting your cloud emissions data should be easy. If you are looking to quickly get an output of data, the CLI is a great option. It allows you to specify exactly what data you\u2019re looking for, including the date range, regions, groupings and output type.",source:"@site/docs/RunningTheCli.md",slug:"/running-the-cli",permalink:"/docs/running-the-cli",version:"current",sidebar:"tryNowSidebar",previous:{title:"Run with Docker",permalink:"/docs/run-with-docker"},next:{title:"Creating a Lookup Table",permalink:"/docs/creating-a-lookup-table"}},u=[],l={toc:u};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"We believe that getting your cloud emissions data should be easy. If you are looking to quickly get an output of data, the CLI is a great option. It allows you to specify exactly what data you\u2019re looking for, including the date range, regions, groupings and output type."),Object(a.b)("h4",{id:"local"},"Local"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"yarn start-cli <options>\n")),Object(a.b)("h4",{id:"cli-options"},"CLI Options"),Object(a.b)("p",null,"You can run the tool interactively with the ",Object(a.b)("inlineCode",{parentName:"p"},"-i")," flag; CLI will ask for the options/parameters"),Object(a.b)("p",null,"Or you can choose to pass the parameters in a single line:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"--startDate YYYY-MM-DD \\\n--endDate YYYY-MM-DD \\\n--region [us-east-1 | us-east-2] \\\n--groupBy [day | dayAndService | service] \\\n--format [table | csv]\n")))}p.isMDXComponent=!0},122:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(n),f=r,b=s["".concat(i,".").concat(f)]||s[f]||d[f]||a;return n?o.a.createElement(b,c(c({ref:t},l),{},{components:n})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);