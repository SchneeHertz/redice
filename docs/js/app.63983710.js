(function(e){function t(t){for(var s,a,o=t[0],r=t[1],c=t[2],u=0,d=[];u<o.length;u++)a=o[u],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&d.push(n[a][0]),n[a]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),_()}function _(){for(var e,t=0;t<i.length;t++){for(var _=i[t],s=!0,o=1;o<_.length;o++){var r=_[o];0!==n[r]&&(s=!1)}s&&(i.splice(t--,1),e=a(a.s=_[0]))}return e}var s={},n={app:0},i=[];function a(t){if(s[t])return s[t].exports;var _=s[t]={i:t,l:!1,exports:{}};return e[t].call(_.exports,_,_.exports,a),_.l=!0,_.exports}a.m=e,a.c=s,a.d=function(e,t,_){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:_})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var _=Object.create(null);if(a.r(_),Object.defineProperty(_,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(_,s,function(t){return e[t]}.bind(null,s));return _},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/redice/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=r;i.push([0,"chunk-vendors"]),_()})({0:function(e,t,_){e.exports=_("56d7")},"56d7":function(e,t,_){"use strict";_.r(t);_("e260"),_("e6cf"),_("cca6"),_("a79d");var s=_("2b0e"),n=function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("div",{attrs:{id:"app"}},[_("router-view")],1)},i=[],a=(_("7faf"),_("2877")),o={},r=Object(a["a"])(o,n,i,!1,null,null,null),c=r.exports,l=_("8c4f"),u=function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("div",{staticClass:"home"},[_("span",{staticClass:"main-heading"},[e._v("TRPG模拟器")]),_("span",{staticClass:"sub-heading"},[e._v("("+e._s(e.subHeading)+")")]),_("el-card",{attrs:{id:"content"}},[_("el-row",{attrs:{gutter:10,id:"card-row"}},[_("el-col",{attrs:{lg:8,sm:24}},[_("el-card",{class:{isBright:e.brightAction>0},attrs:{id:"action-card"},scopedSlots:e._u([{key:"header",fn:function(){return[_("span",[e._v("扭蛋")]),_("el-switch",{staticClass:"action-switch",attrs:{disabled:e.disableActionSwitch},model:{value:e.actionLock,callback:function(t){e.actionLock=t},expression:"actionLock"}})]},proxy:!0}])},[_("el-row",{staticClass:"icon-warp"},e._l(e.actionShowList1,(function(t){return _("el-col",{key:t.key,attrs:{span:6}},[_("transition",{attrs:{name:"fast-fade",mode:"out-in"}},[t.show?_("Roll",{ref:"action",refInFor:!0,attrs:{eventNow:"semp.webp",event_icons:e.action_icons,eventAfter:t.icon,iconMargin:"2px"}}):_("img",{staticClass:"action-score",attrs:{src:"icons/+"+t.value+".webp"}})],1)],1)})),1),_("el-row",{staticClass:"icon-warp"},e._l(e.actionShowList2,(function(t){return _("el-col",{key:t.key,attrs:{span:6}},[_("transition",{attrs:{name:"fast-fade",mode:"out-in"}},[t.show?_("Roll",{ref:"action",refInFor:!0,attrs:{eventNow:"semp.webp",event_icons:e.action_icons,eventAfter:t.icon,iconMargin:"2px"}}):_("img",{staticClass:"action-score",attrs:{src:"icons/+"+t.value+".webp"}})],1)],1)})),1)],1)],1),_("el-col",{attrs:{lg:7,sm:24}},[_("el-card",{attrs:{id:"event-card"},scopedSlots:e._u([{key:"header",fn:function(){return[_("span",[e._v("随机事件")]),_("el-switch",{staticClass:"event-switch",attrs:{disabled:e.disableEventSwitch},model:{value:e.eventLock,callback:function(t){e.eventLock=t},expression:"eventLock"}})]},proxy:!0}])},[_("el-row",{staticClass:"icon-warp"},[_("el-col",{attrs:{span:8}},[_("Roll",{ref:"eventroll",attrs:{eventNow:"bemp.webp",event_icons:e.event_icons,eventAfter:e.eventShow,iconMargin:"2px 10px"}})],1),_("el-col",{attrs:{span:8}},[_("Roll",{ref:"eventrollvalue",attrs:{eventNow:"bemp.webp",event_icons:e.number_icons,eventAfter:"bn"+e.eventValue+".webp",iconMargin:"2px 10px"}})],1),_("el-col",{attrs:{span:8}},[_("Roll",{ref:"eventresultroll",attrs:{eventNow:"bemp.webp",event_icons:e.number_icons,eventAfter:"bn"+e.eventRolled+".webp",iconMargin:"2px 10px"}})],1)],1)],1)],1),_("el-col",{attrs:{lg:9,sm:24}},[_("el-card",{directives:[{name:"show",rawName:"v-show",value:e.displayMarket,expression:"displayMarket"}],attrs:{id:"market-card"},scopedSlots:e._u([{key:"header",fn:function(){return[_("span",[e._v("市场 ("+e._s(e.money)+";"+e._s(e.stock)+")")]),_("span",{style:{color:e.revenueRatio>0?"red":"green"}},[e._v("("+e._s(Math.round(100*e.revenueRatio))+"%)")]),_("el-button",{staticClass:"card-header-button",attrs:{type:"primary",size:"mini",plain:""},on:{click:e.openStore}},[e._v("购买扭蛋")]),_("el-button",{staticClass:"card-header-button",attrs:{type:"primary",size:"mini",plain:""},on:{click:function(t){e.displayMarket=!e.displayMarket}}},[e._v("状态")])]},proxy:!0}])},[_("el-row",[_("el-col",{attrs:{span:5}},[_("span",{staticClass:"price-now"},[e._v("当前价:"+e._s(e.price))])]),_("el-col",{attrs:{span:14}},[_("el-input",{attrs:{size:"mini"},scopedSlots:e._u([{key:"append",fn:function(){return[_("el-button",{attrs:{icon:"el-icon-plus"},on:{click:e.stockBuy}}),_("el-button",{attrs:{icon:"el-icon-minus"},on:{click:e.stockSell}})]},proxy:!0}]),model:{value:e.trade,callback:function(t){e.trade=e._n(t)},expression:"trade"}})],1),_("el-col",{attrs:{span:5}},[_("el-select",{attrs:{placeholder:"杠杆",size:"mini"},on:{change:e.updateLeverage},model:{value:e.leverage,callback:function(t){e.leverage=t},expression:"leverage"}},e._l(e.leverageOption,(function(e){return _("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),_("div",{attrs:{id:"k-graph"}})],1),_("el-card",{directives:[{name:"show",rawName:"v-show",value:!e.displayMarket,expression:"!displayMarket"}],attrs:{id:"status-card"},scopedSlots:e._u([{key:"header",fn:function(){return[_("span",[e._v("状态")]),_("el-button",{staticClass:"card-header-button",attrs:{type:"primary",size:"mini",plain:""},on:{click:e.openStore}},[e._v("购买扭蛋")]),_("el-button",{staticClass:"card-header-button",attrs:{type:"primary",size:"mini",plain:""},on:{click:function(t){e.displayMarket=!e.displayMarket}}},[e._v("市场")])]},proxy:!0}])},[_("el-descriptions",{attrs:{column:3,size:"mini"}},[_("el-descriptions-item",{attrs:{label:"动作点"}},[e._v(e._s(e.actionPoint))]),_("el-descriptions-item",{attrs:{label:"事件点"}},[e._v(e._s(e.eventPoint))]),_("el-descriptions-item",{attrs:{label:"代币"}},[e._v(e._s(e.money))])],1),_("el-descriptions",{attrs:{column:e.descriptionColumn,size:"mini"}},e._l(e.status,(function(t,s){return _("el-descriptions-item",{key:s,attrs:{label:s}},[e._v(e._s(t))])})),1),_("el-descriptions",{attrs:{column:1,size:"mini"}},e._l(e.backpack,(function(t,s){return _("el-descriptions-item",{key:s,attrs:{label:s}},[e._v(e._s(t.join(", ")))])})),1)],1)],1),_("el-col",{attrs:{lg:12,sm:24}},[_("el-card",{attrs:{id:"items-card"},scopedSlots:e._u([{key:"header",fn:function(){return[_("span",[e._v("事件")])]},proxy:!0}])},[_("el-tabs",{attrs:{id:"item-card",type:"border-card",tabPosition:"left"}},e._l(e.displayItemList,(function(t){return _("el-tab-pane",{key:t.id,attrs:{label:t.name}},[_("Item",{staticClass:"item-graph",attrs:{id:t.id,nodes:t.nodes,activeAction:t.activeAction},on:{choose:function(_){return e.chooseItem(t.id)}}}),_("div",{staticClass:"button-item-action"},[_("el-button",{attrs:{type:"success",size:"mini",icon:"el-icon-check",plain:"",round:""},on:{click:function(_){return e.chooseItem(t.id)}}}),_("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-delete",plain:"",round:""}})],1)],1)})),1)],1)],1),_("el-col",{attrs:{lg:12,sm:24}},[_("el-card",{attrs:{id:"story-card"},scopedSlots:e._u([{key:"header",fn:function(){return[_("span",[e._v("故事")])]},proxy:!0}])},[_("ul",{staticClass:"story-list"},e._l(e.displayStoryList,(function(t){return _("Story",e._b({key:t.id,attrs:{numberIcon:e.number_icons},on:{"choose-subid":e.solveChoose}},"Story",t,!1))})),1)])],1)],1)],1)],1)},d=[],f=_("9cae"),h=f["a"],p=(_("8360"),_("afc6"),Object(a["a"])(h,u,d,!1,null,"2fce20a8",null)),m=p.exports,E=function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("div",[_("h1",[e._v("TRPG模拟器")]),_("el-row",{staticClass:"introduction-page",attrs:{gutter:8}},e._l(e.scriptList,(function(t){return _("el-col",{key:t.id,attrs:{lg:8,sm:24}},[_("el-card",{scopedSlots:e._u([{key:"header",fn:function(){return[_("span",{staticClass:"title"},[e._v(e._s(t.name))]),_("el-button",{staticClass:"title-button",attrs:{type:"primary",size:"small",plain:""},on:{click:function(_){return e.handleClick(t.filename)}}},[e._v("选择")])]},proxy:!0}],null,!0)},[e._v(" "+e._s(t.description)+" ")])],1)})),1)],1)},v=[],b=_("8227"),O={data:function(){return{scriptList:b}},methods:{handleClick:function(e){this.$router.push({name:"Home",query:{script:e}})}}},M=O,P=(_("6a48"),Object(a["a"])(M,E,v,!1,null,"4d286d09",null)),D=P.exports;s["default"].use(l["a"]);var g=[{path:"/",name:"Introduction",component:D},{path:"/home",name:"Home",component:m,props:function(e){return{script:e.query.script}}}],k=new l["a"]({mode:"hash",base:"/redice/",routes:g}),y=k,w=_("2f62");s["default"].use(w["a"]);var L=new w["a"].Store({state:{},mutations:{},actions:{},modules:{}}),T=_("5c96"),A=_.n(T),C=(_("0fae"),_("bc3a")),R=_.n(C);s["default"].config.productionTip=!1,s["default"].prototype.$http=R.a,s["default"].use(A.a),new s["default"]({router:y,store:L,render:function(e){return e(c)}}).$mount("#app")},"6a48":function(e,t,_){"use strict";_("cffd")},"7faf":function(e,t,_){"use strict";_("b8ff")},8227:function(e){e.exports=JSON.parse('[{"id":"OM8bZXu81RXYc0R5gT7MA","name":"目标! 宝可梦大师","description":"来自真新镇的你，踏上了成为宝可梦大师的旅程","filename":"pokemonMaster_bKa"}]')},8360:function(e,t,_){"use strict";_("dba3")},"94f5":function(e,t,_){},"9cae":function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_schneehertz_Desktop_redice_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("2909"),C_Users_schneehertz_Desktop_redice_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("5530"),core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("fb6a"),core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("4de4"),core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("d81d"),core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("caad"),core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_5__),core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("2532"),core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_6__),core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("99af4"),core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_7__),core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("cb29"),core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_8__),core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("a4d3"),core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__),core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("e01a"),core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__),core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("b0c0"),core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__),core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("7db0"),core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_12__),lodash__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("2ef0"),lodash__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__),_components_roll_vue__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("c111"),_components_item_vue__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("b5c0"),_components_story_vue__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("bbf8"),nanoid__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("e1bd"),_antv_g2plot__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("99af");__webpack_exports__["a"]={name:"Home",components:{Roll:_components_roll_vue__WEBPACK_IMPORTED_MODULE_14__["a"],Item:_components_item_vue__WEBPACK_IMPORTED_MODULE_15__["a"],Story:_components_story_vue__WEBPACK_IMPORTED_MODULE_16__["a"]},props:{script:String},data:function(){return{timer:0,framerate:60,letters:["a","ch","d","e","f","g","ie","ii","iu","k","l","m","n","oo","oz","p","ps","r","s","t","th","v","x","z"],number_icons:[],action_icons:[],event_icons:[],itemList:[],eventList:[],prePickEventList:[],availableActionList:[],chosenItemList:[],chosenEventList:[],actionSwitch:!0,eventSwitch:!0,disableActionSwitch:!0,disableEventSwitch:!0,actionLock:!0,eventLock:!0,brightAction:0,existActionList:["sgf.webp","sgoz.webp","ygl.webp"],actionShowList:[],eventShow:"rbgk.webp",eventValue:9,eventRolled:6,actionPoint:3e3,eventPoint:0,descriptionColumn:3,status:{},backpack:{},itemToken:[],eventToken:[],pickEvent:void 0,pickEventFlow:void 0,storyList:[],subHeading:void 0,displayMarket:!1,money:0,trade:0,marketHistory:[{open:1,close:1,high:1,low:1,time:Date.now()}],second:0,price:1,leverage:1,leverageOption:[{label:"1x",value:1},{label:"5x",value:5},{label:"10x",value:10},{label:"50x",value:50},{label:"100x",value:100}],stock:0,hands:0,revenueRatio:0,stockGraph:void 0,worker:void 0}},computed:{actionShowList1:function(){return this.actionShowList.slice(0,4)},actionShowList2:function(){return this.actionShowList.slice(4,8)},displayItemList:function(){var e=this;return lodash__WEBPACK_IMPORTED_MODULE_13___default()(lodash__WEBPACK_IMPORTED_MODULE_13___default.a.cloneDeep(this.itemList)).map((function(t){var _=t.nodes.map((function(e){return e.icon}));return t.activeAction=lodash__WEBPACK_IMPORTED_MODULE_13___default.a.filter(e.existActionList,(function(e){return _.includes(e)})),t})).filter((function(t){return!(lodash__WEBPACK_IMPORTED_MODULE_13___default.a.isEmpty(t.activeAction)||e.chosenItemList.includes(t.id))})).sortBy((function(e){return-e.activeAction.length/e.nodes.length})).value()},tokenList:function(){return this.itemToken.concat(this.eventToken)},availableEventList:function(){var e=this;return lodash__WEBPACK_IMPORTED_MODULE_13___default.a.filter(this.prePickEventList,(function(t){return t.baseToken||(t.baseToken=[]),lodash__WEBPACK_IMPORTED_MODULE_13___default.a.every(t.baseToken,(function(t){return lodash__WEBPACK_IMPORTED_MODULE_13___default.a.includes(e.tokenList,t)}))}))},displayStoryList:function(){return lodash__WEBPACK_IMPORTED_MODULE_13___default.a.take(this.storyList,100)}},watch:{actionPoint:function(e,t){var _=this;if(e>=1200&&this.actionSwitch&&this.actionLock){this.actionSwitch=!1,this.actionPoint-=1200,this.brightAction>0?(this.actionShowList=lodash__WEBPACK_IMPORTED_MODULE_13___default.a.fill(Array(8),0).map((function(){return Object(C_Users_schneehertz_Desktop_redice_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["a"])({show:!0,key:Object(nanoid__WEBPACK_IMPORTED_MODULE_17__["a"])(8)},_.pickIcon(!0))})),this.brightAction-=1):this.actionShowList=lodash__WEBPACK_IMPORTED_MODULE_13___default.a.fill(Array(8),0).map((function(){return Object(C_Users_schneehertz_Desktop_redice_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["a"])({show:!0,key:Object(nanoid__WEBPACK_IMPORTED_MODULE_17__["a"])(8)},_.pickIcon())}));for(var s=function(e){7!==e?setTimeout((function(){_.$refs.action[e].roundEvent()}),250*e):setTimeout((function(){_.$refs.action[e].roundEvent(),setTimeout((function(){_.convertActionPoint(),setTimeout((function(){_.actionSwitch=!0}),1e3)}),5e3)}),250*e)},n=0;n<8;n++)s(n)}},eventPoint:function(e,t){var _=this;e>=1e3&&this.eventSwitch&&this.eventLock&&this.availableEventList.length>0&&(this.eventSwitch=!1,this.eventPoint-=1e3,this.pickEvent=lodash__WEBPACK_IMPORTED_MODULE_13___default.a.sample(this.availableEventList),this.pickEventFlow=lodash__WEBPACK_IMPORTED_MODULE_13___default.a.filter(this.eventList,this.pickEvent.id),this.eventShow=this.pickEvent.icon,"roll"==this.pickEvent.action?(this.eventValue=this.pickEvent.actionValue,setTimeout((function(){_.$refs.eventroll.roundEvent(),_.$refs.eventrollvalue.roundEvent(),_.eventRolled=lodash__WEBPACK_IMPORTED_MODULE_13___default.a.random(0,9),setTimeout((function(){_.storyList.unshift({id:Object(nanoid__WEBPACK_IMPORTED_MODULE_17__["a"])(),messageType:"message",message:_.pickEvent.description}),_.$refs.eventresultroll.roundEvent(),setTimeout((function(){_.eventRolled>=_.eventValue?(_.storyList.unshift({id:Object(nanoid__WEBPACK_IMPORTED_MODULE_17__["a"])(),messageType:"message",message:_.pickEvent.success}),setTimeout((function(){_.solveFlow(_.pickEvent.id,_.pickEvent.successRedirect)}),1e3)):(_.storyList.unshift({id:Object(nanoid__WEBPACK_IMPORTED_MODULE_17__["a"])(),messageType:"message",message:_.pickEvent.fail}),setTimeout((function(){_.solveFlow(_.pickEvent.id,_.pickEvent.failRedirect)}),1e3))}),4500)}),4500)}),1e3)):(this.eventValue=0,setTimeout((function(){_.$refs.eventroll.roundEvent(),_.$refs.eventrollvalue.roundEvent(),setTimeout((function(){_.storyList.unshift({id:Object(nanoid__WEBPACK_IMPORTED_MODULE_17__["a"])(),messageType:"message",message:_.pickEvent.description}),_.solveFlow(_.pickEvent.id,1)}),4500)}),1e3)))}},mounted:function(){var e=this;this.caculateFramerate(),this.timeFlow(),this.action_icons=this.geneList(["s","y","rb"],["g"],this.letters),this.number_icons=this.geneList(["b"],["n"],[0,1,2,3,4,5,6,7,8,9]),this.event_icons=this.geneList(["b","c","rb"],["g"],this.letters),this.actionShowList=lodash__WEBPACK_IMPORTED_MODULE_13___default.a.fill(Array(8),0).map((function(){return Object(C_Users_schneehertz_Desktop_redice_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["a"])({show:!0,key:Object(nanoid__WEBPACK_IMPORTED_MODULE_17__["a"])(8)},e.pickIcon())})),this.createGraph(),setInterval((function(){e.stockGraph.update({data:e.marketHistory})}),1e4),this.$http.get("/redice/data/".concat(this.script,".json")).then((function(t){var _=t.data;e.itemList=_.itemList,e.eventList=_.eventList,e.descriptionColumn=_.column,e.status=_.status,e.subHeading=_.name,e.backpack=_.backpack,e.talk(_.opening),e.prePickEventList=lodash__WEBPACK_IMPORTED_MODULE_13___default.a.filter(e.eventList,(function(e){return lodash__WEBPACK_IMPORTED_MODULE_13___default.a.has(e,"icon")}))})).catch((function(){e.$router.push("/")})),this.worker=new Worker("/redice/stock.worker.js"),this.worker.onmessage=function(t){var _=t.data,s=_.money,n=_.price,i=_.stock,a=_.hands,o=_.marketHistory,r=_.revenueRatio;e.money=s,e.price=n,e.stock=i,e.hands=a,e.marketHistory=o,e.revenueRatio=r}},beforeDestroy:function(){this.worker.terminate()},methods:{talk:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],_=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3;t.length>0&&setTimeout((function(){e.storyList.unshift({id:Object(nanoid__WEBPACK_IMPORTED_MODULE_17__["a"])(),messageType:"message",message:t.shift()}),e.talk(t,_)}),_)},pickIcon:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[{color:"rb",ratio:98,value:500},{color:"y",ratio:80,value:100},{color:"s",ratio:0,value:10}],_=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"g",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.letters;if(e){var n=lodash__WEBPACK_IMPORTED_MODULE_13___default.a.sample(lodash__WEBPACK_IMPORTED_MODULE_13___default.a.without.apply(lodash__WEBPACK_IMPORTED_MODULE_13___default.a,[this.action_icons].concat(Object(C_Users_schneehertz_Desktop_redice_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["a"])(this.existActionList))));if(n){var i;switch(n[0]){case"r":i=500;break;case"y":i=100;break;case"s":i=10;break}return{icon:n,value:i}}return{icon:"rbgoz.webp",value:500}}var a=lodash__WEBPACK_IMPORTED_MODULE_13___default.a.random(1,100),o=lodash__WEBPACK_IMPORTED_MODULE_13___default.a.sample(s),r=lodash__WEBPACK_IMPORTED_MODULE_13___default.a.find(t,(function(e){return a>e.ratio}));return{icon:"".concat(r.color).concat(_).concat(o,".webp"),value:r.value}},convertActionPoint:function(){var e=this;lodash__WEBPACK_IMPORTED_MODULE_13___default.a.forIn(this.actionShowList,(function(t){e.existActionList.includes(t.icon)?(e.$set(t,"show",!1),e.actionPoint+=t.value):e.existActionList.push(t.icon),e.eventPoint+=25}))},chooseItem:function(e){var t=lodash__WEBPACK_IMPORTED_MODULE_13___default.a.find(this.displayItemList,{id:e});t.activeAction.length==t.nodes.length&&(t.onetime&&this.chosenItemList.push(e),this.existActionList=lodash__WEBPACK_IMPORTED_MODULE_13___default.a.without.apply(lodash__WEBPACK_IMPORTED_MODULE_13___default.a,[this.existActionList].concat(Object(C_Users_schneehertz_Desktop_redice_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["a"])(t.activeAction))),this.handleEffect(t),this.handleToken("itemToken",t),this.handleItem(t),lodash__WEBPACK_IMPORTED_MODULE_13___default.a.isEmpty(t.description)||this.storyList.unshift({id:Object(nanoid__WEBPACK_IMPORTED_MODULE_17__["a"])(),messageType:"message",message:t.description}))},triggerEvent:function(e){this.pickEvent=lodash__WEBPACK_IMPORTED_MODULE_13___default.a.find(this.prePickEventList,{name:e}),lodash__WEBPACK_IMPORTED_MODULE_13___default.a.isEmpty(this.pickEvent.description)||this.storyList.unshift({id:Object(nanoid__WEBPACK_IMPORTED_MODULE_17__["a"])(),messageType:"message",message:this.pickEvent.description}),this.solveFlow(this.pickEvent.id,1)},solveFlow:function solveFlow(id,subID){var _this8=this;if(!lodash__WEBPACK_IMPORTED_MODULE_13___default.a.isNumber(subID))return!1;var foundFlow=lodash__WEBPACK_IMPORTED_MODULE_13___default.a.find(this.eventList,{id:id,subID:subID});switch(foundFlow.action){case"roll":var rolled=lodash__WEBPACK_IMPORTED_MODULE_13___default.a.random(0,9),extraPoint=this.status[foundFlow.actionType]||0,result=Math.round(rolled+extraPoint)>9?9:Math.round(rolled+extraPoint)<0?0:Math.round(rolled+extraPoint);this.storyList.unshift({id:Object(nanoid__WEBPACK_IMPORTED_MODULE_17__["a"])(),messageType:"roll",message:foundFlow.subFlowDescription,rollType:foundFlow.actionType,determValue:foundFlow.actionValue,determRolled:{value:rolled,show:!0},determRolledRevise:result,determResult:result>=foundFlow.actionValue,success:foundFlow.success,fail:foundFlow.fail}),setTimeout((function(){result>=foundFlow.actionValue?_this8.solveFlow(id,foundFlow.successRedirect):_this8.solveFlow(id,foundFlow.failRedirect)}),5e3);break;case"check":var checkFunction=eval("a=>"+foundFlow.actionValue);checkFunction(lodash__WEBPACK_IMPORTED_MODULE_13___default.a.get(this,foundFlow.actionType))?(this.storyList.unshift({id:Object(nanoid__WEBPACK_IMPORTED_MODULE_17__["a"])(),messageType:"message",message:foundFlow.success}),setTimeout((function(){_this8.solveFlow(id,foundFlow.successRedirect)}),1e3)):(this.storyList.unshift({id:Object(nanoid__WEBPACK_IMPORTED_MODULE_17__["a"])(),messageType:"message",message:foundFlow.fail}),setTimeout((function(){_this8.solveFlow(id,foundFlow.failRedirect)}),1e3));break;case"choose":this.storyList.unshift({id:Object(nanoid__WEBPACK_IMPORTED_MODULE_17__["a"])(),messageType:"choose",message:foundFlow.subFlowDescription,optionList:foundFlow.optionList});break;case"end":this.storyList.unshift({id:Object(nanoid__WEBPACK_IMPORTED_MODULE_17__["a"])(),messageType:"message",message:foundFlow.subFlowDescription}),this.eventSwitch=!0,this.handleEffect(foundFlow),this.handleToken("eventToken",foundFlow),this.handleItem(foundFlow);break}},solveChoose:function(e){this.solveFlow(this.pickEvent.id,e)},handleEffect:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{statusEffect:{},eventEffect:{}};this.handleStatusEffect(e.statusEffect),this.handleEventEffect(e.eventEffect)},handleStatusEffect:function(e){var t=this;lodash__WEBPACK_IMPORTED_MODULE_13___default.a.forIn(e,(function(e,_){t.$set(t.status,_,t.status[_]+e)}))},handleEventEffect:function(e){var t=this;lodash__WEBPACK_IMPORTED_MODULE_13___default.a.forIn(e,(function(e,_){switch(_){case"immediate":t.triggerEvent(e);break;case"add":case"remove":break}}))},handleToken:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"eventToken",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{addToken:[],removeToken:[]};this[e]=lodash__WEBPACK_IMPORTED_MODULE_13___default()([].concat(Object(C_Users_schneehertz_Desktop_redice_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["a"])(this[e]),Object(C_Users_schneehertz_Desktop_redice_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["a"])(t.addToken))).uniq().compact().value(),this[e]=lodash__WEBPACK_IMPORTED_MODULE_13___default.a.filter(this[e],(function(e){return!t.removeToken.includes(e)}))},handleItem:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{item:[]};lodash__WEBPACK_IMPORTED_MODULE_13___default.a.forIn(t.item,(function(t){switch(t.action){case"add":e.backpack[t.backpack]=lodash__WEBPACK_IMPORTED_MODULE_13___default.a.uniq([].concat(Object(C_Users_schneehertz_Desktop_redice_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["a"])(e.backpack[t.backpack]),[t.name]));break;case"remove":e.backpack[t.backpack]=lodash__WEBPACK_IMPORTED_MODULE_13___default.a.filter(e.backpack[t.backpack],(function(e){return e!=t.name}));break}}))},caculateFramerate:function(){var e=this,t=0,_=Date.now(),s=function s(){if(t<1e3)t++,requestAnimationFrame(s);else{var n=Date.now(),i=Math.round(1e6/(n-_));e.framerate=i>=60?i:60}};requestAnimationFrame(s)},timeFlow:function(){var e=this,t=0,_=function _(){++t%e.framerate==0&&(e.timer+=60,e.actionPoint+=20),requestAnimationFrame(_)};requestAnimationFrame(_)},createGraph:function(){this.stockGraph=new _antv_g2plot__WEBPACK_IMPORTED_MODULE_18__["Stock"]("k-graph",{data:this.marketHistory,height:200,xField:"time",yField:["open","close","high","low"]}),this.stockGraph.render()},stockBuy:function(){lodash__WEBPACK_IMPORTED_MODULE_13___default.a.isNumber(this.trade)&&this.trade>=0&&(this.trade<=this.money?(this.money-=this.trade,this.worker.postMessage(["buy",this.trade,this.leverage])):this.$message.warning("代币不足"))},stockSell:function(){lodash__WEBPACK_IMPORTED_MODULE_13___default.a.isNumber(this.trade)&&this.trade>=0&&(this.trade<=this.stock?(this.stock-=this.trade,this.worker.postMessage(["sell",this.trade,this.leverage])):this.$message.warning("持仓不足"))},updateLeverage:function(e){this.worker.postMessage(["sell",0,e])},openStore:function(){var e=this;this.$confirm("消耗代币购买动作点和闪光次数","商店",{distinguishCancelAndClose:!0,center:!0,confirmButtonText:"1000代币/1闪光次数",cancelButtonText:"50代币/1200动作点",beforeClose:function(t,_,s){"close"===t?s():"cancel"===t?e.money>50?(e.actionPoint+=1200,e.money-=50,e.worker.postMessage(["spend",50])):e.$message.warning("代币不足"):e.money>1e3?(e.brightAction+=1,e.money-=1e3,e.worker.postMessage(["spend",1e3])):e.$message.warning("代币不足")}}).catch((function(){}))},geneList:function(e,t,_){var s=[];return lodash__WEBPACK_IMPORTED_MODULE_13___default.a.forIn(e,(function(e){lodash__WEBPACK_IMPORTED_MODULE_13___default.a.forIn(t,(function(t){lodash__WEBPACK_IMPORTED_MODULE_13___default.a.forIn(_,(function(_){s.push(e+t+_+".webp")}))}))})),s}}}},a61b:function(e,t,_){},a6f0:function(e,t,_){"use strict";_("bd39")},afc6:function(e,t,_){"use strict";_("a61b")},b5c0:function(e,t,_){"use strict";var s=function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("div",{attrs:{id:e.id},on:{click:function(t){return e.$emit("choose")}}})},n=[],i=(_("d81d"),_("caad"),_("2532"),_("7c3e")),a=_("2ef0"),o=_.n(a),r={props:{nodes:{type:Array,default:function(){return[]}},activeAction:{type:Array,default:function(){return[]}},id:String},data:function(){return{graph:void 0}},mounted:function(){this.graph=new i["a"].Graph({container:this.id,width:376,height:376}),this.graph.read({nodes:this.geneNodes()})},watch:{activeAction:function(e,t){o.a.isEqual(e,t)||(this.graph.clear(),this.graph.read({nodes:this.geneNodes()}))}},methods:{geneNodes:function(){var e=this,t="icons/";return this.nodes.map((function(_){return{id:_.id,type:"image",size:94,x:94*(+_.x-1)+47,y:94*(+_.y-1)+47,img:t+_.icon,style:{opacity:e.activeAction.includes(_.icon)?1:.2}}}))}}},c=r,l=_("2877"),u=Object(l["a"])(c,s,n,!1,null,"225d7ef9",null);t["a"]=u.exports},b8ff:function(e,t,_){},bbf8:function(e,t,_){"use strict";var s=function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("li",{staticClass:"list-element"},["message"==e.messageType?_("div",{staticClass:"list-block"},[_("p",{staticClass:"message-line"},[e._v(e._s(e.message))])]):"roll"==e.messageType?_("div",{staticClass:"list-block"},[_("el-row",[_("p",{staticClass:"message-line"},[e._v(e._s(e.message))])]),_("el-row",[_("p",{staticClass:"message-line"},[e._v(e._s(e.rollMessage))])]),e.rolled?_("el-row",[_("p",{staticClass:"message-line"},[e._v("检定难度"+e._s(e.determValue)+"，检定值"+e._s(e.determRolled.value)+"，修正值"+e._s(e.determRolledRevise)+"，检定"+e._s(e.determResult?"成功":"失败"))]),_("p",{staticClass:"message-line"},[e._v(e._s(e.determResult?e.success:e.fail))])]):_("el-row",{staticClass:"icon-warp"},[_("el-col",{attrs:{span:5}},[_("img",{attrs:{src:"icons/bn"+e.determValue+".webp"}})]),_("el-col",{attrs:{span:5}},[_("transition",{attrs:{name:"fast-fade",mode:"out-in"}},[e.determRolled.show?_("Roll",{ref:"determroll",attrs:{eventNow:"bemp.webp",event_icons:e.numberIcon,eventAfter:"bn"+e.determRolled.value+".webp",iconMargin:"0"}}):_("img",{attrs:{src:"icons/bn"+e.determRolledRevise+".webp"}})],1)],1)],1)],1):"choose"==e.messageType?_("div",{staticClass:"list-block"},[_("el-row",[_("p",{staticClass:"message-line"},[e._v(e._s(e.message))])]),_("el-row",[_("el-radio-group",{attrs:{disabled:e.chosen},on:{change:e.solveChoose},model:{value:e.chosenValue,callback:function(t){e.chosenValue=t},expression:"chosenValue"}},e._l(e.optionList,(function(t){return _("el-radio",{key:t.label,attrs:{label:t.redirect}},[e._v(e._s(t.label))])})),1)],1)],1):e._e()])},n=[],i=(_("a9e3"),_("c111")),a={name:"Story",components:{Roll:i["a"]},props:{messageType:{type:String,default:"message"},message:String,numberIcon:Array,rollType:String,determValue:{type:Number,default:0},determRolled:{type:Object,default:function(){return{value:5,show:!0}}},determRolledRevise:{type:Number,default:0},determResult:Boolean,success:String,fail:String,optionList:Array},data:function(){return{rolled:!1,chosen:!1,chosenValue:void 0}},computed:{rollMessage:function(){return this.rollType+"检定"}},mounted:function(){var e=this;"roll"==this.messageType&&setTimeout((function(){e.$refs.determroll.fastRoundEvent(),setTimeout((function(){e.determRolled.show=!1,setTimeout((function(){e.rolled=!0}),1e3)}),3e3)}),250)},methods:{solveChoose:function(e){this.$emit("choose-subid",e),this.chosen=!0}}},o=a,r=(_("a6f0"),_("2877")),c=Object(r["a"])(o,s,n,!1,null,"5a97e604",null);t["a"]=c.exports},bd39:function(e,t,_){},c111:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("div",[_("transition",{attrs:{name:e.fadeType}},[e.trigger?_("img",{key:"on",staticClass:"event-icon",style:{margin:e.iconMargin},attrs:{src:e.eventImage1st}}):_("img",{key:"off",staticClass:"event-icon",style:{margin:e.iconMargin},attrs:{src:e.eventImage2nd}})]),_("img",{staticClass:"event-icon-block",style:{margin:e.iconMargin},attrs:{src:e.imageBlock}})],1)},i=[],a=(s("d81d"),s("cb29"),{props:{eventNow:String,eventAfter:String,event_icons:Array,pathString:{type:String,default:"icons/"},iconMargin:{type:String,default:"2px"}},data:function(){return{trigger:!0,eventImage1st:this.pathString+this.eventNow,eventImage2nd:this.pathString+this.eventNow,imageBlock:this.pathString+"bemp.webp",fadeType:""}},methods:{fastRoundEvent:function(){var e=this,t=0,s=6,n=20;this.fadeType="fast-fade";var i=Array(n-1).fill(0).map((function(){return e.pathString+e.event_icons[_.random(0,e.event_icons.length-1)]}));i.unshift(this.pathString+this.eventAfter);var a=function _(){++t%s==0&&(e.trigger=!e.trigger,e.trigger?e.eventImage1st=i.pop():e.eventImage2nd=i.pop()),t<120&&requestAnimationFrame(_)};requestAnimationFrame(a)},roundEvent:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[6,18,54],s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[90,180,240],n=0,i=t[0],a=Math.floor(s[0]/t[0]+(s[1]-s[0])/t[1]+(s[2]-s[1])/t[2]),o=Array(a-1).fill(0).map((function(){return e.pathString+e.event_icons[_.random(0,e.event_icons.length-1)]}));o.unshift(this.pathString+this.eventAfter);var r=function _(){++n%i==0&&(e.trigger=!e.trigger,e.trigger?e.eventImage1st=o.pop():e.eventImage2nd=o.pop()),n<s[0]?(e.fadeType="fast-fade",i=t[0],requestAnimationFrame(_)):n<s[1]?(e.fadeType="medium-fade",i=t[1],requestAnimationFrame(_)):n<s[2]&&(e.fadeType="slow-fade",i=t[2],requestAnimationFrame(_))};requestAnimationFrame(r)}}}),o=a,r=(s("f1e5"),s("2877")),c=Object(r["a"])(o,n,i,!1,null,"365e4ab2",null);t["a"]=c.exports},cffd:function(e,t,_){},dba3:function(e,t,_){},f1e5:function(e,t,_){"use strict";_("94f5")}});