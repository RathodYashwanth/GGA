function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{LUox:function(e,t,i){"use strict";i.r(t),i.d(t,"RegistrationPageModule",(function(){return _}));var r=i("ofXK"),n=i("3Pt+"),a=i("TEn/"),o=i("tyNb"),s=i("fXoL"),b=i("CY6q"),l=i("HIo4"),c=i("aZ8m"),m=i("XiUz"),d=i("kmnG"),u=i("d3UM"),f=i("FKr1"),g=i("qFsG"),h=i("aF9I");function v(e,t){1&e&&(s.Ub(0,"mat-error"),s.zc(1," Please enter a First Name "),s.Tb())}function U(e,t){1&e&&(s.Ub(0,"mat-error"),s.zc(1," Please enter a Last Name "),s.Tb())}function T(e,t){1&e&&(s.Ub(0,"mat-error"),s.zc(1," Please enter a valid email address "),s.Tb())}function p(e,t){if(1&e&&(s.Ub(0,"mat-option",29),s.zc(1),s.Tb()),2&e){var i=t.$implicit;s.mc("value",i),s.Cb(1),s.Ac(i)}}function C(e,t){1&e&&(s.Ub(0,"mat-error"),s.zc(1," Please enter a country of residence "),s.Tb())}function O(e,t){1&e&&(s.Ub(0,"div"),s.Ub(1,"mat-label"),s.zc(2,"State of Residence"),s.Tb(),s.Tb())}function y(e,t){1&e&&(s.Ub(0,"div"),s.Ub(1,"mat-label"),s.zc(2,"Country of Residence"),s.Tb(),s.Tb())}function F(e,t){if(1&e&&(s.Ub(0,"mat-option",29),s.zc(1),s.Tb()),2&e){var i=t.$implicit;s.mc("value",i),s.Cb(1),s.Ac(i)}}function S(e,t){1&e&&(s.Ub(0,"mat-error"),s.zc(1," Please enter a state of residence "),s.Tb())}function w(e,t){if(1&e&&(s.Ub(0,"mat-option",29),s.zc(1),s.Tb()),2&e){var i=t.$implicit;s.mc("value",i),s.Cb(1),s.Ac(i)}}function z(e,t){1&e&&(s.Ub(0,"mat-error"),s.zc(1," Please enter a country of origin "),s.Tb())}function N(e,t){1&e&&(s.Ub(0,"div"),s.Ub(1,"mat-label"),s.zc(2,"State of Origin"),s.Tb(),s.Tb())}function k(e,t){1&e&&(s.Ub(0,"div"),s.Ub(1,"mat-label"),s.zc(2,"Country of Origin"),s.Tb(),s.Tb())}function P(e,t){if(1&e&&(s.Ub(0,"mat-option",29),s.zc(1),s.Tb()),2&e){var i=t.$implicit;s.mc("value",i),s.Cb(1),s.Ac(i)}}function x(e,t){1&e&&(s.Ub(0,"mat-error"),s.zc(1," Please enter a state of origin "),s.Tb())}var I,q,E,A=[{path:"",component:(I=function(){function e(t,i,r,n){_classCallCheck(this,e),this.memberService=t,this.toastCtrl=i,this.navCtrl=r,this.contactService=n,this.countries=[],this.countriesResidence=[],this.states=[],this.Originstates=[],this.ukSelected=!1,this.ukOriginSelected=!1,this.middleEastSelected=!1,this.middleEastOriginSelected=!1}return _createClass(e,[{key:"ngOnInit",value:function(){this.countriesResidence=this.memberService.countriesWithoutIndia,this.countries=this.memberService.countries,this.registerForm=new n.d({title:new n.b(null),firstName:new n.b(null,[n.q.required]),lastName:new n.b(null,[n.q.required]),email:new n.b(null,[n.q.email]),phone:new n.b(null),profession:new n.b(null),interestHobbies:new n.b(null),addressline1:new n.b(null),addressline2:new n.b(null),country:new n.b(null,[n.q.required]),state:new n.b(null,[n.q.required]),city:new n.b(null),countryOrigin:new n.b(null,[n.q.required]),stateOrigin:new n.b(null,[n.q.required]),cityOrigin:new n.b(null),zip:new n.b(null)}),this.registerForm.controls.state.disable(),this.registerForm.controls.stateOrigin.disable()}},{key:"countryChanged",value:function(e){switch(this.registerForm.controls.state.enable(),this.states=[],this.ukSelected=!1,this.middleEastSelected=!1,e.value){case"Australia":this.states=this.memberService.australiaStates;break;case"Canada":this.states=this.memberService.canadaStates;break;case"India":this.states=this.memberService.indiaStates;break;case"United Kingdom":this.ukSelected=!0,this.states=this.memberService.ukStates;break;case"Middle East":this.middleEastSelected=!0,this.states=this.memberService.middleEastStates;break;case"United States of America":this.states=this.memberService.usaStates}}},{key:"countryOriginChanged",value:function(e){switch(this.registerForm.controls.stateOrigin.enable(),this.Originstates=[],this.ukOriginSelected=!1,this.middleEastOriginSelected=!1,e.value){case"Australia":this.Originstates=this.memberService.australiaStates;break;case"Canada":this.Originstates=this.memberService.canadaStates;break;case"India":this.Originstates=this.memberService.indiaStates;break;case"United Kingdom":this.ukOriginSelected=!0,this.Originstates=this.memberService.ukStates;break;case"Middle East":this.middleEastOriginSelected=!0,this.Originstates=this.memberService.middleEastStates;break;case"United States of America":this.Originstates=this.memberService.usaStates}}},{key:"register",value:function(){var e=this;if(this.registerForm.valid){var t={};t.title=this.registerForm.controls.title.value,t.firstName=this.registerForm.controls.firstName.value,t.lastName=this.registerForm.controls.lastName.value,t.email=this.registerForm.controls.email.value,t.phone=this.registerForm.controls.phone.value,t.profession=this.registerForm.controls.profession.value,t.interestHobbies=this.registerForm.controls.interestHobbies.value,t.addressline1=this.registerForm.controls.addressline1.value,t.addressline2=this.registerForm.controls.addressline2.value,t.country=this.registerForm.controls.country.value,t.countryOrigin=this.registerForm.controls.countryOrigin.value,t.state=this.registerForm.controls.state.value,t.stateOrigin=this.registerForm.controls.stateOrigin.value,t.city=this.registerForm.controls.city.value,t.cityOrigin=this.registerForm.controls.cityOrigin.value,t.zip=this.registerForm.controls.zip.value,this.memberService.registerMember(t).subscribe((function(){var t={};t.name=e.registerForm.controls.firstName.value+e.registerForm.controls.lastName.value,t.email=e.registerForm.controls.email.value,t.message=e.registerForm.controls.firstName.value+e.registerForm.controls.lastName.value+" has registered with GGA",e.contactService.contactGGA(t).subscribe((function(e){})),e.toastCtrl.create({message:"Thank you for being a member with GGA",duration:3e3}).then((function(t){t.present(),e.navCtrl.navigateForward("/home")}))})),this.registerForm.reset()}}}]),e}(),I.\u0275fac=function(e){return new(e||I)(s.Ob(b.a),s.Ob(a.P),s.Ob(a.K),s.Ob(l.a))},I.\u0275cmp=s.Ib({type:I,selectors:[["app-registration"]],decls:138,vars:16,consts:[[1,"ion-text-center"],["fxLayout","row","fxLayout.xs","column"],["fxFlex","97",1,"layout-flex-col"],[3,"formGroup","ngSubmit"],["fxFlex","33",1,"layout-flex-col"],[1,"form-field"],["formControlName","title"],["value","mr"],["matInput","","formControlName","firstName","required",""],[4,"ngIf"],["matInput","","formControlName","lastName","required",""],["fxFlex","50",1,"layout-flex-col"],["matInput","","type","email","formControlName","email","required",""],["matInput","","type","text","formControlName","phone","maxlength","10","pattern","^(0|[1-9][0-9]*)$"],["matInput","","formControlName","addressline1"],["matInput","","formControlName","addressline2"],["matInput","","formControlName","zip","pattern","^(0|[1-9][0-9]*)$"],["formControlName","country","required","",3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],["formControlName","state","required",""],["matInput","","formControlName","city"],["formControlName","countryOrigin","required","",3,"selectionChange"],["formControlName","stateOrigin","required",""],["matInput","","formControlName","cityOrigin"],["matInput","","formControlName","interestHobbies"],["matInput","","formControlName","profession"],["size","12"],["type","submit","color","primary"],["src","../../../assets/images/logo.jpg","alt","Logo",1,"logo-image"],[3,"value"]],template:function(e,t){1&e&&(s.Pb(0,"app-header"),s.Ub(1,"ion-content"),s.Ub(2,"ion-grid"),s.Ub(3,"ion-row"),s.Ub(4,"ion-col",0),s.Ub(5,"ion-text"),s.Ub(6,"h2"),s.zc(7,"JOIN GGA TODAY"),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Ub(8,"ion-row"),s.Ub(9,"ion-col",0),s.Ub(10,"ion-text"),s.Ub(11,"h3"),s.zc(12,"Let us join hands to address the needs of the GGA Community globally."),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Ub(13,"div",1),s.Ub(14,"div",2),s.Ub(15,"ion-card"),s.Ub(16,"ion-card-content"),s.Ub(17,"form",3),s.cc("ngSubmit",(function(){return t.register()})),s.Ub(18,"div",1),s.Ub(19,"div",4),s.Ub(20,"mat-form-field",5),s.Ub(21,"mat-label"),s.zc(22,"Title"),s.Tb(),s.Ub(23,"mat-select",6),s.Ub(24,"mat-option",7),s.zc(25,"Mr."),s.Tb(),s.Ub(26,"mat-option",7),s.zc(27,"Mrs."),s.Tb(),s.Ub(28,"mat-option",7),s.zc(29,"Ms."),s.Tb(),s.Ub(30,"mat-option",7),s.zc(31,"Miss."),s.Tb(),s.Ub(32,"mat-option",7),s.zc(33,"Dr."),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Ub(34,"div",4),s.Ub(35,"mat-form-field",5),s.Ub(36,"mat-label"),s.zc(37,"First Name"),s.Tb(),s.Pb(38,"input",8),s.xc(39,v,2,0,"mat-error",9),s.Tb(),s.Tb(),s.Ub(40,"div",4),s.Ub(41,"mat-form-field",5),s.Ub(42,"mat-label"),s.zc(43,"Last Name"),s.Tb(),s.Pb(44,"input",10),s.xc(45,U,2,0,"mat-error",9),s.Tb(),s.Tb(),s.Tb(),s.Ub(46,"div",1),s.Ub(47,"div",11),s.Ub(48,"mat-form-field",5),s.Ub(49,"mat-label"),s.zc(50,"Email"),s.Tb(),s.Pb(51,"input",12),s.xc(52,T,2,0,"mat-error",9),s.Tb(),s.Tb(),s.Ub(53,"div",11),s.Ub(54,"mat-form-field",5),s.Ub(55,"mat-label"),s.zc(56,"Phone"),s.Tb(),s.Pb(57,"input",13),s.Tb(),s.Tb(),s.Tb(),s.Ub(58,"div",1),s.Ub(59,"div",11),s.Ub(60,"mat-form-field",5),s.Ub(61,"mat-label"),s.zc(62,"Address line 1"),s.Tb(),s.Pb(63,"input",14),s.Tb(),s.Tb(),s.Ub(64,"div",11),s.Ub(65,"mat-form-field",5),s.Ub(66,"mat-label"),s.zc(67,"Address line 2"),s.Tb(),s.Pb(68,"input",15),s.Tb(),s.Tb(),s.Tb(),s.Ub(69,"div",1),s.Ub(70,"div",4),s.Ub(71,"mat-form-field",5),s.Ub(72,"mat-label"),s.zc(73,"Zip"),s.Tb(),s.Pb(74,"input",16),s.Tb(),s.Tb(),s.Pb(75,"div",4),s.Pb(76,"div",4),s.Tb(),s.Ub(77,"div",1),s.Ub(78,"div",4),s.Ub(79,"mat-form-field",5),s.Ub(80,"mat-label"),s.zc(81,"Country of Residence"),s.Tb(),s.Ub(82,"mat-select",17),s.cc("selectionChange",(function(e){return t.countryChanged(e)})),s.xc(83,p,2,2,"mat-option",18),s.Tb(),s.xc(84,C,2,0,"mat-error",9),s.Tb(),s.Tb(),s.Ub(85,"div",4),s.Ub(86,"mat-form-field",5),s.xc(87,O,3,0,"div",9),s.xc(88,y,3,0,"div",9),s.Ub(89,"mat-select",19),s.xc(90,F,2,2,"mat-option",18),s.Tb(),s.xc(91,S,2,0,"mat-error",9),s.Tb(),s.Tb(),s.Ub(92,"div",4),s.Ub(93,"mat-form-field",5),s.Ub(94,"mat-label"),s.zc(95,"City of Residence"),s.Tb(),s.Pb(96,"input",20),s.Tb(),s.Tb(),s.Tb(),s.Ub(97,"div",1),s.Ub(98,"div",4),s.Ub(99,"mat-form-field",5),s.Ub(100,"mat-label"),s.zc(101,"Country Of Origin"),s.Tb(),s.Ub(102,"mat-select",21),s.cc("selectionChange",(function(e){return t.countryOriginChanged(e)})),s.xc(103,w,2,2,"mat-option",18),s.Tb(),s.xc(104,z,2,0,"mat-error",9),s.Tb(),s.Tb(),s.Ub(105,"div",4),s.Ub(106,"mat-form-field",5),s.xc(107,N,3,0,"div",9),s.xc(108,k,3,0,"div",9),s.Ub(109,"mat-select",22),s.xc(110,P,2,2,"mat-option",18),s.Tb(),s.xc(111,x,2,0,"mat-error",9),s.Tb(),s.Tb(),s.Ub(112,"div",4),s.Ub(113,"mat-form-field",5),s.Ub(114,"mat-label"),s.zc(115,"City of Origin"),s.Tb(),s.Pb(116,"input",23),s.Tb(),s.Tb(),s.Tb(),s.Ub(117,"div",1),s.Ub(118,"div",11),s.Ub(119,"mat-form-field",5),s.Ub(120,"mat-label"),s.zc(121,"Interest /Hobbies"),s.Tb(),s.Pb(122,"input",24),s.Tb(),s.Tb(),s.Ub(123,"div",11),s.Ub(124,"mat-form-field",5),s.Ub(125,"mat-label"),s.zc(126,"Profession"),s.Tb(),s.Pb(127,"input",25),s.Tb(),s.Tb(),s.Tb(),s.Ub(128,"ion-grid",0),s.Ub(129,"ion-row",0),s.Ub(130,"ion-col",26),s.Ub(131,"ion-button",27),s.zc(132,"Register"),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Ub(133,"ion-grid"),s.Ub(134,"ion-row"),s.Ub(135,"ion-col",0),s.Pb(136,"img",28),s.Tb(),s.Tb(),s.Tb(),s.Pb(137,"app-footer"),s.Tb()),2&e&&(s.Cb(17),s.lc("formGroup",t.registerForm),s.Cb(22),s.lc("ngIf",!t.registerForm.get("firstName").valid&&t.registerForm.get("firstName").touched),s.Cb(6),s.lc("ngIf",!t.registerForm.get("lastName").valid&&t.registerForm.get("lastName").touched),s.Cb(7),s.lc("ngIf",!t.registerForm.get("email").valid&&t.registerForm.get("email").touched),s.Cb(31),s.lc("ngForOf",t.countriesResidence),s.Cb(1),s.lc("ngIf",!t.registerForm.get("country").valid&&t.registerForm.get("country").touched),s.Cb(3),s.lc("ngIf",!t.ukSelected&&!t.middleEastSelected),s.Cb(1),s.lc("ngIf",t.ukSelected||t.middleEastSelected),s.Cb(2),s.lc("ngForOf",t.states),s.Cb(1),s.lc("ngIf",!t.registerForm.get("state").valid&&t.registerForm.get("state").touched),s.Cb(12),s.lc("ngForOf",t.countries),s.Cb(1),s.lc("ngIf",!t.registerForm.get("countryOrigin").valid&&t.registerForm.get("countryOrigin").touched),s.Cb(3),s.lc("ngIf",!t.ukOriginSelected&&!t.middleEastOriginSelected),s.Cb(1),s.lc("ngIf",t.ukOriginSelected||t.middleEastOriginSelected),s.Cb(2),s.lc("ngForOf",t.Originstates),s.Cb(1),s.lc("ngIf",!t.registerForm.get("stateOrigin").valid&&t.registerForm.get("stateOrigin").touched))},directives:[c.a,a.j,a.l,a.w,a.i,a.C,m.c,m.a,a.d,a.e,n.r,n.l,n.e,d.c,d.f,u.a,n.k,n.c,f.j,g.b,n.a,n.p,r.k,n.g,n.n,r.j,a.b,h.a,d.b],styles:[".form-field[_ngcontent-%COMP%]{width:100%}.logo-image[_ngcontent-%COMP%]{width:20%}.card-design[_ngcontent-%COMP%]{width:80%;margin:auto}.multiple-selects[_ngcontent-%COMP%]{margin-top:-.9rem}"]}),I)}],G=((q=function e(){_classCallCheck(this,e)}).\u0275mod=s.Mb({type:q}),q.\u0275inj=s.Lb({factory:function(e){return new(e||q)},imports:[[o.i.forChild(A)],o.i]}),q),M=i("PCNd"),_=((E=function e(){_classCallCheck(this,e)}).\u0275mod=s.Mb({type:E}),E.\u0275inj=s.Lb({factory:function(e){return new(e||E)},imports:[[r.c,n.f,n.o,a.G,G,M.a,g.c,u.b]]}),E)}}]);