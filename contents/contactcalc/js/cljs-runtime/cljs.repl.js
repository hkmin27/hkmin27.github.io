goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39897){
var map__39898 = p__39897;
var map__39898__$1 = cljs.core.__destructure_map(map__39898);
var m = map__39898__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39898__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39898__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4160__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39899_40473 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39900_40474 = null;
var count__39901_40475 = (0);
var i__39902_40476 = (0);
while(true){
if((i__39902_40476 < count__39901_40475)){
var f_40477 = chunk__39900_40474.cljs$core$IIndexed$_nth$arity$2(null,i__39902_40476);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40477], 0));


var G__40478 = seq__39899_40473;
var G__40479 = chunk__39900_40474;
var G__40480 = count__39901_40475;
var G__40481 = (i__39902_40476 + (1));
seq__39899_40473 = G__40478;
chunk__39900_40474 = G__40479;
count__39901_40475 = G__40480;
i__39902_40476 = G__40481;
continue;
} else {
var temp__5735__auto___40482 = cljs.core.seq(seq__39899_40473);
if(temp__5735__auto___40482){
var seq__39899_40483__$1 = temp__5735__auto___40482;
if(cljs.core.chunked_seq_QMARK_(seq__39899_40483__$1)){
var c__4591__auto___40484 = cljs.core.chunk_first(seq__39899_40483__$1);
var G__40485 = cljs.core.chunk_rest(seq__39899_40483__$1);
var G__40486 = c__4591__auto___40484;
var G__40487 = cljs.core.count(c__4591__auto___40484);
var G__40488 = (0);
seq__39899_40473 = G__40485;
chunk__39900_40474 = G__40486;
count__39901_40475 = G__40487;
i__39902_40476 = G__40488;
continue;
} else {
var f_40489 = cljs.core.first(seq__39899_40483__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40489], 0));


var G__40490 = cljs.core.next(seq__39899_40483__$1);
var G__40491 = null;
var G__40492 = (0);
var G__40493 = (0);
seq__39899_40473 = G__40490;
chunk__39900_40474 = G__40491;
count__39901_40475 = G__40492;
i__39902_40476 = G__40493;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_40494 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4160__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_40494], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_40494)))?cljs.core.second(arglists_40494):arglists_40494)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39909_40504 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39910_40505 = null;
var count__39911_40506 = (0);
var i__39912_40507 = (0);
while(true){
if((i__39912_40507 < count__39911_40506)){
var vec__39926_40509 = chunk__39910_40505.cljs$core$IIndexed$_nth$arity$2(null,i__39912_40507);
var name_40510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39926_40509,(0),null);
var map__39929_40511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39926_40509,(1),null);
var map__39929_40512__$1 = cljs.core.__destructure_map(map__39929_40511);
var doc_40513 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39929_40512__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40514 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39929_40512__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40510], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40514], 0));

if(cljs.core.truth_(doc_40513)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40513], 0));
} else {
}


var G__40515 = seq__39909_40504;
var G__40516 = chunk__39910_40505;
var G__40517 = count__39911_40506;
var G__40518 = (i__39912_40507 + (1));
seq__39909_40504 = G__40515;
chunk__39910_40505 = G__40516;
count__39911_40506 = G__40517;
i__39912_40507 = G__40518;
continue;
} else {
var temp__5735__auto___40519 = cljs.core.seq(seq__39909_40504);
if(temp__5735__auto___40519){
var seq__39909_40520__$1 = temp__5735__auto___40519;
if(cljs.core.chunked_seq_QMARK_(seq__39909_40520__$1)){
var c__4591__auto___40521 = cljs.core.chunk_first(seq__39909_40520__$1);
var G__40522 = cljs.core.chunk_rest(seq__39909_40520__$1);
var G__40523 = c__4591__auto___40521;
var G__40524 = cljs.core.count(c__4591__auto___40521);
var G__40525 = (0);
seq__39909_40504 = G__40522;
chunk__39910_40505 = G__40523;
count__39911_40506 = G__40524;
i__39912_40507 = G__40525;
continue;
} else {
var vec__39931_40526 = cljs.core.first(seq__39909_40520__$1);
var name_40527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39931_40526,(0),null);
var map__39934_40528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39931_40526,(1),null);
var map__39934_40529__$1 = cljs.core.__destructure_map(map__39934_40528);
var doc_40530 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39934_40529__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40531 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39934_40529__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40527], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40531], 0));

if(cljs.core.truth_(doc_40530)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40530], 0));
} else {
}


var G__40537 = cljs.core.next(seq__39909_40520__$1);
var G__40538 = null;
var G__40539 = (0);
var G__40540 = (0);
seq__39909_40504 = G__40537;
chunk__39910_40505 = G__40538;
count__39911_40506 = G__40539;
i__39912_40507 = G__40540;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__39947 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39948 = null;
var count__39949 = (0);
var i__39950 = (0);
while(true){
if((i__39950 < count__39949)){
var role = chunk__39948.cljs$core$IIndexed$_nth$arity$2(null,i__39950);
var temp__5735__auto___40541__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___40541__$1)){
var spec_40542 = temp__5735__auto___40541__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40542)], 0));
} else {
}


var G__40543 = seq__39947;
var G__40544 = chunk__39948;
var G__40545 = count__39949;
var G__40546 = (i__39950 + (1));
seq__39947 = G__40543;
chunk__39948 = G__40544;
count__39949 = G__40545;
i__39950 = G__40546;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__39947);
if(temp__5735__auto____$1){
var seq__39947__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__39947__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__39947__$1);
var G__40547 = cljs.core.chunk_rest(seq__39947__$1);
var G__40548 = c__4591__auto__;
var G__40549 = cljs.core.count(c__4591__auto__);
var G__40550 = (0);
seq__39947 = G__40547;
chunk__39948 = G__40548;
count__39949 = G__40549;
i__39950 = G__40550;
continue;
} else {
var role = cljs.core.first(seq__39947__$1);
var temp__5735__auto___40551__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___40551__$2)){
var spec_40552 = temp__5735__auto___40551__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40552)], 0));
} else {
}


var G__40553 = cljs.core.next(seq__39947__$1);
var G__40554 = null;
var G__40555 = (0);
var G__40556 = (0);
seq__39947 = G__40553;
chunk__39948 = G__40554;
count__39949 = G__40555;
i__39950 = G__40556;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__40560 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__40561 = cljs.core.ex_cause(t);
via = G__40560;
t = G__40561;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__39998 = datafied_throwable;
var map__39998__$1 = cljs.core.__destructure_map(map__39998);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39998__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39998__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39998__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__39999 = cljs.core.last(via);
var map__39999__$1 = cljs.core.__destructure_map(map__39999);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39999__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39999__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39999__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__40000 = data;
var map__40000__$1 = cljs.core.__destructure_map(map__40000);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40000__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40000__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40000__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__40001 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__40001__$1 = cljs.core.__destructure_map(map__40001);
var top_data = map__40001__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40001__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__40002 = phase;
var G__40002__$1 = (((G__40002 instanceof cljs.core.Keyword))?G__40002.fqn:null);
switch (G__40002__$1) {
case "read-source":
var map__40003 = data;
var map__40003__$1 = cljs.core.__destructure_map(map__40003);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40003__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40003__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__40005 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__40005__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40005,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40005);
var G__40005__$2 = (cljs.core.truth_((function (){var fexpr__40156 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40156.cljs$core$IFn$_invoke$arity$1 ? fexpr__40156.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40156.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40005__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40005__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40005__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40005__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__40201 = top_data;
var G__40201__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40201,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40201);
var G__40201__$2 = (cljs.core.truth_((function (){var fexpr__40216 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40216.cljs$core$IFn$_invoke$arity$1 ? fexpr__40216.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40216.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40201__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40201__$1);
var G__40201__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40201__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40201__$2);
var G__40201__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40201__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40201__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40201__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40201__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__40240 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40240,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40240,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40240,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40240,(3),null);
var G__40250 = top_data;
var G__40250__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40250,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__40250);
var G__40250__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40250__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__40250__$1);
var G__40250__$3 = (cljs.core.truth_((function (){var and__4149__auto__ = source__$1;
if(cljs.core.truth_(and__4149__auto__)){
return method;
} else {
return and__4149__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40250__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__40250__$2);
var G__40250__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40250__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40250__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40250__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40250__$4;
}

break;
case "execution":
var vec__40260 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40260,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40260,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40260,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40260,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__39995_SHARP_){
var or__4160__auto__ = (p1__39995_SHARP_ == null);
if(or__4160__auto__){
return or__4160__auto__;
} else {
var fexpr__40279 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40279.cljs$core$IFn$_invoke$arity$1 ? fexpr__40279.cljs$core$IFn$_invoke$arity$1(p1__39995_SHARP_) : fexpr__40279.call(null,p1__39995_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4160__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return line;
}
})();
var G__40281 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__40281__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40281,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__40281);
var G__40281__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40281__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40281__$1);
var G__40281__$3 = (cljs.core.truth_((function (){var or__4160__auto__ = fn;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var and__4149__auto__ = source__$1;
if(cljs.core.truth_(and__4149__auto__)){
return method;
} else {
return and__4149__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40281__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4160__auto__ = fn;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__40281__$2);
var G__40281__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40281__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__40281__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40281__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40281__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40002__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__40296){
var map__40297 = p__40296;
var map__40297__$1 = cljs.core.__destructure_map(map__40297);
var triage_data = map__40297__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40297__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40297__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40297__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40297__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40297__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40297__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40297__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40297__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4160__auto__ = source;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4160__auto__ = line;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4160__auto__ = class$;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__40304 = phase;
var G__40304__$1 = (((G__40304 instanceof cljs.core.Keyword))?G__40304.fqn:null);
switch (G__40304__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__40316 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__40317 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40318 = loc;
var G__40319 = (cljs.core.truth_(spec)?(function (){var sb__4702__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40430_40577 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40431_40578 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40432_40579 = true;
var _STAR_print_fn_STAR__temp_val__40433_40580 = (function (x__4703__auto__){
return sb__4702__auto__.append(x__4703__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40432_40579);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40433_40580);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40293_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40293_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40431_40578);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40430_40577);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4702__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40316,G__40317,G__40318,G__40319) : format.call(null,G__40316,G__40317,G__40318,G__40319));

break;
case "macroexpansion":
var G__40441 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__40442 = cause_type;
var G__40443 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40444 = loc;
var G__40445 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40441,G__40442,G__40443,G__40444,G__40445) : format.call(null,G__40441,G__40442,G__40443,G__40444,G__40445));

break;
case "compile-syntax-check":
var G__40446 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__40447 = cause_type;
var G__40448 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40449 = loc;
var G__40450 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40446,G__40447,G__40448,G__40449,G__40450) : format.call(null,G__40446,G__40447,G__40448,G__40449,G__40450));

break;
case "compilation":
var G__40451 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__40452 = cause_type;
var G__40453 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40454 = loc;
var G__40455 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40451,G__40452,G__40453,G__40454,G__40455) : format.call(null,G__40451,G__40452,G__40453,G__40454,G__40455));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__40457 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__40458 = symbol;
var G__40459 = loc;
var G__40460 = (function (){var sb__4702__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40461_40584 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40462_40585 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40463_40586 = true;
var _STAR_print_fn_STAR__temp_val__40464_40587 = (function (x__4703__auto__){
return sb__4702__auto__.append(x__4703__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40463_40586);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40464_40587);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40294_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40294_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40462_40585);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40461_40584);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4702__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40457,G__40458,G__40459,G__40460) : format.call(null,G__40457,G__40458,G__40459,G__40460));
} else {
var G__40468 = "Execution error%s at %s(%s).\n%s\n";
var G__40469 = cause_type;
var G__40470 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40471 = loc;
var G__40472 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40468,G__40469,G__40470,G__40471,G__40472) : format.call(null,G__40468,G__40469,G__40470,G__40471,G__40472));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40304__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
