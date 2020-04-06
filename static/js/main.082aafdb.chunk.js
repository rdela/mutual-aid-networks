(this["webpackJsonpmutual-aid-networks"]=this["webpackJsonpmutual-aid-networks"]||[]).push([[0],{256:function(e,t,n){e.exports=n(469)},336:function(e,t,n){},337:function(e,t,n){},338:function(e,t,n){},339:function(e,t,n){},341:function(e,t,n){},357:function(e,t,n){},393:function(e,t,n){},416:function(e,t,n){},435:function(e,t,n){},443:function(e,t,n){},468:function(e,t,n){},469:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"requestNetworks",(function(){return T})),n.d(a,"setPageOfNetworks",(function(){return P}));var r={};n.r(r),n.d(r,"getSelectedCategories",(function(){return q})),n.d(r,"getSearchLocation",(function(){return A})),n.d(r,"getHoveredPointId",(function(){return B})),n.d(r,"getUsState",(function(){return H})),n.d(r,"getViewState",(function(){return V}));var o={};n.r(o),n.d(o,"getAllNetworks",(function(){return M})),n.d(o,"getFilteredNetworks",(function(){return z})),n.d(o,"getNetworksInArea",(function(){return U})),n.d(o,"getVisibleCards",(function(){return W})),n.d(o,"getBoundingBox",(function(){return G}));var s={};n.r(s),n.d(s,"setCategoryFilters",(function(){return ne})),n.d(s,"setLatLng",(function(){return ae})),n.d(s,"setHoveredPoint",(function(){return re})),n.d(s,"setUsState",(function(){return oe})),n.d(s,"resetToDefaultView",(function(){return se}));var i=n(35),l=n(36),c=n(43),u=n(41),d=n(44),m=n(0),p=n.n(m),f=n(151),h=n(9),g=n.n(h);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(265);var b=n(46),v=n(102),k=n(479),y=n(228),w=n.n(y),E=n(30),O=function(e,t){return"".concat(e,"-").concat(t)},C=O("EVENTS","REQUEST_NETWORKS"),S=O("EVENTS","SET_NETWORKS"),N=O("EVENTS","REQUEST_FAILED"),j=O("EVENTS","SET_PAGE_OF_NETWORKS"),L={allNetworks:[]},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case S:return Object(E.a)({},e,{allNetworks:a,error:null});case j:return Object(E.a)({},e,{allNetworks:[].concat(Object(b.a)(e.allNetworks),Object(b.a)(a)),error:null});case N:return console.log("REQUEST_FAILED: ".concat(a)),Object(E.a)({},e,{error:a});default:return e}},T=function(){return{type:C}},P=function(e){return{type:j,payload:e}},x=n(84),I=n(29),_=n(186),R=n(481),q=function(e){return e.selections.categories},A=function(e){return e.selections.searchLocation},B=function(e){return e.selections.hoveredPointId},H=function(e){return e.selections.usState},V=Object(x.a)([A,H],(function(e,t){return e.lat||t?"list":"default"})),D=window.mapboxgl,M=function(e){return e.networks.allNetworks},z=Object(x.a)([M,q],(function(e,t){return t.length?Object(I.filter)(e,(function(e){return t.includes(e.category)})):[]})),U=Object(x.a)([M,A,H],(function(e,t,n){if(!t.lat&&!n)return[];if(!t.lat)return e.filter((function(e){return e.state&&e.state===n}));var a=new _.b(Number(t.lat),Number(t.lng));return e.filter((function(e){return!(!e.state||e.city||e.state!==n)||Object(R.a)(a,new _.b(Number(e.lat),Number(e.lng)))<80467})).sort((function(e,t){return Object(R.a)(a,new _.b(Number(e.lat),Number(e.lng)))-Object(R.a)(a,new _.b(Number(t.lat),Number(t.lng)))}))})),W=Object(x.a)([U,q],(function(e,t){return t.length?Object(I.filter)(e,(function(e){return t.includes(e.category)})):[]})),G=Object(x.a)([U],(function(e){return e.length?e.reduce((function(e,t,n){return n>0&&(e=e.extend(new D.LngLatBounds(t.bbox))),e}),new D.LngLatBounds(e[0].bbox)):null})),K=n(478),Z={actions:a,logics:[Object(K.a)({type:C,process:function(e,t,n){var a=e.httpClient,r=e.firebaseUrl;!function e(o){return a.get(o).then((function(a){var o=function(e){return e.body.documents.reduce((function(e,t){var n=t.fields,a=Object(I.mapValues)(n,(function(e){var t=Object(I.values)(e)[0];return e.integerValue&&(t=Number(t)),t.values&&(t=Object(I.map)(t.values,(function(e){return Object(I.values)(e)[0]}))),t}));return Number(a.id)&&e.push(a),e}),[])}(a);if(t(P(o)),a.body.nextPageToken){var s="".concat(r,"/?pageToken=").concat(a.body.nextPageToken);return e(s)}n()}))}(r)}})],reducers:F,selectors:o},Q=O("SELECTIONS","FILTER_BY_CATEGORY"),Y=O("SELECTIONS","SET_LAT_LNG"),J=O("SELECTIONS","SET_HOVERED_POINT"),X=O("SELECTIONS","SET_US_STATE"),$=O("SELECTIONS","RESET_TO_DEFAULTS"),ee=["General","Request Support","Offer Support","Community"],te={view:"default",categories:ee,language:"",community:"",searchLocation:{},hoveredPointId:null,usState:""},ne=function(e){return{type:Q,payload:e}},ae=function(e){return{type:Y,payload:e}},re=function(e){return{type:J,payload:e}},oe=function(e){return{type:X,payload:e}},se=function(){return{type:$}},ie={actions:s,logics:[],reducers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q:return Object(E.a)({},e,{categories:t.payload});case Y:return Object(E.a)({},e,{searchLocation:t.payload.center,usState:t.payload.usState});case $:return Object(E.a)({},e,{searchLocation:{},usState:""});case J:return Object(E.a)({},e,{hoveredPointId:t.payload});default:return e}},selectors:r},le={networks:Z.reducers,selections:ie.reducers},ce=[].concat(Object(b.a)(Z.logics),Object(b.a)(ie.logics)),ue={firebaseUrl:"https://firestore.googleapis.com/v1/projects/townhallproject-86312/databases/(default)/documents/mutual_aid_networks",httpClient:w.a},de=Object(k.a)(ce,ue),me=Object(v.a)(de);n(302);var pe=n(39),fe=(n(305),n(122)),he=n(37),ge=n(229),be=n.n(ge),ve=n(1),ke=n.n(ve),ye="networks-dots",we="pk.eyJ1IjoidG93bmhhbGxwcm9qZWN0IiwiYSI6ImNrN3d1c3hhdDA1MmozbW80cW5oOWxzcHoifQ.rq66iVpULeHVB6PutWiunA",Ee="mapbox://styles/townhallproject/ck87rw1kt1g821is46uvwm08k",Oe=window.mapboxgl,Ce=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).addClickListener=n.addClickListener.bind(Object(he.a)(n)),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.initializeMap()}},{key:"setFilters",value:function(){var e=this.props.selectedCategories;if(this.map.getLayer(ye)){var t=["any"].concat(Object(b.a)(e.map((function(e){return["==",["get","category"],e]}))));this.map.setFilter(ye,t)}}},{key:"componentDidUpdate",value:function(e){var t=this.props.selectedCategories;Object(I.isEqual)(t,e.selectedCategories)||this.setFilters()}},{key:"addClickListener",value:function(){var e=this,t=this.props,n=t.bounds,a=t.setBounds;this.map.on("click",(function(){a(n,e.props.stateName)}))}},{key:"initializeMap",value:function(){var e=this,t=this.props,n=t.bounds,a=t.mapId;Oe.accessToken=we,this.map=new Oe.Map({container:a,doubleClickZoom:!1,dragPan:!1,scrollZoom:!1,style:Ee}),this.map.fitBounds(n,{easeTo:{duration:0},linear:!0}),this.map.on("load",(function(){e.addClickListener(),e.map.setLayoutProperty(ye,"visibility","visible")}))}},{key:"render",value:function(){var e=this.props,t=e.viewState,n=e.mapId,a=ke()({hidden:"list"===t,inset:!0});return p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{id:n,className:a,"data-bounds":this.props.bounds}))}}]),t}(p.a.Component);Ce.defaultProps={selectedState:""};var Se=Ce,Ne=(n(336),n(337),n(338),n(339),window.mapboxgl),je=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).filterDistrict=["any"],n.includedStates=["in","NAME"],n.addPopups=n.addPopups.bind(Object(he.a)(n)),n.addClickListener=n.addClickListener.bind(Object(he.a)(n)),n.setFilters=n.setFilters.bind(Object(he.a)(n)),n.handleReset=n.handleReset.bind(Object(he.a)(n)),n.insetOnClickEvent=n.insetOnClickEvent.bind(Object(he.a)(n)),n.handleClickOnInset=n.handleClickOnInset.bind(Object(he.a)(n)),n.initializeMap=n.initializeMap.bind(Object(he.a)(n)),n.state={popoverColor:"popover-general-icon",bbox:null},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.initializeMap()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.hoveredPointId,a=t.viewState,r=t.bbox,o=t.selectedCategories;this.map.resize(),Object(I.isEqual)(o,e.selectedCategories)||this.setFilters(),e.viewState!==a&&(this.hoveredPopup.remove(),"default"===a&&this.setInitialState()),this.state.bbox&&"list"===a&&(this.fitBounds(this.state.bbox),this.setState({bbox:null})),r&&"list"===a&&r!==e.bbox&&this.fitBounds(r),n&&this.hoverPoint(n),e.hoveredPointId&&e.hoveredPointId!==n&&this.unHoverPoint(e.hoveredPointId)}},{key:"insetOnClickEvent",value:function(e){this.setState({inset:!1});var t=e.target.parentNode.parentNode.getAttribute("data-bounds").split(","),n=[Number(t[0]),Number(t[1])],a=[Number(t[2]),Number(t[3])],r=n.concat(a);this.fitBounds(r)}},{key:"fitBounds",value:function(e){this.map.fitBounds(e,{padding:{top:10,bottom:25,left:15,right:5},maxZoom:8})}},{key:"addPopups",value:function(e){var t=this,n=this.map;this.hoveredPopup=new Ne.Popup({closeButton:!0,closeOnClick:!0}),n.on("mousemove",(function(a){if(t.map.getLayer(ye)){var r=n.queryRenderedFeatures(a.point,{layers:[e]});if(n.getCanvas().style.cursor=r.length?"pointer":"",r.length){var o,s=r[0],i=s.properties,l="popover-".concat(s.properties.category.split(" ").join("-").toLowerCase());t.setState({popoverColor:l}),t.props.setHoveredPoint(s.id),o=i.generalForm?'<a rel="noopener noreferrer" target="_blank" href='.concat(i.generalForm,">Link to form</a>"):i.supportOfferForm&&i.supportRequestForm?'<a rel="noopener noreferrer" class="side-by-side" target="_blank" href='.concat(i.supportOfferForm,'>Offer support</a><a class="side-by-side" target="_blank" href=').concat(i.supportRequestForm,">Request support</a>"):i.supportOfferForm?'<a rel="noopener noreferrer" href='.concat(i.supportOfferForm,">Offer support</a>"):i.supportRequestForm?'<a rel="noopener noreferrer" href='.concat(i.supportRequestForm,">Request support</a>"):'<a rel="noopener noreferrer" href='.concat(i.facebookPage,">Link to group</a>");var c=i.city?"".concat(i.city,", ").concat(i.state):i.state;return t.hoveredPopup.setLngLat(s.geometry.coordinates).setHTML("\n            <h4>".concat(i.title,"</h4>\n            <div>").concat(c,"</div>\n            <div>").concat(o,"</div>")).addTo(n)}}}))}},{key:"addClickListener",value:function(){var e=this.map,t=this.props.setLatLng;e.getLayer(ye)&&e.on("click",(function(n){var a=e.queryRenderedFeatures(n.point,{layers:[ye]});a.length>0&&t({center:{lat:a[0].properties.lat,lng:a[0].properties.lng},usState:a[0].properties.state})}))}},{key:"hoverPoint",value:function(e){this.map.getLayer(ye)&&this.map.setFeatureState({source:"composite",sourceLayer:"mutual_aid_networks",id:e},{hover:!0})}},{key:"unHoverPoint",value:function(e){this.map.getLayer(ye)&&this.map.setFeatureState({source:"composite",sourceLayer:"mutual_aid_networks",id:e},{hover:!1})}},{key:"handleReset",value:function(){(0,this.props.resetToDefaultView)()}},{key:"setInitialState",value:function(){this.fitBounds([[-128.8,23.6],[-65.4,50.2]]),document.getElementsByClassName("mapboxgl-ctrl-geocoder--input"),Array.from(document.getElementsByClassName("mapboxgl-ctrl-geocoder--input")).forEach((function(e){e.value=""})),this.map.resize()}},{key:"handleClickOnInset",value:function(e,t){this.setState({bbox:e}),this.props.setLatLng({center:{},usState:t})}},{key:"makeZoomToNationalButton",value:function(){document.querySelector(".mapboxgl-ctrl-compass").remove(),document.querySelector(".mapboxgl-ctrl-usa")&&document.querySelector(".mapboxgl-ctrl-usa").remove();var e=document.createElement("button");e.className="mapboxgl-ctrl-icon mapboxgl-ctrl-usa",e.innerHTML='<span class="usa-icon"></span>',e.addEventListener("click",this.handleReset),document.querySelector(".mapboxgl-ctrl-group").appendChild(e)}},{key:"setFilters",value:function(){var e=this.props.selectedCategories;if(this.map.getLayer(ye)){var t=["any"].concat(Object(b.a)(e.map((function(e){return["==",["get","category"],e]}))));this.map.setFilter(ye,t)}}},{key:"initializeMap",value:function(){var e=this,t=this.props,n=t.setLatLng,a=t.resetToDefaultView;Ne.accessToken=we,this.map=new Ne.Map({container:"map",style:Ee}),this.map.addControl(new Ne.NavigationControl),this.map.scrollZoom.disable(),this.map.dragRotate.disable(),this.map.touchZoomRotate.disableRotation(),this.makeZoomToNationalButton();var r=this.map;this.map.addControl(new be.a({accessToken:Ne.accessToken,mapboxgl:Ne,countries:"us",marker:!1,zoom:12,flyTo:!1}).on("clear",(function(e){a()})).on("result",(function(e){r.resize();if("region"===e.result.place_type[0]){console.log(e.result);var t=e.result.properties.short_code.split("-")[1];return n({center:{},usState:t})}n({center:{lat:e.result.center[1],lng:e.result.center[0]},usState:""})})),"top-left"),this.fitBounds([[-128.8,23.6],[-65.4,50.2]]),this.map.on("load",(function(){e.addClickListener(),e.map.setPaintProperty(ye,"circle-opacity",["case",["boolean",["feature-state","hover"],!1],1,.5]),e.map.setLayoutProperty(ye,"visibility","visible"),e.addPopups(ye)}))}},{key:"render",value:function(){var e=this.props,t=e.center,n=e.resetSelections,a=e.setLatLng,r=e.viewState,o=e.networks,s=e.selectedCategories;return p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{id:"map",className:this.state.popoverColor},p.a.createElement("div",{className:"map-overlay",id:"legend"},p.a.createElement(Se,{networks:Object(I.filter)(o,{state:"AK"}),center:t,stateName:"AK",viewState:r,resetSelections:n,selectedCategories:s,setLatLng:a,setBounds:this.handleClickOnInset,mapId:"map-overlay-alaska",bounds:[[-170.15625,51.72702815704774],[-127.61718749999999,71.85622888185527]]})," ",p.a.createElement(Se,{networks:Object(I.filter)(o,{state:"HI"}),stateName:"HI",center:t,viewState:r,resetSelections:n,selectedCategories:s,setLatLng:a,setBounds:this.handleClickOnInset,mapId:"map-overlay-hawaii",bounds:[[-161.03759765625,18.542116654448996],[-154.22607421875,22.573438264572406]]})," ")," "))}}]),t}(p.a.Component);je.defaultProps={};var Le=je,Fe=(n(131),n(25)),Te=(n(341),function(){return p.a.createElement("div",{className:"start-network-container"},p.a.createElement(Fe.a,{id:"start-network-button",target:"_blank",href:"https://docs.google.com/forms/d/e/1FAIpQLScuqQtCdKsDzvTzaA2PMyVHX7xcOqbOW7N7l_0YJASV4wMBVQ/viewform"},"Submit a Mutual Aid Network"))}),Pe=(n(213),n(55)),xe=(n(357),Pe.a.Group),Ie=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={indeterminate:!1,checkAll:!0},n.onChange=function(e){n.props.setFilters(e),n.setState({indeterminate:!!e.length&&e.length<ee.length,checkAll:e.length===ee.length})},n.onCheckAllChange=function(e){var t=e.target.checked?ee:[];n.setState({indeterminate:!1,checkAll:e.target.checked}),n.props.setFilters(t)},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.props.visible?p.a.createElement("div",{className:ke()("filter-container",{"absolute-pos":this.props.absolute})},p.a.createElement("div",{className:"site-checkbox-all-wrapper"},p.a.createElement(Pe.a,{indeterminate:this.state.indeterminate,onChange:this.onCheckAllChange,checked:this.state.checkAll},"Select all")),p.a.createElement("br",null),p.a.createElement(xe,{value:this.props.selectedCategories,onChange:this.onChange},ee.map((function(e){return p.a.createElement(Pe.a,{key:e.replace(" ","-").toLowerCase(),className:e.replace(" ","-").toLowerCase(),value:e},e)})))):null}}]),t}(p.a.Component),_e=(n(387),n(250)),Re=n(482),qe=(n(471),n(249)),Ae=(n(220),n(67)),Be=(n(393),function(e){return p.a.createElement(p.a.Fragment,null,e.networks.map((function(t){var n=t.address,a=t.title,r=t.neighborhood,o=t.facebookPage,s=t.category,i=t.community,l=t.language,c=t.generalForm,u=t.supportRequestForm,d=t.supportOfferForm,m=t.id;return p.a.createElement(qe.a,{className:"network-card",title:a,key:m,onMouseEnter:function(){return e.setHoveredPoint(m)},onMouseLeave:function(){return e.setHoveredPoint(null)},extra:p.a.createElement("ul",{className:"list-inline"},s&&p.a.createElement("li",{className:"text-".concat(s.split(" ").join("-").toLowerCase())},s),i&&p.a.createElement("li",null,i))},p.a.createElement("ul",{className:"list-inline"},r&&p.a.createElement("li",null,r),n&&p.a.createElement("li",null,n),l&&p.a.createElement("li",null,l)),p.a.createElement(Ae.a,{justify:"space-between"},c&&p.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:"button"},"Offer or request help"),u&&p.a.createElement("a",{href:u,rel:"noopener noreferrer",target:"_blank",className:"button"},"Request help"),d&&p.a.createElement("a",{href:d,rel:"noopener noreferrer",target:"_blank",className:"button"},"Offer help"),o&&p.a.createElement("a",{href:o,rel:"noopener noreferrer",target:"_blank",className:"button"},"Join social media")))})))}),He=(n(416),_e.a.Title),Ve=function(){return p.a.createElement("div",{className:"no-network-section"},p.a.createElement(He,{level:3},p.a.createElement(Re.a,null)),p.a.createElement(He,{level:3},"There are no support requests or networks nearby."))},De=function(e){var t=e.visibleCards,n=e.setHoveredPoint,a=e.setFilters,r=e.selectedCategories;return p.a.createElement("div",{className:"list-container"},t.length?p.a.createElement(p.a.Fragment,null,p.a.createElement(Ie,{setFilters:a,absolute:!1,selectedCategories:r,visible:!0}),p.a.createElement(Be,{setHoveredPoint:n,networks:t})):p.a.createElement(Ve,null))},Me=(n(435),function(){return p.a.createElement("div",{class:"webGl-warning",target:"_blank"},p.a.createElement("p",null,"Our interactive map feature uses WebGL, a plugin common in most modern browsers. Your browser does not have WebGL working currently."),p.a.createElement("p",null,"You can learn how to enable WebGL on",p.a.createElement("a",{rel:"noopener noreferrer",href:"https://get.webgl.org/",target:"_blank"}," this website.")))}),ze=(n(470),n(248)),Ue=(n(219),n(251)),We=n(252),Ge=n(480),Ke=(n(443),function(e){var t=Object(m.useState)(""),n=Object(We.a)(t,2),a=n[0],r=n[1],o=e.networks,s=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return{filterDropdown:function(n){var a=n.setSelectedKeys,r=n.selectedKeys,o=n.confirm,s=n.clearFilters;return p.a.createElement("div",{style:{padding:8}},p.a.createElement(Ue.a,{placeholder:"Search ".concat(t),value:r[0],onChange:function(e){return a(e.target.value?[e.target.value]:[])},onPressEnter:function(){return i(o,e)},style:{width:188,marginBottom:8,display:"block"}}),p.a.createElement(Fe.a,{type:"primary",onClick:function(){return i(o,e)},icon:p.a.createElement(Ge.a,null),size:"small",style:{width:90,marginRight:8}},"Search"),p.a.createElement(Fe.a,{onClick:s,size:"small",style:{width:90}},"Reset"))},filterIcon:function(e){return p.a.createElement(Ge.a,{style:{color:e?"#1890ff":void 0}})},onFilter:function(t,a){return n?a[e].toLowerCase().includes(t.toLowerCase())||a[n].toLowerCase().includes(t.toLowerCase()):a[e].toLowerCase().includes(t.toLowerCase())},render:function(t){return a===e&&t}}},i=function(e,t){e(),r(t)},l=[Object(E.a)({title:"Organization",width:"30vw",dataIndex:"title",key:"title",sorter:function(e,t){return e.title.localeCompare(t.title)}},s("title","organizations"),{render:function(e){return e}}),Object(E.a)({title:"City",width:"20vw",dataIndex:"city",key:"city",sorter:function(e,t){return e.city.localeCompare(t.city)}},s("city","cities"),{render:function(e){return e}}),Object(E.a)({title:"State",width:"10vw",dataIndex:"state",key:"state",sorter:function(e,t){return e.state.localeCompare(t.state)},defaultSortOrder:"ascend"},s("state","states"),{render:function(e){return e}}),Object(E.a)({title:"Languages",width:"20vw",dataIndex:"language",key:"language",sorter:function(e,t){return e.language.localeCompare(t.language)}},s("language","languages"),{render:function(e){return e}}),{title:"Get Involved",width:"20vw",filters:[{text:"General",value:"generalForm"},{text:"Offer Support",value:"supportOfferForm"},{text:"Request Support",value:"supportRequestForm"},{text:"Community",value:"facebookPage"}],dataIndex:"forms",onFilter:function(e,t){return t[e]},key:"forms",render:function(e,t){return p.a.createElement("ul",{key:"resources",className:"resources"},t.generalForm&&p.a.createElement("li",{key:"".concat(t.generalForm,"-general"),className:"form-link"},p.a.createElement(Fe.a,{ghost:!0,href:t.generalForm,target:"blank",className:"general"},"General")),t.supportOfferForm&&p.a.createElement("li",{key:"".concat(t.supportOfferForm,"-offer"),className:"form-link"},p.a.createElement(Fe.a,{ghost:!0,href:t.supportOfferForm,target:"blank",className:"offer"},"Offer Support")),t.supportRequestForm&&p.a.createElement("li",{key:"".concat(t.supportRequestForm,"-request"),className:"form-link"},p.a.createElement(Fe.a,{ghost:!0,href:t.supportRequestForm,target:"blank",className:"request"},"Request Support")),t.facebookPage&&p.a.createElement("li",{key:"".concat(t.facebookPage,"-facebook"),className:"form-link"},p.a.createElement(Fe.a,{ghost:!0,href:t.facebookPage,target:"blank",className:"other"},"Community")))}}];return p.a.createElement(p.a.Fragment,null,p.a.createElement(ze.a,{rowKey:function(e){return e.id},columns:l,dataSource:o,pagination:{pageSize:20,hideOnSinglePage:!0}}))}),Ze=fe.a.Header,Qe=fe.a.Content,Ye=fe.a.Footer,Je=window.mapboxgl,Xe=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleNav=function(e){var t=n.props.resetToDefaultView;n.setState({currentTab:e.key}),t()},n.handleLogoClick=function(){var e=n.props.resetToDefaultView;n.setState({currentTab:"map"}),e()},n.state={currentTab:"map"},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.requestNetworks)()}},{key:"render",value:function(){var e=this.props,t=e.setFilters,n=e.selectedCategories,a=e.filteredNetworks,r=e.viewState,o=e.setLatLng,s=e.setUsState,i=e.visibleCards,l=e.allNetworks,c=e.setHoveredPoint,u=e.hoveredPointId,d=e.masterBbox,m=e.resetToDefaultView;return l.length?p.a.createElement(fe.a,{className:"layout"},p.a.createElement(Ze,null,p.a.createElement("div",{className:"logo",onClick:this.handleLogoClick}),p.a.createElement(pe.a,{theme:"dark",mode:"horizontal",style:{lineHeight:"64px"},onClick:this.handleNav,selectedKeys:[this.state.currentTab]},p.a.createElement(pe.a.Item,{key:"map"},"Map"),p.a.createElement(pe.a.Item,{key:"networks"},"Table View"))),p.a.createElement(Qe,{style:{padding:"0 50px"}},p.a.createElement("div",{className:"main-container"},"map"===this.state.currentTab&&p.a.createElement(p.a.Fragment,null,Je.supported()?p.a.createElement(p.a.Fragment,null,p.a.createElement(Ie,{setFilters:t,selectedCategories:n,absolute:!0,visible:"default"===r}),p.a.createElement("div",{className:"interactive-content-".concat(r)},p.a.createElement(Le,{networks:a,viewState:r,setLatLng:o,selectedCategories:n,resetToDefaultView:m,hoveredPointId:u,setHoveredPoint:c,bbox:d,setUsState:s}),p.a.createElement(De,{visibleCards:i,setHoveredPoint:c,setFilters:t,selectedCategories:n}))):p.a.createElement(Me,null),p.a.createElement("div",{className:"tagline"},"Find Mutual Aid Networks and other community self-support projects near you. Reach out to these groups directly via the map above to get involved, offer resources, or submit needs requests."),p.a.createElement(Te,null)),"networks"===this.state.currentTab&&p.a.createElement(Ke,{networks:l}))),p.a.createElement(Ye,{style:{textAlign:"center"}},p.a.createElement("div",{className:"footer-text"},p.a.createElement("p",null,"We list these networks as a public resource. We cannot verify or vouch for any network or individual offerings. Please exercise all necessary judgement when interacting with community members not previously known to you."),p.a.createElement("p",null,"This data set is made available under the ",p.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"http://www.opendatacommons.org/licenses/pddl/1.0/"},"Public Domain Dedication and License v1.0"),"."),p.a.createElement("p",null,"This website is brought to you by ",p.a.createElement("a",{href:"https://townhallproject.com/",rel:"noopener noreferrer",target:"_blank"},"Town Hall Project"),". To report an error or other issue, please contact: ",p.a.createElement("a",{href:"mailto:info@townhallproject.com"},"info@townhallproject.com"))))):null}}]),t}(p.a.Component),$e=Object(f.b)((function(e){return{filteredNetworks:Z.selectors.getFilteredNetworks(e),selectedCategories:ie.selectors.getSelectedCategories(e),viewState:ie.selectors.getViewState(e),searchLocation:ie.selectors.getSearchLocation(e),visibleCards:Z.selectors.getVisibleCards(e),allNetworks:Z.selectors.getAllNetworks(e),hoveredPointId:ie.selectors.getHoveredPointId(e),masterBbox:Z.selectors.getBoundingBox(e)}}),(function(e){return{requestNetworks:function(){return e(Z.actions.requestNetworks())},setFilters:function(t){return e(ie.actions.setCategoryFilters(t))},setLatLng:function(t){return e(ie.actions.setLatLng(t))},setHoveredPoint:function(t){return e(ie.actions.setHoveredPoint(t))},setUsState:function(t){return e(ie.actions.setUsState(t))},resetToDefaultView:function(){return e(ie.actions.resetToDefaultView())}}}))(Xe),et=(n(468),Object(v.d)(Object(v.c)(le),me)),tt=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return p.a.createElement(f.a,{store:et},p.a.createElement($e,null))}}]),t}(m.Component);g.a.render(p.a.createElement(tt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[256,1,2]]]);
//# sourceMappingURL=main.082aafdb.chunk.js.map