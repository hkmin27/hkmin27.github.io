goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_39904 = (function (this$){
var x__4463__auto__ = (((this$ == null))?null:this$);
var m__4464__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4464__auto__.call(null,this$));
} else {
var m__4461__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4461__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_39904(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_39905 = (function (this$){
var x__4463__auto__ = (((this$ == null))?null:this$);
var m__4464__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4464__auto__.call(null,this$));
} else {
var m__4461__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4461__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_39905(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__38988 = coll;
var G__38989 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__38988,G__38989) : shadow.dom.lazy_native_coll_seq.call(null,G__38988,G__38989));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4160__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__39010 = arguments.length;
switch (G__39010) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__39018 = arguments.length;
switch (G__39018) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__39028 = arguments.length;
switch (G__39028) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__39043 = arguments.length;
switch (G__39043) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__39069 = arguments.length;
switch (G__39069) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__39085 = arguments.length;
switch (G__39085) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4160__auto__ = (!((typeof document !== 'undefined')));
if(or__4160__auto__){
return or__4160__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e39096){if((e39096 instanceof Object)){
var e = e39096;
return console.log("didnt support attachEvent",el,e);
} else {
throw e39096;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4160__auto__ = (!((typeof document !== 'undefined')));
if(or__4160__auto__){
return or__4160__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__39102 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__39103 = null;
var count__39104 = (0);
var i__39105 = (0);
while(true){
if((i__39105 < count__39104)){
var el = chunk__39103.cljs$core$IIndexed$_nth$arity$2(null,i__39105);
var handler_39942__$1 = ((function (seq__39102,chunk__39103,count__39104,i__39105,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__39102,chunk__39103,count__39104,i__39105,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_39942__$1);


var G__39943 = seq__39102;
var G__39944 = chunk__39103;
var G__39945 = count__39104;
var G__39946 = (i__39105 + (1));
seq__39102 = G__39943;
chunk__39103 = G__39944;
count__39104 = G__39945;
i__39105 = G__39946;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39102);
if(temp__5735__auto__){
var seq__39102__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39102__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__39102__$1);
var G__39951 = cljs.core.chunk_rest(seq__39102__$1);
var G__39952 = c__4591__auto__;
var G__39953 = cljs.core.count(c__4591__auto__);
var G__39954 = (0);
seq__39102 = G__39951;
chunk__39103 = G__39952;
count__39104 = G__39953;
i__39105 = G__39954;
continue;
} else {
var el = cljs.core.first(seq__39102__$1);
var handler_39955__$1 = ((function (seq__39102,chunk__39103,count__39104,i__39105,el,seq__39102__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__39102,chunk__39103,count__39104,i__39105,el,seq__39102__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_39955__$1);


var G__39956 = cljs.core.next(seq__39102__$1);
var G__39957 = null;
var G__39958 = (0);
var G__39959 = (0);
seq__39102 = G__39956;
chunk__39103 = G__39957;
count__39104 = G__39958;
i__39105 = G__39959;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__39123 = arguments.length;
switch (G__39123) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__39141 = cljs.core.seq(events);
var chunk__39142 = null;
var count__39143 = (0);
var i__39144 = (0);
while(true){
if((i__39144 < count__39143)){
var vec__39165 = chunk__39142.cljs$core$IIndexed$_nth$arity$2(null,i__39144);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39165,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39165,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__39963 = seq__39141;
var G__39964 = chunk__39142;
var G__39965 = count__39143;
var G__39966 = (i__39144 + (1));
seq__39141 = G__39963;
chunk__39142 = G__39964;
count__39143 = G__39965;
i__39144 = G__39966;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39141);
if(temp__5735__auto__){
var seq__39141__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39141__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__39141__$1);
var G__39967 = cljs.core.chunk_rest(seq__39141__$1);
var G__39968 = c__4591__auto__;
var G__39969 = cljs.core.count(c__4591__auto__);
var G__39970 = (0);
seq__39141 = G__39967;
chunk__39142 = G__39968;
count__39143 = G__39969;
i__39144 = G__39970;
continue;
} else {
var vec__39175 = cljs.core.first(seq__39141__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39175,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39175,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__39971 = cljs.core.next(seq__39141__$1);
var G__39972 = null;
var G__39973 = (0);
var G__39974 = (0);
seq__39141 = G__39971;
chunk__39142 = G__39972;
count__39143 = G__39973;
i__39144 = G__39974;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__39185 = cljs.core.seq(styles);
var chunk__39186 = null;
var count__39187 = (0);
var i__39188 = (0);
while(true){
if((i__39188 < count__39187)){
var vec__39198 = chunk__39186.cljs$core$IIndexed$_nth$arity$2(null,i__39188);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39198,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39198,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__39976 = seq__39185;
var G__39977 = chunk__39186;
var G__39978 = count__39187;
var G__39979 = (i__39188 + (1));
seq__39185 = G__39976;
chunk__39186 = G__39977;
count__39187 = G__39978;
i__39188 = G__39979;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39185);
if(temp__5735__auto__){
var seq__39185__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39185__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__39185__$1);
var G__39981 = cljs.core.chunk_rest(seq__39185__$1);
var G__39982 = c__4591__auto__;
var G__39983 = cljs.core.count(c__4591__auto__);
var G__39984 = (0);
seq__39185 = G__39981;
chunk__39186 = G__39982;
count__39187 = G__39983;
i__39188 = G__39984;
continue;
} else {
var vec__39202 = cljs.core.first(seq__39185__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39202,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39202,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__39985 = cljs.core.next(seq__39185__$1);
var G__39986 = null;
var G__39987 = (0);
var G__39988 = (0);
seq__39185 = G__39985;
chunk__39186 = G__39986;
count__39187 = G__39987;
i__39188 = G__39988;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__39210_39989 = key;
var G__39210_39990__$1 = (((G__39210_39989 instanceof cljs.core.Keyword))?G__39210_39989.fqn:null);
switch (G__39210_39990__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_39993 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4160__auto__ = goog.string.startsWith(ks_39993,"data-");
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return goog.string.startsWith(ks_39993,"aria-");
}
})())){
el.setAttribute(ks_39993,value);
} else {
(el[ks_39993] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__39276){
var map__39277 = p__39276;
var map__39277__$1 = cljs.core.__destructure_map(map__39277);
var props = map__39277__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39277__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__39278 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39278,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39278,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39278,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__39284 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__39284,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__39284;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__39288 = arguments.length;
switch (G__39288) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__39301){
var vec__39302 = p__39301;
var seq__39303 = cljs.core.seq(vec__39302);
var first__39304 = cljs.core.first(seq__39303);
var seq__39303__$1 = cljs.core.next(seq__39303);
var nn = first__39304;
var first__39304__$1 = cljs.core.first(seq__39303__$1);
var seq__39303__$2 = cljs.core.next(seq__39303__$1);
var np = first__39304__$1;
var nc = seq__39303__$2;
var node = vec__39302;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__39307 = nn;
var G__39308 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__39307,G__39308) : create_fn.call(null,G__39307,G__39308));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__39310 = nn;
var G__39311 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__39310,G__39311) : create_fn.call(null,G__39310,G__39311));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__39314 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39314,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39314,(1),null);
var seq__39318_40007 = cljs.core.seq(node_children);
var chunk__39319_40008 = null;
var count__39320_40009 = (0);
var i__39321_40010 = (0);
while(true){
if((i__39321_40010 < count__39320_40009)){
var child_struct_40011 = chunk__39319_40008.cljs$core$IIndexed$_nth$arity$2(null,i__39321_40010);
var children_40012 = shadow.dom.dom_node(child_struct_40011);
if(cljs.core.seq_QMARK_(children_40012)){
var seq__39356_40017 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_40012));
var chunk__39358_40018 = null;
var count__39359_40019 = (0);
var i__39360_40020 = (0);
while(true){
if((i__39360_40020 < count__39359_40019)){
var child_40034 = chunk__39358_40018.cljs$core$IIndexed$_nth$arity$2(null,i__39360_40020);
if(cljs.core.truth_(child_40034)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40034);


var G__40035 = seq__39356_40017;
var G__40036 = chunk__39358_40018;
var G__40037 = count__39359_40019;
var G__40038 = (i__39360_40020 + (1));
seq__39356_40017 = G__40035;
chunk__39358_40018 = G__40036;
count__39359_40019 = G__40037;
i__39360_40020 = G__40038;
continue;
} else {
var G__40040 = seq__39356_40017;
var G__40041 = chunk__39358_40018;
var G__40042 = count__39359_40019;
var G__40043 = (i__39360_40020 + (1));
seq__39356_40017 = G__40040;
chunk__39358_40018 = G__40041;
count__39359_40019 = G__40042;
i__39360_40020 = G__40043;
continue;
}
} else {
var temp__5735__auto___40044 = cljs.core.seq(seq__39356_40017);
if(temp__5735__auto___40044){
var seq__39356_40045__$1 = temp__5735__auto___40044;
if(cljs.core.chunked_seq_QMARK_(seq__39356_40045__$1)){
var c__4591__auto___40046 = cljs.core.chunk_first(seq__39356_40045__$1);
var G__40047 = cljs.core.chunk_rest(seq__39356_40045__$1);
var G__40048 = c__4591__auto___40046;
var G__40049 = cljs.core.count(c__4591__auto___40046);
var G__40050 = (0);
seq__39356_40017 = G__40047;
chunk__39358_40018 = G__40048;
count__39359_40019 = G__40049;
i__39360_40020 = G__40050;
continue;
} else {
var child_40055 = cljs.core.first(seq__39356_40045__$1);
if(cljs.core.truth_(child_40055)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40055);


var G__40060 = cljs.core.next(seq__39356_40045__$1);
var G__40061 = null;
var G__40062 = (0);
var G__40063 = (0);
seq__39356_40017 = G__40060;
chunk__39358_40018 = G__40061;
count__39359_40019 = G__40062;
i__39360_40020 = G__40063;
continue;
} else {
var G__40064 = cljs.core.next(seq__39356_40045__$1);
var G__40065 = null;
var G__40066 = (0);
var G__40067 = (0);
seq__39356_40017 = G__40064;
chunk__39358_40018 = G__40065;
count__39359_40019 = G__40066;
i__39360_40020 = G__40067;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_40012);
}


var G__40068 = seq__39318_40007;
var G__40069 = chunk__39319_40008;
var G__40070 = count__39320_40009;
var G__40071 = (i__39321_40010 + (1));
seq__39318_40007 = G__40068;
chunk__39319_40008 = G__40069;
count__39320_40009 = G__40070;
i__39321_40010 = G__40071;
continue;
} else {
var temp__5735__auto___40072 = cljs.core.seq(seq__39318_40007);
if(temp__5735__auto___40072){
var seq__39318_40073__$1 = temp__5735__auto___40072;
if(cljs.core.chunked_seq_QMARK_(seq__39318_40073__$1)){
var c__4591__auto___40074 = cljs.core.chunk_first(seq__39318_40073__$1);
var G__40075 = cljs.core.chunk_rest(seq__39318_40073__$1);
var G__40076 = c__4591__auto___40074;
var G__40077 = cljs.core.count(c__4591__auto___40074);
var G__40078 = (0);
seq__39318_40007 = G__40075;
chunk__39319_40008 = G__40076;
count__39320_40009 = G__40077;
i__39321_40010 = G__40078;
continue;
} else {
var child_struct_40079 = cljs.core.first(seq__39318_40073__$1);
var children_40080 = shadow.dom.dom_node(child_struct_40079);
if(cljs.core.seq_QMARK_(children_40080)){
var seq__39366_40085 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_40080));
var chunk__39368_40086 = null;
var count__39369_40087 = (0);
var i__39370_40088 = (0);
while(true){
if((i__39370_40088 < count__39369_40087)){
var child_40091 = chunk__39368_40086.cljs$core$IIndexed$_nth$arity$2(null,i__39370_40088);
if(cljs.core.truth_(child_40091)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40091);


var G__40097 = seq__39366_40085;
var G__40098 = chunk__39368_40086;
var G__40099 = count__39369_40087;
var G__40100 = (i__39370_40088 + (1));
seq__39366_40085 = G__40097;
chunk__39368_40086 = G__40098;
count__39369_40087 = G__40099;
i__39370_40088 = G__40100;
continue;
} else {
var G__40104 = seq__39366_40085;
var G__40105 = chunk__39368_40086;
var G__40106 = count__39369_40087;
var G__40107 = (i__39370_40088 + (1));
seq__39366_40085 = G__40104;
chunk__39368_40086 = G__40105;
count__39369_40087 = G__40106;
i__39370_40088 = G__40107;
continue;
}
} else {
var temp__5735__auto___40108__$1 = cljs.core.seq(seq__39366_40085);
if(temp__5735__auto___40108__$1){
var seq__39366_40109__$1 = temp__5735__auto___40108__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39366_40109__$1)){
var c__4591__auto___40110 = cljs.core.chunk_first(seq__39366_40109__$1);
var G__40111 = cljs.core.chunk_rest(seq__39366_40109__$1);
var G__40112 = c__4591__auto___40110;
var G__40113 = cljs.core.count(c__4591__auto___40110);
var G__40114 = (0);
seq__39366_40085 = G__40111;
chunk__39368_40086 = G__40112;
count__39369_40087 = G__40113;
i__39370_40088 = G__40114;
continue;
} else {
var child_40115 = cljs.core.first(seq__39366_40109__$1);
if(cljs.core.truth_(child_40115)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40115);


var G__40120 = cljs.core.next(seq__39366_40109__$1);
var G__40121 = null;
var G__40122 = (0);
var G__40123 = (0);
seq__39366_40085 = G__40120;
chunk__39368_40086 = G__40121;
count__39369_40087 = G__40122;
i__39370_40088 = G__40123;
continue;
} else {
var G__40128 = cljs.core.next(seq__39366_40109__$1);
var G__40129 = null;
var G__40130 = (0);
var G__40131 = (0);
seq__39366_40085 = G__40128;
chunk__39368_40086 = G__40129;
count__39369_40087 = G__40130;
i__39370_40088 = G__40131;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_40080);
}


var G__40134 = cljs.core.next(seq__39318_40073__$1);
var G__40135 = null;
var G__40136 = (0);
var G__40137 = (0);
seq__39318_40007 = G__40134;
chunk__39319_40008 = G__40135;
count__39320_40009 = G__40136;
i__39321_40010 = G__40137;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__39402 = cljs.core.seq(node);
var chunk__39403 = null;
var count__39404 = (0);
var i__39405 = (0);
while(true){
if((i__39405 < count__39404)){
var n = chunk__39403.cljs$core$IIndexed$_nth$arity$2(null,i__39405);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__40160 = seq__39402;
var G__40161 = chunk__39403;
var G__40162 = count__39404;
var G__40163 = (i__39405 + (1));
seq__39402 = G__40160;
chunk__39403 = G__40161;
count__39404 = G__40162;
i__39405 = G__40163;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39402);
if(temp__5735__auto__){
var seq__39402__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39402__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__39402__$1);
var G__40164 = cljs.core.chunk_rest(seq__39402__$1);
var G__40165 = c__4591__auto__;
var G__40166 = cljs.core.count(c__4591__auto__);
var G__40167 = (0);
seq__39402 = G__40164;
chunk__39403 = G__40165;
count__39404 = G__40166;
i__39405 = G__40167;
continue;
} else {
var n = cljs.core.first(seq__39402__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__40179 = cljs.core.next(seq__39402__$1);
var G__40180 = null;
var G__40181 = (0);
var G__40182 = (0);
seq__39402 = G__40179;
chunk__39403 = G__40180;
count__39404 = G__40181;
i__39405 = G__40182;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__39420 = arguments.length;
switch (G__39420) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__39429 = arguments.length;
switch (G__39429) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__39445 = arguments.length;
switch (G__39445) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4160__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4777__auto__ = [];
var len__4771__auto___40203 = arguments.length;
var i__4772__auto___40204 = (0);
while(true){
if((i__4772__auto___40204 < len__4771__auto___40203)){
args__4777__auto__.push((arguments[i__4772__auto___40204]));

var G__40205 = (i__4772__auto___40204 + (1));
i__4772__auto___40204 = G__40205;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__39472_40206 = cljs.core.seq(nodes);
var chunk__39473_40207 = null;
var count__39474_40208 = (0);
var i__39475_40209 = (0);
while(true){
if((i__39475_40209 < count__39474_40208)){
var node_40210 = chunk__39473_40207.cljs$core$IIndexed$_nth$arity$2(null,i__39475_40209);
fragment.appendChild(shadow.dom._to_dom(node_40210));


var G__40211 = seq__39472_40206;
var G__40212 = chunk__39473_40207;
var G__40213 = count__39474_40208;
var G__40214 = (i__39475_40209 + (1));
seq__39472_40206 = G__40211;
chunk__39473_40207 = G__40212;
count__39474_40208 = G__40213;
i__39475_40209 = G__40214;
continue;
} else {
var temp__5735__auto___40215 = cljs.core.seq(seq__39472_40206);
if(temp__5735__auto___40215){
var seq__39472_40217__$1 = temp__5735__auto___40215;
if(cljs.core.chunked_seq_QMARK_(seq__39472_40217__$1)){
var c__4591__auto___40218 = cljs.core.chunk_first(seq__39472_40217__$1);
var G__40219 = cljs.core.chunk_rest(seq__39472_40217__$1);
var G__40220 = c__4591__auto___40218;
var G__40221 = cljs.core.count(c__4591__auto___40218);
var G__40222 = (0);
seq__39472_40206 = G__40219;
chunk__39473_40207 = G__40220;
count__39474_40208 = G__40221;
i__39475_40209 = G__40222;
continue;
} else {
var node_40223 = cljs.core.first(seq__39472_40217__$1);
fragment.appendChild(shadow.dom._to_dom(node_40223));


var G__40224 = cljs.core.next(seq__39472_40217__$1);
var G__40225 = null;
var G__40226 = (0);
var G__40227 = (0);
seq__39472_40206 = G__40224;
chunk__39473_40207 = G__40225;
count__39474_40208 = G__40226;
i__39475_40209 = G__40227;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq39464){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39464));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__39496_40229 = cljs.core.seq(scripts);
var chunk__39497_40230 = null;
var count__39498_40231 = (0);
var i__39499_40232 = (0);
while(true){
if((i__39499_40232 < count__39498_40231)){
var vec__39511_40233 = chunk__39497_40230.cljs$core$IIndexed$_nth$arity$2(null,i__39499_40232);
var script_tag_40234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39511_40233,(0),null);
var script_body_40235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39511_40233,(1),null);
eval(script_body_40235);


var G__40236 = seq__39496_40229;
var G__40237 = chunk__39497_40230;
var G__40238 = count__39498_40231;
var G__40239 = (i__39499_40232 + (1));
seq__39496_40229 = G__40236;
chunk__39497_40230 = G__40237;
count__39498_40231 = G__40238;
i__39499_40232 = G__40239;
continue;
} else {
var temp__5735__auto___40241 = cljs.core.seq(seq__39496_40229);
if(temp__5735__auto___40241){
var seq__39496_40244__$1 = temp__5735__auto___40241;
if(cljs.core.chunked_seq_QMARK_(seq__39496_40244__$1)){
var c__4591__auto___40245 = cljs.core.chunk_first(seq__39496_40244__$1);
var G__40246 = cljs.core.chunk_rest(seq__39496_40244__$1);
var G__40247 = c__4591__auto___40245;
var G__40248 = cljs.core.count(c__4591__auto___40245);
var G__40249 = (0);
seq__39496_40229 = G__40246;
chunk__39497_40230 = G__40247;
count__39498_40231 = G__40248;
i__39499_40232 = G__40249;
continue;
} else {
var vec__39518_40251 = cljs.core.first(seq__39496_40244__$1);
var script_tag_40252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39518_40251,(0),null);
var script_body_40253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39518_40251,(1),null);
eval(script_body_40253);


var G__40254 = cljs.core.next(seq__39496_40244__$1);
var G__40255 = null;
var G__40256 = (0);
var G__40257 = (0);
seq__39496_40229 = G__40254;
chunk__39497_40230 = G__40255;
count__39498_40231 = G__40256;
i__39499_40232 = G__40257;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__39522){
var vec__39523 = p__39522;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39523,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39523,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__39534 = arguments.length;
switch (G__39534) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__39566 = cljs.core.seq(style_keys);
var chunk__39567 = null;
var count__39568 = (0);
var i__39569 = (0);
while(true){
if((i__39569 < count__39568)){
var it = chunk__39567.cljs$core$IIndexed$_nth$arity$2(null,i__39569);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__40264 = seq__39566;
var G__40265 = chunk__39567;
var G__40266 = count__39568;
var G__40267 = (i__39569 + (1));
seq__39566 = G__40264;
chunk__39567 = G__40265;
count__39568 = G__40266;
i__39569 = G__40267;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39566);
if(temp__5735__auto__){
var seq__39566__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39566__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__39566__$1);
var G__40269 = cljs.core.chunk_rest(seq__39566__$1);
var G__40270 = c__4591__auto__;
var G__40271 = cljs.core.count(c__4591__auto__);
var G__40272 = (0);
seq__39566 = G__40269;
chunk__39567 = G__40270;
count__39568 = G__40271;
i__39569 = G__40272;
continue;
} else {
var it = cljs.core.first(seq__39566__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__40273 = cljs.core.next(seq__39566__$1);
var G__40274 = null;
var G__40275 = (0);
var G__40276 = (0);
seq__39566 = G__40273;
chunk__39567 = G__40274;
count__39568 = G__40275;
i__39569 = G__40276;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k39620,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__39636 = k39620;
var G__39636__$1 = (((G__39636 instanceof cljs.core.Keyword))?G__39636.fqn:null);
switch (G__39636__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k39620,else__4418__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__39648){
var vec__39649 = p__39648;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39649,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39649,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39619){
var self__ = this;
var G__39619__$1 = this;
return (new cljs.core.RecordIter((0),G__39619__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (coll__4412__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
})(this__4411__auto____$1);
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this39621,other39622){
var self__ = this;
var this39621__$1 = this;
return (((!((other39622 == null)))) && ((this39621__$1.constructor === other39622.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39621__$1.x,other39622.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39621__$1.y,other39622.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39621__$1.__extmap,other39622.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__39619){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__39706 = cljs.core.keyword_identical_QMARK_;
var expr__39707 = k__4423__auto__;
if(cljs.core.truth_((pred__39706.cljs$core$IFn$_invoke$arity$2 ? pred__39706.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__39707) : pred__39706.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__39707)))){
return (new shadow.dom.Coordinate(G__39619,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39706.cljs$core$IFn$_invoke$arity$2 ? pred__39706.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__39707) : pred__39706.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__39707)))){
return (new shadow.dom.Coordinate(self__.x,G__39619,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__39619),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__39619){
var self__ = this;
var this__4414__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__39619,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4421__auto__,(0)),cljs.core._nth(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__39627){
var extmap__4454__auto__ = (function (){var G__39720 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__39627,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__39627)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__39720);
} else {
return G__39720;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__39627),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__39627),null,cljs.core.not_empty(extmap__4454__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k39765,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__39769 = k39765;
var G__39769__$1 = (((G__39769 instanceof cljs.core.Keyword))?G__39769.fqn:null);
switch (G__39769__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k39765,else__4418__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__39770){
var vec__39771 = p__39770;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39771,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39771,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#shadow.dom.Size{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39764){
var self__ = this;
var G__39764__$1 = this;
return (new cljs.core.RecordIter((0),G__39764__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (coll__4412__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
})(this__4411__auto____$1);
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this39766,other39767){
var self__ = this;
var this39766__$1 = this;
return (((!((other39767 == null)))) && ((this39766__$1.constructor === other39767.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39766__$1.w,other39767.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39766__$1.h,other39767.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39766__$1.__extmap,other39767.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__39764){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__39775 = cljs.core.keyword_identical_QMARK_;
var expr__39776 = k__4423__auto__;
if(cljs.core.truth_((pred__39775.cljs$core$IFn$_invoke$arity$2 ? pred__39775.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__39776) : pred__39775.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__39776)))){
return (new shadow.dom.Size(G__39764,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39775.cljs$core$IFn$_invoke$arity$2 ? pred__39775.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__39776) : pred__39775.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__39776)))){
return (new shadow.dom.Size(self__.w,G__39764,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__39764),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__39764){
var self__ = this;
var this__4414__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__39764,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4421__auto__,(0)),cljs.core._nth(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__39768){
var extmap__4454__auto__ = (function (){var G__39784 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__39768,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__39768)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__39784);
} else {
return G__39784;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__39768),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__39768),null,cljs.core.not_empty(extmap__4454__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4645__auto__ = opts;
var l__4646__auto__ = a__4645__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4646__auto__)){
var G__40302 = (i + (1));
var G__40303 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__40302;
ret = G__40303;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__39798){
var vec__39799 = p__39798;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39799,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39799,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__39805 = arguments.length;
switch (G__39805) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__40307 = ps;
var G__40308 = (i + (1));
el__$1 = G__40307;
i = G__40308;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__39813 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39813,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39813,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39813,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__39816_40309 = cljs.core.seq(props);
var chunk__39817_40310 = null;
var count__39818_40311 = (0);
var i__39819_40312 = (0);
while(true){
if((i__39819_40312 < count__39818_40311)){
var vec__39826_40313 = chunk__39817_40310.cljs$core$IIndexed$_nth$arity$2(null,i__39819_40312);
var k_40314 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39826_40313,(0),null);
var v_40315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39826_40313,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_40314);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_40314),v_40315);


var G__40320 = seq__39816_40309;
var G__40321 = chunk__39817_40310;
var G__40322 = count__39818_40311;
var G__40323 = (i__39819_40312 + (1));
seq__39816_40309 = G__40320;
chunk__39817_40310 = G__40321;
count__39818_40311 = G__40322;
i__39819_40312 = G__40323;
continue;
} else {
var temp__5735__auto___40324 = cljs.core.seq(seq__39816_40309);
if(temp__5735__auto___40324){
var seq__39816_40325__$1 = temp__5735__auto___40324;
if(cljs.core.chunked_seq_QMARK_(seq__39816_40325__$1)){
var c__4591__auto___40326 = cljs.core.chunk_first(seq__39816_40325__$1);
var G__40327 = cljs.core.chunk_rest(seq__39816_40325__$1);
var G__40328 = c__4591__auto___40326;
var G__40329 = cljs.core.count(c__4591__auto___40326);
var G__40330 = (0);
seq__39816_40309 = G__40327;
chunk__39817_40310 = G__40328;
count__39818_40311 = G__40329;
i__39819_40312 = G__40330;
continue;
} else {
var vec__39829_40331 = cljs.core.first(seq__39816_40325__$1);
var k_40332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39829_40331,(0),null);
var v_40333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39829_40331,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_40332);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_40332),v_40333);


var G__40334 = cljs.core.next(seq__39816_40325__$1);
var G__40335 = null;
var G__40336 = (0);
var G__40337 = (0);
seq__39816_40309 = G__40334;
chunk__39817_40310 = G__40335;
count__39818_40311 = G__40336;
i__39819_40312 = G__40337;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__39834 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39834,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39834,(1),null);
var seq__39837_40338 = cljs.core.seq(node_children);
var chunk__39839_40339 = null;
var count__39840_40340 = (0);
var i__39841_40341 = (0);
while(true){
if((i__39841_40341 < count__39840_40340)){
var child_struct_40342 = chunk__39839_40339.cljs$core$IIndexed$_nth$arity$2(null,i__39841_40341);
if((!((child_struct_40342 == null)))){
if(typeof child_struct_40342 === 'string'){
var text_40343 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_40343),child_struct_40342].join(''));
} else {
var children_40344 = shadow.dom.svg_node(child_struct_40342);
if(cljs.core.seq_QMARK_(children_40344)){
var seq__39858_40345 = cljs.core.seq(children_40344);
var chunk__39860_40346 = null;
var count__39861_40347 = (0);
var i__39862_40348 = (0);
while(true){
if((i__39862_40348 < count__39861_40347)){
var child_40349 = chunk__39860_40346.cljs$core$IIndexed$_nth$arity$2(null,i__39862_40348);
if(cljs.core.truth_(child_40349)){
node.appendChild(child_40349);


var G__40350 = seq__39858_40345;
var G__40351 = chunk__39860_40346;
var G__40352 = count__39861_40347;
var G__40353 = (i__39862_40348 + (1));
seq__39858_40345 = G__40350;
chunk__39860_40346 = G__40351;
count__39861_40347 = G__40352;
i__39862_40348 = G__40353;
continue;
} else {
var G__40354 = seq__39858_40345;
var G__40355 = chunk__39860_40346;
var G__40356 = count__39861_40347;
var G__40357 = (i__39862_40348 + (1));
seq__39858_40345 = G__40354;
chunk__39860_40346 = G__40355;
count__39861_40347 = G__40356;
i__39862_40348 = G__40357;
continue;
}
} else {
var temp__5735__auto___40358 = cljs.core.seq(seq__39858_40345);
if(temp__5735__auto___40358){
var seq__39858_40359__$1 = temp__5735__auto___40358;
if(cljs.core.chunked_seq_QMARK_(seq__39858_40359__$1)){
var c__4591__auto___40360 = cljs.core.chunk_first(seq__39858_40359__$1);
var G__40361 = cljs.core.chunk_rest(seq__39858_40359__$1);
var G__40362 = c__4591__auto___40360;
var G__40363 = cljs.core.count(c__4591__auto___40360);
var G__40364 = (0);
seq__39858_40345 = G__40361;
chunk__39860_40346 = G__40362;
count__39861_40347 = G__40363;
i__39862_40348 = G__40364;
continue;
} else {
var child_40365 = cljs.core.first(seq__39858_40359__$1);
if(cljs.core.truth_(child_40365)){
node.appendChild(child_40365);


var G__40366 = cljs.core.next(seq__39858_40359__$1);
var G__40367 = null;
var G__40368 = (0);
var G__40369 = (0);
seq__39858_40345 = G__40366;
chunk__39860_40346 = G__40367;
count__39861_40347 = G__40368;
i__39862_40348 = G__40369;
continue;
} else {
var G__40370 = cljs.core.next(seq__39858_40359__$1);
var G__40371 = null;
var G__40372 = (0);
var G__40373 = (0);
seq__39858_40345 = G__40370;
chunk__39860_40346 = G__40371;
count__39861_40347 = G__40372;
i__39862_40348 = G__40373;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_40344);
}
}


var G__40374 = seq__39837_40338;
var G__40375 = chunk__39839_40339;
var G__40376 = count__39840_40340;
var G__40377 = (i__39841_40341 + (1));
seq__39837_40338 = G__40374;
chunk__39839_40339 = G__40375;
count__39840_40340 = G__40376;
i__39841_40341 = G__40377;
continue;
} else {
var G__40378 = seq__39837_40338;
var G__40379 = chunk__39839_40339;
var G__40380 = count__39840_40340;
var G__40381 = (i__39841_40341 + (1));
seq__39837_40338 = G__40378;
chunk__39839_40339 = G__40379;
count__39840_40340 = G__40380;
i__39841_40341 = G__40381;
continue;
}
} else {
var temp__5735__auto___40382 = cljs.core.seq(seq__39837_40338);
if(temp__5735__auto___40382){
var seq__39837_40383__$1 = temp__5735__auto___40382;
if(cljs.core.chunked_seq_QMARK_(seq__39837_40383__$1)){
var c__4591__auto___40384 = cljs.core.chunk_first(seq__39837_40383__$1);
var G__40385 = cljs.core.chunk_rest(seq__39837_40383__$1);
var G__40386 = c__4591__auto___40384;
var G__40387 = cljs.core.count(c__4591__auto___40384);
var G__40388 = (0);
seq__39837_40338 = G__40385;
chunk__39839_40339 = G__40386;
count__39840_40340 = G__40387;
i__39841_40341 = G__40388;
continue;
} else {
var child_struct_40389 = cljs.core.first(seq__39837_40383__$1);
if((!((child_struct_40389 == null)))){
if(typeof child_struct_40389 === 'string'){
var text_40390 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_40390),child_struct_40389].join(''));
} else {
var children_40391 = shadow.dom.svg_node(child_struct_40389);
if(cljs.core.seq_QMARK_(children_40391)){
var seq__39864_40392 = cljs.core.seq(children_40391);
var chunk__39866_40393 = null;
var count__39867_40394 = (0);
var i__39868_40395 = (0);
while(true){
if((i__39868_40395 < count__39867_40394)){
var child_40396 = chunk__39866_40393.cljs$core$IIndexed$_nth$arity$2(null,i__39868_40395);
if(cljs.core.truth_(child_40396)){
node.appendChild(child_40396);


var G__40397 = seq__39864_40392;
var G__40398 = chunk__39866_40393;
var G__40399 = count__39867_40394;
var G__40400 = (i__39868_40395 + (1));
seq__39864_40392 = G__40397;
chunk__39866_40393 = G__40398;
count__39867_40394 = G__40399;
i__39868_40395 = G__40400;
continue;
} else {
var G__40401 = seq__39864_40392;
var G__40402 = chunk__39866_40393;
var G__40403 = count__39867_40394;
var G__40404 = (i__39868_40395 + (1));
seq__39864_40392 = G__40401;
chunk__39866_40393 = G__40402;
count__39867_40394 = G__40403;
i__39868_40395 = G__40404;
continue;
}
} else {
var temp__5735__auto___40405__$1 = cljs.core.seq(seq__39864_40392);
if(temp__5735__auto___40405__$1){
var seq__39864_40406__$1 = temp__5735__auto___40405__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39864_40406__$1)){
var c__4591__auto___40407 = cljs.core.chunk_first(seq__39864_40406__$1);
var G__40408 = cljs.core.chunk_rest(seq__39864_40406__$1);
var G__40409 = c__4591__auto___40407;
var G__40410 = cljs.core.count(c__4591__auto___40407);
var G__40411 = (0);
seq__39864_40392 = G__40408;
chunk__39866_40393 = G__40409;
count__39867_40394 = G__40410;
i__39868_40395 = G__40411;
continue;
} else {
var child_40412 = cljs.core.first(seq__39864_40406__$1);
if(cljs.core.truth_(child_40412)){
node.appendChild(child_40412);


var G__40414 = cljs.core.next(seq__39864_40406__$1);
var G__40415 = null;
var G__40416 = (0);
var G__40417 = (0);
seq__39864_40392 = G__40414;
chunk__39866_40393 = G__40415;
count__39867_40394 = G__40416;
i__39868_40395 = G__40417;
continue;
} else {
var G__40418 = cljs.core.next(seq__39864_40406__$1);
var G__40419 = null;
var G__40420 = (0);
var G__40421 = (0);
seq__39864_40392 = G__40418;
chunk__39866_40393 = G__40419;
count__39867_40394 = G__40420;
i__39868_40395 = G__40421;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_40391);
}
}


var G__40422 = cljs.core.next(seq__39837_40383__$1);
var G__40423 = null;
var G__40424 = (0);
var G__40425 = (0);
seq__39837_40338 = G__40422;
chunk__39839_40339 = G__40423;
count__39840_40340 = G__40424;
i__39841_40341 = G__40425;
continue;
} else {
var G__40426 = cljs.core.next(seq__39837_40383__$1);
var G__40427 = null;
var G__40428 = (0);
var G__40429 = (0);
seq__39837_40338 = G__40426;
chunk__39839_40339 = G__40427;
count__39840_40340 = G__40428;
i__39841_40341 = G__40429;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4777__auto__ = [];
var len__4771__auto___40434 = arguments.length;
var i__4772__auto___40435 = (0);
while(true){
if((i__4772__auto___40435 < len__4771__auto___40434)){
args__4777__auto__.push((arguments[i__4772__auto___40435]));

var G__40438 = (i__4772__auto___40435 + (1));
i__4772__auto___40435 = G__40438;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq39873){
var G__39874 = cljs.core.first(seq39873);
var seq39873__$1 = cljs.core.next(seq39873);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39874,seq39873__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__39876 = arguments.length;
switch (G__39876) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4149__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4149__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4149__auto__;
}
})())){
var c__36461__auto___40495 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36462__auto__ = (function (){var switch__36294__auto__ = (function (state_39881){
var state_val_39882 = (state_39881[(1)]);
if((state_val_39882 === (1))){
var state_39881__$1 = state_39881;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39881__$1,(2),once_or_cleanup);
} else {
if((state_val_39882 === (2))){
var inst_39878 = (state_39881[(2)]);
var inst_39879 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_39881__$1 = (function (){var statearr_39883 = state_39881;
(statearr_39883[(7)] = inst_39878);

return statearr_39883;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39881__$1,inst_39879);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__36295__auto__ = null;
var shadow$dom$state_machine__36295__auto____0 = (function (){
var statearr_39888 = [null,null,null,null,null,null,null,null];
(statearr_39888[(0)] = shadow$dom$state_machine__36295__auto__);

(statearr_39888[(1)] = (1));

return statearr_39888;
});
var shadow$dom$state_machine__36295__auto____1 = (function (state_39881){
while(true){
var ret_value__36296__auto__ = (function (){try{while(true){
var result__36297__auto__ = switch__36294__auto__(state_39881);
if(cljs.core.keyword_identical_QMARK_(result__36297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36297__auto__;
}
break;
}
}catch (e39893){var ex__36298__auto__ = e39893;
var statearr_39894_40497 = state_39881;
(statearr_39894_40497[(2)] = ex__36298__auto__);


if(cljs.core.seq((state_39881[(4)]))){
var statearr_39895_40498 = state_39881;
(statearr_39895_40498[(1)] = cljs.core.first((state_39881[(4)])));

} else {
throw ex__36298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40508 = state_39881;
state_39881 = G__40508;
continue;
} else {
return ret_value__36296__auto__;
}
break;
}
});
shadow$dom$state_machine__36295__auto__ = function(state_39881){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__36295__auto____0.call(this);
case 1:
return shadow$dom$state_machine__36295__auto____1.call(this,state_39881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__36295__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__36295__auto____0;
shadow$dom$state_machine__36295__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__36295__auto____1;
return shadow$dom$state_machine__36295__auto__;
})()
})();
var state__36463__auto__ = (function (){var statearr_39896 = f__36462__auto__();
(statearr_39896[(6)] = c__36461__auto___40495);

return statearr_39896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36463__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
