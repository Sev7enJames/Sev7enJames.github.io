webpackJsonp([5],{Y3fG:function(e,n,t){"use strict";function a(e){l||t("k+en")}Object.defineProperty(n,"__esModule",{value:!0});var o=t("AhrA");document.title="DemoPage3";var i={name:"DemoPage3",data:function(){return{msg:"I am DemoPage3!"}},methods:{clickFirstPage:function(){o.a.navigate("/demo/page1")},clickFourthPage:function(){o.a.navigate("/demo/page4")}}},c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"hello"},[t("h1",[e._v(e._s(e.msg))]),e._v(" "),t("div",{on:{click:e.clickFirstPage}},[e._v("回到DemoPage1")]),e._v(" "),t("div",{on:{click:e.clickFourthPage}},[e._v("回到DemoPage4")])])},r=[];c._withStripped=!0;var s={render:c,staticRenderFns:r},m=s,l=!1,d=t("VU/8"),u=a,g=d(i,m,!1,u,"data-v-ba58c92c",null);g.options.__file="src/pages/demo/demo-page3.vue",g.esModule&&Object.keys(g.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files.");n.default=g.exports},i0Mm:function(e,n,t){n=e.exports=t("yGwj")(!0),n.push([e.i,"\nh1[data-v-ba58c92c],\nh2[data-v-ba58c92c] {\n  font-weight: normal;\n}\n","",{version:3,sources:["src/pages/demo/demo-page3.vue?92c18092","demo-page3.vue"],names:[],mappings:";AAiCA;;EAEA,mBAAA;AC/BA",file:"demo-page3.vue",sourcesContent:['<template>\n  <div class="hello">\n    <h1>{{ msg }}</h1>\n    <div @click="clickFirstPage">回到DemoPage1</div>\n     <div @click="clickFourthPage">回到DemoPage4</div>\n  </div>\n</template>\n\n<script>\nimport { Router } from \'../../core/router/Router\'\ndocument.title = \'DemoPage3\'\nexport default {\n  name: "DemoPage3",\n  data() {\n    return {\n      msg: "I am DemoPage3!"\n    };\n  },\n  methods: {\n    clickFirstPage() {\n       Router.navigate(\'/demo/page1\')\n    },\n\n    clickFourthPage() {\n       Router.navigate(\'/demo/page4\')\n    }\n  }\n\n};\n<\/script>\n\n\x3c!-- Add "scoped" attribute to limit CSS to this component only --\x3e\n<style scoped>\nh1,\nh2 {\n  font-weight: normal;\n}\n</style>\n',"\nh1[data-v-ba58c92c],\nh2[data-v-ba58c92c] {\n  font-weight: normal;\n}\n"]}])},"k+en":function(e,n,t){var a=t("i0Mm");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t("rjj0")("138da3fa",a,!1)}});
//# sourceMappingURL=5.869634df924f95256276.js.map