import{d as a,s as n,v as l,f as d,m as i,q as r,a as u}from"./index-f5de871a.js";const _=["disabled"],f=a({__name:"UIButton",props:{disabled:{type:Boolean,default:!1},size:{type:String,default:n.S}},setup(t){const e=t,s=l(()=>[e.size&&`button--${e.size}`]);return(o,c)=>(u(),d("button",{class:r(["button",s.value]),disabled:e.disabled},[i(o.$slots,"default")],10,_))}});export{f as _};