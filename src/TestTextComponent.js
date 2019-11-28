export default class TestTextComponent extends HTMLElement {
    constructor() {
      super(); 
      this.shadow = this.attachShadow({ mode: 'open'});
      this.shadow.innerHTML = `<div><b>Default text</div>`; 
    }
  
    testChangeTextMethod() {
      console.log('Testing method in Child - Web Component')
      this.shadow.innerHTML = `<div><b>Sample text after calling this method from parent</b></div>`
    }
  }
  
  window.customElements.define('test-text-component', TestTextComponent);