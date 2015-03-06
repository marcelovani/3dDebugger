/**
 *
 * WebGL With Three.js - Lesson 1
 * http://www.script-tutorials.com/webgl-with-three-js-lesson-1/
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Script Tutorials
 * http://www.script-tutorials.com/
 */

var colors = [
    0xFF62B0,
    0x9A03FE,
    0x62D0FF,
    0x48FB0D,
    0xDFA800,
    0xC27E3A,
    0x990099,
    0x9669FE,
    0x23819C,
    0x01F33E,
    0xB6BA18,
    0xFF800D,
    0xB96F6F,
    0x4A9586
];
var particleLight;

var lesson1 = {
    scene: null,
    camera: null,
    renderer: null,
    container: null,
    controls: null,
    clock: null,
    stats: null,

    init: function() { // Initialization

        // create main scene
        this.scene = new THREE.Scene();

        var SCREEN_WIDTH = window.innerWidth,
            SCREEN_HEIGHT = window.innerHeight;

        // prepare camera
        var VIEW_ANGLE = 65, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 1, FAR = 10000;
        this.camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);
        this.scene.add(this.camera);
        this.camera.position.set(-1000, 1000, 0);
        this.camera.lookAt(new THREE.Vector3(0,0,0));

        // prepare renderer
        this.renderer = new THREE.WebGLRenderer({antialias:true, alpha: false});
        this.renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
        this.renderer.setClearColor(0xffffff);

        this.renderer.shadowMapEnabled = true;
        this.renderer.shadowMapSoft = true;

        // prepare container
        this.container = document.createElement('div');
        document.body.appendChild(this.container);
        this.container.appendChild(this.renderer.domElement);

        // events
        THREEx.WindowResize(this.renderer, this.camera);

        // prepare controls (OrbitControls)
        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.target = new THREE.Vector3(0, 0, 0);

        // prepare clock
        this.clock = new THREE.Clock();

        // prepare stats
        this.stats = new Stats();
        this.stats.domElement.style.position = 'absolute';
        this.stats.domElement.style.bottom = '0px';
        this.stats.domElement.style.zIndex = 10;
        this.container.appendChild( this.stats.domElement );

        // add directional light
        var dLight = new THREE.DirectionalLight(0xffffff);
        dLight.position.set(1, 1000, 1);
        dLight.castShadow = true;
        dLight.shadowCameraVisible = true;
        dLight.shadowDarkness = 0.2;
        dLight.shadowMapWidth = dLight.shadowMapHeight = 1000;
        this.scene.add(dLight);

        // add particle of light
        particleLight = new THREE.Mesh( new THREE.SphereGeometry(10, 10, 10), new THREE.MeshBasicMaterial({ color: 0x44ff44 }));
        particleLight.position = dLight.position;
        this.scene.add(particleLight);

        // add simple ground
        var groundGeometry = new THREE.PlaneGeometry(1000, 1000, 1, 1);
        ground = new THREE.Mesh(groundGeometry, new THREE.MeshLambertMaterial({
            color: 0xfefefe
        }));
        ground.position.y = 0;
        ground.rotation.x = - Math.PI / 2;
        ground.receiveShadow = true;
        this.scene.add(ground);

 		var cubes = {"f1": {
				        "a": {
				            "name": "a",
				            "package": "a",
				            "version": "1.31.x",
				            "status": "Enabled"
				        },
				        "b": {
				            "name": "b",
				            "package": "b",
				            "version": "1.31.x",
				            "status": "Not Installed"
				        },
				        "c": {
				            "name": "c",
				            "package": "c",
				            "version": "1.31.x",
				            "status": "Enabled"
				        }
				    },
				    "f2": {
				        "a": {
				            "name": "a",
				            "package": "a",
				            "version": "1.31.x",
				            "status": "Enabled"
				        },
				        "b": {
				            "name": "b",
				            "package": "b",
				            "version": "1.31.x",
				            "status": "Not Installed"
				        },
				        "c": {
				            "name": "c",
				            "package": "c",
				            "version": "1.31.x",
				            "status": "Enabled"
				        }
				    },
				    "f3": {
				        "a": {
				            "name": "a",
				            "package": "a",
				            "version": "1.31.x",
				            "status": "Enabled"
				        },
				        "b": {
				            "name": "b",
				            "package": "b",
				            "version": "1.31.x",
				            "status": "Not Installed"
				        },
				        "c": {
				            "name": "c",
				            "package": "c",
				            "version": "1.31.x",
				            "status": "Enabled"
				        }
				    },
				    "f4": {
				        "a": {
				            "name": "a",
				            "package": "a",
				            "version": "1.31.x",
				            "status": "Enabled"
				        },
				        "b": {
				            "name": "b",
				            "package": "b",
				            "version": "1.31.x",
				            "status": "Not Installed"
				        },
				        "c": {
				            "name": "c",
				            "package": "c",
				            "version": "1.31.x",
				            "status": "Enabled"
				        }
				    },
				    "f5": {
				        "a": {
				            "name": "a",
				            "package": "a",
				            "version": "1.31.x",
				            "status": "Enabled"
				        },
				        "b": {
				            "name": "b",
				            "package": "b",
				            "version": "1.31.x",
				            "status": "Enabled"
				        },
				        "c": {
				            "name": "c",
				            "package": "c",
				            "version": "1.31.x",
				            "status": "Not Installed"
				        },
				        "d": {
				            "name": "d",
				            "package": "d",
				            "version": "2.0",
				            "status": "Disabled"
				        }
				    }
				};

		var margin = 20;
		
		var x = 10;
		var y = 10;
		var z = 10;
		
		var height = 50;
		var width = 200;
		var depth = 100;
		
		var parent = this;
		
		$.each( cubes, function( key, value ) {
		    console.log( key + ": " + value );
		    // add cube shapes
	        var cube = new THREE.Mesh(new THREE.CubeGeometry(width, height, depth), new THREE.MeshLambertMaterial({ color: 0xFF0000 }));
	        cube.position.x = x;
	        cube.position.y = y;
	        cube.position.z = z;
	        cube.castShadow = cube.receiveShadow = true;
	        console.log(cube);
	        parent.scene.add(cube);
   	        y = y + height + margin;
		});
		
    },
    getRandColor: function() {
        return colors[Math.floor(Math.random() * colors.length)];
    }
};

// Animate the scene
function animate() {
    requestAnimationFrame(animate);
    render();
    update();
}

// Update controls and stats
function update() {
    lesson1.controls.update(lesson1.clock.getDelta());
    lesson1.stats.update();

    // smoothly move the particleLight
    var timer = Date.now() * 0.000025;
    particleLight.position.x = Math.sin(timer * 5) * 300;
    particleLight.position.z = Math.cos(timer * 5) * 300;
}

// Render the scene
function render() {
    if (lesson1.renderer) {
        lesson1.renderer.render(lesson1.scene, lesson1.camera);
    }
}

// Initialize lesson on page load
function initializeLesson() {
    lesson1.init();
    animate();
}

if (window.addEventListener)
    window.addEventListener('load', initializeLesson, false);
else if (window.attachEvent)
    window.attachEvent('onload', initializeLesson);
else window.onload = initializeLesson;
