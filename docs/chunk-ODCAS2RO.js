import{a as B,b as z,c as j}from"./chunk-RMKON4QY.js";import{d as O,e as P,g as T,h as I,r as H,u as G}from"./chunk-7O7LVR3D.js";import{$ as F,Ab as M,Cb as y,Db as g,Fb as h,Gb as S,Ha as f,La as r,Ma as L,bb as x,db as l,hb as e,ia as v,ib as t,ja as _,jb as c,mb as k,ob as E,pb as b,tb as p,vb as n,wb as w,xb as V}from"./chunk-PN7LSG4T.js";var C=a=>["/details",a];function R(a,m){if(a&1){let i=k();e(0,"div",40)(1,"article",41),E("mouseenter",function(){v(i);let o=p(5),d=p(8),u=b();return _(u.playVideo(o,d))})("mouseleave",function(){v(i);let o=p(5),d=p(8),u=b();return _(u.stopVideo(o,d))}),e(2,"figure",42),c(3,"img",43)(4,"video",44,0),g(6,"sliceuntile"),e(7,"div",45,1)(9,"div",46)(10,"span",47),n(11,"Loading..."),t()()()(),e(12,"figcaption",48)(13,"h3",49),n(14),t(),e(15,"p",50),n(16,"Free"),t()()()()}if(a&2){let i=m.$implicit;r(),l("routerLink",y(8,C,i.id)),r(2),l("src",i.thumbnail,f)("alt",i.title),r(),l("src",h(6,5,i.thumbnail,"videoplayback.webm"),f),r(10),w(i.title)}}function U(a,m){a&1&&c(0,"i",63)}function W(a,m){a&1&&c(0,"i",64)}function $(a,m){if(a&1){let i=k();e(0,"article",51),E("mouseenter",function(){v(i);let o=p(6),d=p(9),u=b();return _(u.playVideo(o,d))})("mouseleave",function(){v(i);let o=p(6),d=p(9),u=b();return _(u.stopVideo(o,d))}),e(1,"div",52)(2,"div",53)(3,"figure",54),c(4,"img",55)(5,"video",44,0),g(7,"sliceuntile"),e(8,"div",45,1)(10,"div",46)(11,"span",47),n(12,"Loading..."),t()()()(),e(13,"figcaption",56)(14,"h3",57),n(15),t(),e(16,"p",10),n(17),g(18,"term"),t(),e(19,"span",58),n(20),t()(),e(21,"div",59)(22,"span"),x(23,U,1,0,"i",60)(24,W,1,0,"i",61),t(),e(25,"span",62),n(26,"Free"),t()()()()()}if(a&2){let i=m.$implicit;l("routerLink",y(15,C,i.id)),r(4),l("src",i.thumbnail,f)("alt",i.title),r(),l("src",h(7,9,i.thumbnail,"videoplayback.webm"),f),r(10),w(i.title),r(2),V(" ",h(18,12,i.short_description,7),"... "),r(3),w(i.genre),r(3),l("ngIf",i.platform==null?null:i.platform.includes("PC")),r(),l("ngIf",i.platform==null?null:i.platform.includes("Web"))}}function N(a,m){if(a&1){let i=k();e(0,"article",65),E("mouseenter",function(){v(i);let o=p(5),d=p(8),u=b();return _(u.playVideo(o,d))})("mouseleave",function(){v(i);let o=p(5),d=p(8),u=b();return _(u.stopVideo(o,d))}),e(1,"figure",42)(2,"div",66),c(3,"img",55),t(),c(4,"video",44,0),g(6,"sliceuntile"),e(7,"div",45,1)(9,"div",46)(10,"span",47),n(11,"Loading..."),t()()(),e(12,"span",67),n(13,"Free"),t()()()}if(a&2){let i=m.$implicit;l("routerLink",y(7,C,i.id)),r(3),l("src",i.thumbnail,f)("alt",i.title),r(),l("src",h(6,4,i.thumbnail,"videoplayback.webm"),f)}}function q(a,m){if(a&1&&(e(0,"div",40)(1,"article",68)(2,"figure",69)(3,"div",70),c(4,"img",55),e(5,"div",71)(6,"h3",72),n(7),t(),e(8,"span",73),n(9,"Free"),t()()(),e(10,"figcaption",74)(11,"p",10),c(12,"i",75),n(13),g(14,"term"),t(),e(15,"h4",72),c(16,"img",76),n(17," By Hesham "),t()()()()()),a&2){let i=m.$implicit;r(3),l("routerLink",y(8,C,i.id)),r(),l("src",i.thumbnail,f)("alt",i.title),r(3),w(i.title),r(6),V(" ",h(14,5," If you have been looking for a game like Breath of the Wild on pc, look no further. It is clear that they took a lot of inspiration from this game and made a fantastic game on pc. I can reccommend this game for everyone that likes open world ",30),"... ")}}var ee=(()=>{let m=class m{constructor(s){this._GamesService=s,this.games=[]}ngOnInit(){this.getGames()}getGames(){this._GamesService.getGames().subscribe({next:s=>{console.log(s),this.games=s}})}playVideo(s,o){this._GamesService.playVideo(s,o)}stopVideo(s,o){this._GamesService.stopVideo(s,o)}};m.\u0275fac=function(o){return new(o||m)(L(j))},m.\u0275cmp=F({type:m,selectors:[["app-home"]],standalone:!0,features:[M],decls:73,vars:20,consts:[["vid",""],["spinner",""],[1,"wraper"],[1,"container"],[1,"wraper-area"],[1,"h2"],[1,"c-blue"],[1,"small","my-3","lead","text-muted"],[1,"butns-start"],["applogin","","routerLink","/games",1,"text-uppercase","btn-r","btn-blue","me-2"],[1,"small"],["routerLink","/games",1,"text-uppercase","btn-r","btn-light"],[1,"recomend"],[1,"title"],[1,"h4"],[1,"fa-solid","fa-robot"],[1,"text-primary","small"],[1,"fa-solid","fa-circle-question"],[1,"row","row-cols-1","row-cols-md-2","row-cols-lg-3","g-4"],["class","col",4,"ngFor","ngForOf"],[1,"recent"],[1,"row","g-4"],[1,"col-12","col-lg-7"],[1,"title","mb-4"],["class","mb-3",3,"routerLink","mouseenter","mouseleave",4,"ngFor","ngForOf"],[1,"col-12","col-lg-5"],[1,"h4","mb-4"],["class","mb-3 cp",3,"routerLink","mouseenter","mouseleave",4,"ngFor","ngForOf"],["routerLink","/games",1,"btn-r","btn-light","d-flex","align-items-center","gap-2","mx-auto","mt-4"],[1,"fa-solid","fa-angle-right"],[1,"comunity"],[1,"row","row-cols-1","row-cols-md-2","g-4"],[1,"more","pb-5"],[1,"d-md-flex","align-items-center","gap-3","border","border-dark","rounded","shadow"],[1,"image","flex-shrink-0","col-md-5"],["src","./assets/images/ftg-img.jpg","alt","ftg img",1,"w-100"],[1,"text-center","text-md-start"],[1,"d-flex","align-items-center","justify-content-md-start","justify-content-center","gap-3"],["routerLink","/auth/signup","applogin","",1,"btn-r","btn-blue"],["routerLink","/aboutus",1,"btn-r","btn-light"],[1,"col"],[1,"card","overflow-hidden","shadow","bg-transparent","cp",3,"mouseenter","mouseleave","routerLink"],[1,"position-relative"],[1,"w-100","h-100","card-img-top",3,"src","alt"],["preload","none","muted","true","loop","",1,"w-100","h-100","position-absolute","top-0","start-0","d-none",3,"src"],[1,"layer","position-absolute","top-0","start-0","w-100","h-100","bg-primary","bg-opacity-50","d-none","justify-content-center","align-items-center"],["role","status",1,"spinner-grow","c-blue",2,"width","3rem","height","3rem"],[1,"visually-hidden"],[1,"card-body","d-flex","justify-content-between","align-items-center"],[1,"card-title","h5"],[1,"badge","bg-blue","mb-0","p-2","small"],[1,"mb-3",3,"mouseenter","mouseleave","routerLink"],[1,"card","cp","bg-transparent","shadow"],[1,"card-body","d-flex","align-items-center","gap-3"],[1,"image","flex-shrink-0","w-25","position-relative"],[1,"w-100",3,"src","alt"],[1,"text","flex-grow-1"],[1,"h5"],[1,"badge","bg-second2","text-dark","fs-10"],[1,"d-flex","align-items-center","gap-2"],["class","fa-brands fa-windows",4,"ngIf"],["class","fa-solid fa-window-maximize",4,"ngIf"],[1,"badge","bg-blue","text-white","p-2"],[1,"fa-brands","fa-windows"],[1,"fa-solid","fa-window-maximize"],[1,"mb-3","cp",3,"mouseenter","mouseleave","routerLink"],[1,"image"],[1,"badge","bg-blue","text-white","p-2","position-absolute","bottom-0","end-0","m-2"],[1,"card","card-body","bg-dark"],[1,"d-md-flex","gap-4"],[1,"image","flex-shrink-0","col-md-6","cp","rounded","overflow-hidden","bg-main",3,"routerLink"],[1,"d-flex","justify-content-between","align-items-center","card-body"],[1,"h6"],[1,"badge","text-white","bg-blue","p-2"],[1,"d-grid","align-content-between"],[1,"fa-solid","fa-quote-left"],["src","./assets/images/by.png","alt","By Hesham",1,"img-fluid"]],template:function(o,d){o&1&&(e(0,"header",2)(1,"div",3)(2,"div",4)(3,"h1",5),n(4," Find & track the best "),e(5,"span",6),n(6,"free-to-play"),t(),n(7," games! "),t(),e(8,"p",7),n(9," Track what you've played and search for what to play next! Plus get free premium loot! "),t(),e(10,"div",8)(11,"button",9),n(12," Get Started "),e(13,"span",10),n(14,"it's free"),t()(),e(15,"button",11),n(16," Browse Games "),t()()()()(),e(17,"section",12)(18,"div",3)(19,"div",13)(20,"h2",14),c(21,"i",15),n(22," Personalized Recommendations "),t(),e(23,"p",16),c(24,"i",17),n(25," Log In to view your personalized recommendations! "),t()(),e(26,"div",18),x(27,R,17,10,"div",19),g(28,"slice"),t()()(),e(29,"section",20)(30,"div",3)(31,"div",21)(32,"div",22)(33,"div")(34,"div",23)(35,"h2",14),n(36,"Recently Added"),t()(),x(37,$,27,17,"article",24),g(38,"slice"),t()(),e(39,"div",25)(40,"div")(41,"div",13)(42,"h2",26),n(43,"Most Played Today"),t()(),x(44,N,14,9,"article",27),g(45,"slice"),t()()(),e(46,"button",28),n(47," More Games"),c(48,"i",29),t()()(),e(49,"section",30)(50,"div",3)(51,"div",13)(52,"h2",14),n(53,"Community Recommendations"),t()(),e(54,"div",31),x(55,q,18,10,"div",19),g(56,"slice"),t()()(),e(57,"section",32)(58,"div",3)(59,"div",33)(60,"div",34),c(61,"img",35),t(),e(62,"div",36)(63,"div",13)(64,"h2",14),n(65,"More Fun and More Rewarding!"),t(),e(66,"p",10),n(67," We are FreeToGame, a new gaming platform that brings all the best Free-to-Play Multiplayer Games and MMO Games into one place while rewarding gamers with free premium loot and exlusive perks. Plus maintain your own games library, track what you've played and search for what to play next! "),t(),e(68,"div",37)(69,"button",38),n(70," Join Now "),t(),e(71,"button",39),n(72," Learn More "),t()()()()()()()),o&2&&(r(27),l("ngForOf",S(28,4,d.games,0,3)),r(10),l("ngForOf",S(38,8,d.games,10,20)),r(7),l("ngForOf",S(45,12,d.games,20,25)),r(11),l("ngForOf",S(56,16,d.games,22,24)))},dependencies:[B,z,G,H,I,O,P,T],styles:['.wraper[_ngcontent-%COMP%]{background:#1c1e22 url("./media/wraper-WRGTHVXH.png") no-repeat top;background-size:contain;min-height:40vh;text-align:center;display:flex;align-items:center}section[_ngcontent-%COMP%]{padding-top:80px}section[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{color:#aaa!important;transition:transform .3s}section[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{color:#aaa!important}section[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]:hover{transform:scale(1.05)}']});let a=m;return a})();export{ee as HomeComponent};