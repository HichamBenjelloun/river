# River
Framework for developing web user interfaces based on React and Flux architecture.

## [Todo app demo](https://hichambenjelloun.github.io/river)

## Get started

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Overview
The application is developed with ECMAScript 6 and implements the `Flux` architecture with `React` components for the view. The framework also provides models management with field validation.

- `sources`: each source implements a method fetch which has the responsibility to fetch data and calls an action creator to notify the store.
- `stores`: each store define how data is stored locally and implements method `handler()` which handle an action.
- `models`: each model encapsulate each element and define field types for validation.
- `constants`: defines constants that describe actions.
- `actions`: defines actions that will dispatch payloads to the stores.

The framework has its own base classes that sources, stores, models derive from and that handle common operations. See the `Todo` example for more information on how to use the framework.

[Check out the tutorials on River!](https://github.com/HichamBenjelloun/river/wiki)