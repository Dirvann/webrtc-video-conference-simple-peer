


let x;
let y;
var ax = 0;
var ay = 0;
window.addEventListener('mousemove', function (e) {



});
var timestamp = null;
let lastMouseX;
let lastMouseY;

var a = 0;
window.addEventListener('mousemove', function (e) {
    a++;
    x = e.clientX / window.innerWidth;
    y = e.clientY / window.innerHeight;
    if (a > 200) {
        a = 0;
        timerId();
    }

});
function animate(options) {

    var start = performance.now();

    requestAnimationFrame(function animate(time) {
        // timeFraction от 0 до 1
        var timeFraction = (time - start) / options.duration;
        if (timeFraction > 1) timeFraction = 1;

        // текущее состояние анимации
        var progress = options.timing(timeFraction)

        options.draw(progress);

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }

    });
}
function makeEaseOut(timing) {

    return function (timeFraction) {
        return 1 - timing(1 - timeFraction);

    }
}

function bounce(timeFraction) {
    for (let a = 0, b = 1; 1; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
            return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
        }
    }
}

let bounceEaseOut = makeEaseOut(bounce);

let road = 1;
let timerId = () => {

    animate({
        duration: 1000,
        timing: bounceEaseOut,
        draw: function (progress) {
            ax = ax + ((x - ax) * progress);
            ay = ay + ((y - ay) * progress);
        }
    });
    return;

};


// `rotation` is a three.js Euler using radians. `quaternion` also available.


let th;

AFRAME.registerComponent('rotation-reader', {
    tick: function () {
        // `this.el` is the element.
        // `object3D` is the three.js object.
        th = this;
        if (x > 0.7 && th.el.object3D.rotation.y > -3) {

            th.el.object3D.rotation.y = th.el.object3D.rotation.y - 0.005;
        }
        if (x < 0.3 && th.el.object3D.rotation.y < 3) {

            th.el.object3D.rotation.y = th.el.object3D.rotation.y + 0.005;
        }


        th.el.object3D.rotation.x = 1 - 2 * y;
        // `position` is a three.js Vector3.

    }

});
function sayHi() {

    AFRAME.registerComponent('play-video', {
        schema: {
            target: { type: 'selector' },
            src: { type: 'string' },
            on: { default: 'click' },
        },

        multiple: true,

        init: function () {
            var data = this.data;

            this.el.addEventListener(data.on, function () {
                data.target.setAttribute('src', data.src);
                data.target.components.material.material.map.image.play();
            });
        }
    });

    document.querySelector("#image-360").components.material.material.map.image.play();
    document.addEventListener("mousemove", function (event) {
        document.querySelector('.background_page').classList.add('active')
    })

}

document.addEventListener("DOMContentLoaded", function (event) {
    console.log(1);

    setTimeout(sayHi, 3000);
    const iconMenu = document.querySelector('.menu_icon');
    const menuBody = document.querySelector('.menu_body');
    const videoBlock = document.querySelector('.content');
    const MenuItem = menuBody.querySelectorAll('li')
    const pages = document.querySelectorAll('.page');
    iconMenu.addEventListener('click', () => {
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
        videoBlock.classList.toggle('active');
    });


    for (let item of MenuItem)

        item.addEventListener('click', () => {
            for (let itemclass of MenuItem) {
                itemclass.classList.remove("active")
            }
            let itemId = item.dataset.id
            item.classList.add('active')
            console.log(itemId);
            Page_active(itemId)


        });
    let Page_active = (id) => {
        for (let page of pages) {
            console.log(id);
            page.classList.remove('active')
            if (page.dataset.id == id) {
                page.classList.add('active')
            }
        }
    }

});


