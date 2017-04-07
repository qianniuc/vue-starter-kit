import 'babel-polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import env from './env';
import store from './vuex/store';
import routes from './routes/index';
import App from './containers/index.vue';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = env.serverUrl;

const router = new VueRouter({
    routes,
});

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App),
});