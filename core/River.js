
import React from 'react';

class River {

    constructor() {

    }

    render(element, domId) {
        React.render(element, document.getElementById(domId));
    }

}

export default new River();