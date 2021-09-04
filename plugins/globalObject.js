// plugins/myPlugin.js

import Vue from 'vue'
 
 
const state = {
    docsActive: 1,     
    docsScroll: 0    
}

export default ({ app }, inject) => {
    inject('state', Vue.observable(state))
 
}