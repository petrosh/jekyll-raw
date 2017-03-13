---
title: CryptoPetrosh
permalink: crypto/
description: Stay safe
js:
  - polyfills/fetch.v2.0.3
  - cryptopetrosh
---
<div id="cryptoinput">
	<a href="http://petrosh.altervista.org/cryptopetrosh/">Original</a>
<p>
<input type="password" id="key" placeholder="key" size="40" autofocus>
</p>

<p>
<textarea id="text" rows="8" cols="80" placeholder="Text"></textarea>
</p>

<button onclick="encrypt();" type="button">ENCRYPT</button>
<button onclick="decrypt();" type="button">DECRYPT</button>

</div>
