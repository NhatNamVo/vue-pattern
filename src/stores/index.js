import Vue from 'vue';
import Vuex from "vuex";
import inventory from './inventory/inventory';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        inventory:inventory
    }
});

export default store;