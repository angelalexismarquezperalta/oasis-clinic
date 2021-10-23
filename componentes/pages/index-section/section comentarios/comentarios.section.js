const section_comentarios = document.querySelector('#section_comentarios')


document.addEventListener('DOMContentLoaded', generarSec_COM)

function generarSec_COM(){
    const items_comentarios = document.createElement('div');
    items_comentarios.innerHTML = `
    <!--INICIA SECCIÓN COMENTARIOS-->
  <div style="margin:7%;">

    <div class="columns">
      <div class="column">
        <!--INICIA Comentario 1-->
        <div class="card">
          <div class="card-content">
            <p class="subtitle is-6" style="color: #FFD523; text-align: center;"> <i class="fas fa-star fa-2x"></i> <i
                class="fas fa-star fa-2x"></i> <i class="fas fa-star fa-2x"></i> <i class="fas fa-star fa-2x"></i> <i
                class="fas fa-star fa-2x"></i> </p>
            <div class="media">

              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="assets/sections/inicio/1.png" loading="lazy" alt="Comentario 3">
                </figure>
              </div>

              <div class="media-content">
                <p class="title is-4">Guillermo Felipe </p>
              </div>
            </div>

            <div class="content" style="color: #334257;">
              Buen servicio, el catálogo de servicios es muy completo.
              Eugenia es excelente masajista y la atención personalizada le da un plus a la experiencia
              <br>
              <time style="color: #476072;" datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>
        <!--TERMINA Comentario 1-->
      </div>
      <div class="column">
        <!--INICIA Comentario 2-->
        <div class="card">
          <div class="card-content">
            <p class="subtitle is-6" style="color: #FFD523; text-align: center;"> <i class="fas fa-star fa-2x"></i> <i
                class="fas fa-star fa-2x"></i> <i class="fas fa-star fa-2x"></i> <i class="fas fa-star fa-2x"></i> <i
                class="fas fa-star fa-2x"></i> </p>
            <div class="media">

              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="assets/sections/inicio/2.png" loading="lazy" alt="comentario 1">
                </figure>
              </div>

              <div class="media-content">
                <p class="title is-4">Aremy Rergis</p>
              </div>
            </div>

            <div class="content" style="color: #334257;">
              Buenísima atención. Todas las chicas son maravillosas con el masaje relajante.
              <br>
              <br>
              <time style="color: #476072;" datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>
        <!--TERMINA Comentario 2-->
      </div>
      <div class="column">
        <!--INICIA Comentario 3-->
        <div class="card">
          <div class="card-content">
            <p class="subtitle is-6" style="color: #FFD523; text-align: center;"> <i class="fas fa-star fa-2x"></i> <i
                class="fas fa-star fa-2x"></i> <i class="fas fa-star fa-2x"></i> <i class="fas fa-star fa-2x"></i> <i
                class="fas fa-star fa-2x"></i> </p>
            <div class="media">

              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="assets/sections/inicio/3.png" loading="lazy" alt="Comentario 2">
                </figure>
              </div>

              <div class="media-content">
                <p class="title is-4">Marleen Gabriela</p>
              </div>
            </div>

            <div class="content" style="color: #334257;">
              Que decir excelente lugar te atienden super bien te atienden genial y los resultados visibles lo
              recomiendo ampliamente y a la terapeuta eugenia super.
              <br>
              <time style="color: #476072;" datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>
        <!--TERMINA Comentario 3-->
      </div>

    </div>
  </div>
  <!--TERMINA SECCIÓN COMENTARIOS-->`
  imprime_COM(items_comentarios)
}

function imprime_COM(componente){
    section_comentarios.appendChild(componente)   
}