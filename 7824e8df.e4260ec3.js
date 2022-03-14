(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{125:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=a.a.createContext({}),l=function(e){var t=a.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),b=l(n),u=r,p=b["".concat(i,".").concat(u)]||b[u]||d[u]||o;return n?a.a.createElement(p,c(c({ref:t},m),{},{components:n})):a.a.createElement(p,c({ref:t},m))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var m=2;m<o;m++)i[m]=n[m];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},193:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/ccf_compute_optimizer-63c1a5dc0cf22b8d79a7d284d1f4eab6.svg"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(125)),i={id:"get-recommendations",title:"Get Recommendations",slug:"/get-recommendations"},c={unversionedId:"get-recommendations",id:"get-recommendations",isDocsHomePage:!1,title:"Get Recommendations",description:"If users would like to view a list of recommendations to lower their energy consumption, co2e emissions as well as potential costs from their cloud usage, we have provided a /recommendations route to view the data in JSON format.",source:"@site/docs/Recommendations.md",slug:"/get-recommendations",permalink:"/docs/get-recommendations",version:"current",sidebar:"tryNowSidebar",previous:{title:"Alternative Data Approaches",permalink:"/docs/alternative-data-approaches"},next:{title:"Run with Docker",permalink:"/docs/run-with-docker"}},s=[{value:"AWS",id:"aws",children:[{value:"Rightsizing Recommendations",id:"rightsizing-recommendations",children:[]},{value:"Compute Optimizer Recommendations",id:"compute-optimizer-recommendations",children:[]}]},{value:"GCP",id:"gcp",children:[{value:"Recommender",id:"recommender",children:[]},{value:"Permissions",id:"permissions-1",children:[]}]},{value:"Query Parameter Options",id:"query-parameter-options",children:[]}],m={toc:s};function l(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},m,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"If users would like to view a list of recommendations to lower their energy consumption, co2e emissions as well as potential costs from their cloud usage, we have provided a ",Object(o.b)("inlineCode",{parentName:"p"},"/recommendations")," route to view the data in JSON format.\nUtilizing API's from AWS and GCP, we are able to grab the necessary data to use our ",Object(o.b)("a",{parentName:"p",href:"https://www.cloudcarbonfootprint.org/docs/methodology"},"Methodology")," and calculate potential energy savings in kilowatt-hours as well as co2e emissions savings in metric tons."),Object(o.b)("h2",{id:"aws"},"AWS"),Object(o.b)("h3",{id:"rightsizing-recommendations"},"Rightsizing Recommendations"),Object(o.b)("p",null,"AWS provides a feature in the Cost Explorer service that helps you identify cost-saving opportunities by downsizing or terminating instances in Amazon EC2.\nThe Rightsizing API currently only allows us to view usages for recommendation detail from two weeks prior."),Object(o.b)("p",null,"For further information regarding the AWS feature, you can view ",Object(o.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-rightsizing.html"},"this documentation")),Object(o.b)("p",null,"The types of recommendations we provide regarding Amazon EC2 instances are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Terminate - Remove/shutdown idle instances"),Object(o.b)("li",{parentName:"ul"},"Modify - Downsize instance types (i.e. Modify using instance type t2.micro to t2.nano)")),Object(o.b)("h4",{id:"permissions"},"Permissions"),Object(o.b)("p",null,"In order to retrieve AWS Right-sizing recommendations, access for Cost Explorer must be enabled. ",Object(o.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-access.html"},"Here")," is documentation for enabling access."),Object(o.b)("h3",{id:"compute-optimizer-recommendations"},"Compute Optimizer Recommendations"),Object(o.b)("p",null,"In addition to Rightsizing recommendations, AWS has a service called ",Object(o.b)("a",{parentName:"p",href:"https://aws.amazon.com/compute-optimizer/"},"Compute Optimizer")," that provides recommendations for reducing the cost of EC2 instances, Autoscaling Groups, EBS Volumes and Lambda functions."),Object(o.b)("p",null,"There is some overlap with the RIghtsizing recommendations above when it comes to EC2. By default, when our application finds a recommendation for the same EC2 instance type, our recommendations API returns the recommendation that has the highest amount of carbon savings, which could be from either the Rightsizing or Compute Optimizer recommendations."),Object(o.b)("p",null,"To include Compute Optimizer recommendations across all your AWS accounts and regions, there is some serverless infrastructure that is required to be deployed. This is because the Compute Optimizer API requires you to make individual requests for recommendations in each region and account, which isn\u2019t performant enough with larger AWS organizations. There may be a small cost associated with running this infrastructure."),Object(o.b)("p",null,"Here is a diagram of the infrastructure that needs to be deployed:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"CCF Compute Optimizer Architecture",src:n(193).default})),Object(o.b)("p",null,"To summarize: this infrastructure triggers an export of all Compute Optimizer recommendations for each region you are using into region-specific buckets using a CloudWatch Event and Lambda function. Then, using an S3 Event on those buckets, another Lambda function is triggered to copy the recommendations into a central bucket that the Cloud Carbon Footprint (CCF) application will read from."),Object(o.b)("p",null,"To make this easier, we have a ",Object(o.b)("a",{parentName:"p",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/blob/trunk/cloudformation/ccf-compute-optimizer.yaml"},"Cloud Formation template")," that configures this infrastructure for you. It requires these parameters:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"BucketNamePrefix")," - a prefix used for the region-specific buckets, in order for them to be globally unique, which is required by S3 bucket names.  "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"CentralBucketName")," - name of the central bucket that CCF will read from"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"CCFRoleName"),' - name of the AWS role that the CCF application is running as. This is "ccf-app\u201d if you used our default CloudFormation template to set up permissions for AWS.'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"CreateCentralBucket")," - a true or false value that determines whether to create the central bucket when you execute the template. Defaults to true."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"IncludeMemberAccounts")," - a true or false value that specifies whether to export Compute Optimizer recommendations for all accounts in a region. Defaults to true.")),Object(o.b)("p",null,"This template needs to be executed as an ",Object(o.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/what-is-cfnstacksets.html"},"AWS StackSet")," in the top level or administrator account, and will allow you to select the regions in which you want the above infrastructure to be created."),Object(o.b)("h4",{id:"additional-environment-variables-required-by-ccf"},"Additional environment variables required by CCF"),Object(o.b)("p",null,"In order for your CCF application to read recommendations from the central bucket, there are some additional configuration options that are required. You can read about them in the ",Object(o.b)("a",{parentName:"p",href:"./configurations-glossary#optionally-set-these-aws-variables"},"Configuration Glossary"),"."),Object(o.b)("h2",{id:"gcp"},"GCP"),Object(o.b)("h3",{id:"recommender"},"Recommender"),Object(o.b)("p",null,"GCP has many featured Recommenders. Our app is able to utilize Compute Engine resource rightsizing to provide recommendations to reduce energy usage and co2e emissions."),Object(o.b)("p",null,"For further information regarding the GCP feature, you can view ",Object(o.b)("a",{parentName:"p",href:"https://cloud.google.com/recommender"},"this documentation")),Object(o.b)("p",null,"The types of recommendations we provide to reduce compute and storage consumption are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Stop VM - Identify and delete idle virtual machines"),Object(o.b)("li",{parentName:"ul"},"Change Machine Type - Resize virtual machines for optimization"),Object(o.b)("li",{parentName:"ul"},"Snapshot and Delete Disk - Identify and delete unnecessary snapshots and persistent disks "),Object(o.b)("li",{parentName:"ul"},"Delete Image - Deleted unused images.")),Object(o.b)("h3",{id:"permissions-1"},"Permissions"),Object(o.b)("p",null,"Required permissions necessary for the GCP Recommender Client:"),Object(o.b)("details",null,Object(o.b)("summary",null,"Click to expand..."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Permissions"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"cloudasset.assets.listResource")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"compute.addresses.get")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"compute.addresses.list")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"compute.disks.get")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"compute.disks.list")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"compute.images.get")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"compute.images.list")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"compute.instances.get")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"compute.instances.list")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"compute.machineTypes.get")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"recommender.cloudsqlInstanceOutOfDiskRecommendations.get")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"recommender.cloudsqlInstanceOutOfDiskRecommendations.list")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"recommender.commitmentUtilizationInsights.get")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"recommender.commitmentUtilizationInsights.list")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"recommender.computeAddressIdleResourceInsights.get")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"recommender.computeAddressIdleResourceInsights.list")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"recommender.computeAddressIdleResourceRecommendations.get")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"recommender.computeAddressIdleResourceRecommendations.list")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"recommender.computeDiskIdleResourceInsights.get")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"recommender.computeDiskIdleResourceInsights.list")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"recommender.computeDiskIdleResourceRecommendations.get")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"recommender.computeDiskIdleResourceRecommendations.list")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"recommender.computeImageIdleResourceInsights.get")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"recommender.computeImageIdleResourceInsights.list")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"recommender.computeImageIdleResourceRecommendations.list")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"recommender.computeInstanceGroupManagerMachineTypeRecommendations.get")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"recommender.computeInstanceGroupManagerMachineTypeRecommendations.list")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"recommender.computeInstanceIdleResourceRecommendations.list")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"recommender.computeInstanceMachineTypeRecommendations.list")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"recommender.locations.list")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"recommender.loggingProductSuggestionContainerInsights.list")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"recommender.loggingProductSuggestionContainerRecommendations.list")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"recommender.monitoringProductSuggestionComputeInsights.list")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"recommender.monitoringProductSuggestionComputeRecommendations.list")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"recommender.usageCommitmentRecommendations.get")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"recommender.usageCommitmentRecommendations.list")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"resourcemanager.projects.get")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"resourcemanager.projects.list"))))),Object(o.b)("h2",{id:"query-parameter-options"},"Query Parameter Options"),Object(o.b)("p",null,"In the case of AWS Right-sizing recommendations, we have provided an optional query parameter ",Object(o.b)("inlineCode",{parentName:"p"},"awsRecommendationTarget")," to customize modify type recommendations that are returned."),Object(o.b)("p",null,"The default value of the parameter is set to ",Object(o.b)("inlineCode",{parentName:"p"},"SAME_INSTANCE_FAMILY"),". Currently, another option would be to return recommendations to modify instances across different instance types. This query parameter would look like the following:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"/recommendations?awsRecommendationTarget=CROSS_INSTANCE_FAMILY\n")),Object(o.b)("p",null,"Providing this query parameter will only affect AWS recommendations and not GCP."))}l.isMDXComponent=!0}}]);