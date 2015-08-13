# River
Framework for developing web user interfaces based on React and Flux architecture.

## Overview
The application is developed with ECMAScript 6 and implements the `Flux` architecture with `React` components for the view. The framework also provides models management with field validation.

- `sources`: each source implements a method fetch which has the responsibility to fetch data and calls an action creator to notify the store.
- `stores`: each store define how data is stored locally and implements method `handler()` which handle an action.
- `models`: each model encapsulate each element and define field types for validation.
- `constants`: defines constants that describe actions.
- `actions`: defines actions that will dispatch payloads to the stores.

The framework has its own base classes that sources, stores, models derive from and that handle common operations. See the `Todo` example for more information on how to use the framework.

[Check out the tutorials on River!](https://github.com/HichamBenjelloun/river/wiki)

## Install dependencies
```
sudo apt-get install npm nodejs
sudo npm install -g gulp
```

Update `nodejs` to the latest stable version:
```
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
```

## Get started
```
npm install && gulp
gnome-open index.html
```
