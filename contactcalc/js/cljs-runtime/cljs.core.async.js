goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__36526 = arguments.length;
switch (G__36526) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36527 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36527 = (function (f,blockable,meta36528){
this.f = f;
this.blockable = blockable;
this.meta36528 = meta36528;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36529,meta36528__$1){
var self__ = this;
var _36529__$1 = this;
return (new cljs.core.async.t_cljs$core$async36527(self__.f,self__.blockable,meta36528__$1));
}));

(cljs.core.async.t_cljs$core$async36527.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36529){
var self__ = this;
var _36529__$1 = this;
return self__.meta36528;
}));

(cljs.core.async.t_cljs$core$async36527.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36527.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36527.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async36527.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async36527.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta36528","meta36528",-1748862714,null)], null);
}));

(cljs.core.async.t_cljs$core$async36527.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36527.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36527");

(cljs.core.async.t_cljs$core$async36527.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async36527");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36527.
 */
cljs.core.async.__GT_t_cljs$core$async36527 = (function cljs$core$async$__GT_t_cljs$core$async36527(f__$1,blockable__$1,meta36528){
return (new cljs.core.async.t_cljs$core$async36527(f__$1,blockable__$1,meta36528));
});

}

return (new cljs.core.async.t_cljs$core$async36527(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__36532 = arguments.length;
switch (G__36532) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__36534 = arguments.length;
switch (G__36534) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__36544 = arguments.length;
switch (G__36544) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_38861 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38861) : fn1.call(null,val_38861));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38861) : fn1.call(null,val_38861));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__36559 = arguments.length;
switch (G__36559) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4648__auto___38863 = n;
var x_38864 = (0);
while(true){
if((x_38864 < n__4648__auto___38863)){
(a[x_38864] = x_38864);

var G__38865 = (x_38864 + (1));
x_38864 = G__38865;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36562 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36562 = (function (flag,meta36563){
this.flag = flag;
this.meta36563 = meta36563;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36564,meta36563__$1){
var self__ = this;
var _36564__$1 = this;
return (new cljs.core.async.t_cljs$core$async36562(self__.flag,meta36563__$1));
}));

(cljs.core.async.t_cljs$core$async36562.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36564){
var self__ = this;
var _36564__$1 = this;
return self__.meta36563;
}));

(cljs.core.async.t_cljs$core$async36562.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36562.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async36562.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36562.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async36562.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta36563","meta36563",30995959,null)], null);
}));

(cljs.core.async.t_cljs$core$async36562.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36562.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36562");

(cljs.core.async.t_cljs$core$async36562.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async36562");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36562.
 */
cljs.core.async.__GT_t_cljs$core$async36562 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async36562(flag__$1,meta36563){
return (new cljs.core.async.t_cljs$core$async36562(flag__$1,meta36563));
});

}

return (new cljs.core.async.t_cljs$core$async36562(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36577 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36577 = (function (flag,cb,meta36578){
this.flag = flag;
this.cb = cb;
this.meta36578 = meta36578;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36579,meta36578__$1){
var self__ = this;
var _36579__$1 = this;
return (new cljs.core.async.t_cljs$core$async36577(self__.flag,self__.cb,meta36578__$1));
}));

(cljs.core.async.t_cljs$core$async36577.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36579){
var self__ = this;
var _36579__$1 = this;
return self__.meta36578;
}));

(cljs.core.async.t_cljs$core$async36577.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36577.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async36577.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36577.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async36577.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta36578","meta36578",1285671644,null)], null);
}));

(cljs.core.async.t_cljs$core$async36577.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36577.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36577");

(cljs.core.async.t_cljs$core$async36577.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async36577");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36577.
 */
cljs.core.async.__GT_t_cljs$core$async36577 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async36577(flag__$1,cb__$1,meta36578){
return (new cljs.core.async.t_cljs$core$async36577(flag__$1,cb__$1,meta36578));
});

}

return (new cljs.core.async.t_cljs$core$async36577(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36587_SHARP_){
var G__36590 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36587_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__36590) : fret.call(null,G__36590));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36588_SHARP_){
var G__36591 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36588_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__36591) : fret.call(null,G__36591));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4160__auto__ = wport;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return port;
}
})()], null));
} else {
var G__38873 = (i + (1));
i = G__38873;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4160__auto__ = ret;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4149__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4149__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4149__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___38878 = arguments.length;
var i__4772__auto___38879 = (0);
while(true){
if((i__4772__auto___38879 < len__4771__auto___38878)){
args__4777__auto__.push((arguments[i__4772__auto___38879]));

var G__38881 = (i__4772__auto___38879 + (1));
i__4772__auto___38879 = G__38881;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__36595){
var map__36596 = p__36595;
var map__36596__$1 = cljs.core.__destructure_map(map__36596);
var opts = map__36596__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq36593){
var G__36594 = cljs.core.first(seq36593);
var seq36593__$1 = cljs.core.next(seq36593);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36594,seq36593__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__36608 = arguments.length;
switch (G__36608) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__36461__auto___38889 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36462__auto__ = (function (){var switch__36294__auto__ = (function (state_36643){
var state_val_36645 = (state_36643[(1)]);
if((state_val_36645 === (7))){
var inst_36636 = (state_36643[(2)]);
var state_36643__$1 = state_36643;
var statearr_36659_38890 = state_36643__$1;
(statearr_36659_38890[(2)] = inst_36636);

(statearr_36659_38890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36645 === (1))){
var state_36643__$1 = state_36643;
var statearr_36661_38891 = state_36643__$1;
(statearr_36661_38891[(2)] = null);

(statearr_36661_38891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36645 === (4))){
var inst_36619 = (state_36643[(7)]);
var inst_36619__$1 = (state_36643[(2)]);
var inst_36620 = (inst_36619__$1 == null);
var state_36643__$1 = (function (){var statearr_36666 = state_36643;
(statearr_36666[(7)] = inst_36619__$1);

return statearr_36666;
})();
if(cljs.core.truth_(inst_36620)){
var statearr_36667_38894 = state_36643__$1;
(statearr_36667_38894[(1)] = (5));

} else {
var statearr_36668_38895 = state_36643__$1;
(statearr_36668_38895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36645 === (13))){
var state_36643__$1 = state_36643;
var statearr_36669_38897 = state_36643__$1;
(statearr_36669_38897[(2)] = null);

(statearr_36669_38897[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36645 === (6))){
var inst_36619 = (state_36643[(7)]);
var state_36643__$1 = state_36643;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36643__$1,(11),to,inst_36619);
} else {
if((state_val_36645 === (3))){
var inst_36638 = (state_36643[(2)]);
var state_36643__$1 = state_36643;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36643__$1,inst_36638);
} else {
if((state_val_36645 === (12))){
var state_36643__$1 = state_36643;
var statearr_36672_38898 = state_36643__$1;
(statearr_36672_38898[(2)] = null);

(statearr_36672_38898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36645 === (2))){
var state_36643__$1 = state_36643;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36643__$1,(4),from);
} else {
if((state_val_36645 === (11))){
var inst_36629 = (state_36643[(2)]);
var state_36643__$1 = state_36643;
if(cljs.core.truth_(inst_36629)){
var statearr_36673_38899 = state_36643__$1;
(statearr_36673_38899[(1)] = (12));

} else {
var statearr_36674_38900 = state_36643__$1;
(statearr_36674_38900[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36645 === (9))){
var state_36643__$1 = state_36643;
var statearr_36675_38901 = state_36643__$1;
(statearr_36675_38901[(2)] = null);

(statearr_36675_38901[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36645 === (5))){
var state_36643__$1 = state_36643;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36676_38902 = state_36643__$1;
(statearr_36676_38902[(1)] = (8));

} else {
var statearr_36681_38903 = state_36643__$1;
(statearr_36681_38903[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36645 === (14))){
var inst_36634 = (state_36643[(2)]);
var state_36643__$1 = state_36643;
var statearr_36682_38904 = state_36643__$1;
(statearr_36682_38904[(2)] = inst_36634);

(statearr_36682_38904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36645 === (10))){
var inst_36626 = (state_36643[(2)]);
var state_36643__$1 = state_36643;
var statearr_36683_38905 = state_36643__$1;
(statearr_36683_38905[(2)] = inst_36626);

(statearr_36683_38905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36645 === (8))){
var inst_36623 = cljs.core.async.close_BANG_(to);
var state_36643__$1 = state_36643;
var statearr_36687_38906 = state_36643__$1;
(statearr_36687_38906[(2)] = inst_36623);

(statearr_36687_38906[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36295__auto__ = null;
var cljs$core$async$state_machine__36295__auto____0 = (function (){
var statearr_36690 = [null,null,null,null,null,null,null,null];
(statearr_36690[(0)] = cljs$core$async$state_machine__36295__auto__);

(statearr_36690[(1)] = (1));

return statearr_36690;
});
var cljs$core$async$state_machine__36295__auto____1 = (function (state_36643){
while(true){
var ret_value__36296__auto__ = (function (){try{while(true){
var result__36297__auto__ = switch__36294__auto__(state_36643);
if(cljs.core.keyword_identical_QMARK_(result__36297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36297__auto__;
}
break;
}
}catch (e36697){var ex__36298__auto__ = e36697;
var statearr_36698_38907 = state_36643;
(statearr_36698_38907[(2)] = ex__36298__auto__);


if(cljs.core.seq((state_36643[(4)]))){
var statearr_36699_38908 = state_36643;
(statearr_36699_38908[(1)] = cljs.core.first((state_36643[(4)])));

} else {
throw ex__36298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38911 = state_36643;
state_36643 = G__38911;
continue;
} else {
return ret_value__36296__auto__;
}
break;
}
});
cljs$core$async$state_machine__36295__auto__ = function(state_36643){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36295__auto____1.call(this,state_36643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36295__auto____0;
cljs$core$async$state_machine__36295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36295__auto____1;
return cljs$core$async$state_machine__36295__auto__;
})()
})();
var state__36463__auto__ = (function (){var statearr_36700 = f__36462__auto__();
(statearr_36700[(6)] = c__36461__auto___38889);

return statearr_36700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36463__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__36723){
var vec__36724 = p__36723;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36724,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36724,(1),null);
var job = vec__36724;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__36461__auto___38922 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36462__auto__ = (function (){var switch__36294__auto__ = (function (state_36731){
var state_val_36732 = (state_36731[(1)]);
if((state_val_36732 === (1))){
var state_36731__$1 = state_36731;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36731__$1,(2),res,v);
} else {
if((state_val_36732 === (2))){
var inst_36728 = (state_36731[(2)]);
var inst_36729 = cljs.core.async.close_BANG_(res);
var state_36731__$1 = (function (){var statearr_36737 = state_36731;
(statearr_36737[(7)] = inst_36728);

return statearr_36737;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36731__$1,inst_36729);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36295__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36295__auto____0 = (function (){
var statearr_36738 = [null,null,null,null,null,null,null,null];
(statearr_36738[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36295__auto__);

(statearr_36738[(1)] = (1));

return statearr_36738;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36295__auto____1 = (function (state_36731){
while(true){
var ret_value__36296__auto__ = (function (){try{while(true){
var result__36297__auto__ = switch__36294__auto__(state_36731);
if(cljs.core.keyword_identical_QMARK_(result__36297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36297__auto__;
}
break;
}
}catch (e36739){var ex__36298__auto__ = e36739;
var statearr_36740_38937 = state_36731;
(statearr_36740_38937[(2)] = ex__36298__auto__);


if(cljs.core.seq((state_36731[(4)]))){
var statearr_36741_38938 = state_36731;
(statearr_36741_38938[(1)] = cljs.core.first((state_36731[(4)])));

} else {
throw ex__36298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38939 = state_36731;
state_36731 = G__38939;
continue;
} else {
return ret_value__36296__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36295__auto__ = function(state_36731){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36295__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36295__auto____1.call(this,state_36731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36295__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36295__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36295__auto__;
})()
})();
var state__36463__auto__ = (function (){var statearr_36744 = f__36462__auto__();
(statearr_36744[(6)] = c__36461__auto___38922);

return statearr_36744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36463__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__36745){
var vec__36746 = p__36745;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36746,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36746,(1),null);
var job = vec__36746;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4648__auto___38954 = n;
var __38955 = (0);
while(true){
if((__38955 < n__4648__auto___38954)){
var G__36754_38956 = type;
var G__36754_38957__$1 = (((G__36754_38956 instanceof cljs.core.Keyword))?G__36754_38956.fqn:null);
switch (G__36754_38957__$1) {
case "compute":
var c__36461__auto___38959 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__38955,c__36461__auto___38959,G__36754_38956,G__36754_38957__$1,n__4648__auto___38954,jobs,results,process,async){
return (function (){
var f__36462__auto__ = (function (){var switch__36294__auto__ = ((function (__38955,c__36461__auto___38959,G__36754_38956,G__36754_38957__$1,n__4648__auto___38954,jobs,results,process,async){
return (function (state_36767){
var state_val_36768 = (state_36767[(1)]);
if((state_val_36768 === (1))){
var state_36767__$1 = state_36767;
var statearr_36769_38960 = state_36767__$1;
(statearr_36769_38960[(2)] = null);

(statearr_36769_38960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36768 === (2))){
var state_36767__$1 = state_36767;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36767__$1,(4),jobs);
} else {
if((state_val_36768 === (3))){
var inst_36765 = (state_36767[(2)]);
var state_36767__$1 = state_36767;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36767__$1,inst_36765);
} else {
if((state_val_36768 === (4))){
var inst_36757 = (state_36767[(2)]);
var inst_36758 = process(inst_36757);
var state_36767__$1 = state_36767;
if(cljs.core.truth_(inst_36758)){
var statearr_36778_38967 = state_36767__$1;
(statearr_36778_38967[(1)] = (5));

} else {
var statearr_36779_38968 = state_36767__$1;
(statearr_36779_38968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36768 === (5))){
var state_36767__$1 = state_36767;
var statearr_36780_38969 = state_36767__$1;
(statearr_36780_38969[(2)] = null);

(statearr_36780_38969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36768 === (6))){
var state_36767__$1 = state_36767;
var statearr_36781_38970 = state_36767__$1;
(statearr_36781_38970[(2)] = null);

(statearr_36781_38970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36768 === (7))){
var inst_36763 = (state_36767[(2)]);
var state_36767__$1 = state_36767;
var statearr_36782_38971 = state_36767__$1;
(statearr_36782_38971[(2)] = inst_36763);

(statearr_36782_38971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__38955,c__36461__auto___38959,G__36754_38956,G__36754_38957__$1,n__4648__auto___38954,jobs,results,process,async))
;
return ((function (__38955,switch__36294__auto__,c__36461__auto___38959,G__36754_38956,G__36754_38957__$1,n__4648__auto___38954,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36295__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36295__auto____0 = (function (){
var statearr_36783 = [null,null,null,null,null,null,null];
(statearr_36783[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36295__auto__);

(statearr_36783[(1)] = (1));

return statearr_36783;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36295__auto____1 = (function (state_36767){
while(true){
var ret_value__36296__auto__ = (function (){try{while(true){
var result__36297__auto__ = switch__36294__auto__(state_36767);
if(cljs.core.keyword_identical_QMARK_(result__36297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36297__auto__;
}
break;
}
}catch (e36784){var ex__36298__auto__ = e36784;
var statearr_36785_38974 = state_36767;
(statearr_36785_38974[(2)] = ex__36298__auto__);


if(cljs.core.seq((state_36767[(4)]))){
var statearr_36786_38975 = state_36767;
(statearr_36786_38975[(1)] = cljs.core.first((state_36767[(4)])));

} else {
throw ex__36298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38976 = state_36767;
state_36767 = G__38976;
continue;
} else {
return ret_value__36296__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36295__auto__ = function(state_36767){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36295__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36295__auto____1.call(this,state_36767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36295__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36295__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36295__auto__;
})()
;})(__38955,switch__36294__auto__,c__36461__auto___38959,G__36754_38956,G__36754_38957__$1,n__4648__auto___38954,jobs,results,process,async))
})();
var state__36463__auto__ = (function (){var statearr_36787 = f__36462__auto__();
(statearr_36787[(6)] = c__36461__auto___38959);

return statearr_36787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36463__auto__);
});})(__38955,c__36461__auto___38959,G__36754_38956,G__36754_38957__$1,n__4648__auto___38954,jobs,results,process,async))
);


break;
case "async":
var c__36461__auto___38978 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__38955,c__36461__auto___38978,G__36754_38956,G__36754_38957__$1,n__4648__auto___38954,jobs,results,process,async){
return (function (){
var f__36462__auto__ = (function (){var switch__36294__auto__ = ((function (__38955,c__36461__auto___38978,G__36754_38956,G__36754_38957__$1,n__4648__auto___38954,jobs,results,process,async){
return (function (state_36800){
var state_val_36801 = (state_36800[(1)]);
if((state_val_36801 === (1))){
var state_36800__$1 = state_36800;
var statearr_36802_38979 = state_36800__$1;
(statearr_36802_38979[(2)] = null);

(statearr_36802_38979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36801 === (2))){
var state_36800__$1 = state_36800;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36800__$1,(4),jobs);
} else {
if((state_val_36801 === (3))){
var inst_36798 = (state_36800[(2)]);
var state_36800__$1 = state_36800;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36800__$1,inst_36798);
} else {
if((state_val_36801 === (4))){
var inst_36790 = (state_36800[(2)]);
var inst_36791 = async(inst_36790);
var state_36800__$1 = state_36800;
if(cljs.core.truth_(inst_36791)){
var statearr_36803_38980 = state_36800__$1;
(statearr_36803_38980[(1)] = (5));

} else {
var statearr_36804_38981 = state_36800__$1;
(statearr_36804_38981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36801 === (5))){
var state_36800__$1 = state_36800;
var statearr_36805_38982 = state_36800__$1;
(statearr_36805_38982[(2)] = null);

(statearr_36805_38982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36801 === (6))){
var state_36800__$1 = state_36800;
var statearr_36806_38983 = state_36800__$1;
(statearr_36806_38983[(2)] = null);

(statearr_36806_38983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36801 === (7))){
var inst_36796 = (state_36800[(2)]);
var state_36800__$1 = state_36800;
var statearr_36807_38984 = state_36800__$1;
(statearr_36807_38984[(2)] = inst_36796);

(statearr_36807_38984[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__38955,c__36461__auto___38978,G__36754_38956,G__36754_38957__$1,n__4648__auto___38954,jobs,results,process,async))
;
return ((function (__38955,switch__36294__auto__,c__36461__auto___38978,G__36754_38956,G__36754_38957__$1,n__4648__auto___38954,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36295__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36295__auto____0 = (function (){
var statearr_36808 = [null,null,null,null,null,null,null];
(statearr_36808[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36295__auto__);

(statearr_36808[(1)] = (1));

return statearr_36808;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36295__auto____1 = (function (state_36800){
while(true){
var ret_value__36296__auto__ = (function (){try{while(true){
var result__36297__auto__ = switch__36294__auto__(state_36800);
if(cljs.core.keyword_identical_QMARK_(result__36297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36297__auto__;
}
break;
}
}catch (e36809){var ex__36298__auto__ = e36809;
var statearr_36810_38990 = state_36800;
(statearr_36810_38990[(2)] = ex__36298__auto__);


if(cljs.core.seq((state_36800[(4)]))){
var statearr_36811_38991 = state_36800;
(statearr_36811_38991[(1)] = cljs.core.first((state_36800[(4)])));

} else {
throw ex__36298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38992 = state_36800;
state_36800 = G__38992;
continue;
} else {
return ret_value__36296__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36295__auto__ = function(state_36800){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36295__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36295__auto____1.call(this,state_36800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36295__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36295__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36295__auto__;
})()
;})(__38955,switch__36294__auto__,c__36461__auto___38978,G__36754_38956,G__36754_38957__$1,n__4648__auto___38954,jobs,results,process,async))
})();
var state__36463__auto__ = (function (){var statearr_36813 = f__36462__auto__();
(statearr_36813[(6)] = c__36461__auto___38978);

return statearr_36813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36463__auto__);
});})(__38955,c__36461__auto___38978,G__36754_38956,G__36754_38957__$1,n__4648__auto___38954,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36754_38957__$1)].join('')));

}

var G__38993 = (__38955 + (1));
__38955 = G__38993;
continue;
} else {
}
break;
}

var c__36461__auto___38994 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36462__auto__ = (function (){var switch__36294__auto__ = (function (state_36837){
var state_val_36838 = (state_36837[(1)]);
if((state_val_36838 === (7))){
var inst_36833 = (state_36837[(2)]);
var state_36837__$1 = state_36837;
var statearr_36842_38995 = state_36837__$1;
(statearr_36842_38995[(2)] = inst_36833);

(statearr_36842_38995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36838 === (1))){
var state_36837__$1 = state_36837;
var statearr_36845_38996 = state_36837__$1;
(statearr_36845_38996[(2)] = null);

(statearr_36845_38996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36838 === (4))){
var inst_36817 = (state_36837[(7)]);
var inst_36817__$1 = (state_36837[(2)]);
var inst_36818 = (inst_36817__$1 == null);
var state_36837__$1 = (function (){var statearr_36855 = state_36837;
(statearr_36855[(7)] = inst_36817__$1);

return statearr_36855;
})();
if(cljs.core.truth_(inst_36818)){
var statearr_36858_38997 = state_36837__$1;
(statearr_36858_38997[(1)] = (5));

} else {
var statearr_36860_38998 = state_36837__$1;
(statearr_36860_38998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36838 === (6))){
var inst_36822 = (state_36837[(8)]);
var inst_36817 = (state_36837[(7)]);
var inst_36822__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_36824 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36825 = [inst_36817,inst_36822__$1];
var inst_36826 = (new cljs.core.PersistentVector(null,2,(5),inst_36824,inst_36825,null));
var state_36837__$1 = (function (){var statearr_36871 = state_36837;
(statearr_36871[(8)] = inst_36822__$1);

return statearr_36871;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36837__$1,(8),jobs,inst_36826);
} else {
if((state_val_36838 === (3))){
var inst_36835 = (state_36837[(2)]);
var state_36837__$1 = state_36837;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36837__$1,inst_36835);
} else {
if((state_val_36838 === (2))){
var state_36837__$1 = state_36837;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36837__$1,(4),from);
} else {
if((state_val_36838 === (9))){
var inst_36830 = (state_36837[(2)]);
var state_36837__$1 = (function (){var statearr_36874 = state_36837;
(statearr_36874[(9)] = inst_36830);

return statearr_36874;
})();
var statearr_36875_38999 = state_36837__$1;
(statearr_36875_38999[(2)] = null);

(statearr_36875_38999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36838 === (5))){
var inst_36820 = cljs.core.async.close_BANG_(jobs);
var state_36837__$1 = state_36837;
var statearr_36878_39000 = state_36837__$1;
(statearr_36878_39000[(2)] = inst_36820);

(statearr_36878_39000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36838 === (8))){
var inst_36822 = (state_36837[(8)]);
var inst_36828 = (state_36837[(2)]);
var state_36837__$1 = (function (){var statearr_36879 = state_36837;
(statearr_36879[(10)] = inst_36828);

return statearr_36879;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36837__$1,(9),results,inst_36822);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36295__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36295__auto____0 = (function (){
var statearr_36880 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36880[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36295__auto__);

(statearr_36880[(1)] = (1));

return statearr_36880;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36295__auto____1 = (function (state_36837){
while(true){
var ret_value__36296__auto__ = (function (){try{while(true){
var result__36297__auto__ = switch__36294__auto__(state_36837);
if(cljs.core.keyword_identical_QMARK_(result__36297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36297__auto__;
}
break;
}
}catch (e36881){var ex__36298__auto__ = e36881;
var statearr_36882_39001 = state_36837;
(statearr_36882_39001[(2)] = ex__36298__auto__);


if(cljs.core.seq((state_36837[(4)]))){
var statearr_36883_39002 = state_36837;
(statearr_36883_39002[(1)] = cljs.core.first((state_36837[(4)])));

} else {
throw ex__36298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39003 = state_36837;
state_36837 = G__39003;
continue;
} else {
return ret_value__36296__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36295__auto__ = function(state_36837){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36295__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36295__auto____1.call(this,state_36837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36295__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36295__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36295__auto__;
})()
})();
var state__36463__auto__ = (function (){var statearr_36886 = f__36462__auto__();
(statearr_36886[(6)] = c__36461__auto___38994);

return statearr_36886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36463__auto__);
}));


var c__36461__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36462__auto__ = (function (){var switch__36294__auto__ = (function (state_36967){
var state_val_36968 = (state_36967[(1)]);
if((state_val_36968 === (7))){
var inst_36963 = (state_36967[(2)]);
var state_36967__$1 = state_36967;
var statearr_36991_39005 = state_36967__$1;
(statearr_36991_39005[(2)] = inst_36963);

(statearr_36991_39005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36968 === (20))){
var state_36967__$1 = state_36967;
var statearr_36992_39006 = state_36967__$1;
(statearr_36992_39006[(2)] = null);

(statearr_36992_39006[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36968 === (1))){
var state_36967__$1 = state_36967;
var statearr_36993_39007 = state_36967__$1;
(statearr_36993_39007[(2)] = null);

(statearr_36993_39007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36968 === (4))){
var inst_36893 = (state_36967[(7)]);
var inst_36893__$1 = (state_36967[(2)]);
var inst_36894 = (inst_36893__$1 == null);
var state_36967__$1 = (function (){var statearr_36995 = state_36967;
(statearr_36995[(7)] = inst_36893__$1);

return statearr_36995;
})();
if(cljs.core.truth_(inst_36894)){
var statearr_36996_39009 = state_36967__$1;
(statearr_36996_39009[(1)] = (5));

} else {
var statearr_36998_39011 = state_36967__$1;
(statearr_36998_39011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36968 === (15))){
var inst_36912 = (state_36967[(8)]);
var state_36967__$1 = state_36967;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36967__$1,(18),to,inst_36912);
} else {
if((state_val_36968 === (21))){
var inst_36958 = (state_36967[(2)]);
var state_36967__$1 = state_36967;
var statearr_37001_39012 = state_36967__$1;
(statearr_37001_39012[(2)] = inst_36958);

(statearr_37001_39012[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36968 === (13))){
var inst_36960 = (state_36967[(2)]);
var state_36967__$1 = (function (){var statearr_37003 = state_36967;
(statearr_37003[(9)] = inst_36960);

return statearr_37003;
})();
var statearr_37004_39013 = state_36967__$1;
(statearr_37004_39013[(2)] = null);

(statearr_37004_39013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36968 === (6))){
var inst_36893 = (state_36967[(7)]);
var state_36967__$1 = state_36967;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36967__$1,(11),inst_36893);
} else {
if((state_val_36968 === (17))){
var inst_36949 = (state_36967[(2)]);
var state_36967__$1 = state_36967;
if(cljs.core.truth_(inst_36949)){
var statearr_37005_39014 = state_36967__$1;
(statearr_37005_39014[(1)] = (19));

} else {
var statearr_37006_39015 = state_36967__$1;
(statearr_37006_39015[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36968 === (3))){
var inst_36965 = (state_36967[(2)]);
var state_36967__$1 = state_36967;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36967__$1,inst_36965);
} else {
if((state_val_36968 === (12))){
var inst_36908 = (state_36967[(10)]);
var state_36967__$1 = state_36967;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36967__$1,(14),inst_36908);
} else {
if((state_val_36968 === (2))){
var state_36967__$1 = state_36967;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36967__$1,(4),results);
} else {
if((state_val_36968 === (19))){
var state_36967__$1 = state_36967;
var statearr_37008_39017 = state_36967__$1;
(statearr_37008_39017[(2)] = null);

(statearr_37008_39017[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36968 === (11))){
var inst_36908 = (state_36967[(2)]);
var state_36967__$1 = (function (){var statearr_37009 = state_36967;
(statearr_37009[(10)] = inst_36908);

return statearr_37009;
})();
var statearr_37010_39019 = state_36967__$1;
(statearr_37010_39019[(2)] = null);

(statearr_37010_39019[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36968 === (9))){
var state_36967__$1 = state_36967;
var statearr_37011_39020 = state_36967__$1;
(statearr_37011_39020[(2)] = null);

(statearr_37011_39020[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36968 === (5))){
var state_36967__$1 = state_36967;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37012_39021 = state_36967__$1;
(statearr_37012_39021[(1)] = (8));

} else {
var statearr_37017_39022 = state_36967__$1;
(statearr_37017_39022[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36968 === (14))){
var inst_36912 = (state_36967[(8)]);
var inst_36912__$1 = (state_36967[(2)]);
var inst_36929 = (inst_36912__$1 == null);
var inst_36934 = cljs.core.not(inst_36929);
var state_36967__$1 = (function (){var statearr_37027 = state_36967;
(statearr_37027[(8)] = inst_36912__$1);

return statearr_37027;
})();
if(inst_36934){
var statearr_37028_39023 = state_36967__$1;
(statearr_37028_39023[(1)] = (15));

} else {
var statearr_37029_39024 = state_36967__$1;
(statearr_37029_39024[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36968 === (16))){
var state_36967__$1 = state_36967;
var statearr_37030_39025 = state_36967__$1;
(statearr_37030_39025[(2)] = false);

(statearr_37030_39025[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36968 === (10))){
var inst_36901 = (state_36967[(2)]);
var state_36967__$1 = state_36967;
var statearr_37033_39027 = state_36967__$1;
(statearr_37033_39027[(2)] = inst_36901);

(statearr_37033_39027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36968 === (18))){
var inst_36945 = (state_36967[(2)]);
var state_36967__$1 = state_36967;
var statearr_37034_39029 = state_36967__$1;
(statearr_37034_39029[(2)] = inst_36945);

(statearr_37034_39029[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36968 === (8))){
var inst_36898 = cljs.core.async.close_BANG_(to);
var state_36967__$1 = state_36967;
var statearr_37035_39030 = state_36967__$1;
(statearr_37035_39030[(2)] = inst_36898);

(statearr_37035_39030[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36295__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36295__auto____0 = (function (){
var statearr_37036 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37036[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36295__auto__);

(statearr_37036[(1)] = (1));

return statearr_37036;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36295__auto____1 = (function (state_36967){
while(true){
var ret_value__36296__auto__ = (function (){try{while(true){
var result__36297__auto__ = switch__36294__auto__(state_36967);
if(cljs.core.keyword_identical_QMARK_(result__36297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36297__auto__;
}
break;
}
}catch (e37037){var ex__36298__auto__ = e37037;
var statearr_37038_39031 = state_36967;
(statearr_37038_39031[(2)] = ex__36298__auto__);


if(cljs.core.seq((state_36967[(4)]))){
var statearr_37039_39032 = state_36967;
(statearr_37039_39032[(1)] = cljs.core.first((state_36967[(4)])));

} else {
throw ex__36298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39035 = state_36967;
state_36967 = G__39035;
continue;
} else {
return ret_value__36296__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36295__auto__ = function(state_36967){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36295__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36295__auto____1.call(this,state_36967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36295__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36295__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36295__auto__;
})()
})();
var state__36463__auto__ = (function (){var statearr_37040 = f__36462__auto__();
(statearr_37040[(6)] = c__36461__auto__);

return statearr_37040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36463__auto__);
}));

return c__36461__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__37044 = arguments.length;
switch (G__37044) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__37059 = arguments.length;
switch (G__37059) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__37062 = arguments.length;
switch (G__37062) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__36461__auto___39050 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36462__auto__ = (function (){var switch__36294__auto__ = (function (state_37090){
var state_val_37091 = (state_37090[(1)]);
if((state_val_37091 === (7))){
var inst_37086 = (state_37090[(2)]);
var state_37090__$1 = state_37090;
var statearr_37092_39051 = state_37090__$1;
(statearr_37092_39051[(2)] = inst_37086);

(statearr_37092_39051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37091 === (1))){
var state_37090__$1 = state_37090;
var statearr_37093_39052 = state_37090__$1;
(statearr_37093_39052[(2)] = null);

(statearr_37093_39052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37091 === (4))){
var inst_37067 = (state_37090[(7)]);
var inst_37067__$1 = (state_37090[(2)]);
var inst_37068 = (inst_37067__$1 == null);
var state_37090__$1 = (function (){var statearr_37096 = state_37090;
(statearr_37096[(7)] = inst_37067__$1);

return statearr_37096;
})();
if(cljs.core.truth_(inst_37068)){
var statearr_37099_39053 = state_37090__$1;
(statearr_37099_39053[(1)] = (5));

} else {
var statearr_37100_39054 = state_37090__$1;
(statearr_37100_39054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37091 === (13))){
var state_37090__$1 = state_37090;
var statearr_37101_39055 = state_37090__$1;
(statearr_37101_39055[(2)] = null);

(statearr_37101_39055[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37091 === (6))){
var inst_37067 = (state_37090[(7)]);
var inst_37073 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_37067) : p.call(null,inst_37067));
var state_37090__$1 = state_37090;
if(cljs.core.truth_(inst_37073)){
var statearr_37103_39056 = state_37090__$1;
(statearr_37103_39056[(1)] = (9));

} else {
var statearr_37104_39057 = state_37090__$1;
(statearr_37104_39057[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37091 === (3))){
var inst_37088 = (state_37090[(2)]);
var state_37090__$1 = state_37090;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37090__$1,inst_37088);
} else {
if((state_val_37091 === (12))){
var state_37090__$1 = state_37090;
var statearr_37105_39058 = state_37090__$1;
(statearr_37105_39058[(2)] = null);

(statearr_37105_39058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37091 === (2))){
var state_37090__$1 = state_37090;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37090__$1,(4),ch);
} else {
if((state_val_37091 === (11))){
var inst_37067 = (state_37090[(7)]);
var inst_37077 = (state_37090[(2)]);
var state_37090__$1 = state_37090;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37090__$1,(8),inst_37077,inst_37067);
} else {
if((state_val_37091 === (9))){
var state_37090__$1 = state_37090;
var statearr_37107_39059 = state_37090__$1;
(statearr_37107_39059[(2)] = tc);

(statearr_37107_39059[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37091 === (5))){
var inst_37070 = cljs.core.async.close_BANG_(tc);
var inst_37071 = cljs.core.async.close_BANG_(fc);
var state_37090__$1 = (function (){var statearr_37109 = state_37090;
(statearr_37109[(8)] = inst_37070);

return statearr_37109;
})();
var statearr_37110_39060 = state_37090__$1;
(statearr_37110_39060[(2)] = inst_37071);

(statearr_37110_39060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37091 === (14))){
var inst_37084 = (state_37090[(2)]);
var state_37090__$1 = state_37090;
var statearr_37111_39061 = state_37090__$1;
(statearr_37111_39061[(2)] = inst_37084);

(statearr_37111_39061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37091 === (10))){
var state_37090__$1 = state_37090;
var statearr_37114_39062 = state_37090__$1;
(statearr_37114_39062[(2)] = fc);

(statearr_37114_39062[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37091 === (8))){
var inst_37079 = (state_37090[(2)]);
var state_37090__$1 = state_37090;
if(cljs.core.truth_(inst_37079)){
var statearr_37117_39063 = state_37090__$1;
(statearr_37117_39063[(1)] = (12));

} else {
var statearr_37118_39064 = state_37090__$1;
(statearr_37118_39064[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36295__auto__ = null;
var cljs$core$async$state_machine__36295__auto____0 = (function (){
var statearr_37119 = [null,null,null,null,null,null,null,null,null];
(statearr_37119[(0)] = cljs$core$async$state_machine__36295__auto__);

(statearr_37119[(1)] = (1));

return statearr_37119;
});
var cljs$core$async$state_machine__36295__auto____1 = (function (state_37090){
while(true){
var ret_value__36296__auto__ = (function (){try{while(true){
var result__36297__auto__ = switch__36294__auto__(state_37090);
if(cljs.core.keyword_identical_QMARK_(result__36297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36297__auto__;
}
break;
}
}catch (e37120){var ex__36298__auto__ = e37120;
var statearr_37121_39065 = state_37090;
(statearr_37121_39065[(2)] = ex__36298__auto__);


if(cljs.core.seq((state_37090[(4)]))){
var statearr_37122_39066 = state_37090;
(statearr_37122_39066[(1)] = cljs.core.first((state_37090[(4)])));

} else {
throw ex__36298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39067 = state_37090;
state_37090 = G__39067;
continue;
} else {
return ret_value__36296__auto__;
}
break;
}
});
cljs$core$async$state_machine__36295__auto__ = function(state_37090){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36295__auto____1.call(this,state_37090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36295__auto____0;
cljs$core$async$state_machine__36295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36295__auto____1;
return cljs$core$async$state_machine__36295__auto__;
})()
})();
var state__36463__auto__ = (function (){var statearr_37124 = f__36462__auto__();
(statearr_37124[(6)] = c__36461__auto___39050);

return statearr_37124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36463__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__36461__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36462__auto__ = (function (){var switch__36294__auto__ = (function (state_37158){
var state_val_37159 = (state_37158[(1)]);
if((state_val_37159 === (7))){
var inst_37154 = (state_37158[(2)]);
var state_37158__$1 = state_37158;
var statearr_37161_39070 = state_37158__$1;
(statearr_37161_39070[(2)] = inst_37154);

(statearr_37161_39070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37159 === (1))){
var inst_37129 = init;
var inst_37130 = inst_37129;
var state_37158__$1 = (function (){var statearr_37162 = state_37158;
(statearr_37162[(7)] = inst_37130);

return statearr_37162;
})();
var statearr_37163_39071 = state_37158__$1;
(statearr_37163_39071[(2)] = null);

(statearr_37163_39071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37159 === (4))){
var inst_37133 = (state_37158[(8)]);
var inst_37133__$1 = (state_37158[(2)]);
var inst_37134 = (inst_37133__$1 == null);
var state_37158__$1 = (function (){var statearr_37164 = state_37158;
(statearr_37164[(8)] = inst_37133__$1);

return statearr_37164;
})();
if(cljs.core.truth_(inst_37134)){
var statearr_37166_39074 = state_37158__$1;
(statearr_37166_39074[(1)] = (5));

} else {
var statearr_37168_39075 = state_37158__$1;
(statearr_37168_39075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37159 === (6))){
var inst_37130 = (state_37158[(7)]);
var inst_37145 = (state_37158[(9)]);
var inst_37133 = (state_37158[(8)]);
var inst_37145__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_37130,inst_37133) : f.call(null,inst_37130,inst_37133));
var inst_37146 = cljs.core.reduced_QMARK_(inst_37145__$1);
var state_37158__$1 = (function (){var statearr_37169 = state_37158;
(statearr_37169[(9)] = inst_37145__$1);

return statearr_37169;
})();
if(inst_37146){
var statearr_37170_39076 = state_37158__$1;
(statearr_37170_39076[(1)] = (8));

} else {
var statearr_37171_39077 = state_37158__$1;
(statearr_37171_39077[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37159 === (3))){
var inst_37156 = (state_37158[(2)]);
var state_37158__$1 = state_37158;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37158__$1,inst_37156);
} else {
if((state_val_37159 === (2))){
var state_37158__$1 = state_37158;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37158__$1,(4),ch);
} else {
if((state_val_37159 === (9))){
var inst_37145 = (state_37158[(9)]);
var inst_37130 = inst_37145;
var state_37158__$1 = (function (){var statearr_37174 = state_37158;
(statearr_37174[(7)] = inst_37130);

return statearr_37174;
})();
var statearr_37177_39080 = state_37158__$1;
(statearr_37177_39080[(2)] = null);

(statearr_37177_39080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37159 === (5))){
var inst_37130 = (state_37158[(7)]);
var state_37158__$1 = state_37158;
var statearr_37182_39081 = state_37158__$1;
(statearr_37182_39081[(2)] = inst_37130);

(statearr_37182_39081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37159 === (10))){
var inst_37152 = (state_37158[(2)]);
var state_37158__$1 = state_37158;
var statearr_37185_39082 = state_37158__$1;
(statearr_37185_39082[(2)] = inst_37152);

(statearr_37185_39082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37159 === (8))){
var inst_37145 = (state_37158[(9)]);
var inst_37148 = cljs.core.deref(inst_37145);
var state_37158__$1 = state_37158;
var statearr_37186_39084 = state_37158__$1;
(statearr_37186_39084[(2)] = inst_37148);

(statearr_37186_39084[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__36295__auto__ = null;
var cljs$core$async$reduce_$_state_machine__36295__auto____0 = (function (){
var statearr_37187 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37187[(0)] = cljs$core$async$reduce_$_state_machine__36295__auto__);

(statearr_37187[(1)] = (1));

return statearr_37187;
});
var cljs$core$async$reduce_$_state_machine__36295__auto____1 = (function (state_37158){
while(true){
var ret_value__36296__auto__ = (function (){try{while(true){
var result__36297__auto__ = switch__36294__auto__(state_37158);
if(cljs.core.keyword_identical_QMARK_(result__36297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36297__auto__;
}
break;
}
}catch (e37188){var ex__36298__auto__ = e37188;
var statearr_37189_39088 = state_37158;
(statearr_37189_39088[(2)] = ex__36298__auto__);


if(cljs.core.seq((state_37158[(4)]))){
var statearr_37190_39089 = state_37158;
(statearr_37190_39089[(1)] = cljs.core.first((state_37158[(4)])));

} else {
throw ex__36298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39090 = state_37158;
state_37158 = G__39090;
continue;
} else {
return ret_value__36296__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__36295__auto__ = function(state_37158){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__36295__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__36295__auto____1.call(this,state_37158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__36295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__36295__auto____0;
cljs$core$async$reduce_$_state_machine__36295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__36295__auto____1;
return cljs$core$async$reduce_$_state_machine__36295__auto__;
})()
})();
var state__36463__auto__ = (function (){var statearr_37191 = f__36462__auto__();
(statearr_37191[(6)] = c__36461__auto__);

return statearr_37191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36463__auto__);
}));

return c__36461__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__36461__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36462__auto__ = (function (){var switch__36294__auto__ = (function (state_37199){
var state_val_37200 = (state_37199[(1)]);
if((state_val_37200 === (1))){
var inst_37194 = cljs.core.async.reduce(f__$1,init,ch);
var state_37199__$1 = state_37199;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37199__$1,(2),inst_37194);
} else {
if((state_val_37200 === (2))){
var inst_37196 = (state_37199[(2)]);
var inst_37197 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_37196) : f__$1.call(null,inst_37196));
var state_37199__$1 = state_37199;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37199__$1,inst_37197);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__36295__auto__ = null;
var cljs$core$async$transduce_$_state_machine__36295__auto____0 = (function (){
var statearr_37207 = [null,null,null,null,null,null,null];
(statearr_37207[(0)] = cljs$core$async$transduce_$_state_machine__36295__auto__);

(statearr_37207[(1)] = (1));

return statearr_37207;
});
var cljs$core$async$transduce_$_state_machine__36295__auto____1 = (function (state_37199){
while(true){
var ret_value__36296__auto__ = (function (){try{while(true){
var result__36297__auto__ = switch__36294__auto__(state_37199);
if(cljs.core.keyword_identical_QMARK_(result__36297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36297__auto__;
}
break;
}
}catch (e37208){var ex__36298__auto__ = e37208;
var statearr_37209_39093 = state_37199;
(statearr_37209_39093[(2)] = ex__36298__auto__);


if(cljs.core.seq((state_37199[(4)]))){
var statearr_37211_39094 = state_37199;
(statearr_37211_39094[(1)] = cljs.core.first((state_37199[(4)])));

} else {
throw ex__36298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39095 = state_37199;
state_37199 = G__39095;
continue;
} else {
return ret_value__36296__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__36295__auto__ = function(state_37199){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__36295__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__36295__auto____1.call(this,state_37199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__36295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__36295__auto____0;
cljs$core$async$transduce_$_state_machine__36295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__36295__auto____1;
return cljs$core$async$transduce_$_state_machine__36295__auto__;
})()
})();
var state__36463__auto__ = (function (){var statearr_37212 = f__36462__auto__();
(statearr_37212[(6)] = c__36461__auto__);

return statearr_37212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36463__auto__);
}));

return c__36461__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__37217 = arguments.length;
switch (G__37217) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__36461__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36462__auto__ = (function (){var switch__36294__auto__ = (function (state_37245){
var state_val_37246 = (state_37245[(1)]);
if((state_val_37246 === (7))){
var inst_37227 = (state_37245[(2)]);
var state_37245__$1 = state_37245;
var statearr_37249_39098 = state_37245__$1;
(statearr_37249_39098[(2)] = inst_37227);

(statearr_37249_39098[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37246 === (1))){
var inst_37221 = cljs.core.seq(coll);
var inst_37222 = inst_37221;
var state_37245__$1 = (function (){var statearr_37251 = state_37245;
(statearr_37251[(7)] = inst_37222);

return statearr_37251;
})();
var statearr_37252_39099 = state_37245__$1;
(statearr_37252_39099[(2)] = null);

(statearr_37252_39099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37246 === (4))){
var inst_37222 = (state_37245[(7)]);
var inst_37225 = cljs.core.first(inst_37222);
var state_37245__$1 = state_37245;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37245__$1,(7),ch,inst_37225);
} else {
if((state_val_37246 === (13))){
var inst_37239 = (state_37245[(2)]);
var state_37245__$1 = state_37245;
var statearr_37256_39100 = state_37245__$1;
(statearr_37256_39100[(2)] = inst_37239);

(statearr_37256_39100[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37246 === (6))){
var inst_37230 = (state_37245[(2)]);
var state_37245__$1 = state_37245;
if(cljs.core.truth_(inst_37230)){
var statearr_37257_39101 = state_37245__$1;
(statearr_37257_39101[(1)] = (8));

} else {
var statearr_37258_39106 = state_37245__$1;
(statearr_37258_39106[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37246 === (3))){
var inst_37243 = (state_37245[(2)]);
var state_37245__$1 = state_37245;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37245__$1,inst_37243);
} else {
if((state_val_37246 === (12))){
var state_37245__$1 = state_37245;
var statearr_37260_39107 = state_37245__$1;
(statearr_37260_39107[(2)] = null);

(statearr_37260_39107[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37246 === (2))){
var inst_37222 = (state_37245[(7)]);
var state_37245__$1 = state_37245;
if(cljs.core.truth_(inst_37222)){
var statearr_37275_39108 = state_37245__$1;
(statearr_37275_39108[(1)] = (4));

} else {
var statearr_37276_39109 = state_37245__$1;
(statearr_37276_39109[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37246 === (11))){
var inst_37236 = cljs.core.async.close_BANG_(ch);
var state_37245__$1 = state_37245;
var statearr_37285_39110 = state_37245__$1;
(statearr_37285_39110[(2)] = inst_37236);

(statearr_37285_39110[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37246 === (9))){
var state_37245__$1 = state_37245;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37286_39111 = state_37245__$1;
(statearr_37286_39111[(1)] = (11));

} else {
var statearr_37287_39112 = state_37245__$1;
(statearr_37287_39112[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37246 === (5))){
var inst_37222 = (state_37245[(7)]);
var state_37245__$1 = state_37245;
var statearr_37290_39113 = state_37245__$1;
(statearr_37290_39113[(2)] = inst_37222);

(statearr_37290_39113[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37246 === (10))){
var inst_37241 = (state_37245[(2)]);
var state_37245__$1 = state_37245;
var statearr_37291_39114 = state_37245__$1;
(statearr_37291_39114[(2)] = inst_37241);

(statearr_37291_39114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37246 === (8))){
var inst_37222 = (state_37245[(7)]);
var inst_37232 = cljs.core.next(inst_37222);
var inst_37222__$1 = inst_37232;
var state_37245__$1 = (function (){var statearr_37292 = state_37245;
(statearr_37292[(7)] = inst_37222__$1);

return statearr_37292;
})();
var statearr_37293_39115 = state_37245__$1;
(statearr_37293_39115[(2)] = null);

(statearr_37293_39115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36295__auto__ = null;
var cljs$core$async$state_machine__36295__auto____0 = (function (){
var statearr_37294 = [null,null,null,null,null,null,null,null];
(statearr_37294[(0)] = cljs$core$async$state_machine__36295__auto__);

(statearr_37294[(1)] = (1));

return statearr_37294;
});
var cljs$core$async$state_machine__36295__auto____1 = (function (state_37245){
while(true){
var ret_value__36296__auto__ = (function (){try{while(true){
var result__36297__auto__ = switch__36294__auto__(state_37245);
if(cljs.core.keyword_identical_QMARK_(result__36297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36297__auto__;
}
break;
}
}catch (e37295){var ex__36298__auto__ = e37295;
var statearr_37296_39119 = state_37245;
(statearr_37296_39119[(2)] = ex__36298__auto__);


if(cljs.core.seq((state_37245[(4)]))){
var statearr_37297_39120 = state_37245;
(statearr_37297_39120[(1)] = cljs.core.first((state_37245[(4)])));

} else {
throw ex__36298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39121 = state_37245;
state_37245 = G__39121;
continue;
} else {
return ret_value__36296__auto__;
}
break;
}
});
cljs$core$async$state_machine__36295__auto__ = function(state_37245){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36295__auto____1.call(this,state_37245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36295__auto____0;
cljs$core$async$state_machine__36295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36295__auto____1;
return cljs$core$async$state_machine__36295__auto__;
})()
})();
var state__36463__auto__ = (function (){var statearr_37299 = f__36462__auto__();
(statearr_37299[(6)] = c__36461__auto__);

return statearr_37299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36463__auto__);
}));

return c__36461__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__37321 = arguments.length;
switch (G__37321) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_39128 = (function (_){
var x__4463__auto__ = (((_ == null))?null:_);
var m__4464__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4464__auto__.call(null,_));
} else {
var m__4461__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4461__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_39128(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_39139 = (function (m,ch,close_QMARK_){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4464__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4461__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4461__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_39139(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_39140 = (function (m,ch){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4464__auto__.call(null,m,ch));
} else {
var m__4461__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4461__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_39140(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_39158 = (function (m){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4464__auto__.call(null,m));
} else {
var m__4461__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4461__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_39158(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37346 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37346 = (function (ch,cs,meta37347){
this.ch = ch;
this.cs = cs;
this.meta37347 = meta37347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37348,meta37347__$1){
var self__ = this;
var _37348__$1 = this;
return (new cljs.core.async.t_cljs$core$async37346(self__.ch,self__.cs,meta37347__$1));
}));

(cljs.core.async.t_cljs$core$async37346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37348){
var self__ = this;
var _37348__$1 = this;
return self__.meta37347;
}));

(cljs.core.async.t_cljs$core$async37346.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37346.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async37346.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37346.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async37346.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async37346.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async37346.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta37347","meta37347",1021605027,null)], null);
}));

(cljs.core.async.t_cljs$core$async37346.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37346.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37346");

(cljs.core.async.t_cljs$core$async37346.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async37346");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37346.
 */
cljs.core.async.__GT_t_cljs$core$async37346 = (function cljs$core$async$mult_$___GT_t_cljs$core$async37346(ch__$1,cs__$1,meta37347){
return (new cljs.core.async.t_cljs$core$async37346(ch__$1,cs__$1,meta37347));
});

}

return (new cljs.core.async.t_cljs$core$async37346(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__36461__auto___39197 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36462__auto__ = (function (){var switch__36294__auto__ = (function (state_37522){
var state_val_37523 = (state_37522[(1)]);
if((state_val_37523 === (7))){
var inst_37515 = (state_37522[(2)]);
var state_37522__$1 = state_37522;
var statearr_37526_39201 = state_37522__$1;
(statearr_37526_39201[(2)] = inst_37515);

(statearr_37526_39201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (20))){
var inst_37396 = (state_37522[(7)]);
var inst_37419 = cljs.core.first(inst_37396);
var inst_37420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37419,(0),null);
var inst_37421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37419,(1),null);
var state_37522__$1 = (function (){var statearr_37532 = state_37522;
(statearr_37532[(8)] = inst_37420);

return statearr_37532;
})();
if(cljs.core.truth_(inst_37421)){
var statearr_37534_39205 = state_37522__$1;
(statearr_37534_39205[(1)] = (22));

} else {
var statearr_37536_39206 = state_37522__$1;
(statearr_37536_39206[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (27))){
var inst_37449 = (state_37522[(9)]);
var inst_37359 = (state_37522[(10)]);
var inst_37451 = (state_37522[(11)]);
var inst_37458 = (state_37522[(12)]);
var inst_37458__$1 = cljs.core._nth(inst_37449,inst_37451);
var inst_37459 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37458__$1,inst_37359,done);
var state_37522__$1 = (function (){var statearr_37558 = state_37522;
(statearr_37558[(12)] = inst_37458__$1);

return statearr_37558;
})();
if(cljs.core.truth_(inst_37459)){
var statearr_37559_39207 = state_37522__$1;
(statearr_37559_39207[(1)] = (30));

} else {
var statearr_37560_39208 = state_37522__$1;
(statearr_37560_39208[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (1))){
var state_37522__$1 = state_37522;
var statearr_37561_39209 = state_37522__$1;
(statearr_37561_39209[(2)] = null);

(statearr_37561_39209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (24))){
var inst_37396 = (state_37522[(7)]);
var inst_37426 = (state_37522[(2)]);
var inst_37427 = cljs.core.next(inst_37396);
var inst_37368 = inst_37427;
var inst_37369 = null;
var inst_37370 = (0);
var inst_37371 = (0);
var state_37522__$1 = (function (){var statearr_37562 = state_37522;
(statearr_37562[(13)] = inst_37368);

(statearr_37562[(14)] = inst_37370);

(statearr_37562[(15)] = inst_37426);

(statearr_37562[(16)] = inst_37369);

(statearr_37562[(17)] = inst_37371);

return statearr_37562;
})();
var statearr_37563_39211 = state_37522__$1;
(statearr_37563_39211[(2)] = null);

(statearr_37563_39211[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (39))){
var state_37522__$1 = state_37522;
var statearr_37571_39212 = state_37522__$1;
(statearr_37571_39212[(2)] = null);

(statearr_37571_39212[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (4))){
var inst_37359 = (state_37522[(10)]);
var inst_37359__$1 = (state_37522[(2)]);
var inst_37360 = (inst_37359__$1 == null);
var state_37522__$1 = (function (){var statearr_37573 = state_37522;
(statearr_37573[(10)] = inst_37359__$1);

return statearr_37573;
})();
if(cljs.core.truth_(inst_37360)){
var statearr_37574_39213 = state_37522__$1;
(statearr_37574_39213[(1)] = (5));

} else {
var statearr_37575_39214 = state_37522__$1;
(statearr_37575_39214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (15))){
var inst_37368 = (state_37522[(13)]);
var inst_37370 = (state_37522[(14)]);
var inst_37369 = (state_37522[(16)]);
var inst_37371 = (state_37522[(17)]);
var inst_37390 = (state_37522[(2)]);
var inst_37391 = (inst_37371 + (1));
var tmp37564 = inst_37368;
var tmp37565 = inst_37370;
var tmp37566 = inst_37369;
var inst_37368__$1 = tmp37564;
var inst_37369__$1 = tmp37566;
var inst_37370__$1 = tmp37565;
var inst_37371__$1 = inst_37391;
var state_37522__$1 = (function (){var statearr_37576 = state_37522;
(statearr_37576[(18)] = inst_37390);

(statearr_37576[(13)] = inst_37368__$1);

(statearr_37576[(14)] = inst_37370__$1);

(statearr_37576[(16)] = inst_37369__$1);

(statearr_37576[(17)] = inst_37371__$1);

return statearr_37576;
})();
var statearr_37577_39215 = state_37522__$1;
(statearr_37577_39215[(2)] = null);

(statearr_37577_39215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (21))){
var inst_37430 = (state_37522[(2)]);
var state_37522__$1 = state_37522;
var statearr_37581_39216 = state_37522__$1;
(statearr_37581_39216[(2)] = inst_37430);

(statearr_37581_39216[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (31))){
var inst_37458 = (state_37522[(12)]);
var inst_37462 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37458);
var state_37522__$1 = state_37522;
var statearr_37583_39217 = state_37522__$1;
(statearr_37583_39217[(2)] = inst_37462);

(statearr_37583_39217[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (32))){
var inst_37450 = (state_37522[(19)]);
var inst_37449 = (state_37522[(9)]);
var inst_37451 = (state_37522[(11)]);
var inst_37448 = (state_37522[(20)]);
var inst_37464 = (state_37522[(2)]);
var inst_37465 = (inst_37451 + (1));
var tmp37578 = inst_37450;
var tmp37579 = inst_37449;
var tmp37580 = inst_37448;
var inst_37448__$1 = tmp37580;
var inst_37449__$1 = tmp37579;
var inst_37450__$1 = tmp37578;
var inst_37451__$1 = inst_37465;
var state_37522__$1 = (function (){var statearr_37584 = state_37522;
(statearr_37584[(19)] = inst_37450__$1);

(statearr_37584[(9)] = inst_37449__$1);

(statearr_37584[(11)] = inst_37451__$1);

(statearr_37584[(20)] = inst_37448__$1);

(statearr_37584[(21)] = inst_37464);

return statearr_37584;
})();
var statearr_37585_39218 = state_37522__$1;
(statearr_37585_39218[(2)] = null);

(statearr_37585_39218[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (40))){
var inst_37477 = (state_37522[(22)]);
var inst_37481 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37477);
var state_37522__$1 = state_37522;
var statearr_37586_39219 = state_37522__$1;
(statearr_37586_39219[(2)] = inst_37481);

(statearr_37586_39219[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (33))){
var inst_37468 = (state_37522[(23)]);
var inst_37470 = cljs.core.chunked_seq_QMARK_(inst_37468);
var state_37522__$1 = state_37522;
if(inst_37470){
var statearr_37588_39220 = state_37522__$1;
(statearr_37588_39220[(1)] = (36));

} else {
var statearr_37589_39221 = state_37522__$1;
(statearr_37589_39221[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (13))){
var inst_37381 = (state_37522[(24)]);
var inst_37387 = cljs.core.async.close_BANG_(inst_37381);
var state_37522__$1 = state_37522;
var statearr_37591_39224 = state_37522__$1;
(statearr_37591_39224[(2)] = inst_37387);

(statearr_37591_39224[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (22))){
var inst_37420 = (state_37522[(8)]);
var inst_37423 = cljs.core.async.close_BANG_(inst_37420);
var state_37522__$1 = state_37522;
var statearr_37595_39225 = state_37522__$1;
(statearr_37595_39225[(2)] = inst_37423);

(statearr_37595_39225[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (36))){
var inst_37468 = (state_37522[(23)]);
var inst_37472 = cljs.core.chunk_first(inst_37468);
var inst_37473 = cljs.core.chunk_rest(inst_37468);
var inst_37474 = cljs.core.count(inst_37472);
var inst_37448 = inst_37473;
var inst_37449 = inst_37472;
var inst_37450 = inst_37474;
var inst_37451 = (0);
var state_37522__$1 = (function (){var statearr_37597 = state_37522;
(statearr_37597[(19)] = inst_37450);

(statearr_37597[(9)] = inst_37449);

(statearr_37597[(11)] = inst_37451);

(statearr_37597[(20)] = inst_37448);

return statearr_37597;
})();
var statearr_37598_39226 = state_37522__$1;
(statearr_37598_39226[(2)] = null);

(statearr_37598_39226[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (41))){
var inst_37468 = (state_37522[(23)]);
var inst_37483 = (state_37522[(2)]);
var inst_37484 = cljs.core.next(inst_37468);
var inst_37448 = inst_37484;
var inst_37449 = null;
var inst_37450 = (0);
var inst_37451 = (0);
var state_37522__$1 = (function (){var statearr_37599 = state_37522;
(statearr_37599[(19)] = inst_37450);

(statearr_37599[(9)] = inst_37449);

(statearr_37599[(11)] = inst_37451);

(statearr_37599[(20)] = inst_37448);

(statearr_37599[(25)] = inst_37483);

return statearr_37599;
})();
var statearr_37600_39227 = state_37522__$1;
(statearr_37600_39227[(2)] = null);

(statearr_37600_39227[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (43))){
var state_37522__$1 = state_37522;
var statearr_37601_39228 = state_37522__$1;
(statearr_37601_39228[(2)] = null);

(statearr_37601_39228[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (29))){
var inst_37499 = (state_37522[(2)]);
var state_37522__$1 = state_37522;
var statearr_37602_39230 = state_37522__$1;
(statearr_37602_39230[(2)] = inst_37499);

(statearr_37602_39230[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (44))){
var inst_37512 = (state_37522[(2)]);
var state_37522__$1 = (function (){var statearr_37603 = state_37522;
(statearr_37603[(26)] = inst_37512);

return statearr_37603;
})();
var statearr_37604_39231 = state_37522__$1;
(statearr_37604_39231[(2)] = null);

(statearr_37604_39231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (6))){
var inst_37440 = (state_37522[(27)]);
var inst_37439 = cljs.core.deref(cs);
var inst_37440__$1 = cljs.core.keys(inst_37439);
var inst_37441 = cljs.core.count(inst_37440__$1);
var inst_37442 = cljs.core.reset_BANG_(dctr,inst_37441);
var inst_37447 = cljs.core.seq(inst_37440__$1);
var inst_37448 = inst_37447;
var inst_37449 = null;
var inst_37450 = (0);
var inst_37451 = (0);
var state_37522__$1 = (function (){var statearr_37607 = state_37522;
(statearr_37607[(19)] = inst_37450);

(statearr_37607[(9)] = inst_37449);

(statearr_37607[(28)] = inst_37442);

(statearr_37607[(27)] = inst_37440__$1);

(statearr_37607[(11)] = inst_37451);

(statearr_37607[(20)] = inst_37448);

return statearr_37607;
})();
var statearr_37608_39243 = state_37522__$1;
(statearr_37608_39243[(2)] = null);

(statearr_37608_39243[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (28))){
var inst_37448 = (state_37522[(20)]);
var inst_37468 = (state_37522[(23)]);
var inst_37468__$1 = cljs.core.seq(inst_37448);
var state_37522__$1 = (function (){var statearr_37609 = state_37522;
(statearr_37609[(23)] = inst_37468__$1);

return statearr_37609;
})();
if(inst_37468__$1){
var statearr_37610_39245 = state_37522__$1;
(statearr_37610_39245[(1)] = (33));

} else {
var statearr_37611_39246 = state_37522__$1;
(statearr_37611_39246[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (25))){
var inst_37450 = (state_37522[(19)]);
var inst_37451 = (state_37522[(11)]);
var inst_37455 = (inst_37451 < inst_37450);
var inst_37456 = inst_37455;
var state_37522__$1 = state_37522;
if(cljs.core.truth_(inst_37456)){
var statearr_37612_39247 = state_37522__$1;
(statearr_37612_39247[(1)] = (27));

} else {
var statearr_37613_39248 = state_37522__$1;
(statearr_37613_39248[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (34))){
var state_37522__$1 = state_37522;
var statearr_37614_39249 = state_37522__$1;
(statearr_37614_39249[(2)] = null);

(statearr_37614_39249[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (17))){
var state_37522__$1 = state_37522;
var statearr_37615_39250 = state_37522__$1;
(statearr_37615_39250[(2)] = null);

(statearr_37615_39250[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (3))){
var inst_37517 = (state_37522[(2)]);
var state_37522__$1 = state_37522;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37522__$1,inst_37517);
} else {
if((state_val_37523 === (12))){
var inst_37435 = (state_37522[(2)]);
var state_37522__$1 = state_37522;
var statearr_37616_39251 = state_37522__$1;
(statearr_37616_39251[(2)] = inst_37435);

(statearr_37616_39251[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (2))){
var state_37522__$1 = state_37522;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37522__$1,(4),ch);
} else {
if((state_val_37523 === (23))){
var state_37522__$1 = state_37522;
var statearr_37630_39252 = state_37522__$1;
(statearr_37630_39252[(2)] = null);

(statearr_37630_39252[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (35))){
var inst_37497 = (state_37522[(2)]);
var state_37522__$1 = state_37522;
var statearr_37631_39253 = state_37522__$1;
(statearr_37631_39253[(2)] = inst_37497);

(statearr_37631_39253[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (19))){
var inst_37396 = (state_37522[(7)]);
var inst_37400 = cljs.core.chunk_first(inst_37396);
var inst_37401 = cljs.core.chunk_rest(inst_37396);
var inst_37402 = cljs.core.count(inst_37400);
var inst_37368 = inst_37401;
var inst_37369 = inst_37400;
var inst_37370 = inst_37402;
var inst_37371 = (0);
var state_37522__$1 = (function (){var statearr_37632 = state_37522;
(statearr_37632[(13)] = inst_37368);

(statearr_37632[(14)] = inst_37370);

(statearr_37632[(16)] = inst_37369);

(statearr_37632[(17)] = inst_37371);

return statearr_37632;
})();
var statearr_37633_39254 = state_37522__$1;
(statearr_37633_39254[(2)] = null);

(statearr_37633_39254[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (11))){
var inst_37368 = (state_37522[(13)]);
var inst_37396 = (state_37522[(7)]);
var inst_37396__$1 = cljs.core.seq(inst_37368);
var state_37522__$1 = (function (){var statearr_37634 = state_37522;
(statearr_37634[(7)] = inst_37396__$1);

return statearr_37634;
})();
if(inst_37396__$1){
var statearr_37635_39255 = state_37522__$1;
(statearr_37635_39255[(1)] = (16));

} else {
var statearr_37636_39256 = state_37522__$1;
(statearr_37636_39256[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (9))){
var inst_37437 = (state_37522[(2)]);
var state_37522__$1 = state_37522;
var statearr_37637_39257 = state_37522__$1;
(statearr_37637_39257[(2)] = inst_37437);

(statearr_37637_39257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (5))){
var inst_37366 = cljs.core.deref(cs);
var inst_37367 = cljs.core.seq(inst_37366);
var inst_37368 = inst_37367;
var inst_37369 = null;
var inst_37370 = (0);
var inst_37371 = (0);
var state_37522__$1 = (function (){var statearr_37638 = state_37522;
(statearr_37638[(13)] = inst_37368);

(statearr_37638[(14)] = inst_37370);

(statearr_37638[(16)] = inst_37369);

(statearr_37638[(17)] = inst_37371);

return statearr_37638;
})();
var statearr_37639_39258 = state_37522__$1;
(statearr_37639_39258[(2)] = null);

(statearr_37639_39258[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (14))){
var state_37522__$1 = state_37522;
var statearr_37640_39259 = state_37522__$1;
(statearr_37640_39259[(2)] = null);

(statearr_37640_39259[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (45))){
var inst_37509 = (state_37522[(2)]);
var state_37522__$1 = state_37522;
var statearr_37641_39260 = state_37522__$1;
(statearr_37641_39260[(2)] = inst_37509);

(statearr_37641_39260[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (26))){
var inst_37440 = (state_37522[(27)]);
var inst_37501 = (state_37522[(2)]);
var inst_37503 = cljs.core.seq(inst_37440);
var state_37522__$1 = (function (){var statearr_37642 = state_37522;
(statearr_37642[(29)] = inst_37501);

return statearr_37642;
})();
if(inst_37503){
var statearr_37643_39261 = state_37522__$1;
(statearr_37643_39261[(1)] = (42));

} else {
var statearr_37644_39262 = state_37522__$1;
(statearr_37644_39262[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (16))){
var inst_37396 = (state_37522[(7)]);
var inst_37398 = cljs.core.chunked_seq_QMARK_(inst_37396);
var state_37522__$1 = state_37522;
if(inst_37398){
var statearr_37645_39263 = state_37522__$1;
(statearr_37645_39263[(1)] = (19));

} else {
var statearr_37646_39264 = state_37522__$1;
(statearr_37646_39264[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (38))){
var inst_37494 = (state_37522[(2)]);
var state_37522__$1 = state_37522;
var statearr_37650_39265 = state_37522__$1;
(statearr_37650_39265[(2)] = inst_37494);

(statearr_37650_39265[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (30))){
var state_37522__$1 = state_37522;
var statearr_37654_39266 = state_37522__$1;
(statearr_37654_39266[(2)] = null);

(statearr_37654_39266[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (10))){
var inst_37369 = (state_37522[(16)]);
var inst_37371 = (state_37522[(17)]);
var inst_37379 = cljs.core._nth(inst_37369,inst_37371);
var inst_37381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37379,(0),null);
var inst_37382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37379,(1),null);
var state_37522__$1 = (function (){var statearr_37656 = state_37522;
(statearr_37656[(24)] = inst_37381);

return statearr_37656;
})();
if(cljs.core.truth_(inst_37382)){
var statearr_37657_39267 = state_37522__$1;
(statearr_37657_39267[(1)] = (13));

} else {
var statearr_37658_39268 = state_37522__$1;
(statearr_37658_39268[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (18))){
var inst_37433 = (state_37522[(2)]);
var state_37522__$1 = state_37522;
var statearr_37659_39269 = state_37522__$1;
(statearr_37659_39269[(2)] = inst_37433);

(statearr_37659_39269[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (42))){
var state_37522__$1 = state_37522;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37522__$1,(45),dchan);
} else {
if((state_val_37523 === (37))){
var inst_37359 = (state_37522[(10)]);
var inst_37477 = (state_37522[(22)]);
var inst_37468 = (state_37522[(23)]);
var inst_37477__$1 = cljs.core.first(inst_37468);
var inst_37478 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37477__$1,inst_37359,done);
var state_37522__$1 = (function (){var statearr_37660 = state_37522;
(statearr_37660[(22)] = inst_37477__$1);

return statearr_37660;
})();
if(cljs.core.truth_(inst_37478)){
var statearr_37661_39271 = state_37522__$1;
(statearr_37661_39271[(1)] = (39));

} else {
var statearr_37662_39272 = state_37522__$1;
(statearr_37662_39272[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37523 === (8))){
var inst_37370 = (state_37522[(14)]);
var inst_37371 = (state_37522[(17)]);
var inst_37373 = (inst_37371 < inst_37370);
var inst_37374 = inst_37373;
var state_37522__$1 = state_37522;
if(cljs.core.truth_(inst_37374)){
var statearr_37663_39274 = state_37522__$1;
(statearr_37663_39274[(1)] = (10));

} else {
var statearr_37664_39275 = state_37522__$1;
(statearr_37664_39275[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__36295__auto__ = null;
var cljs$core$async$mult_$_state_machine__36295__auto____0 = (function (){
var statearr_37665 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37665[(0)] = cljs$core$async$mult_$_state_machine__36295__auto__);

(statearr_37665[(1)] = (1));

return statearr_37665;
});
var cljs$core$async$mult_$_state_machine__36295__auto____1 = (function (state_37522){
while(true){
var ret_value__36296__auto__ = (function (){try{while(true){
var result__36297__auto__ = switch__36294__auto__(state_37522);
if(cljs.core.keyword_identical_QMARK_(result__36297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36297__auto__;
}
break;
}
}catch (e37666){var ex__36298__auto__ = e37666;
var statearr_37667_39282 = state_37522;
(statearr_37667_39282[(2)] = ex__36298__auto__);


if(cljs.core.seq((state_37522[(4)]))){
var statearr_37668_39283 = state_37522;
(statearr_37668_39283[(1)] = cljs.core.first((state_37522[(4)])));

} else {
throw ex__36298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39285 = state_37522;
state_37522 = G__39285;
continue;
} else {
return ret_value__36296__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__36295__auto__ = function(state_37522){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__36295__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__36295__auto____1.call(this,state_37522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__36295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__36295__auto____0;
cljs$core$async$mult_$_state_machine__36295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__36295__auto____1;
return cljs$core$async$mult_$_state_machine__36295__auto__;
})()
})();
var state__36463__auto__ = (function (){var statearr_37669 = f__36462__auto__();
(statearr_37669[(6)] = c__36461__auto___39197);

return statearr_37669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36463__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__37672 = arguments.length;
switch (G__37672) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_39298 = (function (m,ch){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4464__auto__.call(null,m,ch));
} else {
var m__4461__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4461__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_39298(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_39299 = (function (m,ch){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4464__auto__.call(null,m,ch));
} else {
var m__4461__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4461__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_39299(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_39305 = (function (m){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4464__auto__.call(null,m));
} else {
var m__4461__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4461__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_39305(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_39306 = (function (m,state_map){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4464__auto__.call(null,m,state_map));
} else {
var m__4461__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4461__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_39306(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_39309 = (function (m,mode){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4464__auto__.call(null,m,mode));
} else {
var m__4461__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4461__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_39309(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___39312 = arguments.length;
var i__4772__auto___39313 = (0);
while(true){
if((i__4772__auto___39313 < len__4771__auto___39312)){
args__4777__auto__.push((arguments[i__4772__auto___39313]));

var G__39317 = (i__4772__auto___39313 + (1));
i__4772__auto___39313 = G__39317;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((3) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4778__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__37684){
var map__37685 = p__37684;
var map__37685__$1 = cljs.core.__destructure_map(map__37685);
var opts = map__37685__$1;
var statearr_37686_39322 = state;
(statearr_37686_39322[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_37688_39329 = state;
(statearr_37688_39329[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_37689_39332 = state;
(statearr_37689_39332[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq37680){
var G__37681 = cljs.core.first(seq37680);
var seq37680__$1 = cljs.core.next(seq37680);
var G__37682 = cljs.core.first(seq37680__$1);
var seq37680__$2 = cljs.core.next(seq37680__$1);
var G__37683 = cljs.core.first(seq37680__$2);
var seq37680__$3 = cljs.core.next(seq37680__$2);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37681,G__37682,G__37683,seq37680__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37692 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37692 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta37693){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta37693 = meta37693;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37694,meta37693__$1){
var self__ = this;
var _37694__$1 = this;
return (new cljs.core.async.t_cljs$core$async37692(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta37693__$1));
}));

(cljs.core.async.t_cljs$core$async37692.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37694){
var self__ = this;
var _37694__$1 = this;
return self__.meta37693;
}));

(cljs.core.async.t_cljs$core$async37692.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37692.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async37692.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37692.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37692.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37692.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37692.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37692.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37692.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta37693","meta37693",-2039023863,null)], null);
}));

(cljs.core.async.t_cljs$core$async37692.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37692.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37692");

(cljs.core.async.t_cljs$core$async37692.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async37692");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37692.
 */
cljs.core.async.__GT_t_cljs$core$async37692 = (function cljs$core$async$mix_$___GT_t_cljs$core$async37692(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37693){
return (new cljs.core.async.t_cljs$core$async37692(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37693));
});

}

return (new cljs.core.async.t_cljs$core$async37692(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36461__auto___39363 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36462__auto__ = (function (){var switch__36294__auto__ = (function (state_37759){
var state_val_37760 = (state_37759[(1)]);
if((state_val_37760 === (7))){
var inst_37755 = (state_37759[(2)]);
var state_37759__$1 = state_37759;
var statearr_37762_39364 = state_37759__$1;
(statearr_37762_39364[(2)] = inst_37755);

(statearr_37762_39364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37760 === (20))){
var inst_37749 = (state_37759[(2)]);
var state_37759__$1 = state_37759;
var statearr_37763_39365 = state_37759__$1;
(statearr_37763_39365[(2)] = inst_37749);

(statearr_37763_39365[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37760 === (1))){
var inst_37700 = calc_state();
var inst_37701 = cljs.core.__destructure_map(inst_37700);
var inst_37702 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37701,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37703 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37701,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37704 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37701,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37705 = inst_37700;
var state_37759__$1 = (function (){var statearr_37764 = state_37759;
(statearr_37764[(7)] = inst_37705);

(statearr_37764[(8)] = inst_37702);

(statearr_37764[(9)] = inst_37703);

(statearr_37764[(10)] = inst_37704);

return statearr_37764;
})();
var statearr_37765_39372 = state_37759__$1;
(statearr_37765_39372[(2)] = null);

(statearr_37765_39372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37760 === (4))){
var inst_37718 = (state_37759[(11)]);
var inst_37719 = (state_37759[(12)]);
var inst_37717 = (state_37759[(2)]);
var inst_37718__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37717,(0),null);
var inst_37719__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37717,(1),null);
var inst_37720 = (inst_37718__$1 == null);
var inst_37721 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37719__$1,change);
var inst_37722 = ((inst_37720) || (inst_37721));
var state_37759__$1 = (function (){var statearr_37767 = state_37759;
(statearr_37767[(11)] = inst_37718__$1);

(statearr_37767[(12)] = inst_37719__$1);

return statearr_37767;
})();
if(cljs.core.truth_(inst_37722)){
var statearr_37768_39373 = state_37759__$1;
(statearr_37768_39373[(1)] = (5));

} else {
var statearr_37769_39374 = state_37759__$1;
(statearr_37769_39374[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37760 === (15))){
var inst_37709 = (state_37759[(13)]);
var inst_37705 = inst_37709;
var state_37759__$1 = (function (){var statearr_37770 = state_37759;
(statearr_37770[(7)] = inst_37705);

return statearr_37770;
})();
var statearr_37771_39375 = state_37759__$1;
(statearr_37771_39375[(2)] = null);

(statearr_37771_39375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37760 === (13))){
var inst_37741 = (state_37759[(2)]);
var state_37759__$1 = state_37759;
if(cljs.core.truth_(inst_37741)){
var statearr_37772_39376 = state_37759__$1;
(statearr_37772_39376[(1)] = (14));

} else {
var statearr_37773_39377 = state_37759__$1;
(statearr_37773_39377[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37760 === (6))){
var inst_37733 = (state_37759[(14)]);
var inst_37710 = (state_37759[(15)]);
var inst_37719 = (state_37759[(12)]);
var inst_37733__$1 = (inst_37710.cljs$core$IFn$_invoke$arity$1 ? inst_37710.cljs$core$IFn$_invoke$arity$1(inst_37719) : inst_37710.call(null,inst_37719));
var state_37759__$1 = (function (){var statearr_37774 = state_37759;
(statearr_37774[(14)] = inst_37733__$1);

return statearr_37774;
})();
if(cljs.core.truth_(inst_37733__$1)){
var statearr_37775_39378 = state_37759__$1;
(statearr_37775_39378[(1)] = (11));

} else {
var statearr_37776_39379 = state_37759__$1;
(statearr_37776_39379[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37760 === (17))){
var inst_37744 = (state_37759[(2)]);
var state_37759__$1 = state_37759;
if(cljs.core.truth_(inst_37744)){
var statearr_37777_39380 = state_37759__$1;
(statearr_37777_39380[(1)] = (18));

} else {
var statearr_37778_39381 = state_37759__$1;
(statearr_37778_39381[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37760 === (3))){
var inst_37757 = (state_37759[(2)]);
var state_37759__$1 = state_37759;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37759__$1,inst_37757);
} else {
if((state_val_37760 === (12))){
var inst_37710 = (state_37759[(15)]);
var inst_37711 = (state_37759[(16)]);
var inst_37719 = (state_37759[(12)]);
var inst_37736 = cljs.core.empty_QMARK_(inst_37710);
var inst_37737 = (inst_37711.cljs$core$IFn$_invoke$arity$1 ? inst_37711.cljs$core$IFn$_invoke$arity$1(inst_37719) : inst_37711.call(null,inst_37719));
var inst_37738 = cljs.core.not(inst_37737);
var inst_37739 = ((inst_37736) && (inst_37738));
var state_37759__$1 = state_37759;
var statearr_37780_39382 = state_37759__$1;
(statearr_37780_39382[(2)] = inst_37739);

(statearr_37780_39382[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37760 === (2))){
var inst_37705 = (state_37759[(7)]);
var inst_37709 = (state_37759[(13)]);
var inst_37709__$1 = cljs.core.__destructure_map(inst_37705);
var inst_37710 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37709__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37711 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37709__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37712 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37709__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_37759__$1 = (function (){var statearr_37781 = state_37759;
(statearr_37781[(15)] = inst_37710);

(statearr_37781[(16)] = inst_37711);

(statearr_37781[(13)] = inst_37709__$1);

return statearr_37781;
})();
return cljs.core.async.ioc_alts_BANG_(state_37759__$1,(4),inst_37712);
} else {
if((state_val_37760 === (19))){
var state_37759__$1 = state_37759;
var statearr_37782_39383 = state_37759__$1;
(statearr_37782_39383[(2)] = null);

(statearr_37782_39383[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37760 === (11))){
var inst_37733 = (state_37759[(14)]);
var state_37759__$1 = state_37759;
var statearr_37783_39384 = state_37759__$1;
(statearr_37783_39384[(2)] = inst_37733);

(statearr_37783_39384[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37760 === (9))){
var state_37759__$1 = state_37759;
var statearr_37784_39385 = state_37759__$1;
(statearr_37784_39385[(2)] = null);

(statearr_37784_39385[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37760 === (5))){
var inst_37718 = (state_37759[(11)]);
var inst_37724 = (inst_37718 == null);
var state_37759__$1 = state_37759;
if(cljs.core.truth_(inst_37724)){
var statearr_37786_39386 = state_37759__$1;
(statearr_37786_39386[(1)] = (8));

} else {
var statearr_37787_39387 = state_37759__$1;
(statearr_37787_39387[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37760 === (14))){
var inst_37718 = (state_37759[(11)]);
var state_37759__$1 = state_37759;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37759__$1,(17),out,inst_37718);
} else {
if((state_val_37760 === (16))){
var inst_37753 = (state_37759[(2)]);
var state_37759__$1 = state_37759;
var statearr_37788_39388 = state_37759__$1;
(statearr_37788_39388[(2)] = inst_37753);

(statearr_37788_39388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37760 === (10))){
var inst_37729 = (state_37759[(2)]);
var inst_37730 = calc_state();
var inst_37705 = inst_37730;
var state_37759__$1 = (function (){var statearr_37789 = state_37759;
(statearr_37789[(7)] = inst_37705);

(statearr_37789[(17)] = inst_37729);

return statearr_37789;
})();
var statearr_37790_39389 = state_37759__$1;
(statearr_37790_39389[(2)] = null);

(statearr_37790_39389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37760 === (18))){
var inst_37709 = (state_37759[(13)]);
var inst_37705 = inst_37709;
var state_37759__$1 = (function (){var statearr_37791 = state_37759;
(statearr_37791[(7)] = inst_37705);

return statearr_37791;
})();
var statearr_37792_39390 = state_37759__$1;
(statearr_37792_39390[(2)] = null);

(statearr_37792_39390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37760 === (8))){
var inst_37719 = (state_37759[(12)]);
var inst_37726 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_37719);
var state_37759__$1 = state_37759;
var statearr_37793_39391 = state_37759__$1;
(statearr_37793_39391[(2)] = inst_37726);

(statearr_37793_39391[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__36295__auto__ = null;
var cljs$core$async$mix_$_state_machine__36295__auto____0 = (function (){
var statearr_37795 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37795[(0)] = cljs$core$async$mix_$_state_machine__36295__auto__);

(statearr_37795[(1)] = (1));

return statearr_37795;
});
var cljs$core$async$mix_$_state_machine__36295__auto____1 = (function (state_37759){
while(true){
var ret_value__36296__auto__ = (function (){try{while(true){
var result__36297__auto__ = switch__36294__auto__(state_37759);
if(cljs.core.keyword_identical_QMARK_(result__36297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36297__auto__;
}
break;
}
}catch (e37796){var ex__36298__auto__ = e37796;
var statearr_37797_39400 = state_37759;
(statearr_37797_39400[(2)] = ex__36298__auto__);


if(cljs.core.seq((state_37759[(4)]))){
var statearr_37799_39401 = state_37759;
(statearr_37799_39401[(1)] = cljs.core.first((state_37759[(4)])));

} else {
throw ex__36298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39407 = state_37759;
state_37759 = G__39407;
continue;
} else {
return ret_value__36296__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__36295__auto__ = function(state_37759){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__36295__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__36295__auto____1.call(this,state_37759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__36295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__36295__auto____0;
cljs$core$async$mix_$_state_machine__36295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__36295__auto____1;
return cljs$core$async$mix_$_state_machine__36295__auto__;
})()
})();
var state__36463__auto__ = (function (){var statearr_37800 = f__36462__auto__();
(statearr_37800[(6)] = c__36461__auto___39363);

return statearr_37800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36463__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_39408 = (function (p,v,ch,close_QMARK_){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4464__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4461__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4461__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_39408(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_39418 = (function (p,v,ch){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4464__auto__.call(null,p,v,ch));
} else {
var m__4461__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4461__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_39418(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_39421 = (function() {
var G__39422 = null;
var G__39422__1 = (function (p){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4464__auto__.call(null,p));
} else {
var m__4461__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4461__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__39422__2 = (function (p,v){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4464__auto__.call(null,p,v));
} else {
var m__4461__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4461__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__39422 = function(p,v){
switch(arguments.length){
case 1:
return G__39422__1.call(this,p);
case 2:
return G__39422__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__39422.cljs$core$IFn$_invoke$arity$1 = G__39422__1;
G__39422.cljs$core$IFn$_invoke$arity$2 = G__39422__2;
return G__39422;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__37806 = arguments.length;
switch (G__37806) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_39421(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_39421(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__37812 = arguments.length;
switch (G__37812) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4160__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__37808_SHARP_){
if(cljs.core.truth_((p1__37808_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37808_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__37808_SHARP_.call(null,topic)))){
return p1__37808_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__37808_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37813 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37813 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta37814){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta37814 = meta37814;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37815,meta37814__$1){
var self__ = this;
var _37815__$1 = this;
return (new cljs.core.async.t_cljs$core$async37813(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta37814__$1));
}));

(cljs.core.async.t_cljs$core$async37813.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37815){
var self__ = this;
var _37815__$1 = this;
return self__.meta37814;
}));

(cljs.core.async.t_cljs$core$async37813.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37813.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async37813.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37813.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async37813.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async37813.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async37813.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async37813.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta37814","meta37814",1974180630,null)], null);
}));

(cljs.core.async.t_cljs$core$async37813.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37813.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37813");

(cljs.core.async.t_cljs$core$async37813.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async37813");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37813.
 */
cljs.core.async.__GT_t_cljs$core$async37813 = (function cljs$core$async$__GT_t_cljs$core$async37813(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37814){
return (new cljs.core.async.t_cljs$core$async37813(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37814));
});

}

return (new cljs.core.async.t_cljs$core$async37813(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36461__auto___39448 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36462__auto__ = (function (){var switch__36294__auto__ = (function (state_37889){
var state_val_37890 = (state_37889[(1)]);
if((state_val_37890 === (7))){
var inst_37885 = (state_37889[(2)]);
var state_37889__$1 = state_37889;
var statearr_37891_39450 = state_37889__$1;
(statearr_37891_39450[(2)] = inst_37885);

(statearr_37891_39450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (20))){
var state_37889__$1 = state_37889;
var statearr_37892_39451 = state_37889__$1;
(statearr_37892_39451[(2)] = null);

(statearr_37892_39451[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (1))){
var state_37889__$1 = state_37889;
var statearr_37893_39455 = state_37889__$1;
(statearr_37893_39455[(2)] = null);

(statearr_37893_39455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (24))){
var inst_37868 = (state_37889[(7)]);
var inst_37877 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_37868);
var state_37889__$1 = state_37889;
var statearr_37894_39456 = state_37889__$1;
(statearr_37894_39456[(2)] = inst_37877);

(statearr_37894_39456[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (4))){
var inst_37820 = (state_37889[(8)]);
var inst_37820__$1 = (state_37889[(2)]);
var inst_37821 = (inst_37820__$1 == null);
var state_37889__$1 = (function (){var statearr_37895 = state_37889;
(statearr_37895[(8)] = inst_37820__$1);

return statearr_37895;
})();
if(cljs.core.truth_(inst_37821)){
var statearr_37896_39458 = state_37889__$1;
(statearr_37896_39458[(1)] = (5));

} else {
var statearr_37897_39459 = state_37889__$1;
(statearr_37897_39459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (15))){
var inst_37862 = (state_37889[(2)]);
var state_37889__$1 = state_37889;
var statearr_37898_39460 = state_37889__$1;
(statearr_37898_39460[(2)] = inst_37862);

(statearr_37898_39460[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (21))){
var inst_37882 = (state_37889[(2)]);
var state_37889__$1 = (function (){var statearr_37900 = state_37889;
(statearr_37900[(9)] = inst_37882);

return statearr_37900;
})();
var statearr_37902_39461 = state_37889__$1;
(statearr_37902_39461[(2)] = null);

(statearr_37902_39461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (13))){
var inst_37844 = (state_37889[(10)]);
var inst_37846 = cljs.core.chunked_seq_QMARK_(inst_37844);
var state_37889__$1 = state_37889;
if(inst_37846){
var statearr_37903_39462 = state_37889__$1;
(statearr_37903_39462[(1)] = (16));

} else {
var statearr_37904_39463 = state_37889__$1;
(statearr_37904_39463[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (22))){
var inst_37874 = (state_37889[(2)]);
var state_37889__$1 = state_37889;
if(cljs.core.truth_(inst_37874)){
var statearr_37905_39465 = state_37889__$1;
(statearr_37905_39465[(1)] = (23));

} else {
var statearr_37906_39466 = state_37889__$1;
(statearr_37906_39466[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (6))){
var inst_37820 = (state_37889[(8)]);
var inst_37868 = (state_37889[(7)]);
var inst_37870 = (state_37889[(11)]);
var inst_37868__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_37820) : topic_fn.call(null,inst_37820));
var inst_37869 = cljs.core.deref(mults);
var inst_37870__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37869,inst_37868__$1);
var state_37889__$1 = (function (){var statearr_37907 = state_37889;
(statearr_37907[(7)] = inst_37868__$1);

(statearr_37907[(11)] = inst_37870__$1);

return statearr_37907;
})();
if(cljs.core.truth_(inst_37870__$1)){
var statearr_37908_39468 = state_37889__$1;
(statearr_37908_39468[(1)] = (19));

} else {
var statearr_37909_39469 = state_37889__$1;
(statearr_37909_39469[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (25))){
var inst_37879 = (state_37889[(2)]);
var state_37889__$1 = state_37889;
var statearr_37910_39470 = state_37889__$1;
(statearr_37910_39470[(2)] = inst_37879);

(statearr_37910_39470[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (17))){
var inst_37844 = (state_37889[(10)]);
var inst_37853 = cljs.core.first(inst_37844);
var inst_37854 = cljs.core.async.muxch_STAR_(inst_37853);
var inst_37855 = cljs.core.async.close_BANG_(inst_37854);
var inst_37856 = cljs.core.next(inst_37844);
var inst_37830 = inst_37856;
var inst_37831 = null;
var inst_37832 = (0);
var inst_37833 = (0);
var state_37889__$1 = (function (){var statearr_37911 = state_37889;
(statearr_37911[(12)] = inst_37833);

(statearr_37911[(13)] = inst_37830);

(statearr_37911[(14)] = inst_37831);

(statearr_37911[(15)] = inst_37832);

(statearr_37911[(16)] = inst_37855);

return statearr_37911;
})();
var statearr_37912_39476 = state_37889__$1;
(statearr_37912_39476[(2)] = null);

(statearr_37912_39476[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (3))){
var inst_37887 = (state_37889[(2)]);
var state_37889__$1 = state_37889;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37889__$1,inst_37887);
} else {
if((state_val_37890 === (12))){
var inst_37864 = (state_37889[(2)]);
var state_37889__$1 = state_37889;
var statearr_37916_39483 = state_37889__$1;
(statearr_37916_39483[(2)] = inst_37864);

(statearr_37916_39483[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (2))){
var state_37889__$1 = state_37889;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37889__$1,(4),ch);
} else {
if((state_val_37890 === (23))){
var state_37889__$1 = state_37889;
var statearr_37917_39484 = state_37889__$1;
(statearr_37917_39484[(2)] = null);

(statearr_37917_39484[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (19))){
var inst_37820 = (state_37889[(8)]);
var inst_37870 = (state_37889[(11)]);
var inst_37872 = cljs.core.async.muxch_STAR_(inst_37870);
var state_37889__$1 = state_37889;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37889__$1,(22),inst_37872,inst_37820);
} else {
if((state_val_37890 === (11))){
var inst_37844 = (state_37889[(10)]);
var inst_37830 = (state_37889[(13)]);
var inst_37844__$1 = cljs.core.seq(inst_37830);
var state_37889__$1 = (function (){var statearr_37921 = state_37889;
(statearr_37921[(10)] = inst_37844__$1);

return statearr_37921;
})();
if(inst_37844__$1){
var statearr_37922_39486 = state_37889__$1;
(statearr_37922_39486[(1)] = (13));

} else {
var statearr_37923_39487 = state_37889__$1;
(statearr_37923_39487[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (9))){
var inst_37866 = (state_37889[(2)]);
var state_37889__$1 = state_37889;
var statearr_37927_39488 = state_37889__$1;
(statearr_37927_39488[(2)] = inst_37866);

(statearr_37927_39488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (5))){
var inst_37827 = cljs.core.deref(mults);
var inst_37828 = cljs.core.vals(inst_37827);
var inst_37829 = cljs.core.seq(inst_37828);
var inst_37830 = inst_37829;
var inst_37831 = null;
var inst_37832 = (0);
var inst_37833 = (0);
var state_37889__$1 = (function (){var statearr_37928 = state_37889;
(statearr_37928[(12)] = inst_37833);

(statearr_37928[(13)] = inst_37830);

(statearr_37928[(14)] = inst_37831);

(statearr_37928[(15)] = inst_37832);

return statearr_37928;
})();
var statearr_37929_39489 = state_37889__$1;
(statearr_37929_39489[(2)] = null);

(statearr_37929_39489[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (14))){
var state_37889__$1 = state_37889;
var statearr_37933_39490 = state_37889__$1;
(statearr_37933_39490[(2)] = null);

(statearr_37933_39490[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (16))){
var inst_37844 = (state_37889[(10)]);
var inst_37848 = cljs.core.chunk_first(inst_37844);
var inst_37849 = cljs.core.chunk_rest(inst_37844);
var inst_37850 = cljs.core.count(inst_37848);
var inst_37830 = inst_37849;
var inst_37831 = inst_37848;
var inst_37832 = inst_37850;
var inst_37833 = (0);
var state_37889__$1 = (function (){var statearr_37934 = state_37889;
(statearr_37934[(12)] = inst_37833);

(statearr_37934[(13)] = inst_37830);

(statearr_37934[(14)] = inst_37831);

(statearr_37934[(15)] = inst_37832);

return statearr_37934;
})();
var statearr_37935_39493 = state_37889__$1;
(statearr_37935_39493[(2)] = null);

(statearr_37935_39493[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (10))){
var inst_37833 = (state_37889[(12)]);
var inst_37830 = (state_37889[(13)]);
var inst_37831 = (state_37889[(14)]);
var inst_37832 = (state_37889[(15)]);
var inst_37838 = cljs.core._nth(inst_37831,inst_37833);
var inst_37839 = cljs.core.async.muxch_STAR_(inst_37838);
var inst_37840 = cljs.core.async.close_BANG_(inst_37839);
var inst_37841 = (inst_37833 + (1));
var tmp37930 = inst_37830;
var tmp37931 = inst_37831;
var tmp37932 = inst_37832;
var inst_37830__$1 = tmp37930;
var inst_37831__$1 = tmp37931;
var inst_37832__$1 = tmp37932;
var inst_37833__$1 = inst_37841;
var state_37889__$1 = (function (){var statearr_37940 = state_37889;
(statearr_37940[(12)] = inst_37833__$1);

(statearr_37940[(13)] = inst_37830__$1);

(statearr_37940[(17)] = inst_37840);

(statearr_37940[(14)] = inst_37831__$1);

(statearr_37940[(15)] = inst_37832__$1);

return statearr_37940;
})();
var statearr_37941_39500 = state_37889__$1;
(statearr_37941_39500[(2)] = null);

(statearr_37941_39500[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (18))){
var inst_37859 = (state_37889[(2)]);
var state_37889__$1 = state_37889;
var statearr_37943_39504 = state_37889__$1;
(statearr_37943_39504[(2)] = inst_37859);

(statearr_37943_39504[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37890 === (8))){
var inst_37833 = (state_37889[(12)]);
var inst_37832 = (state_37889[(15)]);
var inst_37835 = (inst_37833 < inst_37832);
var inst_37836 = inst_37835;
var state_37889__$1 = state_37889;
if(cljs.core.truth_(inst_37836)){
var statearr_37944_39505 = state_37889__$1;
(statearr_37944_39505[(1)] = (10));

} else {
var statearr_37945_39506 = state_37889__$1;
(statearr_37945_39506[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36295__auto__ = null;
var cljs$core$async$state_machine__36295__auto____0 = (function (){
var statearr_37949 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37949[(0)] = cljs$core$async$state_machine__36295__auto__);

(statearr_37949[(1)] = (1));

return statearr_37949;
});
var cljs$core$async$state_machine__36295__auto____1 = (function (state_37889){
while(true){
var ret_value__36296__auto__ = (function (){try{while(true){
var result__36297__auto__ = switch__36294__auto__(state_37889);
if(cljs.core.keyword_identical_QMARK_(result__36297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36297__auto__;
}
break;
}
}catch (e37951){var ex__36298__auto__ = e37951;
var statearr_37952_39514 = state_37889;
(statearr_37952_39514[(2)] = ex__36298__auto__);


if(cljs.core.seq((state_37889[(4)]))){
var statearr_37955_39515 = state_37889;
(statearr_37955_39515[(1)] = cljs.core.first((state_37889[(4)])));

} else {
throw ex__36298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39516 = state_37889;
state_37889 = G__39516;
continue;
} else {
return ret_value__36296__auto__;
}
break;
}
});
cljs$core$async$state_machine__36295__auto__ = function(state_37889){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36295__auto____1.call(this,state_37889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36295__auto____0;
cljs$core$async$state_machine__36295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36295__auto____1;
return cljs$core$async$state_machine__36295__auto__;
})()
})();
var state__36463__auto__ = (function (){var statearr_37957 = f__36462__auto__();
(statearr_37957[(6)] = c__36461__auto___39448);

return statearr_37957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36463__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__37963 = arguments.length;
switch (G__37963) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__37973 = arguments.length;
switch (G__37973) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__37983 = arguments.length;
switch (G__37983) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__36461__auto___39528 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36462__auto__ = (function (){var switch__36294__auto__ = (function (state_38051){
var state_val_38052 = (state_38051[(1)]);
if((state_val_38052 === (7))){
var state_38051__$1 = state_38051;
var statearr_38055_39529 = state_38051__$1;
(statearr_38055_39529[(2)] = null);

(statearr_38055_39529[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38052 === (1))){
var state_38051__$1 = state_38051;
var statearr_38057_39530 = state_38051__$1;
(statearr_38057_39530[(2)] = null);

(statearr_38057_39530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38052 === (4))){
var inst_37998 = (state_38051[(7)]);
var inst_37999 = (state_38051[(8)]);
var inst_38001 = (inst_37999 < inst_37998);
var state_38051__$1 = state_38051;
if(cljs.core.truth_(inst_38001)){
var statearr_38063_39532 = state_38051__$1;
(statearr_38063_39532[(1)] = (6));

} else {
var statearr_38066_39533 = state_38051__$1;
(statearr_38066_39533[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38052 === (15))){
var inst_38036 = (state_38051[(9)]);
var inst_38041 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_38036);
var state_38051__$1 = state_38051;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38051__$1,(17),out,inst_38041);
} else {
if((state_val_38052 === (13))){
var inst_38036 = (state_38051[(9)]);
var inst_38036__$1 = (state_38051[(2)]);
var inst_38037 = cljs.core.some(cljs.core.nil_QMARK_,inst_38036__$1);
var state_38051__$1 = (function (){var statearr_38082 = state_38051;
(statearr_38082[(9)] = inst_38036__$1);

return statearr_38082;
})();
if(cljs.core.truth_(inst_38037)){
var statearr_38083_39539 = state_38051__$1;
(statearr_38083_39539[(1)] = (14));

} else {
var statearr_38084_39540 = state_38051__$1;
(statearr_38084_39540[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38052 === (6))){
var state_38051__$1 = state_38051;
var statearr_38091_39541 = state_38051__$1;
(statearr_38091_39541[(2)] = null);

(statearr_38091_39541[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38052 === (17))){
var inst_38043 = (state_38051[(2)]);
var state_38051__$1 = (function (){var statearr_38103 = state_38051;
(statearr_38103[(10)] = inst_38043);

return statearr_38103;
})();
var statearr_38105_39542 = state_38051__$1;
(statearr_38105_39542[(2)] = null);

(statearr_38105_39542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38052 === (3))){
var inst_38048 = (state_38051[(2)]);
var state_38051__$1 = state_38051;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38051__$1,inst_38048);
} else {
if((state_val_38052 === (12))){
var _ = (function (){var statearr_38107 = state_38051;
(statearr_38107[(4)] = cljs.core.rest((state_38051[(4)])));

return statearr_38107;
})();
var state_38051__$1 = state_38051;
var ex38099 = (state_38051__$1[(2)]);
var statearr_38110_39544 = state_38051__$1;
(statearr_38110_39544[(5)] = ex38099);


if((ex38099 instanceof Object)){
var statearr_38112_39545 = state_38051__$1;
(statearr_38112_39545[(1)] = (11));

(statearr_38112_39545[(5)] = null);

} else {
throw ex38099;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38052 === (2))){
var inst_37996 = cljs.core.reset_BANG_(dctr,cnt);
var inst_37998 = cnt;
var inst_37999 = (0);
var state_38051__$1 = (function (){var statearr_38117 = state_38051;
(statearr_38117[(7)] = inst_37998);

(statearr_38117[(8)] = inst_37999);

(statearr_38117[(11)] = inst_37996);

return statearr_38117;
})();
var statearr_38119_39546 = state_38051__$1;
(statearr_38119_39546[(2)] = null);

(statearr_38119_39546[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38052 === (11))){
var inst_38011 = (state_38051[(2)]);
var inst_38013 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_38051__$1 = (function (){var statearr_38120 = state_38051;
(statearr_38120[(12)] = inst_38011);

return statearr_38120;
})();
var statearr_38123_39553 = state_38051__$1;
(statearr_38123_39553[(2)] = inst_38013);

(statearr_38123_39553[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38052 === (9))){
var inst_37999 = (state_38051[(8)]);
var _ = (function (){var statearr_38125 = state_38051;
(statearr_38125[(4)] = cljs.core.cons((12),(state_38051[(4)])));

return statearr_38125;
})();
var inst_38019 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_37999) : chs__$1.call(null,inst_37999));
var inst_38020 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_37999) : done.call(null,inst_37999));
var inst_38021 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_38019,inst_38020);
var ___$1 = (function (){var statearr_38127 = state_38051;
(statearr_38127[(4)] = cljs.core.rest((state_38051[(4)])));

return statearr_38127;
})();
var state_38051__$1 = state_38051;
var statearr_38129_39557 = state_38051__$1;
(statearr_38129_39557[(2)] = inst_38021);

(statearr_38129_39557[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38052 === (5))){
var inst_38033 = (state_38051[(2)]);
var state_38051__$1 = (function (){var statearr_38130 = state_38051;
(statearr_38130[(13)] = inst_38033);

return statearr_38130;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38051__$1,(13),dchan);
} else {
if((state_val_38052 === (14))){
var inst_38039 = cljs.core.async.close_BANG_(out);
var state_38051__$1 = state_38051;
var statearr_38134_39558 = state_38051__$1;
(statearr_38134_39558[(2)] = inst_38039);

(statearr_38134_39558[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38052 === (16))){
var inst_38046 = (state_38051[(2)]);
var state_38051__$1 = state_38051;
var statearr_38138_39563 = state_38051__$1;
(statearr_38138_39563[(2)] = inst_38046);

(statearr_38138_39563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38052 === (10))){
var inst_37999 = (state_38051[(8)]);
var inst_38024 = (state_38051[(2)]);
var inst_38026 = (inst_37999 + (1));
var inst_37999__$1 = inst_38026;
var state_38051__$1 = (function (){var statearr_38140 = state_38051;
(statearr_38140[(8)] = inst_37999__$1);

(statearr_38140[(14)] = inst_38024);

return statearr_38140;
})();
var statearr_38141_39564 = state_38051__$1;
(statearr_38141_39564[(2)] = null);

(statearr_38141_39564[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38052 === (8))){
var inst_38031 = (state_38051[(2)]);
var state_38051__$1 = state_38051;
var statearr_38142_39565 = state_38051__$1;
(statearr_38142_39565[(2)] = inst_38031);

(statearr_38142_39565[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36295__auto__ = null;
var cljs$core$async$state_machine__36295__auto____0 = (function (){
var statearr_38146 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38146[(0)] = cljs$core$async$state_machine__36295__auto__);

(statearr_38146[(1)] = (1));

return statearr_38146;
});
var cljs$core$async$state_machine__36295__auto____1 = (function (state_38051){
while(true){
var ret_value__36296__auto__ = (function (){try{while(true){
var result__36297__auto__ = switch__36294__auto__(state_38051);
if(cljs.core.keyword_identical_QMARK_(result__36297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36297__auto__;
}
break;
}
}catch (e38151){var ex__36298__auto__ = e38151;
var statearr_38155_39576 = state_38051;
(statearr_38155_39576[(2)] = ex__36298__auto__);


if(cljs.core.seq((state_38051[(4)]))){
var statearr_38157_39577 = state_38051;
(statearr_38157_39577[(1)] = cljs.core.first((state_38051[(4)])));

} else {
throw ex__36298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39578 = state_38051;
state_38051 = G__39578;
continue;
} else {
return ret_value__36296__auto__;
}
break;
}
});
cljs$core$async$state_machine__36295__auto__ = function(state_38051){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36295__auto____1.call(this,state_38051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36295__auto____0;
cljs$core$async$state_machine__36295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36295__auto____1;
return cljs$core$async$state_machine__36295__auto__;
})()
})();
var state__36463__auto__ = (function (){var statearr_38159 = f__36462__auto__();
(statearr_38159[(6)] = c__36461__auto___39528);

return statearr_38159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36463__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__38172 = arguments.length;
switch (G__38172) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36461__auto___39580 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36462__auto__ = (function (){var switch__36294__auto__ = (function (state_38219){
var state_val_38220 = (state_38219[(1)]);
if((state_val_38220 === (7))){
var inst_38191 = (state_38219[(7)]);
var inst_38192 = (state_38219[(8)]);
var inst_38191__$1 = (state_38219[(2)]);
var inst_38192__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38191__$1,(0),null);
var inst_38193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38191__$1,(1),null);
var inst_38194 = (inst_38192__$1 == null);
var state_38219__$1 = (function (){var statearr_38229 = state_38219;
(statearr_38229[(7)] = inst_38191__$1);

(statearr_38229[(9)] = inst_38193);

(statearr_38229[(8)] = inst_38192__$1);

return statearr_38229;
})();
if(cljs.core.truth_(inst_38194)){
var statearr_38231_39581 = state_38219__$1;
(statearr_38231_39581[(1)] = (8));

} else {
var statearr_38232_39582 = state_38219__$1;
(statearr_38232_39582[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38220 === (1))){
var inst_38180 = cljs.core.vec(chs);
var inst_38181 = inst_38180;
var state_38219__$1 = (function (){var statearr_38235 = state_38219;
(statearr_38235[(10)] = inst_38181);

return statearr_38235;
})();
var statearr_38237_39583 = state_38219__$1;
(statearr_38237_39583[(2)] = null);

(statearr_38237_39583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38220 === (4))){
var inst_38181 = (state_38219[(10)]);
var state_38219__$1 = state_38219;
return cljs.core.async.ioc_alts_BANG_(state_38219__$1,(7),inst_38181);
} else {
if((state_val_38220 === (6))){
var inst_38211 = (state_38219[(2)]);
var state_38219__$1 = state_38219;
var statearr_38239_39584 = state_38219__$1;
(statearr_38239_39584[(2)] = inst_38211);

(statearr_38239_39584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38220 === (3))){
var inst_38213 = (state_38219[(2)]);
var state_38219__$1 = state_38219;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38219__$1,inst_38213);
} else {
if((state_val_38220 === (2))){
var inst_38181 = (state_38219[(10)]);
var inst_38183 = cljs.core.count(inst_38181);
var inst_38184 = (inst_38183 > (0));
var state_38219__$1 = state_38219;
if(cljs.core.truth_(inst_38184)){
var statearr_38244_39585 = state_38219__$1;
(statearr_38244_39585[(1)] = (4));

} else {
var statearr_38245_39586 = state_38219__$1;
(statearr_38245_39586[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38220 === (11))){
var inst_38181 = (state_38219[(10)]);
var inst_38204 = (state_38219[(2)]);
var tmp38240 = inst_38181;
var inst_38181__$1 = tmp38240;
var state_38219__$1 = (function (){var statearr_38246 = state_38219;
(statearr_38246[(10)] = inst_38181__$1);

(statearr_38246[(11)] = inst_38204);

return statearr_38246;
})();
var statearr_38247_39587 = state_38219__$1;
(statearr_38247_39587[(2)] = null);

(statearr_38247_39587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38220 === (9))){
var inst_38192 = (state_38219[(8)]);
var state_38219__$1 = state_38219;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38219__$1,(11),out,inst_38192);
} else {
if((state_val_38220 === (5))){
var inst_38209 = cljs.core.async.close_BANG_(out);
var state_38219__$1 = state_38219;
var statearr_38253_39588 = state_38219__$1;
(statearr_38253_39588[(2)] = inst_38209);

(statearr_38253_39588[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38220 === (10))){
var inst_38207 = (state_38219[(2)]);
var state_38219__$1 = state_38219;
var statearr_38254_39589 = state_38219__$1;
(statearr_38254_39589[(2)] = inst_38207);

(statearr_38254_39589[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38220 === (8))){
var inst_38181 = (state_38219[(10)]);
var inst_38191 = (state_38219[(7)]);
var inst_38193 = (state_38219[(9)]);
var inst_38192 = (state_38219[(8)]);
var inst_38199 = (function (){var cs = inst_38181;
var vec__38186 = inst_38191;
var v = inst_38192;
var c = inst_38193;
return (function (p1__38167_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__38167_SHARP_);
});
})();
var inst_38200 = cljs.core.filterv(inst_38199,inst_38181);
var inst_38181__$1 = inst_38200;
var state_38219__$1 = (function (){var statearr_38255 = state_38219;
(statearr_38255[(10)] = inst_38181__$1);

return statearr_38255;
})();
var statearr_38256_39590 = state_38219__$1;
(statearr_38256_39590[(2)] = null);

(statearr_38256_39590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36295__auto__ = null;
var cljs$core$async$state_machine__36295__auto____0 = (function (){
var statearr_38257 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38257[(0)] = cljs$core$async$state_machine__36295__auto__);

(statearr_38257[(1)] = (1));

return statearr_38257;
});
var cljs$core$async$state_machine__36295__auto____1 = (function (state_38219){
while(true){
var ret_value__36296__auto__ = (function (){try{while(true){
var result__36297__auto__ = switch__36294__auto__(state_38219);
if(cljs.core.keyword_identical_QMARK_(result__36297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36297__auto__;
}
break;
}
}catch (e38258){var ex__36298__auto__ = e38258;
var statearr_38259_39591 = state_38219;
(statearr_38259_39591[(2)] = ex__36298__auto__);


if(cljs.core.seq((state_38219[(4)]))){
var statearr_38260_39592 = state_38219;
(statearr_38260_39592[(1)] = cljs.core.first((state_38219[(4)])));

} else {
throw ex__36298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39593 = state_38219;
state_38219 = G__39593;
continue;
} else {
return ret_value__36296__auto__;
}
break;
}
});
cljs$core$async$state_machine__36295__auto__ = function(state_38219){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36295__auto____1.call(this,state_38219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36295__auto____0;
cljs$core$async$state_machine__36295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36295__auto____1;
return cljs$core$async$state_machine__36295__auto__;
})()
})();
var state__36463__auto__ = (function (){var statearr_38261 = f__36462__auto__();
(statearr_38261[(6)] = c__36461__auto___39580);

return statearr_38261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36463__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__38263 = arguments.length;
switch (G__38263) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36461__auto___39595 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36462__auto__ = (function (){var switch__36294__auto__ = (function (state_38287){
var state_val_38288 = (state_38287[(1)]);
if((state_val_38288 === (7))){
var inst_38269 = (state_38287[(7)]);
var inst_38269__$1 = (state_38287[(2)]);
var inst_38270 = (inst_38269__$1 == null);
var inst_38271 = cljs.core.not(inst_38270);
var state_38287__$1 = (function (){var statearr_38289 = state_38287;
(statearr_38289[(7)] = inst_38269__$1);

return statearr_38289;
})();
if(inst_38271){
var statearr_38290_39596 = state_38287__$1;
(statearr_38290_39596[(1)] = (8));

} else {
var statearr_38291_39597 = state_38287__$1;
(statearr_38291_39597[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38288 === (1))){
var inst_38264 = (0);
var state_38287__$1 = (function (){var statearr_38292 = state_38287;
(statearr_38292[(8)] = inst_38264);

return statearr_38292;
})();
var statearr_38293_39598 = state_38287__$1;
(statearr_38293_39598[(2)] = null);

(statearr_38293_39598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38288 === (4))){
var state_38287__$1 = state_38287;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38287__$1,(7),ch);
} else {
if((state_val_38288 === (6))){
var inst_38282 = (state_38287[(2)]);
var state_38287__$1 = state_38287;
var statearr_38294_39599 = state_38287__$1;
(statearr_38294_39599[(2)] = inst_38282);

(statearr_38294_39599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38288 === (3))){
var inst_38284 = (state_38287[(2)]);
var inst_38285 = cljs.core.async.close_BANG_(out);
var state_38287__$1 = (function (){var statearr_38297 = state_38287;
(statearr_38297[(9)] = inst_38284);

return statearr_38297;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38287__$1,inst_38285);
} else {
if((state_val_38288 === (2))){
var inst_38264 = (state_38287[(8)]);
var inst_38266 = (inst_38264 < n);
var state_38287__$1 = state_38287;
if(cljs.core.truth_(inst_38266)){
var statearr_38298_39600 = state_38287__$1;
(statearr_38298_39600[(1)] = (4));

} else {
var statearr_38299_39601 = state_38287__$1;
(statearr_38299_39601[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38288 === (11))){
var inst_38264 = (state_38287[(8)]);
var inst_38274 = (state_38287[(2)]);
var inst_38275 = (inst_38264 + (1));
var inst_38264__$1 = inst_38275;
var state_38287__$1 = (function (){var statearr_38300 = state_38287;
(statearr_38300[(10)] = inst_38274);

(statearr_38300[(8)] = inst_38264__$1);

return statearr_38300;
})();
var statearr_38301_39602 = state_38287__$1;
(statearr_38301_39602[(2)] = null);

(statearr_38301_39602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38288 === (9))){
var state_38287__$1 = state_38287;
var statearr_38302_39603 = state_38287__$1;
(statearr_38302_39603[(2)] = null);

(statearr_38302_39603[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38288 === (5))){
var state_38287__$1 = state_38287;
var statearr_38303_39604 = state_38287__$1;
(statearr_38303_39604[(2)] = null);

(statearr_38303_39604[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38288 === (10))){
var inst_38279 = (state_38287[(2)]);
var state_38287__$1 = state_38287;
var statearr_38304_39605 = state_38287__$1;
(statearr_38304_39605[(2)] = inst_38279);

(statearr_38304_39605[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38288 === (8))){
var inst_38269 = (state_38287[(7)]);
var state_38287__$1 = state_38287;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38287__$1,(11),out,inst_38269);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36295__auto__ = null;
var cljs$core$async$state_machine__36295__auto____0 = (function (){
var statearr_38309 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38309[(0)] = cljs$core$async$state_machine__36295__auto__);

(statearr_38309[(1)] = (1));

return statearr_38309;
});
var cljs$core$async$state_machine__36295__auto____1 = (function (state_38287){
while(true){
var ret_value__36296__auto__ = (function (){try{while(true){
var result__36297__auto__ = switch__36294__auto__(state_38287);
if(cljs.core.keyword_identical_QMARK_(result__36297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36297__auto__;
}
break;
}
}catch (e38314){var ex__36298__auto__ = e38314;
var statearr_38315_39606 = state_38287;
(statearr_38315_39606[(2)] = ex__36298__auto__);


if(cljs.core.seq((state_38287[(4)]))){
var statearr_38317_39607 = state_38287;
(statearr_38317_39607[(1)] = cljs.core.first((state_38287[(4)])));

} else {
throw ex__36298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39608 = state_38287;
state_38287 = G__39608;
continue;
} else {
return ret_value__36296__auto__;
}
break;
}
});
cljs$core$async$state_machine__36295__auto__ = function(state_38287){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36295__auto____1.call(this,state_38287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36295__auto____0;
cljs$core$async$state_machine__36295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36295__auto____1;
return cljs$core$async$state_machine__36295__auto__;
})()
})();
var state__36463__auto__ = (function (){var statearr_38318 = f__36462__auto__();
(statearr_38318[(6)] = c__36461__auto___39595);

return statearr_38318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36463__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38327 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38327 = (function (f,ch,meta38328){
this.f = f;
this.ch = ch;
this.meta38328 = meta38328;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38329,meta38328__$1){
var self__ = this;
var _38329__$1 = this;
return (new cljs.core.async.t_cljs$core$async38327(self__.f,self__.ch,meta38328__$1));
}));

(cljs.core.async.t_cljs$core$async38327.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38329){
var self__ = this;
var _38329__$1 = this;
return self__.meta38328;
}));

(cljs.core.async.t_cljs$core$async38327.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38327.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38327.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38327.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38327.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38339 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38339 = (function (f,ch,meta38328,_,fn1,meta38340){
this.f = f;
this.ch = ch;
this.meta38328 = meta38328;
this._ = _;
this.fn1 = fn1;
this.meta38340 = meta38340;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38341,meta38340__$1){
var self__ = this;
var _38341__$1 = this;
return (new cljs.core.async.t_cljs$core$async38339(self__.f,self__.ch,self__.meta38328,self__._,self__.fn1,meta38340__$1));
}));

(cljs.core.async.t_cljs$core$async38339.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38341){
var self__ = this;
var _38341__$1 = this;
return self__.meta38340;
}));

(cljs.core.async.t_cljs$core$async38339.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38339.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async38339.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38339.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__38319_SHARP_){
var G__38347 = (((p1__38319_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__38319_SHARP_) : self__.f.call(null,p1__38319_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__38347) : f1.call(null,G__38347));
});
}));

(cljs.core.async.t_cljs$core$async38339.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38328","meta38328",1781056678,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async38327","cljs.core.async/t_cljs$core$async38327",2119272259,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta38340","meta38340",-1128442163,null)], null);
}));

(cljs.core.async.t_cljs$core$async38339.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38339.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38339");

(cljs.core.async.t_cljs$core$async38339.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async38339");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38339.
 */
cljs.core.async.__GT_t_cljs$core$async38339 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38339(f__$1,ch__$1,meta38328__$1,___$2,fn1__$1,meta38340){
return (new cljs.core.async.t_cljs$core$async38339(f__$1,ch__$1,meta38328__$1,___$2,fn1__$1,meta38340));
});

}

return (new cljs.core.async.t_cljs$core$async38339(self__.f,self__.ch,self__.meta38328,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4149__auto__ = ret;
if(cljs.core.truth_(and__4149__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4149__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__38356 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__38356) : self__.f.call(null,G__38356));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async38327.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38327.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async38327.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38328","meta38328",1781056678,null)], null);
}));

(cljs.core.async.t_cljs$core$async38327.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38327.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38327");

(cljs.core.async.t_cljs$core$async38327.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async38327");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38327.
 */
cljs.core.async.__GT_t_cljs$core$async38327 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38327(f__$1,ch__$1,meta38328){
return (new cljs.core.async.t_cljs$core$async38327(f__$1,ch__$1,meta38328));
});

}

return (new cljs.core.async.t_cljs$core$async38327(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38365 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38365 = (function (f,ch,meta38366){
this.f = f;
this.ch = ch;
this.meta38366 = meta38366;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38367,meta38366__$1){
var self__ = this;
var _38367__$1 = this;
return (new cljs.core.async.t_cljs$core$async38365(self__.f,self__.ch,meta38366__$1));
}));

(cljs.core.async.t_cljs$core$async38365.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38367){
var self__ = this;
var _38367__$1 = this;
return self__.meta38366;
}));

(cljs.core.async.t_cljs$core$async38365.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38365.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38365.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38365.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38365.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38365.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async38365.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38366","meta38366",525666910,null)], null);
}));

(cljs.core.async.t_cljs$core$async38365.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38365.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38365");

(cljs.core.async.t_cljs$core$async38365.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async38365");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38365.
 */
cljs.core.async.__GT_t_cljs$core$async38365 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async38365(f__$1,ch__$1,meta38366){
return (new cljs.core.async.t_cljs$core$async38365(f__$1,ch__$1,meta38366));
});

}

return (new cljs.core.async.t_cljs$core$async38365(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38385 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38385 = (function (p,ch,meta38386){
this.p = p;
this.ch = ch;
this.meta38386 = meta38386;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38385.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38387,meta38386__$1){
var self__ = this;
var _38387__$1 = this;
return (new cljs.core.async.t_cljs$core$async38385(self__.p,self__.ch,meta38386__$1));
}));

(cljs.core.async.t_cljs$core$async38385.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38387){
var self__ = this;
var _38387__$1 = this;
return self__.meta38386;
}));

(cljs.core.async.t_cljs$core$async38385.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38385.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38385.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38385.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38385.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38385.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38385.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async38385.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38386","meta38386",1523511032,null)], null);
}));

(cljs.core.async.t_cljs$core$async38385.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38385.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38385");

(cljs.core.async.t_cljs$core$async38385.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async38385");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38385.
 */
cljs.core.async.__GT_t_cljs$core$async38385 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async38385(p__$1,ch__$1,meta38386){
return (new cljs.core.async.t_cljs$core$async38385(p__$1,ch__$1,meta38386));
});

}

return (new cljs.core.async.t_cljs$core$async38385(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__38398 = arguments.length;
switch (G__38398) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36461__auto___39616 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36462__auto__ = (function (){var switch__36294__auto__ = (function (state_38431){
var state_val_38432 = (state_38431[(1)]);
if((state_val_38432 === (7))){
var inst_38427 = (state_38431[(2)]);
var state_38431__$1 = state_38431;
var statearr_38437_39617 = state_38431__$1;
(statearr_38437_39617[(2)] = inst_38427);

(statearr_38437_39617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38432 === (1))){
var state_38431__$1 = state_38431;
var statearr_38438_39618 = state_38431__$1;
(statearr_38438_39618[(2)] = null);

(statearr_38438_39618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38432 === (4))){
var inst_38412 = (state_38431[(7)]);
var inst_38412__$1 = (state_38431[(2)]);
var inst_38413 = (inst_38412__$1 == null);
var state_38431__$1 = (function (){var statearr_38443 = state_38431;
(statearr_38443[(7)] = inst_38412__$1);

return statearr_38443;
})();
if(cljs.core.truth_(inst_38413)){
var statearr_38444_39623 = state_38431__$1;
(statearr_38444_39623[(1)] = (5));

} else {
var statearr_38445_39624 = state_38431__$1;
(statearr_38445_39624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38432 === (6))){
var inst_38412 = (state_38431[(7)]);
var inst_38417 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_38412) : p.call(null,inst_38412));
var state_38431__$1 = state_38431;
if(cljs.core.truth_(inst_38417)){
var statearr_38446_39625 = state_38431__$1;
(statearr_38446_39625[(1)] = (8));

} else {
var statearr_38447_39626 = state_38431__$1;
(statearr_38447_39626[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38432 === (3))){
var inst_38429 = (state_38431[(2)]);
var state_38431__$1 = state_38431;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38431__$1,inst_38429);
} else {
if((state_val_38432 === (2))){
var state_38431__$1 = state_38431;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38431__$1,(4),ch);
} else {
if((state_val_38432 === (11))){
var inst_38421 = (state_38431[(2)]);
var state_38431__$1 = state_38431;
var statearr_38448_39628 = state_38431__$1;
(statearr_38448_39628[(2)] = inst_38421);

(statearr_38448_39628[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38432 === (9))){
var state_38431__$1 = state_38431;
var statearr_38449_39629 = state_38431__$1;
(statearr_38449_39629[(2)] = null);

(statearr_38449_39629[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38432 === (5))){
var inst_38415 = cljs.core.async.close_BANG_(out);
var state_38431__$1 = state_38431;
var statearr_38450_39630 = state_38431__$1;
(statearr_38450_39630[(2)] = inst_38415);

(statearr_38450_39630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38432 === (10))){
var inst_38424 = (state_38431[(2)]);
var state_38431__$1 = (function (){var statearr_38451 = state_38431;
(statearr_38451[(8)] = inst_38424);

return statearr_38451;
})();
var statearr_38452_39631 = state_38431__$1;
(statearr_38452_39631[(2)] = null);

(statearr_38452_39631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38432 === (8))){
var inst_38412 = (state_38431[(7)]);
var state_38431__$1 = state_38431;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38431__$1,(11),out,inst_38412);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36295__auto__ = null;
var cljs$core$async$state_machine__36295__auto____0 = (function (){
var statearr_38457 = [null,null,null,null,null,null,null,null,null];
(statearr_38457[(0)] = cljs$core$async$state_machine__36295__auto__);

(statearr_38457[(1)] = (1));

return statearr_38457;
});
var cljs$core$async$state_machine__36295__auto____1 = (function (state_38431){
while(true){
var ret_value__36296__auto__ = (function (){try{while(true){
var result__36297__auto__ = switch__36294__auto__(state_38431);
if(cljs.core.keyword_identical_QMARK_(result__36297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36297__auto__;
}
break;
}
}catch (e38458){var ex__36298__auto__ = e38458;
var statearr_38459_39632 = state_38431;
(statearr_38459_39632[(2)] = ex__36298__auto__);


if(cljs.core.seq((state_38431[(4)]))){
var statearr_38460_39633 = state_38431;
(statearr_38460_39633[(1)] = cljs.core.first((state_38431[(4)])));

} else {
throw ex__36298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39634 = state_38431;
state_38431 = G__39634;
continue;
} else {
return ret_value__36296__auto__;
}
break;
}
});
cljs$core$async$state_machine__36295__auto__ = function(state_38431){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36295__auto____1.call(this,state_38431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36295__auto____0;
cljs$core$async$state_machine__36295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36295__auto____1;
return cljs$core$async$state_machine__36295__auto__;
})()
})();
var state__36463__auto__ = (function (){var statearr_38462 = f__36462__auto__();
(statearr_38462[(6)] = c__36461__auto___39616);

return statearr_38462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36463__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__38464 = arguments.length;
switch (G__38464) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__36461__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36462__auto__ = (function (){var switch__36294__auto__ = (function (state_38528){
var state_val_38529 = (state_38528[(1)]);
if((state_val_38529 === (7))){
var inst_38524 = (state_38528[(2)]);
var state_38528__$1 = state_38528;
var statearr_38530_39637 = state_38528__$1;
(statearr_38530_39637[(2)] = inst_38524);

(statearr_38530_39637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38529 === (20))){
var inst_38494 = (state_38528[(7)]);
var inst_38505 = (state_38528[(2)]);
var inst_38506 = cljs.core.next(inst_38494);
var inst_38480 = inst_38506;
var inst_38481 = null;
var inst_38482 = (0);
var inst_38483 = (0);
var state_38528__$1 = (function (){var statearr_38531 = state_38528;
(statearr_38531[(8)] = inst_38483);

(statearr_38531[(9)] = inst_38482);

(statearr_38531[(10)] = inst_38480);

(statearr_38531[(11)] = inst_38481);

(statearr_38531[(12)] = inst_38505);

return statearr_38531;
})();
var statearr_38532_39638 = state_38528__$1;
(statearr_38532_39638[(2)] = null);

(statearr_38532_39638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38529 === (1))){
var state_38528__$1 = state_38528;
var statearr_38533_39639 = state_38528__$1;
(statearr_38533_39639[(2)] = null);

(statearr_38533_39639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38529 === (4))){
var inst_38468 = (state_38528[(13)]);
var inst_38468__$1 = (state_38528[(2)]);
var inst_38470 = (inst_38468__$1 == null);
var state_38528__$1 = (function (){var statearr_38534 = state_38528;
(statearr_38534[(13)] = inst_38468__$1);

return statearr_38534;
})();
if(cljs.core.truth_(inst_38470)){
var statearr_38535_39640 = state_38528__$1;
(statearr_38535_39640[(1)] = (5));

} else {
var statearr_38536_39641 = state_38528__$1;
(statearr_38536_39641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38529 === (15))){
var state_38528__$1 = state_38528;
var statearr_38540_39642 = state_38528__$1;
(statearr_38540_39642[(2)] = null);

(statearr_38540_39642[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38529 === (21))){
var state_38528__$1 = state_38528;
var statearr_38541_39643 = state_38528__$1;
(statearr_38541_39643[(2)] = null);

(statearr_38541_39643[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38529 === (13))){
var inst_38483 = (state_38528[(8)]);
var inst_38482 = (state_38528[(9)]);
var inst_38480 = (state_38528[(10)]);
var inst_38481 = (state_38528[(11)]);
var inst_38490 = (state_38528[(2)]);
var inst_38491 = (inst_38483 + (1));
var tmp38537 = inst_38482;
var tmp38538 = inst_38480;
var tmp38539 = inst_38481;
var inst_38480__$1 = tmp38538;
var inst_38481__$1 = tmp38539;
var inst_38482__$1 = tmp38537;
var inst_38483__$1 = inst_38491;
var state_38528__$1 = (function (){var statearr_38542 = state_38528;
(statearr_38542[(8)] = inst_38483__$1);

(statearr_38542[(9)] = inst_38482__$1);

(statearr_38542[(14)] = inst_38490);

(statearr_38542[(10)] = inst_38480__$1);

(statearr_38542[(11)] = inst_38481__$1);

return statearr_38542;
})();
var statearr_38543_39644 = state_38528__$1;
(statearr_38543_39644[(2)] = null);

(statearr_38543_39644[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38529 === (22))){
var state_38528__$1 = state_38528;
var statearr_38544_39645 = state_38528__$1;
(statearr_38544_39645[(2)] = null);

(statearr_38544_39645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38529 === (6))){
var inst_38468 = (state_38528[(13)]);
var inst_38478 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38468) : f.call(null,inst_38468));
var inst_38479 = cljs.core.seq(inst_38478);
var inst_38480 = inst_38479;
var inst_38481 = null;
var inst_38482 = (0);
var inst_38483 = (0);
var state_38528__$1 = (function (){var statearr_38545 = state_38528;
(statearr_38545[(8)] = inst_38483);

(statearr_38545[(9)] = inst_38482);

(statearr_38545[(10)] = inst_38480);

(statearr_38545[(11)] = inst_38481);

return statearr_38545;
})();
var statearr_38546_39647 = state_38528__$1;
(statearr_38546_39647[(2)] = null);

(statearr_38546_39647[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38529 === (17))){
var inst_38494 = (state_38528[(7)]);
var inst_38498 = cljs.core.chunk_first(inst_38494);
var inst_38499 = cljs.core.chunk_rest(inst_38494);
var inst_38500 = cljs.core.count(inst_38498);
var inst_38480 = inst_38499;
var inst_38481 = inst_38498;
var inst_38482 = inst_38500;
var inst_38483 = (0);
var state_38528__$1 = (function (){var statearr_38547 = state_38528;
(statearr_38547[(8)] = inst_38483);

(statearr_38547[(9)] = inst_38482);

(statearr_38547[(10)] = inst_38480);

(statearr_38547[(11)] = inst_38481);

return statearr_38547;
})();
var statearr_38548_39653 = state_38528__$1;
(statearr_38548_39653[(2)] = null);

(statearr_38548_39653[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38529 === (3))){
var inst_38526 = (state_38528[(2)]);
var state_38528__$1 = state_38528;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38528__$1,inst_38526);
} else {
if((state_val_38529 === (12))){
var inst_38514 = (state_38528[(2)]);
var state_38528__$1 = state_38528;
var statearr_38549_39654 = state_38528__$1;
(statearr_38549_39654[(2)] = inst_38514);

(statearr_38549_39654[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38529 === (2))){
var state_38528__$1 = state_38528;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38528__$1,(4),in$);
} else {
if((state_val_38529 === (23))){
var inst_38522 = (state_38528[(2)]);
var state_38528__$1 = state_38528;
var statearr_38550_39655 = state_38528__$1;
(statearr_38550_39655[(2)] = inst_38522);

(statearr_38550_39655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38529 === (19))){
var inst_38509 = (state_38528[(2)]);
var state_38528__$1 = state_38528;
var statearr_38551_39656 = state_38528__$1;
(statearr_38551_39656[(2)] = inst_38509);

(statearr_38551_39656[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38529 === (11))){
var inst_38494 = (state_38528[(7)]);
var inst_38480 = (state_38528[(10)]);
var inst_38494__$1 = cljs.core.seq(inst_38480);
var state_38528__$1 = (function (){var statearr_38552 = state_38528;
(statearr_38552[(7)] = inst_38494__$1);

return statearr_38552;
})();
if(inst_38494__$1){
var statearr_38553_39657 = state_38528__$1;
(statearr_38553_39657[(1)] = (14));

} else {
var statearr_38554_39658 = state_38528__$1;
(statearr_38554_39658[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38529 === (9))){
var inst_38516 = (state_38528[(2)]);
var inst_38517 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_38528__$1 = (function (){var statearr_38556 = state_38528;
(statearr_38556[(15)] = inst_38516);

return statearr_38556;
})();
if(cljs.core.truth_(inst_38517)){
var statearr_38558_39664 = state_38528__$1;
(statearr_38558_39664[(1)] = (21));

} else {
var statearr_38559_39665 = state_38528__$1;
(statearr_38559_39665[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38529 === (5))){
var inst_38472 = cljs.core.async.close_BANG_(out);
var state_38528__$1 = state_38528;
var statearr_38560_39666 = state_38528__$1;
(statearr_38560_39666[(2)] = inst_38472);

(statearr_38560_39666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38529 === (14))){
var inst_38494 = (state_38528[(7)]);
var inst_38496 = cljs.core.chunked_seq_QMARK_(inst_38494);
var state_38528__$1 = state_38528;
if(inst_38496){
var statearr_38561_39667 = state_38528__$1;
(statearr_38561_39667[(1)] = (17));

} else {
var statearr_38562_39668 = state_38528__$1;
(statearr_38562_39668[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38529 === (16))){
var inst_38512 = (state_38528[(2)]);
var state_38528__$1 = state_38528;
var statearr_38566_39674 = state_38528__$1;
(statearr_38566_39674[(2)] = inst_38512);

(statearr_38566_39674[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38529 === (10))){
var inst_38483 = (state_38528[(8)]);
var inst_38481 = (state_38528[(11)]);
var inst_38488 = cljs.core._nth(inst_38481,inst_38483);
var state_38528__$1 = state_38528;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38528__$1,(13),out,inst_38488);
} else {
if((state_val_38529 === (18))){
var inst_38494 = (state_38528[(7)]);
var inst_38503 = cljs.core.first(inst_38494);
var state_38528__$1 = state_38528;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38528__$1,(20),out,inst_38503);
} else {
if((state_val_38529 === (8))){
var inst_38483 = (state_38528[(8)]);
var inst_38482 = (state_38528[(9)]);
var inst_38485 = (inst_38483 < inst_38482);
var inst_38486 = inst_38485;
var state_38528__$1 = state_38528;
if(cljs.core.truth_(inst_38486)){
var statearr_38568_39675 = state_38528__$1;
(statearr_38568_39675[(1)] = (10));

} else {
var statearr_38569_39676 = state_38528__$1;
(statearr_38569_39676[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__36295__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__36295__auto____0 = (function (){
var statearr_38570 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38570[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__36295__auto__);

(statearr_38570[(1)] = (1));

return statearr_38570;
});
var cljs$core$async$mapcat_STAR__$_state_machine__36295__auto____1 = (function (state_38528){
while(true){
var ret_value__36296__auto__ = (function (){try{while(true){
var result__36297__auto__ = switch__36294__auto__(state_38528);
if(cljs.core.keyword_identical_QMARK_(result__36297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36297__auto__;
}
break;
}
}catch (e38571){var ex__36298__auto__ = e38571;
var statearr_38572_39677 = state_38528;
(statearr_38572_39677[(2)] = ex__36298__auto__);


if(cljs.core.seq((state_38528[(4)]))){
var statearr_38573_39679 = state_38528;
(statearr_38573_39679[(1)] = cljs.core.first((state_38528[(4)])));

} else {
throw ex__36298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39680 = state_38528;
state_38528 = G__39680;
continue;
} else {
return ret_value__36296__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__36295__auto__ = function(state_38528){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__36295__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__36295__auto____1.call(this,state_38528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__36295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__36295__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__36295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__36295__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__36295__auto__;
})()
})();
var state__36463__auto__ = (function (){var statearr_38574 = f__36462__auto__();
(statearr_38574[(6)] = c__36461__auto__);

return statearr_38574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36463__auto__);
}));

return c__36461__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__38576 = arguments.length;
switch (G__38576) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__38580 = arguments.length;
switch (G__38580) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__38587 = arguments.length;
switch (G__38587) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36461__auto___39684 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36462__auto__ = (function (){var switch__36294__auto__ = (function (state_38651){
var state_val_38652 = (state_38651[(1)]);
if((state_val_38652 === (7))){
var inst_38645 = (state_38651[(2)]);
var state_38651__$1 = state_38651;
var statearr_38656_39685 = state_38651__$1;
(statearr_38656_39685[(2)] = inst_38645);

(statearr_38656_39685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38652 === (1))){
var inst_38614 = null;
var state_38651__$1 = (function (){var statearr_38657 = state_38651;
(statearr_38657[(7)] = inst_38614);

return statearr_38657;
})();
var statearr_38658_39686 = state_38651__$1;
(statearr_38658_39686[(2)] = null);

(statearr_38658_39686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38652 === (4))){
var inst_38630 = (state_38651[(8)]);
var inst_38630__$1 = (state_38651[(2)]);
var inst_38631 = (inst_38630__$1 == null);
var inst_38632 = cljs.core.not(inst_38631);
var state_38651__$1 = (function (){var statearr_38659 = state_38651;
(statearr_38659[(8)] = inst_38630__$1);

return statearr_38659;
})();
if(inst_38632){
var statearr_38660_39687 = state_38651__$1;
(statearr_38660_39687[(1)] = (5));

} else {
var statearr_38661_39688 = state_38651__$1;
(statearr_38661_39688[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38652 === (6))){
var state_38651__$1 = state_38651;
var statearr_38662_39689 = state_38651__$1;
(statearr_38662_39689[(2)] = null);

(statearr_38662_39689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38652 === (3))){
var inst_38647 = (state_38651[(2)]);
var inst_38648 = cljs.core.async.close_BANG_(out);
var state_38651__$1 = (function (){var statearr_38663 = state_38651;
(statearr_38663[(9)] = inst_38647);

return statearr_38663;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38651__$1,inst_38648);
} else {
if((state_val_38652 === (2))){
var state_38651__$1 = state_38651;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38651__$1,(4),ch);
} else {
if((state_val_38652 === (11))){
var inst_38630 = (state_38651[(8)]);
var inst_38639 = (state_38651[(2)]);
var inst_38614 = inst_38630;
var state_38651__$1 = (function (){var statearr_38668 = state_38651;
(statearr_38668[(7)] = inst_38614);

(statearr_38668[(10)] = inst_38639);

return statearr_38668;
})();
var statearr_38669_39690 = state_38651__$1;
(statearr_38669_39690[(2)] = null);

(statearr_38669_39690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38652 === (9))){
var inst_38630 = (state_38651[(8)]);
var state_38651__$1 = state_38651;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38651__$1,(11),out,inst_38630);
} else {
if((state_val_38652 === (5))){
var inst_38630 = (state_38651[(8)]);
var inst_38614 = (state_38651[(7)]);
var inst_38634 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38630,inst_38614);
var state_38651__$1 = state_38651;
if(inst_38634){
var statearr_38673_39691 = state_38651__$1;
(statearr_38673_39691[(1)] = (8));

} else {
var statearr_38674_39692 = state_38651__$1;
(statearr_38674_39692[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38652 === (10))){
var inst_38642 = (state_38651[(2)]);
var state_38651__$1 = state_38651;
var statearr_38675_39693 = state_38651__$1;
(statearr_38675_39693[(2)] = inst_38642);

(statearr_38675_39693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38652 === (8))){
var inst_38614 = (state_38651[(7)]);
var tmp38672 = inst_38614;
var inst_38614__$1 = tmp38672;
var state_38651__$1 = (function (){var statearr_38677 = state_38651;
(statearr_38677[(7)] = inst_38614__$1);

return statearr_38677;
})();
var statearr_38678_39695 = state_38651__$1;
(statearr_38678_39695[(2)] = null);

(statearr_38678_39695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36295__auto__ = null;
var cljs$core$async$state_machine__36295__auto____0 = (function (){
var statearr_38680 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38680[(0)] = cljs$core$async$state_machine__36295__auto__);

(statearr_38680[(1)] = (1));

return statearr_38680;
});
var cljs$core$async$state_machine__36295__auto____1 = (function (state_38651){
while(true){
var ret_value__36296__auto__ = (function (){try{while(true){
var result__36297__auto__ = switch__36294__auto__(state_38651);
if(cljs.core.keyword_identical_QMARK_(result__36297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36297__auto__;
}
break;
}
}catch (e38681){var ex__36298__auto__ = e38681;
var statearr_38682_39696 = state_38651;
(statearr_38682_39696[(2)] = ex__36298__auto__);


if(cljs.core.seq((state_38651[(4)]))){
var statearr_38683_39698 = state_38651;
(statearr_38683_39698[(1)] = cljs.core.first((state_38651[(4)])));

} else {
throw ex__36298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39699 = state_38651;
state_38651 = G__39699;
continue;
} else {
return ret_value__36296__auto__;
}
break;
}
});
cljs$core$async$state_machine__36295__auto__ = function(state_38651){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36295__auto____1.call(this,state_38651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36295__auto____0;
cljs$core$async$state_machine__36295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36295__auto____1;
return cljs$core$async$state_machine__36295__auto__;
})()
})();
var state__36463__auto__ = (function (){var statearr_38684 = f__36462__auto__();
(statearr_38684[(6)] = c__36461__auto___39684);

return statearr_38684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36463__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__38686 = arguments.length;
switch (G__38686) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36461__auto___39709 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36462__auto__ = (function (){var switch__36294__auto__ = (function (state_38731){
var state_val_38732 = (state_38731[(1)]);
if((state_val_38732 === (7))){
var inst_38727 = (state_38731[(2)]);
var state_38731__$1 = state_38731;
var statearr_38733_39710 = state_38731__$1;
(statearr_38733_39710[(2)] = inst_38727);

(statearr_38733_39710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38732 === (1))){
var inst_38690 = (new Array(n));
var inst_38691 = inst_38690;
var inst_38692 = (0);
var state_38731__$1 = (function (){var statearr_38734 = state_38731;
(statearr_38734[(7)] = inst_38692);

(statearr_38734[(8)] = inst_38691);

return statearr_38734;
})();
var statearr_38735_39711 = state_38731__$1;
(statearr_38735_39711[(2)] = null);

(statearr_38735_39711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38732 === (4))){
var inst_38695 = (state_38731[(9)]);
var inst_38695__$1 = (state_38731[(2)]);
var inst_38696 = (inst_38695__$1 == null);
var inst_38697 = cljs.core.not(inst_38696);
var state_38731__$1 = (function (){var statearr_38736 = state_38731;
(statearr_38736[(9)] = inst_38695__$1);

return statearr_38736;
})();
if(inst_38697){
var statearr_38737_39712 = state_38731__$1;
(statearr_38737_39712[(1)] = (5));

} else {
var statearr_38738_39713 = state_38731__$1;
(statearr_38738_39713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38732 === (15))){
var inst_38721 = (state_38731[(2)]);
var state_38731__$1 = state_38731;
var statearr_38739_39714 = state_38731__$1;
(statearr_38739_39714[(2)] = inst_38721);

(statearr_38739_39714[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38732 === (13))){
var state_38731__$1 = state_38731;
var statearr_38740_39715 = state_38731__$1;
(statearr_38740_39715[(2)] = null);

(statearr_38740_39715[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38732 === (6))){
var inst_38692 = (state_38731[(7)]);
var inst_38717 = (inst_38692 > (0));
var state_38731__$1 = state_38731;
if(cljs.core.truth_(inst_38717)){
var statearr_38741_39716 = state_38731__$1;
(statearr_38741_39716[(1)] = (12));

} else {
var statearr_38742_39717 = state_38731__$1;
(statearr_38742_39717[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38732 === (3))){
var inst_38729 = (state_38731[(2)]);
var state_38731__$1 = state_38731;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38731__$1,inst_38729);
} else {
if((state_val_38732 === (12))){
var inst_38691 = (state_38731[(8)]);
var inst_38719 = cljs.core.vec(inst_38691);
var state_38731__$1 = state_38731;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38731__$1,(15),out,inst_38719);
} else {
if((state_val_38732 === (2))){
var state_38731__$1 = state_38731;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38731__$1,(4),ch);
} else {
if((state_val_38732 === (11))){
var inst_38711 = (state_38731[(2)]);
var inst_38712 = (new Array(n));
var inst_38691 = inst_38712;
var inst_38692 = (0);
var state_38731__$1 = (function (){var statearr_38743 = state_38731;
(statearr_38743[(7)] = inst_38692);

(statearr_38743[(10)] = inst_38711);

(statearr_38743[(8)] = inst_38691);

return statearr_38743;
})();
var statearr_38744_39718 = state_38731__$1;
(statearr_38744_39718[(2)] = null);

(statearr_38744_39718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38732 === (9))){
var inst_38691 = (state_38731[(8)]);
var inst_38707 = cljs.core.vec(inst_38691);
var state_38731__$1 = state_38731;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38731__$1,(11),out,inst_38707);
} else {
if((state_val_38732 === (5))){
var inst_38692 = (state_38731[(7)]);
var inst_38695 = (state_38731[(9)]);
var inst_38701 = (state_38731[(11)]);
var inst_38691 = (state_38731[(8)]);
var inst_38700 = (inst_38691[inst_38692] = inst_38695);
var inst_38701__$1 = (inst_38692 + (1));
var inst_38702 = (inst_38701__$1 < n);
var state_38731__$1 = (function (){var statearr_38745 = state_38731;
(statearr_38745[(12)] = inst_38700);

(statearr_38745[(11)] = inst_38701__$1);

return statearr_38745;
})();
if(cljs.core.truth_(inst_38702)){
var statearr_38746_39724 = state_38731__$1;
(statearr_38746_39724[(1)] = (8));

} else {
var statearr_38747_39725 = state_38731__$1;
(statearr_38747_39725[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38732 === (14))){
var inst_38724 = (state_38731[(2)]);
var inst_38725 = cljs.core.async.close_BANG_(out);
var state_38731__$1 = (function (){var statearr_38749 = state_38731;
(statearr_38749[(13)] = inst_38724);

return statearr_38749;
})();
var statearr_38750_39726 = state_38731__$1;
(statearr_38750_39726[(2)] = inst_38725);

(statearr_38750_39726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38732 === (10))){
var inst_38715 = (state_38731[(2)]);
var state_38731__$1 = state_38731;
var statearr_38751_39727 = state_38731__$1;
(statearr_38751_39727[(2)] = inst_38715);

(statearr_38751_39727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38732 === (8))){
var inst_38701 = (state_38731[(11)]);
var inst_38691 = (state_38731[(8)]);
var tmp38748 = inst_38691;
var inst_38691__$1 = tmp38748;
var inst_38692 = inst_38701;
var state_38731__$1 = (function (){var statearr_38752 = state_38731;
(statearr_38752[(7)] = inst_38692);

(statearr_38752[(8)] = inst_38691__$1);

return statearr_38752;
})();
var statearr_38753_39732 = state_38731__$1;
(statearr_38753_39732[(2)] = null);

(statearr_38753_39732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36295__auto__ = null;
var cljs$core$async$state_machine__36295__auto____0 = (function (){
var statearr_38754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38754[(0)] = cljs$core$async$state_machine__36295__auto__);

(statearr_38754[(1)] = (1));

return statearr_38754;
});
var cljs$core$async$state_machine__36295__auto____1 = (function (state_38731){
while(true){
var ret_value__36296__auto__ = (function (){try{while(true){
var result__36297__auto__ = switch__36294__auto__(state_38731);
if(cljs.core.keyword_identical_QMARK_(result__36297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36297__auto__;
}
break;
}
}catch (e38755){var ex__36298__auto__ = e38755;
var statearr_38756_39739 = state_38731;
(statearr_38756_39739[(2)] = ex__36298__auto__);


if(cljs.core.seq((state_38731[(4)]))){
var statearr_38758_39740 = state_38731;
(statearr_38758_39740[(1)] = cljs.core.first((state_38731[(4)])));

} else {
throw ex__36298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39741 = state_38731;
state_38731 = G__39741;
continue;
} else {
return ret_value__36296__auto__;
}
break;
}
});
cljs$core$async$state_machine__36295__auto__ = function(state_38731){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36295__auto____1.call(this,state_38731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36295__auto____0;
cljs$core$async$state_machine__36295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36295__auto____1;
return cljs$core$async$state_machine__36295__auto__;
})()
})();
var state__36463__auto__ = (function (){var statearr_38762 = f__36462__auto__();
(statearr_38762[(6)] = c__36461__auto___39709);

return statearr_38762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36463__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__38767 = arguments.length;
switch (G__38767) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36461__auto___39743 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36462__auto__ = (function (){var switch__36294__auto__ = (function (state_38816){
var state_val_38817 = (state_38816[(1)]);
if((state_val_38817 === (7))){
var inst_38812 = (state_38816[(2)]);
var state_38816__$1 = state_38816;
var statearr_38818_39744 = state_38816__$1;
(statearr_38818_39744[(2)] = inst_38812);

(statearr_38818_39744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38817 === (1))){
var inst_38775 = [];
var inst_38776 = inst_38775;
var inst_38777 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_38816__$1 = (function (){var statearr_38823 = state_38816;
(statearr_38823[(7)] = inst_38777);

(statearr_38823[(8)] = inst_38776);

return statearr_38823;
})();
var statearr_38824_39745 = state_38816__$1;
(statearr_38824_39745[(2)] = null);

(statearr_38824_39745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38817 === (4))){
var inst_38780 = (state_38816[(9)]);
var inst_38780__$1 = (state_38816[(2)]);
var inst_38781 = (inst_38780__$1 == null);
var inst_38782 = cljs.core.not(inst_38781);
var state_38816__$1 = (function (){var statearr_38825 = state_38816;
(statearr_38825[(9)] = inst_38780__$1);

return statearr_38825;
})();
if(inst_38782){
var statearr_38826_39746 = state_38816__$1;
(statearr_38826_39746[(1)] = (5));

} else {
var statearr_38827_39747 = state_38816__$1;
(statearr_38827_39747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38817 === (15))){
var inst_38806 = (state_38816[(2)]);
var state_38816__$1 = state_38816;
var statearr_38828_39748 = state_38816__$1;
(statearr_38828_39748[(2)] = inst_38806);

(statearr_38828_39748[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38817 === (13))){
var state_38816__$1 = state_38816;
var statearr_38829_39749 = state_38816__$1;
(statearr_38829_39749[(2)] = null);

(statearr_38829_39749[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38817 === (6))){
var inst_38776 = (state_38816[(8)]);
var inst_38801 = inst_38776.length;
var inst_38802 = (inst_38801 > (0));
var state_38816__$1 = state_38816;
if(cljs.core.truth_(inst_38802)){
var statearr_38834_39750 = state_38816__$1;
(statearr_38834_39750[(1)] = (12));

} else {
var statearr_38835_39751 = state_38816__$1;
(statearr_38835_39751[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38817 === (3))){
var inst_38814 = (state_38816[(2)]);
var state_38816__$1 = state_38816;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38816__$1,inst_38814);
} else {
if((state_val_38817 === (12))){
var inst_38776 = (state_38816[(8)]);
var inst_38804 = cljs.core.vec(inst_38776);
var state_38816__$1 = state_38816;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38816__$1,(15),out,inst_38804);
} else {
if((state_val_38817 === (2))){
var state_38816__$1 = state_38816;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38816__$1,(4),ch);
} else {
if((state_val_38817 === (11))){
var inst_38784 = (state_38816[(10)]);
var inst_38780 = (state_38816[(9)]);
var inst_38794 = (state_38816[(2)]);
var inst_38795 = [];
var inst_38796 = inst_38795.push(inst_38780);
var inst_38776 = inst_38795;
var inst_38777 = inst_38784;
var state_38816__$1 = (function (){var statearr_38836 = state_38816;
(statearr_38836[(7)] = inst_38777);

(statearr_38836[(11)] = inst_38796);

(statearr_38836[(8)] = inst_38776);

(statearr_38836[(12)] = inst_38794);

return statearr_38836;
})();
var statearr_38837_39752 = state_38816__$1;
(statearr_38837_39752[(2)] = null);

(statearr_38837_39752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38817 === (9))){
var inst_38776 = (state_38816[(8)]);
var inst_38792 = cljs.core.vec(inst_38776);
var state_38816__$1 = state_38816;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38816__$1,(11),out,inst_38792);
} else {
if((state_val_38817 === (5))){
var inst_38777 = (state_38816[(7)]);
var inst_38784 = (state_38816[(10)]);
var inst_38780 = (state_38816[(9)]);
var inst_38784__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38780) : f.call(null,inst_38780));
var inst_38785 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38784__$1,inst_38777);
var inst_38786 = cljs.core.keyword_identical_QMARK_(inst_38777,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_38787 = ((inst_38785) || (inst_38786));
var state_38816__$1 = (function (){var statearr_38838 = state_38816;
(statearr_38838[(10)] = inst_38784__$1);

return statearr_38838;
})();
if(cljs.core.truth_(inst_38787)){
var statearr_38839_39753 = state_38816__$1;
(statearr_38839_39753[(1)] = (8));

} else {
var statearr_38840_39754 = state_38816__$1;
(statearr_38840_39754[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38817 === (14))){
var inst_38809 = (state_38816[(2)]);
var inst_38810 = cljs.core.async.close_BANG_(out);
var state_38816__$1 = (function (){var statearr_38842 = state_38816;
(statearr_38842[(13)] = inst_38809);

return statearr_38842;
})();
var statearr_38843_39755 = state_38816__$1;
(statearr_38843_39755[(2)] = inst_38810);

(statearr_38843_39755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38817 === (10))){
var inst_38799 = (state_38816[(2)]);
var state_38816__$1 = state_38816;
var statearr_38844_39756 = state_38816__$1;
(statearr_38844_39756[(2)] = inst_38799);

(statearr_38844_39756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38817 === (8))){
var inst_38784 = (state_38816[(10)]);
var inst_38776 = (state_38816[(8)]);
var inst_38780 = (state_38816[(9)]);
var inst_38789 = inst_38776.push(inst_38780);
var tmp38841 = inst_38776;
var inst_38776__$1 = tmp38841;
var inst_38777 = inst_38784;
var state_38816__$1 = (function (){var statearr_38845 = state_38816;
(statearr_38845[(7)] = inst_38777);

(statearr_38845[(14)] = inst_38789);

(statearr_38845[(8)] = inst_38776__$1);

return statearr_38845;
})();
var statearr_38846_39760 = state_38816__$1;
(statearr_38846_39760[(2)] = null);

(statearr_38846_39760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36295__auto__ = null;
var cljs$core$async$state_machine__36295__auto____0 = (function (){
var statearr_38847 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38847[(0)] = cljs$core$async$state_machine__36295__auto__);

(statearr_38847[(1)] = (1));

return statearr_38847;
});
var cljs$core$async$state_machine__36295__auto____1 = (function (state_38816){
while(true){
var ret_value__36296__auto__ = (function (){try{while(true){
var result__36297__auto__ = switch__36294__auto__(state_38816);
if(cljs.core.keyword_identical_QMARK_(result__36297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36297__auto__;
}
break;
}
}catch (e38848){var ex__36298__auto__ = e38848;
var statearr_38849_39761 = state_38816;
(statearr_38849_39761[(2)] = ex__36298__auto__);


if(cljs.core.seq((state_38816[(4)]))){
var statearr_38850_39762 = state_38816;
(statearr_38850_39762[(1)] = cljs.core.first((state_38816[(4)])));

} else {
throw ex__36298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39763 = state_38816;
state_38816 = G__39763;
continue;
} else {
return ret_value__36296__auto__;
}
break;
}
});
cljs$core$async$state_machine__36295__auto__ = function(state_38816){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36295__auto____1.call(this,state_38816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36295__auto____0;
cljs$core$async$state_machine__36295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36295__auto____1;
return cljs$core$async$state_machine__36295__auto__;
})()
})();
var state__36463__auto__ = (function (){var statearr_38853 = f__36462__auto__();
(statearr_38853[(6)] = c__36461__auto___39743);

return statearr_38853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36463__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
