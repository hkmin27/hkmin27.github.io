goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__40827,p__40828){
var map__40829 = p__40827;
var map__40829__$1 = cljs.core.__destructure_map(map__40829);
var svc = map__40829__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40829__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40829__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40829__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__40830 = p__40828;
var map__40830__$1 = cljs.core.__destructure_map(map__40830);
var msg = map__40830__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40830__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40830__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40830__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40830__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__40838,p__40839){
var map__40840 = p__40838;
var map__40840__$1 = cljs.core.__destructure_map(map__40840);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40840__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__40841 = p__40839;
var map__40841__$1 = cljs.core.__destructure_map(map__40841);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40841__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__40843,p__40844){
var map__40847 = p__40843;
var map__40847__$1 = cljs.core.__destructure_map(map__40847);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40847__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40847__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__40848 = p__40844;
var map__40848__$1 = cljs.core.__destructure_map(map__40848);
var msg = map__40848__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40848__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__40856,tid){
var map__40857 = p__40856;
var map__40857__$1 = cljs.core.__destructure_map(map__40857);
var svc = map__40857__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40857__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__40871 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__40872 = null;
var count__40873 = (0);
var i__40874 = (0);
while(true){
if((i__40874 < count__40873)){
var vec__40885 = chunk__40872.cljs$core$IIndexed$_nth$arity$2(null,i__40874);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40885,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40885,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__40930 = seq__40871;
var G__40931 = chunk__40872;
var G__40932 = count__40873;
var G__40933 = (i__40874 + (1));
seq__40871 = G__40930;
chunk__40872 = G__40931;
count__40873 = G__40932;
i__40874 = G__40933;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40871);
if(temp__5735__auto__){
var seq__40871__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40871__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__40871__$1);
var G__40934 = cljs.core.chunk_rest(seq__40871__$1);
var G__40935 = c__4591__auto__;
var G__40936 = cljs.core.count(c__4591__auto__);
var G__40937 = (0);
seq__40871 = G__40934;
chunk__40872 = G__40935;
count__40873 = G__40936;
i__40874 = G__40937;
continue;
} else {
var vec__40889 = cljs.core.first(seq__40871__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40889,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40889,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__40938 = cljs.core.next(seq__40871__$1);
var G__40939 = null;
var G__40940 = (0);
var G__40941 = (0);
seq__40871 = G__40938;
chunk__40872 = G__40939;
count__40873 = G__40940;
i__40874 = G__40941;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__40858_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__40858_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__40859_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__40859_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__40860_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__40860_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__40861_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__40861_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__40892){
var map__40893 = p__40892;
var map__40893__$1 = cljs.core.__destructure_map(map__40893);
var svc = map__40893__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40893__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40893__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
