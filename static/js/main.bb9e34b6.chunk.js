(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{14:function(e,n,t){},15:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t(1),r=t.n(i),s=t(4),o=t.n(s),l=(t(14),t(5)),c=t(6),u=t(8),d=t(7),m=(t(15),t(3)),p=t.n(m);p.a.setOptions({breaks:!0});var h=function(e){Object(u.a)(t,e);var n=Object(d.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=n.call(this,e)).state={markdown:"",input:g,output:""},a}return Object(c.a)(t,[{key:"handleChange",value:function(e){var n=e.target.value;this.setState({input:n})}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{className:"title",children:"React Markdown Previewer"}),Object(a.jsxs)("div",{className:"input",children:[Object(a.jsx)("label",{htmlFor:"editor",children:"Ingrese el texto markdown"}),Object(a.jsx)("textarea",{value:this.state.input,id:"editor",onChange:this.handleChange.bind(this)})]}),Object(a.jsx)("h2",{className:"preview",children:"Previsualizacion"}),Object(a.jsx)("div",{id:"preview",className:"output",dangerouslySetInnerHTML:{__html:p()(this.state.input)}})]})}}]),t}(i.Component),g="# T\xedtulo\n## Subt\xedtulo\nEste es un ejemplo de texto que da entrada a una lista gen\xe9rica de elementos:\n- Elemento 1\n- Elemento 2\n- Elemento 3\n\nAl momento de ser interpretado pasan a ser c\xf3digo **HTML**:  \n\n    <ul>  \n      <li>Elemento 1</li>  \n    </ul>\n\nUsa las etiquetas `<ul></ul>` para generar la lista gen\xe9rica.  \n\nEsta seria un cita:  \n> L\xednea de citas textuales,\n> segunda l\xednea de citas textuales.\n\nTambi\xe9n a\xf1adiendo im\xe1genes:\n\n\n![Logo de Ej\xe9mplo](https://via.placeholder.com/150.png?text=PNG+Example)\n\n\nAl texto en Markdown puedes a\xf1adirle formato como **negrita** o *cursiva* de una manera muy sencilla. \n\nPara mas informaci\xf3n se puede ingresar a *[Gu\xeda de Markdown](https://www.markdownguide.org)*.",j=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(n){var t=n.getCLS,a=n.getFID,i=n.getFCP,r=n.getLCP,s=n.getTTFB;t(e),a(e),i(e),r(e),s(e)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(h,{})}),document.getElementById("root")),j()}},[[16,1,2]]]);
//# sourceMappingURL=main.bb9e34b6.chunk.js.map