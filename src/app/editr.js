import { store } from './store/Store'

export default class Editr {
    constructor() {
        this.name = 'editr.io';
        this.store = store;
        this.options = {
            elem: document.getElementById('editor'),
            store
        }

        
        this.store.subscribe(this.update.bind(this));
    }

    update() {
        this.options.elem = this.store.getState().counterReducer.rootElement
    }

    Use(plugin) {
        plugin.Run(this.options);
        return this;
    }

    Test() {
    }
}