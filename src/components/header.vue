<template>
    <header>
        {{ message }}{{ count }}
    </header>
</template>

<script>
    import appService from '../services/app.service';

    export default {
//        vuex: {
//            getters: {
//                count: state => console.log(state),
//            },
//        },
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
        },
        computed:{
            count : function() {
                console.log(this.$store.getters);
                return this.$store.getters.count;
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
