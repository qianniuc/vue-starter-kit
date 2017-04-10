<template>
    <div>
        <header-bar />
        <menus />
        <router-view />
    </div>
</template>

<script>
    import HeaderBar from '../components/header.vue';
    import Menus from '../components/menus.vue';

    export default {
        components: {
            HeaderBar,
            Menus,
        },
    };
</script>

<style lang="scss">
    @import "../styles/variable.scss";

    body {
        margin: 0;
        padding: 0;
        background: #f5f5f5;
        height: 50px;
    }
</style>
