var vrHomePage = vRViewPlayer('#tour', {
    image: 'assets/jasmin.jpg',
    is_stereo: false,
});
window.addEventListener('load', vrHomePage);

myPicture.on('ready', function(event) {
 myPicture.addHotspot('creating-hotspots-1', {
     pitch: 0,
     yaw: 0,
     radius:0.10,
     distance: 1
 });
});

