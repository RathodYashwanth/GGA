function _defineProperties(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{PCNd:function(n,t,e){"use strict";e.d(t,"a",(function(){return s}));var o=e("ofXK"),a=e("3Pt+"),i=e("TEn/"),c=e("YUcS"),r=e("fXoL"),s=function(){var n=function n(){_classCallCheck(this,n)};return n.\u0275mod=r.Mb({type:n}),n.\u0275inj=r.Lb({factory:function(t){return new(t||n)},imports:[[o.c,a.f,i.G,c.a,c.a],c.a]}),n}()},YXEz:function(n,t,e){"use strict";e.r(t),e.d(t,"NewsPageModule",(function(){return v}));var o=e("ofXK"),a=e("3Pt+"),i=e("TEn/"),c=e("tyNb"),r=e("fXoL"),s=e("l3fW"),b=e("aZ8m"),f=e("XiUz"),l=e("aF9I"),d=e("3+MX");function u(n,t){1&n&&(r.Ub(0,"div",12),r.Ub(1,"ion-text",10),r.zc(2,"No News at the moment!"),r.Tb(),r.Tb())}function p(n,t){if(1&n&&(r.Ub(0,"div",1),r.Ub(1,"ion-card"),r.Ub(2,"ion-card-header",5),r.Ub(3,"div",0),r.Ub(4,"div",6),r.Ub(5,"ion-card-title"),r.zc(6),r.Tb(),r.Tb(),r.Ub(7,"div",7),r.Ub(8,"ion-card-title",8),r.zc(9),r.hc(10,"dateFetch"),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Ub(11,"ion-card-content",9),r.Ub(12,"ion-text",10),r.zc(13),r.Tb(),r.Tb(),r.Tb(),r.xc(14,u,3,0,"div",11),r.Tb()),2&n){var e=t.$implicit,o=r.gc();r.Cb(6),r.Ac(e.title),r.Cb(3),r.Ac(r.ic(10,4,e.date)),r.Cb(4),r.Bc(" ",e.description," "),r.Cb(1),r.lc("ngIf",0===o.newsArray.length)}}var g,h,x,m=[{path:"",component:(g=function(){function n(t){_classCallCheck(this,n),this.adminService=t,this.newsArray=[]}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;this.adminService.fetchNews().subscribe((function(t){var e=t.sort((function(n,t){return n.date>t.date?-1:n.date<t.date?1:0}));n.newsArray=e}))}}]),n}(),g.\u0275fac=function(n){return new(n||g)(r.Ob(s.a))},g.\u0275cmp=r.Ib({type:g,selectors:[["app-news"]],decls:10,vars:1,consts:[["fxLayout","row","fxLayout.xs","column","fxLayout.sm","column","fxLayout.md","column","fxLayout.lg","column"],["fxFlex","97",1,"layout-flex-col"],["lines","none",1,"ion-padding-start","ion-padding-top"],["color","primary",1,"card-heading"],["fxFlex","97","class","layout-flex-col",4,"ngFor","ngForOf"],[1,"text-header-background"],["fxFlex","80",1,"layout-flex-col"],["fxFlex","20",1,"layout-flex-col"],[1,"date"],[1,"ion-margin-top","ion-text-justify"],[1,"text"],["class","ion-text-center",4,"ngIf"],[1,"ion-text-center"]],template:function(n,t){1&n&&(r.Pb(0,"app-header"),r.Ub(1,"ion-content"),r.Ub(2,"div",0),r.Ub(3,"div",1),r.Ub(4,"ion-item",2),r.Ub(5,"ion-text",3),r.zc(6,"Latest News"),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Ub(7,"div",0),r.xc(8,p,15,6,"div",4),r.Tb(),r.Pb(9,"app-footer"),r.Tb()),2&n&&(r.Cb(8),r.lc("ngForOf",t.newsArray))},directives:[b.a,i.j,f.c,f.a,i.p,i.C,o.j,l.a,i.d,i.f,i.h,i.e,o.k],pipes:[d.a],styles:[".card-heading[_ngcontent-%COMP%]{-webkit-background-clip:text;background-clip:text;color:transparent;background-image:linear-gradient(90deg,rgba(244,107,69,.8),rgba(238,168,73,.8));font-size:1.6rem}.fab-button[_ngcontent-%COMP%], .text-header-background[_ngcontent-%COMP%]{--background:#f6a52f}.date[_ngcontent-%COMP%]{font-size:1rem}ion-card-header[_ngcontent-%COMP%]{padding:.2rem}"]}),g)}],y=((h=function n(){_classCallCheck(this,n)}).\u0275mod=r.Mb({type:h}),h.\u0275inj=r.Lb({factory:function(n){return new(n||h)},imports:[[c.i.forChild(m)],c.i]}),h),C=e("PCNd"),v=((x=function n(){_classCallCheck(this,n)}).\u0275mod=r.Mb({type:x}),x.\u0275inj=r.Lb({factory:function(n){return new(n||x)},imports:[[o.c,a.f,i.G,y,C.a]]}),x)}}]);