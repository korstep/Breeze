import{_ as g}from"./UISection.vue_vue_type_script_setup_true_lang-a6a5f110.js";import{d as m,a as _,f as u,h as t,w as a,i as c,t as d,_ as i,b as l,u as x,c as y,l as w,e as n,F as I,g as $,s as v}from"./index-f5de871a.js";import{e as p,a as T,_ as S}from"./ThePage.vue_vue_type_style_index_0_lang-1676bfc5.js";import{_ as C}from"./UIButton.vue_vue_type_style_index_0_lang-f6149c69.js";const F={class:"todays-forecast-item"},b=["src"],N=m({__name:"TodaysForecastItem",props:{time:{type:String,default:""},weatherIcon:{type:String,default:""},temperature:{type:Number,default:0}},setup(s){return(e,o)=>(_(),u("div",F,[t(i,{class:"todays-forecast-item__time",weight:"bold",uppercase:""},{default:a(()=>[c(d(s.time),1)]),_:1}),l("img",{class:"todays-forecast-item__img",src:s.weatherIcon,alt:"weather"},null,8,b),t(i,{"is-accented":"",class:"todays-forecast-item__temperature",weight:"bold"},{default:a(()=>[c(d(s.temperature),1)]),_:1})]))}});const A=p(N,[["__scopeId","data-v-1f92d5ec"]]),z={class:"todays-forecast"},D=m({__name:"TodaysForecast",setup(s){const e=x();return(o,h)=>(_(),y(g,{title:"today's forecast"},{default:a(()=>[l("div",z,[(_(!0),u(I,null,w(n(e).getTodayForecast,(r,f)=>(_(),y(A,{class:"todays-forecast__item",key:f,time:r.time,weatherIcon:r.iconUrl,temperature:r.temperature},null,8,["time","weatherIcon","temperature"]))),128))])]),_:1}))}});const k=p(D,[["__scopeId","data-v-0835738a"]]),q={class:"next-days-forecast-item"},U={class:"next-days-forecast-item__weather"},L=["src"],M={class:"next-days-forecast-item__temp"},V=m({__name:"NextDaysForecastItem",props:{day:{type:String,required:!0,default:""},iconUrl:{type:String,default:""},weatherType:{type:String,required:!0,default:""},minTemp:{type:String,required:!0,default:0},maxTemp:{type:String,required:!0,default:0}},setup(s){const e=s;return(o,h)=>(_(),u("div",q,[t(i,{class:"next-days-forecast-item__day"},{default:a(()=>[c(d(s.day),1)]),_:1}),l("div",U,[s.iconUrl?(_(),u("img",{key:0,src:s.iconUrl,class:"next-days-forecast-item__weather-icon",alt:""},null,8,L)):$("",!0),t(i,{"is-accented":"",weight:"bold",class:"next-days-forecast-item__weather-type"},{default:a(()=>[c(d(s.weatherType),1)]),_:1})]),l("div",M,[t(i,{"is-accented":"",weight:"bold",class:"next-days-forecast-item__temp-max"},{default:a(()=>[c(d(e.maxTemp),1)]),_:1}),t(i,{class:"next-days-forecast-item__temp-min"},{default:a(()=>[c("/"+d(e.minTemp),1)]),_:1})])]))}});const W=p(V,[["__scopeId","data-v-fc98806e"]]),B={class:"next-days-forecast"},R=m({__name:"NextDaysForecast",setup(s){const e=x();return(o,h)=>(_(),y(g,{title:`${n(e).getNextDaysForecast.length}-day's forecast`},{default:a(()=>[l("div",B,[(_(!0),u(I,null,w(n(e).getNextDaysForecast,(r,f)=>(_(),y(W,{class:"next-days-forecast__item",key:f,day:r.day,"icon-url":r.iconUrl,weatherType:r.weatherType,"min-temp":r.minTemp,"max-temp":r.maxTemp},null,8,["day","icon-url","weatherType","min-temp","max-temp"]))),128))])]),_:1},8,["title"]))}});const P=p(R,[["__scopeId","data-v-093f73ff"]]),X={class:"air-conditions-item"},O=m({__name:"AirConditionsItem",props:{title:{type:String,required:!0},icon:{type:String,required:!0},value:{type:[String,Number],required:!0}},setup(s){const{isMobile:e}=x(),o=s;return(h,r)=>(_(),u("div",X,[t(T,{class:"air-conditions-item__icon",name:o.icon},null,8,["name"]),t(i,{class:"air-conditions-item__title"},{default:a(()=>[c(d(o.title),1)]),_:1}),t(i,{"is-accented":"",class:"air-conditions-item__value",weight:"bold",size:n(e)?n(v).M:n(v).L},{default:a(()=>[c(d(o.value),1)]),_:1},8,["size"])]))}});const E=p(O,[["__scopeId","data-v-c722d83a"]]),j={class:"air-conditions"},G=m({__name:"AirConditions",setup(s){const e=x(),o=[{title:"Real Feel",icon:"feels",value:e.getAirConditions.feelsLike},{title:"Wind",icon:"wind",value:e.getAirConditions.windSpeed},{title:"Chance of Rain",icon:"rain",value:e.getAirConditions.chanceOfRain},{title:"UV Index",icon:"uv",value:e.getAirConditions.uvIndex}];return(h,r)=>(_(),y(g,{title:"air Conditions"},{head:a(()=>[t(C,{class:"air-conditions__button"},{default:a(()=>[t(i,{class:"air-conditions__button-text",size:n(v).S},{default:a(()=>[c("See details")]),_:1},8,["size"])]),_:1})]),default:a(()=>[l("div",j,[(_(),u(I,null,w(o,f=>t(E,{title:f.title,value:f.value,icon:f.icon},null,8,["title","value","icon"])),64))])]),_:1}))}});const H=p(G,[["__scopeId","data-v-d07d3281"]]),J={class:"weather"},K={class:"weather__icon"},Q=["src"],Y=m({__name:"TheWeather",setup(s){const{getCurrentWeather:e}=x();return(o,h)=>(_(),u("div",J,[t(i,{"is-accented":"",class:"weather__city",size:n(v).XL},{default:a(()=>[c(d(n(e).location),1)]),_:1},8,["size"]),t(i,{class:"weather__rain"},{default:a(()=>[c("Chance of rain: "+d(n(e).chanceOfRain),1)]),_:1}),l("div",K,[l("img",{src:n(e).iconUrl,class:"weather__img"},null,8,Q)]),t(i,{"is-accented":"",class:"weather__temperature",size:n(v).XXL},{default:a(()=>[c(d(n(e).temperature),1)]),_:1},8,["size"])]))}});const Z=p(Y,[["__scopeId","data-v-06f53db5"]]),ee={class:"main"},te=m({__name:"MainPage",setup(s){return(e,o)=>(_(),y(S,{"show-navigation":""},{default:a(()=>[l("div",ee,[t(n(Z),{class:"main__weather"}),t(k,{class:"main__today"}),t(P,{class:"main__forecast"}),t(H,{class:"main__conditions"})])]),_:1}))}});const ce=p(te,[["__scopeId","data-v-f4c0fb3d"]]);export{ce as default};