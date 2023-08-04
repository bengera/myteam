class Navigation extends HTMLElement {
    constructor() {
      super();
    }
  

  connectedCallback() {
    this.innerHTML = `
    <div class="navigation-container">
             
    <img src="./assets/logo.svg" alt="logo" class="logo">
    <button class="hamburger-menu"></button>

    <nav class="nav-primary">
     <ul class="nav-primary__list">
       <li class="nav-primary__list-item"><a href="#" class="nav-primary__list-link">home</a></li>
       <li class="nav-primary__list-item"><a href="#" class="nav-primary__list-link">about</a></li>
     </ul>
     <button class="nav-primary__btn-contact">contact us</button>
     <!-- <img src="/assets/bg-pattern-about-1-mobile-nav-1.svg" alt=""> -->
    </nav>
   
 </div> <!--navigation-container end-->
    `

  
  }

}


  customElements.define('navigation-component', Navigation);