(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(49)},25:function(e,t,a){},27:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(19),r=a.n(l),c=(a(25),a(53)),o=a(50),s=a(6),u=a(7),m=a(9),d=a(8),p=a(10),h=a(29),v=function(e){return i.a.createElement("span",{className:"emoji",role:"img","aria-label":e.label?e.label:"","aria-hidden":e.label?"false":"true"},e.symbol)},b=(a(27),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"Start"},i.a.createElement("h1",null,i.a.createElement(v,{symbol:"\ud83d\udc68\u200d\ud83d\udcbb"})),i.a.createElement("h1",null,"Indie Maker"),i.a.createElement("h5",null,"The Game"),i.a.createElement(h.a,{to:"".concat("/indie-maker-the-game","/make"),className:"PlayBtn"},"Play"))}}]),t}(n.Component)),y=a(4),f=function(e){var t,a=[{value:1,symbol:""},{value:1e3,symbol:"K"},{value:1e6,symbol:"M"},{value:1e9,symbol:"G"},{value:1e12,symbol:"T"},{value:1e15,symbol:"P"},{value:1e18,symbol:"E"}];for(t=a.length-1;t>0&&!(e>=a[t].value);t--);return(e/a[t].value).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/,"$1")+a[t].symbol},k=(a(38),Object(y.b)(function(e){return e.make})(function(e){return i.a.createElement("header",{className:"Header"},i.a.createElement("h2",{style:{width:"35%"}},i.a.createElement(v,{symbol:"\ud83d\udcb5",label:"money"}),i.a.createElement("br",null),"$",f(e.money)),i.a.createElement("h2",{style:{width:"35%"}},i.a.createElement(v,{symbol:"\ud83d\udde3",label:"followers"}),i.a.createElement("br",null),f(e.followers)),e.level>=0?i.a.createElement("h2",{style:{width:"24%"}},i.a.createElement(v,{symbol:"\ud83c\udfc5",label:"level"}),i.a.createElement("br",null),e.level):null)})),E=a(51),g=(a(40),function(){return i.a.createElement("footer",null,i.a.createElement("nav",null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(E.a,{to:"".concat("/indie-maker-the-game","/upgrades"),activeClassName:"active"},i.a.createElement(v,{symbol:"\ud83d\udcb8",label:"money"}),i.a.createElement("br",null),"Upgrades")),i.a.createElement("li",null,i.a.createElement(E.a,{to:"".concat("/indie-maker-the-game","/make"),activeClassName:"active"},i.a.createElement(v,{symbol:"\ud83d\udc68\u200d\ud83d\udcbb",label:"money"}),i.a.createElement("br",null),"Make")),i.a.createElement("li",null,i.a.createElement(E.a,{to:"".concat("/indie-maker-the-game","/achievements"),activeClassName:"active"},i.a.createElement(v,{symbol:"\ud83c\udfc6",label:"money"}),i.a.createElement("br",null),"Achievements")))))}),w=Object(y.b)(function(e){return e.make})(function(e){return i.a.createElement("div",{className:"make-tip"},i.a.createElement("h1",null,"Build something and spread the word!"),i.a.createElement("h3",null,"Or is it viceversa? ",i.a.createElement(v,{symbol:"\ud83e\udd14"})))}),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={animated:!1},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"onClick",value:function(e){var t=this;e.preventDefault(),this.props.dispatch({type:"BUILD"}),this.setState({animated:!0}),setTimeout(function(e){t.setState({animated:!1})},200)}},{key:"render",value:function(e){return i.a.createElement("button",{id:"build-btn",className:"green button "+(this.state.animated?"animated":""),onClick:this.onClick.bind(this)},i.a.createElement("h1",null,i.a.createElement(v,{symbol:"\ud83d\ude80"})),"Build")}}]),t}(i.a.Component),j=Object(y.b)()(O),C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={animated:!1},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"onClick",value:function(e){var t=this;e.preventDefault(),this.props.dispatch({type:"MARKETING"}),this.setState({animated:!0}),setTimeout(function(e){t.setState({animated:!1})},500)}},{key:"render",value:function(e){return i.a.createElement("button",{id:"marketing-btn",className:"pink button "+(this.state.animated?"animated":""),onClick:this.onClick.bind(this)},i.a.createElement("h1",null,i.a.createElement(v,{symbol:"\ud83c\udfb2"})),"Marketing")}}]),t}(i.a.Component),N=Object(y.b)()(C),A=(a(43),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(k,null),i.a.createElement(w,null),i.a.createElement(j,null),i.a.createElement(N,null),i.a.createElement(g,null))}}]),t}(n.Component)),q=(a(45),Object(y.b)(function(e){return e})(function(e){return i.a.createElement("div",null,i.a.createElement(k,null),i.a.createElement("ul",{className:"upgrades list-group list-group-flush"},e.upgrades.map(function(t){return t.acquired?null:i.a.createElement("li",{className:"list-group-item",key:t.id},i.a.createElement("div",{style:{display:"inline-block",width:"100%"}},i.a.createElement("h3",null,i.a.createElement(v,{symbol:t.icon})," ",t.title),i.a.createElement("p",null,t.description,i.a.createElement("button",{className:"green button",disabled:e.make.money<t.cost,onClick:function(a){a.preventDefault(),e.dispatch({type:"BUY",id:t.id});var n=t.update;n.cost=t.cost,e.dispatch({type:"UPGRADE",payload:n})}},"Buy for $",t.cost))))})),i.a.createElement(g,null))})),T=(a(47),Object(y.b)(function(e){return e})(function(e){return i.a.createElement("div",null,i.a.createElement(k,null),i.a.createElement("ul",{className:"achievements list-group list-group-flush"},e.achievements.map(function(e){return e.acquired?null:i.a.createElement("li",{className:e.unlocked?"":"locked",key:e.id},i.a.createElement("h1",null,i.a.createElement(v,{symbol:e.icon,label:"Achievement"})),i.a.createElement("h3",null,e.title),i.a.createElement("p",null,e.description))})),i.a.createElement(g,null))})),I=a(11),P=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).timer=a.timer.bind(Object(I.a)(Object(I.a)(a))),a.checkAchievements=a.checkAchievements.bind(Object(I.a)(Object(I.a)(a))),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.interval=setInterval(this.timer,60),this.intervalAchievements=setInterval(this.checkAchievements,2e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval),clearInterval(this.intervalAchievements)}},{key:"timer",value:function(){this.props.dispatch({type:"UPDATE"})}},{key:"checkAchievements",value:function(){this.props.dispatch({type:"UNLOCK",stats:this.props})}},{key:"render",value:function(e){return null}}]),t}(i.a.Component),D=Object(y.b)(function(e){return e.make})(P),U=function(){return i.a.createElement("main",null,i.a.createElement(D,null),i.a.createElement(c.a,{basename:"/indie-maker-the-game"},i.a.createElement(o.a,{exact:!0,path:"".concat("/indie-maker-the-game","/"),component:b}),i.a.createElement(o.a,{exact:!0,path:"".concat("/indie-maker-the-game","/make"),component:A}),i.a.createElement(o.a,{exact:!0,path:"".concat("/indie-maker-the-game","/upgrades"),component:q}),i.a.createElement(o.a,{exact:!0,path:"".concat("/indie-maker-the-game","/achievements"),component:T})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=a(52),M=a(12),S={builds:0,marketing:0,followers:0,money:100,level:0,conversion:1,productivity:10,upgrades:0,playTime:0,startPlay:new Date},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BUILD":return Object.assign({},e,{builds:e.builds+1});case"MARKETING":return Object.assign({},e,{marketing:e.marketing+1});case"UPDATE":if(100*Math.random()<90)return e;var a=e.marketing*e.productivity/300,n=e.builds*e.productivity/1e3;return Object.assign({},e,{money:e.money+parseInt(e.followers*e.conversion/1e3,10),followers:0===e.marketing?0:e.followers+parseInt(a+n,10)+e.level,level:e.followers.toString().length>2?e.followers.toString().length-2:0,playTime:((new Date).getTime()-e.startPlay.getTime())/1e3});case"UPGRADE":var i=t.payload;return Object.assign({},e,{upgrades:e.upgrades+1,money:e.money-(i.cost||0),marketing:e.marketing+(i.payload||0),followers:e.followers+(i.followers||0),level:e.level+(i.level||0),conversion:e.conversion+(i.conversion||0),productivity:e.productivity+(i.productivity||0)});default:return e}},V=[{id:1,icon:"\u26a1\ufe0f",title:"Upgrade to SSD servers",description:"Conversion +5%",cost:250,acquired:!1,update:{conversion:5}},{id:2,icon:"\ud83d\udc69\u200d\ud83c\udfa8",title:"Influencer Campaign",description:"Followers +225",cost:1e3,acquired:!1,update:{followers:225}},{id:3,icon:"\ud83d\udcbb",title:"New powerful laptop",description:"Productivity +10%",cost:2500,acquired:!1,update:{productivity:10}},{id:4,icon:"\ud83d\udd2e",title:"Ads Campaign #1",description:"Followers +357",cost:3e3,acquired:!1,update:{followers:357}},{id:5,icon:"\ud83d\udc71\u200d\u2640\ufe0f",title:"Hire blogger",description:"Conversion +3%",cost:3e4,acquired:!1,update:{conversion:3}},{id:6,icon:"\ud83e\udddb\u200d\u2642\ufe0f",title:"Hire lawyer",description:"Productivity +2%",cost:5e4,acquired:!1,update:{productivity:2}},{id:7,icon:"\ud83d\udcca",title:"Use Ghostboard for the blog",description:"Productivity +10%",cost:500,acquired:!1,update:{productivity:10}},{id:8,icon:"\ud83e\udd16",title:"Automatize some tasks",description:"Productivity +7%",cost:9e3,acquired:!1,update:{productivity:7}},{id:9,icon:"\ud83d\udd2e",title:"Ads Campaign #2",description:"Followers +2,000",cost:45e3,acquired:!1,update:{followers:2e3}},{id:10,icon:"\ud83d\udc69",title:"Hire a marketer",description:"Conversion +5%",cost:69e3,acquired:!1,update:{conversion:5}},{id:11,icon:"\ud83d\udc69\u200d\ud83d\udcbb",title:"Hire a dev",description:"Builds +1,000",cost:95e3,acquired:!1,update:{builds:1e3}},{id:12,icon:"\ud83d\udd25",title:"Rise salaries",description:"Productivity +10%",cost:1e5,acquired:!1,update:{productivity:10}},{id:13,icon:"\ud83d\udcfa",title:"TV ad",description:"Followers +10,000",cost:125e3,acquired:!1,update:{followers:1e4}},{id:14,icon:"\ud83d\udd2e",title:"Ads Campaign #3",description:"Followers +5,000",cost:15e4,acquired:!1,update:{followers:5e3}},{id:15,icon:"\ud83c\udfc8",title:"SuperBowl Ad",description:"Followers +500,000",cost:1e6,acquired:!1,update:{followers:5e5}}],F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BUY":return e.map(function(e){return e.id===t.id?(e.acquired=!0,e):e});default:return e}},$=[{key:1,icon:"\ud83d\udcb0",title:"The first one",description:"Get a $1M for your first time",field:"money",minValue:1e6,unlocked:!1},{key:2,icon:"\ud83d\ude02",title:"Look Zuck!",description:"Grow your audience to 10M",field:"followers",minValue:1e7,unlocked:!1},{key:3,icon:"\u2728",title:"The Key",description:"Do more than 1,000 marketing actions",field:"marketing",minValue:1e3,unlocked:!1},{key:5,icon:"\ud83d\uded2",title:"I take everything, thanks",description:"Buy all upgrades",field:"upgrades",minValue:15,unlocked:!1},{key:4,icon:"\ud83c\udfb1",title:"I feel lucky",description:"Can you reach level 8?",field:"level",minValue:8,unlocked:!1},{key:6,icon:"\ud83e\udd70",title:"Thank you!",description:"Play 1 hour",field:"playTime",minValue:3600,unlocked:!1}],x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UNLOCK":var a=t.stats;return e.map(function(e){if(!e.unlocked){var t=a[e.field]>=e.minValue;e.unlocked=t}return e});default:return e}},K=Object(M.b)({make:G,upgrades:F,achievements:x}),H=Object(M.c)(K);r.a.render(i.a.createElement(y.a,{store:H},i.a.createElement(B.a,null,i.a.createElement(U,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.6ab55745.chunk.js.map