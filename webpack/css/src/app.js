import css from "./css/common.css";
import Layer from './components/layer/layer.js';


const app = function() {
    var dom = document.getElementById('app');
    var layer = new Layer();
    console.log(layer.tpl);
    dom.innerHTML = layer.tpl({
        name: 'chenli'
    });
};

new app();