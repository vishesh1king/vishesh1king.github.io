(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{ahxV:function(e,t,o){"use strict";o.r(t),o.d(t,"JokesComponentModule",(function(){return f}));var n=o("ofXK"),r=o("bTqV"),s=o("TVk1"),c=o("tyNb"),i=o("kT2x"),a=o("fXoL"),b=o("tk/3");let u=(()=>{class e{constructor(e){this.http=e}getJokes(){return this.http.get("https://api.chucknorris.io/jokes/random")}}return e.\u0275fac=function(t){return new(t||e)(a.Xb(b.b))},e.\u0275prov=a.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var p=o("JqCM");const l=function(){return["/home"]},k=[{path:"",component:(()=>{class e{constructor(e,t){this.jokes=e,this.spinner=t}ngOnInit(){this.getJokes()}getJokes(){this.spinner.show("jokes-loader"),this.jokes.getJokes().subscribe(e=>{this.joke=e,this.spinner.hide("jokes-loader")})}}return e.\u0275fac=function(t){return new(t||e)(a.Ob(u),a.Ob(p.c))},e.\u0275cmp=a.Ib({type:e,selectors:[["app-jokes-component"]],decls:10,vars:5,consts:[[1,"jokes"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","warn",1,"mar-l-15",3,"routerLink"],["bdOpacity","0.9","bdColor","rgba(51,51,51,0.35)","size","medium","color","#fff","type","square-jelly-box",3,"name","fullScreen"],[2,"color","ff8e8e"]],template:function(e,t){1&e&&(a.Tb(0,"div",0),a.Tb(1,"p"),a.Ac(2),a.Sb(),a.Tb(3,"button",1),a.bc("click",(function(){return t.getJokes()})),a.Ac(4,"Get New joke"),a.Sb(),a.Tb(5,"button",2),a.Ac(6," Goto Home Page "),a.Sb(),a.Sb(),a.Tb(7,"ngx-spinner",3),a.Tb(8,"p",4),a.Ac(9," Loading... "),a.Sb(),a.Sb()),2&e&&(a.Bb(2),a.Cc(" Here is a joke - ",null==t.joke?null:t.joke.value," "),a.Bb(3),a.kc("routerLink",a.lc(4,l)),a.Bb(2),a.kc("name","jokes-loader")("fullScreen",!0))},directives:[r.a,c.b,p.a],styles:[".jokes[_ngcontent-%COMP%]{padding:0 20px}"]}),e})(),canActivate:[i.a],canDeactivate:[i.a]},{path:"**",redirectTo:"/404"}];let d=(()=>{class e{}return e.\u0275mod=a.Mb({type:e}),e.\u0275inj=a.Lb({factory:function(t){return new(t||e)},imports:[[c.e.forChild(k)],c.e]}),e})(),f=(()=>{class e{}return e.\u0275mod=a.Mb({type:e}),e.\u0275inj=a.Lb({factory:function(t){return new(t||e)},providers:[],imports:[[n.c,d,r.b,s.a]]}),e})()}}]);