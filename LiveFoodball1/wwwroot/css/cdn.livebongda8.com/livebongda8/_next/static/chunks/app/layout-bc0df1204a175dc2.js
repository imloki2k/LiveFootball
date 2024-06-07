(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{4881:function(e,a,o){Promise.resolve().then(o.t.bind(o,5935,23)),Promise.resolve().then(o.t.bind(o,8822,23)),Promise.resolve().then(o.t.bind(o,3385,23)),Promise.resolve().then(o.t.bind(o,7739,23)),Promise.resolve().then(o.t.bind(o,7093,23)),Promise.resolve().then(o.bind(o,5918)),Promise.resolve().then(o.bind(o,5951))},929:function(e,a,o){"use strict";o.d(a,{CE:function(){return n},Zw:function(){return l},r:function(){return i}}),o(5355);var t=o(3472),n=(0,t.$)("db105c952390447a7d09c4c46c34c7de6f4ea921"),i=(0,t.$)("e00ade0055b6c0064966828fb62c8988ca4870d5"),l=(0,t.$)("baf122a70c88b41285c9928063c5a23dfe52bff6")},5918:function(e,a,o){"use strict";o.r(a),o.d(a,{app:function(){return d},trackingPageView:function(){return s}});var t=o(6142),n=o(3493),i=o(929),l=o(5566);let r={apiKey:l.env.NEXT_PUBLIC_FIREBASE_APIKEY||"",authDomain:l.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN||"",projectId:l.env.NEXT_PUBLIC_FIREBASE_PROJECTID||"",storageBucket:l.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET||"",messagingSenderId:l.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID||"",appId:l.env.NEXT_PUBLIC_FIREBASE_APPID||"",measurementId:l.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID||""},d=(0,t.ZF)(r);async function s(e,a){if(!await (0,n.Gb)())return;let o=await (0,i.Zw)();return(0,n.Kz)((0,n.IH)(d),e,{...a,device_id:o})}},5951:function(e,a,o){"use strict";o.r(a),o.d(a,{default:function(){return ex}});var t=o(7437),n=o(828),i=o(3646),l=o(8166),r=o(7933),d=o(6295);let s=(0,l.oM)({name:"game",initialState:{gameid:"",league:"",match:{},isLoading:!0,livescorematch:0,config:{prediction:0,skin_event:0}},reducers:{openGame:(e,a)=>{e.gameid=a.payload},closeGame:e=>{e.gameid=""},getLeague:(e,a)=>{e.league=a.payload},openMatch:(e,a)=>{e.match=a.payload},setMatch:(e,a)=>{e.match=a.payload},clearMatch:e=>{e.match={}},isLoadingMatch:(e,a)=>{e.isLoading=a.payload},livematchQuantity:(e,a)=>{e.livescorematch=a.payload},openPrediction:(e,a)=>{e.config.prediction=null==a?void 0:a.payload},openSkinEvent:(e,a)=>{e.config.skin_event=null==a?void 0:a.payload}}}),{openPrediction:c,openGame:u,closeGame:p,getLeague:h,openMatch:g,setMatch:m,clearMatch:S,isLoadingMatch:y,livematchQuantity:M,openSkinEvent:w}=s.actions;var v=s.reducer,f=o(5665);let E=(0,l.oM)({name:"menu",initialState:{openMobile:!1},reducers:{openMobileMenu:(e,a)=>{e.openMobile=a.payload}}}),{openMobileMenu:D}=E.actions;var P=E.reducer;let C=(0,l.oM)({name:"modal",initialState:{isOpenModal:!1,searchLeagueData:[],isShowModalDKSD:!1,isShowSettingAccount:!1,isShowDeleteAccount:!1,isShowOpenDrawerRightContent:!1,idPostReport:0,isShowOpenFeedback:!1,isShowConectFacebookModal:!1,isShowConectEmailModal:!1,dataSharePost:null,isShowChangePassword:!1,isShowChangeLanguge:!1,isShowVerifyUpdateProfileModal:!1},reducers:{openModal:(e,a)=>{a.payload?e.isOpenModal=a.payload:e.isOpenModal=!e.isOpenModal},setLeagueSearch:(e,a)=>{e.searchLeagueData=a.payload},openModalDKSD:(e,a)=>{e.isShowModalDKSD=a.payload},openModalSettingAccount:(e,a)=>{e.isShowSettingAccount=a.payload},openModalDeleteAccount:(e,a)=>{e.isShowDeleteAccount=a.payload},openDrawerRightContent:(e,a)=>{e.isShowOpenDrawerRightContent=a.payload},openModalReport:(e,a)=>{e.idPostReport=a.payload},openModalFeedback:(e,a)=>{e.isShowOpenFeedback=a.payload},openModalConnectFacebook:(e,a)=>{e.isShowConectFacebookModal=a.payload},openModalConnectEmail:(e,a)=>{e.isShowConectEmailModal=a.payload},openModalSharePost:(e,a)=>{e.dataSharePost=a.payload},openModalChangePassword:(e,a)=>{e.isShowChangePassword=a.payload},openModalChangeLanguge:(e,a)=>{e.isShowChangeLanguge=a.payload},openVerifyUpdateProfileModal:(e,a)=>{e.isShowVerifyUpdateProfileModal=a.payload}}}),{openModal:b,setLeagueSearch:_,openModalDKSD:k,openModalSettingAccount:I,openModalDeleteAccount:A,openDrawerRightContent:F,openModalReport:T,openModalFeedback:L,openModalConnectFacebook:R,openModalConnectEmail:O,openModalSharePost:U,openModalChangePassword:B,openModalChangeLanguge:N,openVerifyUpdateProfileModal:Z}=C.actions;var x=C.reducer;let X=(0,l.oM)({name:"social",initialState:{info:{},category:[]},reducers:{open:(e,a)=>{e.info=a.payload},close:e=>{e.info=null},update:(e,a)=>{e.info=a.payload},set_category:(e,a)=>{e.category=[...a.payload]}}}),{open:K,close:W,update:G,set_category:j}=X.actions;var V=X.reducer;let Q=(0,l.oM)({name:"searchParam",initialState:{params:"",newsMenu:"danh-cho-ban"},reducers:{changeParam:(e,a)=>{e.params=a.payload},changeMenu:(e,a)=>{e.params=a.payload}}}),{changeParam:z,changeMenu:Y}=Q.actions;var $=Q.reducer;let H=(0,l.oM)({name:"following",initialState:{listFollowing:[]},reducers:{setFollowing:(e,a)=>{if(-1===e.listFollowing.indexOf(a.payload)){let o=e.listFollowing;o.push(a.payload),e.listFollowing=o}},removeFollowing:(e,a)=>{let o=e.listFollowing,t=o.indexOf(a.payload);-1!==t&&(o.splice(t,1),e.listFollowing=o)},clearFollowing:(e,a)=>{e.listFollowing=[]}}}),{setFollowing:J,removeFollowing:q,clearFollowing:ee}=H.actions;var ea=H.reducer;let eo=(0,l.oM)({name:"route",initialState:{sport:"",sportType:0,sportCurrent:"",currentPage:"",currentTab:"",currentSlug:"",currentMatch:""},reducers:{changeSport:(e,a)=>{e.sportCurrent=a.payload},changePage:(e,a)=>{e.currentPage=a.payload},changeTab:(e,a)=>{e.currentTab=a.payload},changeSlug:(e,a)=>{e.currentSlug=a.payload}}}),{changeSport:et,changePage:en,changeTab:ei,changeSlug:el}=eo.actions;var er=eo.reducer,ed=o(9539),es=o.n(ed);let ec=(0,l.oM)({name:"metadata",initialState:{footerLink:{expireTime:null,data:[]},siteMap:{}},reducers:{setMetadata:(e,a)=>{e.footerLink.expireTime=es()().set("hour",1).toString(),e.footerLink.data=a.payload.data,e.siteMap=a.payload.sitemap}}}),{setMetadata:eu}=ec.actions;var ep=ec.reducer;let eh=(0,l.oM)({name:"device",initialState:{isMobile:null},reducers:{setDevice:(e,a)=>{e.isMobile=a.payload}}}),{setDevice:eg}=eh.actions;var em=eh.reducer;let eS=(0,l.oM)({name:"locale",initialState:{default:"vi"},reducers:{changeLocale:(e,a)=>{e.default=a.payload}}}),{changeLocale:ey}=eS.actions;var eM=eS.reducer,ew=o(7497);let ev=(0,l.oM)({name:"competitionseason",initialState:{season:null},reducers:{setSeason:(e,a)=>{e.season=a.payload},clearSeason:e=>{e.season=null}}}),{setSeason:ef,clearSeason:eE}=ev.actions;var eD=ev.reducer;let eP=(0,l.oM)({name:"competitionseason",initialState:{tracking:null},reducers:{setObjTracking:(e,a)=>{e.tracking=a.payload},clearObjTracking:e=>{e.tracking=null}}}),{setObjTracking:eC,clearObjTracking:eb}=eP.actions;var e_=eP.reducer;let ek=(0,l.oM)({name:"video",initialState:{isMute:!0,x:0,y:0,width:427,video_id:null,showComment:!1},reducers:{setMute:(e,a)=>{e.isMute=a.payload},setX:(e,a)=>{e.x=a.payload},setY:(e,a)=>{e.y=a.payload},setWidth:(e,a)=>{e.width=a.payload},setVideoId:(e,a)=>{e.video_id=a.payload},setComment:(e,a)=>{e.showComment=a.payload}}}),{setMute:eI,setX:eA,setY:eF,setWidth:eT,setVideoId:eL,setComment:eR}=ek.actions;var eO=ek.reducer;let eU={key:"livebongda8store",storage:d.Z,whitelist:["auth","following","metadata","competitionseason","tracking"],blacklist:["livedata"]},eB=(0,i.UY)({game:v,auth:f.ZP,menu:P,modal:x,social:V,searchParam:$,following:ea,route:er,metadata:ep,device:em,locale:eM,livedata:ew.Z,competitionseason:eD,tracking:e_,video:eO}),eN=(0,r.OJ)(eU,eB),eZ=(0,l.xC)({reducer:eN,devTools:!1,middleware:e=>e({serializableCheck:!1})});(0,r.p5)(eZ);var ex=e=>(0,t.jsx)(n.zt,{store:eZ,children:e.children})},5665:function(e,a,o){"use strict";o.d(a,{av:function(){return d},iI:function(){return E},kS:function(){return s}});var t=o(8166),n=o(9539),i=o.n(n);let l=(0,t.oM)({name:"auth",initialState:{openModalStatus:!1,typeModal:"signin",referrer:"standard",aic_1st_skip:!0,user:{},device_id:"",isUserNeedToConnectEmail:!1,isUserNeedToConnectEmailFacebook:!1,energy:0,stepWelcome:0,dueDateShowRemind:i()().toString(),isDontShowLikeTutorialAgain:!1,isDontShowConfirmModalFAQ:!1,isDontShowWelcomeMission:!0,isDontShowRemind:!1,codeZalo:{}},reducers:{openModal:(e,a)=>{e.openModalStatus=a.payload,!1===a.payload&&(e.typeModal="signin")},setTypeModal:(e,a)=>{e.typeModal=a.payload},setReferrer:(e,a)=>{e.referrer=a.payload},setUser:(e,a)=>{e.user=a.payload},logout:e=>{e.user={},e.energy=0},updateUser:(e,a)=>{let o=Object.assign({},e.user,a.payload);e.user={...o},e.energy=0},removeInvalidUserAndOpenLoginModal:e=>{e.user={},e.openModalStatus=!0,e.energy=0},setDeviceId:(e,a)=>{e.device_id=a.payload},updateEnergy:(e,a)=>{e.energy=a.payload},updateStepWelcome:(e,a)=>{e.stepWelcome=a.payload},updateDontShowLikeTutorialAgain:(e,a)=>{e.isDontShowLikeTutorialAgain=a.payload},updateDontShowFAQAgain:(e,a)=>{e.isDontShowConfirmModalFAQ=a.payload},updateDontShowWelcomeMission:(e,a)=>{e.isDontShowWelcomeMission=a.payload},updateDontShowRemind:(e,a)=>{e.dueDateShowRemind=i()().set("hour",24).set("minute",0),e.isDontShowRemind=a.payload},updatedueDateShowRemindBefore:(e,a)=>{e.dueDateShowRemind=i()().toString()},updateStateTracking:(e,a)=>{e.aic_1st_skip=!1},setCodeZalo:(e,a)=>{e.codeZalo=a.payload}}}),{openModal:r,setUser:d,logout:s,updateUser:c,removeInvalidUserAndOpenLoginModal:u,setDeviceId:p,updateEnergy:h,updateStepWelcome:g,updateDontShowLikeTutorialAgain:m,updateDontShowWelcomeMission:S,setReferrer:y,setTypeModal:M,updateDontShowRemind:w,updatedueDateShowRemindBefore:v,updateStateTracking:f,setCodeZalo:E}=l.actions;a.ZP=l.reducer},7497:function(e,a,o){"use strict";o.d(a,{P:function(){return n}});let t=(0,o(8166).oM)({name:"livedata",initialState:{livedata:[]},reducers:{setLiveData:(e,a)=>{e.livedata=a.payload}}}),{setLiveData:n}=t.actions;a.Z=t.reducer},3385:function(){},7739:function(){},7093:function(){}},function(e){e.O(0,[828,103,935,125,971,69,744],function(){return e(e.s=4881)}),_N_E=e.O()}]);