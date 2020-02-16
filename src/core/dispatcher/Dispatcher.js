
import Flux from 'flux';

import PayloadSources from '../constants/PayloadSources';

class Dispatcher extends Flux.Dispatcher {

    handleServerAction(action) {
        this.dispatch({
            source: PayloadSources.SERVER_ACTION,
            action: action
        });
    }

    handleViewAction(action) {
        this.dispatch({
            source: PayloadSources.VIEW_ACTION,
            action: action
        });
    }
}

export default new Dispatcher();