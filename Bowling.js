AFRAME.registerComponent('bowling-ball',{
    init: function(){
        this.throwBall()
    },

    throwBall: function(){
        window.addEventListener('keydown', (e)=>{
            if(e.key === 'z'){
                var ball = document.createElement('a-entity')
                ball.setAttribute('geometry',{
                    primitive:'sphere',
                    radius:0.5
                })
                ball.setAttribute('material','color','red')
                var cam = document.querySelector('#camera')
                position = cam.getAttribute('position')

                var camera = document.querySelector('#camera').object3D
                var direction = new THREE.Vector3()
                camera.getWorldDirection(direction)
                console.log(direction)

                ball.setAttribute('position',{
                        x:position.x,
                        y:position.y,
                        z:position.z,
                })
                ball.setAttribute('velocity',direction.multiplyScalar(-10))

                var scene = document.querySelector('#scene')
                scene.appendChild(ball)
            }
        })


    }
})