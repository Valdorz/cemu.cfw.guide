"use strict";(self.webpackChunkcemu_cfw_guide=self.webpackChunkcemu_cfw_guide||[]).push([[202],{2202:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var i=a(6252);const n=["id","name","checked"],r=["for","innerHTML"],d={class:"tab"},s={props:{name:{required:!0},default:{default:!1}},data:()=>({active:!1}),computed:{id(){return this.name.toLowerCase().replace(/ /g,"-")},parentId(){return this.$parent.$parent.$props.id.toLowerCase().replace(/ /g,"-")},parentIdSafe(){return this.parentId.replace(/[\-\/\\^$*+?.()|[\]{}]/g,"\\$&")}},created(){this.active=""===this.default},mounted(){const e=decodeURI(window.location.href).match(RegExp(`[?&]${this.parentIdSafe}=(.*?)(?=&|#|$)`));e&&e.length>1&&e[1]===this.id&&(this.active=!0),this.default&&(this.active=!0)},methods:{setTab(){let e=window.location.href;e=e.match(RegExp(`[?&]${this.parentIdSafe}=`))?e.replace(RegExp(`([?&]${this.parentIdSafe}=)(.*?)(?=&|#|$)`),"$1"+this.id):e.match(/\?/)?e.replace(/[?&].*?(?=#|$)/,`$&&${this.parentId}=`+this.id):e.replace(/(?=#|$)/,`?${this.parentId}=`+this.id),e!=window.location.href&&history.pushState({},"",encodeURI(e))}}},c=(0,a(3744).Z)(s,[["render",function(e,t,a,s,c,o){return(0,i.wg)(),(0,i.iD)("section",null,[(0,i._)("input",{id:o.parentId+"-"+o.id,name:o.parentId,type:"radio",checked:e.active},null,8,n),(0,i._)("label",{for:o.parentId+"-"+o.id,class:"tab-link",innerHTML:a.name,onClick:t[0]||(t[0]=e=>this.setTab())},null,8,r),(0,i._)("div",d,[(0,i.WI)(e.$slots,"default")])])}]])},3744:(e,t)=>{t.Z=(e,t)=>{const a=e.__vccOpts||e;for(const[e,i]of t)a[e]=i;return a}}}]);