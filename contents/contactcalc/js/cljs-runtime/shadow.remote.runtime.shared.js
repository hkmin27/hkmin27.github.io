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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__36997,res){
var map__37000 = p__36997;
var map__37000__$1 = cljs.core.__destructure_map(map__37000);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37000__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37000__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__37002 = res;
var G__37002__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37002,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__37002);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37002__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__37002__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__37031 = arguments.length;
switch (G__37031) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__37041,msg,handlers,timeout_after_ms){
var map__37042 = p__37041;
var map__37042__$1 = cljs.core.__destructure_map(map__37042);
var runtime = map__37042__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37042__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___37253 = arguments.length;
var i__4772__auto___37254 = (0);
while(true){
if((i__4772__auto___37254 < len__4771__auto___37253)){
args__4777__auto__.push((arguments[i__4772__auto___37254]));

var G__37255 = (i__4772__auto___37254 + (1));
i__4772__auto___37254 = G__37255;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((2) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4778__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__37048,ev,args){
var map__37049 = p__37048;
var map__37049__$1 = cljs.core.__destructure_map(map__37049);
var runtime = map__37049__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37049__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__37050 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__37053 = null;
var count__37054 = (0);
var i__37055 = (0);
while(true){
if((i__37055 < count__37054)){
var ext = chunk__37053.cljs$core$IIndexed$_nth$arity$2(null,i__37055);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__37261 = seq__37050;
var G__37262 = chunk__37053;
var G__37263 = count__37054;
var G__37264 = (i__37055 + (1));
seq__37050 = G__37261;
chunk__37053 = G__37262;
count__37054 = G__37263;
i__37055 = G__37264;
continue;
} else {
var G__37265 = seq__37050;
var G__37266 = chunk__37053;
var G__37267 = count__37054;
var G__37268 = (i__37055 + (1));
seq__37050 = G__37265;
chunk__37053 = G__37266;
count__37054 = G__37267;
i__37055 = G__37268;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37050);
if(temp__5735__auto__){
var seq__37050__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37050__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__37050__$1);
var G__37271 = cljs.core.chunk_rest(seq__37050__$1);
var G__37272 = c__4591__auto__;
var G__37273 = cljs.core.count(c__4591__auto__);
var G__37274 = (0);
seq__37050 = G__37271;
chunk__37053 = G__37272;
count__37054 = G__37273;
i__37055 = G__37274;
continue;
} else {
var ext = cljs.core.first(seq__37050__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__37277 = cljs.core.next(seq__37050__$1);
var G__37278 = null;
var G__37279 = (0);
var G__37280 = (0);
seq__37050 = G__37277;
chunk__37053 = G__37278;
count__37054 = G__37279;
i__37055 = G__37280;
continue;
} else {
var G__37281 = cljs.core.next(seq__37050__$1);
var G__37282 = null;
var G__37283 = (0);
var G__37284 = (0);
seq__37050 = G__37281;
chunk__37053 = G__37282;
count__37054 = G__37283;
i__37055 = G__37284;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq37045){
var G__37046 = cljs.core.first(seq37045);
var seq37045__$1 = cljs.core.next(seq37045);
var G__37047 = cljs.core.first(seq37045__$1);
var seq37045__$2 = cljs.core.next(seq37045__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37046,G__37047,seq37045__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__37094,p__37095){
var map__37097 = p__37094;
var map__37097__$1 = cljs.core.__destructure_map(map__37097);
var runtime = map__37097__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37097__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__37098 = p__37095;
var map__37098__$1 = cljs.core.__destructure_map(map__37098);
var msg = map__37098__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37098__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__37102 = cljs.core.deref(state_ref);
var map__37102__$1 = cljs.core.__destructure_map(map__37102);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37102__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37102__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__37106){
var map__37108 = p__37106;
var map__37108__$1 = cljs.core.__destructure_map(map__37108);
var runtime = map__37108__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37108__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4160__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__37112,msg){
var map__37115 = p__37112;
var map__37115__$1 = cljs.core.__destructure_map(map__37115);
var runtime = map__37115__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37115__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__37125,key,p__37126){
var map__37127 = p__37125;
var map__37127__$1 = cljs.core.__destructure_map(map__37127);
var state = map__37127__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37127__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__37128 = p__37126;
var map__37128__$1 = cljs.core.__destructure_map(map__37128);
var spec = map__37128__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37128__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__37135,key,spec){
var map__37136 = p__37135;
var map__37136__$1 = cljs.core.__destructure_map(map__37136);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37136__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__37137_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__37137_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__37138_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__37138_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__37139_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__37139_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__37140_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__37140_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__37141_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__37141_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__37165,key){
var map__37167 = p__37165;
var map__37167__$1 = cljs.core.__destructure_map(map__37167);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37167__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__37173,msg){
var map__37175 = p__37173;
var map__37175__$1 = cljs.core.__destructure_map(map__37175);
var runtime = map__37175__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37175__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__37179,p__37180){
var map__37183 = p__37179;
var map__37183__$1 = cljs.core.__destructure_map(map__37183);
var runtime = map__37183__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37183__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__37184 = p__37180;
var map__37184__$1 = cljs.core.__destructure_map(map__37184);
var msg = map__37184__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37184__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37184__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__37201 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__37203 = null;
var count__37204 = (0);
var i__37205 = (0);
while(true){
if((i__37205 < count__37204)){
var map__37215 = chunk__37203.cljs$core$IIndexed$_nth$arity$2(null,i__37205);
var map__37215__$1 = cljs.core.__destructure_map(map__37215);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37215__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__37300 = seq__37201;
var G__37301 = chunk__37203;
var G__37302 = count__37204;
var G__37303 = (i__37205 + (1));
seq__37201 = G__37300;
chunk__37203 = G__37301;
count__37204 = G__37302;
i__37205 = G__37303;
continue;
} else {
var G__37304 = seq__37201;
var G__37305 = chunk__37203;
var G__37306 = count__37204;
var G__37307 = (i__37205 + (1));
seq__37201 = G__37304;
chunk__37203 = G__37305;
count__37204 = G__37306;
i__37205 = G__37307;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37201);
if(temp__5735__auto__){
var seq__37201__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37201__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__37201__$1);
var G__37308 = cljs.core.chunk_rest(seq__37201__$1);
var G__37309 = c__4591__auto__;
var G__37310 = cljs.core.count(c__4591__auto__);
var G__37311 = (0);
seq__37201 = G__37308;
chunk__37203 = G__37309;
count__37204 = G__37310;
i__37205 = G__37311;
continue;
} else {
var map__37216 = cljs.core.first(seq__37201__$1);
var map__37216__$1 = cljs.core.__destructure_map(map__37216);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37216__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__37312 = cljs.core.next(seq__37201__$1);
var G__37313 = null;
var G__37314 = (0);
var G__37315 = (0);
seq__37201 = G__37312;
chunk__37203 = G__37313;
count__37204 = G__37314;
i__37205 = G__37315;
continue;
} else {
var G__37316 = cljs.core.next(seq__37201__$1);
var G__37317 = null;
var G__37318 = (0);
var G__37319 = (0);
seq__37201 = G__37316;
chunk__37203 = G__37317;
count__37204 = G__37318;
i__37205 = G__37319;
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
