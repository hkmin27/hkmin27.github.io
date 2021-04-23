goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__31059 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__31060 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__31060);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__31064 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__31065 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__31065);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__31064);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__31059);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__31068 = arguments.length;
switch (G__31068) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__31079 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31079,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31079,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__31100_31126 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__31101_31127 = null;
var count__31102_31128 = (0);
var i__31103_31129 = (0);
while(true){
if((i__31103_31129 < count__31102_31128)){
var vec__31117_31131 = chunk__31101_31127.cljs$core$IIndexed$_nth$arity$2(null,i__31103_31129);
var container_31132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31117_31131,(0),null);
var comp_31133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31117_31131,(1),null);
reagent.dom.re_render_component(comp_31133,container_31132);


var G__31135 = seq__31100_31126;
var G__31136 = chunk__31101_31127;
var G__31137 = count__31102_31128;
var G__31138 = (i__31103_31129 + (1));
seq__31100_31126 = G__31135;
chunk__31101_31127 = G__31136;
count__31102_31128 = G__31137;
i__31103_31129 = G__31138;
continue;
} else {
var temp__5735__auto___31139 = cljs.core.seq(seq__31100_31126);
if(temp__5735__auto___31139){
var seq__31100_31140__$1 = temp__5735__auto___31139;
if(cljs.core.chunked_seq_QMARK_(seq__31100_31140__$1)){
var c__4591__auto___31141 = cljs.core.chunk_first(seq__31100_31140__$1);
var G__31142 = cljs.core.chunk_rest(seq__31100_31140__$1);
var G__31143 = c__4591__auto___31141;
var G__31144 = cljs.core.count(c__4591__auto___31141);
var G__31145 = (0);
seq__31100_31126 = G__31142;
chunk__31101_31127 = G__31143;
count__31102_31128 = G__31144;
i__31103_31129 = G__31145;
continue;
} else {
var vec__31120_31146 = cljs.core.first(seq__31100_31140__$1);
var container_31147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31120_31146,(0),null);
var comp_31148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31120_31146,(1),null);
reagent.dom.re_render_component(comp_31148,container_31147);


var G__31149 = cljs.core.next(seq__31100_31140__$1);
var G__31150 = null;
var G__31151 = (0);
var G__31152 = (0);
seq__31100_31126 = G__31149;
chunk__31101_31127 = G__31150;
count__31102_31128 = G__31151;
i__31103_31129 = G__31152;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
