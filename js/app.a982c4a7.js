(function(t){function a(a){for(var n,r,o=a[0],l=a[1],c=a[2],p=0,m=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&m.push(s[r][0]),s[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(a);while(m.length)m.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],n=!0,o=1;o<e.length;o++){var l=e[o];0!==s[l]&&(n=!1)}n&&(i.splice(a--,1),t=r(r.s=e[0]))}return t}var n={},s={app:0},i=[];function r(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=n,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)r.d(e,n,function(a){return t[a]}.bind(null,n));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/personal/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=a,o=o.slice();for(var c=0;c<o.length;c++)a(o[c]);var u=l;i.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";e("85ec")},1771:function(t,a,e){var n={"./logo.png":"cf05","./me.png":"9f2c","./nusa_shop.png":"c9b6","./sinpos.jpg":"3477","./sinpos.png":"3719","./sipp.png":"5c6a","./style.css":"7d05"};function s(t){var a=i(t);return e(a)}function i(t){if(!e.o(n,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=i,t.exports=s,s.id="1771"},3477:function(t,a,e){t.exports=e.p+"img/sinpos.5c84bd13.jpg"},3719:function(t,a,e){t.exports=e.p+"img/sinpos.f3cfbd38.png"},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"content"}},[e("nav",{staticClass:"navbar navbar-expand-md navbar-light"},[e("div",{staticClass:"container"},[e("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e("div",{staticClass:"text-dark"},[t._v(" Firman Syah ")])]),t._m(0),e("div",{staticClass:"collapse navbar-collapse flex-grow-0",attrs:{id:"navbarNav"}},[e("ul",{staticClass:"navbar-nav text-right"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"Home"}}},[t._v(" Home ")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"About"}}},[t._v(" About ")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"Educations"}}},[t._v(" Educations ")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"Experiences"}}},[t._v(" Experience ")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"Portfolio"}}},[t._v(" Portfolio ")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"Contacts"}}},[t._v(" Contacts ")])],1)])])],1)])]),e("router-view"),e("my-footer")],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"my-1 mx-2 close"},[t._v("X")]),e("span",{staticClass:"navbar-toggler-icon"})])}],r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bottom"},t._l(t.datas,(function(t){return e("div",{key:t.id,staticStyle:{display:"inline"}},[e("a",{staticClass:"black",attrs:{href:""+t.link,target:"_blank",rel:"noopener noreferrer"}},[e("Icon",{staticClass:"space",attrs:{icon:["fab",""+t.icon],size:"3x"}})],1)])})),0)},o=[],l={data:function(){return{datas:[{id:0,link:"https://www.github.com/FirmanSyah2701",icon:"github"},{id:1,link:"https://www.instagram.com/firman_syah2701",icon:"instagram"},{id:2,link:"https://www.youtube.com/channel/UCwsg2f0imjNQ4jVKUByVPYA",icon:"youtube"}]}}},c=l,u=e("2877"),p=Object(u["a"])(c,r,o,!1,null,null,null),m=p.exports,d={components:{"my-footer":m}},v=d,f=(e("034f"),Object(u["a"])(v,s,i,!1,null,null,null)),b=f.exports,g=e("8c4f"),h=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"home"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-6"},[n("img",{staticClass:"img-style",attrs:{src:e("9f2c")}})]),n("div",{staticClass:"col-sm-6"},[n("h2",{attrs:{id:"welcome"}},[t._v("Welcome to My Personal Website")]),n("div",{staticClass:"layout"},[t._v(" Hello all, My name is Firman Syah i am a Software Developer ")])])])])])}],C={},y=Object(u["a"])(C,h,_,!1,null,null,null),k=y.exports,w=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"about"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-6"},[n("img",{staticClass:"img-style",attrs:{src:e("9f2c")}})]),n("div",{staticClass:"col-sm-6"},[n("h2",{attrs:{id:"header"}},[t._v("About Me")]),n("div",{staticClass:"layout"},[t._v(" I am a student, I love programming and I prefer to go backend. The technologies I usually used are laravel for web and flutter for mobile. ")])])])])])}],E={},j=Object(u["a"])(E,w,x,!1,null,null,null),O=j.exports,S=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"educations"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-6"},[n("img",{staticClass:"img-style",attrs:{src:e("9f2c")}})]),n("div",{staticClass:"col-sm-6"},[n("h2",{attrs:{id:"header"}},[t._v("Educations")]),n("div",{staticClass:"layout"},[n("b",[t._v(" SMK Negeri 1 Cirebon ")]),n("p",[t._v(" Software Engineering, 2015 - 2018 ")]),n("b",[t._v(" Politeknik Negeri Indramayu ")]),n("p",[t._v(" Software Engineering, 2018 - Now ")])])])])])])}],I={},$=Object(u["a"])(I,S,P,!1,null,null,null),A=$.exports,M=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"experiences"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-6"},[n("img",{staticClass:"img-style",attrs:{src:e("9f2c")}})]),n("div",{staticClass:"col-sm-6"},[n("h2",{attrs:{id:"header"}},[t._v("Experience")]),n("div",{staticClass:"layout"},[n("b",[t._v(" Internship ")]),t._v(" "),n("br"),t._v(" Backend WEB Developer, Software House Fatch Tech "),n("br"),t._v(" Juli - October 2017 ")])])])])])}],T={},D=Object(u["a"])(T,M,N,!1,null,null,null),F=D.exports,H=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"portofolio"},[n("div",{attrs:{id:"my-portfolio"}},[n("div",{staticClass:"container"},[n("h3",{staticStyle:{"margin-bottom":"20px"}},[t._v("My Portfolio")]),n("div",{staticClass:"row"},t._l(t.items,(function(a){return n("div",{key:a.id,staticClass:"col-sm-4"},[n("div",{staticClass:"card"},[n("img",{staticClass:"card-img-top",attrs:{src:e("1771")("./"+a.image)}}),n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title"},[t._v(t._s(a.title))]),n("p",{staticClass:"card-text text-justify"},[t._v(t._s(a.description))])])])])})),0)])])])},K=[],U={data:function(){return{items:[{id:0,title:"Sistem Integrasi Posyandu",image:"sinpos.png",description:"Sebuah aplikasi berbasis website dan mobile yang dikembangkan untuk memudahkan Dinas Kesehatan Kabupaten Indramayu dalam pencatatan, pendataan dan pencarian data kesehatan. Aplikasi ini menggunakan laravel untuk web dan server nya dan flutter untuk mobile nya"},{id:1,title:"Nusa Shop",image:"nusa_shop.png",description:"Sebuah aplikasi e-commerce kosmetik berbasis websiste. Aplikasi ini menggunakan API rajaongkir untuk mengambil data provinsi dan kota/kabupaten berserta menghitung ongkos kirim, dan menggunakan laravel untuk pembuatan web nya"},{id:2,title:"Sistem Informasi Pelayanan Pusksesmas Plumbon",image:"sipp.png",description:"Sebuah aplikasi informasi pelayanan puskesmas berbasis websiste. Aplikasi ini memiliki fitur utama yaitu pemesanan antrian dan konsultasi dokter. Aplikasi ini menggunakan laravel untuk pembuatan web nya"}]}}},B=U,J=Object(u["a"])(B,H,K,!1,null,null,null),W=J.exports,V=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"contacts"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[t._m(0),e("div",{staticClass:"col-sm-6"},[e("h2",{attrs:{id:"header"}},[t._v("Contacts")]),e("div",{staticClass:"layout"},[e("Icon",{attrs:{icon:"phone"}}),t._v(" +(62) 83107367831 "),e("br"),e("Icon",{attrs:{icon:"envelope"}}),t._v(" abdulfirmansyah7@gmail.com "),e("br"),e("Icon",{attrs:{icon:"map-marker-alt"}}),t._v(" "),e("span",{staticStyle:{"margin-left":"5px"}},[t._v(" Cirebon ")])],1)])])])])},z=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"col-sm-6"},[n("img",{staticClass:"img-style",attrs:{src:e("9f2c")}})])}],L={},Q=Object(u["a"])(L,V,z,!1,null,null,null),X=Q.exports;n["a"].use(g["a"]);var Y=new g["a"]({base:"/personal",mode:"history",routes:[{path:"/",name:"Home",component:k},{path:"/about",name:"About",component:O},{path:"/educations",name:"Educations",component:A},{path:"/experiences",name:"Experiences",component:F},{path:"/portfolio",name:"Portfolio",component:W},{path:"/contacts",name:"Contacts",component:X}]}),q=(e("4989"),e("ab8b"),e("ecee")),G=e("c074"),R=e("f2d1"),Z=e("ad3d");q["c"].add(R["a"],G["a"]),n["a"].component("Icon",Z["a"]),n["a"].config.productionTip=!1,new n["a"]({router:Y,render:function(t){return t(b)}}).$mount("#app")},"5c6a":function(t,a,e){t.exports=e.p+"img/sipp.da5c2b40.png"},"7d05":function(t,a,e){},"85ec":function(t,a,e){},"9f2c":function(t,a,e){t.exports=e.p+"img/me.11b62476.png"},c9b6:function(t,a,e){t.exports=e.p+"img/nusa_shop.546dc982.png"},cf05:function(t,a,e){t.exports=e.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.a982c4a7.js.map