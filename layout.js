(function() {
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

  // ── Header ──
  var h =
    '<header class="site-header">' +
    '<div class="container">' +
    '<a href="/" class="logo"><span class="logo-icon">&#x1F6E0;</span>ToolBox</a>' +
    '<nav class="nav">' +
    '<a href="/">Home</a>' +
    '<a href="/#tools">All Tools</a>' +
    '</nav>' +
    '</div>' +
    '</header>';

  // ── Footer ──
  var f =
    '<footer class="site-footer">' +
    '<div class="container">' +
    '<p>&copy; ' + new Date().getFullYear() + ' ToolBox. All tools run locally in your browser.</p>' +
    '<p class="tagline">Your files are never uploaded. 100% private.</p>' +
    '</div>' +
    '</footer>';

  var elH = document.getElementById('site-header');
  var elF = document.getElementById('site-footer');
  if (elH) elH.outerHTML = h;
  if (elF) elF.outerHTML = f;
})();
