AFRAME.registerComponent('fish', {
    schema: {
      count: { type: 'int', default: 10 }
    },
    init: function() {
      const scene = this.el.sceneEl;
      const fishCount = this.data.count;
      for (let i = 0; i < fishCount; i++) {
        const fish = document.createElement('a-entity');
        fish.setAttribute('gltf-model', 'url-to-fish-model.gltf'); // Add your fish model URL
        fish.setAttribute('position', {
          x: Math.random() * 10 - 5,
          y: Math.random() * 2 + 1,
          z: Math.random() * 10 - 5
        });
        fish.setAttribute('animation-mixer', '');
        scene.appendChild(fish);
      }
    }
  });
  