(self.webpackChunkargon_dashboard_angular=self.webpackChunkargon_dashboard_angular||[]).push([[603],{34603:function(t,e,o){"use strict";o.r(e),o.d(e,{AuthLayoutModule:function(){return T}});var n=o(30738),i=o(61116),r=o(56728),c=o(66252),s=o(18194),a=o.n(s),g=o(93820),l=function(){function t(t,e){this.userService=t,this.router=e,this.userLogin=new r.cw({email:new r.NI(""),password:new r.NI("")})}return t.prototype.ngOnInit=function(){},t.prototype.login=function(){var t=this;this.userService.signIn(this.userLogin.value).subscribe(function(e){e&&(sessionStorage.setItem("user",JSON.stringify(e.user)),sessionStorage.setItem("token",JSON.stringify(e.token).replace(/['"]+/g,"")),t.router.navigateByUrl("/dashboard "))},function(t){console.log(t),a().fire({icon:"warning",text:"Nombre de usuario o contrase\xf1a incorrectos"})})},t.\u0275fac=function(e){return new(e||t)(g.Y36(c.K),g.Y36(n.F0))},t.\u0275cmp=g.Xpm({type:t,selectors:[["app-login"]],decls:26,vars:1,consts:[[1,"header","bg-gradient-success","py-7","py-lg-8"],[1,"separator","separator-bottom","separator-skew","zindex-100"],["x","0","y","0","viewBox","0 0 2560 100","preserveAspectRatio","none","version","1.1","xmlns","http://www.w3.org/2000/svg"],["points","2560 0 2560 100 0 100",1,"fill-default"],[1,"container","mt--8","pb-5"],[1,"row","justify-content-center"],[1,"col-lg-5","col-md-7"],[1,"card","bg-secondary","shadow","border-0"],[1,"card-body","px-lg-5","py-lg-5"],["role","form",3,"formGroup","ngSubmit"],[1,"form-group","mb-3"],[1,"input-group","input-group-alternative"],[1,"input-group-prepend"],[1,"input-group-text"],[1,"ni","ni-email-83"],["placeholder","Correo","type","email","formControlName","email",1,"form-control"],[1,"form-group"],[1,"ni","ni-lock-circle-open"],["placeholder","Contrase\xf1a","type","password","formControlName","password",1,"form-control"],[1,"text-center"],["type","submit",1,"btn","btn-primary","my-4"],[1,"row","mt-3"]],template:function(t,e){1&t&&(g.TgZ(0,"div",0),g.TgZ(1,"div",1),g.O4$(),g.TgZ(2,"svg",2),g._UZ(3,"polygon",3),g.qZA(),g.qZA(),g.qZA(),g.kcU(),g.TgZ(4,"div",4),g.TgZ(5,"div",5),g.TgZ(6,"div",6),g.TgZ(7,"div",7),g.TgZ(8,"div",8),g.TgZ(9,"form",9),g.NdJ("ngSubmit",function(){return e.login()}),g.TgZ(10,"div",10),g.TgZ(11,"div",11),g.TgZ(12,"div",12),g.TgZ(13,"span",13),g._UZ(14,"i",14),g.qZA(),g.qZA(),g._UZ(15,"input",15),g.qZA(),g.qZA(),g.TgZ(16,"div",16),g.TgZ(17,"div",11),g.TgZ(18,"div",12),g.TgZ(19,"span",13),g._UZ(20,"i",17),g.qZA(),g.qZA(),g._UZ(21,"input",18),g.qZA(),g.qZA(),g.TgZ(22,"div",19),g.TgZ(23,"button",20),g._uU(24,"Ingresar"),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g._UZ(25,"div",21),g.qZA(),g.qZA(),g.qZA()),2&t&&(g.xp6(9),g.Q6J("formGroup",e.userLogin))},directives:[r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u],styles:[""]}),t}(),u=function(){function t(){}return t.prototype.ngOnInit=function(){},t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=g.Xpm({type:t,selectors:[["app-register"]],decls:71,vars:0,consts:[[1,"header","bg-gradient-danger","py-7","py-lg-8"],[1,"container"],[1,"header-body","text-center","mb-7"],[1,"row","justify-content-center"],[1,"col-lg-5","col-md-6"],[1,"text-white"],[1,"text-lead","text-light"],[1,"separator","separator-bottom","separator-skew","zindex-100"],["x","0","y","0","viewBox","0 0 2560 100","preserveAspectRatio","none","version","1.1","xmlns","http://www.w3.org/2000/svg"],["points","2560 0 2560 100 0 100",1,"fill-default"],[1,"container","mt--8","pb-5"],[1,"col-lg-6","col-md-8"],[1,"card","bg-secondary","shadow","border-0"],[1,"card-header","bg-transparent","pb-5"],[1,"text-muted","text-center","mt-2","mb-4"],[1,"text-center"],["href","javascript:void(0)",1,"btn","btn-neutral","btn-icon","mr-4"],[1,"btn-inner--icon"],["src","assets/img/icons/common/github.svg"],[1,"btn-inner--text"],["href","javascript:void(0)",1,"btn","btn-neutral","btn-icon"],["src","assets/img/icons/common/google.svg"],[1,"card-body","px-lg-5","py-lg-5"],[1,"text-center","text-muted","mb-4"],["role","form"],[1,"form-group"],[1,"input-group","input-group-alternative","mb-3"],[1,"input-group-prepend"],[1,"input-group-text"],[1,"ni","ni-hat-3"],["placeholder","Name","type","text",1,"form-control"],[1,"ni","ni-email-83"],["placeholder","Email","type","email",1,"form-control"],[1,"input-group","input-group-alternative"],[1,"ni","ni-lock-circle-open"],["placeholder","Password","type","password",1,"form-control"],[1,"text-muted","font-italic"],[1,"text-success","font-weight-700"],[1,"row","my-4"],[1,"col-12"],[1,"custom-control","custom-control-alternative","custom-checkbox"],["id","customCheckRegister","type","checkbox",1,"custom-control-input"],["for","customCheckRegister",1,"custom-control-label"],[1,"text-muted"],["href","#!"],["type","button",1,"btn","btn-primary","mt-4"]],template:function(t,e){1&t&&(g.TgZ(0,"div",0),g.TgZ(1,"div",1),g.TgZ(2,"div",2),g.TgZ(3,"div",3),g.TgZ(4,"div",4),g.TgZ(5,"h1",5),g._uU(6,"Welcome!"),g.qZA(),g.TgZ(7,"p",6),g._uU(8,"Use these awesome forms to login or create new account in your project for free."),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(9,"div",7),g.O4$(),g.TgZ(10,"svg",8),g._UZ(11,"polygon",9),g.qZA(),g.qZA(),g.qZA(),g.kcU(),g.TgZ(12,"div",10),g.TgZ(13,"div",3),g.TgZ(14,"div",11),g.TgZ(15,"div",12),g.TgZ(16,"div",13),g.TgZ(17,"div",14),g.TgZ(18,"small"),g._uU(19,"Sign up with"),g.qZA(),g.qZA(),g.TgZ(20,"div",15),g.TgZ(21,"a",16),g.TgZ(22,"span",17),g._UZ(23,"img",18),g.qZA(),g.TgZ(24,"span",19),g._uU(25,"Github"),g.qZA(),g.qZA(),g.TgZ(26,"a",20),g.TgZ(27,"span",17),g._UZ(28,"img",21),g.qZA(),g.TgZ(29,"span",19),g._uU(30,"Google"),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(31,"div",22),g.TgZ(32,"div",23),g.TgZ(33,"small"),g._uU(34,"Or sign up with credentials"),g.qZA(),g.qZA(),g.TgZ(35,"form",24),g.TgZ(36,"div",25),g.TgZ(37,"div",26),g.TgZ(38,"div",27),g.TgZ(39,"span",28),g._UZ(40,"i",29),g.qZA(),g.qZA(),g._UZ(41,"input",30),g.qZA(),g.qZA(),g.TgZ(42,"div",25),g.TgZ(43,"div",26),g.TgZ(44,"div",27),g.TgZ(45,"span",28),g._UZ(46,"i",31),g.qZA(),g.qZA(),g._UZ(47,"input",32),g.qZA(),g.qZA(),g.TgZ(48,"div",25),g.TgZ(49,"div",33),g.TgZ(50,"div",27),g.TgZ(51,"span",28),g._UZ(52,"i",34),g.qZA(),g.qZA(),g._UZ(53,"input",35),g.qZA(),g.qZA(),g.TgZ(54,"div",36),g.TgZ(55,"small"),g._uU(56,"password strength: "),g.TgZ(57,"span",37),g._uU(58,"strong"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(59,"div",38),g.TgZ(60,"div",39),g.TgZ(61,"div",40),g._UZ(62,"input",41),g.TgZ(63,"label",42),g.TgZ(64,"span",43),g._uU(65,"I agree with the "),g.TgZ(66,"a",44),g._uU(67,"Privacy Policy"),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(68,"div",15),g.TgZ(69,"button",45),g._uU(70,"Create account"),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA())},directives:[r._Y,r.JL,r.F],styles:[""]}),t}(),Z=o(33354),p=o(39176),d=o(529),m=o(42801);function f(t,e){if(1&t){var o=g.EpF();g.TgZ(0,"div",5),g.TgZ(1,"h4",6),g._uU(2),g.qZA(),g._UZ(3,"br"),g.TgZ(4,"form"),g.TgZ(5,"div",7),g.TgZ(6,"div",8),g.TgZ(7,"div",9),g.TgZ(8,"input",10),g.NdJ("ngModelChange",function(t){return g.CHM(o),g.oxw().document=t}),g.qZA(),g.qZA(),g.TgZ(9,"div",11),g.TgZ(10,"button",12),g.NdJ("click",function(){g.CHM(o);var t=g.oxw(),e=g.MAs(7);return t.searchBill(e)}),g._uU(11,"Buscar "),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA()}if(2&t){var n=g.oxw();g.xp6(2),g.Oqu(null==n.commerce?null:n.commerce.description),g.xp6(6),g.Q6J("ngModel",n.document),g.xp6(2),g.Jzz("color:white;background-color: ",null==n.commerce?null:n.commerce.color,"")}}function v(t,e){if(1&t){var o=g.EpF();g.TgZ(0,"ul",19),g.TgZ(1,"li",20),g.TgZ(2,"div",21),g.TgZ(3,"span",22),g._uU(4,"Reference: "),g.qZA(),g._uU(5),g._UZ(6,"br"),g.TgZ(7,"span",22),g._uU(8,"Total: "),g.qZA(),g._uU(9),g.qZA(),g.TgZ(10,"div",23),g.TgZ(11,"button",24),g.NdJ("click",function(){var t=g.CHM(o).$implicit;return g.oxw(2).generatePayment(t._id)}),g._uU(12,"Pagar"),g.qZA(),g.qZA(),g.qZA(),g.qZA()}if(2&t){var n=e.$implicit;g.xp6(5),g.hij(" ",n.reference," "),g.xp6(4),g.hij(" ",n.total," ")}}function A(t,e){if(1&t){var o=g.EpF();g.TgZ(0,"div",13),g.TgZ(1,"div",14),g.TgZ(2,"h5",15),g._uU(3,"Lista de facturas"),g.qZA(),g.TgZ(4,"button",16),g.NdJ("click",function(){return g.CHM(o).$implicit.dismiss("Cross click")}),g.TgZ(5,"span",17),g._uU(6,"\xd7"),g.qZA(),g.qZA(),g.qZA(),g.YNc(7,v,13,2,"ul",18),g.qZA()}if(2&t){var n=g.oxw();g.xp6(7),g.Q6J("ngForOf",n.bills)}}var q=[{path:"login",component:l},{path:"register",component:u},{path:"microsite",component:function(){function t(t,e,o,n){this.activatedRouter=t,this.commerceService=e,this.billService=o,this.modalService=n,this.baseUrlForImage=d.N.api+"commerce/getImage/",this.modalOptions={backdrop:"static",backdropClass:"customBackdrop"}}return t.prototype.ngOnInit=function(){var t=this;this.activatedRouter.queryParams.subscribe(function(e){t.nit=e.microsite}),this.commerceService.getCommerceForNit(this.nit).subscribe(function(e){t.commerce=e},function(e){t.openAlert("info","Ocurri\xf3 un error inesperado")})},t.prototype.searchBill=function(t){var e=this;this.billService.searchBillForDocument(this.document,this.commerce._id).subscribe(function(o){e.bills=o,e.openModal(t)},function(t){e.openAlert("info","No se encontraron facturas")})},t.prototype.openModal=function(t){var e=this;this.modalService.open(t,this.modalOptions).result.then(function(t){e.closeResult="Closed with: "+t},function(t){e.closeResult="Dismissed "+e.getDismissReason(t)})},t.prototype.openAlert=function(t,e){a().fire({icon:t,text:e})},t.prototype.getDismissReason=function(t){return t===m.If.ESC?"by pressing ESC":t===m.If.BACKDROP_CLICK?"by clicking on a backdrop":"with: "+t},t.prototype.generatePayment=function(t){console.log(t)},t.\u0275fac=function(e){return new(e||t)(g.Y36(n.gz),g.Y36(Z.b),g.Y36(p.z),g.Y36(m.FF))},t.\u0275cmp=g.Xpm({type:t,selectors:[["app-commerce"]],decls:8,vars:2,consts:[[1,"header","py-7","py-lg-8"],[1,"container",2,"text-align","center"],["alt","Image placeholder","width","200px",3,"src"],["class","container",4,"ngIf"],["modalListBill",""],[1,"container"],[1,"display-5",2,"text-align","justify","color","#414141"],[1,"row"],[1,"col-md-12"],[1,"form-group"],["type","text","id","exampleFormControlInput1","placeholder","Documento",1,"form-control",3,"ngModel","ngModelChange"],[1,"text-center"],["type","submit",1,"btn","btn-lg","btn-block",3,"click"],[1,"card","bg-secondary","border-0","mb-0"],[1,"modal-header"],["id","modal",1,"modal-title"],["type","button","data-dismiss","modal","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],["class","list-group",4,"ngFor","ngForOf"],[1,"list-group"],[1,"list-group-item"],[2,"text-align","left"],[2,"font-weight","bold"],[2,"text-align","right"],[1,"btn","btn-success",3,"click"]],template:function(t,e){1&t&&(g.TgZ(0,"div",0),g.TgZ(1,"div",1),g._UZ(2,"img",2),g._UZ(3,"br"),g._UZ(4,"br"),g.qZA(),g.YNc(5,f,12,5,"div",3),g.qZA(),g.YNc(6,A,8,1,"ng-template",null,4,g.W1O)),2&t&&(g.xp6(2),g.s9C("src",e.baseUrlForImage+(null==e.commerce?null:e.commerce.logo),g.LSH),g.xp6(3),g.Q6J("ngIf",e.commerce))},directives:[i.O5,r._Y,r.JL,r.F,r.Fj,r.JJ,r.On,i.sg],styles:[""]}),t}()}],T=function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=g.oAB({type:t}),t.\u0275inj=g.cJS({imports:[[i.ez,n.Bz.forChild(q),r.u5,r.UX]]}),t}()}}]);