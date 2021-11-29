(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{122:function(e,t,o){"use strict";o.d(t,"a",(function(){return s})),o.d(t,"b",(function(){return f}));var n=o(0),r=o.n(n);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},s=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(o),b=n,f=s["".concat(a,".").concat(b)]||s[b]||d[b]||i;return o?r.a.createElement(f,l(l({ref:t},c),{},{components:o})):r.a.createElement(f,l({ref:t},c))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=b;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var c=2;c<i;c++)a[c]=o[c];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"},75:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return a})),o.d(t,"metadata",(function(){return l})),o.d(t,"toc",(function(){return p})),o.d(t,"default",(function(){return u}));var n=o(3),r=o(7),i=(o(0),o(122)),a={id:"deploying",title:"Deploying",slug:"/deploying"},l={unversionedId:"deploying",id:"deploying",isDocsHomePage:!1,title:"Deploying",description:"Deploy to Google App Engine",source:"@site/docs/Deploying.md",slug:"/deploying",permalink:"/docs/deploying",version:"current",sidebar:"tryNowSidebar",previous:{title:"Configurations Glossary",permalink:"/docs/configurations-glossary"}},p=[{value:"Deploy to Google App Engine",id:"deploy-to-google-app-engine",children:[]},{value:"Deploy to other cloud providers",id:"deploy-to-other-cloud-providers",children:[]}],c={toc:p};function u(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"deploy-to-google-app-engine"},"Deploy to Google App Engine"),Object(i.b)("p",null,"Cloud Carbon Footprint is configured to be deployed to ",Object(i.b)("a",{parentName:"p",href:"https://cloud.google.com/appengine/"},"Google App Engine")," (standard environment) using GitHub Actions. See the ",Object(i.b)("a",{parentName:"p",href:"https://cloud.google.com/nodejs/getting-started/hello-world"},"Hello World example")," for instructions on setting up a Google Cloud Platform project and installing the Google Cloud SDK to your local machine."),Object(i.b)("p",null,"Before deploying, you'll need to build the application and create the packages/api/.env and packages/client/.env file as detailed above. There are two scripts to populate these files as part of the GitHub Actions pipeline: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/blob/trunk/packages/api/create_server_env_file.sh"},"packages/cli/create_server_env_file.sh")," and ",Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/blob/trunk/packages/client/create_client_env_file.sh"},"client/create_client_env_file.sh"),"."),Object(i.b)("p",null,"Once you've set up the CGP project and have the command line tools, Cloud Carbon Footprint can be deployed with ",Object(i.b)("inlineCode",{parentName:"p"},"./appengine/deploy-staging.sh")," or ",Object(i.b)("inlineCode",{parentName:"p"},"./appengine/deploy-production.sh"),", depending on your environment."),Object(i.b)("p",null,"Or if you want to use GitHub Actions, you can see the configuration for this in ",Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/blob/trunk/.github/workflows/ci.yml"},".github/workflows/ci.yml"),"."),Object(i.b)("p",null,"It will deploy to ",Object(i.b)("inlineCode",{parentName:"p"},"https://<something>.appspot.com"),"."),Object(i.b)("h2",{id:"deploy-to-other-cloud-providers"},"Deploy to other cloud providers"),Object(i.b)("p",null,"Cloud Carbon Footprint should be deployable to other cloud providers such as ",Object(i.b)("a",{parentName:"p",href:"https://www.heroku.com/"},"Heroku")," or ",Object(i.b)("a",{parentName:"p",href:"https://aws.amazon.com/elasticbeanstalk/"},"AWS Elastic Beanstalk"),". However, only Google App Engine has been tested currently, so there may be some work involved in doing this."),Object(i.b)("p",null,"Don't forget to deploy your ",Object(i.b)("inlineCode",{parentName:"p"},".env")," files or otherwise set the environment variables in your deployment."))}u.isMDXComponent=!0}}]);