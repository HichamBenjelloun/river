
import React from 'react';
import mui from 'material-ui';

class River {

    constructor() {
        this._themeManager = new mui.Styles.ThemeManager();
    }

    get ThemeManager() {
        return this._themeManager;
    }

    render(element, domId) {
        React.render(element, document.getElementById(domId));
    }

}

export default new River();