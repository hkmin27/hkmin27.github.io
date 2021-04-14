goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__40100,p__40101){
var map__40103 = p__40100;
var map__40103__$1 = cljs.core.__destructure_map(map__40103);
var svc = map__40103__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40103__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40103__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40103__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__40104 = p__40101;
var map__40104__$1 = cljs.core.__destructure_map(map__40104);
var msg = map__40104__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40104__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40104__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40104__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40104__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__40119,p__40120){
var map__40121 = p__40119;
var map__40121__$1 = cljs.core.__destructure_map(map__40121);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40121__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__40122 = p__40120;
var map__40122__$1 = cljs.core.__destructure_map(map__40122);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40122__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__40132,p__40133){
var map__40134 = p__40132;
var map__40134__$1 = cljs.core.__destructure_map(map__40134);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40134__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40134__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__40135 = p__40133;
var map__40135__$1 = cljs.core.__destructure_map(map__40135);
var msg = map__40135__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40135__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__40137,tid){
var map__40138 = p__40137;
var map__40138__$1 = cljs.core.__destructure_map(map__40138);
var svc = map__40138__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40138__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__40181 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__40182 = null;
var count__40183 = (0);
var i__40184 = (0);
while(true){
if((i__40184 < count__40183)){
var vec__40193 = chunk__40182.cljs$core$IIndexed$_nth$arity$2(null,i__40184);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40193,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40193,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__40205 = seq__40181;
var G__40206 = chunk__40182;
var G__40207 = count__40183;
var G__40208 = (i__40184 + (1));
seq__40181 = G__40205;
chunk__40182 = G__40206;
count__40183 = G__40207;
i__40184 = G__40208;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40181);
if(temp__5735__auto__){
var seq__40181__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40181__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__40181__$1);
var G__40209 = cljs.core.chunk_rest(seq__40181__$1);
var G__40210 = c__4591__auto__;
var G__40211 = cljs.core.count(c__4591__auto__);
var G__40212 = (0);
seq__40181 = G__40209;
chunk__40182 = G__40210;
count__40183 = G__40211;
i__40184 = G__40212;
continue;
} else {
var vec__40196 = cljs.core.first(seq__40181__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40196,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40196,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__40213 = cljs.core.next(seq__40181__$1);
var G__40214 = null;
var G__40215 = (0);
var G__40216 = (0);
seq__40181 = G__40213;
chunk__40182 = G__40214;
count__40183 = G__40215;
i__40184 = G__40216;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__40174_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__40174_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__40177_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__40177_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__40179_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__40179_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__40180_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__40180_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__40199){
var map__40200 = p__40199;
var map__40200__$1 = cljs.core.__destructure_map(map__40200);
var svc = map__40200__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40200__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40200__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
