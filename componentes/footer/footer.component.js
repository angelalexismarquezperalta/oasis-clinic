const footer = document.querySelector('#footer');

document.addEventListener('DOMContentLoaded', generarFooter)

function generarFooter(){
    const item_footer = document.createElement('div');
    item_footer.innerHTML = `
    <footer class="footer" style="background-color: #F1ECC3;">
    <div class="content has-text-centered">
      <div class="container">
        <div class="columns">
          <div class="column">
            <p class="title-footer"><img src="../assets/LOGO/500x500logo_web.png" alt="LOGO GESEM" loading="lazy" style="width: 100% ;"></p>
            <div>
            "GESEM Clínica & Spa" es un Lugar Familiar, en el cual, nunca discriminamos  por raza, credo, edad, sexo ni posición social, todas las personas siempre son <strong>BIENVENIDAS</strong> y ofrecemos nuestra mejor actitud y servicio.
            </div>
            <br>
            <a href="../assets/sections/legal/Aviso de Privacidad GESEM.pdf" target="new" style="color:black" >Conoce más sobre nuestro "Aviso de privacidad".</a>
          </div>
          <div class="column">
            <p class="title-footer">SERVICIOS</p>
            <div class="align-footer">
            <ul>
              <li><a class="link-footer" href="/pages/corporal.html">Masajes</a></li>
              <li><a class="link-footer" href="/pages/corporal.html">Tratamientos</a></li>
              <li><a class="link-footer" href="/pages/facial.html">Faciales</a></li>
              <li><a class="link-footer" href="/pages/corporal.html">Sesión Relajación</a></li>
              <li><a class="link-footer" href="/pages/facial.html">Depilación</a></li>
            </ul>
            </div>

          </div>
          <div class="column">
            <p class="title-footer">SECCIONES</p>
            <div class="align-footer">
            <ul>
              <li><a class="link-footer" href="../index.html">Inicio</a></li>
              <li><a class="link-footer" href="/pages/nosotros.html">Nosotros</a></li>
              <li><a class="link-footer" href="/pages/ubicacion.html">Ubicación</a></li>
              <li><a class="link-footer" href="/pages/facial.html">Tratamientos</a></li>
              <li><a class="link-footer" href="/pages/facial.html">Facial</a></li>
              <li><a class="link-footer" href="/pages/corporal.html">Corporal</a></li>
            </ul>
            </div>
          </div>
          <div class="column">
            <p class="title-footer">CONTACTO</p>
            <div class="align-footer">
            <ul>
              <li><a class="link-footer" href="./pages/ubicacion.html"><i class="fas fa-home"></i> CDMX, México</a></li>
              <li><p class="link-footer"><i class="fas fa-envelope"></i> <a class="link-footer" href="mailto:gesemclinicayspa@gmail.com"> gesemclinicayspa@gmail.com  </a>  </p></li>
              <li><a class="link-footer" href="tel:+5570307761"><i class="fas fa-phone-alt"></i> 55 7030 7761 </a></li>
              <li><a class="link-footer" href="tel:+5571083274"><i class="fab fa-whatsapp"></i> 55 7108 3274 </a></li>
              <li><a class="link-footer" href="tel:5582580457"><i class="fab fa-whatsapp"></i> 55 8258 0457 </a></li>
            </ul>
            </div>
          </div>
        </div>
      </div>


    </div>

  </footer>
  <div class="fo-footer" style="background-color: #515E63;">
    <p style="color: white; text-align: center; padding: 1vw;"> © 2021 Copyright: GESEM CLÍNICA & SPA </p>
  </div>


    `
    imprimeFooter(item_footer)
}

function imprimeFooter(componente){
    footer.appendChild(componente)
}