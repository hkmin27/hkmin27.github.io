goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4777__auto__ = [];
var len__4771__auto___41876 = arguments.length;
var i__4772__auto___41877 = (0);
while(true){
if((i__4772__auto___41877 < len__4771__auto___41876)){
args__4777__auto__.push((arguments[i__4772__auto___41877]));

var G__41878 = (i__4772__auto___41877 + (1));
i__4772__auto___41877 = G__41878;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq41688){
var G__41689 = cljs.core.first(seq41688);
var seq41688__$1 = cljs.core.next(seq41688);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41689,seq41688__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__41690 = cljs.core.seq(sources);
var chunk__41691 = null;
var count__41692 = (0);
var i__41693 = (0);
while(true){
if((i__41693 < count__41692)){
var map__41700 = chunk__41691.cljs$core$IIndexed$_nth$arity$2(null,i__41693);
var map__41700__$1 = cljs.core.__destructure_map(map__41700);
var src = map__41700__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41700__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41700__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41700__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41700__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e41701){var e_41879 = e41701;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_41879);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_41879.message)].join('')));
}

var G__41880 = seq__41690;
var G__41881 = chunk__41691;
var G__41882 = count__41692;
var G__41883 = (i__41693 + (1));
seq__41690 = G__41880;
chunk__41691 = G__41881;
count__41692 = G__41882;
i__41693 = G__41883;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41690);
if(temp__5735__auto__){
var seq__41690__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41690__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__41690__$1);
var G__41884 = cljs.core.chunk_rest(seq__41690__$1);
var G__41885 = c__4591__auto__;
var G__41886 = cljs.core.count(c__4591__auto__);
var G__41887 = (0);
seq__41690 = G__41884;
chunk__41691 = G__41885;
count__41692 = G__41886;
i__41693 = G__41887;
continue;
} else {
var map__41702 = cljs.core.first(seq__41690__$1);
var map__41702__$1 = cljs.core.__destructure_map(map__41702);
var src = map__41702__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41702__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41702__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41702__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41702__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e41703){var e_41888 = e41703;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_41888);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_41888.message)].join('')));
}

var G__41889 = cljs.core.next(seq__41690__$1);
var G__41890 = null;
var G__41891 = (0);
var G__41892 = (0);
seq__41690 = G__41889;
chunk__41691 = G__41890;
count__41692 = G__41891;
i__41693 = G__41892;
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
var seq__41708 = cljs.core.seq(js_requires);
var chunk__41709 = null;
var count__41710 = (0);
var i__41711 = (0);
while(true){
if((i__41711 < count__41710)){
var js_ns = chunk__41709.cljs$core$IIndexed$_nth$arity$2(null,i__41711);
var require_str_41893 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_41893);


var G__41894 = seq__41708;
var G__41895 = chunk__41709;
var G__41896 = count__41710;
var G__41897 = (i__41711 + (1));
seq__41708 = G__41894;
chunk__41709 = G__41895;
count__41710 = G__41896;
i__41711 = G__41897;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41708);
if(temp__5735__auto__){
var seq__41708__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41708__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__41708__$1);
var G__41898 = cljs.core.chunk_rest(seq__41708__$1);
var G__41899 = c__4591__auto__;
var G__41900 = cljs.core.count(c__4591__auto__);
var G__41901 = (0);
seq__41708 = G__41898;
chunk__41709 = G__41899;
count__41710 = G__41900;
i__41711 = G__41901;
continue;
} else {
var js_ns = cljs.core.first(seq__41708__$1);
var require_str_41902 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_41902);


var G__41903 = cljs.core.next(seq__41708__$1);
var G__41904 = null;
var G__41905 = (0);
var G__41906 = (0);
seq__41708 = G__41903;
chunk__41709 = G__41904;
count__41710 = G__41905;
i__41711 = G__41906;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__41715){
var map__41716 = p__41715;
var map__41716__$1 = cljs.core.__destructure_map(map__41716);
var msg = map__41716__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41716__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41716__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4564__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41717(s__41718){
return (new cljs.core.LazySeq(null,(function (){
var s__41718__$1 = s__41718;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41718__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__41723 = cljs.core.first(xs__6292__auto__);
var map__41723__$1 = cljs.core.__destructure_map(map__41723);
var src = map__41723__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41723__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41723__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4560__auto__ = ((function (s__41718__$1,map__41723,map__41723__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__41716,map__41716__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41717_$_iter__41719(s__41720){
return (new cljs.core.LazySeq(null,((function (s__41718__$1,map__41723,map__41723__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__41716,map__41716__$1,msg,info,reload_info){
return (function (){
var s__41720__$1 = s__41720;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__41720__$1);
if(temp__5735__auto____$1){
var s__41720__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__41720__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__41720__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__41722 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__41721 = (0);
while(true){
if((i__41721 < size__4563__auto__)){
var warning = cljs.core._nth(c__4562__auto__,i__41721);
cljs.core.chunk_append(b__41722,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__41911 = (i__41721 + (1));
i__41721 = G__41911;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41722),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41717_$_iter__41719(cljs.core.chunk_rest(s__41720__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41722),null);
}
} else {
var warning = cljs.core.first(s__41720__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41717_$_iter__41719(cljs.core.rest(s__41720__$2)));
}
} else {
return null;
}
break;
}
});})(s__41718__$1,map__41723,map__41723__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__41716,map__41716__$1,msg,info,reload_info))
,null,null));
});})(s__41718__$1,map__41723,map__41723__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__41716,map__41716__$1,msg,info,reload_info))
;
var fs__4561__auto__ = cljs.core.seq(iterys__4560__auto__(warnings));
if(fs__4561__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4561__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41717(cljs.core.rest(s__41718__$1)));
} else {
var G__41912 = cljs.core.rest(s__41718__$1);
s__41718__$1 = G__41912;
continue;
}
} else {
var G__41913 = cljs.core.rest(s__41718__$1);
s__41718__$1 = G__41913;
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
var seq__41724_41914 = cljs.core.seq(warnings);
var chunk__41725_41915 = null;
var count__41726_41916 = (0);
var i__41727_41917 = (0);
while(true){
if((i__41727_41917 < count__41726_41916)){
var map__41730_41918 = chunk__41725_41915.cljs$core$IIndexed$_nth$arity$2(null,i__41727_41917);
var map__41730_41919__$1 = cljs.core.__destructure_map(map__41730_41918);
var w_41920 = map__41730_41919__$1;
var msg_41921__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41730_41919__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_41922 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41730_41919__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_41923 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41730_41919__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_41924 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41730_41919__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_41924)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_41922),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_41923),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_41921__$1)].join(''));


var G__41925 = seq__41724_41914;
var G__41926 = chunk__41725_41915;
var G__41927 = count__41726_41916;
var G__41928 = (i__41727_41917 + (1));
seq__41724_41914 = G__41925;
chunk__41725_41915 = G__41926;
count__41726_41916 = G__41927;
i__41727_41917 = G__41928;
continue;
} else {
var temp__5735__auto___41929 = cljs.core.seq(seq__41724_41914);
if(temp__5735__auto___41929){
var seq__41724_41930__$1 = temp__5735__auto___41929;
if(cljs.core.chunked_seq_QMARK_(seq__41724_41930__$1)){
var c__4591__auto___41931 = cljs.core.chunk_first(seq__41724_41930__$1);
var G__41932 = cljs.core.chunk_rest(seq__41724_41930__$1);
var G__41933 = c__4591__auto___41931;
var G__41934 = cljs.core.count(c__4591__auto___41931);
var G__41935 = (0);
seq__41724_41914 = G__41932;
chunk__41725_41915 = G__41933;
count__41726_41916 = G__41934;
i__41727_41917 = G__41935;
continue;
} else {
var map__41731_41936 = cljs.core.first(seq__41724_41930__$1);
var map__41731_41937__$1 = cljs.core.__destructure_map(map__41731_41936);
var w_41938 = map__41731_41937__$1;
var msg_41939__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41731_41937__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_41940 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41731_41937__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_41941 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41731_41937__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_41942 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41731_41937__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_41942)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_41940),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_41941),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_41939__$1)].join(''));


var G__41943 = cljs.core.next(seq__41724_41930__$1);
var G__41944 = null;
var G__41945 = (0);
var G__41946 = (0);
seq__41724_41914 = G__41943;
chunk__41725_41915 = G__41944;
count__41726_41916 = G__41945;
i__41727_41917 = G__41946;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__41714_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__41714_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__41735){
var map__41736 = p__41735;
var map__41736__$1 = cljs.core.__destructure_map(map__41736);
var msg = map__41736__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41736__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__41737 = cljs.core.seq(updates);
var chunk__41745 = null;
var count__41746 = (0);
var i__41747 = (0);
while(true){
if((i__41747 < count__41746)){
var path = chunk__41745.cljs$core$IIndexed$_nth$arity$2(null,i__41747);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__41796_41951 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__41800_41952 = null;
var count__41801_41953 = (0);
var i__41802_41954 = (0);
while(true){
if((i__41802_41954 < count__41801_41953)){
var node_41955 = chunk__41800_41952.cljs$core$IIndexed$_nth$arity$2(null,i__41802_41954);
if(cljs.core.not(node_41955.shadow$old)){
var path_match_41956 = shadow.cljs.devtools.client.browser.match_paths(node_41955.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41956)){
var new_link_41957 = (function (){var G__41814 = node_41955.cloneNode(true);
G__41814.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41956),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41814;
})();
(node_41955.shadow$old = true);

(new_link_41957.onload = ((function (seq__41796_41951,chunk__41800_41952,count__41801_41953,i__41802_41954,seq__41737,chunk__41745,count__41746,i__41747,new_link_41957,path_match_41956,node_41955,path,map__41736,map__41736__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_41955);
});})(seq__41796_41951,chunk__41800_41952,count__41801_41953,i__41802_41954,seq__41737,chunk__41745,count__41746,i__41747,new_link_41957,path_match_41956,node_41955,path,map__41736,map__41736__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41956], 0));

goog.dom.insertSiblingAfter(new_link_41957,node_41955);


var G__41960 = seq__41796_41951;
var G__41961 = chunk__41800_41952;
var G__41962 = count__41801_41953;
var G__41963 = (i__41802_41954 + (1));
seq__41796_41951 = G__41960;
chunk__41800_41952 = G__41961;
count__41801_41953 = G__41962;
i__41802_41954 = G__41963;
continue;
} else {
var G__41965 = seq__41796_41951;
var G__41966 = chunk__41800_41952;
var G__41967 = count__41801_41953;
var G__41968 = (i__41802_41954 + (1));
seq__41796_41951 = G__41965;
chunk__41800_41952 = G__41966;
count__41801_41953 = G__41967;
i__41802_41954 = G__41968;
continue;
}
} else {
var G__41969 = seq__41796_41951;
var G__41970 = chunk__41800_41952;
var G__41971 = count__41801_41953;
var G__41972 = (i__41802_41954 + (1));
seq__41796_41951 = G__41969;
chunk__41800_41952 = G__41970;
count__41801_41953 = G__41971;
i__41802_41954 = G__41972;
continue;
}
} else {
var temp__5735__auto___41973 = cljs.core.seq(seq__41796_41951);
if(temp__5735__auto___41973){
var seq__41796_41974__$1 = temp__5735__auto___41973;
if(cljs.core.chunked_seq_QMARK_(seq__41796_41974__$1)){
var c__4591__auto___41975 = cljs.core.chunk_first(seq__41796_41974__$1);
var G__41976 = cljs.core.chunk_rest(seq__41796_41974__$1);
var G__41977 = c__4591__auto___41975;
var G__41978 = cljs.core.count(c__4591__auto___41975);
var G__41979 = (0);
seq__41796_41951 = G__41976;
chunk__41800_41952 = G__41977;
count__41801_41953 = G__41978;
i__41802_41954 = G__41979;
continue;
} else {
var node_41981 = cljs.core.first(seq__41796_41974__$1);
if(cljs.core.not(node_41981.shadow$old)){
var path_match_41982 = shadow.cljs.devtools.client.browser.match_paths(node_41981.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41982)){
var new_link_41983 = (function (){var G__41819 = node_41981.cloneNode(true);
G__41819.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41982),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41819;
})();
(node_41981.shadow$old = true);

(new_link_41983.onload = ((function (seq__41796_41951,chunk__41800_41952,count__41801_41953,i__41802_41954,seq__41737,chunk__41745,count__41746,i__41747,new_link_41983,path_match_41982,node_41981,seq__41796_41974__$1,temp__5735__auto___41973,path,map__41736,map__41736__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_41981);
});})(seq__41796_41951,chunk__41800_41952,count__41801_41953,i__41802_41954,seq__41737,chunk__41745,count__41746,i__41747,new_link_41983,path_match_41982,node_41981,seq__41796_41974__$1,temp__5735__auto___41973,path,map__41736,map__41736__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41982], 0));

goog.dom.insertSiblingAfter(new_link_41983,node_41981);


var G__41984 = cljs.core.next(seq__41796_41974__$1);
var G__41985 = null;
var G__41986 = (0);
var G__41987 = (0);
seq__41796_41951 = G__41984;
chunk__41800_41952 = G__41985;
count__41801_41953 = G__41986;
i__41802_41954 = G__41987;
continue;
} else {
var G__41989 = cljs.core.next(seq__41796_41974__$1);
var G__41990 = null;
var G__41991 = (0);
var G__41992 = (0);
seq__41796_41951 = G__41989;
chunk__41800_41952 = G__41990;
count__41801_41953 = G__41991;
i__41802_41954 = G__41992;
continue;
}
} else {
var G__41993 = cljs.core.next(seq__41796_41974__$1);
var G__41994 = null;
var G__41995 = (0);
var G__41996 = (0);
seq__41796_41951 = G__41993;
chunk__41800_41952 = G__41994;
count__41801_41953 = G__41995;
i__41802_41954 = G__41996;
continue;
}
}
} else {
}
}
break;
}


var G__41997 = seq__41737;
var G__41998 = chunk__41745;
var G__41999 = count__41746;
var G__42000 = (i__41747 + (1));
seq__41737 = G__41997;
chunk__41745 = G__41998;
count__41746 = G__41999;
i__41747 = G__42000;
continue;
} else {
var G__42002 = seq__41737;
var G__42003 = chunk__41745;
var G__42004 = count__41746;
var G__42005 = (i__41747 + (1));
seq__41737 = G__42002;
chunk__41745 = G__42003;
count__41746 = G__42004;
i__41747 = G__42005;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41737);
if(temp__5735__auto__){
var seq__41737__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41737__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__41737__$1);
var G__42006 = cljs.core.chunk_rest(seq__41737__$1);
var G__42007 = c__4591__auto__;
var G__42008 = cljs.core.count(c__4591__auto__);
var G__42009 = (0);
seq__41737 = G__42006;
chunk__41745 = G__42007;
count__41746 = G__42008;
i__41747 = G__42009;
continue;
} else {
var path = cljs.core.first(seq__41737__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__41820_42010 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__41824_42011 = null;
var count__41825_42012 = (0);
var i__41826_42013 = (0);
while(true){
if((i__41826_42013 < count__41825_42012)){
var node_42014 = chunk__41824_42011.cljs$core$IIndexed$_nth$arity$2(null,i__41826_42013);
if(cljs.core.not(node_42014.shadow$old)){
var path_match_42015 = shadow.cljs.devtools.client.browser.match_paths(node_42014.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42015)){
var new_link_42018 = (function (){var G__41835 = node_42014.cloneNode(true);
G__41835.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42015),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41835;
})();
(node_42014.shadow$old = true);

(new_link_42018.onload = ((function (seq__41820_42010,chunk__41824_42011,count__41825_42012,i__41826_42013,seq__41737,chunk__41745,count__41746,i__41747,new_link_42018,path_match_42015,node_42014,path,seq__41737__$1,temp__5735__auto__,map__41736,map__41736__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_42014);
});})(seq__41820_42010,chunk__41824_42011,count__41825_42012,i__41826_42013,seq__41737,chunk__41745,count__41746,i__41747,new_link_42018,path_match_42015,node_42014,path,seq__41737__$1,temp__5735__auto__,map__41736,map__41736__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42015], 0));

goog.dom.insertSiblingAfter(new_link_42018,node_42014);


var G__42020 = seq__41820_42010;
var G__42021 = chunk__41824_42011;
var G__42022 = count__41825_42012;
var G__42023 = (i__41826_42013 + (1));
seq__41820_42010 = G__42020;
chunk__41824_42011 = G__42021;
count__41825_42012 = G__42022;
i__41826_42013 = G__42023;
continue;
} else {
var G__42024 = seq__41820_42010;
var G__42025 = chunk__41824_42011;
var G__42026 = count__41825_42012;
var G__42027 = (i__41826_42013 + (1));
seq__41820_42010 = G__42024;
chunk__41824_42011 = G__42025;
count__41825_42012 = G__42026;
i__41826_42013 = G__42027;
continue;
}
} else {
var G__42028 = seq__41820_42010;
var G__42029 = chunk__41824_42011;
var G__42030 = count__41825_42012;
var G__42031 = (i__41826_42013 + (1));
seq__41820_42010 = G__42028;
chunk__41824_42011 = G__42029;
count__41825_42012 = G__42030;
i__41826_42013 = G__42031;
continue;
}
} else {
var temp__5735__auto___42034__$1 = cljs.core.seq(seq__41820_42010);
if(temp__5735__auto___42034__$1){
var seq__41820_42035__$1 = temp__5735__auto___42034__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41820_42035__$1)){
var c__4591__auto___42037 = cljs.core.chunk_first(seq__41820_42035__$1);
var G__42038 = cljs.core.chunk_rest(seq__41820_42035__$1);
var G__42039 = c__4591__auto___42037;
var G__42040 = cljs.core.count(c__4591__auto___42037);
var G__42041 = (0);
seq__41820_42010 = G__42038;
chunk__41824_42011 = G__42039;
count__41825_42012 = G__42040;
i__41826_42013 = G__42041;
continue;
} else {
var node_42042 = cljs.core.first(seq__41820_42035__$1);
if(cljs.core.not(node_42042.shadow$old)){
var path_match_42043 = shadow.cljs.devtools.client.browser.match_paths(node_42042.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42043)){
var new_link_42044 = (function (){var G__41836 = node_42042.cloneNode(true);
G__41836.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42043),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41836;
})();
(node_42042.shadow$old = true);

(new_link_42044.onload = ((function (seq__41820_42010,chunk__41824_42011,count__41825_42012,i__41826_42013,seq__41737,chunk__41745,count__41746,i__41747,new_link_42044,path_match_42043,node_42042,seq__41820_42035__$1,temp__5735__auto___42034__$1,path,seq__41737__$1,temp__5735__auto__,map__41736,map__41736__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_42042);
});})(seq__41820_42010,chunk__41824_42011,count__41825_42012,i__41826_42013,seq__41737,chunk__41745,count__41746,i__41747,new_link_42044,path_match_42043,node_42042,seq__41820_42035__$1,temp__5735__auto___42034__$1,path,seq__41737__$1,temp__5735__auto__,map__41736,map__41736__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42043], 0));

goog.dom.insertSiblingAfter(new_link_42044,node_42042);


var G__42045 = cljs.core.next(seq__41820_42035__$1);
var G__42046 = null;
var G__42047 = (0);
var G__42048 = (0);
seq__41820_42010 = G__42045;
chunk__41824_42011 = G__42046;
count__41825_42012 = G__42047;
i__41826_42013 = G__42048;
continue;
} else {
var G__42049 = cljs.core.next(seq__41820_42035__$1);
var G__42050 = null;
var G__42051 = (0);
var G__42052 = (0);
seq__41820_42010 = G__42049;
chunk__41824_42011 = G__42050;
count__41825_42012 = G__42051;
i__41826_42013 = G__42052;
continue;
}
} else {
var G__42053 = cljs.core.next(seq__41820_42035__$1);
var G__42054 = null;
var G__42055 = (0);
var G__42056 = (0);
seq__41820_42010 = G__42053;
chunk__41824_42011 = G__42054;
count__41825_42012 = G__42055;
i__41826_42013 = G__42056;
continue;
}
}
} else {
}
}
break;
}


var G__42057 = cljs.core.next(seq__41737__$1);
var G__42058 = null;
var G__42059 = (0);
var G__42060 = (0);
seq__41737 = G__42057;
chunk__41745 = G__42058;
count__41746 = G__42059;
i__41747 = G__42060;
continue;
} else {
var G__42061 = cljs.core.next(seq__41737__$1);
var G__42062 = null;
var G__42063 = (0);
var G__42064 = (0);
seq__41737 = G__42061;
chunk__41745 = G__42062;
count__41746 = G__42063;
i__41747 = G__42064;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__41841){
var map__41842 = p__41841;
var map__41842__$1 = cljs.core.__destructure_map(map__41842);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41842__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__41850){
var map__41851 = p__41850;
var map__41851__$1 = cljs.core.__destructure_map(map__41851);
var _ = map__41851__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41851__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__41852,done,error){
var map__41853 = p__41852;
var map__41853__$1 = cljs.core.__destructure_map(map__41853);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41853__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__41854,done,error){
var map__41855 = p__41854;
var map__41855__$1 = cljs.core.__destructure_map(map__41855);
var msg = map__41855__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41855__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41855__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41855__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__41856){
var map__41857 = p__41856;
var map__41857__$1 = cljs.core.__destructure_map(map__41857);
var src = map__41857__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41857__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4149__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4149__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__41858 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__41858) : done.call(null,G__41858));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__41859){
var map__41860 = p__41859;
var map__41860__$1 = cljs.core.__destructure_map(map__41860);
var msg__$1 = map__41860__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41860__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e41861){var ex = e41861;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__41864){
var map__41865 = p__41864;
var map__41865__$1 = cljs.core.__destructure_map(map__41865);
var env = map__41865__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41865__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__41868){
var map__41869 = p__41868;
var map__41869__$1 = cljs.core.__destructure_map(map__41869);
var msg = map__41869__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41869__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__41872){
var map__41873 = p__41872;
var map__41873__$1 = cljs.core.__destructure_map(map__41873);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41873__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41873__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__41874){
var map__41875 = p__41874;
var map__41875__$1 = cljs.core.__destructure_map(map__41875);
var svc = map__41875__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41875__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
