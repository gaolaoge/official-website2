<template>
  <div class="wrapper">
    <canvas class="js-canvas"></canvas>
  </div>
</template>

<script>
  export default {
    name: 'mouseIcon',
    data(){
      return {

      }
    },
    methods: {
      styleF(){

      }
    },
    mounted() {
      const canvas = document.querySelector('.js-canvas'),
            ctx = canvas.getContext('2d')
      let width = canvas.width = window.innerWidth * 6,
          height = canvas.height = window.innerHeight * 2,
          mouseX = width / 2,
          mouseY = height / 2,
          circle = {
            radius: 10,
            lastX: mouseX,
            lastY: mouseY
          }

      function onResize () {
        width = canvas.width = window.innerWidth
        height = canvas.height = window.innerHeight
      }

      function render () {
        circle.lastX = lerp(circle.lastX, mouseX, 0.25)
        circle.lastY = lerp(circle.lastY, mouseY, 0.25)

        ctx.clearRect(0, 0, width, height)
        ctx.beginPath()
        ctx.arc(circle.lastX, circle.lastY, circle.radius, 0, Math.PI * 2, false)
        ctx.fillStyle = "rgba(247,237,92,0.6)"
        ctx.fill()
        ctx.closePath()

        requestAnimationFrame(render)
      }

      function init () {
        requestAnimationFrame(render)

        window.addEventListener('mousemove', function(e) {
          mouseX = e.pageX;
          mouseY = e.pageY;
        })

        window.addEventListener('resize', onResize, false)

        let tween = TweenMax.to(circle, 0.25, {
          radius: circle.radius * 3,
          ease: Power1.easeInOut,
          paused: true
        })

      }

      function lerp(a, b, n) {
        return (1 - n) * a + n * b
      }

      init()
    }
  }
</script>

<style lang="less" scoped>
  canvas {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0;
    margin: 0;
    z-index: 3;
    pointer-events: none;
    /*mix-blend-mode: difference;*/
  }
</style>
