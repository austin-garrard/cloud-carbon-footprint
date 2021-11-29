(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{122:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),c=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=c(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},g=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),g=a,d=p["".concat(i,".").concat(g)]||p[g]||b[g]||o;return n?r.a.createElement(d,u(u({ref:t},s),{},{components:n})):r.a.createElement(d,u({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var a=n(3),r=n(7),o=(n(0),n(122)),i={id:"creating-a-lookup-table",title:"Creating a Lookup Table",slug:"/creating-a-lookup-table"},u={unversionedId:"creating-a-lookup-table",id:"creating-a-lookup-table",isDocsHomePage:!1,title:"Creating a Lookup Table",description:"In order to support the big data processing requirements that some organizations have, it may be more practical or efficient for you to compute carbon metrics within your existing processing. To do so, we support the generation of a lookup table that can be utilized as an additional step in your pipeline.",source:"@site/docs/CreatingALookupTable.md",slug:"/creating-a-lookup-table",permalink:"/docs/creating-a-lookup-table",version:"current",sidebar:"tryNowSidebar",previous:{title:"Running the CLI",permalink:"/docs/running-the-cli"},next:{title:"Performance Configurations",permalink:"/docs/performance-configurations"}},l=[{value:"Example queries to create input CSV file",id:"example-queries-to-create-input-csv-file",children:[{value:"AWS - Athena Query",id:"aws---athena-query",children:[]},{value:"GCP - BigQuery Query",id:"gcp---bigquery-query",children:[]}]}],s={toc:l};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In order to support the big data processing requirements that some organizations have, it may be more practical or efficient for you to compute carbon metrics within your existing processing. To do so, we support the generation of a lookup table that can be utilized as an additional step in your pipeline."),Object(o.b)("p",null,"The lookup table maps the estimated energy (kilowatt-hours) and carbon emissions (CO2e) to 1 unit of usage, for all the unique combinations of region, service name, usage type and usage unit in the billing data of your cloud provider(s)."),Object(o.b)("p",null,"Once generated, this lookup table (CSV file) can be deployed to your ETL or other data processing pipeline. Then when processing your billing data, you can simply multiply your usage amount by the values in the lookup tables to estimate energy and CO2e. This approach avoids having to use the Cloud Carbon Footprint application code directly, and works regardless of the programming language or environment used in your pipeline."),Object(o.b)("p",null,"To generate this lookup table:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Make sure you have a CSV file inside the ",Object(o.b)("inlineCode",{parentName:"li"},"cli")," package, that contains all the unique region, service name, usage type and usage unit variations in your billing data, along with the vCPUs for that line item, if it exists. You can see an example of this using AWS data ",Object(o.b)("a",{parentName:"li",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/blob/trunk/packages/cli/src/__tests__/CreateLookupTable/aws_input.test.csv"},"here"),", and ",Object(o.b)("a",{parentName:"li",href:"#example-queries-to-create-input-csv-file"},"below")," for example queries to create this file."),Object(o.b)("li",{parentName:"ol"},"Run the following:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"yarn create-lookup-table <options>\n")),Object(o.b)("p",null,"The options for this command are:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'--awsInput <filename> (required. name of input file, e.g. "aws_input.csv")\n--awsOutput <filename> (optional, defaults to "aws_lookup_data.csv")\n--gcpInput <filename> (required. name of input file, e.g. "gcp_input.csv")\n--gcpOutput <filename> (optional, defaults to "gcp_lookup_data.csv")\n')),Object(o.b)("p",null,"Currently, only AWS and GCP is supported for this functionality."),Object(o.b)("p",null,"We would like to thank ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mfulleratlassian"},"@mfulleratlassian")," for contributing this functionality."),Object(o.b)("h2",{id:"example-queries-to-create-input-csv-file"},"Example queries to create input CSV file"),Object(o.b)("h3",{id:"aws---athena-query"},"AWS - Athena Query"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"SELECT \nline_item_product_code as serviceName,\nproduct_region as region,\nline_item_usage_type as usageType,\npricing_unit as usageUnit,\nproduct_vcpu as vCpus\nFROM <your-cost-and-usage-reports-table>\nWHERE line_item_line_item_type IN ('Usage', 'DiscountedUsage', 'SavingsPlanCoveredUsage')\nAND line_item_usage_start_date >= DATE('YYYY-MM-DD')\nAND line_item_usage_start_date <= DATE('YYYY-MM-DD')\nGROUP BY 1, 2, 3, 4, 5\n")),Object(o.b)("h3",{id:"gcp---bigquery-query"},"GCP - BigQuery Query"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"SELECT\nservice.description as serviceName,\nifnull(location.region, location.location) as region,\nsku.description as usageType,\nusage.unit as usageUnit,\nsystem_labels.value AS machineType\nFROM <your-billing-export-table>\nLEFT JOIN\nUNNEST(system_labels) AS system_labels\nON system_labels.key = \"compute.googleapis.com/machine_spec\"\nWHERE cost_type != 'rounding_error'\nAND usage.unit IN ('byte-seconds', 'seconds', 'bytes')\nAND usage_start_time >= TIMESTAMP('YYYY-MM-DD')\nAND usage_end_time <= TIMESTAMP('YYYY-MM-DD')\nGROUP BY serviceName, region, usageType, usageUnit, machineType\n")))}c.isMDXComponent=!0}}]);