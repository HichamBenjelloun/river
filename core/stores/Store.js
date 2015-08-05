
import EventEmitter from 'eventemitter3';
import Dispatcher from '../dispatcher/Dispatcher';

/**
 * Classe mère des stores permettant de gérer l'envoi d'événements
 * ainsi que l'enregistrement d'un store auprès du Dispatcher.
 *
 * Chaque classe étendant cette classe doit obligatoirement
 * implémenter la méthode `handle()`, qui prend en argument
 * une charge utile, notons-la `payload`.
 *
 *   handle(payload) {
 *     let action = payload.action;
 *
 *     switch(action.actionType) {
 *       case MyConstants.MY_DELETE:
 *         this.delete(action.id)
 *         break;
 *         // [...]
 *      }
 *
 * En créant un singleton à l'aide de la syntaxe:
 *
 *    export default new MyStore();
 *
 * Nous disposons d'une instance de MyStore accessible via l'identificateur `MyStore`.
 * Par exemple, pour initialiser l'état d'un composant React à partir de la liste des items du Store,
 * accessible via la méthode `getAll()` de ce store,
 *
 *   this.setState({
 *     items: MyStore.getAll();
 *   });
 */

class Store {

    static CHANGE_EVENT = 'change';

    constructor(source) {
        this._source = source;
        this._emitter = new EventEmitter();

        if(this.handle)
            this._dispatchToken = Dispatcher.register(this.handle.bind(this));
        else
            console.error("Le store `" +
                this.constructor.name +
                "` n'implémente pas la méthode `handle`.");
    }

    get source() {
        return this._source;
    }

    /**
     * Ajoute une méthode `callback` qui va être appelée lorsque
     * le store est mis à jour.
     *
     * @param callback
     */
    addChangeListener(callback) {
        this._emitter.on(Store.CHANGE_EVENT, callback);
    }

    /**
     * Supprime la méthode `callback` en tant qu'observateur des changements du store.
     *
     * @param callback
     */
    removeChangeListener(callback) {
        this._emitter.removeListener(callback);
    }

    /**
     * Notifie tous les observateurs que le store a été modifié
     * (appelle les fonctions de callback enregistrées)
     *
     */
    emitChange() {
        this._emitter.emit(Store.CHANGE_EVENT);
    }

}

export default Store;