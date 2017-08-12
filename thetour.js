var vrHomePage = vRViewPlayer('#tour', {
    image: 'assets/jasmin.jpg',
    is_stereo: false,
});
window.addEventListener('load', vrHomePage);

vrHomePage.on('ready', function(event) {
 vrHomePage.addHotspot('creating-hotspots-1', {
     pitch: 0,
     yaw: 0,
     radius:0.10,
     distance: 1
 });
});

vrHomePage.on('ready', function(event) {
 console.log('register all clicks events');
  if (event.id == 'creating-hotspot-1) {
  thetouralert("welcome to the upper west side")
}
});
