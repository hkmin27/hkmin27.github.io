goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__36543,res){
var map__36544 = p__36543;
var map__36544__$1 = cljs.core.__destructure_map(map__36544);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36544__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36544__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__36545 = res;
var G__36545__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36545,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__36545);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36545__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__36545__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__36548 = arguments.length;
switch (G__36548) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__36551,msg,handlers,timeout_after_ms){
var map__36552 = p__36551;
var map__36552__$1 = cljs.core.__destructure_map(map__36552);
var runtime = map__36552__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36552__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___36716 = arguments.length;
var i__4772__auto___36717 = (0);
while(true){
if((i__4772__auto___36717 < len__4771__auto___36716)){
args__4777__auto__.push((arguments[i__4772__auto___36717]));

var G__36718 = (i__4772__auto___36717 + (1));
i__4772__auto___36717 = G__36718;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((2) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4778__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__36557,ev,args){
var map__36558 = p__36557;
var map__36558__$1 = cljs.core.__destructure_map(map__36558);
var runtime = map__36558__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36558__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__36559 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__36562 = null;
var count__36563 = (0);
var i__36564 = (0);
while(true){
if((i__36564 < count__36563)){
var ext = chunk__36562.cljs$core$IIndexed$_nth$arity$2(null,i__36564);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__36720 = seq__36559;
var G__36721 = chunk__36562;
var G__36722 = count__36563;
var G__36723 = (i__36564 + (1));
seq__36559 = G__36720;
chunk__36562 = G__36721;
count__36563 = G__36722;
i__36564 = G__36723;
continue;
} else {
var G__36724 = seq__36559;
var G__36725 = chunk__36562;
var G__36726 = count__36563;
var G__36727 = (i__36564 + (1));
seq__36559 = G__36724;
chunk__36562 = G__36725;
count__36563 = G__36726;
i__36564 = G__36727;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36559);
if(temp__5735__auto__){
var seq__36559__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36559__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__36559__$1);
var G__36729 = cljs.core.chunk_rest(seq__36559__$1);
var G__36730 = c__4591__auto__;
var G__36731 = cljs.core.count(c__4591__auto__);
var G__36732 = (0);
seq__36559 = G__36729;
chunk__36562 = G__36730;
count__36563 = G__36731;
i__36564 = G__36732;
continue;
} else {
var ext = cljs.core.first(seq__36559__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__36734 = cljs.core.next(seq__36559__$1);
var G__36735 = null;
var G__36736 = (0);
var G__36737 = (0);
seq__36559 = G__36734;
chunk__36562 = G__36735;
count__36563 = G__36736;
i__36564 = G__36737;
continue;
} else {
var G__36738 = cljs.core.next(seq__36559__$1);
var G__36739 = null;
var G__36740 = (0);
var G__36741 = (0);
seq__36559 = G__36738;
chunk__36562 = G__36739;
count__36563 = G__36740;
i__36564 = G__36741;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq36554){
var G__36555 = cljs.core.first(seq36554);
var seq36554__$1 = cljs.core.next(seq36554);
var G__36556 = cljs.core.first(seq36554__$1);
var seq36554__$2 = cljs.core.next(seq36554__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36555,G__36556,seq36554__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__36573,p__36574){
var map__36578 = p__36573;
var map__36578__$1 = cljs.core.__destructure_map(map__36578);
var runtime = map__36578__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36578__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__36580 = p__36574;
var map__36580__$1 = cljs.core.__destructure_map(map__36580);
var msg = map__36580__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36580__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__36597 = cljs.core.deref(state_ref);
var map__36597__$1 = cljs.core.__destructure_map(map__36597);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36597__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36597__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__36599){
var map__36600 = p__36599;
var map__36600__$1 = cljs.core.__destructure_map(map__36600);
var runtime = map__36600__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36600__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4160__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__36602,msg){
var map__36603 = p__36602;
var map__36603__$1 = cljs.core.__destructure_map(map__36603);
var runtime = map__36603__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36603__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__36605,key,p__36606){
var map__36608 = p__36605;
var map__36608__$1 = cljs.core.__destructure_map(map__36608);
var state = map__36608__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36608__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__36609 = p__36606;
var map__36609__$1 = cljs.core.__destructure_map(map__36609);
var spec = map__36609__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36609__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__36612,key,spec){
var map__36613 = p__36612;
var map__36613__$1 = cljs.core.__destructure_map(map__36613);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36613__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__36614_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__36614_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__36615_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__36615_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__36616_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__36616_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__36617_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__36617_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__36618_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__36618_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__36630,key){
var map__36631 = p__36630;
var map__36631__$1 = cljs.core.__destructure_map(map__36631);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36631__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__36636,msg){
var map__36637 = p__36636;
var map__36637__$1 = cljs.core.__destructure_map(map__36637);
var runtime = map__36637__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36637__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__36640,p__36641){
var map__36642 = p__36640;
var map__36642__$1 = cljs.core.__destructure_map(map__36642);
var runtime = map__36642__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36642__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__36645 = p__36641;
var map__36645__$1 = cljs.core.__destructure_map(map__36645);
var msg = map__36645__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36645__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36645__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__36657 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__36659 = null;
var count__36660 = (0);
var i__36661 = (0);
while(true){
if((i__36661 < count__36660)){
var map__36670 = chunk__36659.cljs$core$IIndexed$_nth$arity$2(null,i__36661);
var map__36670__$1 = cljs.core.__destructure_map(map__36670);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36670__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__36765 = seq__36657;
var G__36766 = chunk__36659;
var G__36767 = count__36660;
var G__36768 = (i__36661 + (1));
seq__36657 = G__36765;
chunk__36659 = G__36766;
count__36660 = G__36767;
i__36661 = G__36768;
continue;
} else {
var G__36770 = seq__36657;
var G__36771 = chunk__36659;
var G__36772 = count__36660;
var G__36773 = (i__36661 + (1));
seq__36657 = G__36770;
chunk__36659 = G__36771;
count__36660 = G__36772;
i__36661 = G__36773;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36657);
if(temp__5735__auto__){
var seq__36657__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36657__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__36657__$1);
var G__36774 = cljs.core.chunk_rest(seq__36657__$1);
var G__36775 = c__4591__auto__;
var G__36776 = cljs.core.count(c__4591__auto__);
var G__36777 = (0);
seq__36657 = G__36774;
chunk__36659 = G__36775;
count__36660 = G__36776;
i__36661 = G__36777;
continue;
} else {
var map__36679 = cljs.core.first(seq__36657__$1);
var map__36679__$1 = cljs.core.__destructure_map(map__36679);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36679__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__36780 = cljs.core.next(seq__36657__$1);
var G__36781 = null;
var G__36782 = (0);
var G__36783 = (0);
seq__36657 = G__36780;
chunk__36659 = G__36781;
count__36660 = G__36782;
i__36661 = G__36783;
continue;
} else {
var G__36784 = cljs.core.next(seq__36657__$1);
var G__36785 = null;
var G__36786 = (0);
var G__36787 = (0);
seq__36657 = G__36784;
chunk__36659 = G__36785;
count__36660 = G__36786;
i__36661 = G__36787;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
