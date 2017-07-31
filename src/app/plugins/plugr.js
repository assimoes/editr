export default class Plugr {
    
    constructor(){
        this.options;
        this.store;
        
    }

    getOptions() {
        return this.options;
    }

    onClick() {
    }

    Run(options) {

        this.options = options;
        
        this.options.elem.setAttribute('style', "background-color: #CCCCCC");
        this.options.elem.addEventListener('click', this.onClick);
        
        this.store = this.options.store;
        this.store.subscribe(this.update.bind(this));
        
        this.options.elem.querySelector('#inc').addEventListener('click', this.inc.bind(this))
        this.options.elem.querySelector('#dec').addEventListener('click', this.dec.bind(this))

    }

    inc() {
        var elem = this.options.elem;
        this.store.dispatch({type: 'INC'});
        this.store.dispatch({type:'STYLE' , payload: {elem: elem, id: 'counterText', style: 'color: red' }})
    }

    dec() {
        var elem = this.options.elem;
        this.store.dispatch({type: 'DEC'});
        this.store.dispatch({type:'STYLE' , payload: {elem: elem, id: elem.id , style: 'background-color: yellow' }})
    }

    update() {
    }
}