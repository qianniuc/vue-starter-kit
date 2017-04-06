import 'babel-polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import routes from './routes/index';
import env from './env';
import App from './containers/index.vue';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = env.serverUrl;

const router = new VueRouter({
    routes,
});

new Vue({
    el: '#app',
    router,
    render: h => h(App),
});