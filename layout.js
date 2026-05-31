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
})();
