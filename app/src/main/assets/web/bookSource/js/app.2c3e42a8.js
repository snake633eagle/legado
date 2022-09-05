(function(){"use strict";var t={800:function(t,e,o){var n=o(963),r=o(252);const a={class:"editor"};function i(t,e,o,n,i,l){const c=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",a,[(0,r.Wm)(c)])}var l={setup(){}},c=o(744);const s=(0,c.Z)(l,[["render",i]]);var u=s,d=o(201),h=o(577);const p=t=>((0,r.dD)("data-v-de4729c0"),t=t(),(0,r.Cn)(),t),g={class:"left"},m=p((()=>(0,r._)("div",null,[(0,r._)("a",{href:"/"},"←主页"),(0,r._)("b",null,"书源")],-1))),b=["onClick"],v=["onClick"],k=["onClick"],w=["onClick"],S=["onClick"],C=["onClick"],_=["onClick"];function f(t,e,o,n,a,i){const l=(0,r.up)("router-link"),c=(0,r.up)("router-view"),s=(0,r.up)("edit-menu"),u=(0,r.up)("edit-out");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",g,[(0,r._)("div",null,[m,(0,r._)("ul",null,[(0,r.Wm)(l,{to:{name:"base"},custom:""},{default:(0,r.w5)((({navigate:t,isActive:e})=>[(0,r._)("li",{onClick:t,class:(0,h.C_)({active:e?"active":""})}," 基础 ",10,b)])),_:1}),(0,r.Wm)(l,{to:{name:"search"},custom:""},{default:(0,r.w5)((({navigate:t,isActive:e})=>[(0,r._)("li",{onClick:t,class:(0,h.C_)({active:e?"active":""})}," 搜索 ",10,v)])),_:1}),(0,r.Wm)(l,{to:{name:"find"},custom:""},{default:(0,r.w5)((({navigate:t,isActive:e})=>[(0,r._)("li",{onClick:t,class:(0,h.C_)({active:e?"active":""})}," 发现 ",10,k)])),_:1}),(0,r.Wm)(l,{custom:"",to:{name:"detail"}},{default:(0,r.w5)((({navigate:t,isActive:e})=>[(0,r._)("li",{onClick:t,class:(0,h.C_)({active:e?"active":""})}," 详情 ",10,w)])),_:1}),(0,r.Wm)(l,{custom:"",to:{name:"directory"}},{default:(0,r.w5)((({navigate:t,isActive:e})=>[(0,r._)("li",{onClick:t,class:(0,h.C_)({active:e?"active":""})}," 目录 ",10,S)])),_:1}),(0,r.Wm)(l,{custom:"",to:{name:"content"}},{default:(0,r.w5)((({navigate:t,isActive:e})=>[(0,r._)("li",{onClick:t,class:(0,h.C_)({active:e?"active":""})}," 正文 ",10,C)])),_:1}),(0,r.Wm)(l,{custom:"",to:{name:"other"}},{default:(0,r.w5)((({navigate:t,isActive:e})=>[(0,r._)("li",{onClick:t,class:(0,h.C_)({active:e?"active":""})}," 其他 ",10,_)])),_:1})])]),(0,r.Wm)(c,null,{default:(0,r.w5)((({Component:t})=>[((0,r.wg)(),(0,r.j4)(r.Ob,null,[((0,r.wg)(),(0,r.j4)((0,r.LL)(t)))],1024))])),_:1})]),(0,r.Wm)(s),(0,r.Wm)(u)],64)}var y=o(262);const I=t=>((0,r.dD)("data-v-8302f478"),t=t(),(0,r.Cn)(),t),D={class:"menu"},U=(0,r.Uk)("⇈推送源 "),x=I((()=>(0,r._)("span",null,"Ctrl+P",-1))),T=[U,x],B=(0,r.Uk)("⇊拉取源 "),K=I((()=>(0,r._)("span",null,"Shift+P",-1))),A=[B,K],j=(0,r.Uk)("⋙生成源"),E=I((()=>(0,r._)("span",null,"Ctrl+E",-1))),H=[j,E],N=(0,r.Uk)(" ✗清空表单"),O=I((()=>(0,r._)("span",null,"Shift+C",-1))),L=[N,O],P=(0,r.Uk)("↶撤销操作"),J=I((()=>(0,r._)("span",null,"Ctrl+Z",-1))),Z=[P,J],q=(0,r.Uk)("↷重做操作"),W=I((()=>(0,r._)("span",null,"Shift+R",-1))),M=[q,W],$=(0,r.Uk)(" ⇏调试源 "),R=I((()=>(0,r._)("span",null,"Ctrl+Enter",-1))),Y=[$,R],z=(0,r.Uk)(" ✓保存源"),V=I((()=>(0,r._)("span",null,"Ctrl+S",-1))),F=[z,V];function G(t,e,o,n,a,i){const l=(0,r.up)("edit-loading"),c=(0,r.up)("edit-warn"),s=(0,r.up)("edit-success");return(0,r.wg)(),(0,r.iD)("div",D,[(0,r._)("div",null,[n.isShow?((0,r.wg)(),(0,r.j4)(l,{key:0})):(0,r.kq)("",!0),(0,r.Wm)(c,{text:n.warnText,"is-show":n.warnShow,onChangeShow:n.changeShow},null,8,["text","is-show","onChangeShow"]),n.successShow?((0,r.wg)(),(0,r.j4)(s,{key:1,isShow:n.successShow,onChangeShow:n.changeSuccessShow,text:n.successText},null,8,["isShow","onChangeShow","text"])):(0,r.kq)("",!0)]),(0,r._)("button",{onClick:e[0]||(e[0]=(...t)=>n.push&&n.push(...t)),title:"Ctrl+P"},T),(0,r._)("button",{onClick:e[1]||(e[1]=(...t)=>n.pull&&n.pull(...t)),title:"Shift+P"},A),(0,r._)("button",{onClick:e[2]||(e[2]=(...t)=>n.conver&&n.conver(...t)),title:"Ctrl+E"},H),(0,r._)("button",{onClick:e[3]||(e[3]=(...t)=>n.clearEdit&&n.clearEdit(...t)),title:"Shift+C"},L),(0,r._)("button",{onClick:e[4]||(e[4]=(...t)=>n.undo&&n.undo(...t)),title:"Ctrl+Z"},Z),(0,r._)("button",{onClick:e[5]||(e[5]=(...t)=>n.redo&&n.redo(...t)),title:"Shift+R"},M),(0,r._)("button",{onClick:e[6]||(e[6]=(...t)=>n.debug&&n.debug(...t)),title:"Ctrl+Enter"},Y),(0,r._)("button",{onClick:e[7]||(e[7]=(...t)=>n.saveSource&&n.saveSource(...t)),title:"Ctrl+S"},F)])}function Q(t,e){let o;switch(o=null===localStorage.getItem("url")?"http://"+location.host+"/"+t:"http://"+localStorage.getItem("url")+"/"+t,console.log(o),t){case"getBookSources":return tt(o);case"saveBookSources":return X(o,e);case"deleteBookSources":return X(o,e)}}function X(t,e){return fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((t=>t.json()))}function tt(t){return fetch(t).then((t=>t.json()))}var et=o(907),ot=JSON.parse('{"bookSourceUrl":"","bookSourceType":"","bookSourceName":"","bookSourceGroup":"","bookSourceComment":"","loginUrl":"","loginUi":"","loginCheckJs":"","concurrentRate":"","header":"","bookUrlPattern":"","searchUrl":"","exploreUrl":"","enabled":true,"enabledExplore":true,"weight":null,"customOrder":null,"lastUpdateTime":0,"ruleSearch":{"checkKeyWord":"","bookList":"","name":"","author":"","kind":"","wordCount":"","lastChapter":"","intro":"","coverUrl":"","bookUrl":""},"ruleExplore":{"bookList":"","name":"","author":"","kind":"","wordCount":"","lastChapter":"","intro":"","coverUrl":"","bookUrl":""},"ruleBookInfo":{"init":"","name":"","author":"","kind":"","wordCount":"","lastChapter":"","intro":"","coverUrl":"","tocUrl":""},"ruleToc":{"chapterList":"","chapterName":"","chapterUrl":"","isVolume":"","isVip":"","isPay":"","updateTime":"","nextTocUrl":""},"ruleContent":{"webJs":"","content":"","nextContentUrl":"","sourceRegex":"","replaceRegex":"","imageStyle":"","payAction":""}}'),nt=(0,et.MT)({state:{bookSource:[],bookItemContent:ot,currentTab:localStorage.getItem("tabName")||"editTab",editTabSourceInfo:{},deBugMsg:"",searchKey:""},getters:{},mutations:{changeSearchKey(t,e){t.searchKey=e},changeSource(t,e){t.bookSource=e},changeBookSource(t,e){t.bookSource=e},changeBookItemContent(t,e){const o=JSON.stringify(e);t.bookItemContent=JSON.parse(o)},changeBookItemNewContent(t,e){if(e.type.includes("_")){let o=e.type.split("_")[0],n=e.type.split("_")[1];t.bookItemContent[o][n]=e.value}else t.bookItemContent[e.type]=e.value,t.bookItemContent.lastUpdateTime=(new Date).getTime()},changeTabName(t,e){t.currentTab=e,localStorage.setItem("tabName",e),console.log(e)},changeEidtTabSourceInfo(t){for(const e in ot)t.editTabSourceInfo[e]=ot[e];for(const e in t.bookItemContent)t.editTabSourceInfo[e]=t.bookItemContent[e]},editHistory(t,e){let o;if(localStorage.getItem("history"))o=JSON.parse(localStorage.getItem("history")),o.new.push(e),o.new.length>50&&o.new.shift(),o.old.length>50&&o.old.shift(),localStorage.setItem("history",JSON.stringify(o));else{const t={new:[e],old:[]};localStorage.setItem("history",JSON.stringify(t))}},editHistoryUndo(t){if(localStorage.getItem("history")){let e=JSON.parse(localStorage.getItem("history"));e.old.push(t.bookItemContent),e.new.length&&(t.bookItemContent=e.new.pop()),localStorage.setItem("history",JSON.stringify(e))}},clearAllHistory(){localStorage.setItem("history",JSON.stringify({new:[],old:[]}))},clearEdit(t){t.editTabSourceInfo={},t.bookItemContent={...ot}},changeDeBugMsg(t,e){let o=document.querySelector("#debug_text");o.scrollTop=o.scrollHeight,t.deBugMsg=t.deBugMsg+e+"\n"},deBugMsgClear(t){t.deBugMsg=""},clearAllSource(t){t.bookSource=[],console.log("clear all source ")}},actions:{},modules:{}});const rt=t=>((0,r.dD)("data-v-ab8a8a34"),t=t(),(0,r.Cn)(),t),at={class:"fixed"},it=rt((()=>(0,r._)("div",{class:"half-circle-spinner"},[(0,r._)("div",{class:"circle circle-1"}),(0,r._)("div",{class:"circle circle-2"})],-1))),lt=[it];function ct(t,e,o,n,a,i){return(0,r.wg)(),(0,r.iD)("div",at,lt)}var st={name:"editLoading"};const ut=(0,c.Z)(st,[["render",ct],["__scopeId","data-v-ab8a8a34"]]);var dt=ut;const ht={key:0,class:"warm"};function pt(t,e,o,n,a,i){return o.isShow?((0,r.wg)(),(0,r.iD)("div",ht,[(0,r._)("p",null,(0,h.zw)(o.text),1),(0,r._)("div",null,[(0,r._)("button",{onClick:e[0]||(e[0]=(...t)=>n.changeShow&&n.changeShow(...t))},"关闭")])])):(0,r.kq)("",!0)}var gt={name:"editWarm",props:{isShow:{default:!1,type:Boolean},text:{type:String,default:""}},setup(t,{emit:e}){const o=()=>{e("changeShow",!t.isShow)};return{changeShow:o}}};const mt=(0,c.Z)(gt,[["render",pt],["__scopeId","data-v-27eae50d"]]);var bt=mt;const vt={class:"success"};function kt(t,e,o,n,a,i){return(0,r.wg)(),(0,r.iD)("div",vt,[(0,r._)("p",null,(0,h.zw)(o.text),1)])}var wt={props:{text:{type:String,default:""},isShow:{type:Boolean,default:!1}},emits:["changeShow"],setup(t,{emit:e}){return setTimeout((()=>{e("changeShow",!t.isShow)}),3e3),{}}};const St=(0,c.Z)(wt,[["render",kt],["__scopeId","data-v-bef92f74"]]);var Ct=St,_t={components:{editLoading:dt,editWarn:bt,editSuccess:Ct},setup(){const t=(0,y.iH)(!1),e=(0,y.iH)(!1),o=(0,y.iH)(""),n=(0,y.iH)(!1),a=(0,y.iH)(""),i=t=>{e.value=t},l=t=>{console.log(t),n.value=t},c=()=>{t.value=!0,console.log(nt.state.url),Q("getBookSources").then((e=>{nt.commit("changeTabName","editList"),nt.commit("changeSource",e.data),t.value=!1,o.value=`成功拉取${e.data.length}条源`,n.value=!0})).catch((o=>{console.log(o),t.value=!1,a.value=" 请求发生了错误，请检查你的后端地址，填写是否正确，或者 阅读APP\n确认开启web服务",e.value=!0}))},s=()=>{o.value="正在推送中",n.value=!0,t.value=!0,Q("saveBookSources",nt.state.bookSource).then((r=>{if(r.isSuccess){let t=r.data;if(Array.isArray(t)){let e="";nt.state.bookSource.length>t.length&&(nt.state.bookSource.forEach((e=>{t.find((t=>t.bookSourceUrl===e.bookSourceUrl))||console.log(e.bookSourceUrl)})),e="\n推送失败的源将用红色字体标注!"),o.value=`批量推送源到「阅读3.0APP」\n共计: ${nt.state.bookSource.length} 条\n成功: ${t.length} 条\n失败: ${nt.state.bookSource.length-t.length} 条${e}`,n.value=!0}else o.value=`批量推送源到「阅读3.0APP」成功!\n共计: ${nt.state.bookSource.length} 条`,n.value=!0}else a.value=`批量推送源失败!\nErrorMsg: ${r.errorMsg}`,e.value=!0;t.value=!1})).catch((o=>{console.log(o),t.value=!1,e.value=!0,a.value="请求发生了错误，请检查你的后端地址，填写是否正确，或者 阅读APP\n确认开启web服务"}))},u=()=>{nt.commit("changeEidtTabSourceInfo"),nt.commit("changeTabName","editTab")},d=()=>{nt.commit("editHistoryUndo")},h=()=>{nt.commit("clearEdit"),console.log("已清除"),o.value="已清除",n.value=!0},p=()=>{nt.commit("clearEdit"),nt.commit("clearAllHistory"),o.value="已清除所有历史记录",n.value=!0},g=()=>{""!==nt.state.bookItemContent.bookSourceUrl&&""!==nt.state.bookItemContent.bookSourceType&&""!==nt.state.bookItemContent.bookSourceName?Q("saveBookSources",nt.state.bookItemContent).then((t=>{t.isSuccess?(o.value=`源《${nt.state.bookItemContent.bookSourceName}》已成功保存到「阅读3.0APP」`,n.value=!0):(a.value=`源《${nt.state.bookItemContent.bookSourceName}》保存失败!\nErrorMsg: ${t.errorMsg}`,e.value=!0)})):(a.value="请检查你的 源域名 源名称 源类型 <必填>项是否全部填写",e.value=!0)},m=()=>{t.value=!0,nt.commit("deBugMsgClear"),nt.commit("changeTabName","editDebug"),Q("saveBookSources",nt.state.bookItemContent).then((e=>{let r;if(console.log(e),null===localStorage.getItem("url"))r=location.host.replace(/\d+$/,(t=>parseInt(t)+1))+"/bookSourceDebug";else{let t=localStorage.getItem("url");r=t.replace(/\d+$/,(t=>parseInt(t)+1))+"/bookSourceDebug"}console.log(r);const a=new WebSocket("ws://"+r);let i;nt.state.bookItemContent.ruleSearch.checkKeyWord?(i=nt.state.bookItemContent.ruleSearch.checkKeyWord,console.log(i,"-------- bookItemContent")):nt.state.searchKey?(i=nt.state.searchKey,console.log(i,"----------- searchKey")):(i="我的",console.log(i,"-------------- sKey")),a.onopen=()=>{a.send(`{"tag":"${nt.state.bookItemContent.bookSourceUrl}", "key":"${i}"}`)},a.onmessage=t=>{nt.commit("changeDeBugMsg",t.data)},a.onclose=()=>{t.value=!1,o.value="调试已关闭！",n.value=!0,nt.commit("changeDeBugMsg","调试已关闭！")}}))};return(0,r.bv)((()=>{document.onkeydown=t=>{(t.ctrlKey||t.metaKey)&&"Enter"===t.key&&m(),(t.ctrlKey||t.metaKey)&&"s"===t.key&&(g(),t.preventDefault()),t.shiftKey&&"R"===t.key&&p(),t.shiftKey&&"C"===t.key&&h(),t.ctrlKey&&"e"===t.key&&(u(),t.preventDefault()),t.shiftKey&&"P"===t.key&&c(),t.ctrlKey&&"p"===t.key&&(s(),t.preventDefault())}})),{debug:m,push:s,pull:c,clearEdit:h,isShow:t,changeShow:i,warnShow:e,successText:o,changeSuccessShow:l,successShow:n,undo:d,redo:p,conver:u,warnText:a,saveSource:g}}};const ft=(0,c.Z)(_t,[["render",G],["__scopeId","data-v-8302f478"]]);var yt=ft;const It={class:"out"};function Dt(t,e,o,n,a,i){return(0,r.wg)(),(0,r.iD)("div",It,[(0,r._)("ul",null,[(0,r._)("li",{class:(0,h.C_)("editTab"===t.current_tab?"active":""),onClick:e[0]||(e[0]=t=>n.handleSetActive("editTab"))}," 编辑源 ",2),(0,r._)("li",{class:(0,h.C_)("editDebug"===t.current_tab?"active":""),onClick:e[1]||(e[1]=t=>n.handleSetActive("editDebug"))}," 调试源 ",2),(0,r._)("li",{class:(0,h.C_)("editList"===t.current_tab?"active":""),onClick:e[2]||(e[2]=t=>n.handleSetActive("editList"))}," 源列表 ",2),(0,r._)("li",{class:(0,h.C_)("editHelp"===t.current_tab?"active":""),onClick:e[3]||(e[3]=t=>n.handleSetActive("editHelp"))}," 帮助信息 ",2)]),((0,r.wg)(),(0,r.j4)(r.Ob,null,[((0,r.wg)(),(0,r.j4)((0,r.LL)(t.current_tab)))],1024))])}function Ut(t,e,o,a,i,l){return(0,r.wy)(((0,r.wg)(),(0,r.iD)("textarea",{placeholder:"这里输出序列化的JSON数据,可直接导入'阅读'APP","onUpdate:modelValue":e[0]||(e[0]=e=>t.sourceInfo=e)},null,512)),[[n.nr,t.sourceInfo]])}var xt={name:"editTab",setup(){const t=(0,y.qj)({sourceInfo:""});return(0,r.m0)((()=>{let e=nt.state.editTabSourceInfo;Object.keys(e).length>0?(e.lastUpdateTime=(new Date).getTime(),t.sourceInfo=JSON.stringify(e,null,4)):t.sourceInfo=""})),{...(0,y.BK)(t)}}};const Tt=(0,c.Z)(xt,[["render",Ut],["__scopeId","data-v-4301c68c"]]);var Bt=Tt;function Kt(t,e,o,a,i,l){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.wy)((0,r._)("input",{type:"text",style:{"text-align":"center",border:"1px solid #dddddd","border-radius":"4px"},placeholder:"输入搜索关键字，默认搜「我的」","onUpdate:modelValue":e[0]||(e[0]=e=>t.searchKey=e),onInput:e[1]||(e[1]=e=>a.changeSearch(t.searchKey)),onKeydown:e[2]||(e[2]=(0,n.D2)(((...t)=>a.startSearch&&a.startSearch(...t)),["enter"])),title:"输入关键词 enter(回车键)快捷搜索"},null,544),[[n.nr,t.searchKey]]),(0,r.wy)((0,r._)("textarea",{placeholder:"这里用于输出调试信息","onUpdate:modelValue":e[3]||(e[3]=e=>t.printDebug=e),ref:"textareaDom",id:"debug_text"},null,512),[[n.nr,t.printDebug]])],64)}var At={name:"editDebug",setup(){const t=(0,y.iH)(""),e=(0,y.qj)({printDebug:nt.state.deBugMsg,searchKey:""}),o=t=>{nt.commit("changeSearchKey",t)};(0,r.m0)((()=>{e.printDebug=nt.state.deBugMsg}));const n=()=>{document.querySelectorAll(".menu>button")[6].click()};return{...(0,y.BK)(e),textareaDom:t,changeSearch:o,startSearch:n}}};const jt=(0,c.Z)(At,[["render",Kt],["__scopeId","data-v-f11ea0d0"]]);var Et=jt;const Ht={style:{display:"flex","flex-flow":"column"}},Nt={class:"tool"},Ot={class:"book_list"},Lt=["value"],Pt={class:"book_index"},Jt=["onClick"],Zt={class:"book_info"};function qt(t,e,o,a,i,l){return(0,r.wg)(),(0,r.iD)("div",Ht,[(0,r.wy)((0,r._)("input",{class:"search",type:"text",placeholder:"输入筛选关键词（源名称、源URL或源分组）输入自动筛选源","onUpdate:modelValue":e[0]||(e[0]=e=>t.searchKey=e),onInput:e[1]||(e[1]=e=>a.sourcesList(t.searchKey)),onFocus:e[2]||(e[2]=e=>t.delArr=[])},null,544),[[n.nr,t.searchKey]]),(0,r._)("div",null,[(0,r._)("div",Nt,[(0,r._)("button",{onClick:e[3]||(e[3]=(...t)=>a.upFile&&a.upFile(...t))},"导入书源文件"),(0,r._)("button",{onClick:e[4]||(e[4]=(...t)=>a.outExport&&a.outExport(...t))},"导出书源文件"),(0,r._)("button",{onClick:e[5]||(e[5]=(...t)=>a.deleteActiveSource&&a.deleteActiveSource(...t))},"删除选中源"),(0,r._)("button",{onClick:e[6]||(e[6]=(...t)=>a.clearAllSources&&a.clearAllSources(...t))},"清空列表")]),(0,r._)("div",Ot,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.sourcesList(t.searchKey),((o,i)=>((0,r.wg)(),(0,r.iD)("div",{key:o.bookSourceUrl,class:(0,h.C_)(["book_item",i===a.currentActive?"book_active":""])},[(0,r.wy)((0,r._)("input",{type:"checkbox",value:i,"onUpdate:modelValue":e[7]||(e[7]=e=>t.delArr=e)},null,8,Lt),[[n.e8,t.delArr]]),(0,r._)("div",Pt,(0,h.zw)(i+1),1),(0,r._)("div",{style:{"margin-left":"10px",flex:"1"},onClick:t=>a.handleItemClick(i)},[(0,r._)("div",Zt,[(0,r._)("span",null,(0,h.zw)(o.bookSourceName),1),(0,r._)("span",null,"最后修改："+(0,h.zw)(a.formatTime(o.lastUpdateTime)),1),(0,r._)("span",null,"分组："+(0,h.zw)(o.bookSourceGroup||"无分组"),1)]),(0,r._)("div",null,(0,h.zw)(o.bookSourceUrl),1)],8,Jt)],2)))),128))])])])}var Wt={name:"editList",setup(){const t=(0,y.iH)(nt.state.bookSource);let e=(0,y.qj)({searchKey:"",delArr:[]}),o=(0,y.iH)(null);const n=t=>{o.value=t,nt.commit("clearEdit"),nt.commit("changeBookItemContent",l(e.searchKey)[t])},a=()=>{nt.commit("clearAllSource")},i=t=>{const e=new Date(t),o=e.getFullYear();let n=e.getMonth()+1;n=n<10?"0"+n:n;let r=e.getDate();r=r<10?"0"+r:r;let a=e.getHours();a=a<10?"0"+a:a;let i=e.getMinutes();i=i<10?"0"+i:i;let l=e.getSeconds();return l=l<10?"0"+l:l,o+"-"+n+"-"+r+" "+a+":"+i+":"+l},l=e=>""===e?t.value:t.value.filter((t=>t.bookSourceName.toUpperCase().includes(e.toUpperCase())))||t.value.filter((t=>t.bookSourceGroup.toUpperCase().includes(e.toUpperCase())))||t.value.filter((t=>t.bookSourceUrl.toUpperCase().includes(e.toUpperCase())));(0,r.m0)((()=>{t.value=nt.state.bookSource}));const c=()=>{if(0===e.delArr.length)return console.log("没有选中的书源"),!1;const o=[],n=l(e.searchKey);e.delArr.forEach((t=>{o.push(n[t])})),Q("deleteBookSources",o).then((o=>{o.isSuccess?(console.log("删除成功"),e.delArr.forEach((t=>{n.splice(t,1),console.log(t)})),e.delArr=[],Q("getBookSources").then((e=>{t.value=e.data,console.log("同步完成！")}))):console.log("错误",o)}))},s=()=>{const t=document.createElement("input");t.type="file",t.accept=".json",t.addEventListener("change",(t=>{const e=t.target.files[0];var o=new FileReader;o.readAsText(e),o.onload=()=>{const t=JSON.parse(o.result);nt.commit("changeBookSource",t)}})),t.click()},u=()=>{const t=document.createElement("a");t.download=`BookSources${Date().replace(/.*?\s(\d+)\s(\d+)\s(\d+:\d+:\d+).*/,"$2$1$3").replace(/:/g,"")}.json`;let e=new Blob([JSON.stringify(nt.state.bookSource,null,4)],{type:"application/json"});t.href=window.URL.createObjectURL(e),t.click()};return{currentActive:o,deleteActiveSource:c,handleItemClick:n,...(0,y.BK)(e),formatTime:i,sourcesList:l,clearAllSources:a,bookSources:t,upFile:s,outExport:u}}};const Mt=(0,c.Z)(Wt,[["render",qt],["__scopeId","data-v-260cb454"]]);var $t=Mt;const Rt=(0,r.uE)('<a href="https://alanskycn.gitee.io/teachme/" target="_blank" data-v-c4c82b2c>书源制作教程</a><a href="https://zhuanlan.zhihu.com/p/29436838" target="_blank" data-v-c4c82b2c>xpath基础教程</a><a href="https://zhuanlan.zhihu.com/p/32187820" target="_blank" data-v-c4c82b2c>xpath高级教程</a><a href="https://www.w3cschool.cn/regex_rmjc" target="_blank" data-v-c4c82b2c>正则表达式教程</a><a href="https://regexr-cn.com/" target="_blank" data-v-c4c82b2c>正则表达式在线验证工具</a><div style="margin-top:20px;" data-v-c4c82b2c><span data-v-c4c82b2c><code data-v-c4c82b2c>^$()[]{}.?+*|</code> 这些是Java正则特殊符号,匹配需转义</span><br data-v-c4c82b2c><span data-v-c4c82b2c><code data-v-c4c82b2c>(?s)</code> 前缀表示跨行解析</span><br data-v-c4c82b2c><span data-v-c4c82b2c><code data-v-c4c82b2c>(?m)</code> 前缀表示逐行匹配</span><br data-v-c4c82b2c><span data-v-c4c82b2c><code data-v-c4c82b2c>(?i)</code> 前缀表示忽略大小写</span><br data-v-c4c82b2c></div>',6);function Yt(t,e,o,n,r,a){return Rt}var zt={name:"editHelp"};const Vt=(0,c.Z)(zt,[["render",Yt],["__scopeId","data-v-c4c82b2c"]]);var Ft=Vt,Gt={name:"editOut",components:{editDebug:Et,editTab:Bt,editList:$t,editHelp:Ft},setup(){const t=(0,y.qj)({url:localStorage.getItem("url")||"",current_tab:nt.state.currentTab||"editTab"}),e=t=>{nt.commit("changeTabName",t),localStorage.setItem("tabName",t)},o=t=>{nt.commit("changeUrl",t)};(0,r.m0)((()=>{t.current_tab=nt.state.currentTab}));const n=()=>{document.querySelectorAll(".menu>button")[1].click()};return{...(0,y.BK)(t),handleSetActive:e,changInput:o,pullSource:n}}};const Qt=(0,c.Z)(Gt,[["render",Dt]]);var Xt=Qt,te={components:{editMenu:yt,editOut:Xt},setup(){const t=(0,y.qj)({});return(0,r.bv)((()=>{})),{...(0,y.BK)(t)}}};const ee=(0,c.Z)(te,[["render",f],["__scopeId","data-v-de4729c0"]]);var oe=ee;const ne={class:"main"};function re(t,e,o,n,a,i){const l=(0,r.up)("edit-input");return(0,r.wg)(),(0,r.iD)("div",ne,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.data,((e,o)=>((0,r.wg)(),(0,r.j4)(l,{key:o,type:e.id,hint:e.hint,title:e.title,rows:e.rows,content:t.bookContent[e.id],onChangeContent:n.upData},null,8,["type","hint","title","rows","content","onChangeContent"])))),128))])}const ae=t=>((0,r.dD)("data-v-3974490a"),t=t(),(0,r.Cn)(),t),ie={class:"edit_input"},le=ae((()=>(0,r._)("i",null,":",-1))),ce=["id","placeholder","rows","value"];function se(t,e,o,n,a,i){return(0,r.wg)(),(0,r.iD)("div",ie,[(0,r._)("span",null,[(0,r.Uk)((0,h.zw)(o.title),1),le]),(0,r._)("textarea",{id:o.type,placeholder:o.hint,rows:o.rows,value:o.content,ref:"attr",onInput:e[0]||(e[0]=(...t)=>n.change&&n.change(...t)),onBlur:e[1]||(e[1]=(...t)=>n.changeHistory&&n.changeHistory(...t)),onFocus:e[2]||(e[2]=(...t)=>n.changeHeight&&n.changeHeight(...t))},null,40,ce)])}var ue={props:{title:{type:String,default:""},rows:{type:Number,default:1},hint:{type:String,default:""},type:{type:String,default:""},content:{type:[String,Number,Boolean],default:""}},emits:["changeContent"],setup(t,{emit:e}){const o=(0,y.iH)(""),n=()=>{e("changeContent",{value:o.value.value,type:o.value.getAttribute("id")})},a=()=>{localStorage.getItem("history")||localStorage.setItem("history",JSON.stringify({new:[],old:[]}));const t=JSON.parse(localStorage.getItem("history")),e=t.new;if(e.length)if(e[e.length-1][o.value.getAttribute("id")]!==nt.state.bookItemContent[o.value.getAttribute("id")])nt.commit("editHistory",nt.state.bookItemContent);else{const t=o.value.getAttribute("id");if(t.includes("_")){let o=t.split("_")[0],n=t.split("_")[1];e[e.length-1][o][n]!==nt.state.bookItemContent[o][n]&&(nt.commit("editHistory",nt.state.bookItemContent),console.log("添加记录"))}else console.log("重复历史，不记录")}else nt.commit("editHistory",nt.state.bookItemContent),console.log("第一次记录")},i=()=>{(0,r.Y3)((()=>{let t=o.value;const e=t.scrollHeight,n=t.offsetHeight;n<=e&&(t.style.height="auto",t.style.height=t.scrollHeight+"px")}))};return{changeHistory:a,change:n,attr:o,changeHeight:i}}};const de=(0,c.Z)(ue,[["render",se],["__scopeId","data-v-3974490a"]]);var he=de,pe={base:[{title:"源域名",rows:1,id:"bookSourceUrl",hint:"<必填>通常填写网站主页,例: https://www.qidian.com"},{title:"源类型",rows:1,id:"bookSourceType",hint:"<必填>0:文本 1:音频 2:图片 3:文件(只提供下载的网站)"},{title:"源名称",rows:1,id:"bookSourceName",hint:"<必填>会显示在源列表"},{title:"源分组",rows:1,id:"bookSourceGroup",hint:"<选填>描述源的特征信息"},{title:"源注释",rows:1,id:"bookSourceComment",hint:"<选填>描述源作者和状态"},{title:"登录地址",rows:1,id:"loginUrl",hint:"<选填>填写网站登录网址,仅在需要登录的源有用"},{title:"登录界面",rows:3,id:"loginUi",hint:"<选填>自定义登录界面"},{title:"登录检测",rows:3,id:"loginCheckJs",hint:"<选填>登录检测js"},{title:"并发率",rows:1,id:"concurrentRate",hint:"<选填>并发率"},{title:"请求头",rows:3,id:"header",hint:"<选填>客户端标识"},{title:"链接验证",rows:1,id:"bookUrlPattern",hint:"<选填>当详情页URL与源URL的域名不一致时有效，用于添加网址"}],search:[{title:"搜索地址",rows:1,id:"searchUrl",hint:"[域名可省略]/search.php@kw={{key}}"},{title:"校验文字",rows:1,id:"ruleSearch_checkKeyWord",hint:"校验关键字"},{title:"列表规则",rows:1,id:"ruleSearch_bookList",hint:"选择书籍节点 (规则结果为List<Element>)"},{title:"书名规则",rows:1,id:"ruleSearch_name",hint:"选择节点书名 (规则结果为String)"},{title:"作者规则",rows:1,id:"ruleSearch_author",hint:"选择节点作者 (规则结果为String)"},{title:"分类规则",rows:1,id:"ruleSearch_kind",hint:"选择节点分类信息 (规则结果为String)"},{title:"字数规则",rows:1,id:"ruleSearch_wordCount",hint:"选择节点字数信息 (规则结果为String)"},{title:"最新章节",rows:1,id:"ruleSearch_lastChapter",hint:"选择节点最新章节 (规则结果为String)"},{title:"简介规则",rows:1,id:"ruleSearch_intro",hint:"选择节点书籍简介 (规则结果为String)"},{title:"封面规则",rows:1,id:"ruleSearch_coverUrl",hint:"选择节点书籍封面 (规则结果为String类型的url)"},{title:"详情地址",rows:1,id:"ruleSearch_bookUrl",hint:"选择书籍详情页网址 (规则结果为String类型的url)"}],find:[{title:"发现地址",rows:6,id:"exploreUrl",hint:"内容能显示在发现菜单\n每行一条发现分类(网址域名可省略)，例：\n名称1::网址(Url)1\n名称2::网址(Url)2\n..."},{title:"列表规则",rows:1,id:"ruleExplore_bookList",hint:"选择书籍节点 (规则结果为List<Element>)"},{title:"书名规则",rows:1,id:"ruleExplore_name",hint:"选择节点书名 (规则结果为String)"},{title:"作者规则",rows:1,id:"ruleExplore_author",hint:"选择节点作者 (规则结果为String)"},{title:"分类规则",rows:1,id:"ruleExplore_kind",hint:"选择节点分类信息 (规则结果为String)"},{title:"字数规则",rows:1,id:"ruleExplore_wordCount",hint:"选择节点字数信息 (规则结果为String)"},{title:"最新章节",rows:1,id:"ruleExplore_lastChapter",hint:"选择节点最新章节 (规则结果为String)"},{title:"简介规则",rows:1,id:"ruleExplore_intro",hint:"选择节点书籍简介 (规则结果为String)"},{title:"封面规则",rows:1,id:"ruleExplore_coverUrl",hint:"选择节点书籍封面 (规则结果为String类型的url)"},{title:"详情地址",rows:1,id:"ruleExplore_bookUrl",hint:"选择书籍详情页网址 (规则结果为String类型的url)"}],detail:[{title:"预处理",rows:3,id:"ruleBookInfo_init",hint:"用于加速详情信息检索，只支持AllInOne规则"},{title:"书名规则",rows:1,id:"ruleBookInfo_name",hint:"选择节点书名 (规则结果为String)"},{title:"作者规则",rows:1,id:"ruleBookInfo_author",hint:"选择节点作者 (规则结果为String)"},{title:"分类规则",rows:1,id:"ruleBookInfo_kind",hint:"选择节点分类信息 (规则结果为String)"},{title:"字数规则",rows:1,id:"ruleBookInfo_wordCount",hint:"选择节点字数信息 (规则结果为String)"},{title:"最新章节",rows:1,id:"ruleBookInfo_lastChapter",hint:"选择节点最新章节 (规则结果为String)"},{title:"简介规则",rows:1,id:"ruleBookInfo_intro",hint:"选择节点书籍简介 (规则结果为String)"},{title:"封面规则",rows:1,id:"ruleBookInfo_coverUrl",hint:"选择节点书籍封面 (规则结果为String类型的url)"},{title:"目录地址",rows:1,id:"ruleBookInfo_tocUrl",hint:"选择书籍详情页网址 (规则结果为String类型的url, 与详情页相同时可省略)"}],directory:[{title:"列表规则",rows:3,id:"ruleToc_chapterList",hint:"选择目录列表的章节节点 (规则结果为List<Element>)"},{title:"章节名称",rows:1,id:"ruleToc_chapterName",hint:"选择章节名称 (规则结果为String)"},{title:"章节地址",rows:1,id:"ruleToc_chapterUrl",hint:"选择章节链接 (规则结果为String类型的Url)"},{title:"卷名标识",rows:1,id:"ruleToc_isVolume",hint:"章节名称是否是卷名 (规则结果为Bool)"},{title:"收费标识",rows:1,id:"ruleToc_isVip",hint:"章节是否为VIP章节 (规则结果为Bool)"},{title:"购买标识",rows:1,id:"ruleToc_isPay",hint:"章节是否为已购买 (规则结果为Bool)"},{title:"章节信息",rows:1,id:"ruleToc_updateTime",hint:"选择章节信息 (规则结果为String)"},{title:"翻页规则",rows:1,id:"ruleToc_nextTocUrl",hint:"选择目录下一页链接 (规则结果为List<String>或String)"}],content:[{title:"脚本注入",rows:3,id:"ruleContent_webJs",hint:"注入javascript，用于模拟鼠标点击等，必须有返回值，一般为String类型"},{title:"正文规则",rows:1,id:"ruleContent_content",hint:"选择正文内容 (规则结果为String)"},{title:"翻页规则",rows:1,id:"ruleContent_nextContentUrl",hint:"选择下一分页(不是下一章)链接 (规则结果为String类型的Url)"},{title:"资源正则",rows:1,id:"ruleContent_sourceRegex",hint:"匹配资源的url特征，用于嗅探"},{title:"替换规则",rows:1,id:"ruleContent_replaceRegex",hint:"多页内容合并后替换，用于正文净化"},{title:"图片样式",rows:1,id:"ruleContent_imageStyle",hint:"FULL:铺满 不填:默认样式"},{title:"购买操作",rows:1,id:"ruleContent_payAction",hint:"购买章节 返回链接或js"}],other:[{title:"启用搜索",rows:1,id:"enabled",hint:"启用: true  关闭: false (可选,默认true)"},{title:"启用发现",rows:1,id:"enabledExplore",hint:"启用: true  关闭: false (可选,默认true)"},{title:"搜索权重",rows:1,id:"weight",hint:"整数: 0~N (可选,默认0) | 数字越大越靠前"},{title:"排序编号",rows:1,id:"customOrder",hint:"整数: 0~N (可选,默认0) | 数字越小越靠前"}]},ge={components:{editInput:he},setup(){const t=(0,y.qj)({data:pe.base,bookContent:nt.state.bookItemContent}),e=t=>{nt.commit("changeBookItemNewContent",t)};return(0,r.m0)((()=>{t.bookContent=nt.state.bookItemContent})),{...(0,y.BK)(t),upData:e}}};const me=(0,c.Z)(ge,[["render",re]]);var be=me;const ve={class:"main"};function ke(t,e,o,n,a,i){const l=(0,r.up)("edit-input");return(0,r.wg)(),(0,r.iD)("div",ve,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.data,((t,e)=>((0,r.wg)(),(0,r.j4)(l,{key:e,type:t.id,hint:t.hint,title:t.title,rows:t.rows,content:n.setContent(t.id),onChangeContent:n.upData},null,8,["type","hint","title","rows","content","onChangeContent"])))),128))])}function we(){const t=(0,y.qj)({bookContent:nt.state.bookItemContent}),e=t=>{nt.commit("changeBookItemNewContent",t)},o=e=>{try{if(e.includes("_")){let o=e.split("_")[0],n=e.split("_")[1];return t.bookContent[o][n]}return t.bookContent[e]}catch(o){console.log("导入错误",o.TypeError),nt.commit("clearEdit")}};return(0,r.m0)((()=>{t.bookContent=nt.state.bookItemContent})),{...(0,y.BK)(t),upData:e,setContent:o}}var Se={components:{editInput:he},setup(){const{upData:t,bookContent:e,setContent:o}=we(),n=(0,y.qj)({data:pe.search});return{...(0,y.BK)(n),upData:t,bookContent:e,setContent:o}}};const Ce=(0,c.Z)(Se,[["render",ke]]);var _e=Ce;const fe={class:"main"};function ye(t,e,o,n,a,i){const l=(0,r.up)("edit-input");return(0,r.wg)(),(0,r.iD)("div",fe,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.data,((t,e)=>((0,r.wg)(),(0,r.j4)(l,{key:e,type:t.id,hint:t.hint,title:t.title,rows:t.rows,content:n.setContent(t.id),onChangeContent:n.upData},null,8,["type","hint","title","rows","content","onChangeContent"])))),128))])}var Ie={components:{editInput:he},setup(){const{upData:t,setContent:e,bookContent:o}=we(),n=(0,y.qj)({data:pe.directory});return{...(0,y.BK)(n),upData:t,setContent:e,bookContent:o}}};const De=(0,c.Z)(Ie,[["render",ye]]);var Ue=De;const xe={class:"main"};function Te(t,e,o,n,a,i){const l=(0,r.up)("edit-input");return(0,r.wg)(),(0,r.iD)("div",xe,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.data,((t,e)=>((0,r.wg)(),(0,r.j4)(l,{key:e,type:t.id,hint:t.hint,title:t.title,rows:t.rows,content:n.setContent(t.id),onChangeContent:n.upData},null,8,["type","hint","title","rows","content","onChangeContent"])))),128))])}var Be={components:{editInput:he},setup(){const{setContent:t,upData:e,bookContent:o}=we(),n=(0,y.qj)({data:pe.content});return{...(0,y.BK)(n),upData:e,setContent:t,bookContent:o}}};const Ke=(0,c.Z)(Be,[["render",Te]]);var Ae=Ke;const je={class:"main"};function Ee(t,e,o,n,a,i){const l=(0,r.up)("edit-input");return(0,r.wg)(),(0,r.iD)("div",je,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.data,((t,e)=>((0,r.wg)(),(0,r.j4)(l,{key:e,type:t.id,hint:t.hint,title:t.title,rows:t.rows,content:n.setContent(t.id),onChangeContent:n.upData},null,8,["type","hint","title","rows","content","onChangeContent"])))),128))])}var He={components:{editInput:he},setup(){const{upData:t,bookContent:e,setContent:o}=we(),n=(0,y.qj)({data:pe.detail});return{...(0,y.BK)(n),upData:t,bookContent:e,setContent:o}}};const Ne=(0,c.Z)(He,[["render",Ee]]);var Oe=Ne;const Le={class:"main"};function Pe(t,e,o,n,a,i){const l=(0,r.up)("edit-input"),c=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",Le,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.data,((t,e)=>((0,r.wg)(),(0,r.j4)(l,{key:e,type:t.id,hint:t.hint,title:t.title,rows:t.rows,content:n.setContent(t.id),onChangeContent:n.upData},null,8,["type","hint","title","rows","content","onChangeContent"])))),128))]),(0,r.Wm)(c)],64)}var Je={components:{editInput:he},setup(){const{upData:t,bookContent:e,setContent:o}=we(),n=(0,y.qj)({data:pe.other});return{...(0,y.BK)(n),upData:t,bookContent:e,setContent:o}}};const Ze=(0,c.Z)(Je,[["render",Pe]]);var qe=Ze;const We={class:"main"};function Me(t,e,o,n,a,i){const l=(0,r.up)("edit-input");return(0,r.wg)(),(0,r.iD)("div",We,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.data,((t,e)=>((0,r.wg)(),(0,r.j4)(l,{key:e,type:t.id,hint:t.hint,title:t.title,rows:t.rows,content:n.setContent(t.id),onChangeContent:n.upData},null,8,["type","hint","title","rows","content","onChangeContent"])))),128))])}var $e={components:{editInput:he},setup(){const{upData:t,setContent:e,bookContent:o}=we(),n=(0,y.qj)({data:pe.find});return{...(0,y.BK)(n),upData:t,setContent:e,bookContent:o}}};const Re=(0,c.Z)($e,[["render",Me]]);var Ye=Re;const ze=[{path:"/",redirect:{name:"home"}},{path:"/bookSource",name:"home",component:oe,redirect:{name:"base"},children:[{path:"/bookSource/base",name:"base",component:be},{path:"/bookSource/search",name:"search",component:_e},{path:"/bookSource/find",name:"find",component:Ye},{path:"/bookSource/detail",name:"detail",component:Oe},{path:"/bookSource/directory",name:"directory",component:Ue},{path:"/bookSource/content",name:"content",component:Ae},{path:"/bookSource/other",name:"other",component:qe},{path:"/bookSource/:asdasdasd/:asdasdas",redirect:{name:"home"}}]},{path:"/:asdasdasd",redirect:{name:"home"}},{path:"/bookSource/:asdasdasda",redirect:{name:"home"}}],Ve=(0,d.p7)({history:(0,d.r5)(),routes:ze});var Fe=Ve;(0,n.ri)(u).use(nt).use(Fe).mount("#app")}},e={};function o(n){var r=e[n];if(void 0!==r)return r.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,o),a.exports}o.m=t,function(){var t=[];o.O=function(e,n,r,a){if(!n){var i=1/0;for(u=0;u<t.length;u++){n=t[u][0],r=t[u][1],a=t[u][2];for(var l=!0,c=0;c<n.length;c++)(!1&a||i>=a)&&Object.keys(o.O).every((function(t){return o.O[t](n[c])}))?n.splice(c--,1):(l=!1,a<i&&(i=a));if(l){t.splice(u--,1);var s=r();void 0!==s&&(e=s)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[n,r,a]}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,a,i=n[0],l=n[1],c=n[2],s=0;if(i.some((function(e){return 0!==t[e]}))){for(r in l)o.o(l,r)&&(o.m[r]=l[r]);if(c)var u=c(o)}for(e&&e(n);s<i.length;s++)a=i[s],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(u)},n=self["webpackChunklegado_web_editor"]=self["webpackChunklegado_web_editor"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(800)}));n=o.O(n)})();
//# sourceMappingURL=app.2c3e42a8.js.map