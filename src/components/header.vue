<template>
    <header @click="click">
        {{ message }}{{ count }}
    </header>
</template>

<script>
    import { mapState, mapGetters, mapActions } from 'vuex';
    import appService from '../services/app.service';

    export default {
        data() {
            return {
                message: 'header',
            };
        },
        mounted() {
            this.getUserInfo();
        },
        methods: {
            ...mapActions(['ADD_ONE']),
            click() {
                this.$store.dispatch('ADD_ONE');
            },
            getUserInfo() {
                appService.getUserInfo().then(res => console.log(res.data));
            },
        },
        computed: {
            ...mapState(['count']),
        },
    };
</script>

<style lang="scss">
    @import "../styles/variable.scss";
    header {
        height: 100px;
        background: #fff;
    }
</style>
