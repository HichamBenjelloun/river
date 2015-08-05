
import Store from './Store';

class GroupStore extends Store {

    constructor(source, model) {
        super(source);
        this._model = model;
        this._items = new Map();
        this._isLoading = false;
    }

    requestData() {
        this.setIsLoading(true);
        this.source.fetch();
    }

    setIsLoading(loading) {
        this._isLoading = loading;
    }

    isLoading() {
        return this._isLoading;
    }

    addItem(item) {
        this._items.set(item.getValue('id'), item);
    }

    getItem(id) {
        return this._items.get(id);
    }

    fetch(items) {
        for(let item of items) {
            this.addItem(new this._model(item));
        }
    }

    removeItem(id) {
        this._items.delete(id);
    }

    getAll() {
        return this._items;
    }

}

export default GroupStore;