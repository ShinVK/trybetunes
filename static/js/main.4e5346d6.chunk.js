(this.webpackJsonptrybetunes=this.webpackJsonptrybetunes||[]).push([[0],{102:function(e,t,n){},114:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(82),i=n.n(c),s=(n(102),n(19)),o=n(20),l=n(22),d=n(21),u=n(89),h=n(150),j=n(146),b=n(17),m=n(152),x=n(153),p=n(154),f=n(155),O=n(156),v=n(84),g=n.n(v),k=n.p+"static/media/background1.1fde45a7.jpg",y=n(0),S={paperContainer:{backgroundImage:"url(".concat(k,")"),width:"110vw",height:"110vh",backgroundSize:"cover"}};function C(){var e=Object(b.g)();return Object(y.jsx)(m.a,{maxWidth:"xg",disableGutters:!0,sx:{maxHeight:"100vh",overflow:"hidden"},children:Object(y.jsx)(x.a,{style:S.paperContainer,children:Object(y.jsxs)(p.a,{sx:{ml:{xs:-4,md:10},textAlign:{xs:"center",md:"left"}},children:[Object(y.jsx)(f.a,{variant:"h2",component:"h2",color:"secondary",sx:{fontSize:{xs:100,sm:150,md:200,lg:250},fontFamily:"WildFont"},children:"TRYBETUNES"}),Object(y.jsx)(f.a,{variant:"h2",component:"h2",sx:{fontSize:{xs:15,sm:20,md:25,lg:30},fontFamily:"Sinkin",color:"#7692ff"},children:"shinvk.github.io/trybetunes"}),Object(y.jsxs)(O.a,{sx:{ml:{lg:10},mt:20},onClick:function(){return e.push("/search")},children:[Object(y.jsx)(g.a,{sx:{fontSize:{xs:60,sm:90,md:120,lg:180}}}),Object(y.jsx)(f.a,{variant:"h2",component:"h2",sx:{fontSize:{xs:15,sm:20,md:25,lg:30},fontFamily:"Sinkin",color:"#75631e"},children:"Entrar"})]})]})})})}var w=n(86),F=n(13),I=n.n(F),N=n(23),U=n(18),H=function(){var e=Object(N.a)(I.a.mark((function e(t){var n,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://itunes.apple.com/lookup?id=".concat(t,"&entity=song"));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a.results);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=n(15),E="favorite_songs";JSON.parse(localStorage.getItem(E))||localStorage.setItem(E,JSON.stringify([]));var M=function(){return JSON.parse(localStorage.getItem(E))},z=function(e){return localStorage.setItem(E,JSON.stringify(e))},T=function(e){return function(t){setTimeout((function(){t(e)}),500)}},D=function(){return new Promise((function(e){var t=M();T(t)(e)}))},P=function(e){return new Promise((function(t){if(e){var n=M();z([].concat(Object(A.a)(n),[e]))}T("OK")(t)}))},B=function(e){return new Promise((function(t){var n=M();z(n.filter((function(t){return t.trackId!==e.trackId}))),T("OK")(t)}))},W=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(y.jsx)("div",{children:Object(y.jsx)("h2",{children:"Carregando..."})})}}]),n}(a.Component),J=n(14),R=n(5),L=n(7),q=n(113),K=n(157),Y=n(151),_=n(158),G=n(159),Q=n(160),V=n(161),X=n(162),Z=n(163),$=n(164),ee=n(144),te=n(77),ne=n(79),ae=n.n(ne),re=n(87),ce=n.n(re),ie=n(61),se=n.n(ie),oe=n(78),le=n.n(oe),de=n(88),ue=n.n(de),he=n(145),je=Object(L.a)(ee.a)((function(e){var t,n=e.theme;return t={},Object(R.a)(t,"&.".concat(te.a.head),{backgroundColor:n.palette.common.black,color:n.palette.common.white}),Object(R.a)(t,"&.".concat(te.a.body),{fontSize:14,"&:hover":{cursor:"pointer"}}),t})),be=Object(L.a)(K.a)((function(e){return{"&:nth-of-type(odd)":{backgroundColor:e.theme.palette.action.hover},"&:last-child td, &:last-child th":{border:0},background:"#f1f1f1","&:hover":{background:"#7692ff"}}})),me={paperContainer:{backgroundImage:"url(".concat(k,")"),backgroundSize:"cover",backgroundPosition:"center",width:"100%",height:"25vh"}};function xe(e){var t=e.musics,n=a.useState(!1),r=Object(J.a)(n,2),c=r[0],i=r[1],s=a.useState([]),o=Object(J.a)(s,2),l=o[0],d=o[1],u=a.useState(""),h=Object(J.a)(u,2),j=h[0],b=h[1],v=a.useState(""),g=Object(J.a)(v,2),k=g[0],S=g[1],C=a.useState(""),w=Object(J.a)(C,2),F=w[0],I=w[1],N=a.useState(""),U=Object(J.a)(N,2),H=U[0],A=U[1],E=a.useState(0),M=Object(J.a)(E,2),z=M[0],T=M[1],D=a.useState(0),P=Object(J.a)(D,2),B=P[0],W=P[1];a.useEffect((function(){d(t)}),[t]),a.useEffect((function(){t.length>0&&(I(t[z].previewUrl),b(t[z].artworkUrl100),S(t[z].trackName),A(t[z].artistName),W(t.length-1))}),[t,z]);var R=document.getElementsByClassName("audio-element")[0],L=Object(q.a)(),ee=function(){R.pause(),i(!1)};return Object(y.jsxs)(m.a,{maxWidth:"lg",children:[Object(y.jsx)(x.a,{style:me.paperContainer,sx:{mb:5},children:Object(y.jsx)(Y.a,{container:!0,justifyContent:"center",children:Object(y.jsxs)(Y.a,{item:!0,xs:10,children:[Object(y.jsx)(f.a,{variant:"h2",component:"h2",color:"secondary",sx:{fontSize:{xs:100,sm:80,md:120,lg:150},fontFamily:"WildFont",mt:{lg:-2,sx:3},mr:{md:2},ml:{md:2},textAlign:{xs:"left"}},children:"TRYBETUNES"}),Object(y.jsx)(f.a,{variant:"h2",component:"h2",sx:{fontSize:{xs:10,sm:10,md:15,lg:20},fontFamily:"Sinkin",mt:{xs:-1,sm:2,md:-2},mr:{md:2},ml:{md:2},color:"#7692ff",textAlign:{xs:"left"}},children:"shinvk.github.io/trybetunes"})]})})}),Object(y.jsxs)(_.a,{sx:{display:"flex",maxWidth:{xs:"100%",md:"60%"},mr:"auto",ml:" auto"},children:[Object(y.jsxs)(p.a,{sx:{display:"flex",flexDirection:"column"},children:[Object(y.jsxs)(G.a,{sx:{flex:"1 0 auto",maxWidth:{xs:250,md:500},overflow:"hidden",whiteSpace:"nowrap"},children:[Object(y.jsx)(f.a,{component:"div",variant:"h5",children:k}),Object(y.jsx)(f.a,{variant:"subtitle1",color:"text.secondary",component:"div",children:H})]}),Object(y.jsxs)(p.a,{sx:{display:"flex",alignItems:"center",pl:1,pb:1},children:[Object(y.jsx)(O.a,{"aria-label":"previous",onClick:function(){return ee(),T(0===z?B:function(e){return e-1}),void R.load()},children:"rtl"===L.direction?Object(y.jsx)(le.a,{}):Object(y.jsx)(ae.a,{})}),c?Object(y.jsx)(O.a,{"aria-label":"play/pause",onClick:ee,children:Object(y.jsx)(he.a,{sx:{height:38,width:38}})}):Object(y.jsx)(O.a,{"aria-label":"play/pause",onClick:function(){R.play(),i(!0)},children:Object(y.jsx)(ce.a,{sx:{height:38,width:38}})}),Object(y.jsx)(O.a,{"aria-label":"next",onClick:function(){return ee(),T(z===B?0:function(e){return e+1}),void R.load()},children:"rtl"===L.direction?Object(y.jsx)(ae.a,{}):Object(y.jsx)(le.a,{})}),Object(y.jsx)(O.a,{children:Object(y.jsx)(ue.a,{})})]})]}),Object(y.jsx)(Q.a,{component:"img",sx:{maxWidth:{xs:150,sm:150},ml:"auto"},image:j,alt:"Live from space album cover"}),""===F?Object(y.jsx)("h2",{children:"Carregando"}):Object(y.jsxs)("audio",{className:"audio-element",children:[Object(y.jsx)("source",{src:F},z),Object(y.jsx)("track",{kind:"captions"}),"O seu navegador n\xe3o suporta o elemento",Object(y.jsx)("code",{children:"audio"})]})]}),l.length<1?Object(y.jsx)("h2",{children:"Carregando"}):Object(y.jsx)(V.a,{component:x.a,sx:{maxWidth:700,mr:"auto",ml:"auto",mt:1},children:Object(y.jsxs)(X.a,{sx:{maxWidth:700},"aria-label":"customized table",children:[Object(y.jsx)(Z.a,{children:Object(y.jsxs)(K.a,{children:[Object(y.jsx)(je,{children:"Play"}),Object(y.jsx)(je,{children:"M\xfasica"}),Object(y.jsx)(je,{align:"right",children:"Artista"}),Object(y.jsx)(je,{align:"right",children:"Album"})]})}),Object(y.jsx)($.a,{children:l.map((function(e,t){return Object(y.jsxs)(be,{children:[Object(y.jsx)(je,{align:"right",children:Object(y.jsx)(O.a,{onClick:function(){return function(e){ee(),T(e),R.load()}(t)},children:Object(y.jsx)(se.a,{})})}),Object(y.jsx)(je,{component:"th",scope:"row",children:e.trackName}),Object(y.jsx)(je,{align:"right",children:e.artistName}),Object(y.jsx)(je,{align:"right",children:e.collectionName})]},t)}))})]})})]})}var pe=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={load:!1,dataAlbum:[],dataTracks:[],favoritesMusics:[]},a.fetchMusics=a.fetchMusics.bind(Object(U.a)(a)),a.onHandleChangeChecked=a.onHandleChangeChecked.bind(Object(U.a)(a)),a.getFavorites=a.getFavorites.bind(Object(U.a)(a)),a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.fetchMusics(),this.getFavorites()}},{key:"onHandleChangeChecked",value:function(){var e=Object(N.a)(I.a.mark((function e(t){var n,a=this;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.state.favoritesMusics,this.setState({load:!0}),!n.some((function(e){return e.trackId===t.trackId}))){e.next=7;break}return e.next=5,B(t);case 5:e.next=9;break;case 7:return e.next=9,P(t);case 9:return e.next=11,D().then((function(e){return a.setState((function(){return{favoritesMusics:e}}))}));case 11:this.setState({load:!1});case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getFavorites",value:function(){var e=Object(N.a)(I.a.mark((function e(){var t=this;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({load:!0}),e.next=3,D().then((function(e){return t.setState({favoritesMusics:e})}));case 3:this.setState({load:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchMusics",value:function(){var e=this,t=this.props.location.pathname.replace(/[^0-9]/g,"");H(t).then((function(t){var n=Object(w.a)(t),a=n[0],r=n.slice(1);return e.setState({dataAlbum:a,dataTracks:r})}))}},{key:"renderTracks",value:function(){var e=this.state.dataAlbum;return e&&Object(y.jsx)("section",{className:"sectionTracks",children:Object(y.jsxs)("div",{className:"cardAlbum",children:[Object(y.jsx)("h2",{"data-testid":"artist-name",children:e.artistName}),Object(y.jsx)("p",{"data-testid":"album-name",children:"Album: ".concat(e.collectionName,"\n            Artista: ").concat(e.artistName)}),Object(y.jsx)("img",{src:e.artworkUrl100,alt:"Capa de album"})]})})}},{key:"render",value:function(){var e=this.state,t=e.dataTracks,n=e.load,a=e.favoritesMusics;return Object(y.jsxs)("div",{"data-testid":"page-album",children:[n?Object(y.jsx)(W,{}):null,Object(y.jsx)(xe,{musics:t,favorites:a})]})}}]),n}(a.Component),fe=n(34),Oe=n(64),ve="user",ge=function(e){return localStorage.setItem(ve,JSON.stringify(e))},ke=function(e){return function(t){setTimeout((function(){t(e)}),1500)}},ye=function(){return new Promise((function(e){var t=JSON.parse(localStorage.getItem(ve));null===t&&(t={}),ke(t)(e)}))},Se=function(e){return new Promise((function(t){ge(Object(Oe.a)({},e)),ke("OK")(t)}))},Ce=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={loginName:"",load:!0},e.getUserAndRemoveLoad=e.getUserAndRemoveLoad.bind(Object(U.a)(e)),e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.getUserAndRemoveLoad()}},{key:"getUserAndRemoveLoad",value:function(){var e=Object(N.a)(I.a.mark((function e(){var t=this;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ye().then((function(e){var n=e.name;return t.setState({loginName:n,load:!1})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.loginName;return e.load?Object(y.jsx)(W,{}):Object(y.jsxs)("section",{"data-testid":"header-component",children:[Object(y.jsx)(fe.b,{to:"/search","data-testid":"link-to-search",children:"Buscar"}),Object(y.jsx)(fe.b,{to:"/favorites","data-testid":"link-to-favorites",children:"Favoritos"}),Object(y.jsx)(fe.b,{to:"/profile","data-testid":"link-to-profile",children:"Perfil"}),Object(y.jsx)("h2",{children:"Cabe\xe7alho"}),Object(y.jsx)("h2",{"data-testid":"header-user-name",children:t})]})}}]),n}(a.Component),we=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.trackId,n=e.trackName,a=e.previewUrl,r=e.onHandleChange,c=e.isChecked;return Object(y.jsx)("div",{children:Object(y.jsxs)("div",{children:[Object(y.jsx)("p",{children:n}),Object(y.jsxs)("audio",{"data-testid":"audio-component",src:a,controls:!0,children:[Object(y.jsx)("track",{kind:"captions"}),"O seu navegador n\xe3o suporta o elemento",Object(y.jsx)("code",{children:"audio"})]}),Object(y.jsxs)("label",{htmlFor:t,children:["Favorita",Object(y.jsx)("input",{"data-testid":"checkbox-music-".concat(t),type:"checkbox",name:"track",checked:c,id:t,onChange:r})]})]})})}}]),n}(a.Component),Fe=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={load:!1,listFavorites:[]},e.getFavMusics=e.getFavMusics.bind(Object(U.a)(e)),e.removeTrack=e.removeTrack.bind(Object(U.a)(e)),e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.getFavMusics()}},{key:"getFavMusics",value:function(){var e=Object(N.a)(I.a.mark((function e(){var t=this;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({load:!0}),e.next=3,D().then((function(e){return t.setState({listFavorites:e})}));case 3:this.setState({load:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"removeTrack",value:function(){var e=Object(N.a)(I.a.mark((function e(t){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({load:!0}),e.next=3,B(t);case 3:return e.next=5,this.getFavMusics();case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.load,a=t.listFavorites;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(Ce,{}),Object(y.jsxs)("div",{"data-testid":"page-favorites",children:[Object(y.jsx)("h2",{children:"Favoritos"}),n?Object(y.jsx)(W,{}):null,a.map((function(t){return Object(y.jsx)(we,{onHandleChange:function(){return e.removeTrack(t)},isChecked:!0,trackId:t.trackId,trackName:t.trackName,previewUrl:t.previewUrl},t.trackId)}))]})]})}}]),n}(a.Component),Ie=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(y.jsx)("div",{"data-testid":"page-not-found",children:Object(y.jsx)("h2",{children:"Page was not found"})})}}]),n}(a.Component),Ne=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={load:!1,dataUsr:[]},e.fetchUser=e.fetchUser.bind(Object(U.a)(e)),e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.fetchUser()}},{key:"fetchUser",value:function(){var e=Object(N.a)(I.a.mark((function e(){var t=this;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({load:!0}),e.next=3,ye().then((function(e){return t.setState({dataUsr:e})}));case 3:this.setState({load:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.load,n=e.dataUsr;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(Ce,{}),Object(y.jsx)("div",{"data-testid":"page-profile",children:t?Object(y.jsx)(W,{}):Object(y.jsxs)("div",{className:"cardProfile",children:[Object(y.jsx)("img",{src:n.image,alt:"Autorretrato do usu\xe1rio","data-testid":"profile-image"}),Object(y.jsx)("h2",{children:"Nome"}),Object(y.jsx)("p",{children:n.name}),Object(y.jsx)("h2",{children:"Email"}),Object(y.jsx)("p",{children:n.email}),Object(y.jsx)("h2",{children:"Descri\xe7\xe3o"}),Object(y.jsx)("p",{children:n.description}),Object(y.jsx)(fe.b,{to:"/profile/edit",children:"Editar perfil"})]})})]})}}]),n}(a.Component),Ue=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={load:!1,name:"",email:"",description:"",image:"",disable:!1,updated:!1},e.fetchUsr=e.fetchUsr.bind(Object(U.a)(e)),e.onHandleChanger=e.onHandleChanger.bind(Object(U.a)(e)),e.isDisable=e.isDisable.bind(Object(U.a)(e)),e.onHandleClick=e.onHandleClick.bind(Object(U.a)(e)),e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.fetchUsr()}},{key:"onHandleChanger",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(R.a)({},n,a)),this.isDisable()}},{key:"onHandleClick",value:function(){var e=Object(N.a)(I.a.mark((function e(){var t,n,a,r,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,n=t.name,a=t.email,r=t.image,c=t.description,this.setState({load:!0}),e.next=4,Se({name:n,email:a,image:r,description:c});case 4:this.setState({updated:!0});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"isDisable",value:function(){var e=this.state,t=e.name,n=e.email,a=e.description,r=e.image;this.setState({disable:0===t.length||0===n.length||!n.match(/\S+@\S+\.\S+/)||0===a.length||0===r.length})}},{key:"fetchUsr",value:function(){var e=Object(N.a)(I.a.mark((function e(){var t=this;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({load:!0}),e.next=3,ye().then((function(e){var n=e.name,a=e.email,r=e.description,c=e.image;return t.setState({name:n,email:a,description:r,image:c})}));case 3:this.setState({load:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.name,n=e.email,a=e.description,r=e.image,c=e.load,i=e.disable,s=e.updated;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(Ce,{}),Object(y.jsxs)("div",{"data-testid":"page-profile-edit",children:[c?Object(y.jsx)(W,{}):Object(y.jsxs)("div",{className:"form__profile",children:[Object(y.jsx)("h2",{children:"Profile Edit Page"}),Object(y.jsxs)("form",{children:[Object(y.jsxs)("label",{htmlFor:"nameInput",children:["Nome",Object(y.jsx)("input",{id:"nameInput",name:"name",type:"text",value:t,"data-testid":"edit-input-name",onChange:this.onHandleChanger})]}),Object(y.jsxs)("label",{htmlFor:"emailInput",children:["Email",Object(y.jsx)("input",{name:"email",id:"emailInput",type:"email",value:n,onChange:this.onHandleChanger,"data-testid":"edit-input-email"})]}),Object(y.jsxs)("label",{htmlFor:"descriptionInput",children:["Descri\xe7\xe3o",Object(y.jsx)("textarea",{name:"description",id:"descriptionInput",type:"textarea",value:a,onChange:this.onHandleChanger,"data-testid":"edit-input-description"})]}),Object(y.jsxs)("label",{htmlFor:"imageInput",children:["Imagem",Object(y.jsx)("input",{name:"image",id:"imageInput",type:"text",value:r,onChange:this.onHandleChanger,"data-testid":"edit-input-image"})]}),Object(y.jsx)("button",{type:"submit","data-testid":"edit-button-save",disabled:i,onClick:this.onHandleClick,children:"Salvar"})]})]}),s&&Object(y.jsx)(b.a,{to:"/profile",exact:!0})]})]})}}]),n}(a.Component),He=n(148),Ae=n(166),Ee=function(){var e=Object(N.a)(I.a.mark((function e(t){var n,a,r,c,i,s,o;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.replace(/[0-9]/g,"").toLowerCase(),a=encodeURI(n).replaceAll("%20","+"),r="https://itunes.apple.com/search?entity=album&term=".concat(a,"&attribute=artistTerm"),console.log(r),e.next=6,fetch(r);case 6:return c=e.sent,e.next=9,c.json();case 9:return i=e.sent,s=i.results,console.log(s),o=s.map((function(e){return{artistId:e.artistId,artistName:e.artistName,collectionId:e.collectionId,collectionName:e.collectionName,collectionPrice:e.collectionPrice,artworkUrl100:e.artworkUrl100,releaseDate:e.releaseDate,trackCount:e.trackCount}})),e.abrupt("return",o);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Me=n.p+"static/media/backgroundCard.7f0b2161.avif",ze=n.p+"static/media/back3.df554824.avif",Te=n(165);function De(e){var t=e.album,n=Object(b.g)(),a=t.artworkUrl100,r=t.collectionName,c=t.artistName,i=t.collectionId;return Object(y.jsx)(_.a,{sx:{width:150,height:200,backgroundColor:"#021022"},elevation:20,children:Object(y.jsxs)(Te.a,{onClick:function(){return n.push("/album/".concat(i))},children:[Object(y.jsx)(Q.a,{component:"img",height:"110",src:a,alt:r}),Object(y.jsxs)(G.a,{children:[Object(y.jsx)(f.a,{variant:"h2",component:"h2",color:"secondary",sx:{fontSize:{xs:10,sm:10,md:15,lg:15},fontFamily:"Bellaboo",textAlign:{xs:"center"}},children:c}),Object(y.jsx)(f.a,{variant:"h2",component:"h2",sx:{color:"#ffe15b",fontSize:{xs:8,sm:8,md:10,lg:12},fontFamily:"Bellaboo",textAlign:{xs:"center"}},children:r})]})]})})}var Pe={paperContainer:{backgroundImage:"url(".concat(ze,")"),backgroundSize:"cover",backgroundPosition:"center"}},Be={paperContainer:{backgroundImage:"url(".concat(Me,")"),backgroundSize:"cover",backgroundPosition:"center"}},We=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={nameSearched:"",searchInput:"",load:!1,data:[],request:!1},e.onHandleChanger=e.onHandleChanger.bind(Object(U.a)(e)),e.onHandleSearchClick=e.onHandleSearchClick.bind(Object(U.a)(e)),e}return Object(o.a)(n,[{key:"onHandleChanger",value:function(e){this.setState(Object(R.a)({},e.target.name,e.target.value))}},{key:"onHandleSearchClick",value:function(){var e=Object(N.a)(I.a.mark((function e(t){var n,a=this;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.state.searchInput,t.preventDefault(),this.setState({load:!0,nameSearched:n}),e.next=5,Ee(n).then((function(e){return a.setState({data:e})}));case 5:this.setState({load:!1,request:!0,searchInput:""});case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.searchInput,n=e.load,a=e.nameSearched,r=e.request,c=e.data;return Object(y.jsxs)(m.a,{maxWidth:"lg",children:[Object(y.jsx)(x.a,{style:Pe.paperContainer,sx:{width:"100%",height:"50vh"},children:Object(y.jsxs)(Y.a,{container:!0,children:[Object(y.jsx)(Y.a,{item:!0,xs:12,md:6,children:Object(y.jsxs)(x.a,{component:"form",elevation:20,sx:{p:"2px 4px",display:"flex",alignItems:"center",width:{xs:"92%",lg:"55%"},mt:5,ml:{xs:"auto",lg:3},mr:"auto",backgroundColor:"#ffe15be4"},children:[Object(y.jsx)(He.a,{sx:{ml:1,flex:1,color:"#011936d5",fontFamily:"Bellaboo"},placeholder:"Buscar Banda ou Cantor",name:"searchInput",value:t,onChange:this.onHandleChanger}),Object(y.jsx)(O.a,{type:"submit",sx:{p:"10px"},"aria-label":"search",onClick:this.onHandleSearchClick,children:Object(y.jsx)(se.a,{})}),Object(y.jsx)(Ae.a,{sx:{height:28,m:.5},orientation:"vertical"})]})}),Object(y.jsxs)(Y.a,{item:!0,xs:12,md:6,children:[Object(y.jsx)(f.a,{variant:"h2",component:"h2",color:"secondary",sx:{fontSize:{xs:100,sm:80,md:120,lg:150},fontFamily:"WildFont",mt:-2,mr:{md:2},ml:{md:2},textAlign:{xs:"center",md:"right"}},children:"TRYBETUNES"}),Object(y.jsx)(f.a,{variant:"h2",component:"h2",sx:{fontSize:{xs:10,sm:10,md:15,lg:20},fontFamily:"Sinkin",mt:{xs:-1,sm:2,md:-2},mr:{md:2},ml:{md:2},color:"#7692ff",textAlign:{xs:"center",md:"right"}},children:"shinvk.github.io/trybetunes"})]})]})}),Object(y.jsx)(x.a,{sx:{backgroundColor:"#021022"},elevation:15,children:Object(y.jsx)(f.a,{variant:"h2",component:"h2",sx:{color:"#ffe15b",fontSize:{xs:30,sm:40,md:50,lg:60},fontFamily:"Bellaboo",mt:-2,pt:5,pb:5,mr:{md:2},ml:{md:2},textAlign:{xs:"center",md:"left"}},children:"Resultados"})}),n?Object(y.jsx)(W,{}):Object(y.jsx)(f.a,{variant:"h2",component:"h2",sx:{color:"#021022",fontSize:{xs:25,sm:25,md:30,lg:40},fontFamily:"Bellaboo",mt:-2,pt:5,pb:5,mr:{md:2},ml:{md:2},textAlign:{xs:"center",md:"left"}},children:"\xc1lbuns encontrados: ".concat(a)}),Object(y.jsx)(x.a,{style:Be.paperContainer,sx:{width:"100%",minHeight:"50vh"},elevation:24,children:Object(y.jsx)(Y.a,{container:!0,children:r&&c.map((function(e,t){return Object(y.jsx)(Y.a,{item:!0,xs:6,md:4,lg:2.4,sx:{mt:5},children:Object(y.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(y.jsx)(De,{album:e})})},t)}))})})]})}}]),n}(a.Component);function Je(){return Object(y.jsxs)(b.d,{children:[Object(y.jsx)(b.b,{path:"/search",exact:!0,component:We}),Object(y.jsx)(b.b,{path:"/album/:id",component:pe}),Object(y.jsx)(b.b,{path:"/favorites",component:Fe}),Object(y.jsx)(b.b,{path:"/profile",exact:!0,component:Ne}),Object(y.jsx)(b.b,{path:"/profile/edit",exact:!0,component:Ue}),Object(y.jsx)(b.b,{path:"/",exact:!0,component:C}),Object(y.jsx)(b.b,{path:"*",component:Ie})]})}var Re=Object(u.a)({typography:["Sinkin","JustSimple","WildFont","Bellaboo"].join(","),palette:{primary:{main:"#EDE6E3"},secondary:{main:"#FF3E3E"},background:{default:"#fee46a"}}}),Le=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(y.jsxs)(h.a,{theme:Re,children:[Object(y.jsx)(j.a,{}),Object(y.jsx)(Je,{})]})}}]),n}(r.a.Component);i.a.render(Object(y.jsx)(fe.a,{basename:"/trybetunes",children:Object(y.jsx)(Le,{})}),document.getElementById("root"))}},[[114,1,2]]]);
//# sourceMappingURL=main.4e5346d6.chunk.js.map