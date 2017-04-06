<template>
    <div class="about">
        {{ message }}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: 'about',
            };
        },
    };
</script>

<style lang="scss">
    .about {
        height: 100px;
        background: #000;
        color: #fff;
        font-size: 24px;
        text-align: center;
    }
</style>
