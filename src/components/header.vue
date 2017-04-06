<template>
    <header>
        {{ message }}
    </header>
</template>

<script>
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
            getUserInfo() {
                appService.getUserInfo().then(res => console.log(res.data));
            }
        }
    };
</script>

<style lang="scss">
    @import "../styles/variable.scss";
    header {
        height: 100px;
        background: #fff;
    }
</style>
