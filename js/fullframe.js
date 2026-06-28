(function () {
  var f = document.getElementById('step-iframe');
  if (!f) return;
  f.src = f.dataset.src;
  function pin() {
    var nav = document.querySelector('.navbar');
    var navH = nav ? nav.getBoundingClientRect().bottom : 64;
    f.style.position    = 'fixed';
    f.style.top         = navH + 'px';
    f.style.left        = '0';
    f.style.right       = '0';
    f.style.bottom      = '0';
    f.style.width       = '100vw';
    f.style.height      = (window.innerHeight - navH) + 'px';
    f.style.maxWidth    = 'none';
    f.style.aspectRatio = 'auto';
    f.style.margin      = '0';
    f.style.border      = 'none';
    f.style.display     = 'block';
    f.style.zIndex      = '1';
  }
  pin();
  window.addEventListener('resize', pin);
})();
