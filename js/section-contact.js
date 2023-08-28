class Contact extends HTMLElement {
    constructor() {
      super();
    }
  

  connectedCallback() {
    this.innerHTML = `
    <section class="contact">
  <div class="contact__left-content">
  <h2 class="contact__heading">Ready to get started?</h2>
</div>
<div class="contact__right-content">
<a href="./contact.html" class="contact__btn-contact">contact us</a>
  
</div>
</section>
    `

  
  }

}


  customElements.define('contact-component', Contact);










