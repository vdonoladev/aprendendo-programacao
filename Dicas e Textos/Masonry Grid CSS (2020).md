- Pinterest style

## New CSS Grid Specification

CSS Grid Layout Module Level 3
[https://drafts.csswg.org/css-grid-3/](https://drafts.csswg.org/css-grid-3/)

Não use em produção, pois ainda está em fase de testes

Use o Firefox Nightly 
[https://www.mozilla.org/pt-BR/firefox/channel/desktop/](https://www.mozilla.org/pt-BR/firefox/channel/desktop/)

## Bora Codar

- HTML

## Como fazer sem a nova feature

```css
body {
  background-color: #272527;
}

img {
  width: 100%;
  border-radius: 4px;
}

figure {
  margin: 0;
  display: flex;
  margin-bottom: 10px;
  break-inside: avoid;
}

.container {
  column-count: 5;
  column-gap: 10px;
}
```

---

## Como fazer com a nova feature

Somente funciona no Firefox Nightly

```css
.container {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: masonry;
}
```

### Possibilidades

Posicionamento no eixo

```css
.container {
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr [box-start] 1fr 1fr [box-end] 1fr;
  grid-template-rows: masonry;
}

.positioned {
  grid-column: box-start / box-end;
  border: 5px solid white;
}
```

Landscape

```css
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: masonry;
  gap: 10px;
}

.landscape {
  grid-column-end: span 2;
}
```

## Contribuição

Você poderá contribuir para o desenvolvimento dessa feature

[https://github.com/w3c/csswg-drafts/issues/](https://github.com/w3c/csswg-drafts/issues/)

## Code Reference

[https://drafts.csswg.org/css-grid-3/](https://drafts.csswg.org/css-grid-3/)

[https://www.smashingmagazine.com/native-css-masonry-layout-css-grid/](https://www.smashingmagazine.com/native-css-masonry-layout-css-grid/)