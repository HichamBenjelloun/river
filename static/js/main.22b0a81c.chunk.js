(this.webpackJsonpriver=this.webpackJsonpriver||[]).push([[0],{70:function(e,t,n){e.exports=n(82)},75:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(11),o=n.n(r),s=(n(75),n(8)),l=n(10),c=n(13),u=n(12),h=n(63),d=n(53),v=n.n(d),f=n(54),y=n.n(f),m=n(33),E=n.n(m),g=E()({SERVER_ACTION:null,VIEW_ACTION:null}),O=new(function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"handleServerAction",value:function(e){this.dispatch({source:g.SERVER_ACTION,action:e})}},{key:"handleViewAction",value:function(e){this.dispatch({source:g.VIEW_ACTION,action:e})}}]),n}(y.a.Dispatcher)),_=function(){function e(t){Object(s.a)(this,e),this._source=t,this._emitter=new v.a,this.handle?this._dispatchToken=O.register(this.handle.bind(this)):console.error("(MethodNotImplemented) Class "+this.constructor.name+"does not implement method `handle()` and can't handle actions.")}return Object(l.a)(e,[{key:"addChangeListener",value:function(t){this._emitter.on(e.CHANGE_EVENT,t)}},{key:"removeChangeListener",value:function(e){this._emitter.removeListener(e)}},{key:"emitChange",value:function(){this._emitter.emit(e.CHANGE_EVENT)}},{key:"source",get:function(){return this._source}}]),e}();_.CHANGE_EVENT="change";var p=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e,a){var i;return Object(s.a)(this,n),(i=t.call(this,e))._model=a,i._items=new Map,i._isLoading=!1,i}return Object(l.a)(n,[{key:"requestData",value:function(){this.setIsLoading(!0),this.source.fetch()}},{key:"setIsLoading",value:function(e){this._isLoading=e}},{key:"isLoading",value:function(){return this._isLoading}},{key:"addItem",value:function(e){this._items.set(e.getValue("id"),e)}},{key:"getItem",value:function(e){return this._items.get(e)}},{key:"store",value:function(e){var t,n=Object(h.a)(e);try{for(n.s();!(t=n.n()).done;){var a=t.value;this.addItem(new this._model(a))}}catch(i){n.e(i)}finally{n.f()}}},{key:"removeItem",value:function(e){this._items.delete(e)}},{key:"getAll",value:function(){return this._items}}]),n}(_),k=E()({TODO_RECEIVE_DATA:null,TODO_CREATE:null,TODO_DESTROY:null,TODO_TOGGLE:null}),b=function(){function e(t){Object(s.a)(this,e),this._values=t,this._fields={},this.setFields()}return Object(l.a)(e,[{key:"setField",value:function(e,t){this._fields[e]=t}},{key:"setFields",value:function(){if(this.fields)for(var e=this.fields(),t=0,n=Object.keys(e);t<n.length;t++){var a=n[t];this.setField(a,e[a])}else console.error("(MethodNotImplemented) Class "+this.constructor.name+"should implement method `fields()`")}},{key:"setValue",value:function(e,t){this._values[e]=t,this.setFields()}},{key:"getValue",value:function(e){return this._values[e]}},{key:"hasErrors",value:function(){for(var e=0,t=Object.keys(this._fields);e<t.length;e++){var n=t[e];if(this._fields[n].hasErrors())return!0}return!1}},{key:"getErrors",value:function(){for(var e={},t=0,n=Object.keys(this._fields);t<n.length;t++){var a=n[t];this._fields[a].hasErrors()&&(e[a]=this._fields[a].getErrors())}return e}},{key:"values",get:function(){return this._values}}]),e}(),j=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};Object(s.a)(this,e),this._value=t,this._options=n,this._options[e.TYPE]=this.constructor.name,this._validators=a,this._validators[e.TYPE]=this.hasTypeError.bind(this),this._validators[e.REQUIRED]=this.hasRequiredError.bind(this),this.setValidators&&this.setValidators()}return Object(l.a)(e,[{key:"setValidator",value:function(e,t){this._validators[e]=t.bind(this)}},{key:"hasRequiredError",value:function(){return!!this._options[e.REQUIRED]&&(void 0===this.value||0===this.value.length)}},{key:"hasError",value:function(e){return!!this.hasTypeError()||(!this._options[e]||this._validators[e]())}},{key:"hasErrors",value:function(){for(var e=0,t=Object.keys(this._options);e<t.length;e++){var n=t[e];if(this.hasError(n))return!0}return!1}},{key:"getErrors",value:function(){for(var e=[],t=0,n=Object.keys(this._options);t<n.length;t++){var a=n[t];this._validators[a]()&&e.push(a)}return e}},{key:"value",get:function(){return this._value}},{key:"options",get:function(){return this._options}}]),e}();j.TYPE="type",j.REQUIRED="required";var T=j,C=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"setValidators",value:function(){this.setValidator(n.MAX_LENGTH,this.hasMaxLengthError)}},{key:"hasTypeError",value:function(){return!1}},{key:"hasMaxLengthError",value:function(){return this.value.length>this.options[n.MAX_LENGTH]}}]),n}(T);C.MAX_LENGTH="max_length";var w=C,D=n(55),A=n.n(D),V=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"hasTypeError",value:function(){return!A.a.isBoolean(this.value)}}]),n}(T),I=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"fields",value:function(){return{text:new w(this.values.text,{required:!0,max_length:50}),done:new V(this.values.done,{required:!0})}}}]),n}(b),x=function(e){O.handleServerAction({actionType:k.TODO_RECEIVE_DATA,data:e})},L=function(e){O.handleViewAction({actionType:k.TODO_CREATE,text:e})},R=function(e){O.handleViewAction({actionType:k.TODO_DESTROY,id:e})},N=function(e){O.handleViewAction({actionType:k.TODO_TOGGLE,id:e})},G=new(function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"data",value:function(){return[{id:Date.now(),text:"Sample todo",done:!0},{id:Date.now()+1,text:"Another sample",done:!1}]}},{key:"action",value:function(e){x(e)}},{key:"fetch",value:function(){this.action(this.data())}}]),n}((function e(){Object(s.a)(this,e)}))),S=k,M=new(function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e,I))._errors={},a}return Object(l.a)(n,[{key:"handle",value:function(e){var t=e.action;switch(t.actionType){case S.TODO_RECEIVE_DATA:this.store(t.data),this.setIsLoading(!1),this.emitChange();break;case S.TODO_CREATE:this.create(t.text),this.emitChange();break;case S.TODO_DESTROY:this.destroy(t.id),this.emitChange();break;case S.TODO_TOGGLE:this.toggle(t.id),this.emitChange()}}},{key:"getErrors",value:function(){return this._errors}},{key:"setErrors",value:function(e){this._errors=e}},{key:"clearErrors",value:function(){this.setErrors({})}},{key:"create",value:function(e){var t=Date.now(),n=new I({id:t,text:e,done:!1});n.hasErrors()?this.setErrors(n.getErrors()):(this.addItem(n),this.clearErrors())}},{key:"destroy",value:function(e){this.removeItem(e)}},{key:"toggle",value:function(e){var t=this.getItem(e);t.setValue("done",!t.getValue("done"))}}]),n}(p))(G),q=n(115),H=n(131),F=n(119),P=n(121),W=n(132),Y=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i)))._onToggleClick=function(){N(e.props.todo.getValue("id"))},e._onDestroyClick=function(){R(e.props.todo.getValue("id"))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.todo.getValue("done"),n=e.todo.getValue("text"),a={};return t&&(a={color:"grey"}),i.a.createElement(q.a,{dense:!0},i.a.createElement(F.a,null,i.a.createElement(W.a,{style:{cursor:"pointer"},edge:"start",onClick:this._onDestroyClick})),i.a.createElement(F.a,null,i.a.createElement(H.a,{edge:"start",checked:t,onChange:this._onToggleClick,tabIndex:-1,disableRipple:!0})),i.a.createElement(P.a,{primary:i.a.createElement("span",{style:a},n)}))}}]),n}(i.a.Component),B=n(123),U=n(122),J=function(e){var t=e.todos,n=Array.from(t.keys()).map((function(e){return i.a.createElement(a.Fragment,{key:e},i.a.createElement(Y,{todo:t.get(e)}),i.a.createElement(U.a,null))}));return i.a.createElement(B.a,null,n)},K=n(130),Q=n(124),X=n(60),$=n.n(X),z=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e))._handleChange=function(e){a.setState({value:e.target.value})},a._onCreateClick=function(){L(a.state.value),a.setState({value:""})},a._handleKeyPressed=function(e){13===e.keyCode&&a._onCreateClick()},a.state={value:""},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this._handleKeyPressed,!1)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this._handleKeyPressed)}},{key:"render",value:function(){var e=this.state,t=M.getErrors();t=0===Object.keys(t).length?null:JSON.stringify(t);return i.a.createElement("div",{style:{display:"flex",height:"90px"}},i.a.createElement(K.a,{error:null!==t,ref:"input",label:"Add todo...",variant:"outlined",value:e.value,onChange:this._handleChange,helperText:t,style:{flexGrow:1,alignSelf:"flex-start"}}),i.a.createElement(Q.a,{color:"primary","aria-label":"add",style:{marginLeft:"10px"},onClick:this._onCreateClick},i.a.createElement($.a,null)))}}]),n}(i.a.Component),Z=n(62),ee=n(126),te=n(127),ne=n(125),ae=n(128),ie=n(120),re=n(31),oe=n(61),se=n.n(oe),le=n(129),ce=Object(Z.a)({palette:{primary:ne.a,secondary:ne.a}}),ue=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={todos:M.getAll()},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){M.addChangeListener(this._onChange.bind(this)),M.requestData()}},{key:"componentWillUnmount",value:function(){M.removeChangeListener(this._onChange.bind(this))}},{key:"render",value:function(){var e={},t=this.state;return i.a.createElement(ee.a,{theme:ce},i.a.createElement("div",{style:{position:"absolute",top:"0",left:"0",width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},i.a.createElement(te.a,{position:"static"},i.a.createElement(ae.a,null,i.a.createElement(le.a,{color:"inherit",href:"https://github.com/HichamBenjelloun/river"},i.a.createElement(ie.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"github"},i.a.createElement(se.a,null))),i.a.createElement(re.a,{variant:"h6",className:e.title},"Todo list demo"))),i.a.createElement("div",{style:{position:"relative",top:"100px",width:"90%",display:"flex",flexDirection:"column",justifyContent:"center"}},i.a.createElement(z,null),i.a.createElement(J,{todos:t.todos}))))}},{key:"_onChange",value:function(){this.setState({todos:M.getAll()})}}]),n}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[70,1,2]]]);
//# sourceMappingURL=main.22b0a81c.chunk.js.map