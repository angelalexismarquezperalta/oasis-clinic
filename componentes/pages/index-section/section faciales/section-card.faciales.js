const section_cards_faciales = document.querySelector('#cards_faciales');

document.addEventListener('DOMContentLoaded', generaSec_SCF);


function generaSec_SCF(){
    const item_cards_facial = document.createElement('div');
    item_cards_facial.innerHTML = `
    <section style="background-color: #F9F9F9; padding-top: 1px ; padding-bottom: 5%;">

    <!--INICIA SECCIÓN TRATAMIENTOS FACIALES-->
    <div style="margin: 0% 7% 0% 7%; margin-top: 5%;">
      <div class="container" style="text-align: center;">
        <p class="subtitle is-1"> TRATAMIENTOS FACIALES</p>
      </div>
      <!--INICIA SEGUNDA SECCIÓN DE CARDS-->
      <div class="columns">
        <div class="column is-one-quarter">
          <!--INICIA CARD-->
          <div class="card card-min card-5">
            <div class="card-content">
              <p class="card-title title-r title">
              Fotorejuvenecimiento
              </p>
            </div>

          </div>
          <!--TERMINA CARD-->
        </div>
        <div class="column is-one-quarter">
          <!--INICIA CARD-->
          <div class="card card-min card-6">
            <div class="card-content">
              <p class="card-title title-r title">
                Despigmentante
              </p>
            </div>
          </div>
          <!--TERMINA CARD-->
        </div>
        <div class="column" style="margin-top: -2.5% ;">
          <!--INICIA CARD-->
          <div class="card card-min card-7">
            <div class="card-content">
              <p class="card-title title-r title">
                Anti-Acne
              </p>
            </div>
          </div>
          <!--TERMINA CARD-->
        </div>



      </div>
      <!--INICIA SEGUNDA SECCIÓN DE CARDS-->
    </div>
    <!--TERMINA SECCIPÓN TRATAMIENTOS FACIALES-->
  </section>
    `
    imprimeSCF(item_cards_facial)
}

function imprimeSCF(componente){
    section_cards_faciales.appendChild(componente);
}