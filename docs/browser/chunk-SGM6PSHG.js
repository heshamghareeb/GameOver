import{a as O,b as U,c as Y}from"./chunk-RMKON4QY.js";import{d as F,e as L,g as T,h as R,o as z,q as j,r as H,u as M}from"./chunk-7O7LVR3D.js";import{$ as B,Ab as I,Cb as C,Db as u,Fb as E,Gb as G,Ha as x,Ja as P,La as s,Ma as _,bb as h,db as d,hb as e,ia as f,ib as t,ja as g,jb as v,mb as y,ob as b,pb as S,tb as p,vb as i,wb as w,xb as V,yb as k}from"./chunk-PN7LSG4T.js";var A=r=>["/details",r];function D(r,m){if(r&1){let o=y();e(0,"div",76),b("mouseenter",function(){f(o);let n=p(6),a=p(9),c=S();return g(c.playVideo(n,a))})("mouseleave",function(){f(o);let n=p(6),a=p(9),c=S();return g(c.stopVideo(n,a))}),e(1,"article",77)(2,"figure",78)(3,"div",79),v(4,"img",80),t(),v(5,"video",81,0),u(7,"sliceuntile"),e(8,"div",82,1)(10,"div",83)(11,"span",84),i(12,"Loading..."),t()()(),e(13,"span",85),i(14,"Free"),t()()()()}if(r&2){let o=m.$implicit;s(),d("routerLink",C(7,A,o.id)),s(3),d("src",o.thumbnail,x)("alt",o.title),s(),d("src",E(7,4,o.thumbnail,"videoplayback.webm"),x)}}function N(r,m){r&1&&v(0,"i",100)}function W(r,m){r&1&&v(0,"i",101)}function q(r,m){if(r&1){let o=y();e(0,"div",8)(1,"article",86),b("mouseenter",function(){f(o);let n=p(7),a=p(10),c=S();return g(c.playVideo(n,a))})("mouseleave",function(){f(o);let n=p(7),a=p(10),c=S();return g(c.stopVideo(n,a))}),e(2,"div",87)(3,"div",88)(4,"figure",89),v(5,"img",80)(6,"video",81,0),u(8,"sliceuntile"),e(9,"div",82,1)(11,"div",83)(12,"span",84),i(13,"Loading..."),t()()()(),e(14,"figcaption",90)(15,"div",91)(16,"h3",92),i(17),t(),e(18,"span",93),i(19,"Free"),t()(),e(20,"p",94),i(21),u(22,"term"),t()()(),e(23,"footer",95)(24,"span",96),i(25),t(),e(26,"div",97),h(27,N,1,0,"i",98)(28,W,1,0,"i",99),t()()()()()}if(r&2){let o=m.$implicit;s(),d("routerLink",C(15,A,o.id)),s(4),d("src",o.thumbnail,x)("alt",o.title),s(),d("src",E(8,9,o.thumbnail,"videoplayback.webm"),x),s(11),w(o.title),s(4),V(" ",E(22,12,o.short_description,10),"... "),s(4),w(o.genre),s(2),d("ngIf",o.platform==null?null:o.platform.includes("PC")),s(),d("ngIf",o.platform==null?null:o.platform.includes("Web"))}}function J(r,m){r&1&&(e(0,"footer",102)(1,"span",103)(2,"span",104),i(3,"Loading..."),t()()())}var le=(()=>{let m=class m{constructor(l,n,a){this._ActivatedRoute=l,this._GamesService=n,this._Router=a,this.games=[],this.curentLength=13,this.curentCat=this._ActivatedRoute.snapshot.params.category??"all",this.curentP="",this.curentC="",this.curentS="",this.curentYear=new Date().getFullYear(),this.loading=!0,this._Router.routeReuseStrategy.shouldReuseRoute=()=>!1}seeMore(){scrollY+innerHeight+200>=document.body.offsetHeight&&(this.games.length>this.curentLength?this.curentLength+=13:this.loading=!1)}ngOnInit(){console.log(this.curentCat),this.getGameByCat(),$(".select1").customSelect({placeholder:'<span style="color: darkgray;">Browse By Platform:</span>',transition:400,hideCallback:()=>{var l=$(".select-cust1 .custom-select").find('[class$="value"]').text(),n=$(".select-cust2 .custom-select").find('[class$="value"]').text(),a=$(".select-cust3 .custom-select").find('[class$="value"]').text();console.log(l,n,a),this.curentP!==l&&this.getGamesBySPC(n,l,a)}}),$(".select2").customSelect({placeholder:'<span style="color: darkgray;">Browse By Genre:</span>',transition:400,hideCallback:()=>{var l=$(".select-cust1 .custom-select").find('[class$="value"]').text(),n=$(".select-cust2 .custom-select").find('[class$="value"]').text(),a=$(".select-cust3 .custom-select").find('[class$="value"]').text();console.log(l,n,a),this.curentC!==n&&this.getGamesBySPC(n,l,a)}}),$(".select3").customSelect({placeholder:'<span style="color: darkgray;">Sort By:</span>',transition:400,hideCallback:()=>{var l=$(".select-cust1 .custom-select").find('[class$="value"]').text(),n=$(".select-cust2 .custom-select").find('[class$="value"]').text(),a=$(".select-cust3 .custom-select").find('[class$="value"]').text();console.log(l,n,a),this.curentS!==a&&this.getGamesBySPC(n,l,a)}}),$(`#Genre option[value=${this.curentCat}]`).attr("selected","selected"),$(".select-cust2 .custom-select > button").html(this.curentCat)}getGameByCat(){this.curentCat==="all"?this._GamesService.getGames().subscribe({next:l=>{console.log(l),this.games=l}}):this._GamesService.getGamesByCat(this.curentCat).subscribe({next:l=>{console.log(l),this.games=l}})}getGamesBySPC(l,n,a){this._GamesService.getGamesBySPC(l,n,a).subscribe({next:c=>{console.log(c),this.games=c}})}gernerChange(l){this._GamesService.getGamesByCat(l).subscribe({next:n=>{this.games=n}})}playVideo(l,n){this._GamesService.playVideo(l,n)}stopVideo(l,n){this._GamesService.stopVideo(l,n)}};m.\u0275fac=function(n){return new(n||m)(_(z),_(Y),_(j))},m.\u0275cmp=B({type:m,selectors:[["app-games"]],hostBindings:function(n,a){n&1&&b("scroll",function(){return a.seeMore()},!1,P)},standalone:!0,features:[I],decls:185,vars:14,consts:[["vid",""],["spinner",""],[1,"games"],[1,"container","py-4"],[1,"h4","text-light","text-capitalize"],[1,"row","row-cols-1","row-cols-md-2","row-cols-lg-3","g-4","mt-2"],["class","mb-3 cp",3,"mouseenter","mouseleave",4,"ngFor","ngForOf"],[1,"row","row-cols-1","row-cols-md-2","row-cols-lg-3","g-4"],[1,"col"],[1,"d-flex","align-items-center","gap-2","select-cust1"],["for","Platform"],["id","Platform","aria-label",".form-select-sm example",1,"form-select","form-select-sm","border-0","select1"],["value","pc"],["value","browser "],["value","all",3,"selected"],[1,"d-flex","align-items-center","gap-2","select-cust2"],["for","Genre"],["id","Genre","aria-label",".form-select-sm example",1,"form-select","form-select-sm","border-0","select2"],["value","mmorpg"],[1,"text-uppercase"],["value","shooter"],["value","strategy"],["value","moba"],["value","racing"],["value","sports"],["value","social"],["value","sandbox"],["value","open-world"],["value","survival"],["value","pvp"],["value","pve"],["value","pixel"],["value","voxel"],["value","zombie"],["value","turn-based"],["value","first-person"],["value","third-Person"],["value","top-down"],["value","tank"],["value","space"],["value","sailing"],["value","side-scroller"],["value",`  'superhero',
`],["value","permadeath"],["value","card"],["value","battle-royale"],["value","mmo"],["value","mmofps"],["value","mmotps"],["value","3d"],["value","2d"],["value","anime"],["value","fantasy"],["value","sci-fi"],["value","fighting"],["value","action-rpg"],["value","action"],["value","military"],["value","martial-arts"],["value","flight"],["value","low-spec"],["value","tower-defense"],["value","horror"],["value","mmorts"],[1,"d-flex","align-items-center","gap-2","select-cust3"],["for","Sort"],["id","Sort","aria-label",".form-select-sm example",1,"form-select","form-select-sm","border-0","select3"],["value","release-date"],["value","popularity"],["value","alphabetical"],["value","relevance"],[1,"area","py-5"],[1,"container"],[1,"row","row-cols-1","row-cols-md-2","row-cols-lg-3","row-cols-xl-4","g-4"],["class","col",4,"ngFor","ngForOf"],["class","d-flex align-items-center flex-grow-1 justify-content-center",4,"ngIf"],[1,"mb-3","cp",3,"mouseenter","mouseleave"],[3,"routerLink"],[1,"position-relative"],[1,"image"],[1,"w-100",3,"src","alt"],["preload","none","muted","true","loop","",1,"w-100","h-100","position-absolute","top-0","start-0","d-none",3,"src"],[1,"layer","position-absolute","top-0","start-0","w-100","h-100","bg-primary","bg-opacity-50","d-none","justify-content-center","align-items-center"],["role","status",1,"spinner-grow","c-blue",2,"width","3rem","height","3rem"],[1,"visually-hidden"],[1,"badge","bg-blue","text-white","p-2","position-absolute","bottom-0","end-0","m-2"],[1,"mb-3","h-100",3,"mouseenter","mouseleave","routerLink"],[1,"card","h-100","cp","bg-transparent","shadow"],[1,"card-body"],[1,"image","position-relative"],[1,"text","mt-3"],[1,"d-flex","align-items-center","justify-content-between"],[1,"h6"],[1,"badge","bg-blue","text-white","p-2"],[1,"small","text-center"],[1,"d-flex","card-footer","justify-content-between","align-items-center"],[1,"badge","bg-second2","text-dark","fs-10"],[1,"d-flex","align-items-center","gap-2"],["class","fa-brands fa-windows",4,"ngIf"],["class","fa-solid fa-window-maximize",4,"ngIf"],[1,"fa-brands","fa-windows"],[1,"fa-solid","fa-window-maximize"],[1,"d-flex","align-items-center","flex-grow-1","justify-content-center"],[1,"spinner-border"],[1,"sr-only"]],template:function(n,a){n&1&&(e(0,"header",2)(1,"div",3)(2,"h2",4),i(3),t(),e(4,"div",5),h(5,D,15,9,"div",6),u(6,"slice"),t(),e(7,"div",7)(8,"div",8)(9,"div",9)(10,"label",10),i(11," Platform: "),t(),e(12,"select",11)(13,"option",12)(14,"div"),i(15,"pc"),t()(),e(16,"option",13)(17,"div"),i(18,"browser"),t()(),e(19,"option",14)(20,"div"),i(21,"all"),t()()()()(),e(22,"div",8)(23,"div",15)(24,"label",16),i(25," Genre/Tag: "),t(),e(26,"select",17)(27,"option",18)(28,"div",19),i(29,"mmorpg"),t()(),e(30,"option",20)(31,"div",19),i(32,"shooter"),t()(),e(33,"option",21)(34,"div",19),i(35,"strategy"),t()(),e(36,"option",22)(37,"div",19),i(38,"moba"),t()(),e(39,"option",23)(40,"div",19),i(41,"racing"),t()(),e(42,"option",24)(43,"div",19),i(44,"sports"),t()(),e(45,"option",25)(46,"div",19),i(47,"social"),t()(),e(48,"option",26)(49,"div",19),i(50,"sandbox"),t()(),e(51,"option",27)(52,"div",19),i(53,"open-world"),t()(),e(54,"option",28)(55,"div",19),i(56,"survival"),t()(),e(57,"option",29)(58,"div",19),i(59,"pvp"),t()(),e(60,"option",30)(61,"div",19),i(62,"pve"),t()(),e(63,"option",31)(64,"div",19),i(65,"pixel"),t()(),e(66,"option",32)(67,"div",19),i(68,"voxel"),t()(),e(69,"option",33)(70,"div",19),i(71,"zombie"),t()(),e(72,"option",34)(73,"div",19),i(74,"turn-based"),t()(),e(75,"option",35)(76,"div",19),i(77,"first-person"),t()(),e(78,"option",36)(79,"div",19),i(80,"third-Person"),t()(),e(81,"option",37)(82,"div",19),i(83,"top-down"),t()(),e(84,"option",38)(85,"div",19),i(86,"tank"),t()(),e(87,"option",39)(88,"div",19),i(89,"space"),t()(),e(90,"option",40)(91,"div",19),i(92,"sailing"),t()(),e(93,"option",41)(94,"div",19),i(95,"side-scroller"),t()(),e(96,"option",42)(97,"div",19),i(98,"'superhero',"),t()(),e(99,"option",43)(100,"div",19),i(101,"permadeath"),t()(),e(102,"option",44)(103,"div",19),i(104,"card"),t()(),e(105,"option",45)(106,"div",19),i(107,"battle-royale"),t()(),e(108,"option",46)(109,"div",19),i(110,"mmo"),t()(),e(111,"option",47)(112,"div",19),i(113,"mmofps"),t()(),e(114,"option",48)(115,"div",19),i(116,"mmotps"),t()(),e(117,"option",49)(118,"div",19),i(119,"3d"),t()(),e(120,"option",50)(121,"div",19),i(122,"2d"),t()(),e(123,"option",51)(124,"div",19),i(125,"anime"),t()(),e(126,"option",52)(127,"div",19),i(128,"fantasy"),t()(),e(129,"option",53)(130,"div",19),i(131,"sci-fi"),t()(),e(132,"option",54)(133,"div",19),i(134,"fighting"),t()(),e(135,"option",55)(136,"div",19),i(137,"action-rpg"),t()(),e(138,"option",56)(139,"div",19),i(140,"action"),t()(),e(141,"option",57)(142,"div",19),i(143,"military"),t()(),e(144,"option",58)(145,"div",19),i(146,"martial-arts"),t()(),e(147,"option",59)(148,"div",19),i(149,"flight"),t()(),e(150,"option",60)(151,"div",19),i(152,"low-spec"),t()(),e(153,"option",61)(154,"div",19),i(155,"tower-defense"),t()(),e(156,"option",62)(157,"div",19),i(158,"horror"),t()(),e(159,"option",63)(160,"div",19),i(161,"mmorts"),t()()()()(),e(162,"div",8)(163,"div",64)(164,"label",65),i(165," Sort By: "),t(),e(166,"select",66)(167,"option",67)(168,"div"),i(169,"release-date"),t()(),e(170,"option",68)(171,"div"),i(172,"popularity"),t()(),e(173,"option",69)(174,"div"),i(175,"alphabetical"),t()(),e(176,"option",70)(177,"div"),i(178,"relevance"),t()()()()()()()(),e(179,"section",71)(180,"div",72)(181,"div",73),h(182,q,29,17,"div",74),u(183,"slice"),h(184,J,4,0,"footer",75),t()()()),n&2&&(s(3),k(" Top Free ",a.curentCat==="all"?"":a.curentCat," Games for PC and Browser In ",a.curentYear,"! "),s(2),d("ngForOf",G(6,6,a.games,0,3)),s(14),d("selected",a.curentCat==="all"),s(163),d("ngForOf",G(183,10,a.games,0,a.curentLength)),s(2),d("ngIf",a.loading))},dependencies:[O,U,M,H,R,F,L,T]});let r=m;return r})();export{le as GamesComponent};
