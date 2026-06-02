(function() {
  function init() {
    // ── Google Analytics (GA4) ── Replace GA_MEASUREMENT_ID with your real ID
    var gaId = 'GA_MEASUREMENT_ID';
    if (gaId !== 'GA_MEASUREMENT_ID') {
      var g1 = document.createElement('script');
      g1.async = true;
      g1.src = 'https://www.googletagmanager.com/gtag/js?id=' + gaId;
      document.head.appendChild(g1);
      var g2 = document.createElement('script');
      g2.text = 'window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag("js",new Date());gtag("config","' + gaId + '");';
      document.head.appendChild(g2);
    }

    // ── Path helpers ──
    var path = location.pathname;
    var base = path.includes('/blog/posts/') ? '../../' :
               (path.includes('/tools/') || path.includes('/blog/')) ? '../' :
               '';
    var home = base + 'index.html';
    var blog = path.includes('/blog/posts/') ? '../index.html' :
               path.includes('/tools/') ? '../blog/index.html' :
               path.includes('/blog/') ? 'index.html' :
               'blog/index.html';
    var logoImg = base + 'images/wayhum.jpg';

    // ── Header ──
    var h = document.querySelector('.site-header');
    if (h) {
      h.innerHTML =
        '<div class="container">' +
        '<a href="' + home + '" class="logo"><img src="' + logoImg + '" alt="Wayhum" class="logo-img"></a>' +
        '<nav class="header-nav">' +
          '<a href="' + blog + '">Blog</a>' +
        '</nav>' +
        '</div>';
    }

    // ── Footer ──
    var f = document.querySelector('.site-footer');
    if (f) {
      f.innerHTML =
        '<div class="container">' +
        '<p>&copy; ' + new Date().getFullYear() + ' ToolBox. All tools run locally in your browser.</p>' +
        '<p class="tagline">Your files are never uploaded. 100% private.</p>' +
        '</div>';
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
