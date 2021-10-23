const section_card_corporal = document.querySelector('#cards_corporales');

document.addEventListener('DOMContentLoaded', generaSec_SCC);


function generaSec_SCC(){
    const item_cards_corporal = document.createElement('div');
    item_cards_corporal.innerHTML = `
    
  <section style="background-color: #FDFAF6;">

  <!--INICIA SECCIÓN TRATAMIENTOS FACIALES-->
  <div style="margin: 0% 7% 0% 7%; margin-top: 5%;">
    <div class="container" style="text-align: center;">
      <p class="subtitle is-1"> TRATAMIENTOS CORPORALES</p>
    </div>
    <!--INICIA SEGUNDA SECCIÓN DE CARDS-->
    <div class="columns">
      <div class="column is-one-third"  style="margin-top: -0.8% ;">
        <!--INICIA CARD-->
        <div class="card card-min card-8">
          <div class="card-content">
            <p class="card-title title-r title">
              Reductivos
            </p>
          </div>
        </div>
        <!--TERMINA CARD-->
      </div>
      <div class="column is-two-fifths" style="margin-top: -1.5% ;">
        <!--INICIA CARD-->
        <div class="card card-min card-9">
          <div class="card-content">
            <p class="card-title title-r title">
              Levantamiento de Glúteos
            </p>
          </div>
        </div>
        <!--TERMINA CARD-->
      </div>
      <div class="column is-one-quarter" style="margin-top: 0% ;">
        <!--INICIA CARD-->
        <div class="card card-min card-10">
          <div class="card-content">
            <p class="card-title title-r title">
              Estrías
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
    imprimeSCC(item_cards_corporal)
}

function imprimeSCC(componente){
    section_card_corporal.appendChild(componente)
}