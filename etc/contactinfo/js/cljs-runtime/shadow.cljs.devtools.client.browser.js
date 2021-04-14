goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4777__auto__ = [];
var len__4771__auto___41742 = arguments.length;
var i__4772__auto___41743 = (0);
while(true){
if((i__4772__auto___41743 < len__4771__auto___41742)){
args__4777__auto__.push((arguments[i__4772__auto___41743]));

var G__41744 = (i__4772__auto___41743 + (1));
i__4772__auto___41743 = G__41744;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq41477){
var G__41478 = cljs.core.first(seq41477);
var seq41477__$1 = cljs.core.next(seq41477);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41478,seq41477__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__41491 = cljs.core.seq(sources);
var chunk__41500 = null;
var count__41501 = (0);
var i__41502 = (0);
while(true){
if((i__41502 < count__41501)){
var map__41511 = chunk__41500.cljs$core$IIndexed$_nth$arity$2(null,i__41502);
var map__41511__$1 = cljs.core.__destructure_map(map__41511);
var src = map__41511__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41511__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41511__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41511__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41511__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e41513){var e_41745 = e41513;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_41745);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_41745.message)].join('')));
}

var G__41746 = seq__41491;
var G__41747 = chunk__41500;
var G__41748 = count__41501;
var G__41749 = (i__41502 + (1));
seq__41491 = G__41746;
chunk__41500 = G__41747;
count__41501 = G__41748;
i__41502 = G__41749;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41491);
if(temp__5735__auto__){
var seq__41491__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41491__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__41491__$1);
var G__41751 = cljs.core.chunk_rest(seq__41491__$1);
var G__41752 = c__4591__auto__;
var G__41753 = cljs.core.count(c__4591__auto__);
var G__41754 = (0);
seq__41491 = G__41751;
chunk__41500 = G__41752;
count__41501 = G__41753;
i__41502 = G__41754;
continue;
} else {
var map__41517 = cljs.core.first(seq__41491__$1);
var map__41517__$1 = cljs.core.__destructure_map(map__41517);
var src = map__41517__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41517__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41517__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41517__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41517__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e41518){var e_41755 = e41518;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_41755);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_41755.message)].join('')));
}

var G__41756 = cljs.core.next(seq__41491__$1);
var G__41757 = null;
var G__41758 = (0);
var G__41759 = (0);
seq__41491 = G__41756;
chunk__41500 = G__41757;
count__41501 = G__41758;
i__41502 = G__41759;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__41525 = cljs.core.seq(js_requires);
var chunk__41527 = null;
var count__41528 = (0);
var i__41529 = (0);
while(true){
if((i__41529 < count__41528)){
var js_ns = chunk__41527.cljs$core$IIndexed$_nth$arity$2(null,i__41529);
var require_str_41765 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_41765);


var G__41766 = seq__41525;
var G__41767 = chunk__41527;
var G__41768 = count__41528;
var G__41769 = (i__41529 + (1));
seq__41525 = G__41766;
chunk__41527 = G__41767;
count__41528 = G__41768;
i__41529 = G__41769;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41525);
if(temp__5735__auto__){
var seq__41525__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41525__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__41525__$1);
var G__41770 = cljs.core.chunk_rest(seq__41525__$1);
var G__41771 = c__4591__auto__;
var G__41772 = cljs.core.count(c__4591__auto__);
var G__41773 = (0);
seq__41525 = G__41770;
chunk__41527 = G__41771;
count__41528 = G__41772;
i__41529 = G__41773;
continue;
} else {
var js_ns = cljs.core.first(seq__41525__$1);
var require_str_41774 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_41774);


var G__41775 = cljs.core.next(seq__41525__$1);
var G__41776 = null;
var G__41777 = (0);
var G__41778 = (0);
seq__41525 = G__41775;
chunk__41527 = G__41776;
count__41528 = G__41777;
i__41529 = G__41778;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__41536){
var map__41537 = p__41536;
var map__41537__$1 = cljs.core.__destructure_map(map__41537);
var msg = map__41537__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41537__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41537__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4564__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41540(s__41541){
return (new cljs.core.LazySeq(null,(function (){
var s__41541__$1 = s__41541;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41541__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__41547 = cljs.core.first(xs__6292__auto__);
var map__41547__$1 = cljs.core.__destructure_map(map__41547);
var src = map__41547__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41547__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41547__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4560__auto__ = ((function (s__41541__$1,map__41547,map__41547__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__41537,map__41537__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41540_$_iter__41542(s__41543){
return (new cljs.core.LazySeq(null,((function (s__41541__$1,map__41547,map__41547__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__41537,map__41537__$1,msg,info,reload_info){
return (function (){
var s__41543__$1 = s__41543;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__41543__$1);
if(temp__5735__auto____$1){
var s__41543__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__41543__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__41543__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__41545 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__41544 = (0);
while(true){
if((i__41544 < size__4563__auto__)){
var warning = cljs.core._nth(c__4562__auto__,i__41544);
cljs.core.chunk_append(b__41545,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__41779 = (i__41544 + (1));
i__41544 = G__41779;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41545),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41540_$_iter__41542(cljs.core.chunk_rest(s__41543__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41545),null);
}
} else {
var warning = cljs.core.first(s__41543__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41540_$_iter__41542(cljs.core.rest(s__41543__$2)));
}
} else {
return null;
}
break;
}
});})(s__41541__$1,map__41547,map__41547__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__41537,map__41537__$1,msg,info,reload_info))
,null,null));
});})(s__41541__$1,map__41547,map__41547__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__41537,map__41537__$1,msg,info,reload_info))
;
var fs__4561__auto__ = cljs.core.seq(iterys__4560__auto__(warnings));
if(fs__4561__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4561__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41540(cljs.core.rest(s__41541__$1)));
} else {
var G__41780 = cljs.core.rest(s__41541__$1);
s__41541__$1 = G__41780;
continue;
}
} else {
var G__41781 = cljs.core.rest(s__41541__$1);
s__41541__$1 = G__41781;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__41549_41782 = cljs.core.seq(warnings);
var chunk__41550_41783 = null;
var count__41551_41784 = (0);
var i__41552_41785 = (0);
while(true){
if((i__41552_41785 < count__41551_41784)){
var map__41591_41786 = chunk__41550_41783.cljs$core$IIndexed$_nth$arity$2(null,i__41552_41785);
var map__41591_41787__$1 = cljs.core.__destructure_map(map__41591_41786);
var w_41788 = map__41591_41787__$1;
var msg_41789__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41591_41787__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_41790 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41591_41787__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_41791 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41591_41787__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_41792 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41591_41787__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_41792)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_41790),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_41791),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_41789__$1)].join(''));


var G__41793 = seq__41549_41782;
var G__41794 = chunk__41550_41783;
var G__41795 = count__41551_41784;
var G__41796 = (i__41552_41785 + (1));
seq__41549_41782 = G__41793;
chunk__41550_41783 = G__41794;
count__41551_41784 = G__41795;
i__41552_41785 = G__41796;
continue;
} else {
var temp__5735__auto___41797 = cljs.core.seq(seq__41549_41782);
if(temp__5735__auto___41797){
var seq__41549_41798__$1 = temp__5735__auto___41797;
if(cljs.core.chunked_seq_QMARK_(seq__41549_41798__$1)){
var c__4591__auto___41799 = cljs.core.chunk_first(seq__41549_41798__$1);
var G__41800 = cljs.core.chunk_rest(seq__41549_41798__$1);
var G__41801 = c__4591__auto___41799;
var G__41802 = cljs.core.count(c__4591__auto___41799);
var G__41803 = (0);
seq__41549_41782 = G__41800;
chunk__41550_41783 = G__41801;
count__41551_41784 = G__41802;
i__41552_41785 = G__41803;
continue;
} else {
var map__41594_41804 = cljs.core.first(seq__41549_41798__$1);
var map__41594_41805__$1 = cljs.core.__destructure_map(map__41594_41804);
var w_41806 = map__41594_41805__$1;
var msg_41807__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41594_41805__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_41808 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41594_41805__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_41809 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41594_41805__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_41810 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41594_41805__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_41810)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_41808),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_41809),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_41807__$1)].join(''));


var G__41811 = cljs.core.next(seq__41549_41798__$1);
var G__41812 = null;
var G__41813 = (0);
var G__41814 = (0);
seq__41549_41782 = G__41811;
chunk__41550_41783 = G__41812;
count__41551_41784 = G__41813;
i__41552_41785 = G__41814;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__41535_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__41535_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__41620){
var map__41624 = p__41620;
var map__41624__$1 = cljs.core.__destructure_map(map__41624);
var msg = map__41624__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41624__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__41625 = cljs.core.seq(updates);
var chunk__41636 = null;
var count__41637 = (0);
var i__41638 = (0);
while(true){
if((i__41638 < count__41637)){
var path = chunk__41636.cljs$core$IIndexed$_nth$arity$2(null,i__41638);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__41670_41816 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__41674_41817 = null;
var count__41675_41818 = (0);
var i__41676_41819 = (0);
while(true){
if((i__41676_41819 < count__41675_41818)){
var node_41820 = chunk__41674_41817.cljs$core$IIndexed$_nth$arity$2(null,i__41676_41819);
if(cljs.core.not(node_41820.shadow$old)){
var path_match_41821 = shadow.cljs.devtools.client.browser.match_paths(node_41820.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41821)){
var new_link_41822 = (function (){var G__41684 = node_41820.cloneNode(true);
G__41684.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41821),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41684;
})();
(node_41820.shadow$old = true);

(new_link_41822.onload = ((function (seq__41670_41816,chunk__41674_41817,count__41675_41818,i__41676_41819,seq__41625,chunk__41636,count__41637,i__41638,new_link_41822,path_match_41821,node_41820,path,map__41624,map__41624__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_41820);
});})(seq__41670_41816,chunk__41674_41817,count__41675_41818,i__41676_41819,seq__41625,chunk__41636,count__41637,i__41638,new_link_41822,path_match_41821,node_41820,path,map__41624,map__41624__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41821], 0));

goog.dom.insertSiblingAfter(new_link_41822,node_41820);


var G__41824 = seq__41670_41816;
var G__41825 = chunk__41674_41817;
var G__41826 = count__41675_41818;
var G__41827 = (i__41676_41819 + (1));
seq__41670_41816 = G__41824;
chunk__41674_41817 = G__41825;
count__41675_41818 = G__41826;
i__41676_41819 = G__41827;
continue;
} else {
var G__41828 = seq__41670_41816;
var G__41829 = chunk__41674_41817;
var G__41830 = count__41675_41818;
var G__41831 = (i__41676_41819 + (1));
seq__41670_41816 = G__41828;
chunk__41674_41817 = G__41829;
count__41675_41818 = G__41830;
i__41676_41819 = G__41831;
continue;
}
} else {
var G__41832 = seq__41670_41816;
var G__41833 = chunk__41674_41817;
var G__41834 = count__41675_41818;
var G__41835 = (i__41676_41819 + (1));
seq__41670_41816 = G__41832;
chunk__41674_41817 = G__41833;
count__41675_41818 = G__41834;
i__41676_41819 = G__41835;
continue;
}
} else {
var temp__5735__auto___41836 = cljs.core.seq(seq__41670_41816);
if(temp__5735__auto___41836){
var seq__41670_41837__$1 = temp__5735__auto___41836;
if(cljs.core.chunked_seq_QMARK_(seq__41670_41837__$1)){
var c__4591__auto___41838 = cljs.core.chunk_first(seq__41670_41837__$1);
var G__41839 = cljs.core.chunk_rest(seq__41670_41837__$1);
var G__41840 = c__4591__auto___41838;
var G__41841 = cljs.core.count(c__4591__auto___41838);
var G__41842 = (0);
seq__41670_41816 = G__41839;
chunk__41674_41817 = G__41840;
count__41675_41818 = G__41841;
i__41676_41819 = G__41842;
continue;
} else {
var node_41843 = cljs.core.first(seq__41670_41837__$1);
if(cljs.core.not(node_41843.shadow$old)){
var path_match_41844 = shadow.cljs.devtools.client.browser.match_paths(node_41843.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41844)){
var new_link_41845 = (function (){var G__41685 = node_41843.cloneNode(true);
G__41685.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41844),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41685;
})();
(node_41843.shadow$old = true);

(new_link_41845.onload = ((function (seq__41670_41816,chunk__41674_41817,count__41675_41818,i__41676_41819,seq__41625,chunk__41636,count__41637,i__41638,new_link_41845,path_match_41844,node_41843,seq__41670_41837__$1,temp__5735__auto___41836,path,map__41624,map__41624__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_41843);
});})(seq__41670_41816,chunk__41674_41817,count__41675_41818,i__41676_41819,seq__41625,chunk__41636,count__41637,i__41638,new_link_41845,path_match_41844,node_41843,seq__41670_41837__$1,temp__5735__auto___41836,path,map__41624,map__41624__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41844], 0));

goog.dom.insertSiblingAfter(new_link_41845,node_41843);


var G__41847 = cljs.core.next(seq__41670_41837__$1);
var G__41848 = null;
var G__41849 = (0);
var G__41850 = (0);
seq__41670_41816 = G__41847;
chunk__41674_41817 = G__41848;
count__41675_41818 = G__41849;
i__41676_41819 = G__41850;
continue;
} else {
var G__41851 = cljs.core.next(seq__41670_41837__$1);
var G__41852 = null;
var G__41853 = (0);
var G__41854 = (0);
seq__41670_41816 = G__41851;
chunk__41674_41817 = G__41852;
count__41675_41818 = G__41853;
i__41676_41819 = G__41854;
continue;
}
} else {
var G__41855 = cljs.core.next(seq__41670_41837__$1);
var G__41856 = null;
var G__41857 = (0);
var G__41858 = (0);
seq__41670_41816 = G__41855;
chunk__41674_41817 = G__41856;
count__41675_41818 = G__41857;
i__41676_41819 = G__41858;
continue;
}
}
} else {
}
}
break;
}


var G__41859 = seq__41625;
var G__41860 = chunk__41636;
var G__41861 = count__41637;
var G__41862 = (i__41638 + (1));
seq__41625 = G__41859;
chunk__41636 = G__41860;
count__41637 = G__41861;
i__41638 = G__41862;
continue;
} else {
var G__41863 = seq__41625;
var G__41864 = chunk__41636;
var G__41865 = count__41637;
var G__41866 = (i__41638 + (1));
seq__41625 = G__41863;
chunk__41636 = G__41864;
count__41637 = G__41865;
i__41638 = G__41866;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41625);
if(temp__5735__auto__){
var seq__41625__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41625__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__41625__$1);
var G__41867 = cljs.core.chunk_rest(seq__41625__$1);
var G__41868 = c__4591__auto__;
var G__41869 = cljs.core.count(c__4591__auto__);
var G__41870 = (0);
seq__41625 = G__41867;
chunk__41636 = G__41868;
count__41637 = G__41869;
i__41638 = G__41870;
continue;
} else {
var path = cljs.core.first(seq__41625__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__41689_41872 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__41693_41873 = null;
var count__41694_41874 = (0);
var i__41695_41875 = (0);
while(true){
if((i__41695_41875 < count__41694_41874)){
var node_41876 = chunk__41693_41873.cljs$core$IIndexed$_nth$arity$2(null,i__41695_41875);
if(cljs.core.not(node_41876.shadow$old)){
var path_match_41877 = shadow.cljs.devtools.client.browser.match_paths(node_41876.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41877)){
var new_link_41878 = (function (){var G__41703 = node_41876.cloneNode(true);
G__41703.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41877),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41703;
})();
(node_41876.shadow$old = true);

(new_link_41878.onload = ((function (seq__41689_41872,chunk__41693_41873,count__41694_41874,i__41695_41875,seq__41625,chunk__41636,count__41637,i__41638,new_link_41878,path_match_41877,node_41876,path,seq__41625__$1,temp__5735__auto__,map__41624,map__41624__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_41876);
});})(seq__41689_41872,chunk__41693_41873,count__41694_41874,i__41695_41875,seq__41625,chunk__41636,count__41637,i__41638,new_link_41878,path_match_41877,node_41876,path,seq__41625__$1,temp__5735__auto__,map__41624,map__41624__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41877], 0));

goog.dom.insertSiblingAfter(new_link_41878,node_41876);


var G__41879 = seq__41689_41872;
var G__41880 = chunk__41693_41873;
var G__41881 = count__41694_41874;
var G__41882 = (i__41695_41875 + (1));
seq__41689_41872 = G__41879;
chunk__41693_41873 = G__41880;
count__41694_41874 = G__41881;
i__41695_41875 = G__41882;
continue;
} else {
var G__41883 = seq__41689_41872;
var G__41884 = chunk__41693_41873;
var G__41885 = count__41694_41874;
var G__41886 = (i__41695_41875 + (1));
seq__41689_41872 = G__41883;
chunk__41693_41873 = G__41884;
count__41694_41874 = G__41885;
i__41695_41875 = G__41886;
continue;
}
} else {
var G__41887 = seq__41689_41872;
var G__41888 = chunk__41693_41873;
var G__41889 = count__41694_41874;
var G__41890 = (i__41695_41875 + (1));
seq__41689_41872 = G__41887;
chunk__41693_41873 = G__41888;
count__41694_41874 = G__41889;
i__41695_41875 = G__41890;
continue;
}
} else {
var temp__5735__auto___41891__$1 = cljs.core.seq(seq__41689_41872);
if(temp__5735__auto___41891__$1){
var seq__41689_41892__$1 = temp__5735__auto___41891__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41689_41892__$1)){
var c__4591__auto___41893 = cljs.core.chunk_first(seq__41689_41892__$1);
var G__41894 = cljs.core.chunk_rest(seq__41689_41892__$1);
var G__41895 = c__4591__auto___41893;
var G__41896 = cljs.core.count(c__4591__auto___41893);
var G__41897 = (0);
seq__41689_41872 = G__41894;
chunk__41693_41873 = G__41895;
count__41694_41874 = G__41896;
i__41695_41875 = G__41897;
continue;
} else {
var node_41899 = cljs.core.first(seq__41689_41892__$1);
if(cljs.core.not(node_41899.shadow$old)){
var path_match_41900 = shadow.cljs.devtools.client.browser.match_paths(node_41899.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41900)){
var new_link_41901 = (function (){var G__41705 = node_41899.cloneNode(true);
G__41705.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41900),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41705;
})();
(node_41899.shadow$old = true);

(new_link_41901.onload = ((function (seq__41689_41872,chunk__41693_41873,count__41694_41874,i__41695_41875,seq__41625,chunk__41636,count__41637,i__41638,new_link_41901,path_match_41900,node_41899,seq__41689_41892__$1,temp__5735__auto___41891__$1,path,seq__41625__$1,temp__5735__auto__,map__41624,map__41624__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_41899);
});})(seq__41689_41872,chunk__41693_41873,count__41694_41874,i__41695_41875,seq__41625,chunk__41636,count__41637,i__41638,new_link_41901,path_match_41900,node_41899,seq__41689_41892__$1,temp__5735__auto___41891__$1,path,seq__41625__$1,temp__5735__auto__,map__41624,map__41624__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41900], 0));

goog.dom.insertSiblingAfter(new_link_41901,node_41899);


var G__41902 = cljs.core.next(seq__41689_41892__$1);
var G__41903 = null;
var G__41904 = (0);
var G__41905 = (0);
seq__41689_41872 = G__41902;
chunk__41693_41873 = G__41903;
count__41694_41874 = G__41904;
i__41695_41875 = G__41905;
continue;
} else {
var G__41906 = cljs.core.next(seq__41689_41892__$1);
var G__41907 = null;
var G__41908 = (0);
var G__41909 = (0);
seq__41689_41872 = G__41906;
chunk__41693_41873 = G__41907;
count__41694_41874 = G__41908;
i__41695_41875 = G__41909;
continue;
}
} else {
var G__41910 = cljs.core.next(seq__41689_41892__$1);
var G__41911 = null;
var G__41912 = (0);
var G__41913 = (0);
seq__41689_41872 = G__41910;
chunk__41693_41873 = G__41911;
count__41694_41874 = G__41912;
i__41695_41875 = G__41913;
continue;
}
}
} else {
}
}
break;
}


var G__41914 = cljs.core.next(seq__41625__$1);
var G__41915 = null;
var G__41916 = (0);
var G__41917 = (0);
seq__41625 = G__41914;
chunk__41636 = G__41915;
count__41637 = G__41916;
i__41638 = G__41917;
continue;
} else {
var G__41918 = cljs.core.next(seq__41625__$1);
var G__41919 = null;
var G__41920 = (0);
var G__41921 = (0);
seq__41625 = G__41918;
chunk__41636 = G__41919;
count__41637 = G__41920;
i__41638 = G__41921;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__41706){
var map__41707 = p__41706;
var map__41707__$1 = cljs.core.__destructure_map(map__41707);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41707__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__41712){
var map__41713 = p__41712;
var map__41713__$1 = cljs.core.__destructure_map(map__41713);
var _ = map__41713__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41713__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__41718,done,error){
var map__41719 = p__41718;
var map__41719__$1 = cljs.core.__destructure_map(map__41719);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41719__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__41720,done,error){
var map__41721 = p__41720;
var map__41721__$1 = cljs.core.__destructure_map(map__41721);
var msg = map__41721__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41721__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41721__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41721__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__41722){
var map__41723 = p__41722;
var map__41723__$1 = cljs.core.__destructure_map(map__41723);
var src = map__41723__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41723__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4149__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4149__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__41725 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__41725) : done.call(null,G__41725));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__41726){
var map__41727 = p__41726;
var map__41727__$1 = cljs.core.__destructure_map(map__41727);
var msg__$1 = map__41727__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41727__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e41729){var ex = e41729;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__41730){
var map__41731 = p__41730;
var map__41731__$1 = cljs.core.__destructure_map(map__41731);
var env = map__41731__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41731__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__41732){
var map__41733 = p__41732;
var map__41733__$1 = cljs.core.__destructure_map(map__41733);
var msg = map__41733__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41733__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__41735){
var map__41736 = p__41735;
var map__41736__$1 = cljs.core.__destructure_map(map__41736);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41736__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41736__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__41740){
var map__41741 = p__41740;
var map__41741__$1 = cljs.core.__destructure_map(map__41741);
var svc = map__41741__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41741__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
