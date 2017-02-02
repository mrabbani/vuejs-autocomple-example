/**
 * Created by mahbub on 2/2/17.
 */

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('example', require('./components/Example.vue'));
Vue.component('vueTypeahead', require('vuejs-autocomplete'));
const app = new Vue({
    el: '#app',
    data: function() {
        return{
            label:'',
            value: '',
            value1: '',
            myTemplate: '<div><h3>{{team}}</h3><h4>Custom Template</h4></div>',
            localValues: ['Dhaka', 'Rangpur', 'Rajshahi', 'Sylhet', 'Khulna']
        }
    },
    methods: {
        done: function(data) {
            console.log(data);
        }
    }
});