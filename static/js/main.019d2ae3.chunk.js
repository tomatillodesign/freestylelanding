(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n(67)},32:function(e,t,n){},34:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},67:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(25),i=n.n(o),s=(n(32),n(1)),c=n(2),l=n(4),p=n(3),d=n(5),u=(n(34),n(8),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){this.props.classes;var e=this.props.entryTitle,t=(this.props.entryExcerpt,this.props.entryContent,this.props.date,this.props.author,this.props.link),n=this.props.entrySpecialMessage,a=this.props.entryStartDate,o=this.props.entryEndDate,i=this.props.index,s=parseInt(this.props.startingAt),c="2%",l="inherit",p=new Date(1e3*a),d=o.replace(/(\d{4})(\d{2})(\d{2})/g,"$1-$2-$3"),u=new Date(d);function m(e){return e.toUTCString().replace("00:00:00 GMT","")}0!==i&&i%3!==0||(c=0,l="both");var h={marginLeft:c,clear:l},f=s.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,");return r.a.createElement("div",{className:"trip-card-area"},r.a.createElement("a",{href:t,target:"_blank"},r.a.createElement("div",{className:"trip-card",style:h},r.a.createElement("h2",{dangerouslySetInnerHTML:{__html:e}}),r.a.createElement("div",{className:"entry-dates"},m(p)," - ",m(u)),r.a.createElement("div",{className:"entry-special-message"},n),r.a.createElement("div",{className:"starting-price"},"Starting at $",f," USD"))))}}]),t}(r.a.Component)),m="https://freestyleadventuretravel.com",h=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(p.a)(t).call(this))).state={allPostTitles:!1,posts:[],dataRoute:m+"/wp-json/wp/v2/trips?specials=111&per_page=6"},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(this.state.dataRoute).then(function(e){return e.json()}).then(function(t){return e.setState(function(n,a){return{posts:t.map(e.mapPosts)}})})}},{key:"mapPosts",value:function(e){return console.log(e),{id:e.id,date:new Date(e.date).toLocaleDateString(),entryExcerpt:e.excerpt.rendered,entryContent:e.content.rendered,title:e.title.rendered,link:e.link,specialMessage:e.trip_meta_fields.special_message[0],startDateRaw:e.trip_meta_fields.start_date_php[0],endDateRaw:e.trip_meta_fields.end_date[0],startingAt:e.trip_meta_fields.starting_at}}},{key:"render",value:function(){return r.a.createElement("div",{className:"cards"},this.state.posts.map(function(e,t){return r.a.createElement("div",{className:"clb-trip-card",key:"post-".concat(e.id,"}")},r.a.createElement(u,{index:t,link:e.link,entryTitle:e.title,date:e.date,entryExcerpt:e.entryExcerpt,entryContent:e.entryContent,entrySpecialMessage:e.specialMessage,entryStartDate:e.startDateRaw,entryEndDate:e.endDateRaw,startingAt:e.startingAt}))}))}}]),t}(a.Component),f=new(n(36))({endpoint:"https://freestyleadventuretravel.com/wp-json/wp/v2/trips?embed"}),g=(a.Component,function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",{className:"App-title"},"Welcome to AntarcticDeals.com by ",r.a.createElement("a",{href:"https://freestyleadventuretravel.com/",target:"_blank"},"Freestyle Adventure Travel"))),r.a.createElement("div",{className:"wrap"},r.a.createElement("h2",null,"Check Out These Upcoming Trips!"),r.a.createElement(h,null)),r.a.createElement("footer",{className:"footer"},r.a.createElement("a",{href:"https://freestyleadventuretravel.com/",target:"_blank"},"FREESTYLE ADVENTURE TRAVEL"),r.a.createElement("br",null),"Gobernador Paz 866",r.a.createElement("br",null),"Ushuaia TdF, Argentina 9410",r.a.createElement("br",null),"+54 9 2901 609792",r.a.createElement("br",null),"+54 9 2901 606661",r.a.createElement("br",null),"Proyectos Fueguinos EVT - Leg. 16259"))}}]),t}(a.Component)),v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(r.a.createElement(g,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/freestylelanding",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/freestylelanding","/service-worker.js");v?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):y(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):y(e)})}}()},8:function(e,t,n){}},[[26,2,1]]]);
//# sourceMappingURL=main.019d2ae3.chunk.js.map