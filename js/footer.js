class Footer extends HTMLElement {
    constructor() {
      super();
    }
  

  connectedCallback() {
    this.innerHTML = `
    <footer class="footer">

  <div class="footer__content">
   
        <img src="./assets/logo.svg" alt="logo" class="logo">
        <nav class="footer__nav">
          <ul class="footer__nav-list">
            <li class="footer__nav-item"><a href="./index.html" class="footer__nav-link">home</a></li>
            <li class="footer__nav-item"><a href="./about.html" class="footer__nav-link">about</a></li>
          </ul>
        </nav>
     
        <address class="footer__address">
          987  Hillcrest Lane<br> Irvine, CA<br> California 92714<br> Call Us : 949-833-7432
        </address>
    

    
      <div class="footer__social-media">
        <img src="./assets/icon-facebook.svg" alt="icon-facebook" class="footer__icon">
        <img src="./assets/icon-pinterest.svg" alt="icon-pinterest" class="footer__icon">
        <img src="./assets/icon-twitter.svg" alt="icon-twitter" class="footer__icon">
      </div>
      <p class="footer__copyright">Copyright 2020. All Rights Reserved</p>
    

  </div>

</footer>
    `

  
  }

}


  customElements.define('footer-component', Footer);










