const navbar = document.querySelector('#navbar');

document.addEventListener('DOMContentLoaded', 
    generaNav,);

function generaNav(){
    const item_nav = document.createElement('div');
    item_nav.innerHTML = `
    <nav class="navbar is-transparent" role="navigation" aria-label="main navigation" >
    <div class="navbar-brand" >
      <a class="navbar-item" href="../index.html" style="padding: 0px"  >
        <img src="../assets/LOGO/500x500logo_web.png"  style="height: 50%;" loading="lazy" alt="LOGO GESEM" >
      </a> 
      
      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        
      </div>
      <div class="navbar-end">
        <a class="navbar-item" href="../index.html">
            Inicio
          </a>
          <a class="navbar-item" href="/pages/nosotros.html">
            Nosotros
          </a>
          <a class="navbar-item" href="/pages/ubicacion.html">
            Ubicación
          </a>
          <div class="navbar-item has-dropdown is-hoverable">
            <p class="navbar-link">
              Tratamientos
            </p>
            <div class="navbar-dropdown">
              <a class="navbar-item" href="/pages/facial.html">
                Facial
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item" href="/pages/corporal.html">
                Corporal
              </a>
            </div>
          </div>
      </div>
      
    </div>
</nav>
<hr style="margin-top: 0px;">
`
    imprimeNav(item_nav)
}

function imprimeNav(component){
    navbar.appendChild(component);
    comportamientoNav
}

function comportamientoNav(){
    // Get all "navbar-burger" elements
const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

// Check if there are any navbar burgers
if ($navbarBurgers.length > 0) {

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });
}
}