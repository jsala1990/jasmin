var vrHomePage = vRViewPlayer('#tour', {
    image: 'assets/jasmin.jpg',
    is_stereo: false,
});

window.addEventListener('load', vrHomePage);

vrHomePage.on('ready', function(event) {
    vrHomePage.addHotspot('creating-hotspot-1', {
        pitch: 0,
        yaw: 0,
        radius:0.10,
        distance: 1
    });
    vrHomePage.addHotspot('creating-hotspot-2', {
         pitch: 10,
         yaw: 40,
         radius:0.10,
         distance: 1
    }); 
    
    vrHomePage.addHotspot('creating-hotspot-3', {
        pitch: 67,
        yaw: 100,
        radius:0.10,
        distance: 1
    });
  
    vrHomePage.addHotspot('creating-hotspot-4', {
        pitch: 80,
        yaw: 120,
        radius:0.10,
        distance: 1
    });
    vrHomePage.addHotspot('creating-hotspot-5', {
        pitch: 15,
        yaw: 20,
        radius:0.10,
        distance: 1
    });
});

