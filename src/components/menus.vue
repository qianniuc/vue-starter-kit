<template>
    <div class="menus">
        <ul>
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/about">关于</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: 'menus',
            };
        },
    };
</script>

<style lang="scss">
    .menus {
        height: 100px;
        background: #fff;
        width: 200px;
    }
</style>
