<template>
    <div class="page">
        <canvas ref="canvas" class="game-canvas" @touchstart="touchstart" @touchmove="touchmove"></canvas>
    </div>
</template>

<script>
export default {
    data () {
        return {
            canvas: '',
            startX: '',
            startY: '',
            stageInfo: ''
        }
    },
    mounted () {
        const CANVAS = this.$refs.canvas
        CANVAS.width = CANVAS.offsetWidth
        CANVAS.height = CANVAS.offsetHeight
        this.canvas = CANVAS.getContext('2d')
        this.stageInfo = CANVAS.getBoundingClientRect()
        this.canvas.lineWidth = 3
        this.canvas.strokeStyle = "red"
        this.canvas.lineCap = 'round'
        this.canvas.lineJoin = 'round'
    },
    methods: {
        touchstart (pos) {
            this.canvas.beginPath()
            this.startX = pos.touches[0].pageX - this.stageInfo.left,
            this.startY = pos.touches[0].pageY - this.stageInfo.top
            this.canvas.moveTo(this.startX, this.startY)
        },
        touchmove (pos) {
            this.canvas.lineTo(
                pos.touches[0].pageX - this.stageInfo.left,
                pos.touches[0].pageY - this.stageInfo.top
            )
            this.canvas.stroke()
        }
    }
}
</script>

<style lang="scss" scoped>
.game-canvas {
    width: 96%;
    height: 260px;
    margin-top: 20px;
    background-color: #fff;
    border-radius: 8px
}
</style>