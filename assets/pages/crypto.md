---
title: CryptoPetrosh
permalink: crypto/
description: Stay safe
js:
  - polyfills/fetch.v2.0.3
  - polyfills/clipboard.v1.6.1.min
  - cryptopetrosh
---
<div id="cryptoinput">
<p><a href="http://petrosh.altervista.org/cryptopetrosh/">Original</a> is safer.</p>
<p>
<input type="password" id="key" placeholder="key" size="40" autofocus>
</p>
<p>
<textarea id="text" rows="8" cols="80" placeholder="Text"></textarea>
</p>
<button onclick="reset();" type="button">RESET</button>
<button onclick="encrypt();" type="button">ENCRYPT</button>
<button onclick="decrypt();" type="button">DECRYPT</button>
<button type="button" data-clipboard-target="#text">COPY TO CLIPBOARD</button>
</div>

{% include show-page-scripts.html %}
