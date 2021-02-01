import React, { Component } from 'react';
import './App.css';
// import Markdown from 'react-remarkable';
import marked from 'marked';
// const marked = require('marked');

marked.setOptions({breaks:true});

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      markdown: '',
      input: demo,
      output: '',
    }
  }

  handleChange(e) {
    let entrada = e.target.value;
    // let str = entrada.replace(("\n"), '  \n', entrada);
    this.setState({ input: entrada });
  }


  render() {
    return (
      <div className="App">
        <h1 className='title' >React Markdown Previewer</h1>
        <div className='input'>
          <label htmlFor='editor'>Ingrese el texto markdown</label>
          <textarea value={this.state.input} id='editor'
          onChange={this.handleChange.bind(this)}> 
          </textarea>
        </div>
        <h2 className='preview'>Previsualizacion</h2>
        <div id='preview' className='output' dangerouslySetInnerHTML={{__html:marked(this.state.input)}}>
        </div>
      </div>
    );
  }
}

const demo = `# Título
## Subtítulo
Este es un ejemplo de texto que da entrada a una lista genérica de elementos:
- Elemento 1
- Elemento 2
- Elemento 3

Al momento de ser interpretado pasan a ser código **HTML**:  

    <ul>  
      <li>Elemento 1</li>  
    </ul>

Usa las etiquetas \`<ul></ul>\` para generar la lista genérica.  

Esta seria un cita:  
> Línea de citas textuales,
> segunda línea de citas textuales.

También añadiendo imágenes:


![Logo de Ejémplo](https://via.placeholder.com/150.png?text=PNG+Example)


Al texto en Markdown puedes añadirle formato como **negrita** o *cursiva* de una manera muy sencilla. 

Para mas información se puede ingresar a *[Guía de Markdown](https://www.markdownguide.org)*.`;