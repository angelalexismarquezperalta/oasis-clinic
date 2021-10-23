const primera_seccion_cards = document.querySelector("#cards_first");

document.addEventListener("DOMContentLoaded", generaSec_SCP);

function generaSec_SCP() {
  const item_spc = document.createElement("div");
  item_spc.innerHTML = `
    <section class="second-sectior content">
    <!--INICIA TEST CONTAINER-->
    <div style="margin: 0% 7% 0% 7%;">

      <div class="columns">
        <div class="column is-three-fifths">
          <!--INICIA CARD-->
          <div class="card card-1">
            <div class="card-content">
              <div>
                <p class="card-title title-r title">
                  Masajes
                </p>
              </div>

              <p class="subtitle" style="margin-top: 50%">

              </p>
            </div>
            <div class="columns" align="center">
            </div>
            <!-- <footer class="card-footer">
                  <p class="card-footer-item">
                    <i class="fas fa-share-alt"></i> 
                    <a class="button is-link is-inverted">FACEBOOK</a>
                  </p>
                  <p class="card-footer-item">
                    <button class="button btn-card is-medium is-warning is-active">Comienza Ahora !</button>
                  </p>
                </footer> -->
          </div>
          <!--TERMINA CARD-->
        </div>
        <div class="column is-two-fifths">
          <!--INICIA CARD-->
          <div class="card card-2">
            <div class="card-content">
              <p class="card-title title-r title">
                Tratamientos
              </p>
            </div>
          </div>
          <!--TERMINA CARD-->

          <!--INICIA SUBSECCIÓN CARD-->
          <div class="columns">
            <div class="column is-half">
              <!--INICIA CARD-->
              <div class="card card-min card-3">
                <div class="card-content">
                  <p class="card-title title-r title">
                    Faciales
                  </p>
                </div>
              </div>
              <!--TERMINA CARD-->
            </div>
            <div class="column is-half">
              <!--INICIA CARD-->
              <div class="card card-min card-4">
                <div class="card-content">
                  <p class="card-title title-r title">
                    Sesión de Relajación
                  </p>
                </div>
              </div>
              <!--TERMINA CARD-->
            </div>
          </div>
          <!--TERMINA SUBSECCIÓN CARD-->
        </div>
      </div>


    </div>
    </div>
    <!--TERMINA TEST CONTAINER-->

    </div>

  </section>
    `;
  imprimeSCP(item_spc);
}

function imprimeSCP(componente) {
  primera_seccion_cards.appendChild(componente);
}
