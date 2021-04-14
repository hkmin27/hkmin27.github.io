goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__40751__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__40751 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40753__i = 0, G__40753__a = new Array(arguments.length -  0);
while (G__40753__i < G__40753__a.length) {G__40753__a[G__40753__i] = arguments[G__40753__i + 0]; ++G__40753__i;}
  args = new cljs.core.IndexedSeq(G__40753__a,0,null);
} 
return G__40751__delegate.call(this,args);};
G__40751.cljs$lang$maxFixedArity = 0;
G__40751.cljs$lang$applyTo = (function (arglist__40754){
var args = cljs.core.seq(arglist__40754);
return G__40751__delegate(args);
});
G__40751.cljs$core$IFn$_invoke$arity$variadic = G__40751__delegate;
return G__40751;
})()
);

(o.error = (function() { 
var G__40755__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__40755 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40756__i = 0, G__40756__a = new Array(arguments.length -  0);
while (G__40756__i < G__40756__a.length) {G__40756__a[G__40756__i] = arguments[G__40756__i + 0]; ++G__40756__i;}
  args = new cljs.core.IndexedSeq(G__40756__a,0,null);
} 
return G__40755__delegate.call(this,args);};
G__40755.cljs$lang$maxFixedArity = 0;
G__40755.cljs$lang$applyTo = (function (arglist__40757){
var args = cljs.core.seq(arglist__40757);
return G__40755__delegate(args);
});
G__40755.cljs$core$IFn$_invoke$arity$variadic = G__40755__delegate;
return G__40755;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
