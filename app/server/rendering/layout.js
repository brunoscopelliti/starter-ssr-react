export default (html, meta, preloadedState) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${meta.title}</title>
  <link href="https://fonts.googleapis.com/css?family=Inconsolata:400,700&amp;subset=latin-ext" rel="stylesheet">
  <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
  <link rel="stylesheet" href="/css/index.css"/>
</head>
<body>
  <div id="root">${html}</div>
  <div id="popup"></div>
  <script type="text/javascript">
    // WARNING: See the following for security issues around embedding JSON in HTML:
    // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, "\\u003c")};
  </script>
  <script src="/js/vendor.js" type="text/javascript"></script>
  <script src="/js/main.js" type="text/javascript"></script>
</body>
</html>
`.trim();
