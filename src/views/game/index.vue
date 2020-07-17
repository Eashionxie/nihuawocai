<template>
    <div class="page">
        <canvas class="game-canvas" @touchstart="touchstart"></canvas>
    </div>
</template>

<script>
export default {
    methods: {
        touchstart () {
            console.log('start')
        }
    }
}
</script>

<style lang="scss" scoped>
.game-canvas {
    width: 100%;
    height: 260px;
    background-color: #fff;
}
</style>