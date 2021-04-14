goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__36500 = arguments.length;
switch (G__36500) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36501 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36501 = (function (f,blockable,meta36502){
this.f = f;
this.blockable = blockable;
this.meta36502 = meta36502;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36503,meta36502__$1){
var self__ = this;
var _36503__$1 = this;
return (new cljs.core.async.t_cljs$core$async36501(self__.f,self__.blockable,meta36502__$1));
}));

(cljs.core.async.t_cljs$core$async36501.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36503){
var self__ = this;
var _36503__$1 = this;
return self__.meta36502;
}));

(cljs.core.async.t_cljs$core$async36501.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36501.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36501.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async36501.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async36501.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta36502","meta36502",46903045,null)], null);
}));

(cljs.core.async.t_cljs$core$async36501.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36501.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36501");

(cljs.core.async.t_cljs$core$async36501.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async36501");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36501.
 */
cljs.core.async.__GT_t_cljs$core$async36501 = (function cljs$core$async$__GT_t_cljs$core$async36501(f__$1,blockable__$1,meta36502){
return (new cljs.core.async.t_cljs$core$async36501(f__$1,blockable__$1,meta36502));
});

}

return (new cljs.core.async.t_cljs$core$async36501(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36506 = arguments.length;
switch (G__36506) {
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
var G__36508 = arguments.length;
switch (G__36508) {
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
var G__36510 = arguments.length;
switch (G__36510) {
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
var val_38836 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38836) : fn1.call(null,val_38836));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38836) : fn1.call(null,val_38836));
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
var G__36517 = arguments.length;
switch (G__36517) {
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
var n__4648__auto___38852 = n;
var x_38853 = (0);
while(true){
if((x_38853 < n__4648__auto___38852)){
(a[x_38853] = x_38853);

var G__38855 = (x_38853 + (1));
x_38853 = G__38855;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36524 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36524 = (function (flag,meta36525){
this.flag = flag;
this.meta36525 = meta36525;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36526,meta36525__$1){
var self__ = this;
var _36526__$1 = this;
return (new cljs.core.async.t_cljs$core$async36524(self__.flag,meta36525__$1));
}));

(cljs.core.async.t_cljs$core$async36524.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36526){
var self__ = this;
var _36526__$1 = this;
return self__.meta36525;
}));

(cljs.core.async.t_cljs$core$async36524.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36524.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async36524.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36524.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async36524.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta36525","meta36525",-1882392028,null)], null);
}));

(cljs.core.async.t_cljs$core$async36524.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36524.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36524");

(cljs.core.async.t_cljs$core$async36524.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async36524");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36524.
 */
cljs.core.async.__GT_t_cljs$core$async36524 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async36524(flag__$1,meta36525){
return (new cljs.core.async.t_cljs$core$async36524(flag__$1,meta36525));
});

}

return (new cljs.core.async.t_cljs$core$async36524(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36527 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36527 = (function (flag,cb,meta36528){
this.flag = flag;
this.cb = cb;
this.meta36528 = meta36528;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36529,meta36528__$1){
var self__ = this;
var _36529__$1 = this;
return (new cljs.core.async.t_cljs$core$async36527(self__.flag,self__.cb,meta36528__$1));
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
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async36527.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36527.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async36527.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta36528","meta36528",-1748862714,null)], null);
}));

(cljs.core.async.t_cljs$core$async36527.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36527.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36527");

(cljs.core.async.t_cljs$core$async36527.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async36527");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36527.
 */
cljs.core.async.__GT_t_cljs$core$async36527 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async36527(flag__$1,cb__$1,meta36528){
return (new cljs.core.async.t_cljs$core$async36527(flag__$1,cb__$1,meta36528));
});

}

return (new cljs.core.async.t_cljs$core$async36527(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__36531_SHARP_){
var G__36533 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36531_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__36533) : fret.call(null,G__36533));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36532_SHARP_){
var G__36534 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36532_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__36534) : fret.call(null,G__36534));
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
var len__4771__auto___38879 = arguments.length;
var i__4772__auto___38885 = (0);
while(true){
if((i__4772__auto___38885 < len__4771__auto___38879)){
args__4777__auto__.push((arguments[i__4772__auto___38885]));

var G__38886 = (i__4772__auto___38885 + (1));
i__4772__auto___38885 = G__38886;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__36541){
var map__36542 = p__36541;
var map__36542__$1 = cljs.core.__destructure_map(map__36542);
var opts = map__36542__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq36539){
var G__36540 = cljs.core.first(seq36539);
var seq36539__$1 = cljs.core.next(seq36539);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36540,seq36539__$1);
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
var G__36549 = arguments.length;
switch (G__36549) {
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
var c__36420__auto___38889 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36421__auto__ = (function (){var switch__36221__auto__ = (function (state_36598){
var state_val_36601 = (state_36598[(1)]);
if((state_val_36601 === (7))){
var inst_36593 = (state_36598[(2)]);
var state_36598__$1 = state_36598;
var statearr_36611_38891 = state_36598__$1;
(statearr_36611_38891[(2)] = inst_36593);

(statearr_36611_38891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36601 === (1))){
var state_36598__$1 = state_36598;
var statearr_36619_38892 = state_36598__$1;
(statearr_36619_38892[(2)] = null);

(statearr_36619_38892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36601 === (4))){
var inst_36569 = (state_36598[(7)]);
var inst_36569__$1 = (state_36598[(2)]);
var inst_36571 = (inst_36569__$1 == null);
var state_36598__$1 = (function (){var statearr_36621 = state_36598;
(statearr_36621[(7)] = inst_36569__$1);

return statearr_36621;
})();
if(cljs.core.truth_(inst_36571)){
var statearr_36622_38894 = state_36598__$1;
(statearr_36622_38894[(1)] = (5));

} else {
var statearr_36623_38900 = state_36598__$1;
(statearr_36623_38900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36601 === (13))){
var state_36598__$1 = state_36598;
var statearr_36628_38901 = state_36598__$1;
(statearr_36628_38901[(2)] = null);

(statearr_36628_38901[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36601 === (6))){
var inst_36569 = (state_36598[(7)]);
var state_36598__$1 = state_36598;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36598__$1,(11),to,inst_36569);
} else {
if((state_val_36601 === (3))){
var inst_36595 = (state_36598[(2)]);
var state_36598__$1 = state_36598;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36598__$1,inst_36595);
} else {
if((state_val_36601 === (12))){
var state_36598__$1 = state_36598;
var statearr_36632_38902 = state_36598__$1;
(statearr_36632_38902[(2)] = null);

(statearr_36632_38902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36601 === (2))){
var state_36598__$1 = state_36598;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36598__$1,(4),from);
} else {
if((state_val_36601 === (11))){
var inst_36584 = (state_36598[(2)]);
var state_36598__$1 = state_36598;
if(cljs.core.truth_(inst_36584)){
var statearr_36634_38904 = state_36598__$1;
(statearr_36634_38904[(1)] = (12));

} else {
var statearr_36635_38906 = state_36598__$1;
(statearr_36635_38906[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36601 === (9))){
var state_36598__$1 = state_36598;
var statearr_36638_38907 = state_36598__$1;
(statearr_36638_38907[(2)] = null);

(statearr_36638_38907[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36601 === (5))){
var state_36598__$1 = state_36598;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36643_38908 = state_36598__$1;
(statearr_36643_38908[(1)] = (8));

} else {
var statearr_36644_38909 = state_36598__$1;
(statearr_36644_38909[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36601 === (14))){
var inst_36591 = (state_36598[(2)]);
var state_36598__$1 = state_36598;
var statearr_36646_38910 = state_36598__$1;
(statearr_36646_38910[(2)] = inst_36591);

(statearr_36646_38910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36601 === (10))){
var inst_36581 = (state_36598[(2)]);
var state_36598__$1 = state_36598;
var statearr_36647_38911 = state_36598__$1;
(statearr_36647_38911[(2)] = inst_36581);

(statearr_36647_38911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36601 === (8))){
var inst_36576 = cljs.core.async.close_BANG_(to);
var state_36598__$1 = state_36598;
var statearr_36652_38913 = state_36598__$1;
(statearr_36652_38913[(2)] = inst_36576);

(statearr_36652_38913[(1)] = (10));


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
var cljs$core$async$state_machine__36222__auto__ = null;
var cljs$core$async$state_machine__36222__auto____0 = (function (){
var statearr_36653 = [null,null,null,null,null,null,null,null];
(statearr_36653[(0)] = cljs$core$async$state_machine__36222__auto__);

(statearr_36653[(1)] = (1));

return statearr_36653;
});
var cljs$core$async$state_machine__36222__auto____1 = (function (state_36598){
while(true){
var ret_value__36223__auto__ = (function (){try{while(true){
var result__36224__auto__ = switch__36221__auto__(state_36598);
if(cljs.core.keyword_identical_QMARK_(result__36224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36224__auto__;
}
break;
}
}catch (e36654){var ex__36225__auto__ = e36654;
var statearr_36655_38917 = state_36598;
(statearr_36655_38917[(2)] = ex__36225__auto__);


if(cljs.core.seq((state_36598[(4)]))){
var statearr_36656_38918 = state_36598;
(statearr_36656_38918[(1)] = cljs.core.first((state_36598[(4)])));

} else {
throw ex__36225__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38919 = state_36598;
state_36598 = G__38919;
continue;
} else {
return ret_value__36223__auto__;
}
break;
}
});
cljs$core$async$state_machine__36222__auto__ = function(state_36598){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36222__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36222__auto____1.call(this,state_36598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36222__auto____0;
cljs$core$async$state_machine__36222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36222__auto____1;
return cljs$core$async$state_machine__36222__auto__;
})()
})();
var state__36422__auto__ = (function (){var statearr_36664 = f__36421__auto__();
(statearr_36664[(6)] = c__36420__auto___38889);

return statearr_36664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36422__auto__);
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
var process = (function (p__36666){
var vec__36667 = p__36666;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36667,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36667,(1),null);
var job = vec__36667;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__36420__auto___38931 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36421__auto__ = (function (){var switch__36221__auto__ = (function (state_36675){
var state_val_36676 = (state_36675[(1)]);
if((state_val_36676 === (1))){
var state_36675__$1 = state_36675;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36675__$1,(2),res,v);
} else {
if((state_val_36676 === (2))){
var inst_36672 = (state_36675[(2)]);
var inst_36673 = cljs.core.async.close_BANG_(res);
var state_36675__$1 = (function (){var statearr_36678 = state_36675;
(statearr_36678[(7)] = inst_36672);

return statearr_36678;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36675__$1,inst_36673);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36222__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36222__auto____0 = (function (){
var statearr_36684 = [null,null,null,null,null,null,null,null];
(statearr_36684[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36222__auto__);

(statearr_36684[(1)] = (1));

return statearr_36684;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36222__auto____1 = (function (state_36675){
while(true){
var ret_value__36223__auto__ = (function (){try{while(true){
var result__36224__auto__ = switch__36221__auto__(state_36675);
if(cljs.core.keyword_identical_QMARK_(result__36224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36224__auto__;
}
break;
}
}catch (e36685){var ex__36225__auto__ = e36685;
var statearr_36686_38932 = state_36675;
(statearr_36686_38932[(2)] = ex__36225__auto__);


if(cljs.core.seq((state_36675[(4)]))){
var statearr_36687_38933 = state_36675;
(statearr_36687_38933[(1)] = cljs.core.first((state_36675[(4)])));

} else {
throw ex__36225__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38935 = state_36675;
state_36675 = G__38935;
continue;
} else {
return ret_value__36223__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36222__auto__ = function(state_36675){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36222__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36222__auto____1.call(this,state_36675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36222__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36222__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36222__auto__;
})()
})();
var state__36422__auto__ = (function (){var statearr_36689 = f__36421__auto__();
(statearr_36689[(6)] = c__36420__auto___38931);

return statearr_36689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36422__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__36690){
var vec__36691 = p__36690;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36691,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36691,(1),null);
var job = vec__36691;
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
var n__4648__auto___38940 = n;
var __38941 = (0);
while(true){
if((__38941 < n__4648__auto___38940)){
var G__36695_38942 = type;
var G__36695_38943__$1 = (((G__36695_38942 instanceof cljs.core.Keyword))?G__36695_38942.fqn:null);
switch (G__36695_38943__$1) {
case "compute":
var c__36420__auto___38945 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__38941,c__36420__auto___38945,G__36695_38942,G__36695_38943__$1,n__4648__auto___38940,jobs,results,process,async){
return (function (){
var f__36421__auto__ = (function (){var switch__36221__auto__ = ((function (__38941,c__36420__auto___38945,G__36695_38942,G__36695_38943__$1,n__4648__auto___38940,jobs,results,process,async){
return (function (state_36708){
var state_val_36709 = (state_36708[(1)]);
if((state_val_36709 === (1))){
var state_36708__$1 = state_36708;
var statearr_36710_38948 = state_36708__$1;
(statearr_36710_38948[(2)] = null);

(statearr_36710_38948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36709 === (2))){
var state_36708__$1 = state_36708;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36708__$1,(4),jobs);
} else {
if((state_val_36709 === (3))){
var inst_36706 = (state_36708[(2)]);
var state_36708__$1 = state_36708;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36708__$1,inst_36706);
} else {
if((state_val_36709 === (4))){
var inst_36698 = (state_36708[(2)]);
var inst_36699 = process(inst_36698);
var state_36708__$1 = state_36708;
if(cljs.core.truth_(inst_36699)){
var statearr_36713_38951 = state_36708__$1;
(statearr_36713_38951[(1)] = (5));

} else {
var statearr_36714_38952 = state_36708__$1;
(statearr_36714_38952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36709 === (5))){
var state_36708__$1 = state_36708;
var statearr_36715_38953 = state_36708__$1;
(statearr_36715_38953[(2)] = null);

(statearr_36715_38953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36709 === (6))){
var state_36708__$1 = state_36708;
var statearr_36719_38954 = state_36708__$1;
(statearr_36719_38954[(2)] = null);

(statearr_36719_38954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36709 === (7))){
var inst_36704 = (state_36708[(2)]);
var state_36708__$1 = state_36708;
var statearr_36728_38955 = state_36708__$1;
(statearr_36728_38955[(2)] = inst_36704);

(statearr_36728_38955[(1)] = (3));


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
});})(__38941,c__36420__auto___38945,G__36695_38942,G__36695_38943__$1,n__4648__auto___38940,jobs,results,process,async))
;
return ((function (__38941,switch__36221__auto__,c__36420__auto___38945,G__36695_38942,G__36695_38943__$1,n__4648__auto___38940,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36222__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36222__auto____0 = (function (){
var statearr_36733 = [null,null,null,null,null,null,null];
(statearr_36733[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36222__auto__);

(statearr_36733[(1)] = (1));

return statearr_36733;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36222__auto____1 = (function (state_36708){
while(true){
var ret_value__36223__auto__ = (function (){try{while(true){
var result__36224__auto__ = switch__36221__auto__(state_36708);
if(cljs.core.keyword_identical_QMARK_(result__36224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36224__auto__;
}
break;
}
}catch (e36742){var ex__36225__auto__ = e36742;
var statearr_36743_38956 = state_36708;
(statearr_36743_38956[(2)] = ex__36225__auto__);


if(cljs.core.seq((state_36708[(4)]))){
var statearr_36744_38957 = state_36708;
(statearr_36744_38957[(1)] = cljs.core.first((state_36708[(4)])));

} else {
throw ex__36225__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38958 = state_36708;
state_36708 = G__38958;
continue;
} else {
return ret_value__36223__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36222__auto__ = function(state_36708){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36222__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36222__auto____1.call(this,state_36708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36222__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36222__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36222__auto__;
})()
;})(__38941,switch__36221__auto__,c__36420__auto___38945,G__36695_38942,G__36695_38943__$1,n__4648__auto___38940,jobs,results,process,async))
})();
var state__36422__auto__ = (function (){var statearr_36745 = f__36421__auto__();
(statearr_36745[(6)] = c__36420__auto___38945);

return statearr_36745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36422__auto__);
});})(__38941,c__36420__auto___38945,G__36695_38942,G__36695_38943__$1,n__4648__auto___38940,jobs,results,process,async))
);


break;
case "async":
var c__36420__auto___38959 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__38941,c__36420__auto___38959,G__36695_38942,G__36695_38943__$1,n__4648__auto___38940,jobs,results,process,async){
return (function (){
var f__36421__auto__ = (function (){var switch__36221__auto__ = ((function (__38941,c__36420__auto___38959,G__36695_38942,G__36695_38943__$1,n__4648__auto___38940,jobs,results,process,async){
return (function (state_36758){
var state_val_36759 = (state_36758[(1)]);
if((state_val_36759 === (1))){
var state_36758__$1 = state_36758;
var statearr_36762_38960 = state_36758__$1;
(statearr_36762_38960[(2)] = null);

(statearr_36762_38960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (2))){
var state_36758__$1 = state_36758;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36758__$1,(4),jobs);
} else {
if((state_val_36759 === (3))){
var inst_36756 = (state_36758[(2)]);
var state_36758__$1 = state_36758;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36758__$1,inst_36756);
} else {
if((state_val_36759 === (4))){
var inst_36748 = (state_36758[(2)]);
var inst_36749 = async(inst_36748);
var state_36758__$1 = state_36758;
if(cljs.core.truth_(inst_36749)){
var statearr_36778_38961 = state_36758__$1;
(statearr_36778_38961[(1)] = (5));

} else {
var statearr_36779_38962 = state_36758__$1;
(statearr_36779_38962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (5))){
var state_36758__$1 = state_36758;
var statearr_36788_38963 = state_36758__$1;
(statearr_36788_38963[(2)] = null);

(statearr_36788_38963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (6))){
var state_36758__$1 = state_36758;
var statearr_36789_38964 = state_36758__$1;
(statearr_36789_38964[(2)] = null);

(statearr_36789_38964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (7))){
var inst_36754 = (state_36758[(2)]);
var state_36758__$1 = state_36758;
var statearr_36790_38965 = state_36758__$1;
(statearr_36790_38965[(2)] = inst_36754);

(statearr_36790_38965[(1)] = (3));


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
});})(__38941,c__36420__auto___38959,G__36695_38942,G__36695_38943__$1,n__4648__auto___38940,jobs,results,process,async))
;
return ((function (__38941,switch__36221__auto__,c__36420__auto___38959,G__36695_38942,G__36695_38943__$1,n__4648__auto___38940,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36222__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36222__auto____0 = (function (){
var statearr_36791 = [null,null,null,null,null,null,null];
(statearr_36791[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36222__auto__);

(statearr_36791[(1)] = (1));

return statearr_36791;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36222__auto____1 = (function (state_36758){
while(true){
var ret_value__36223__auto__ = (function (){try{while(true){
var result__36224__auto__ = switch__36221__auto__(state_36758);
if(cljs.core.keyword_identical_QMARK_(result__36224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36224__auto__;
}
break;
}
}catch (e36792){var ex__36225__auto__ = e36792;
var statearr_36793_38966 = state_36758;
(statearr_36793_38966[(2)] = ex__36225__auto__);


if(cljs.core.seq((state_36758[(4)]))){
var statearr_36794_38967 = state_36758;
(statearr_36794_38967[(1)] = cljs.core.first((state_36758[(4)])));

} else {
throw ex__36225__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38968 = state_36758;
state_36758 = G__38968;
continue;
} else {
return ret_value__36223__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36222__auto__ = function(state_36758){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36222__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36222__auto____1.call(this,state_36758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36222__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36222__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36222__auto__;
})()
;})(__38941,switch__36221__auto__,c__36420__auto___38959,G__36695_38942,G__36695_38943__$1,n__4648__auto___38940,jobs,results,process,async))
})();
var state__36422__auto__ = (function (){var statearr_36796 = f__36421__auto__();
(statearr_36796[(6)] = c__36420__auto___38959);

return statearr_36796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36422__auto__);
});})(__38941,c__36420__auto___38959,G__36695_38942,G__36695_38943__$1,n__4648__auto___38940,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36695_38943__$1)].join('')));

}

var G__38969 = (__38941 + (1));
__38941 = G__38969;
continue;
} else {
}
break;
}

var c__36420__auto___38970 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36421__auto__ = (function (){var switch__36221__auto__ = (function (state_36819){
var state_val_36820 = (state_36819[(1)]);
if((state_val_36820 === (7))){
var inst_36815 = (state_36819[(2)]);
var state_36819__$1 = state_36819;
var statearr_36823_38971 = state_36819__$1;
(statearr_36823_38971[(2)] = inst_36815);

(statearr_36823_38971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36820 === (1))){
var state_36819__$1 = state_36819;
var statearr_36824_38972 = state_36819__$1;
(statearr_36824_38972[(2)] = null);

(statearr_36824_38972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36820 === (4))){
var inst_36799 = (state_36819[(7)]);
var inst_36799__$1 = (state_36819[(2)]);
var inst_36800 = (inst_36799__$1 == null);
var state_36819__$1 = (function (){var statearr_36834 = state_36819;
(statearr_36834[(7)] = inst_36799__$1);

return statearr_36834;
})();
if(cljs.core.truth_(inst_36800)){
var statearr_36835_38973 = state_36819__$1;
(statearr_36835_38973[(1)] = (5));

} else {
var statearr_36836_38974 = state_36819__$1;
(statearr_36836_38974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36820 === (6))){
var inst_36804 = (state_36819[(8)]);
var inst_36799 = (state_36819[(7)]);
var inst_36804__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_36805 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36806 = [inst_36799,inst_36804__$1];
var inst_36807 = (new cljs.core.PersistentVector(null,2,(5),inst_36805,inst_36806,null));
var state_36819__$1 = (function (){var statearr_36837 = state_36819;
(statearr_36837[(8)] = inst_36804__$1);

return statearr_36837;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36819__$1,(8),jobs,inst_36807);
} else {
if((state_val_36820 === (3))){
var inst_36817 = (state_36819[(2)]);
var state_36819__$1 = state_36819;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36819__$1,inst_36817);
} else {
if((state_val_36820 === (2))){
var state_36819__$1 = state_36819;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36819__$1,(4),from);
} else {
if((state_val_36820 === (9))){
var inst_36812 = (state_36819[(2)]);
var state_36819__$1 = (function (){var statearr_36841 = state_36819;
(statearr_36841[(9)] = inst_36812);

return statearr_36841;
})();
var statearr_36842_38977 = state_36819__$1;
(statearr_36842_38977[(2)] = null);

(statearr_36842_38977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36820 === (5))){
var inst_36802 = cljs.core.async.close_BANG_(jobs);
var state_36819__$1 = state_36819;
var statearr_36843_38978 = state_36819__$1;
(statearr_36843_38978[(2)] = inst_36802);

(statearr_36843_38978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36820 === (8))){
var inst_36804 = (state_36819[(8)]);
var inst_36809 = (state_36819[(2)]);
var state_36819__$1 = (function (){var statearr_36844 = state_36819;
(statearr_36844[(10)] = inst_36809);

return statearr_36844;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36819__$1,(9),results,inst_36804);
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
var cljs$core$async$pipeline_STAR__$_state_machine__36222__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36222__auto____0 = (function (){
var statearr_36849 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36849[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36222__auto__);

(statearr_36849[(1)] = (1));

return statearr_36849;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36222__auto____1 = (function (state_36819){
while(true){
var ret_value__36223__auto__ = (function (){try{while(true){
var result__36224__auto__ = switch__36221__auto__(state_36819);
if(cljs.core.keyword_identical_QMARK_(result__36224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36224__auto__;
}
break;
}
}catch (e36850){var ex__36225__auto__ = e36850;
var statearr_36851_38983 = state_36819;
(statearr_36851_38983[(2)] = ex__36225__auto__);


if(cljs.core.seq((state_36819[(4)]))){
var statearr_36852_38985 = state_36819;
(statearr_36852_38985[(1)] = cljs.core.first((state_36819[(4)])));

} else {
throw ex__36225__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38986 = state_36819;
state_36819 = G__38986;
continue;
} else {
return ret_value__36223__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36222__auto__ = function(state_36819){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36222__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36222__auto____1.call(this,state_36819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36222__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36222__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36222__auto__;
})()
})();
var state__36422__auto__ = (function (){var statearr_36853 = f__36421__auto__();
(statearr_36853[(6)] = c__36420__auto___38970);

return statearr_36853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36422__auto__);
}));


var c__36420__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36421__auto__ = (function (){var switch__36221__auto__ = (function (state_36895){
var state_val_36896 = (state_36895[(1)]);
if((state_val_36896 === (7))){
var inst_36891 = (state_36895[(2)]);
var state_36895__$1 = state_36895;
var statearr_36900_38991 = state_36895__$1;
(statearr_36900_38991[(2)] = inst_36891);

(statearr_36900_38991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36896 === (20))){
var state_36895__$1 = state_36895;
var statearr_36905_38993 = state_36895__$1;
(statearr_36905_38993[(2)] = null);

(statearr_36905_38993[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36896 === (1))){
var state_36895__$1 = state_36895;
var statearr_36906_38994 = state_36895__$1;
(statearr_36906_38994[(2)] = null);

(statearr_36906_38994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36896 === (4))){
var inst_36856 = (state_36895[(7)]);
var inst_36856__$1 = (state_36895[(2)]);
var inst_36860 = (inst_36856__$1 == null);
var state_36895__$1 = (function (){var statearr_36907 = state_36895;
(statearr_36907[(7)] = inst_36856__$1);

return statearr_36907;
})();
if(cljs.core.truth_(inst_36860)){
var statearr_36908_38995 = state_36895__$1;
(statearr_36908_38995[(1)] = (5));

} else {
var statearr_36909_38996 = state_36895__$1;
(statearr_36909_38996[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36896 === (15))){
var inst_36873 = (state_36895[(8)]);
var state_36895__$1 = state_36895;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36895__$1,(18),to,inst_36873);
} else {
if((state_val_36896 === (21))){
var inst_36886 = (state_36895[(2)]);
var state_36895__$1 = state_36895;
var statearr_36910_38999 = state_36895__$1;
(statearr_36910_38999[(2)] = inst_36886);

(statearr_36910_38999[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36896 === (13))){
var inst_36888 = (state_36895[(2)]);
var state_36895__$1 = (function (){var statearr_36911 = state_36895;
(statearr_36911[(9)] = inst_36888);

return statearr_36911;
})();
var statearr_36912_39000 = state_36895__$1;
(statearr_36912_39000[(2)] = null);

(statearr_36912_39000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36896 === (6))){
var inst_36856 = (state_36895[(7)]);
var state_36895__$1 = state_36895;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36895__$1,(11),inst_36856);
} else {
if((state_val_36896 === (17))){
var inst_36881 = (state_36895[(2)]);
var state_36895__$1 = state_36895;
if(cljs.core.truth_(inst_36881)){
var statearr_36913_39001 = state_36895__$1;
(statearr_36913_39001[(1)] = (19));

} else {
var statearr_36915_39002 = state_36895__$1;
(statearr_36915_39002[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36896 === (3))){
var inst_36893 = (state_36895[(2)]);
var state_36895__$1 = state_36895;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36895__$1,inst_36893);
} else {
if((state_val_36896 === (12))){
var inst_36869 = (state_36895[(10)]);
var state_36895__$1 = state_36895;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36895__$1,(14),inst_36869);
} else {
if((state_val_36896 === (2))){
var state_36895__$1 = state_36895;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36895__$1,(4),results);
} else {
if((state_val_36896 === (19))){
var state_36895__$1 = state_36895;
var statearr_36917_39006 = state_36895__$1;
(statearr_36917_39006[(2)] = null);

(statearr_36917_39006[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36896 === (11))){
var inst_36869 = (state_36895[(2)]);
var state_36895__$1 = (function (){var statearr_36918 = state_36895;
(statearr_36918[(10)] = inst_36869);

return statearr_36918;
})();
var statearr_36919_39007 = state_36895__$1;
(statearr_36919_39007[(2)] = null);

(statearr_36919_39007[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36896 === (9))){
var state_36895__$1 = state_36895;
var statearr_36920_39010 = state_36895__$1;
(statearr_36920_39010[(2)] = null);

(statearr_36920_39010[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36896 === (5))){
var state_36895__$1 = state_36895;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36921_39011 = state_36895__$1;
(statearr_36921_39011[(1)] = (8));

} else {
var statearr_36922_39012 = state_36895__$1;
(statearr_36922_39012[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36896 === (14))){
var inst_36873 = (state_36895[(8)]);
var inst_36873__$1 = (state_36895[(2)]);
var inst_36874 = (inst_36873__$1 == null);
var inst_36875 = cljs.core.not(inst_36874);
var state_36895__$1 = (function (){var statearr_36923 = state_36895;
(statearr_36923[(8)] = inst_36873__$1);

return statearr_36923;
})();
if(inst_36875){
var statearr_36924_39013 = state_36895__$1;
(statearr_36924_39013[(1)] = (15));

} else {
var statearr_36925_39014 = state_36895__$1;
(statearr_36925_39014[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36896 === (16))){
var state_36895__$1 = state_36895;
var statearr_36926_39015 = state_36895__$1;
(statearr_36926_39015[(2)] = false);

(statearr_36926_39015[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36896 === (10))){
var inst_36866 = (state_36895[(2)]);
var state_36895__$1 = state_36895;
var statearr_36927_39016 = state_36895__$1;
(statearr_36927_39016[(2)] = inst_36866);

(statearr_36927_39016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36896 === (18))){
var inst_36878 = (state_36895[(2)]);
var state_36895__$1 = state_36895;
var statearr_36928_39017 = state_36895__$1;
(statearr_36928_39017[(2)] = inst_36878);

(statearr_36928_39017[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36896 === (8))){
var inst_36863 = cljs.core.async.close_BANG_(to);
var state_36895__$1 = state_36895;
var statearr_36929_39018 = state_36895__$1;
(statearr_36929_39018[(2)] = inst_36863);

(statearr_36929_39018[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__36222__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36222__auto____0 = (function (){
var statearr_36930 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36930[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36222__auto__);

(statearr_36930[(1)] = (1));

return statearr_36930;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36222__auto____1 = (function (state_36895){
while(true){
var ret_value__36223__auto__ = (function (){try{while(true){
var result__36224__auto__ = switch__36221__auto__(state_36895);
if(cljs.core.keyword_identical_QMARK_(result__36224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36224__auto__;
}
break;
}
}catch (e36931){var ex__36225__auto__ = e36931;
var statearr_36932_39019 = state_36895;
(statearr_36932_39019[(2)] = ex__36225__auto__);


if(cljs.core.seq((state_36895[(4)]))){
var statearr_36933_39020 = state_36895;
(statearr_36933_39020[(1)] = cljs.core.first((state_36895[(4)])));

} else {
throw ex__36225__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39021 = state_36895;
state_36895 = G__39021;
continue;
} else {
return ret_value__36223__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36222__auto__ = function(state_36895){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36222__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36222__auto____1.call(this,state_36895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36222__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36222__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36222__auto__;
})()
})();
var state__36422__auto__ = (function (){var statearr_36934 = f__36421__auto__();
(statearr_36934[(6)] = c__36420__auto__);

return statearr_36934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36422__auto__);
}));

return c__36420__auto__;
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
var G__36937 = arguments.length;
switch (G__36937) {
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
var G__36939 = arguments.length;
switch (G__36939) {
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
var G__36942 = arguments.length;
switch (G__36942) {
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
var c__36420__auto___39033 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36421__auto__ = (function (){var switch__36221__auto__ = (function (state_36969){
var state_val_36970 = (state_36969[(1)]);
if((state_val_36970 === (7))){
var inst_36965 = (state_36969[(2)]);
var state_36969__$1 = state_36969;
var statearr_36971_39034 = state_36969__$1;
(statearr_36971_39034[(2)] = inst_36965);

(statearr_36971_39034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36970 === (1))){
var state_36969__$1 = state_36969;
var statearr_36973_39035 = state_36969__$1;
(statearr_36973_39035[(2)] = null);

(statearr_36973_39035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36970 === (4))){
var inst_36946 = (state_36969[(7)]);
var inst_36946__$1 = (state_36969[(2)]);
var inst_36947 = (inst_36946__$1 == null);
var state_36969__$1 = (function (){var statearr_36974 = state_36969;
(statearr_36974[(7)] = inst_36946__$1);

return statearr_36974;
})();
if(cljs.core.truth_(inst_36947)){
var statearr_36975_39036 = state_36969__$1;
(statearr_36975_39036[(1)] = (5));

} else {
var statearr_36976_39037 = state_36969__$1;
(statearr_36976_39037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36970 === (13))){
var state_36969__$1 = state_36969;
var statearr_36977_39038 = state_36969__$1;
(statearr_36977_39038[(2)] = null);

(statearr_36977_39038[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36970 === (6))){
var inst_36946 = (state_36969[(7)]);
var inst_36952 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36946) : p.call(null,inst_36946));
var state_36969__$1 = state_36969;
if(cljs.core.truth_(inst_36952)){
var statearr_36978_39040 = state_36969__$1;
(statearr_36978_39040[(1)] = (9));

} else {
var statearr_36979_39041 = state_36969__$1;
(statearr_36979_39041[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36970 === (3))){
var inst_36967 = (state_36969[(2)]);
var state_36969__$1 = state_36969;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36969__$1,inst_36967);
} else {
if((state_val_36970 === (12))){
var state_36969__$1 = state_36969;
var statearr_36980_39043 = state_36969__$1;
(statearr_36980_39043[(2)] = null);

(statearr_36980_39043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36970 === (2))){
var state_36969__$1 = state_36969;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36969__$1,(4),ch);
} else {
if((state_val_36970 === (11))){
var inst_36946 = (state_36969[(7)]);
var inst_36956 = (state_36969[(2)]);
var state_36969__$1 = state_36969;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36969__$1,(8),inst_36956,inst_36946);
} else {
if((state_val_36970 === (9))){
var state_36969__$1 = state_36969;
var statearr_36987_39044 = state_36969__$1;
(statearr_36987_39044[(2)] = tc);

(statearr_36987_39044[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36970 === (5))){
var inst_36949 = cljs.core.async.close_BANG_(tc);
var inst_36950 = cljs.core.async.close_BANG_(fc);
var state_36969__$1 = (function (){var statearr_37006 = state_36969;
(statearr_37006[(8)] = inst_36949);

return statearr_37006;
})();
var statearr_37007_39045 = state_36969__$1;
(statearr_37007_39045[(2)] = inst_36950);

(statearr_37007_39045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36970 === (14))){
var inst_36963 = (state_36969[(2)]);
var state_36969__$1 = state_36969;
var statearr_37009_39048 = state_36969__$1;
(statearr_37009_39048[(2)] = inst_36963);

(statearr_37009_39048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36970 === (10))){
var state_36969__$1 = state_36969;
var statearr_37010_39049 = state_36969__$1;
(statearr_37010_39049[(2)] = fc);

(statearr_37010_39049[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36970 === (8))){
var inst_36958 = (state_36969[(2)]);
var state_36969__$1 = state_36969;
if(cljs.core.truth_(inst_36958)){
var statearr_37011_39050 = state_36969__$1;
(statearr_37011_39050[(1)] = (12));

} else {
var statearr_37012_39051 = state_36969__$1;
(statearr_37012_39051[(1)] = (13));

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
var cljs$core$async$state_machine__36222__auto__ = null;
var cljs$core$async$state_machine__36222__auto____0 = (function (){
var statearr_37013 = [null,null,null,null,null,null,null,null,null];
(statearr_37013[(0)] = cljs$core$async$state_machine__36222__auto__);

(statearr_37013[(1)] = (1));

return statearr_37013;
});
var cljs$core$async$state_machine__36222__auto____1 = (function (state_36969){
while(true){
var ret_value__36223__auto__ = (function (){try{while(true){
var result__36224__auto__ = switch__36221__auto__(state_36969);
if(cljs.core.keyword_identical_QMARK_(result__36224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36224__auto__;
}
break;
}
}catch (e37015){var ex__36225__auto__ = e37015;
var statearr_37016_39054 = state_36969;
(statearr_37016_39054[(2)] = ex__36225__auto__);


if(cljs.core.seq((state_36969[(4)]))){
var statearr_37017_39055 = state_36969;
(statearr_37017_39055[(1)] = cljs.core.first((state_36969[(4)])));

} else {
throw ex__36225__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39056 = state_36969;
state_36969 = G__39056;
continue;
} else {
return ret_value__36223__auto__;
}
break;
}
});
cljs$core$async$state_machine__36222__auto__ = function(state_36969){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36222__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36222__auto____1.call(this,state_36969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36222__auto____0;
cljs$core$async$state_machine__36222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36222__auto____1;
return cljs$core$async$state_machine__36222__auto__;
})()
})();
var state__36422__auto__ = (function (){var statearr_37018 = f__36421__auto__();
(statearr_37018[(6)] = c__36420__auto___39033);

return statearr_37018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36422__auto__);
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
var c__36420__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36421__auto__ = (function (){var switch__36221__auto__ = (function (state_37045){
var state_val_37046 = (state_37045[(1)]);
if((state_val_37046 === (7))){
var inst_37041 = (state_37045[(2)]);
var state_37045__$1 = state_37045;
var statearr_37056_39057 = state_37045__$1;
(statearr_37056_39057[(2)] = inst_37041);

(statearr_37056_39057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37046 === (1))){
var inst_37023 = init;
var inst_37024 = inst_37023;
var state_37045__$1 = (function (){var statearr_37070 = state_37045;
(statearr_37070[(7)] = inst_37024);

return statearr_37070;
})();
var statearr_37071_39058 = state_37045__$1;
(statearr_37071_39058[(2)] = null);

(statearr_37071_39058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37046 === (4))){
var inst_37027 = (state_37045[(8)]);
var inst_37027__$1 = (state_37045[(2)]);
var inst_37028 = (inst_37027__$1 == null);
var state_37045__$1 = (function (){var statearr_37072 = state_37045;
(statearr_37072[(8)] = inst_37027__$1);

return statearr_37072;
})();
if(cljs.core.truth_(inst_37028)){
var statearr_37116_39059 = state_37045__$1;
(statearr_37116_39059[(1)] = (5));

} else {
var statearr_37117_39060 = state_37045__$1;
(statearr_37117_39060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37046 === (6))){
var inst_37027 = (state_37045[(8)]);
var inst_37024 = (state_37045[(7)]);
var inst_37031 = (state_37045[(9)]);
var inst_37031__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_37024,inst_37027) : f.call(null,inst_37024,inst_37027));
var inst_37032 = cljs.core.reduced_QMARK_(inst_37031__$1);
var state_37045__$1 = (function (){var statearr_37118 = state_37045;
(statearr_37118[(9)] = inst_37031__$1);

return statearr_37118;
})();
if(inst_37032){
var statearr_37119_39062 = state_37045__$1;
(statearr_37119_39062[(1)] = (8));

} else {
var statearr_37120_39063 = state_37045__$1;
(statearr_37120_39063[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37046 === (3))){
var inst_37043 = (state_37045[(2)]);
var state_37045__$1 = state_37045;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37045__$1,inst_37043);
} else {
if((state_val_37046 === (2))){
var state_37045__$1 = state_37045;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37045__$1,(4),ch);
} else {
if((state_val_37046 === (9))){
var inst_37031 = (state_37045[(9)]);
var inst_37024 = inst_37031;
var state_37045__$1 = (function (){var statearr_37122 = state_37045;
(statearr_37122[(7)] = inst_37024);

return statearr_37122;
})();
var statearr_37124_39064 = state_37045__$1;
(statearr_37124_39064[(2)] = null);

(statearr_37124_39064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37046 === (5))){
var inst_37024 = (state_37045[(7)]);
var state_37045__$1 = state_37045;
var statearr_37139_39065 = state_37045__$1;
(statearr_37139_39065[(2)] = inst_37024);

(statearr_37139_39065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37046 === (10))){
var inst_37039 = (state_37045[(2)]);
var state_37045__$1 = state_37045;
var statearr_37141_39067 = state_37045__$1;
(statearr_37141_39067[(2)] = inst_37039);

(statearr_37141_39067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37046 === (8))){
var inst_37031 = (state_37045[(9)]);
var inst_37035 = cljs.core.deref(inst_37031);
var state_37045__$1 = state_37045;
var statearr_37142_39071 = state_37045__$1;
(statearr_37142_39071[(2)] = inst_37035);

(statearr_37142_39071[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__36222__auto__ = null;
var cljs$core$async$reduce_$_state_machine__36222__auto____0 = (function (){
var statearr_37143 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37143[(0)] = cljs$core$async$reduce_$_state_machine__36222__auto__);

(statearr_37143[(1)] = (1));

return statearr_37143;
});
var cljs$core$async$reduce_$_state_machine__36222__auto____1 = (function (state_37045){
while(true){
var ret_value__36223__auto__ = (function (){try{while(true){
var result__36224__auto__ = switch__36221__auto__(state_37045);
if(cljs.core.keyword_identical_QMARK_(result__36224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36224__auto__;
}
break;
}
}catch (e37144){var ex__36225__auto__ = e37144;
var statearr_37145_39072 = state_37045;
(statearr_37145_39072[(2)] = ex__36225__auto__);


if(cljs.core.seq((state_37045[(4)]))){
var statearr_37146_39073 = state_37045;
(statearr_37146_39073[(1)] = cljs.core.first((state_37045[(4)])));

} else {
throw ex__36225__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39074 = state_37045;
state_37045 = G__39074;
continue;
} else {
return ret_value__36223__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__36222__auto__ = function(state_37045){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__36222__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__36222__auto____1.call(this,state_37045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__36222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__36222__auto____0;
cljs$core$async$reduce_$_state_machine__36222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__36222__auto____1;
return cljs$core$async$reduce_$_state_machine__36222__auto__;
})()
})();
var state__36422__auto__ = (function (){var statearr_37147 = f__36421__auto__();
(statearr_37147[(6)] = c__36420__auto__);

return statearr_37147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36422__auto__);
}));

return c__36420__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__36420__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36421__auto__ = (function (){var switch__36221__auto__ = (function (state_37153){
var state_val_37154 = (state_37153[(1)]);
if((state_val_37154 === (1))){
var inst_37148 = cljs.core.async.reduce(f__$1,init,ch);
var state_37153__$1 = state_37153;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37153__$1,(2),inst_37148);
} else {
if((state_val_37154 === (2))){
var inst_37150 = (state_37153[(2)]);
var inst_37151 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_37150) : f__$1.call(null,inst_37150));
var state_37153__$1 = state_37153;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37153__$1,inst_37151);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__36222__auto__ = null;
var cljs$core$async$transduce_$_state_machine__36222__auto____0 = (function (){
var statearr_37156 = [null,null,null,null,null,null,null];
(statearr_37156[(0)] = cljs$core$async$transduce_$_state_machine__36222__auto__);

(statearr_37156[(1)] = (1));

return statearr_37156;
});
var cljs$core$async$transduce_$_state_machine__36222__auto____1 = (function (state_37153){
while(true){
var ret_value__36223__auto__ = (function (){try{while(true){
var result__36224__auto__ = switch__36221__auto__(state_37153);
if(cljs.core.keyword_identical_QMARK_(result__36224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36224__auto__;
}
break;
}
}catch (e37157){var ex__36225__auto__ = e37157;
var statearr_37158_39075 = state_37153;
(statearr_37158_39075[(2)] = ex__36225__auto__);


if(cljs.core.seq((state_37153[(4)]))){
var statearr_37159_39076 = state_37153;
(statearr_37159_39076[(1)] = cljs.core.first((state_37153[(4)])));

} else {
throw ex__36225__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39077 = state_37153;
state_37153 = G__39077;
continue;
} else {
return ret_value__36223__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__36222__auto__ = function(state_37153){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__36222__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__36222__auto____1.call(this,state_37153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__36222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__36222__auto____0;
cljs$core$async$transduce_$_state_machine__36222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__36222__auto____1;
return cljs$core$async$transduce_$_state_machine__36222__auto__;
})()
})();
var state__36422__auto__ = (function (){var statearr_37160 = f__36421__auto__();
(statearr_37160[(6)] = c__36420__auto__);

return statearr_37160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36422__auto__);
}));

return c__36420__auto__;
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
var G__37163 = arguments.length;
switch (G__37163) {
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
var c__36420__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36421__auto__ = (function (){var switch__36221__auto__ = (function (state_37189){
var state_val_37190 = (state_37189[(1)]);
if((state_val_37190 === (7))){
var inst_37170 = (state_37189[(2)]);
var state_37189__$1 = state_37189;
var statearr_37191_39079 = state_37189__$1;
(statearr_37191_39079[(2)] = inst_37170);

(statearr_37191_39079[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37190 === (1))){
var inst_37164 = cljs.core.seq(coll);
var inst_37165 = inst_37164;
var state_37189__$1 = (function (){var statearr_37192 = state_37189;
(statearr_37192[(7)] = inst_37165);

return statearr_37192;
})();
var statearr_37193_39080 = state_37189__$1;
(statearr_37193_39080[(2)] = null);

(statearr_37193_39080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37190 === (4))){
var inst_37165 = (state_37189[(7)]);
var inst_37168 = cljs.core.first(inst_37165);
var state_37189__$1 = state_37189;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37189__$1,(7),ch,inst_37168);
} else {
if((state_val_37190 === (13))){
var inst_37182 = (state_37189[(2)]);
var state_37189__$1 = state_37189;
var statearr_37194_39081 = state_37189__$1;
(statearr_37194_39081[(2)] = inst_37182);

(statearr_37194_39081[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37190 === (6))){
var inst_37173 = (state_37189[(2)]);
var state_37189__$1 = state_37189;
if(cljs.core.truth_(inst_37173)){
var statearr_37195_39082 = state_37189__$1;
(statearr_37195_39082[(1)] = (8));

} else {
var statearr_37196_39083 = state_37189__$1;
(statearr_37196_39083[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37190 === (3))){
var inst_37186 = (state_37189[(2)]);
var state_37189__$1 = state_37189;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37189__$1,inst_37186);
} else {
if((state_val_37190 === (12))){
var state_37189__$1 = state_37189;
var statearr_37198_39084 = state_37189__$1;
(statearr_37198_39084[(2)] = null);

(statearr_37198_39084[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37190 === (2))){
var inst_37165 = (state_37189[(7)]);
var state_37189__$1 = state_37189;
if(cljs.core.truth_(inst_37165)){
var statearr_37199_39085 = state_37189__$1;
(statearr_37199_39085[(1)] = (4));

} else {
var statearr_37200_39087 = state_37189__$1;
(statearr_37200_39087[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37190 === (11))){
var inst_37179 = cljs.core.async.close_BANG_(ch);
var state_37189__$1 = state_37189;
var statearr_37201_39088 = state_37189__$1;
(statearr_37201_39088[(2)] = inst_37179);

(statearr_37201_39088[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37190 === (9))){
var state_37189__$1 = state_37189;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37202_39089 = state_37189__$1;
(statearr_37202_39089[(1)] = (11));

} else {
var statearr_37203_39090 = state_37189__$1;
(statearr_37203_39090[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37190 === (5))){
var inst_37165 = (state_37189[(7)]);
var state_37189__$1 = state_37189;
var statearr_37204_39091 = state_37189__$1;
(statearr_37204_39091[(2)] = inst_37165);

(statearr_37204_39091[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37190 === (10))){
var inst_37184 = (state_37189[(2)]);
var state_37189__$1 = state_37189;
var statearr_37205_39093 = state_37189__$1;
(statearr_37205_39093[(2)] = inst_37184);

(statearr_37205_39093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37190 === (8))){
var inst_37165 = (state_37189[(7)]);
var inst_37175 = cljs.core.next(inst_37165);
var inst_37165__$1 = inst_37175;
var state_37189__$1 = (function (){var statearr_37206 = state_37189;
(statearr_37206[(7)] = inst_37165__$1);

return statearr_37206;
})();
var statearr_37207_39094 = state_37189__$1;
(statearr_37207_39094[(2)] = null);

(statearr_37207_39094[(1)] = (2));


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
var cljs$core$async$state_machine__36222__auto__ = null;
var cljs$core$async$state_machine__36222__auto____0 = (function (){
var statearr_37208 = [null,null,null,null,null,null,null,null];
(statearr_37208[(0)] = cljs$core$async$state_machine__36222__auto__);

(statearr_37208[(1)] = (1));

return statearr_37208;
});
var cljs$core$async$state_machine__36222__auto____1 = (function (state_37189){
while(true){
var ret_value__36223__auto__ = (function (){try{while(true){
var result__36224__auto__ = switch__36221__auto__(state_37189);
if(cljs.core.keyword_identical_QMARK_(result__36224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36224__auto__;
}
break;
}
}catch (e37209){var ex__36225__auto__ = e37209;
var statearr_37210_39095 = state_37189;
(statearr_37210_39095[(2)] = ex__36225__auto__);


if(cljs.core.seq((state_37189[(4)]))){
var statearr_37212_39096 = state_37189;
(statearr_37212_39096[(1)] = cljs.core.first((state_37189[(4)])));

} else {
throw ex__36225__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39097 = state_37189;
state_37189 = G__39097;
continue;
} else {
return ret_value__36223__auto__;
}
break;
}
});
cljs$core$async$state_machine__36222__auto__ = function(state_37189){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36222__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36222__auto____1.call(this,state_37189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36222__auto____0;
cljs$core$async$state_machine__36222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36222__auto____1;
return cljs$core$async$state_machine__36222__auto__;
})()
})();
var state__36422__auto__ = (function (){var statearr_37213 = f__36421__auto__();
(statearr_37213[(6)] = c__36420__auto__);

return statearr_37213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36422__auto__);
}));

return c__36420__auto__;
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
var G__37215 = arguments.length;
switch (G__37215) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_39103 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_39103(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_39107 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_39107(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_39114 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_39114(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_39129 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_39129(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37223 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37223 = (function (ch,cs,meta37224){
this.ch = ch;
this.cs = cs;
this.meta37224 = meta37224;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37225,meta37224__$1){
var self__ = this;
var _37225__$1 = this;
return (new cljs.core.async.t_cljs$core$async37223(self__.ch,self__.cs,meta37224__$1));
}));

(cljs.core.async.t_cljs$core$async37223.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37225){
var self__ = this;
var _37225__$1 = this;
return self__.meta37224;
}));

(cljs.core.async.t_cljs$core$async37223.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37223.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async37223.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37223.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async37223.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async37223.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async37223.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta37224","meta37224",789794406,null)], null);
}));

(cljs.core.async.t_cljs$core$async37223.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37223.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37223");

(cljs.core.async.t_cljs$core$async37223.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async37223");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37223.
 */
cljs.core.async.__GT_t_cljs$core$async37223 = (function cljs$core$async$mult_$___GT_t_cljs$core$async37223(ch__$1,cs__$1,meta37224){
return (new cljs.core.async.t_cljs$core$async37223(ch__$1,cs__$1,meta37224));
});

}

return (new cljs.core.async.t_cljs$core$async37223(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__36420__auto___39142 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36421__auto__ = (function (){var switch__36221__auto__ = (function (state_37373){
var state_val_37374 = (state_37373[(1)]);
if((state_val_37374 === (7))){
var inst_37366 = (state_37373[(2)]);
var state_37373__$1 = state_37373;
var statearr_37391_39143 = state_37373__$1;
(statearr_37391_39143[(2)] = inst_37366);

(statearr_37391_39143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37374 === (20))){
var inst_37261 = (state_37373[(7)]);
var inst_37273 = cljs.core.first(inst_37261);
var inst_37274 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37273,(0),null);
var inst_37275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37273,(1),null);
var state_37373__$1 = (function (){var statearr_37397 = state_37373;
(statearr_37397[(8)] = inst_37274);

return statearr_37397;
})();
if(cljs.core.truth_(inst_37275)){
var statearr_37409_39146 = state_37373__$1;
(statearr_37409_39146[(1)] = (22));

} else {
var statearr_37410_39147 = state_37373__$1;
(statearr_37410_39147[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37374 === (27))){
var inst_37230 = (state_37373[(9)]);
var inst_37305 = (state_37373[(10)]);
var inst_37307 = (state_37373[(11)]);
var inst_37312 = (state_37373[(12)]);
var inst_37312__$1 = cljs.core._nth(inst_37305,inst_37307);
var inst_37313 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37312__$1,inst_37230,done);
var state_37373__$1 = (function (){var statearr_37419 = state_37373;
(statearr_37419[(12)] = inst_37312__$1);

return statearr_37419;
})();
if(cljs.core.truth_(inst_37313)){
var statearr_37421_39148 = state_37373__$1;
(statearr_37421_39148[(1)] = (30));

} else {
var statearr_37423_39149 = state_37373__$1;
(statearr_37423_39149[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37374 === (1))){
var state_37373__$1 = state_37373;
var statearr_37426_39150 = state_37373__$1;
(statearr_37426_39150[(2)] = null);

(statearr_37426_39150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37374 === (24))){
var inst_37261 = (state_37373[(7)]);
var inst_37280 = (state_37373[(2)]);
var inst_37281 = cljs.core.next(inst_37261);
var inst_37239 = inst_37281;
var inst_37240 = null;
var inst_37241 = (0);
var inst_37242 = (0);
var state_37373__$1 = (function (){var statearr_37427 = state_37373;
(statearr_37427[(13)] = inst_37239);

(statearr_37427[(14)] = inst_37242);

(statearr_37427[(15)] = inst_37240);

(statearr_37427[(16)] = inst_37280);

(statearr_37427[(17)] = inst_37241);

return statearr_37427;
})();
var statearr_37431_39151 = state_37373__$1;
(statearr_37431_39151[(2)] = null);

(statearr_37431_39151[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37374 === (39))){
var state_37373__$1 = state_37373;
var statearr_37441_39152 = state_37373__$1;
(statearr_37441_39152[(2)] = null);

(statearr_37441_39152[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37374 === (4))){
var inst_37230 = (state_37373[(9)]);
var inst_37230__$1 = (state_37373[(2)]);
var inst_37231 = (inst_37230__$1 == null);
var state_37373__$1 = (function (){var statearr_37442 = state_37373;
(statearr_37442[(9)] = inst_37230__$1);

return statearr_37442;
})();
if(cljs.core.truth_(inst_37231)){
var statearr_37443_39153 = state_37373__$1;
(statearr_37443_39153[(1)] = (5));

} else {
var statearr_37444_39154 = state_37373__$1;
(statearr_37444_39154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37374 === (15))){
var inst_37239 = (state_37373[(13)]);
var inst_37242 = (state_37373[(14)]);
var inst_37240 = (state_37373[(15)]);
var inst_37241 = (state_37373[(17)]);
var inst_37257 = (state_37373[(2)]);
var inst_37258 = (inst_37242 + (1));
var tmp37434 = inst_37239;
var tmp37435 = inst_37240;
var tmp37436 = inst_37241;
var inst_37239__$1 = tmp37434;
var inst_37240__$1 = tmp37435;
var inst_37241__$1 = tmp37436;
var inst_37242__$1 = inst_37258;
var state_37373__$1 = (function (){var statearr_37445 = state_37373;
(statearr_37445[(13)] = inst_37239__$1);

(statearr_37445[(14)] = inst_37242__$1);

(statearr_37445[(15)] = inst_37240__$1);

(statearr_37445[(18)] = inst_37257);

(statearr_37445[(17)] = inst_37241__$1);

return statearr_37445;
})();
var statearr_37446_39155 = state_37373__$1;
(statearr_37446_39155[(2)] = null);

(statearr_37446_39155[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37374 === (21))){
var inst_37284 = (state_37373[(2)]);
var state_37373__$1 = state_37373;
var statearr_37450_39156 = state_37373__$1;
(statearr_37450_39156[(2)] = inst_37284);

(statearr_37450_39156[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37374 === (31))){
var inst_37312 = (state_37373[(12)]);
var inst_37316 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37312);
var state_37373__$1 = state_37373;
var statearr_37451_39157 = state_37373__$1;
(statearr_37451_39157[(2)] = inst_37316);

(statearr_37451_39157[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37374 === (32))){
var inst_37305 = (state_37373[(10)]);
var inst_37307 = (state_37373[(11)]);
var inst_37304 = (state_37373[(19)]);
var inst_37306 = (state_37373[(20)]);
var inst_37318 = (state_37373[(2)]);
var inst_37319 = (inst_37307 + (1));
var tmp37447 = inst_37305;
var tmp37448 = inst_37304;
var tmp37449 = inst_37306;
var inst_37304__$1 = tmp37448;
var inst_37305__$1 = tmp37447;
var inst_37306__$1 = tmp37449;
var inst_37307__$1 = inst_37319;
var state_37373__$1 = (function (){var statearr_37452 = state_37373;
(statearr_37452[(21)] = inst_37318);

(statearr_37452[(10)] = inst_37305__$1);

(statearr_37452[(11)] = inst_37307__$1);

(statearr_37452[(19)] = inst_37304__$1);

(statearr_37452[(20)] = inst_37306__$1);

return statearr_37452;
})();
var statearr_37457_39158 = state_37373__$1;
(statearr_37457_39158[(2)] = null);

(statearr_37457_39158[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37374 === (40))){
var inst_37338 = (state_37373[(22)]);
var inst_37342 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37338);
var state_37373__$1 = state_37373;
var statearr_37458_39159 = state_37373__$1;
(statearr_37458_39159[(2)] = inst_37342);

(statearr_37458_39159[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37374 === (33))){
var inst_37322 = (state_37373[(23)]);
var inst_37325 = cljs.core.chunked_seq_QMARK_(inst_37322);
var state_37373__$1 = state_37373;
if(inst_37325){
var statearr_37463_39160 = state_37373__$1;
(statearr_37463_39160[(1)] = (36));

} else {
var statearr_37466_39161 = state_37373__$1;
(statearr_37466_39161[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37374 === (13))){
var inst_37251 = (state_37373[(24)]);
var inst_37254 = cljs.core.async.close_BANG_(inst_37251);
var state_37373__$1 = state_37373;
var statearr_37468_39162 = state_37373__$1;
(statearr_37468_39162[(2)] = inst_37254);

(statearr_37468_39162[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37374 === (22))){
var inst_37274 = (state_37373[(8)]);
var inst_37277 = cljs.core.async.close_BANG_(inst_37274);
var state_37373__$1 = state_37373;
var statearr_37470_39163 = state_37373__$1;
(statearr_37470_39163[(2)] = inst_37277);

(statearr_37470_39163[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37374 === (36))){
var inst_37322 = (state_37373[(23)]);
var inst_37329 = cljs.core.chunk_first(inst_37322);
var inst_37331 = cljs.core.chunk_rest(inst_37322);
var inst_37332 = cljs.core.count(inst_37329);
var inst_37304 = inst_37331;
var inst_37305 = inst_37329;
var inst_37306 = inst_37332;
var inst_37307 = (0);
var state_37373__$1 = (function (){var statearr_37475 = state_37373;
(statearr_37475[(10)] = inst_37305);

(statearr_37475[(11)] = inst_37307);

(statearr_37475[(19)] = inst_37304);

(statearr_37475[(20)] = inst_37306);

return statearr_37475;
})();
var statearr_37476_39164 = state_37373__$1;
(statearr_37476_39164[(2)] = null);

(statearr_37476_39164[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37374 === (41))){
var inst_37322 = (state_37373[(23)]);
var inst_37344 = (state_37373[(2)]);
var inst_37345 = cljs.core.next(inst_37322);
var inst_37304 = inst_37345;
var inst_37305 = null;
var inst_37306 = (0);
var inst_37307 = (0);
var state_37373__$1 = (function (){var statearr_37478 = state_37373;
(statearr_37478[(10)] = inst_37305);

(statearr_37478[(11)] = inst_37307);

(statearr_37478[(19)] = inst_37304);

(statearr_37478[(25)] = inst_37344);

(statearr_37478[(20)] = inst_37306);

return statearr_37478;
})();
var statearr_37481_39165 = state_37373__$1;
(statearr_37481_39165[(2)] = null);

(statearr_37481_39165[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37374 === (43))){
var state_37373__$1 = state_37373;
var statearr_37483_39166 = state_37373__$1;
(statearr_37483_39166[(2)] = null);

(statearr_37483_39166[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37374 === (29))){
var inst_37353 = (state_37373[(2)]);
var state_37373__$1 = state_37373;
var statearr_37495_39167 = state_37373__$1;
(statearr_37495_39167[(2)] = inst_37353);

(statearr_37495_39167[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37374 === (44))){
var inst_37363 = (state_37373[(2)]);
var state_37373__$1 = (function (){var statearr_37496 = state_37373;
(statearr_37496[(26)] = inst_37363);

return statearr_37496;
})();
var statearr_37497_39168 = state_37373__$1;
(statearr_37497_39168[(2)] = null);

(statearr_37497_39168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37374 === (6))){
var inst_37294 = (state_37373[(27)]);
var inst_37293 = cljs.core.deref(cs);
var inst_37294__$1 = cljs.core.keys(inst_37293);
var inst_37295 = cljs.core.count(inst_37294__$1);
var inst_37296 = cljs.core.reset_BANG_(dctr,inst_37295);
var inst_37303 = cljs.core.seq(inst_37294__$1);
var inst_37304 = inst_37303;
var inst_37305 = null;
var inst_37306 = (0);
var inst_37307 = (0);
var state_37373__$1 = (function (){var statearr_37501 = state_37373;
(statearr_37501[(28)] = inst_37296);

(statearr_37501[(27)] = inst_37294__$1);

(statearr_37501[(10)] = inst_37305);

(statearr_37501[(11)] = inst_37307);

(statearr_37501[(19)] = inst_37304);

(statearr_37501[(20)] = inst_37306);

return statearr_37501;
})();
var statearr_37502_39169 = state_37373__$1;
(statearr_37502_39169[(2)] = null);

(statearr_37502_39169[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37374 === (28))){
var inst_37322 = (state_37373[(23)]);
var inst_37304 = (state_37373[(19)]);
var inst_37322__$1 = cljs.core.seq(inst_37304);
var state_37373__$1 = (function (){var statearr_37504 = state_37373;
(statearr_37504[(23)] = inst_37322__$1);

return statearr_37504;
})();
if(inst_37322__$1){
var statearr_37505_39170 = state_37373__$1;
(statearr_37505_39170[(1)] = (33));

} else {
var statearr_37506_39171 = state_37373__$1;
(statearr_37506_39171[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37374 === (25))){
var inst_37307 = (state_37373[(11)]);
var inst_37306 = (state_37373[(20)]);
var inst_37309 = (inst_37307 < inst_37306);
var inst_37310 = inst_37309;
var state_37373__$1 = state_37373;
if(cljs.core.truth_(inst_37310)){
var statearr_37507_39172 = state_37373__$1;
(statearr_37507_39172[(1)] = (27));

} else {
var statearr_37508_39173 = state_37373__$1;
(statearr_37508_39173[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37374 === (34))){
var state_37373__$1 = state_37373;
var statearr_37516_39174 = state_37373__$1;
(statearr_37516_39174[(2)] = null);

(statearr_37516_39174[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37374 === (17))){
var state_37373__$1 = state_37373;
var statearr_37529_39175 = state_37373__$1;
(statearr_37529_39175[(2)] = null);

(statearr_37529_39175[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37374 === (3))){
var inst_37368 = (state_37373[(2)]);
var state_37373__$1 = state_37373;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37373__$1,inst_37368);
} else {
if((state_val_37374 === (12))){
var inst_37289 = (state_37373[(2)]);
var state_37373__$1 = state_37373;
var statearr_37531_39176 = state_37373__$1;
(statearr_37531_39176[(2)] = inst_37289);

(statearr_37531_39176[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37374 === (2))){
var state_37373__$1 = state_37373;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37373__$1,(4),ch);
} else {
if((state_val_37374 === (23))){
var state_37373__$1 = state_37373;
var statearr_37534_39177 = state_37373__$1;
(statearr_37534_39177[(2)] = null);

(statearr_37534_39177[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37374 === (35))){
var inst_37351 = (state_37373[(2)]);
var state_37373__$1 = state_37373;
var statearr_37540_39178 = state_37373__$1;
(statearr_37540_39178[(2)] = inst_37351);

(statearr_37540_39178[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37374 === (19))){
var inst_37261 = (state_37373[(7)]);
var inst_37265 = cljs.core.chunk_first(inst_37261);
var inst_37266 = cljs.core.chunk_rest(inst_37261);
var inst_37267 = cljs.core.count(inst_37265);
var inst_37239 = inst_37266;
var inst_37240 = inst_37265;
var inst_37241 = inst_37267;
var inst_37242 = (0);
var state_37373__$1 = (function (){var statearr_37545 = state_37373;
(statearr_37545[(13)] = inst_37239);

(statearr_37545[(14)] = inst_37242);

(statearr_37545[(15)] = inst_37240);

(statearr_37545[(17)] = inst_37241);

return statearr_37545;
})();
var statearr_37547_39179 = state_37373__$1;
(statearr_37547_39179[(2)] = null);

(statearr_37547_39179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37374 === (11))){
var inst_37239 = (state_37373[(13)]);
var inst_37261 = (state_37373[(7)]);
var inst_37261__$1 = cljs.core.seq(inst_37239);
var state_37373__$1 = (function (){var statearr_37549 = state_37373;
(statearr_37549[(7)] = inst_37261__$1);

return statearr_37549;
})();
if(inst_37261__$1){
var statearr_37551_39180 = state_37373__$1;
(statearr_37551_39180[(1)] = (16));

} else {
var statearr_37552_39181 = state_37373__$1;
(statearr_37552_39181[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37374 === (9))){
var inst_37291 = (state_37373[(2)]);
var state_37373__$1 = state_37373;
var statearr_37554_39182 = state_37373__$1;
(statearr_37554_39182[(2)] = inst_37291);

(statearr_37554_39182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37374 === (5))){
var inst_37237 = cljs.core.deref(cs);
var inst_37238 = cljs.core.seq(inst_37237);
var inst_37239 = inst_37238;
var inst_37240 = null;
var inst_37241 = (0);
var inst_37242 = (0);
var state_37373__$1 = (function (){var statearr_37556 = state_37373;
(statearr_37556[(13)] = inst_37239);

(statearr_37556[(14)] = inst_37242);

(statearr_37556[(15)] = inst_37240);

(statearr_37556[(17)] = inst_37241);

return statearr_37556;
})();
var statearr_37557_39186 = state_37373__$1;
(statearr_37557_39186[(2)] = null);

(statearr_37557_39186[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37374 === (14))){
var state_37373__$1 = state_37373;
var statearr_37559_39187 = state_37373__$1;
(statearr_37559_39187[(2)] = null);

(statearr_37559_39187[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37374 === (45))){
var inst_37360 = (state_37373[(2)]);
var state_37373__$1 = state_37373;
var statearr_37562_39188 = state_37373__$1;
(statearr_37562_39188[(2)] = inst_37360);

(statearr_37562_39188[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37374 === (26))){
var inst_37294 = (state_37373[(27)]);
var inst_37355 = (state_37373[(2)]);
var inst_37356 = cljs.core.seq(inst_37294);
var state_37373__$1 = (function (){var statearr_37563 = state_37373;
(statearr_37563[(29)] = inst_37355);

return statearr_37563;
})();
if(inst_37356){
var statearr_37565_39189 = state_37373__$1;
(statearr_37565_39189[(1)] = (42));

} else {
var statearr_37566_39190 = state_37373__$1;
(statearr_37566_39190[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37374 === (16))){
var inst_37261 = (state_37373[(7)]);
var inst_37263 = cljs.core.chunked_seq_QMARK_(inst_37261);
var state_37373__$1 = state_37373;
if(inst_37263){
var statearr_37568_39191 = state_37373__$1;
(statearr_37568_39191[(1)] = (19));

} else {
var statearr_37569_39192 = state_37373__$1;
(statearr_37569_39192[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37374 === (38))){
var inst_37348 = (state_37373[(2)]);
var state_37373__$1 = state_37373;
var statearr_37574_39193 = state_37373__$1;
(statearr_37574_39193[(2)] = inst_37348);

(statearr_37574_39193[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37374 === (30))){
var state_37373__$1 = state_37373;
var statearr_37575_39194 = state_37373__$1;
(statearr_37575_39194[(2)] = null);

(statearr_37575_39194[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37374 === (10))){
var inst_37242 = (state_37373[(14)]);
var inst_37240 = (state_37373[(15)]);
var inst_37250 = cljs.core._nth(inst_37240,inst_37242);
var inst_37251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37250,(0),null);
var inst_37252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37250,(1),null);
var state_37373__$1 = (function (){var statearr_37580 = state_37373;
(statearr_37580[(24)] = inst_37251);

return statearr_37580;
})();
if(cljs.core.truth_(inst_37252)){
var statearr_37581_39195 = state_37373__$1;
(statearr_37581_39195[(1)] = (13));

} else {
var statearr_37582_39196 = state_37373__$1;
(statearr_37582_39196[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37374 === (18))){
var inst_37287 = (state_37373[(2)]);
var state_37373__$1 = state_37373;
var statearr_37584_39197 = state_37373__$1;
(statearr_37584_39197[(2)] = inst_37287);

(statearr_37584_39197[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37374 === (42))){
var state_37373__$1 = state_37373;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37373__$1,(45),dchan);
} else {
if((state_val_37374 === (37))){
var inst_37230 = (state_37373[(9)]);
var inst_37322 = (state_37373[(23)]);
var inst_37338 = (state_37373[(22)]);
var inst_37338__$1 = cljs.core.first(inst_37322);
var inst_37339 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37338__$1,inst_37230,done);
var state_37373__$1 = (function (){var statearr_37588 = state_37373;
(statearr_37588[(22)] = inst_37338__$1);

return statearr_37588;
})();
if(cljs.core.truth_(inst_37339)){
var statearr_37589_39198 = state_37373__$1;
(statearr_37589_39198[(1)] = (39));

} else {
var statearr_37590_39199 = state_37373__$1;
(statearr_37590_39199[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37374 === (8))){
var inst_37242 = (state_37373[(14)]);
var inst_37241 = (state_37373[(17)]);
var inst_37244 = (inst_37242 < inst_37241);
var inst_37245 = inst_37244;
var state_37373__$1 = state_37373;
if(cljs.core.truth_(inst_37245)){
var statearr_37592_39200 = state_37373__$1;
(statearr_37592_39200[(1)] = (10));

} else {
var statearr_37593_39201 = state_37373__$1;
(statearr_37593_39201[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__36222__auto__ = null;
var cljs$core$async$mult_$_state_machine__36222__auto____0 = (function (){
var statearr_37597 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37597[(0)] = cljs$core$async$mult_$_state_machine__36222__auto__);

(statearr_37597[(1)] = (1));

return statearr_37597;
});
var cljs$core$async$mult_$_state_machine__36222__auto____1 = (function (state_37373){
while(true){
var ret_value__36223__auto__ = (function (){try{while(true){
var result__36224__auto__ = switch__36221__auto__(state_37373);
if(cljs.core.keyword_identical_QMARK_(result__36224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36224__auto__;
}
break;
}
}catch (e37599){var ex__36225__auto__ = e37599;
var statearr_37600_39202 = state_37373;
(statearr_37600_39202[(2)] = ex__36225__auto__);


if(cljs.core.seq((state_37373[(4)]))){
var statearr_37601_39203 = state_37373;
(statearr_37601_39203[(1)] = cljs.core.first((state_37373[(4)])));

} else {
throw ex__36225__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39204 = state_37373;
state_37373 = G__39204;
continue;
} else {
return ret_value__36223__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__36222__auto__ = function(state_37373){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__36222__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__36222__auto____1.call(this,state_37373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__36222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__36222__auto____0;
cljs$core$async$mult_$_state_machine__36222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__36222__auto____1;
return cljs$core$async$mult_$_state_machine__36222__auto__;
})()
})();
var state__36422__auto__ = (function (){var statearr_37605 = f__36421__auto__();
(statearr_37605[(6)] = c__36420__auto___39142);

return statearr_37605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36422__auto__);
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
var G__37608 = arguments.length;
switch (G__37608) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_39206 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_39206(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_39207 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_39207(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_39208 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_39208(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_39209 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_39209(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_39212 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_39212(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___39216 = arguments.length;
var i__4772__auto___39217 = (0);
while(true){
if((i__4772__auto___39217 < len__4771__auto___39216)){
args__4777__auto__.push((arguments[i__4772__auto___39217]));

var G__39218 = (i__4772__auto___39217 + (1));
i__4772__auto___39217 = G__39218;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((3) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4778__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__37637){
var map__37638 = p__37637;
var map__37638__$1 = cljs.core.__destructure_map(map__37638);
var opts = map__37638__$1;
var statearr_37639_39220 = state;
(statearr_37639_39220[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_37640_39221 = state;
(statearr_37640_39221[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_37641_39222 = state;
(statearr_37641_39222[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq37633){
var G__37634 = cljs.core.first(seq37633);
var seq37633__$1 = cljs.core.next(seq37633);
var G__37635 = cljs.core.first(seq37633__$1);
var seq37633__$2 = cljs.core.next(seq37633__$1);
var G__37636 = cljs.core.first(seq37633__$2);
var seq37633__$3 = cljs.core.next(seq37633__$2);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37634,G__37635,G__37636,seq37633__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37642 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37642 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta37643){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta37643 = meta37643;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37644,meta37643__$1){
var self__ = this;
var _37644__$1 = this;
return (new cljs.core.async.t_cljs$core$async37642(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta37643__$1));
}));

(cljs.core.async.t_cljs$core$async37642.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37644){
var self__ = this;
var _37644__$1 = this;
return self__.meta37643;
}));

(cljs.core.async.t_cljs$core$async37642.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37642.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async37642.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37642.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37642.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37642.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37642.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37642.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37642.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta37643","meta37643",-1381174832,null)], null);
}));

(cljs.core.async.t_cljs$core$async37642.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37642.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37642");

(cljs.core.async.t_cljs$core$async37642.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async37642");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37642.
 */
cljs.core.async.__GT_t_cljs$core$async37642 = (function cljs$core$async$mix_$___GT_t_cljs$core$async37642(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37643){
return (new cljs.core.async.t_cljs$core$async37642(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37643));
});

}

return (new cljs.core.async.t_cljs$core$async37642(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36420__auto___39228 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36421__auto__ = (function (){var switch__36221__auto__ = (function (state_37779){
var state_val_37780 = (state_37779[(1)]);
if((state_val_37780 === (7))){
var inst_37767 = (state_37779[(2)]);
var state_37779__$1 = state_37779;
var statearr_37782_39229 = state_37779__$1;
(statearr_37782_39229[(2)] = inst_37767);

(statearr_37782_39229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37780 === (20))){
var inst_37761 = (state_37779[(2)]);
var state_37779__$1 = state_37779;
var statearr_37783_39234 = state_37779__$1;
(statearr_37783_39234[(2)] = inst_37761);

(statearr_37783_39234[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37780 === (1))){
var inst_37688 = calc_state();
var inst_37696 = cljs.core.__destructure_map(inst_37688);
var inst_37698 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37696,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37699 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37696,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37700 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37696,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37701 = inst_37688;
var state_37779__$1 = (function (){var statearr_37784 = state_37779;
(statearr_37784[(7)] = inst_37699);

(statearr_37784[(8)] = inst_37701);

(statearr_37784[(9)] = inst_37698);

(statearr_37784[(10)] = inst_37700);

return statearr_37784;
})();
var statearr_37789_39235 = state_37779__$1;
(statearr_37789_39235[(2)] = null);

(statearr_37789_39235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37780 === (4))){
var inst_37718 = (state_37779[(11)]);
var inst_37719 = (state_37779[(12)]);
var inst_37717 = (state_37779[(2)]);
var inst_37718__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37717,(0),null);
var inst_37719__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37717,(1),null);
var inst_37720 = (inst_37718__$1 == null);
var inst_37721 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37719__$1,change);
var inst_37722 = ((inst_37720) || (inst_37721));
var state_37779__$1 = (function (){var statearr_37790 = state_37779;
(statearr_37790[(11)] = inst_37718__$1);

(statearr_37790[(12)] = inst_37719__$1);

return statearr_37790;
})();
if(cljs.core.truth_(inst_37722)){
var statearr_37791_39236 = state_37779__$1;
(statearr_37791_39236[(1)] = (5));

} else {
var statearr_37792_39237 = state_37779__$1;
(statearr_37792_39237[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37780 === (15))){
var inst_37708 = (state_37779[(13)]);
var inst_37701 = inst_37708;
var state_37779__$1 = (function (){var statearr_37796 = state_37779;
(statearr_37796[(8)] = inst_37701);

return statearr_37796;
})();
var statearr_37797_39242 = state_37779__$1;
(statearr_37797_39242[(2)] = null);

(statearr_37797_39242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37780 === (13))){
var inst_37753 = (state_37779[(2)]);
var state_37779__$1 = state_37779;
if(cljs.core.truth_(inst_37753)){
var statearr_37798_39243 = state_37779__$1;
(statearr_37798_39243[(1)] = (14));

} else {
var statearr_37800_39244 = state_37779__$1;
(statearr_37800_39244[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37780 === (6))){
var inst_37719 = (state_37779[(12)]);
var inst_37709 = (state_37779[(14)]);
var inst_37741 = (state_37779[(15)]);
var inst_37741__$1 = (inst_37709.cljs$core$IFn$_invoke$arity$1 ? inst_37709.cljs$core$IFn$_invoke$arity$1(inst_37719) : inst_37709.call(null,inst_37719));
var state_37779__$1 = (function (){var statearr_37801 = state_37779;
(statearr_37801[(15)] = inst_37741__$1);

return statearr_37801;
})();
if(cljs.core.truth_(inst_37741__$1)){
var statearr_37802_39245 = state_37779__$1;
(statearr_37802_39245[(1)] = (11));

} else {
var statearr_37803_39246 = state_37779__$1;
(statearr_37803_39246[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37780 === (17))){
var inst_37756 = (state_37779[(2)]);
var state_37779__$1 = state_37779;
if(cljs.core.truth_(inst_37756)){
var statearr_37804_39247 = state_37779__$1;
(statearr_37804_39247[(1)] = (18));

} else {
var statearr_37805_39248 = state_37779__$1;
(statearr_37805_39248[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37780 === (3))){
var inst_37769 = (state_37779[(2)]);
var state_37779__$1 = state_37779;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37779__$1,inst_37769);
} else {
if((state_val_37780 === (12))){
var inst_37710 = (state_37779[(16)]);
var inst_37719 = (state_37779[(12)]);
var inst_37709 = (state_37779[(14)]);
var inst_37748 = cljs.core.empty_QMARK_(inst_37709);
var inst_37749 = (inst_37710.cljs$core$IFn$_invoke$arity$1 ? inst_37710.cljs$core$IFn$_invoke$arity$1(inst_37719) : inst_37710.call(null,inst_37719));
var inst_37750 = cljs.core.not(inst_37749);
var inst_37751 = ((inst_37748) && (inst_37750));
var state_37779__$1 = state_37779;
var statearr_37810_39249 = state_37779__$1;
(statearr_37810_39249[(2)] = inst_37751);

(statearr_37810_39249[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37780 === (2))){
var inst_37708 = (state_37779[(13)]);
var inst_37701 = (state_37779[(8)]);
var inst_37708__$1 = cljs.core.__destructure_map(inst_37701);
var inst_37709 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37708__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37710 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37708__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37711 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37708__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_37779__$1 = (function (){var statearr_37815 = state_37779;
(statearr_37815[(13)] = inst_37708__$1);

(statearr_37815[(16)] = inst_37710);

(statearr_37815[(14)] = inst_37709);

return statearr_37815;
})();
return cljs.core.async.ioc_alts_BANG_(state_37779__$1,(4),inst_37711);
} else {
if((state_val_37780 === (19))){
var state_37779__$1 = state_37779;
var statearr_37816_39250 = state_37779__$1;
(statearr_37816_39250[(2)] = null);

(statearr_37816_39250[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37780 === (11))){
var inst_37741 = (state_37779[(15)]);
var state_37779__$1 = state_37779;
var statearr_37821_39251 = state_37779__$1;
(statearr_37821_39251[(2)] = inst_37741);

(statearr_37821_39251[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37780 === (9))){
var state_37779__$1 = state_37779;
var statearr_37822_39252 = state_37779__$1;
(statearr_37822_39252[(2)] = null);

(statearr_37822_39252[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37780 === (5))){
var inst_37718 = (state_37779[(11)]);
var inst_37728 = (inst_37718 == null);
var state_37779__$1 = state_37779;
if(cljs.core.truth_(inst_37728)){
var statearr_37823_39253 = state_37779__$1;
(statearr_37823_39253[(1)] = (8));

} else {
var statearr_37824_39254 = state_37779__$1;
(statearr_37824_39254[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37780 === (14))){
var inst_37718 = (state_37779[(11)]);
var state_37779__$1 = state_37779;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37779__$1,(17),out,inst_37718);
} else {
if((state_val_37780 === (16))){
var inst_37765 = (state_37779[(2)]);
var state_37779__$1 = state_37779;
var statearr_37825_39255 = state_37779__$1;
(statearr_37825_39255[(2)] = inst_37765);

(statearr_37825_39255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37780 === (10))){
var inst_37736 = (state_37779[(2)]);
var inst_37738 = calc_state();
var inst_37701 = inst_37738;
var state_37779__$1 = (function (){var statearr_37826 = state_37779;
(statearr_37826[(17)] = inst_37736);

(statearr_37826[(8)] = inst_37701);

return statearr_37826;
})();
var statearr_37827_39256 = state_37779__$1;
(statearr_37827_39256[(2)] = null);

(statearr_37827_39256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37780 === (18))){
var inst_37708 = (state_37779[(13)]);
var inst_37701 = inst_37708;
var state_37779__$1 = (function (){var statearr_37828 = state_37779;
(statearr_37828[(8)] = inst_37701);

return statearr_37828;
})();
var statearr_37829_39257 = state_37779__$1;
(statearr_37829_39257[(2)] = null);

(statearr_37829_39257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37780 === (8))){
var inst_37719 = (state_37779[(12)]);
var inst_37733 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_37719);
var state_37779__$1 = state_37779;
var statearr_37830_39258 = state_37779__$1;
(statearr_37830_39258[(2)] = inst_37733);

(statearr_37830_39258[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__36222__auto__ = null;
var cljs$core$async$mix_$_state_machine__36222__auto____0 = (function (){
var statearr_37835 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37835[(0)] = cljs$core$async$mix_$_state_machine__36222__auto__);

(statearr_37835[(1)] = (1));

return statearr_37835;
});
var cljs$core$async$mix_$_state_machine__36222__auto____1 = (function (state_37779){
while(true){
var ret_value__36223__auto__ = (function (){try{while(true){
var result__36224__auto__ = switch__36221__auto__(state_37779);
if(cljs.core.keyword_identical_QMARK_(result__36224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36224__auto__;
}
break;
}
}catch (e37836){var ex__36225__auto__ = e37836;
var statearr_37837_39259 = state_37779;
(statearr_37837_39259[(2)] = ex__36225__auto__);


if(cljs.core.seq((state_37779[(4)]))){
var statearr_37838_39260 = state_37779;
(statearr_37838_39260[(1)] = cljs.core.first((state_37779[(4)])));

} else {
throw ex__36225__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39261 = state_37779;
state_37779 = G__39261;
continue;
} else {
return ret_value__36223__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__36222__auto__ = function(state_37779){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__36222__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__36222__auto____1.call(this,state_37779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__36222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__36222__auto____0;
cljs$core$async$mix_$_state_machine__36222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__36222__auto____1;
return cljs$core$async$mix_$_state_machine__36222__auto__;
})()
})();
var state__36422__auto__ = (function (){var statearr_37839 = f__36421__auto__();
(statearr_37839[(6)] = c__36420__auto___39228);

return statearr_37839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36422__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_39269 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_39269(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_39270 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_39270(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_39277 = (function() {
var G__39278 = null;
var G__39278__1 = (function (p){
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
var G__39278__2 = (function (p,v){
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
G__39278 = function(p,v){
switch(arguments.length){
case 1:
return G__39278__1.call(this,p);
case 2:
return G__39278__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__39278.cljs$core$IFn$_invoke$arity$1 = G__39278__1;
G__39278.cljs$core$IFn$_invoke$arity$2 = G__39278__2;
return G__39278;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__37844 = arguments.length;
switch (G__37844) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_39277(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_39277(p,v);
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
var G__37847 = arguments.length;
switch (G__37847) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__37845_SHARP_){
if(cljs.core.truth_((p1__37845_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37845_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__37845_SHARP_.call(null,topic)))){
return p1__37845_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__37845_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37848 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37848 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta37849){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta37849 = meta37849;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37850,meta37849__$1){
var self__ = this;
var _37850__$1 = this;
return (new cljs.core.async.t_cljs$core$async37848(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta37849__$1));
}));

(cljs.core.async.t_cljs$core$async37848.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37850){
var self__ = this;
var _37850__$1 = this;
return self__.meta37849;
}));

(cljs.core.async.t_cljs$core$async37848.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37848.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async37848.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37848.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async37848.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async37848.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async37848.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async37848.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta37849","meta37849",1684049120,null)], null);
}));

(cljs.core.async.t_cljs$core$async37848.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37848.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37848");

(cljs.core.async.t_cljs$core$async37848.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async37848");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37848.
 */
cljs.core.async.__GT_t_cljs$core$async37848 = (function cljs$core$async$__GT_t_cljs$core$async37848(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37849){
return (new cljs.core.async.t_cljs$core$async37848(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37849));
});

}

return (new cljs.core.async.t_cljs$core$async37848(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36420__auto___39318 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36421__auto__ = (function (){var switch__36221__auto__ = (function (state_37928){
var state_val_37929 = (state_37928[(1)]);
if((state_val_37929 === (7))){
var inst_37924 = (state_37928[(2)]);
var state_37928__$1 = state_37928;
var statearr_37932_39320 = state_37928__$1;
(statearr_37932_39320[(2)] = inst_37924);

(statearr_37932_39320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37929 === (20))){
var state_37928__$1 = state_37928;
var statearr_37937_39321 = state_37928__$1;
(statearr_37937_39321[(2)] = null);

(statearr_37937_39321[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37929 === (1))){
var state_37928__$1 = state_37928;
var statearr_37943_39322 = state_37928__$1;
(statearr_37943_39322[(2)] = null);

(statearr_37943_39322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37929 === (24))){
var inst_37905 = (state_37928[(7)]);
var inst_37916 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_37905);
var state_37928__$1 = state_37928;
var statearr_37944_39323 = state_37928__$1;
(statearr_37944_39323[(2)] = inst_37916);

(statearr_37944_39323[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37929 === (4))){
var inst_37857 = (state_37928[(8)]);
var inst_37857__$1 = (state_37928[(2)]);
var inst_37858 = (inst_37857__$1 == null);
var state_37928__$1 = (function (){var statearr_37948 = state_37928;
(statearr_37948[(8)] = inst_37857__$1);

return statearr_37948;
})();
if(cljs.core.truth_(inst_37858)){
var statearr_37949_39324 = state_37928__$1;
(statearr_37949_39324[(1)] = (5));

} else {
var statearr_37950_39325 = state_37928__$1;
(statearr_37950_39325[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37929 === (15))){
var inst_37899 = (state_37928[(2)]);
var state_37928__$1 = state_37928;
var statearr_37951_39326 = state_37928__$1;
(statearr_37951_39326[(2)] = inst_37899);

(statearr_37951_39326[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37929 === (21))){
var inst_37921 = (state_37928[(2)]);
var state_37928__$1 = (function (){var statearr_37952 = state_37928;
(statearr_37952[(9)] = inst_37921);

return statearr_37952;
})();
var statearr_37953_39327 = state_37928__$1;
(statearr_37953_39327[(2)] = null);

(statearr_37953_39327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37929 === (13))){
var inst_37881 = (state_37928[(10)]);
var inst_37883 = cljs.core.chunked_seq_QMARK_(inst_37881);
var state_37928__$1 = state_37928;
if(inst_37883){
var statearr_37954_39328 = state_37928__$1;
(statearr_37954_39328[(1)] = (16));

} else {
var statearr_37955_39329 = state_37928__$1;
(statearr_37955_39329[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37929 === (22))){
var inst_37913 = (state_37928[(2)]);
var state_37928__$1 = state_37928;
if(cljs.core.truth_(inst_37913)){
var statearr_37956_39330 = state_37928__$1;
(statearr_37956_39330[(1)] = (23));

} else {
var statearr_37957_39331 = state_37928__$1;
(statearr_37957_39331[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37929 === (6))){
var inst_37908 = (state_37928[(11)]);
var inst_37857 = (state_37928[(8)]);
var inst_37905 = (state_37928[(7)]);
var inst_37905__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_37857) : topic_fn.call(null,inst_37857));
var inst_37907 = cljs.core.deref(mults);
var inst_37908__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37907,inst_37905__$1);
var state_37928__$1 = (function (){var statearr_37958 = state_37928;
(statearr_37958[(11)] = inst_37908__$1);

(statearr_37958[(7)] = inst_37905__$1);

return statearr_37958;
})();
if(cljs.core.truth_(inst_37908__$1)){
var statearr_37965_39332 = state_37928__$1;
(statearr_37965_39332[(1)] = (19));

} else {
var statearr_37967_39334 = state_37928__$1;
(statearr_37967_39334[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37929 === (25))){
var inst_37918 = (state_37928[(2)]);
var state_37928__$1 = state_37928;
var statearr_37974_39335 = state_37928__$1;
(statearr_37974_39335[(2)] = inst_37918);

(statearr_37974_39335[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37929 === (17))){
var inst_37881 = (state_37928[(10)]);
var inst_37890 = cljs.core.first(inst_37881);
var inst_37891 = cljs.core.async.muxch_STAR_(inst_37890);
var inst_37892 = cljs.core.async.close_BANG_(inst_37891);
var inst_37893 = cljs.core.next(inst_37881);
var inst_37867 = inst_37893;
var inst_37868 = null;
var inst_37869 = (0);
var inst_37870 = (0);
var state_37928__$1 = (function (){var statearr_37975 = state_37928;
(statearr_37975[(12)] = inst_37892);

(statearr_37975[(13)] = inst_37869);

(statearr_37975[(14)] = inst_37867);

(statearr_37975[(15)] = inst_37868);

(statearr_37975[(16)] = inst_37870);

return statearr_37975;
})();
var statearr_37976_39337 = state_37928__$1;
(statearr_37976_39337[(2)] = null);

(statearr_37976_39337[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37929 === (3))){
var inst_37926 = (state_37928[(2)]);
var state_37928__$1 = state_37928;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37928__$1,inst_37926);
} else {
if((state_val_37929 === (12))){
var inst_37901 = (state_37928[(2)]);
var state_37928__$1 = state_37928;
var statearr_37983_39338 = state_37928__$1;
(statearr_37983_39338[(2)] = inst_37901);

(statearr_37983_39338[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37929 === (2))){
var state_37928__$1 = state_37928;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37928__$1,(4),ch);
} else {
if((state_val_37929 === (23))){
var state_37928__$1 = state_37928;
var statearr_37984_39339 = state_37928__$1;
(statearr_37984_39339[(2)] = null);

(statearr_37984_39339[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37929 === (19))){
var inst_37908 = (state_37928[(11)]);
var inst_37857 = (state_37928[(8)]);
var inst_37911 = cljs.core.async.muxch_STAR_(inst_37908);
var state_37928__$1 = state_37928;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37928__$1,(22),inst_37911,inst_37857);
} else {
if((state_val_37929 === (11))){
var inst_37881 = (state_37928[(10)]);
var inst_37867 = (state_37928[(14)]);
var inst_37881__$1 = cljs.core.seq(inst_37867);
var state_37928__$1 = (function (){var statearr_37985 = state_37928;
(statearr_37985[(10)] = inst_37881__$1);

return statearr_37985;
})();
if(inst_37881__$1){
var statearr_37986_39340 = state_37928__$1;
(statearr_37986_39340[(1)] = (13));

} else {
var statearr_37987_39341 = state_37928__$1;
(statearr_37987_39341[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37929 === (9))){
var inst_37903 = (state_37928[(2)]);
var state_37928__$1 = state_37928;
var statearr_37988_39342 = state_37928__$1;
(statearr_37988_39342[(2)] = inst_37903);

(statearr_37988_39342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37929 === (5))){
var inst_37864 = cljs.core.deref(mults);
var inst_37865 = cljs.core.vals(inst_37864);
var inst_37866 = cljs.core.seq(inst_37865);
var inst_37867 = inst_37866;
var inst_37868 = null;
var inst_37869 = (0);
var inst_37870 = (0);
var state_37928__$1 = (function (){var statearr_37989 = state_37928;
(statearr_37989[(13)] = inst_37869);

(statearr_37989[(14)] = inst_37867);

(statearr_37989[(15)] = inst_37868);

(statearr_37989[(16)] = inst_37870);

return statearr_37989;
})();
var statearr_37990_39343 = state_37928__$1;
(statearr_37990_39343[(2)] = null);

(statearr_37990_39343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37929 === (14))){
var state_37928__$1 = state_37928;
var statearr_38001_39344 = state_37928__$1;
(statearr_38001_39344[(2)] = null);

(statearr_38001_39344[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37929 === (16))){
var inst_37881 = (state_37928[(10)]);
var inst_37885 = cljs.core.chunk_first(inst_37881);
var inst_37886 = cljs.core.chunk_rest(inst_37881);
var inst_37887 = cljs.core.count(inst_37885);
var inst_37867 = inst_37886;
var inst_37868 = inst_37885;
var inst_37869 = inst_37887;
var inst_37870 = (0);
var state_37928__$1 = (function (){var statearr_38005 = state_37928;
(statearr_38005[(13)] = inst_37869);

(statearr_38005[(14)] = inst_37867);

(statearr_38005[(15)] = inst_37868);

(statearr_38005[(16)] = inst_37870);

return statearr_38005;
})();
var statearr_38006_39345 = state_37928__$1;
(statearr_38006_39345[(2)] = null);

(statearr_38006_39345[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37929 === (10))){
var inst_37869 = (state_37928[(13)]);
var inst_37867 = (state_37928[(14)]);
var inst_37868 = (state_37928[(15)]);
var inst_37870 = (state_37928[(16)]);
var inst_37875 = cljs.core._nth(inst_37868,inst_37870);
var inst_37876 = cljs.core.async.muxch_STAR_(inst_37875);
var inst_37877 = cljs.core.async.close_BANG_(inst_37876);
var inst_37878 = (inst_37870 + (1));
var tmp37998 = inst_37869;
var tmp37999 = inst_37867;
var tmp38000 = inst_37868;
var inst_37867__$1 = tmp37999;
var inst_37868__$1 = tmp38000;
var inst_37869__$1 = tmp37998;
var inst_37870__$1 = inst_37878;
var state_37928__$1 = (function (){var statearr_38007 = state_37928;
(statearr_38007[(13)] = inst_37869__$1);

(statearr_38007[(17)] = inst_37877);

(statearr_38007[(14)] = inst_37867__$1);

(statearr_38007[(15)] = inst_37868__$1);

(statearr_38007[(16)] = inst_37870__$1);

return statearr_38007;
})();
var statearr_38008_39346 = state_37928__$1;
(statearr_38008_39346[(2)] = null);

(statearr_38008_39346[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37929 === (18))){
var inst_37896 = (state_37928[(2)]);
var state_37928__$1 = state_37928;
var statearr_38012_39347 = state_37928__$1;
(statearr_38012_39347[(2)] = inst_37896);

(statearr_38012_39347[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37929 === (8))){
var inst_37869 = (state_37928[(13)]);
var inst_37870 = (state_37928[(16)]);
var inst_37872 = (inst_37870 < inst_37869);
var inst_37873 = inst_37872;
var state_37928__$1 = state_37928;
if(cljs.core.truth_(inst_37873)){
var statearr_38013_39352 = state_37928__$1;
(statearr_38013_39352[(1)] = (10));

} else {
var statearr_38014_39357 = state_37928__$1;
(statearr_38014_39357[(1)] = (11));

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
var cljs$core$async$state_machine__36222__auto__ = null;
var cljs$core$async$state_machine__36222__auto____0 = (function (){
var statearr_38015 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38015[(0)] = cljs$core$async$state_machine__36222__auto__);

(statearr_38015[(1)] = (1));

return statearr_38015;
});
var cljs$core$async$state_machine__36222__auto____1 = (function (state_37928){
while(true){
var ret_value__36223__auto__ = (function (){try{while(true){
var result__36224__auto__ = switch__36221__auto__(state_37928);
if(cljs.core.keyword_identical_QMARK_(result__36224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36224__auto__;
}
break;
}
}catch (e38016){var ex__36225__auto__ = e38016;
var statearr_38021_39374 = state_37928;
(statearr_38021_39374[(2)] = ex__36225__auto__);


if(cljs.core.seq((state_37928[(4)]))){
var statearr_38022_39375 = state_37928;
(statearr_38022_39375[(1)] = cljs.core.first((state_37928[(4)])));

} else {
throw ex__36225__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39376 = state_37928;
state_37928 = G__39376;
continue;
} else {
return ret_value__36223__auto__;
}
break;
}
});
cljs$core$async$state_machine__36222__auto__ = function(state_37928){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36222__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36222__auto____1.call(this,state_37928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36222__auto____0;
cljs$core$async$state_machine__36222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36222__auto____1;
return cljs$core$async$state_machine__36222__auto__;
})()
})();
var state__36422__auto__ = (function (){var statearr_38023 = f__36421__auto__();
(statearr_38023[(6)] = c__36420__auto___39318);

return statearr_38023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36422__auto__);
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
var G__38025 = arguments.length;
switch (G__38025) {
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
var G__38035 = arguments.length;
switch (G__38035) {
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
var G__38037 = arguments.length;
switch (G__38037) {
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
var c__36420__auto___39418 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36421__auto__ = (function (){var switch__36221__auto__ = (function (state_38091){
var state_val_38092 = (state_38091[(1)]);
if((state_val_38092 === (7))){
var state_38091__$1 = state_38091;
var statearr_38094_39423 = state_38091__$1;
(statearr_38094_39423[(2)] = null);

(statearr_38094_39423[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38092 === (1))){
var state_38091__$1 = state_38091;
var statearr_38095_39431 = state_38091__$1;
(statearr_38095_39431[(2)] = null);

(statearr_38095_39431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38092 === (4))){
var inst_38047 = (state_38091[(7)]);
var inst_38048 = (state_38091[(8)]);
var inst_38050 = (inst_38048 < inst_38047);
var state_38091__$1 = state_38091;
if(cljs.core.truth_(inst_38050)){
var statearr_38098_39432 = state_38091__$1;
(statearr_38098_39432[(1)] = (6));

} else {
var statearr_38099_39433 = state_38091__$1;
(statearr_38099_39433[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38092 === (15))){
var inst_38073 = (state_38091[(9)]);
var inst_38078 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_38073);
var state_38091__$1 = state_38091;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38091__$1,(17),out,inst_38078);
} else {
if((state_val_38092 === (13))){
var inst_38073 = (state_38091[(9)]);
var inst_38073__$1 = (state_38091[(2)]);
var inst_38074 = cljs.core.some(cljs.core.nil_QMARK_,inst_38073__$1);
var state_38091__$1 = (function (){var statearr_38100 = state_38091;
(statearr_38100[(9)] = inst_38073__$1);

return statearr_38100;
})();
if(cljs.core.truth_(inst_38074)){
var statearr_38101_39434 = state_38091__$1;
(statearr_38101_39434[(1)] = (14));

} else {
var statearr_38103_39439 = state_38091__$1;
(statearr_38103_39439[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38092 === (6))){
var state_38091__$1 = state_38091;
var statearr_38105_39442 = state_38091__$1;
(statearr_38105_39442[(2)] = null);

(statearr_38105_39442[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38092 === (17))){
var inst_38080 = (state_38091[(2)]);
var state_38091__$1 = (function (){var statearr_38112 = state_38091;
(statearr_38112[(10)] = inst_38080);

return statearr_38112;
})();
var statearr_38113_39448 = state_38091__$1;
(statearr_38113_39448[(2)] = null);

(statearr_38113_39448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38092 === (3))){
var inst_38085 = (state_38091[(2)]);
var state_38091__$1 = state_38091;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38091__$1,inst_38085);
} else {
if((state_val_38092 === (12))){
var _ = (function (){var statearr_38114 = state_38091;
(statearr_38114[(4)] = cljs.core.rest((state_38091[(4)])));

return statearr_38114;
})();
var state_38091__$1 = state_38091;
var ex38111 = (state_38091__$1[(2)]);
var statearr_38115_39452 = state_38091__$1;
(statearr_38115_39452[(5)] = ex38111);


if((ex38111 instanceof Object)){
var statearr_38116_39457 = state_38091__$1;
(statearr_38116_39457[(1)] = (11));

(statearr_38116_39457[(5)] = null);

} else {
throw ex38111;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38092 === (2))){
var inst_38046 = cljs.core.reset_BANG_(dctr,cnt);
var inst_38047 = cnt;
var inst_38048 = (0);
var state_38091__$1 = (function (){var statearr_38121 = state_38091;
(statearr_38121[(11)] = inst_38046);

(statearr_38121[(7)] = inst_38047);

(statearr_38121[(8)] = inst_38048);

return statearr_38121;
})();
var statearr_38122_39462 = state_38091__$1;
(statearr_38122_39462[(2)] = null);

(statearr_38122_39462[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38092 === (11))){
var inst_38052 = (state_38091[(2)]);
var inst_38053 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_38091__$1 = (function (){var statearr_38123 = state_38091;
(statearr_38123[(12)] = inst_38052);

return statearr_38123;
})();
var statearr_38124_39463 = state_38091__$1;
(statearr_38124_39463[(2)] = inst_38053);

(statearr_38124_39463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38092 === (9))){
var inst_38048 = (state_38091[(8)]);
var _ = (function (){var statearr_38129 = state_38091;
(statearr_38129[(4)] = cljs.core.cons((12),(state_38091[(4)])));

return statearr_38129;
})();
var inst_38059 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_38048) : chs__$1.call(null,inst_38048));
var inst_38060 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_38048) : done.call(null,inst_38048));
var inst_38061 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_38059,inst_38060);
var ___$1 = (function (){var statearr_38130 = state_38091;
(statearr_38130[(4)] = cljs.core.rest((state_38091[(4)])));

return statearr_38130;
})();
var state_38091__$1 = state_38091;
var statearr_38131_39468 = state_38091__$1;
(statearr_38131_39468[(2)] = inst_38061);

(statearr_38131_39468[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38092 === (5))){
var inst_38071 = (state_38091[(2)]);
var state_38091__$1 = (function (){var statearr_38132 = state_38091;
(statearr_38132[(13)] = inst_38071);

return statearr_38132;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38091__$1,(13),dchan);
} else {
if((state_val_38092 === (14))){
var inst_38076 = cljs.core.async.close_BANG_(out);
var state_38091__$1 = state_38091;
var statearr_38133_39469 = state_38091__$1;
(statearr_38133_39469[(2)] = inst_38076);

(statearr_38133_39469[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38092 === (16))){
var inst_38083 = (state_38091[(2)]);
var state_38091__$1 = state_38091;
var statearr_38134_39470 = state_38091__$1;
(statearr_38134_39470[(2)] = inst_38083);

(statearr_38134_39470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38092 === (10))){
var inst_38048 = (state_38091[(8)]);
var inst_38064 = (state_38091[(2)]);
var inst_38065 = (inst_38048 + (1));
var inst_38048__$1 = inst_38065;
var state_38091__$1 = (function (){var statearr_38135 = state_38091;
(statearr_38135[(8)] = inst_38048__$1);

(statearr_38135[(14)] = inst_38064);

return statearr_38135;
})();
var statearr_38136_39471 = state_38091__$1;
(statearr_38136_39471[(2)] = null);

(statearr_38136_39471[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38092 === (8))){
var inst_38069 = (state_38091[(2)]);
var state_38091__$1 = state_38091;
var statearr_38137_39473 = state_38091__$1;
(statearr_38137_39473[(2)] = inst_38069);

(statearr_38137_39473[(1)] = (5));


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
var cljs$core$async$state_machine__36222__auto__ = null;
var cljs$core$async$state_machine__36222__auto____0 = (function (){
var statearr_38138 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38138[(0)] = cljs$core$async$state_machine__36222__auto__);

(statearr_38138[(1)] = (1));

return statearr_38138;
});
var cljs$core$async$state_machine__36222__auto____1 = (function (state_38091){
while(true){
var ret_value__36223__auto__ = (function (){try{while(true){
var result__36224__auto__ = switch__36221__auto__(state_38091);
if(cljs.core.keyword_identical_QMARK_(result__36224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36224__auto__;
}
break;
}
}catch (e38139){var ex__36225__auto__ = e38139;
var statearr_38140_39477 = state_38091;
(statearr_38140_39477[(2)] = ex__36225__auto__);


if(cljs.core.seq((state_38091[(4)]))){
var statearr_38141_39478 = state_38091;
(statearr_38141_39478[(1)] = cljs.core.first((state_38091[(4)])));

} else {
throw ex__36225__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39479 = state_38091;
state_38091 = G__39479;
continue;
} else {
return ret_value__36223__auto__;
}
break;
}
});
cljs$core$async$state_machine__36222__auto__ = function(state_38091){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36222__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36222__auto____1.call(this,state_38091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36222__auto____0;
cljs$core$async$state_machine__36222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36222__auto____1;
return cljs$core$async$state_machine__36222__auto__;
})()
})();
var state__36422__auto__ = (function (){var statearr_38142 = f__36421__auto__();
(statearr_38142[(6)] = c__36420__auto___39418);

return statearr_38142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36422__auto__);
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
var G__38146 = arguments.length;
switch (G__38146) {
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
var c__36420__auto___39482 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36421__auto__ = (function (){var switch__36221__auto__ = (function (state_38182){
var state_val_38183 = (state_38182[(1)]);
if((state_val_38183 === (7))){
var inst_38161 = (state_38182[(7)]);
var inst_38162 = (state_38182[(8)]);
var inst_38161__$1 = (state_38182[(2)]);
var inst_38162__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38161__$1,(0),null);
var inst_38163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38161__$1,(1),null);
var inst_38164 = (inst_38162__$1 == null);
var state_38182__$1 = (function (){var statearr_38184 = state_38182;
(statearr_38184[(9)] = inst_38163);

(statearr_38184[(7)] = inst_38161__$1);

(statearr_38184[(8)] = inst_38162__$1);

return statearr_38184;
})();
if(cljs.core.truth_(inst_38164)){
var statearr_38185_39483 = state_38182__$1;
(statearr_38185_39483[(1)] = (8));

} else {
var statearr_38186_39484 = state_38182__$1;
(statearr_38186_39484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38183 === (1))){
var inst_38148 = cljs.core.vec(chs);
var inst_38149 = inst_38148;
var state_38182__$1 = (function (){var statearr_38187 = state_38182;
(statearr_38187[(10)] = inst_38149);

return statearr_38187;
})();
var statearr_38188_39486 = state_38182__$1;
(statearr_38188_39486[(2)] = null);

(statearr_38188_39486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38183 === (4))){
var inst_38149 = (state_38182[(10)]);
var state_38182__$1 = state_38182;
return cljs.core.async.ioc_alts_BANG_(state_38182__$1,(7),inst_38149);
} else {
if((state_val_38183 === (6))){
var inst_38178 = (state_38182[(2)]);
var state_38182__$1 = state_38182;
var statearr_38189_39491 = state_38182__$1;
(statearr_38189_39491[(2)] = inst_38178);

(statearr_38189_39491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38183 === (3))){
var inst_38180 = (state_38182[(2)]);
var state_38182__$1 = state_38182;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38182__$1,inst_38180);
} else {
if((state_val_38183 === (2))){
var inst_38149 = (state_38182[(10)]);
var inst_38154 = cljs.core.count(inst_38149);
var inst_38155 = (inst_38154 > (0));
var state_38182__$1 = state_38182;
if(cljs.core.truth_(inst_38155)){
var statearr_38191_39496 = state_38182__$1;
(statearr_38191_39496[(1)] = (4));

} else {
var statearr_38192_39506 = state_38182__$1;
(statearr_38192_39506[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38183 === (11))){
var inst_38149 = (state_38182[(10)]);
var inst_38171 = (state_38182[(2)]);
var tmp38190 = inst_38149;
var inst_38149__$1 = tmp38190;
var state_38182__$1 = (function (){var statearr_38193 = state_38182;
(statearr_38193[(11)] = inst_38171);

(statearr_38193[(10)] = inst_38149__$1);

return statearr_38193;
})();
var statearr_38194_39520 = state_38182__$1;
(statearr_38194_39520[(2)] = null);

(statearr_38194_39520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38183 === (9))){
var inst_38162 = (state_38182[(8)]);
var state_38182__$1 = state_38182;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38182__$1,(11),out,inst_38162);
} else {
if((state_val_38183 === (5))){
var inst_38176 = cljs.core.async.close_BANG_(out);
var state_38182__$1 = state_38182;
var statearr_38195_39522 = state_38182__$1;
(statearr_38195_39522[(2)] = inst_38176);

(statearr_38195_39522[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38183 === (10))){
var inst_38174 = (state_38182[(2)]);
var state_38182__$1 = state_38182;
var statearr_38196_39523 = state_38182__$1;
(statearr_38196_39523[(2)] = inst_38174);

(statearr_38196_39523[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38183 === (8))){
var inst_38163 = (state_38182[(9)]);
var inst_38161 = (state_38182[(7)]);
var inst_38149 = (state_38182[(10)]);
var inst_38162 = (state_38182[(8)]);
var inst_38166 = (function (){var cs = inst_38149;
var vec__38157 = inst_38161;
var v = inst_38162;
var c = inst_38163;
return (function (p1__38143_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__38143_SHARP_);
});
})();
var inst_38167 = cljs.core.filterv(inst_38166,inst_38149);
var inst_38149__$1 = inst_38167;
var state_38182__$1 = (function (){var statearr_38197 = state_38182;
(statearr_38197[(10)] = inst_38149__$1);

return statearr_38197;
})();
var statearr_38198_39530 = state_38182__$1;
(statearr_38198_39530[(2)] = null);

(statearr_38198_39530[(1)] = (2));


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
var cljs$core$async$state_machine__36222__auto__ = null;
var cljs$core$async$state_machine__36222__auto____0 = (function (){
var statearr_38199 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38199[(0)] = cljs$core$async$state_machine__36222__auto__);

(statearr_38199[(1)] = (1));

return statearr_38199;
});
var cljs$core$async$state_machine__36222__auto____1 = (function (state_38182){
while(true){
var ret_value__36223__auto__ = (function (){try{while(true){
var result__36224__auto__ = switch__36221__auto__(state_38182);
if(cljs.core.keyword_identical_QMARK_(result__36224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36224__auto__;
}
break;
}
}catch (e38200){var ex__36225__auto__ = e38200;
var statearr_38201_39533 = state_38182;
(statearr_38201_39533[(2)] = ex__36225__auto__);


if(cljs.core.seq((state_38182[(4)]))){
var statearr_38202_39534 = state_38182;
(statearr_38202_39534[(1)] = cljs.core.first((state_38182[(4)])));

} else {
throw ex__36225__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39537 = state_38182;
state_38182 = G__39537;
continue;
} else {
return ret_value__36223__auto__;
}
break;
}
});
cljs$core$async$state_machine__36222__auto__ = function(state_38182){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36222__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36222__auto____1.call(this,state_38182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36222__auto____0;
cljs$core$async$state_machine__36222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36222__auto____1;
return cljs$core$async$state_machine__36222__auto__;
})()
})();
var state__36422__auto__ = (function (){var statearr_38203 = f__36421__auto__();
(statearr_38203[(6)] = c__36420__auto___39482);

return statearr_38203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36422__auto__);
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
var G__38205 = arguments.length;
switch (G__38205) {
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
var c__36420__auto___39539 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36421__auto__ = (function (){var switch__36221__auto__ = (function (state_38233){
var state_val_38234 = (state_38233[(1)]);
if((state_val_38234 === (7))){
var inst_38212 = (state_38233[(7)]);
var inst_38212__$1 = (state_38233[(2)]);
var inst_38213 = (inst_38212__$1 == null);
var inst_38214 = cljs.core.not(inst_38213);
var state_38233__$1 = (function (){var statearr_38235 = state_38233;
(statearr_38235[(7)] = inst_38212__$1);

return statearr_38235;
})();
if(inst_38214){
var statearr_38236_39540 = state_38233__$1;
(statearr_38236_39540[(1)] = (8));

} else {
var statearr_38237_39541 = state_38233__$1;
(statearr_38237_39541[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38234 === (1))){
var inst_38207 = (0);
var state_38233__$1 = (function (){var statearr_38238 = state_38233;
(statearr_38238[(8)] = inst_38207);

return statearr_38238;
})();
var statearr_38239_39542 = state_38233__$1;
(statearr_38239_39542[(2)] = null);

(statearr_38239_39542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38234 === (4))){
var state_38233__$1 = state_38233;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38233__$1,(7),ch);
} else {
if((state_val_38234 === (6))){
var inst_38225 = (state_38233[(2)]);
var state_38233__$1 = state_38233;
var statearr_38240_39543 = state_38233__$1;
(statearr_38240_39543[(2)] = inst_38225);

(statearr_38240_39543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38234 === (3))){
var inst_38227 = (state_38233[(2)]);
var inst_38228 = cljs.core.async.close_BANG_(out);
var state_38233__$1 = (function (){var statearr_38245 = state_38233;
(statearr_38245[(9)] = inst_38227);

return statearr_38245;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38233__$1,inst_38228);
} else {
if((state_val_38234 === (2))){
var inst_38207 = (state_38233[(8)]);
var inst_38209 = (inst_38207 < n);
var state_38233__$1 = state_38233;
if(cljs.core.truth_(inst_38209)){
var statearr_38246_39544 = state_38233__$1;
(statearr_38246_39544[(1)] = (4));

} else {
var statearr_38247_39545 = state_38233__$1;
(statearr_38247_39545[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38234 === (11))){
var inst_38207 = (state_38233[(8)]);
var inst_38217 = (state_38233[(2)]);
var inst_38218 = (inst_38207 + (1));
var inst_38207__$1 = inst_38218;
var state_38233__$1 = (function (){var statearr_38248 = state_38233;
(statearr_38248[(8)] = inst_38207__$1);

(statearr_38248[(10)] = inst_38217);

return statearr_38248;
})();
var statearr_38249_39548 = state_38233__$1;
(statearr_38249_39548[(2)] = null);

(statearr_38249_39548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38234 === (9))){
var state_38233__$1 = state_38233;
var statearr_38250_39549 = state_38233__$1;
(statearr_38250_39549[(2)] = null);

(statearr_38250_39549[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38234 === (5))){
var state_38233__$1 = state_38233;
var statearr_38251_39550 = state_38233__$1;
(statearr_38251_39550[(2)] = null);

(statearr_38251_39550[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38234 === (10))){
var inst_38222 = (state_38233[(2)]);
var state_38233__$1 = state_38233;
var statearr_38252_39551 = state_38233__$1;
(statearr_38252_39551[(2)] = inst_38222);

(statearr_38252_39551[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38234 === (8))){
var inst_38212 = (state_38233[(7)]);
var state_38233__$1 = state_38233;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38233__$1,(11),out,inst_38212);
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
var cljs$core$async$state_machine__36222__auto__ = null;
var cljs$core$async$state_machine__36222__auto____0 = (function (){
var statearr_38253 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38253[(0)] = cljs$core$async$state_machine__36222__auto__);

(statearr_38253[(1)] = (1));

return statearr_38253;
});
var cljs$core$async$state_machine__36222__auto____1 = (function (state_38233){
while(true){
var ret_value__36223__auto__ = (function (){try{while(true){
var result__36224__auto__ = switch__36221__auto__(state_38233);
if(cljs.core.keyword_identical_QMARK_(result__36224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36224__auto__;
}
break;
}
}catch (e38254){var ex__36225__auto__ = e38254;
var statearr_38255_39552 = state_38233;
(statearr_38255_39552[(2)] = ex__36225__auto__);


if(cljs.core.seq((state_38233[(4)]))){
var statearr_38256_39553 = state_38233;
(statearr_38256_39553[(1)] = cljs.core.first((state_38233[(4)])));

} else {
throw ex__36225__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39554 = state_38233;
state_38233 = G__39554;
continue;
} else {
return ret_value__36223__auto__;
}
break;
}
});
cljs$core$async$state_machine__36222__auto__ = function(state_38233){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36222__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36222__auto____1.call(this,state_38233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36222__auto____0;
cljs$core$async$state_machine__36222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36222__auto____1;
return cljs$core$async$state_machine__36222__auto__;
})()
})();
var state__36422__auto__ = (function (){var statearr_38257 = f__36421__auto__();
(statearr_38257[(6)] = c__36420__auto___39539);

return statearr_38257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36422__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38259 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38259 = (function (f,ch,meta38260){
this.f = f;
this.ch = ch;
this.meta38260 = meta38260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38261,meta38260__$1){
var self__ = this;
var _38261__$1 = this;
return (new cljs.core.async.t_cljs$core$async38259(self__.f,self__.ch,meta38260__$1));
}));

(cljs.core.async.t_cljs$core$async38259.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38261){
var self__ = this;
var _38261__$1 = this;
return self__.meta38260;
}));

(cljs.core.async.t_cljs$core$async38259.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38259.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38259.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38259.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38259.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38282 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38282 = (function (f,ch,meta38260,_,fn1,meta38283){
this.f = f;
this.ch = ch;
this.meta38260 = meta38260;
this._ = _;
this.fn1 = fn1;
this.meta38283 = meta38283;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38284,meta38283__$1){
var self__ = this;
var _38284__$1 = this;
return (new cljs.core.async.t_cljs$core$async38282(self__.f,self__.ch,self__.meta38260,self__._,self__.fn1,meta38283__$1));
}));

(cljs.core.async.t_cljs$core$async38282.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38284){
var self__ = this;
var _38284__$1 = this;
return self__.meta38283;
}));

(cljs.core.async.t_cljs$core$async38282.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38282.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async38282.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38282.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__38258_SHARP_){
var G__38299 = (((p1__38258_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__38258_SHARP_) : self__.f.call(null,p1__38258_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__38299) : f1.call(null,G__38299));
});
}));

(cljs.core.async.t_cljs$core$async38282.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38260","meta38260",1954754341,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async38259","cljs.core.async/t_cljs$core$async38259",462567001,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta38283","meta38283",-983454836,null)], null);
}));

(cljs.core.async.t_cljs$core$async38282.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38282.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38282");

(cljs.core.async.t_cljs$core$async38282.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async38282");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38282.
 */
cljs.core.async.__GT_t_cljs$core$async38282 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38282(f__$1,ch__$1,meta38260__$1,___$2,fn1__$1,meta38283){
return (new cljs.core.async.t_cljs$core$async38282(f__$1,ch__$1,meta38260__$1,___$2,fn1__$1,meta38283));
});

}

return (new cljs.core.async.t_cljs$core$async38282(self__.f,self__.ch,self__.meta38260,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4149__auto__ = ret;
if(cljs.core.truth_(and__4149__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4149__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__38308 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__38308) : self__.f.call(null,G__38308));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async38259.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38259.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async38259.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38260","meta38260",1954754341,null)], null);
}));

(cljs.core.async.t_cljs$core$async38259.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38259.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38259");

(cljs.core.async.t_cljs$core$async38259.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async38259");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38259.
 */
cljs.core.async.__GT_t_cljs$core$async38259 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38259(f__$1,ch__$1,meta38260){
return (new cljs.core.async.t_cljs$core$async38259(f__$1,ch__$1,meta38260));
});

}

return (new cljs.core.async.t_cljs$core$async38259(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38313 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38313 = (function (f,ch,meta38314){
this.f = f;
this.ch = ch;
this.meta38314 = meta38314;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38315,meta38314__$1){
var self__ = this;
var _38315__$1 = this;
return (new cljs.core.async.t_cljs$core$async38313(self__.f,self__.ch,meta38314__$1));
}));

(cljs.core.async.t_cljs$core$async38313.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38315){
var self__ = this;
var _38315__$1 = this;
return self__.meta38314;
}));

(cljs.core.async.t_cljs$core$async38313.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38313.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38313.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38313.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38313.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38313.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async38313.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38314","meta38314",2051999168,null)], null);
}));

(cljs.core.async.t_cljs$core$async38313.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38313.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38313");

(cljs.core.async.t_cljs$core$async38313.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async38313");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38313.
 */
cljs.core.async.__GT_t_cljs$core$async38313 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async38313(f__$1,ch__$1,meta38314){
return (new cljs.core.async.t_cljs$core$async38313(f__$1,ch__$1,meta38314));
});

}

return (new cljs.core.async.t_cljs$core$async38313(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38316 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38316 = (function (p,ch,meta38317){
this.p = p;
this.ch = ch;
this.meta38317 = meta38317;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38318,meta38317__$1){
var self__ = this;
var _38318__$1 = this;
return (new cljs.core.async.t_cljs$core$async38316(self__.p,self__.ch,meta38317__$1));
}));

(cljs.core.async.t_cljs$core$async38316.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38318){
var self__ = this;
var _38318__$1 = this;
return self__.meta38317;
}));

(cljs.core.async.t_cljs$core$async38316.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38316.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38316.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38316.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38316.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38316.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38316.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async38316.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38317","meta38317",-385638790,null)], null);
}));

(cljs.core.async.t_cljs$core$async38316.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38316.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38316");

(cljs.core.async.t_cljs$core$async38316.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async38316");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38316.
 */
cljs.core.async.__GT_t_cljs$core$async38316 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async38316(p__$1,ch__$1,meta38317){
return (new cljs.core.async.t_cljs$core$async38316(p__$1,ch__$1,meta38317));
});

}

return (new cljs.core.async.t_cljs$core$async38316(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__38328 = arguments.length;
switch (G__38328) {
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
var c__36420__auto___39579 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36421__auto__ = (function (){var switch__36221__auto__ = (function (state_38352){
var state_val_38353 = (state_38352[(1)]);
if((state_val_38353 === (7))){
var inst_38348 = (state_38352[(2)]);
var state_38352__$1 = state_38352;
var statearr_38354_39587 = state_38352__$1;
(statearr_38354_39587[(2)] = inst_38348);

(statearr_38354_39587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (1))){
var state_38352__$1 = state_38352;
var statearr_38355_39591 = state_38352__$1;
(statearr_38355_39591[(2)] = null);

(statearr_38355_39591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (4))){
var inst_38334 = (state_38352[(7)]);
var inst_38334__$1 = (state_38352[(2)]);
var inst_38335 = (inst_38334__$1 == null);
var state_38352__$1 = (function (){var statearr_38356 = state_38352;
(statearr_38356[(7)] = inst_38334__$1);

return statearr_38356;
})();
if(cljs.core.truth_(inst_38335)){
var statearr_38357_39594 = state_38352__$1;
(statearr_38357_39594[(1)] = (5));

} else {
var statearr_38359_39596 = state_38352__$1;
(statearr_38359_39596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (6))){
var inst_38334 = (state_38352[(7)]);
var inst_38339 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_38334) : p.call(null,inst_38334));
var state_38352__$1 = state_38352;
if(cljs.core.truth_(inst_38339)){
var statearr_38360_39597 = state_38352__$1;
(statearr_38360_39597[(1)] = (8));

} else {
var statearr_38361_39598 = state_38352__$1;
(statearr_38361_39598[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (3))){
var inst_38350 = (state_38352[(2)]);
var state_38352__$1 = state_38352;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38352__$1,inst_38350);
} else {
if((state_val_38353 === (2))){
var state_38352__$1 = state_38352;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38352__$1,(4),ch);
} else {
if((state_val_38353 === (11))){
var inst_38342 = (state_38352[(2)]);
var state_38352__$1 = state_38352;
var statearr_38363_39599 = state_38352__$1;
(statearr_38363_39599[(2)] = inst_38342);

(statearr_38363_39599[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (9))){
var state_38352__$1 = state_38352;
var statearr_38364_39600 = state_38352__$1;
(statearr_38364_39600[(2)] = null);

(statearr_38364_39600[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (5))){
var inst_38337 = cljs.core.async.close_BANG_(out);
var state_38352__$1 = state_38352;
var statearr_38367_39601 = state_38352__$1;
(statearr_38367_39601[(2)] = inst_38337);

(statearr_38367_39601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (10))){
var inst_38345 = (state_38352[(2)]);
var state_38352__$1 = (function (){var statearr_38368 = state_38352;
(statearr_38368[(8)] = inst_38345);

return statearr_38368;
})();
var statearr_38369_39602 = state_38352__$1;
(statearr_38369_39602[(2)] = null);

(statearr_38369_39602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38353 === (8))){
var inst_38334 = (state_38352[(7)]);
var state_38352__$1 = state_38352;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38352__$1,(11),out,inst_38334);
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
var cljs$core$async$state_machine__36222__auto__ = null;
var cljs$core$async$state_machine__36222__auto____0 = (function (){
var statearr_38370 = [null,null,null,null,null,null,null,null,null];
(statearr_38370[(0)] = cljs$core$async$state_machine__36222__auto__);

(statearr_38370[(1)] = (1));

return statearr_38370;
});
var cljs$core$async$state_machine__36222__auto____1 = (function (state_38352){
while(true){
var ret_value__36223__auto__ = (function (){try{while(true){
var result__36224__auto__ = switch__36221__auto__(state_38352);
if(cljs.core.keyword_identical_QMARK_(result__36224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36224__auto__;
}
break;
}
}catch (e38372){var ex__36225__auto__ = e38372;
var statearr_38373_39607 = state_38352;
(statearr_38373_39607[(2)] = ex__36225__auto__);


if(cljs.core.seq((state_38352[(4)]))){
var statearr_38375_39611 = state_38352;
(statearr_38375_39611[(1)] = cljs.core.first((state_38352[(4)])));

} else {
throw ex__36225__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39612 = state_38352;
state_38352 = G__39612;
continue;
} else {
return ret_value__36223__auto__;
}
break;
}
});
cljs$core$async$state_machine__36222__auto__ = function(state_38352){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36222__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36222__auto____1.call(this,state_38352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36222__auto____0;
cljs$core$async$state_machine__36222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36222__auto____1;
return cljs$core$async$state_machine__36222__auto__;
})()
})();
var state__36422__auto__ = (function (){var statearr_38376 = f__36421__auto__();
(statearr_38376[(6)] = c__36420__auto___39579);

return statearr_38376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36422__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__38380 = arguments.length;
switch (G__38380) {
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
var c__36420__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36421__auto__ = (function (){var switch__36221__auto__ = (function (state_38448){
var state_val_38449 = (state_38448[(1)]);
if((state_val_38449 === (7))){
var inst_38441 = (state_38448[(2)]);
var state_38448__$1 = state_38448;
var statearr_38457_39626 = state_38448__$1;
(statearr_38457_39626[(2)] = inst_38441);

(statearr_38457_39626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38449 === (20))){
var inst_38411 = (state_38448[(7)]);
var inst_38422 = (state_38448[(2)]);
var inst_38423 = cljs.core.next(inst_38411);
var inst_38394 = inst_38423;
var inst_38395 = null;
var inst_38396 = (0);
var inst_38397 = (0);
var state_38448__$1 = (function (){var statearr_38458 = state_38448;
(statearr_38458[(8)] = inst_38422);

(statearr_38458[(9)] = inst_38395);

(statearr_38458[(10)] = inst_38396);

(statearr_38458[(11)] = inst_38394);

(statearr_38458[(12)] = inst_38397);

return statearr_38458;
})();
var statearr_38459_39628 = state_38448__$1;
(statearr_38459_39628[(2)] = null);

(statearr_38459_39628[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38449 === (1))){
var state_38448__$1 = state_38448;
var statearr_38460_39630 = state_38448__$1;
(statearr_38460_39630[(2)] = null);

(statearr_38460_39630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38449 === (4))){
var inst_38383 = (state_38448[(13)]);
var inst_38383__$1 = (state_38448[(2)]);
var inst_38384 = (inst_38383__$1 == null);
var state_38448__$1 = (function (){var statearr_38464 = state_38448;
(statearr_38464[(13)] = inst_38383__$1);

return statearr_38464;
})();
if(cljs.core.truth_(inst_38384)){
var statearr_38465_39632 = state_38448__$1;
(statearr_38465_39632[(1)] = (5));

} else {
var statearr_38466_39633 = state_38448__$1;
(statearr_38466_39633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38449 === (15))){
var state_38448__$1 = state_38448;
var statearr_38470_39634 = state_38448__$1;
(statearr_38470_39634[(2)] = null);

(statearr_38470_39634[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38449 === (21))){
var state_38448__$1 = state_38448;
var statearr_38471_39635 = state_38448__$1;
(statearr_38471_39635[(2)] = null);

(statearr_38471_39635[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38449 === (13))){
var inst_38395 = (state_38448[(9)]);
var inst_38396 = (state_38448[(10)]);
var inst_38394 = (state_38448[(11)]);
var inst_38397 = (state_38448[(12)]);
var inst_38404 = (state_38448[(2)]);
var inst_38405 = (inst_38397 + (1));
var tmp38467 = inst_38395;
var tmp38468 = inst_38396;
var tmp38469 = inst_38394;
var inst_38394__$1 = tmp38469;
var inst_38395__$1 = tmp38467;
var inst_38396__$1 = tmp38468;
var inst_38397__$1 = inst_38405;
var state_38448__$1 = (function (){var statearr_38472 = state_38448;
(statearr_38472[(14)] = inst_38404);

(statearr_38472[(9)] = inst_38395__$1);

(statearr_38472[(10)] = inst_38396__$1);

(statearr_38472[(11)] = inst_38394__$1);

(statearr_38472[(12)] = inst_38397__$1);

return statearr_38472;
})();
var statearr_38473_39636 = state_38448__$1;
(statearr_38473_39636[(2)] = null);

(statearr_38473_39636[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38449 === (22))){
var state_38448__$1 = state_38448;
var statearr_38474_39637 = state_38448__$1;
(statearr_38474_39637[(2)] = null);

(statearr_38474_39637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38449 === (6))){
var inst_38383 = (state_38448[(13)]);
var inst_38392 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38383) : f.call(null,inst_38383));
var inst_38393 = cljs.core.seq(inst_38392);
var inst_38394 = inst_38393;
var inst_38395 = null;
var inst_38396 = (0);
var inst_38397 = (0);
var state_38448__$1 = (function (){var statearr_38479 = state_38448;
(statearr_38479[(9)] = inst_38395);

(statearr_38479[(10)] = inst_38396);

(statearr_38479[(11)] = inst_38394);

(statearr_38479[(12)] = inst_38397);

return statearr_38479;
})();
var statearr_38483_39639 = state_38448__$1;
(statearr_38483_39639[(2)] = null);

(statearr_38483_39639[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38449 === (17))){
var inst_38411 = (state_38448[(7)]);
var inst_38415 = cljs.core.chunk_first(inst_38411);
var inst_38416 = cljs.core.chunk_rest(inst_38411);
var inst_38417 = cljs.core.count(inst_38415);
var inst_38394 = inst_38416;
var inst_38395 = inst_38415;
var inst_38396 = inst_38417;
var inst_38397 = (0);
var state_38448__$1 = (function (){var statearr_38487 = state_38448;
(statearr_38487[(9)] = inst_38395);

(statearr_38487[(10)] = inst_38396);

(statearr_38487[(11)] = inst_38394);

(statearr_38487[(12)] = inst_38397);

return statearr_38487;
})();
var statearr_38488_39648 = state_38448__$1;
(statearr_38488_39648[(2)] = null);

(statearr_38488_39648[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38449 === (3))){
var inst_38443 = (state_38448[(2)]);
var state_38448__$1 = state_38448;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38448__$1,inst_38443);
} else {
if((state_val_38449 === (12))){
var inst_38431 = (state_38448[(2)]);
var state_38448__$1 = state_38448;
var statearr_38490_39649 = state_38448__$1;
(statearr_38490_39649[(2)] = inst_38431);

(statearr_38490_39649[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38449 === (2))){
var state_38448__$1 = state_38448;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38448__$1,(4),in$);
} else {
if((state_val_38449 === (23))){
var inst_38439 = (state_38448[(2)]);
var state_38448__$1 = state_38448;
var statearr_38500_39652 = state_38448__$1;
(statearr_38500_39652[(2)] = inst_38439);

(statearr_38500_39652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38449 === (19))){
var inst_38426 = (state_38448[(2)]);
var state_38448__$1 = state_38448;
var statearr_38504_39653 = state_38448__$1;
(statearr_38504_39653[(2)] = inst_38426);

(statearr_38504_39653[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38449 === (11))){
var inst_38394 = (state_38448[(11)]);
var inst_38411 = (state_38448[(7)]);
var inst_38411__$1 = cljs.core.seq(inst_38394);
var state_38448__$1 = (function (){var statearr_38509 = state_38448;
(statearr_38509[(7)] = inst_38411__$1);

return statearr_38509;
})();
if(inst_38411__$1){
var statearr_38510_39655 = state_38448__$1;
(statearr_38510_39655[(1)] = (14));

} else {
var statearr_38511_39656 = state_38448__$1;
(statearr_38511_39656[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38449 === (9))){
var inst_38433 = (state_38448[(2)]);
var inst_38434 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_38448__$1 = (function (){var statearr_38512 = state_38448;
(statearr_38512[(15)] = inst_38433);

return statearr_38512;
})();
if(cljs.core.truth_(inst_38434)){
var statearr_38513_39657 = state_38448__$1;
(statearr_38513_39657[(1)] = (21));

} else {
var statearr_38514_39658 = state_38448__$1;
(statearr_38514_39658[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38449 === (5))){
var inst_38386 = cljs.core.async.close_BANG_(out);
var state_38448__$1 = state_38448;
var statearr_38517_39664 = state_38448__$1;
(statearr_38517_39664[(2)] = inst_38386);

(statearr_38517_39664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38449 === (14))){
var inst_38411 = (state_38448[(7)]);
var inst_38413 = cljs.core.chunked_seq_QMARK_(inst_38411);
var state_38448__$1 = state_38448;
if(inst_38413){
var statearr_38518_39670 = state_38448__$1;
(statearr_38518_39670[(1)] = (17));

} else {
var statearr_38519_39671 = state_38448__$1;
(statearr_38519_39671[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38449 === (16))){
var inst_38429 = (state_38448[(2)]);
var state_38448__$1 = state_38448;
var statearr_38520_39677 = state_38448__$1;
(statearr_38520_39677[(2)] = inst_38429);

(statearr_38520_39677[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38449 === (10))){
var inst_38395 = (state_38448[(9)]);
var inst_38397 = (state_38448[(12)]);
var inst_38402 = cljs.core._nth(inst_38395,inst_38397);
var state_38448__$1 = state_38448;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38448__$1,(13),out,inst_38402);
} else {
if((state_val_38449 === (18))){
var inst_38411 = (state_38448[(7)]);
var inst_38420 = cljs.core.first(inst_38411);
var state_38448__$1 = state_38448;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38448__$1,(20),out,inst_38420);
} else {
if((state_val_38449 === (8))){
var inst_38396 = (state_38448[(10)]);
var inst_38397 = (state_38448[(12)]);
var inst_38399 = (inst_38397 < inst_38396);
var inst_38400 = inst_38399;
var state_38448__$1 = state_38448;
if(cljs.core.truth_(inst_38400)){
var statearr_38521_39686 = state_38448__$1;
(statearr_38521_39686[(1)] = (10));

} else {
var statearr_38522_39687 = state_38448__$1;
(statearr_38522_39687[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__36222__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__36222__auto____0 = (function (){
var statearr_38523 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38523[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__36222__auto__);

(statearr_38523[(1)] = (1));

return statearr_38523;
});
var cljs$core$async$mapcat_STAR__$_state_machine__36222__auto____1 = (function (state_38448){
while(true){
var ret_value__36223__auto__ = (function (){try{while(true){
var result__36224__auto__ = switch__36221__auto__(state_38448);
if(cljs.core.keyword_identical_QMARK_(result__36224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36224__auto__;
}
break;
}
}catch (e38524){var ex__36225__auto__ = e38524;
var statearr_38525_39693 = state_38448;
(statearr_38525_39693[(2)] = ex__36225__auto__);


if(cljs.core.seq((state_38448[(4)]))){
var statearr_38526_39694 = state_38448;
(statearr_38526_39694[(1)] = cljs.core.first((state_38448[(4)])));

} else {
throw ex__36225__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39695 = state_38448;
state_38448 = G__39695;
continue;
} else {
return ret_value__36223__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__36222__auto__ = function(state_38448){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__36222__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__36222__auto____1.call(this,state_38448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__36222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__36222__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__36222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__36222__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__36222__auto__;
})()
})();
var state__36422__auto__ = (function (){var statearr_38527 = f__36421__auto__();
(statearr_38527[(6)] = c__36420__auto__);

return statearr_38527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36422__auto__);
}));

return c__36420__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__38529 = arguments.length;
switch (G__38529) {
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
var G__38531 = arguments.length;
switch (G__38531) {
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
var G__38535 = arguments.length;
switch (G__38535) {
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
var c__36420__auto___39736 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36421__auto__ = (function (){var switch__36221__auto__ = (function (state_38572){
var state_val_38573 = (state_38572[(1)]);
if((state_val_38573 === (7))){
var inst_38567 = (state_38572[(2)]);
var state_38572__$1 = state_38572;
var statearr_38574_39742 = state_38572__$1;
(statearr_38574_39742[(2)] = inst_38567);

(statearr_38574_39742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38573 === (1))){
var inst_38549 = null;
var state_38572__$1 = (function (){var statearr_38575 = state_38572;
(statearr_38575[(7)] = inst_38549);

return statearr_38575;
})();
var statearr_38576_39755 = state_38572__$1;
(statearr_38576_39755[(2)] = null);

(statearr_38576_39755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38573 === (4))){
var inst_38552 = (state_38572[(8)]);
var inst_38552__$1 = (state_38572[(2)]);
var inst_38553 = (inst_38552__$1 == null);
var inst_38554 = cljs.core.not(inst_38553);
var state_38572__$1 = (function (){var statearr_38577 = state_38572;
(statearr_38577[(8)] = inst_38552__$1);

return statearr_38577;
})();
if(inst_38554){
var statearr_38578_39756 = state_38572__$1;
(statearr_38578_39756[(1)] = (5));

} else {
var statearr_38580_39761 = state_38572__$1;
(statearr_38580_39761[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38573 === (6))){
var state_38572__$1 = state_38572;
var statearr_38582_39762 = state_38572__$1;
(statearr_38582_39762[(2)] = null);

(statearr_38582_39762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38573 === (3))){
var inst_38569 = (state_38572[(2)]);
var inst_38570 = cljs.core.async.close_BANG_(out);
var state_38572__$1 = (function (){var statearr_38583 = state_38572;
(statearr_38583[(9)] = inst_38569);

return statearr_38583;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38572__$1,inst_38570);
} else {
if((state_val_38573 === (2))){
var state_38572__$1 = state_38572;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38572__$1,(4),ch);
} else {
if((state_val_38573 === (11))){
var inst_38552 = (state_38572[(8)]);
var inst_38561 = (state_38572[(2)]);
var inst_38549 = inst_38552;
var state_38572__$1 = (function (){var statearr_38585 = state_38572;
(statearr_38585[(10)] = inst_38561);

(statearr_38585[(7)] = inst_38549);

return statearr_38585;
})();
var statearr_38586_39777 = state_38572__$1;
(statearr_38586_39777[(2)] = null);

(statearr_38586_39777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38573 === (9))){
var inst_38552 = (state_38572[(8)]);
var state_38572__$1 = state_38572;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38572__$1,(11),out,inst_38552);
} else {
if((state_val_38573 === (5))){
var inst_38552 = (state_38572[(8)]);
var inst_38549 = (state_38572[(7)]);
var inst_38556 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38552,inst_38549);
var state_38572__$1 = state_38572;
if(inst_38556){
var statearr_38588_39784 = state_38572__$1;
(statearr_38588_39784[(1)] = (8));

} else {
var statearr_38589_39785 = state_38572__$1;
(statearr_38589_39785[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38573 === (10))){
var inst_38564 = (state_38572[(2)]);
var state_38572__$1 = state_38572;
var statearr_38590_39795 = state_38572__$1;
(statearr_38590_39795[(2)] = inst_38564);

(statearr_38590_39795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38573 === (8))){
var inst_38549 = (state_38572[(7)]);
var tmp38587 = inst_38549;
var inst_38549__$1 = tmp38587;
var state_38572__$1 = (function (){var statearr_38591 = state_38572;
(statearr_38591[(7)] = inst_38549__$1);

return statearr_38591;
})();
var statearr_38592_39801 = state_38572__$1;
(statearr_38592_39801[(2)] = null);

(statearr_38592_39801[(1)] = (2));


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
var cljs$core$async$state_machine__36222__auto__ = null;
var cljs$core$async$state_machine__36222__auto____0 = (function (){
var statearr_38593 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38593[(0)] = cljs$core$async$state_machine__36222__auto__);

(statearr_38593[(1)] = (1));

return statearr_38593;
});
var cljs$core$async$state_machine__36222__auto____1 = (function (state_38572){
while(true){
var ret_value__36223__auto__ = (function (){try{while(true){
var result__36224__auto__ = switch__36221__auto__(state_38572);
if(cljs.core.keyword_identical_QMARK_(result__36224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36224__auto__;
}
break;
}
}catch (e38597){var ex__36225__auto__ = e38597;
var statearr_38598_39803 = state_38572;
(statearr_38598_39803[(2)] = ex__36225__auto__);


if(cljs.core.seq((state_38572[(4)]))){
var statearr_38599_39804 = state_38572;
(statearr_38599_39804[(1)] = cljs.core.first((state_38572[(4)])));

} else {
throw ex__36225__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39805 = state_38572;
state_38572 = G__39805;
continue;
} else {
return ret_value__36223__auto__;
}
break;
}
});
cljs$core$async$state_machine__36222__auto__ = function(state_38572){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36222__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36222__auto____1.call(this,state_38572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36222__auto____0;
cljs$core$async$state_machine__36222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36222__auto____1;
return cljs$core$async$state_machine__36222__auto__;
})()
})();
var state__36422__auto__ = (function (){var statearr_38606 = f__36421__auto__();
(statearr_38606[(6)] = c__36420__auto___39736);

return statearr_38606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36422__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__38609 = arguments.length;
switch (G__38609) {
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
var c__36420__auto___39810 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36421__auto__ = (function (){var switch__36221__auto__ = (function (state_38647){
var state_val_38648 = (state_38647[(1)]);
if((state_val_38648 === (7))){
var inst_38643 = (state_38647[(2)]);
var state_38647__$1 = state_38647;
var statearr_38649_39811 = state_38647__$1;
(statearr_38649_39811[(2)] = inst_38643);

(statearr_38649_39811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38648 === (1))){
var inst_38610 = (new Array(n));
var inst_38611 = inst_38610;
var inst_38612 = (0);
var state_38647__$1 = (function (){var statearr_38650 = state_38647;
(statearr_38650[(7)] = inst_38611);

(statearr_38650[(8)] = inst_38612);

return statearr_38650;
})();
var statearr_38651_39812 = state_38647__$1;
(statearr_38651_39812[(2)] = null);

(statearr_38651_39812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38648 === (4))){
var inst_38615 = (state_38647[(9)]);
var inst_38615__$1 = (state_38647[(2)]);
var inst_38616 = (inst_38615__$1 == null);
var inst_38617 = cljs.core.not(inst_38616);
var state_38647__$1 = (function (){var statearr_38652 = state_38647;
(statearr_38652[(9)] = inst_38615__$1);

return statearr_38652;
})();
if(inst_38617){
var statearr_38653_39813 = state_38647__$1;
(statearr_38653_39813[(1)] = (5));

} else {
var statearr_38654_39814 = state_38647__$1;
(statearr_38654_39814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38648 === (15))){
var inst_38637 = (state_38647[(2)]);
var state_38647__$1 = state_38647;
var statearr_38659_39815 = state_38647__$1;
(statearr_38659_39815[(2)] = inst_38637);

(statearr_38659_39815[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38648 === (13))){
var state_38647__$1 = state_38647;
var statearr_38662_39816 = state_38647__$1;
(statearr_38662_39816[(2)] = null);

(statearr_38662_39816[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38648 === (6))){
var inst_38612 = (state_38647[(8)]);
var inst_38633 = (inst_38612 > (0));
var state_38647__$1 = state_38647;
if(cljs.core.truth_(inst_38633)){
var statearr_38663_39817 = state_38647__$1;
(statearr_38663_39817[(1)] = (12));

} else {
var statearr_38666_39818 = state_38647__$1;
(statearr_38666_39818[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38648 === (3))){
var inst_38645 = (state_38647[(2)]);
var state_38647__$1 = state_38647;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38647__$1,inst_38645);
} else {
if((state_val_38648 === (12))){
var inst_38611 = (state_38647[(7)]);
var inst_38635 = cljs.core.vec(inst_38611);
var state_38647__$1 = state_38647;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38647__$1,(15),out,inst_38635);
} else {
if((state_val_38648 === (2))){
var state_38647__$1 = state_38647;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38647__$1,(4),ch);
} else {
if((state_val_38648 === (11))){
var inst_38627 = (state_38647[(2)]);
var inst_38628 = (new Array(n));
var inst_38611 = inst_38628;
var inst_38612 = (0);
var state_38647__$1 = (function (){var statearr_38677 = state_38647;
(statearr_38677[(7)] = inst_38611);

(statearr_38677[(8)] = inst_38612);

(statearr_38677[(10)] = inst_38627);

return statearr_38677;
})();
var statearr_38678_39819 = state_38647__$1;
(statearr_38678_39819[(2)] = null);

(statearr_38678_39819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38648 === (9))){
var inst_38611 = (state_38647[(7)]);
var inst_38625 = cljs.core.vec(inst_38611);
var state_38647__$1 = state_38647;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38647__$1,(11),out,inst_38625);
} else {
if((state_val_38648 === (5))){
var inst_38615 = (state_38647[(9)]);
var inst_38611 = (state_38647[(7)]);
var inst_38612 = (state_38647[(8)]);
var inst_38620 = (state_38647[(11)]);
var inst_38619 = (inst_38611[inst_38612] = inst_38615);
var inst_38620__$1 = (inst_38612 + (1));
var inst_38621 = (inst_38620__$1 < n);
var state_38647__$1 = (function (){var statearr_38679 = state_38647;
(statearr_38679[(12)] = inst_38619);

(statearr_38679[(11)] = inst_38620__$1);

return statearr_38679;
})();
if(cljs.core.truth_(inst_38621)){
var statearr_38680_39820 = state_38647__$1;
(statearr_38680_39820[(1)] = (8));

} else {
var statearr_38681_39821 = state_38647__$1;
(statearr_38681_39821[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38648 === (14))){
var inst_38640 = (state_38647[(2)]);
var inst_38641 = cljs.core.async.close_BANG_(out);
var state_38647__$1 = (function (){var statearr_38684 = state_38647;
(statearr_38684[(13)] = inst_38640);

return statearr_38684;
})();
var statearr_38685_39822 = state_38647__$1;
(statearr_38685_39822[(2)] = inst_38641);

(statearr_38685_39822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38648 === (10))){
var inst_38631 = (state_38647[(2)]);
var state_38647__$1 = state_38647;
var statearr_38687_39823 = state_38647__$1;
(statearr_38687_39823[(2)] = inst_38631);

(statearr_38687_39823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38648 === (8))){
var inst_38611 = (state_38647[(7)]);
var inst_38620 = (state_38647[(11)]);
var tmp38682 = inst_38611;
var inst_38611__$1 = tmp38682;
var inst_38612 = inst_38620;
var state_38647__$1 = (function (){var statearr_38688 = state_38647;
(statearr_38688[(7)] = inst_38611__$1);

(statearr_38688[(8)] = inst_38612);

return statearr_38688;
})();
var statearr_38689_39824 = state_38647__$1;
(statearr_38689_39824[(2)] = null);

(statearr_38689_39824[(1)] = (2));


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
var cljs$core$async$state_machine__36222__auto__ = null;
var cljs$core$async$state_machine__36222__auto____0 = (function (){
var statearr_38690 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38690[(0)] = cljs$core$async$state_machine__36222__auto__);

(statearr_38690[(1)] = (1));

return statearr_38690;
});
var cljs$core$async$state_machine__36222__auto____1 = (function (state_38647){
while(true){
var ret_value__36223__auto__ = (function (){try{while(true){
var result__36224__auto__ = switch__36221__auto__(state_38647);
if(cljs.core.keyword_identical_QMARK_(result__36224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36224__auto__;
}
break;
}
}catch (e38691){var ex__36225__auto__ = e38691;
var statearr_38692_39825 = state_38647;
(statearr_38692_39825[(2)] = ex__36225__auto__);


if(cljs.core.seq((state_38647[(4)]))){
var statearr_38693_39826 = state_38647;
(statearr_38693_39826[(1)] = cljs.core.first((state_38647[(4)])));

} else {
throw ex__36225__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39829 = state_38647;
state_38647 = G__39829;
continue;
} else {
return ret_value__36223__auto__;
}
break;
}
});
cljs$core$async$state_machine__36222__auto__ = function(state_38647){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36222__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36222__auto____1.call(this,state_38647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36222__auto____0;
cljs$core$async$state_machine__36222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36222__auto____1;
return cljs$core$async$state_machine__36222__auto__;
})()
})();
var state__36422__auto__ = (function (){var statearr_38694 = f__36421__auto__();
(statearr_38694[(6)] = c__36420__auto___39810);

return statearr_38694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36422__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__38703 = arguments.length;
switch (G__38703) {
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
var c__36420__auto___39832 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36421__auto__ = (function (){var switch__36221__auto__ = (function (state_38769){
var state_val_38770 = (state_38769[(1)]);
if((state_val_38770 === (7))){
var inst_38763 = (state_38769[(2)]);
var state_38769__$1 = state_38769;
var statearr_38776_39836 = state_38769__$1;
(statearr_38776_39836[(2)] = inst_38763);

(statearr_38776_39836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38770 === (1))){
var inst_38718 = [];
var inst_38719 = inst_38718;
var inst_38720 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_38769__$1 = (function (){var statearr_38777 = state_38769;
(statearr_38777[(7)] = inst_38719);

(statearr_38777[(8)] = inst_38720);

return statearr_38777;
})();
var statearr_38778_39837 = state_38769__$1;
(statearr_38778_39837[(2)] = null);

(statearr_38778_39837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38770 === (4))){
var inst_38730 = (state_38769[(9)]);
var inst_38730__$1 = (state_38769[(2)]);
var inst_38731 = (inst_38730__$1 == null);
var inst_38732 = cljs.core.not(inst_38731);
var state_38769__$1 = (function (){var statearr_38779 = state_38769;
(statearr_38779[(9)] = inst_38730__$1);

return statearr_38779;
})();
if(inst_38732){
var statearr_38780_39838 = state_38769__$1;
(statearr_38780_39838[(1)] = (5));

} else {
var statearr_38781_39839 = state_38769__$1;
(statearr_38781_39839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38770 === (15))){
var inst_38757 = (state_38769[(2)]);
var state_38769__$1 = state_38769;
var statearr_38782_39840 = state_38769__$1;
(statearr_38782_39840[(2)] = inst_38757);

(statearr_38782_39840[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38770 === (13))){
var state_38769__$1 = state_38769;
var statearr_38783_39841 = state_38769__$1;
(statearr_38783_39841[(2)] = null);

(statearr_38783_39841[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38770 === (6))){
var inst_38719 = (state_38769[(7)]);
var inst_38752 = inst_38719.length;
var inst_38753 = (inst_38752 > (0));
var state_38769__$1 = state_38769;
if(cljs.core.truth_(inst_38753)){
var statearr_38785_39851 = state_38769__$1;
(statearr_38785_39851[(1)] = (12));

} else {
var statearr_38786_39852 = state_38769__$1;
(statearr_38786_39852[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38770 === (3))){
var inst_38765 = (state_38769[(2)]);
var state_38769__$1 = state_38769;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38769__$1,inst_38765);
} else {
if((state_val_38770 === (12))){
var inst_38719 = (state_38769[(7)]);
var inst_38755 = cljs.core.vec(inst_38719);
var state_38769__$1 = state_38769;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38769__$1,(15),out,inst_38755);
} else {
if((state_val_38770 === (2))){
var state_38769__$1 = state_38769;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38769__$1,(4),ch);
} else {
if((state_val_38770 === (11))){
var inst_38730 = (state_38769[(9)]);
var inst_38734 = (state_38769[(10)]);
var inst_38745 = (state_38769[(2)]);
var inst_38746 = [];
var inst_38747 = inst_38746.push(inst_38730);
var inst_38719 = inst_38746;
var inst_38720 = inst_38734;
var state_38769__$1 = (function (){var statearr_38791 = state_38769;
(statearr_38791[(7)] = inst_38719);

(statearr_38791[(11)] = inst_38745);

(statearr_38791[(12)] = inst_38747);

(statearr_38791[(8)] = inst_38720);

return statearr_38791;
})();
var statearr_38792_39853 = state_38769__$1;
(statearr_38792_39853[(2)] = null);

(statearr_38792_39853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38770 === (9))){
var inst_38719 = (state_38769[(7)]);
var inst_38743 = cljs.core.vec(inst_38719);
var state_38769__$1 = state_38769;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38769__$1,(11),out,inst_38743);
} else {
if((state_val_38770 === (5))){
var inst_38720 = (state_38769[(8)]);
var inst_38730 = (state_38769[(9)]);
var inst_38734 = (state_38769[(10)]);
var inst_38734__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38730) : f.call(null,inst_38730));
var inst_38736 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38734__$1,inst_38720);
var inst_38737 = cljs.core.keyword_identical_QMARK_(inst_38720,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_38738 = ((inst_38736) || (inst_38737));
var state_38769__$1 = (function (){var statearr_38793 = state_38769;
(statearr_38793[(10)] = inst_38734__$1);

return statearr_38793;
})();
if(cljs.core.truth_(inst_38738)){
var statearr_38794_39859 = state_38769__$1;
(statearr_38794_39859[(1)] = (8));

} else {
var statearr_38795_39860 = state_38769__$1;
(statearr_38795_39860[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38770 === (14))){
var inst_38760 = (state_38769[(2)]);
var inst_38761 = cljs.core.async.close_BANG_(out);
var state_38769__$1 = (function (){var statearr_38797 = state_38769;
(statearr_38797[(13)] = inst_38760);

return statearr_38797;
})();
var statearr_38798_39861 = state_38769__$1;
(statearr_38798_39861[(2)] = inst_38761);

(statearr_38798_39861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38770 === (10))){
var inst_38750 = (state_38769[(2)]);
var state_38769__$1 = state_38769;
var statearr_38799_39862 = state_38769__$1;
(statearr_38799_39862[(2)] = inst_38750);

(statearr_38799_39862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38770 === (8))){
var inst_38719 = (state_38769[(7)]);
var inst_38730 = (state_38769[(9)]);
var inst_38734 = (state_38769[(10)]);
var inst_38740 = inst_38719.push(inst_38730);
var tmp38796 = inst_38719;
var inst_38719__$1 = tmp38796;
var inst_38720 = inst_38734;
var state_38769__$1 = (function (){var statearr_38800 = state_38769;
(statearr_38800[(7)] = inst_38719__$1);

(statearr_38800[(14)] = inst_38740);

(statearr_38800[(8)] = inst_38720);

return statearr_38800;
})();
var statearr_38802_39863 = state_38769__$1;
(statearr_38802_39863[(2)] = null);

(statearr_38802_39863[(1)] = (2));


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
var cljs$core$async$state_machine__36222__auto__ = null;
var cljs$core$async$state_machine__36222__auto____0 = (function (){
var statearr_38803 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38803[(0)] = cljs$core$async$state_machine__36222__auto__);

(statearr_38803[(1)] = (1));

return statearr_38803;
});
var cljs$core$async$state_machine__36222__auto____1 = (function (state_38769){
while(true){
var ret_value__36223__auto__ = (function (){try{while(true){
var result__36224__auto__ = switch__36221__auto__(state_38769);
if(cljs.core.keyword_identical_QMARK_(result__36224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36224__auto__;
}
break;
}
}catch (e38805){var ex__36225__auto__ = e38805;
var statearr_38812_39867 = state_38769;
(statearr_38812_39867[(2)] = ex__36225__auto__);


if(cljs.core.seq((state_38769[(4)]))){
var statearr_38813_39871 = state_38769;
(statearr_38813_39871[(1)] = cljs.core.first((state_38769[(4)])));

} else {
throw ex__36225__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39872 = state_38769;
state_38769 = G__39872;
continue;
} else {
return ret_value__36223__auto__;
}
break;
}
});
cljs$core$async$state_machine__36222__auto__ = function(state_38769){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36222__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36222__auto____1.call(this,state_38769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36222__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36222__auto____0;
cljs$core$async$state_machine__36222__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36222__auto____1;
return cljs$core$async$state_machine__36222__auto__;
})()
})();
var state__36422__auto__ = (function (){var statearr_38814 = f__36421__auto__();
(statearr_38814[(6)] = c__36420__auto___39832);

return statearr_38814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36422__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
