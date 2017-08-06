---
title: MathJax
description: Beautiful math in all browsers
permalink: mathjax/
js_absolute: https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-MML-AM_CHTML
---

<script type="text/x-mathjax-config">
  MathJax.Hub.Config({ TeX: { equationNumbers: {autoNumber: "AMS"} } });
	MathJax.Hub.Queue(function () { document.querySelector("article").style.visibility = "initial"; });
</script>

<style>
article { visibility: hidden; }
.mjx-chtml { background-color: oldlace; }
</style>

**Table of contents**

* toc
{:toc}

# Start

**Include in page front matter as `js_absolute`**

```
https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-MML-AM_CHTML
```

**Highlight renders**

```css
.mjx-chtml { background-color: oldlace; }
```

**Hide until render is done**

```css
article { visibility: hidden; }
```

```html
<script type="text/x-mathjax-config">
  MathJax.Hub.Queue(function () { document.querySelector("article").style.visibility = "initial"; });
</script>
```

# Syntax `$$`

- **Inline mode** `$$...$$` or `\\(...\\)` $$x=y$$.
- **Display mode** (no numbering)
	- Newline before and after `$$...$$`
	- `\\[...\\]`
	- `\begin{equation\*}...\end{equation\*}` \begin{equation\*}z=\pi\end{equation\*}

# Equations automatic numbering

Works with `\begin{equation}...\end{equation}`

- `\label{...}` used to reference.
- `\ref{...}` replaced with equation number anchor link $$\ref{ciao}$$.
- `\eqref{...}` replaced with parenthesis equation number anchor link $$\eqref{ciao}$$.

**Configuration**

```html
<script type="text/x-mathjax-config">
  MathJax.Hub.Config({ TeX: { equationNumbers: {autoNumber: "AMS"} } });
</script>
```

**Example**

\begin{equation}w=\delta\label{ciao}\end{equation}

# Greek letters

- **Lowercase** `\alpha, \beta, …, \omega`: $$\alpha, \beta, …, \omega$$
- **Uppercase** `\Gamma, \Delta, …, \Omega`: $$\Gamma, \Delta, …, \Omega$$

# Superscripts `^` and Subscripts `_`

-	`x_i^2` gives $$x_i^2$$
- `\log_2 x` gives $$\log_2 x$$

# Groups `{...}`

Single symbol or formula inside curly braces.

- `x_{i^2}` gives $$x_{i^2}$$

# Fractions

`frac` applies to the next two groups.

- `\frac ab` $$\frac ab$$
- `\frac{a+1}{b+1}` $$\frac{a+1}{b+1}$$
- `{a+1 \over b+1}` $${a+1 \over b+1}$$

# Fonts

- Sans serif $$\mathsf{mathsf}$$
- Typewriter $$\mathtt{mathtt}$$

# Spaces

`quad` is space equal to the current font size.

- $$a\!b$$ Negative `\!` -3/18 of a quad
- $$ab$$ Default
- $$a\,b$$ Small `\,` 3/18 of a quad
- $$a\:b$$ Medium `\:` 4/18 of a quad
- $$a\;b$$ Big `\;` 5/18 of a quad
- $$a\quad b$$ `\quad`
- $$a\qquad b$$ `\qquad` two quads

# Boxed

`$$\boxed{\operatorname{I'm\,boxed}}$$` gives $$\boxed{\operatorname{I'm\,boxed}}$$
