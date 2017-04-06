import About from '../containers/about/index.vue';

export default [
    {
        path: '/',
        component: {
            template: '<div><h2>我是第 1 个子页面</h2></div>',
        },
    }, {
        path: '/about',
        component: About,
    },
];
