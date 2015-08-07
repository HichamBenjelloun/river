
import EventEmitter from 'eventemitter3';
import Dispatcher from '../dispatcher/Dispatcher';


class Store {

    static CHANGE_EVENT = 'change';

    constructor(source) {
        this._source = source;
        this._emitter = new EventEmitter();

        if(this.handle)
            this._dispatchToken = Dispatcher.register(this.handle.bind(this));
        else
            console.error("(MethodNotImplemented) Class " + this.constructor.name +
                "does not implement method `handle()` and can't handle actions.");
    }

    get source() {
        return this._source;
    }

    addChangeListener(callback) {
        this._emitter.on(Store.CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this._emitter.removeListener(callback);
    }

    emitChange() {
        this._emitter.emit(Store.CHANGE_EVENT);
    }

}

export default Store;