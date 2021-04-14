goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39311){
var map__39312 = p__39311;
var map__39312__$1 = cljs.core.__destructure_map(map__39312);
var m = map__39312__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39312__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39312__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__39427_39698 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39428_39699 = null;
var count__39429_39700 = (0);
var i__39430_39701 = (0);
while(true){
if((i__39430_39701 < count__39429_39700)){
var f_39702 = chunk__39428_39699.cljs$core$IIndexed$_nth$arity$2(null,i__39430_39701);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_39702], 0));


var G__39703 = seq__39427_39698;
var G__39704 = chunk__39428_39699;
var G__39705 = count__39429_39700;
var G__39706 = (i__39430_39701 + (1));
seq__39427_39698 = G__39703;
chunk__39428_39699 = G__39704;
count__39429_39700 = G__39705;
i__39430_39701 = G__39706;
continue;
} else {
var temp__5735__auto___39708 = cljs.core.seq(seq__39427_39698);
if(temp__5735__auto___39708){
var seq__39427_39709__$1 = temp__5735__auto___39708;
if(cljs.core.chunked_seq_QMARK_(seq__39427_39709__$1)){
var c__4591__auto___39714 = cljs.core.chunk_first(seq__39427_39709__$1);
var G__39715 = cljs.core.chunk_rest(seq__39427_39709__$1);
var G__39716 = c__4591__auto___39714;
var G__39717 = cljs.core.count(c__4591__auto___39714);
var G__39718 = (0);
seq__39427_39698 = G__39715;
chunk__39428_39699 = G__39716;
count__39429_39700 = G__39717;
i__39430_39701 = G__39718;
continue;
} else {
var f_39719 = cljs.core.first(seq__39427_39709__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_39719], 0));


var G__39720 = cljs.core.next(seq__39427_39709__$1);
var G__39721 = null;
var G__39722 = (0);
var G__39723 = (0);
seq__39427_39698 = G__39720;
chunk__39428_39699 = G__39721;
count__39429_39700 = G__39722;
i__39430_39701 = G__39723;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39724 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4160__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_39724], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_39724)))?cljs.core.second(arglists_39724):arglists_39724)], 0));
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
var seq__39487_39725 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39488_39726 = null;
var count__39489_39727 = (0);
var i__39490_39728 = (0);
while(true){
if((i__39490_39728 < count__39489_39727)){
var vec__39502_39729 = chunk__39488_39726.cljs$core$IIndexed$_nth$arity$2(null,i__39490_39728);
var name_39730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39502_39729,(0),null);
var map__39505_39731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39502_39729,(1),null);
var map__39505_39732__$1 = cljs.core.__destructure_map(map__39505_39731);
var doc_39733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39505_39732__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39734 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39505_39732__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_39730], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_39734], 0));

if(cljs.core.truth_(doc_39733)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_39733], 0));
} else {
}


var G__39737 = seq__39487_39725;
var G__39738 = chunk__39488_39726;
var G__39739 = count__39489_39727;
var G__39740 = (i__39490_39728 + (1));
seq__39487_39725 = G__39737;
chunk__39488_39726 = G__39738;
count__39489_39727 = G__39739;
i__39490_39728 = G__39740;
continue;
} else {
var temp__5735__auto___39741 = cljs.core.seq(seq__39487_39725);
if(temp__5735__auto___39741){
var seq__39487_39743__$1 = temp__5735__auto___39741;
if(cljs.core.chunked_seq_QMARK_(seq__39487_39743__$1)){
var c__4591__auto___39744 = cljs.core.chunk_first(seq__39487_39743__$1);
var G__39745 = cljs.core.chunk_rest(seq__39487_39743__$1);
var G__39746 = c__4591__auto___39744;
var G__39747 = cljs.core.count(c__4591__auto___39744);
var G__39748 = (0);
seq__39487_39725 = G__39745;
chunk__39488_39726 = G__39746;
count__39489_39727 = G__39747;
i__39490_39728 = G__39748;
continue;
} else {
var vec__39507_39749 = cljs.core.first(seq__39487_39743__$1);
var name_39750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39507_39749,(0),null);
var map__39510_39751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39507_39749,(1),null);
var map__39510_39752__$1 = cljs.core.__destructure_map(map__39510_39751);
var doc_39753 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39510_39752__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39754 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39510_39752__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_39750], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_39754], 0));

if(cljs.core.truth_(doc_39753)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_39753], 0));
} else {
}


var G__39757 = cljs.core.next(seq__39487_39743__$1);
var G__39758 = null;
var G__39759 = (0);
var G__39760 = (0);
seq__39487_39725 = G__39757;
chunk__39488_39726 = G__39758;
count__39489_39727 = G__39759;
i__39490_39728 = G__39760;
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

var seq__39515 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39516 = null;
var count__39517 = (0);
var i__39518 = (0);
while(true){
if((i__39518 < count__39517)){
var role = chunk__39516.cljs$core$IIndexed$_nth$arity$2(null,i__39518);
var temp__5735__auto___39763__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___39763__$1)){
var spec_39764 = temp__5735__auto___39763__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_39764)], 0));
} else {
}


var G__39769 = seq__39515;
var G__39770 = chunk__39516;
var G__39771 = count__39517;
var G__39772 = (i__39518 + (1));
seq__39515 = G__39769;
chunk__39516 = G__39770;
count__39517 = G__39771;
i__39518 = G__39772;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__39515);
if(temp__5735__auto____$1){
var seq__39515__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__39515__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__39515__$1);
var G__39773 = cljs.core.chunk_rest(seq__39515__$1);
var G__39774 = c__4591__auto__;
var G__39775 = cljs.core.count(c__4591__auto__);
var G__39776 = (0);
seq__39515 = G__39773;
chunk__39516 = G__39774;
count__39517 = G__39775;
i__39518 = G__39776;
continue;
} else {
var role = cljs.core.first(seq__39515__$1);
var temp__5735__auto___39778__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___39778__$2)){
var spec_39779 = temp__5735__auto___39778__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_39779)], 0));
} else {
}


var G__39780 = cljs.core.next(seq__39515__$1);
var G__39781 = null;
var G__39782 = (0);
var G__39783 = (0);
seq__39515 = G__39780;
chunk__39516 = G__39781;
count__39517 = G__39782;
i__39518 = G__39783;
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
var G__39796 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__39797 = cljs.core.ex_cause(t);
via = G__39796;
t = G__39797;
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
var map__39559 = datafied_throwable;
var map__39559__$1 = cljs.core.__destructure_map(map__39559);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39559__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39559__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39559__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__39560 = cljs.core.last(via);
var map__39560__$1 = cljs.core.__destructure_map(map__39560);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39560__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39560__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39560__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__39561 = data;
var map__39561__$1 = cljs.core.__destructure_map(map__39561);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39561__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39561__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39561__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__39562 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__39562__$1 = cljs.core.__destructure_map(map__39562);
var top_data = map__39562__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39562__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__39567 = phase;
var G__39567__$1 = (((G__39567 instanceof cljs.core.Keyword))?G__39567.fqn:null);
switch (G__39567__$1) {
case "read-source":
var map__39568 = data;
var map__39568__$1 = cljs.core.__destructure_map(map__39568);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39568__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39568__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__39569 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__39569__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39569,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__39569);
var G__39569__$2 = (cljs.core.truth_((function (){var fexpr__39570 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39570.cljs$core$IFn$_invoke$arity$1 ? fexpr__39570.cljs$core$IFn$_invoke$arity$1(source) : fexpr__39570.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__39569__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__39569__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39569__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__39569__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__39572 = top_data;
var G__39572__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39572,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__39572);
var G__39572__$2 = (cljs.core.truth_((function (){var fexpr__39573 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39573.cljs$core$IFn$_invoke$arity$1 ? fexpr__39573.cljs$core$IFn$_invoke$arity$1(source) : fexpr__39573.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__39572__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__39572__$1);
var G__39572__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39572__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__39572__$2);
var G__39572__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39572__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__39572__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39572__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__39572__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__39574 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39574,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39574,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39574,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39574,(3),null);
var G__39577 = top_data;
var G__39577__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39577,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__39577);
var G__39577__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39577__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__39577__$1);
var G__39577__$3 = (cljs.core.truth_((function (){var and__4149__auto__ = source__$1;
if(cljs.core.truth_(and__4149__auto__)){
return method;
} else {
return and__4149__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39577__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__39577__$2);
var G__39577__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39577__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__39577__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39577__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__39577__$4;
}

break;
case "execution":
var vec__39580 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39580,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39580,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39580,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39580,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__39557_SHARP_){
var or__4160__auto__ = (p1__39557_SHARP_ == null);
if(or__4160__auto__){
return or__4160__auto__;
} else {
var fexpr__39593 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39593.cljs$core$IFn$_invoke$arity$1 ? fexpr__39593.cljs$core$IFn$_invoke$arity$1(p1__39557_SHARP_) : fexpr__39593.call(null,p1__39557_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4160__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return line;
}
})();
var G__39595 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__39595__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39595,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__39595);
var G__39595__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39595__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__39595__$1);
var G__39595__$3 = (cljs.core.truth_((function (){var or__4160__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39595__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4160__auto__ = fn;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__39595__$2);
var G__39595__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39595__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__39595__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39595__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__39595__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39567__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__39629){
var map__39631 = p__39629;
var map__39631__$1 = cljs.core.__destructure_map(map__39631);
var triage_data = map__39631__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39631__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39631__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39631__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39631__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39631__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39631__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39631__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39631__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__39638 = phase;
var G__39638__$1 = (((G__39638 instanceof cljs.core.Keyword))?G__39638.fqn:null);
switch (G__39638__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__39640 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__39641 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39642 = loc;
var G__39643 = (cljs.core.truth_(spec)?(function (){var sb__4702__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39644_39847 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39645_39848 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39646_39849 = true;
var _STAR_print_fn_STAR__temp_val__39647_39850 = (function (x__4703__auto__){
return sb__4702__auto__.append(x__4703__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39646_39849);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39647_39850);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39623_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__39623_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39645_39848);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39644_39847);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4702__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__39640,G__39641,G__39642,G__39643) : format.call(null,G__39640,G__39641,G__39642,G__39643));

break;
case "macroexpansion":
var G__39659 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__39660 = cause_type;
var G__39661 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39662 = loc;
var G__39663 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39659,G__39660,G__39661,G__39662,G__39663) : format.call(null,G__39659,G__39660,G__39661,G__39662,G__39663));

break;
case "compile-syntax-check":
var G__39665 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__39666 = cause_type;
var G__39667 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39668 = loc;
var G__39669 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39665,G__39666,G__39667,G__39668,G__39669) : format.call(null,G__39665,G__39666,G__39667,G__39668,G__39669));

break;
case "compilation":
var G__39672 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__39673 = cause_type;
var G__39674 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39675 = loc;
var G__39676 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39672,G__39673,G__39674,G__39675,G__39676) : format.call(null,G__39672,G__39673,G__39674,G__39675,G__39676));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__39678 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__39679 = symbol;
var G__39680 = loc;
var G__39681 = (function (){var sb__4702__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39682_39854 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39683_39855 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39684_39856 = true;
var _STAR_print_fn_STAR__temp_val__39685_39857 = (function (x__4703__auto__){
return sb__4702__auto__.append(x__4703__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39684_39856);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39685_39857);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39627_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__39627_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39683_39855);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39682_39854);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4702__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__39678,G__39679,G__39680,G__39681) : format.call(null,G__39678,G__39679,G__39680,G__39681));
} else {
var G__39688 = "Execution error%s at %s(%s).\n%s\n";
var G__39689 = cause_type;
var G__39690 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39691 = loc;
var G__39692 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39688,G__39689,G__39690,G__39691,G__39692) : format.call(null,G__39688,G__39689,G__39690,G__39691,G__39692));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39638__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
