goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_40090 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_40090(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_40092 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_40092(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__38975 = coll;
var G__38976 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__38975,G__38976) : shadow.dom.lazy_native_coll_seq.call(null,G__38975,G__38976));
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
var G__38992 = arguments.length;
switch (G__38992) {
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
var G__38998 = arguments.length;
switch (G__38998) {
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
var G__39004 = arguments.length;
switch (G__39004) {
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
var G__39009 = arguments.length;
switch (G__39009) {
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
var G__39042 = arguments.length;
switch (G__39042) {
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
var G__39053 = arguments.length;
switch (G__39053) {
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
}catch (e39061){if((e39061 instanceof Object)){
var e = e39061;
return console.log("didnt support attachEvent",el,e);
} else {
throw e39061;

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
var seq__39066 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__39068 = null;
var count__39069 = (0);
var i__39070 = (0);
while(true){
if((i__39070 < count__39069)){
var el = chunk__39068.cljs$core$IIndexed$_nth$arity$2(null,i__39070);
var handler_40113__$1 = ((function (seq__39066,chunk__39068,count__39069,i__39070,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__39066,chunk__39068,count__39069,i__39070,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_40113__$1);


var G__40115 = seq__39066;
var G__40116 = chunk__39068;
var G__40117 = count__39069;
var G__40118 = (i__39070 + (1));
seq__39066 = G__40115;
chunk__39068 = G__40116;
count__39069 = G__40117;
i__39070 = G__40118;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39066);
if(temp__5735__auto__){
var seq__39066__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39066__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__39066__$1);
var G__40123 = cljs.core.chunk_rest(seq__39066__$1);
var G__40124 = c__4591__auto__;
var G__40125 = cljs.core.count(c__4591__auto__);
var G__40126 = (0);
seq__39066 = G__40123;
chunk__39068 = G__40124;
count__39069 = G__40125;
i__39070 = G__40126;
continue;
} else {
var el = cljs.core.first(seq__39066__$1);
var handler_40127__$1 = ((function (seq__39066,chunk__39068,count__39069,i__39070,el,seq__39066__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__39066,chunk__39068,count__39069,i__39070,el,seq__39066__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_40127__$1);


var G__40128 = cljs.core.next(seq__39066__$1);
var G__40129 = null;
var G__40130 = (0);
var G__40131 = (0);
seq__39066 = G__40128;
chunk__39068 = G__40129;
count__39069 = G__40130;
i__39070 = G__40131;
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
var G__39092 = arguments.length;
switch (G__39092) {
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
var seq__39099 = cljs.core.seq(events);
var chunk__39100 = null;
var count__39101 = (0);
var i__39102 = (0);
while(true){
if((i__39102 < count__39101)){
var vec__39111 = chunk__39100.cljs$core$IIndexed$_nth$arity$2(null,i__39102);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39111,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39111,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__40141 = seq__39099;
var G__40142 = chunk__39100;
var G__40143 = count__39101;
var G__40144 = (i__39102 + (1));
seq__39099 = G__40141;
chunk__39100 = G__40142;
count__39101 = G__40143;
i__39102 = G__40144;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39099);
if(temp__5735__auto__){
var seq__39099__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39099__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__39099__$1);
var G__40147 = cljs.core.chunk_rest(seq__39099__$1);
var G__40148 = c__4591__auto__;
var G__40149 = cljs.core.count(c__4591__auto__);
var G__40150 = (0);
seq__39099 = G__40147;
chunk__39100 = G__40148;
count__39101 = G__40149;
i__39102 = G__40150;
continue;
} else {
var vec__39115 = cljs.core.first(seq__39099__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39115,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39115,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__40152 = cljs.core.next(seq__39099__$1);
var G__40153 = null;
var G__40154 = (0);
var G__40155 = (0);
seq__39099 = G__40152;
chunk__39100 = G__40153;
count__39101 = G__40154;
i__39102 = G__40155;
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
var seq__39118 = cljs.core.seq(styles);
var chunk__39119 = null;
var count__39120 = (0);
var i__39121 = (0);
while(true){
if((i__39121 < count__39120)){
var vec__39136 = chunk__39119.cljs$core$IIndexed$_nth$arity$2(null,i__39121);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39136,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39136,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__40159 = seq__39118;
var G__40160 = chunk__39119;
var G__40161 = count__39120;
var G__40162 = (i__39121 + (1));
seq__39118 = G__40159;
chunk__39119 = G__40160;
count__39120 = G__40161;
i__39121 = G__40162;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39118);
if(temp__5735__auto__){
var seq__39118__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39118__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__39118__$1);
var G__40163 = cljs.core.chunk_rest(seq__39118__$1);
var G__40164 = c__4591__auto__;
var G__40165 = cljs.core.count(c__4591__auto__);
var G__40166 = (0);
seq__39118 = G__40163;
chunk__39119 = G__40164;
count__39120 = G__40165;
i__39121 = G__40166;
continue;
} else {
var vec__39139 = cljs.core.first(seq__39118__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39139,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39139,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__40167 = cljs.core.next(seq__39118__$1);
var G__40168 = null;
var G__40169 = (0);
var G__40170 = (0);
seq__39118 = G__40167;
chunk__39119 = G__40168;
count__39120 = G__40169;
i__39121 = G__40170;
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
var G__39144_40171 = key;
var G__39144_40172__$1 = (((G__39144_40171 instanceof cljs.core.Keyword))?G__39144_40171.fqn:null);
switch (G__39144_40172__$1) {
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
var ks_40176 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4160__auto__ = goog.string.startsWith(ks_40176,"data-");
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return goog.string.startsWith(ks_40176,"aria-");
}
})())){
el.setAttribute(ks_40176,value);
} else {
(el[ks_40176] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__39210){
var map__39211 = p__39210;
var map__39211__$1 = cljs.core.__destructure_map(map__39211);
var props = map__39211__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39211__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__39213 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39213,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39213,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39213,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__39219 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__39219,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__39219;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__39224 = arguments.length;
switch (G__39224) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__39230){
var vec__39231 = p__39230;
var seq__39232 = cljs.core.seq(vec__39231);
var first__39233 = cljs.core.first(seq__39232);
var seq__39232__$1 = cljs.core.next(seq__39232);
var nn = first__39233;
var first__39233__$1 = cljs.core.first(seq__39232__$1);
var seq__39232__$2 = cljs.core.next(seq__39232__$1);
var np = first__39233__$1;
var nc = seq__39232__$2;
var node = vec__39231;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__39238 = nn;
var G__39239 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__39238,G__39239) : create_fn.call(null,G__39238,G__39239));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__39240 = nn;
var G__39241 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__39240,G__39241) : create_fn.call(null,G__39240,G__39241));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__39262 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39262,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39262,(1),null);
var seq__39265_40217 = cljs.core.seq(node_children);
var chunk__39266_40218 = null;
var count__39267_40219 = (0);
var i__39268_40220 = (0);
while(true){
if((i__39268_40220 < count__39267_40219)){
var child_struct_40221 = chunk__39266_40218.cljs$core$IIndexed$_nth$arity$2(null,i__39268_40220);
var children_40222 = shadow.dom.dom_node(child_struct_40221);
if(cljs.core.seq_QMARK_(children_40222)){
var seq__39286_40223 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_40222));
var chunk__39288_40224 = null;
var count__39289_40225 = (0);
var i__39290_40226 = (0);
while(true){
if((i__39290_40226 < count__39289_40225)){
var child_40227 = chunk__39288_40224.cljs$core$IIndexed$_nth$arity$2(null,i__39290_40226);
if(cljs.core.truth_(child_40227)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40227);


var G__40232 = seq__39286_40223;
var G__40233 = chunk__39288_40224;
var G__40234 = count__39289_40225;
var G__40235 = (i__39290_40226 + (1));
seq__39286_40223 = G__40232;
chunk__39288_40224 = G__40233;
count__39289_40225 = G__40234;
i__39290_40226 = G__40235;
continue;
} else {
var G__40236 = seq__39286_40223;
var G__40237 = chunk__39288_40224;
var G__40238 = count__39289_40225;
var G__40239 = (i__39290_40226 + (1));
seq__39286_40223 = G__40236;
chunk__39288_40224 = G__40237;
count__39289_40225 = G__40238;
i__39290_40226 = G__40239;
continue;
}
} else {
var temp__5735__auto___40240 = cljs.core.seq(seq__39286_40223);
if(temp__5735__auto___40240){
var seq__39286_40241__$1 = temp__5735__auto___40240;
if(cljs.core.chunked_seq_QMARK_(seq__39286_40241__$1)){
var c__4591__auto___40242 = cljs.core.chunk_first(seq__39286_40241__$1);
var G__40243 = cljs.core.chunk_rest(seq__39286_40241__$1);
var G__40244 = c__4591__auto___40242;
var G__40245 = cljs.core.count(c__4591__auto___40242);
var G__40246 = (0);
seq__39286_40223 = G__40243;
chunk__39288_40224 = G__40244;
count__39289_40225 = G__40245;
i__39290_40226 = G__40246;
continue;
} else {
var child_40247 = cljs.core.first(seq__39286_40241__$1);
if(cljs.core.truth_(child_40247)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40247);


var G__40248 = cljs.core.next(seq__39286_40241__$1);
var G__40249 = null;
var G__40250 = (0);
var G__40251 = (0);
seq__39286_40223 = G__40248;
chunk__39288_40224 = G__40249;
count__39289_40225 = G__40250;
i__39290_40226 = G__40251;
continue;
} else {
var G__40252 = cljs.core.next(seq__39286_40241__$1);
var G__40253 = null;
var G__40254 = (0);
var G__40255 = (0);
seq__39286_40223 = G__40252;
chunk__39288_40224 = G__40253;
count__39289_40225 = G__40254;
i__39290_40226 = G__40255;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_40222);
}


var G__40256 = seq__39265_40217;
var G__40257 = chunk__39266_40218;
var G__40258 = count__39267_40219;
var G__40259 = (i__39268_40220 + (1));
seq__39265_40217 = G__40256;
chunk__39266_40218 = G__40257;
count__39267_40219 = G__40258;
i__39268_40220 = G__40259;
continue;
} else {
var temp__5735__auto___40260 = cljs.core.seq(seq__39265_40217);
if(temp__5735__auto___40260){
var seq__39265_40261__$1 = temp__5735__auto___40260;
if(cljs.core.chunked_seq_QMARK_(seq__39265_40261__$1)){
var c__4591__auto___40262 = cljs.core.chunk_first(seq__39265_40261__$1);
var G__40263 = cljs.core.chunk_rest(seq__39265_40261__$1);
var G__40264 = c__4591__auto___40262;
var G__40265 = cljs.core.count(c__4591__auto___40262);
var G__40266 = (0);
seq__39265_40217 = G__40263;
chunk__39266_40218 = G__40264;
count__39267_40219 = G__40265;
i__39268_40220 = G__40266;
continue;
} else {
var child_struct_40267 = cljs.core.first(seq__39265_40261__$1);
var children_40268 = shadow.dom.dom_node(child_struct_40267);
if(cljs.core.seq_QMARK_(children_40268)){
var seq__39300_40269 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_40268));
var chunk__39302_40270 = null;
var count__39303_40271 = (0);
var i__39304_40272 = (0);
while(true){
if((i__39304_40272 < count__39303_40271)){
var child_40273 = chunk__39302_40270.cljs$core$IIndexed$_nth$arity$2(null,i__39304_40272);
if(cljs.core.truth_(child_40273)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40273);


var G__40274 = seq__39300_40269;
var G__40275 = chunk__39302_40270;
var G__40276 = count__39303_40271;
var G__40277 = (i__39304_40272 + (1));
seq__39300_40269 = G__40274;
chunk__39302_40270 = G__40275;
count__39303_40271 = G__40276;
i__39304_40272 = G__40277;
continue;
} else {
var G__40278 = seq__39300_40269;
var G__40279 = chunk__39302_40270;
var G__40280 = count__39303_40271;
var G__40281 = (i__39304_40272 + (1));
seq__39300_40269 = G__40278;
chunk__39302_40270 = G__40279;
count__39303_40271 = G__40280;
i__39304_40272 = G__40281;
continue;
}
} else {
var temp__5735__auto___40282__$1 = cljs.core.seq(seq__39300_40269);
if(temp__5735__auto___40282__$1){
var seq__39300_40283__$1 = temp__5735__auto___40282__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39300_40283__$1)){
var c__4591__auto___40284 = cljs.core.chunk_first(seq__39300_40283__$1);
var G__40285 = cljs.core.chunk_rest(seq__39300_40283__$1);
var G__40286 = c__4591__auto___40284;
var G__40287 = cljs.core.count(c__4591__auto___40284);
var G__40288 = (0);
seq__39300_40269 = G__40285;
chunk__39302_40270 = G__40286;
count__39303_40271 = G__40287;
i__39304_40272 = G__40288;
continue;
} else {
var child_40289 = cljs.core.first(seq__39300_40283__$1);
if(cljs.core.truth_(child_40289)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40289);


var G__40290 = cljs.core.next(seq__39300_40283__$1);
var G__40291 = null;
var G__40292 = (0);
var G__40293 = (0);
seq__39300_40269 = G__40290;
chunk__39302_40270 = G__40291;
count__39303_40271 = G__40292;
i__39304_40272 = G__40293;
continue;
} else {
var G__40294 = cljs.core.next(seq__39300_40283__$1);
var G__40295 = null;
var G__40296 = (0);
var G__40297 = (0);
seq__39300_40269 = G__40294;
chunk__39302_40270 = G__40295;
count__39303_40271 = G__40296;
i__39304_40272 = G__40297;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_40268);
}


var G__40298 = cljs.core.next(seq__39265_40261__$1);
var G__40299 = null;
var G__40300 = (0);
var G__40301 = (0);
seq__39265_40217 = G__40298;
chunk__39266_40218 = G__40299;
count__39267_40219 = G__40300;
i__39268_40220 = G__40301;
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
var seq__39511 = cljs.core.seq(node);
var chunk__39512 = null;
var count__39513 = (0);
var i__39514 = (0);
while(true){
if((i__39514 < count__39513)){
var n = chunk__39512.cljs$core$IIndexed$_nth$arity$2(null,i__39514);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__40303 = seq__39511;
var G__40304 = chunk__39512;
var G__40305 = count__39513;
var G__40306 = (i__39514 + (1));
seq__39511 = G__40303;
chunk__39512 = G__40304;
count__39513 = G__40305;
i__39514 = G__40306;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39511);
if(temp__5735__auto__){
var seq__39511__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39511__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__39511__$1);
var G__40307 = cljs.core.chunk_rest(seq__39511__$1);
var G__40308 = c__4591__auto__;
var G__40309 = cljs.core.count(c__4591__auto__);
var G__40310 = (0);
seq__39511 = G__40307;
chunk__39512 = G__40308;
count__39513 = G__40309;
i__39514 = G__40310;
continue;
} else {
var n = cljs.core.first(seq__39511__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__40311 = cljs.core.next(seq__39511__$1);
var G__40312 = null;
var G__40313 = (0);
var G__40314 = (0);
seq__39511 = G__40311;
chunk__39512 = G__40312;
count__39513 = G__40313;
i__39514 = G__40314;
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
var G__39521 = arguments.length;
switch (G__39521) {
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
var G__39527 = arguments.length;
switch (G__39527) {
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
var G__39547 = arguments.length;
switch (G__39547) {
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
var len__4771__auto___40320 = arguments.length;
var i__4772__auto___40322 = (0);
while(true){
if((i__4772__auto___40322 < len__4771__auto___40320)){
args__4777__auto__.push((arguments[i__4772__auto___40322]));

var G__40323 = (i__4772__auto___40322 + (1));
i__4772__auto___40322 = G__40323;
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
var seq__39563_40324 = cljs.core.seq(nodes);
var chunk__39564_40325 = null;
var count__39565_40326 = (0);
var i__39566_40327 = (0);
while(true){
if((i__39566_40327 < count__39565_40326)){
var node_40328 = chunk__39564_40325.cljs$core$IIndexed$_nth$arity$2(null,i__39566_40327);
fragment.appendChild(shadow.dom._to_dom(node_40328));


var G__40329 = seq__39563_40324;
var G__40330 = chunk__39564_40325;
var G__40331 = count__39565_40326;
var G__40332 = (i__39566_40327 + (1));
seq__39563_40324 = G__40329;
chunk__39564_40325 = G__40330;
count__39565_40326 = G__40331;
i__39566_40327 = G__40332;
continue;
} else {
var temp__5735__auto___40333 = cljs.core.seq(seq__39563_40324);
if(temp__5735__auto___40333){
var seq__39563_40334__$1 = temp__5735__auto___40333;
if(cljs.core.chunked_seq_QMARK_(seq__39563_40334__$1)){
var c__4591__auto___40335 = cljs.core.chunk_first(seq__39563_40334__$1);
var G__40336 = cljs.core.chunk_rest(seq__39563_40334__$1);
var G__40337 = c__4591__auto___40335;
var G__40338 = cljs.core.count(c__4591__auto___40335);
var G__40339 = (0);
seq__39563_40324 = G__40336;
chunk__39564_40325 = G__40337;
count__39565_40326 = G__40338;
i__39566_40327 = G__40339;
continue;
} else {
var node_40341 = cljs.core.first(seq__39563_40334__$1);
fragment.appendChild(shadow.dom._to_dom(node_40341));


var G__40343 = cljs.core.next(seq__39563_40334__$1);
var G__40344 = null;
var G__40345 = (0);
var G__40346 = (0);
seq__39563_40324 = G__40343;
chunk__39564_40325 = G__40344;
count__39565_40326 = G__40345;
i__39566_40327 = G__40346;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq39558){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39558));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__39583_40349 = cljs.core.seq(scripts);
var chunk__39584_40350 = null;
var count__39585_40351 = (0);
var i__39586_40352 = (0);
while(true){
if((i__39586_40352 < count__39585_40351)){
var vec__39608_40355 = chunk__39584_40350.cljs$core$IIndexed$_nth$arity$2(null,i__39586_40352);
var script_tag_40356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39608_40355,(0),null);
var script_body_40357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39608_40355,(1),null);
eval(script_body_40357);


var G__40358 = seq__39583_40349;
var G__40359 = chunk__39584_40350;
var G__40360 = count__39585_40351;
var G__40361 = (i__39586_40352 + (1));
seq__39583_40349 = G__40358;
chunk__39584_40350 = G__40359;
count__39585_40351 = G__40360;
i__39586_40352 = G__40361;
continue;
} else {
var temp__5735__auto___40363 = cljs.core.seq(seq__39583_40349);
if(temp__5735__auto___40363){
var seq__39583_40364__$1 = temp__5735__auto___40363;
if(cljs.core.chunked_seq_QMARK_(seq__39583_40364__$1)){
var c__4591__auto___40365 = cljs.core.chunk_first(seq__39583_40364__$1);
var G__40366 = cljs.core.chunk_rest(seq__39583_40364__$1);
var G__40367 = c__4591__auto___40365;
var G__40368 = cljs.core.count(c__4591__auto___40365);
var G__40369 = (0);
seq__39583_40349 = G__40366;
chunk__39584_40350 = G__40367;
count__39585_40351 = G__40368;
i__39586_40352 = G__40369;
continue;
} else {
var vec__39613_40370 = cljs.core.first(seq__39583_40364__$1);
var script_tag_40371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39613_40370,(0),null);
var script_body_40372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39613_40370,(1),null);
eval(script_body_40372);


var G__40373 = cljs.core.next(seq__39583_40364__$1);
var G__40374 = null;
var G__40375 = (0);
var G__40376 = (0);
seq__39583_40349 = G__40373;
chunk__39584_40350 = G__40374;
count__39585_40351 = G__40375;
i__39586_40352 = G__40376;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__39617){
var vec__39618 = p__39617;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39618,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39618,(1),null);
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
var G__39651 = arguments.length;
switch (G__39651) {
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
var seq__39710 = cljs.core.seq(style_keys);
var chunk__39711 = null;
var count__39712 = (0);
var i__39713 = (0);
while(true){
if((i__39713 < count__39712)){
var it = chunk__39711.cljs$core$IIndexed$_nth$arity$2(null,i__39713);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__40381 = seq__39710;
var G__40382 = chunk__39711;
var G__40383 = count__39712;
var G__40384 = (i__39713 + (1));
seq__39710 = G__40381;
chunk__39711 = G__40382;
count__39712 = G__40383;
i__39713 = G__40384;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39710);
if(temp__5735__auto__){
var seq__39710__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39710__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__39710__$1);
var G__40385 = cljs.core.chunk_rest(seq__39710__$1);
var G__40386 = c__4591__auto__;
var G__40387 = cljs.core.count(c__4591__auto__);
var G__40388 = (0);
seq__39710 = G__40385;
chunk__39711 = G__40386;
count__39712 = G__40387;
i__39713 = G__40388;
continue;
} else {
var it = cljs.core.first(seq__39710__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__40389 = cljs.core.next(seq__39710__$1);
var G__40390 = null;
var G__40391 = (0);
var G__40392 = (0);
seq__39710 = G__40389;
chunk__39711 = G__40390;
count__39712 = G__40391;
i__39713 = G__40392;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k39766,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__39828 = k39766;
var G__39828__$1 = (((G__39828 instanceof cljs.core.Keyword))?G__39828.fqn:null);
switch (G__39828__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k39766,else__4418__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__39831){
var vec__39833 = p__39831;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39833,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39833,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39765){
var self__ = this;
var G__39765__$1 = this;
return (new cljs.core.RecordIter((0),G__39765__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this39767,other39768){
var self__ = this;
var this39767__$1 = this;
return (((!((other39768 == null)))) && ((this39767__$1.constructor === other39768.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39767__$1.x,other39768.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39767__$1.y,other39768.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39767__$1.__extmap,other39768.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__39765){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__39864 = cljs.core.keyword_identical_QMARK_;
var expr__39865 = k__4423__auto__;
if(cljs.core.truth_((pred__39864.cljs$core$IFn$_invoke$arity$2 ? pred__39864.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__39865) : pred__39864.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__39865)))){
return (new shadow.dom.Coordinate(G__39765,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39864.cljs$core$IFn$_invoke$arity$2 ? pred__39864.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__39865) : pred__39864.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__39865)))){
return (new shadow.dom.Coordinate(self__.x,G__39765,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__39765),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__39765){
var self__ = this;
var this__4414__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__39765,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__39786){
var extmap__4454__auto__ = (function (){var G__39873 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__39786,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__39786)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__39873);
} else {
return G__39873;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__39786),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__39786),null,cljs.core.not_empty(extmap__4454__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k39876,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__39884 = k39876;
var G__39884__$1 = (((G__39884 instanceof cljs.core.Keyword))?G__39884.fqn:null);
switch (G__39884__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k39876,else__4418__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__39885){
var vec__39886 = p__39885;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39886,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39886,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39875){
var self__ = this;
var G__39875__$1 = this;
return (new cljs.core.RecordIter((0),G__39875__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this39877,other39878){
var self__ = this;
var this39877__$1 = this;
return (((!((other39878 == null)))) && ((this39877__$1.constructor === other39878.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39877__$1.w,other39878.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39877__$1.h,other39878.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39877__$1.__extmap,other39878.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__39875){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__39901 = cljs.core.keyword_identical_QMARK_;
var expr__39902 = k__4423__auto__;
if(cljs.core.truth_((pred__39901.cljs$core$IFn$_invoke$arity$2 ? pred__39901.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__39902) : pred__39901.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__39902)))){
return (new shadow.dom.Size(G__39875,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39901.cljs$core$IFn$_invoke$arity$2 ? pred__39901.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__39902) : pred__39901.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__39902)))){
return (new shadow.dom.Size(self__.w,G__39875,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__39875),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__39875){
var self__ = this;
var this__4414__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__39875,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__39879){
var extmap__4454__auto__ = (function (){var G__39909 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__39879,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__39879)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__39909);
} else {
return G__39909;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__39879),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__39879),null,cljs.core.not_empty(extmap__4454__auto__),null));
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
var G__40430 = (i + (1));
var G__40431 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__40430;
ret = G__40431;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__39928){
var vec__39929 = p__39928;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39929,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39929,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__39937 = arguments.length;
switch (G__39937) {
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
var G__40445 = ps;
var G__40446 = (i + (1));
el__$1 = G__40445;
i = G__40446;
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
var vec__39956 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39956,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39956,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39956,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__39960_40464 = cljs.core.seq(props);
var chunk__39961_40465 = null;
var count__39962_40466 = (0);
var i__39963_40467 = (0);
while(true){
if((i__39963_40467 < count__39962_40466)){
var vec__39970_40468 = chunk__39961_40465.cljs$core$IIndexed$_nth$arity$2(null,i__39963_40467);
var k_40469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39970_40468,(0),null);
var v_40470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39970_40468,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_40469);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_40469),v_40470);


var G__40471 = seq__39960_40464;
var G__40472 = chunk__39961_40465;
var G__40473 = count__39962_40466;
var G__40474 = (i__39963_40467 + (1));
seq__39960_40464 = G__40471;
chunk__39961_40465 = G__40472;
count__39962_40466 = G__40473;
i__39963_40467 = G__40474;
continue;
} else {
var temp__5735__auto___40475 = cljs.core.seq(seq__39960_40464);
if(temp__5735__auto___40475){
var seq__39960_40476__$1 = temp__5735__auto___40475;
if(cljs.core.chunked_seq_QMARK_(seq__39960_40476__$1)){
var c__4591__auto___40477 = cljs.core.chunk_first(seq__39960_40476__$1);
var G__40478 = cljs.core.chunk_rest(seq__39960_40476__$1);
var G__40479 = c__4591__auto___40477;
var G__40480 = cljs.core.count(c__4591__auto___40477);
var G__40481 = (0);
seq__39960_40464 = G__40478;
chunk__39961_40465 = G__40479;
count__39962_40466 = G__40480;
i__39963_40467 = G__40481;
continue;
} else {
var vec__39973_40483 = cljs.core.first(seq__39960_40476__$1);
var k_40484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39973_40483,(0),null);
var v_40485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39973_40483,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_40484);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_40484),v_40485);


var G__40490 = cljs.core.next(seq__39960_40476__$1);
var G__40491 = null;
var G__40492 = (0);
var G__40493 = (0);
seq__39960_40464 = G__40490;
chunk__39961_40465 = G__40491;
count__39962_40466 = G__40492;
i__39963_40467 = G__40493;
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
var vec__39985 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39985,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39985,(1),null);
var seq__39988_40498 = cljs.core.seq(node_children);
var chunk__39990_40499 = null;
var count__39991_40500 = (0);
var i__39992_40501 = (0);
while(true){
if((i__39992_40501 < count__39991_40500)){
var child_struct_40502 = chunk__39990_40499.cljs$core$IIndexed$_nth$arity$2(null,i__39992_40501);
if((!((child_struct_40502 == null)))){
if(typeof child_struct_40502 === 'string'){
var text_40503 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_40503),child_struct_40502].join(''));
} else {
var children_40504 = shadow.dom.svg_node(child_struct_40502);
if(cljs.core.seq_QMARK_(children_40504)){
var seq__40016_40505 = cljs.core.seq(children_40504);
var chunk__40018_40506 = null;
var count__40019_40507 = (0);
var i__40020_40508 = (0);
while(true){
if((i__40020_40508 < count__40019_40507)){
var child_40509 = chunk__40018_40506.cljs$core$IIndexed$_nth$arity$2(null,i__40020_40508);
if(cljs.core.truth_(child_40509)){
node.appendChild(child_40509);


var G__40510 = seq__40016_40505;
var G__40511 = chunk__40018_40506;
var G__40512 = count__40019_40507;
var G__40513 = (i__40020_40508 + (1));
seq__40016_40505 = G__40510;
chunk__40018_40506 = G__40511;
count__40019_40507 = G__40512;
i__40020_40508 = G__40513;
continue;
} else {
var G__40515 = seq__40016_40505;
var G__40516 = chunk__40018_40506;
var G__40517 = count__40019_40507;
var G__40518 = (i__40020_40508 + (1));
seq__40016_40505 = G__40515;
chunk__40018_40506 = G__40516;
count__40019_40507 = G__40517;
i__40020_40508 = G__40518;
continue;
}
} else {
var temp__5735__auto___40520 = cljs.core.seq(seq__40016_40505);
if(temp__5735__auto___40520){
var seq__40016_40521__$1 = temp__5735__auto___40520;
if(cljs.core.chunked_seq_QMARK_(seq__40016_40521__$1)){
var c__4591__auto___40522 = cljs.core.chunk_first(seq__40016_40521__$1);
var G__40523 = cljs.core.chunk_rest(seq__40016_40521__$1);
var G__40524 = c__4591__auto___40522;
var G__40525 = cljs.core.count(c__4591__auto___40522);
var G__40526 = (0);
seq__40016_40505 = G__40523;
chunk__40018_40506 = G__40524;
count__40019_40507 = G__40525;
i__40020_40508 = G__40526;
continue;
} else {
var child_40527 = cljs.core.first(seq__40016_40521__$1);
if(cljs.core.truth_(child_40527)){
node.appendChild(child_40527);


var G__40528 = cljs.core.next(seq__40016_40521__$1);
var G__40529 = null;
var G__40530 = (0);
var G__40531 = (0);
seq__40016_40505 = G__40528;
chunk__40018_40506 = G__40529;
count__40019_40507 = G__40530;
i__40020_40508 = G__40531;
continue;
} else {
var G__40532 = cljs.core.next(seq__40016_40521__$1);
var G__40533 = null;
var G__40534 = (0);
var G__40535 = (0);
seq__40016_40505 = G__40532;
chunk__40018_40506 = G__40533;
count__40019_40507 = G__40534;
i__40020_40508 = G__40535;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_40504);
}
}


var G__40536 = seq__39988_40498;
var G__40537 = chunk__39990_40499;
var G__40538 = count__39991_40500;
var G__40539 = (i__39992_40501 + (1));
seq__39988_40498 = G__40536;
chunk__39990_40499 = G__40537;
count__39991_40500 = G__40538;
i__39992_40501 = G__40539;
continue;
} else {
var G__40540 = seq__39988_40498;
var G__40541 = chunk__39990_40499;
var G__40542 = count__39991_40500;
var G__40543 = (i__39992_40501 + (1));
seq__39988_40498 = G__40540;
chunk__39990_40499 = G__40541;
count__39991_40500 = G__40542;
i__39992_40501 = G__40543;
continue;
}
} else {
var temp__5735__auto___40544 = cljs.core.seq(seq__39988_40498);
if(temp__5735__auto___40544){
var seq__39988_40545__$1 = temp__5735__auto___40544;
if(cljs.core.chunked_seq_QMARK_(seq__39988_40545__$1)){
var c__4591__auto___40546 = cljs.core.chunk_first(seq__39988_40545__$1);
var G__40547 = cljs.core.chunk_rest(seq__39988_40545__$1);
var G__40548 = c__4591__auto___40546;
var G__40549 = cljs.core.count(c__4591__auto___40546);
var G__40550 = (0);
seq__39988_40498 = G__40547;
chunk__39990_40499 = G__40548;
count__39991_40500 = G__40549;
i__39992_40501 = G__40550;
continue;
} else {
var child_struct_40551 = cljs.core.first(seq__39988_40545__$1);
if((!((child_struct_40551 == null)))){
if(typeof child_struct_40551 === 'string'){
var text_40552 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_40552),child_struct_40551].join(''));
} else {
var children_40553 = shadow.dom.svg_node(child_struct_40551);
if(cljs.core.seq_QMARK_(children_40553)){
var seq__40025_40555 = cljs.core.seq(children_40553);
var chunk__40027_40556 = null;
var count__40028_40557 = (0);
var i__40029_40558 = (0);
while(true){
if((i__40029_40558 < count__40028_40557)){
var child_40560 = chunk__40027_40556.cljs$core$IIndexed$_nth$arity$2(null,i__40029_40558);
if(cljs.core.truth_(child_40560)){
node.appendChild(child_40560);


var G__40561 = seq__40025_40555;
var G__40562 = chunk__40027_40556;
var G__40563 = count__40028_40557;
var G__40564 = (i__40029_40558 + (1));
seq__40025_40555 = G__40561;
chunk__40027_40556 = G__40562;
count__40028_40557 = G__40563;
i__40029_40558 = G__40564;
continue;
} else {
var G__40565 = seq__40025_40555;
var G__40566 = chunk__40027_40556;
var G__40567 = count__40028_40557;
var G__40568 = (i__40029_40558 + (1));
seq__40025_40555 = G__40565;
chunk__40027_40556 = G__40566;
count__40028_40557 = G__40567;
i__40029_40558 = G__40568;
continue;
}
} else {
var temp__5735__auto___40569__$1 = cljs.core.seq(seq__40025_40555);
if(temp__5735__auto___40569__$1){
var seq__40025_40570__$1 = temp__5735__auto___40569__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40025_40570__$1)){
var c__4591__auto___40571 = cljs.core.chunk_first(seq__40025_40570__$1);
var G__40572 = cljs.core.chunk_rest(seq__40025_40570__$1);
var G__40573 = c__4591__auto___40571;
var G__40574 = cljs.core.count(c__4591__auto___40571);
var G__40575 = (0);
seq__40025_40555 = G__40572;
chunk__40027_40556 = G__40573;
count__40028_40557 = G__40574;
i__40029_40558 = G__40575;
continue;
} else {
var child_40576 = cljs.core.first(seq__40025_40570__$1);
if(cljs.core.truth_(child_40576)){
node.appendChild(child_40576);


var G__40577 = cljs.core.next(seq__40025_40570__$1);
var G__40578 = null;
var G__40579 = (0);
var G__40580 = (0);
seq__40025_40555 = G__40577;
chunk__40027_40556 = G__40578;
count__40028_40557 = G__40579;
i__40029_40558 = G__40580;
continue;
} else {
var G__40581 = cljs.core.next(seq__40025_40570__$1);
var G__40582 = null;
var G__40583 = (0);
var G__40584 = (0);
seq__40025_40555 = G__40581;
chunk__40027_40556 = G__40582;
count__40028_40557 = G__40583;
i__40029_40558 = G__40584;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_40553);
}
}


var G__40585 = cljs.core.next(seq__39988_40545__$1);
var G__40586 = null;
var G__40587 = (0);
var G__40588 = (0);
seq__39988_40498 = G__40585;
chunk__39990_40499 = G__40586;
count__39991_40500 = G__40587;
i__39992_40501 = G__40588;
continue;
} else {
var G__40589 = cljs.core.next(seq__39988_40545__$1);
var G__40590 = null;
var G__40591 = (0);
var G__40592 = (0);
seq__39988_40498 = G__40589;
chunk__39990_40499 = G__40590;
count__39991_40500 = G__40591;
i__39992_40501 = G__40592;
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
var len__4771__auto___40595 = arguments.length;
var i__4772__auto___40597 = (0);
while(true){
if((i__4772__auto___40597 < len__4771__auto___40595)){
args__4777__auto__.push((arguments[i__4772__auto___40597]));

var G__40598 = (i__4772__auto___40597 + (1));
i__4772__auto___40597 = G__40598;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq40037){
var G__40038 = cljs.core.first(seq40037);
var seq40037__$1 = cljs.core.next(seq40037);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40038,seq40037__$1);
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
var G__40048 = arguments.length;
switch (G__40048) {
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
var c__36420__auto___40602 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36421__auto__ = (function (){var switch__36221__auto__ = (function (state_40071){
var state_val_40072 = (state_40071[(1)]);
if((state_val_40072 === (1))){
var state_40071__$1 = state_40071;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40071__$1,(2),once_or_cleanup);
} else {
if((state_val_40072 === (2))){
var inst_40065 = (state_40071[(2)]);
var inst_40069 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_40071__$1 = (function (){var statearr_40075 = state_40071;
(statearr_40075[(7)] = inst_40065);

return statearr_40075;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40071__$1,inst_40069);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__36222__auto__ = null;
var shadow$dom$state_machine__36222__auto____0 = (function (){
var statearr_40077 = [null,null,null,null,null,null,null,null];
(statearr_40077[(0)] = shadow$dom$state_machine__36222__auto__);

(statearr_40077[(1)] = (1));

return statearr_40077;
});
var shadow$dom$state_machine__36222__auto____1 = (function (state_40071){
while(true){
var ret_value__36223__auto__ = (function (){try{while(true){
var result__36224__auto__ = switch__36221__auto__(state_40071);
if(cljs.core.keyword_identical_QMARK_(result__36224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36224__auto__;
}
break;
}
}catch (e40078){var ex__36225__auto__ = e40078;
var statearr_40079_40636 = state_40071;
(statearr_40079_40636[(2)] = ex__36225__auto__);


if(cljs.core.seq((state_40071[(4)]))){
var statearr_40080_40637 = state_40071;
(statearr_40080_40637[(1)] = cljs.core.first((state_40071[(4)])));

} else {
throw ex__36225__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40639 = state_40071;
state_40071 = G__40639;
continue;
} else {
return ret_value__36223__auto__;
}
break;
}
});
shadow$dom$state_machine__36222__auto__ = function(state_40071){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__36222__auto____0.call(this);
case 1:
return shadow$dom$state_machine__36222__auto____1.call(this,state_40071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__36222__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__36222__auto____0;
shadow$dom$state_machine__36222__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__36222__auto____1;
return shadow$dom$state_machine__36222__auto__;
})()
})();
var state__36422__auto__ = (function (){var statearr_40089 = f__36421__auto__();
(statearr_40089[(6)] = c__36420__auto___40602);

return statearr_40089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36422__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
