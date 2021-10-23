const section_tratamientos_Faciales = document.querySelector('#section_tratamientos_Faciales');

document.addEventListener('DOMContentLoaded', generaSTF);

function generaSTF(){
    const section_TF = document.createElement('div');
    section_TF.innerHTML= `
    <div class="container" style="margin-top: 10%;">




    
    <div id="">
      <button class="accordion active">
          Hidratante
        </button>
      <div class="panel" style="max-height: 750px;">
        <div class="columns" name="hidratante">
          <div class="column ">
            <img src="/assets/sections/faciales/hidratanre.jpg" class="circle" loading="lazy" alt="tratamiento hidratante">
            <p class="title is-2 content-space" align="center">Hidratante</p>
            <p class="content-tratamientos" align="center" >Elimina apariencia de cansancio y deshidratación de la piel y promueve la
              producción de colágeno natural en la piel.</p>
              
          </div>
          <div class="column">
            <p class="title is-2 content-space"></p>
            <div class="content">
              <h3>INCLUYE</h3>
                <ul>
                  <li>Limpieza</li>
                  <li>Exfoliación</li>
                  <li>Shot de ácido hialurónico</li>
                  <li>Mascarilla hidratante con ácido Hialurónico</li>
                  <li>Tónico</li>
                  <li>Protector solar</li>
                  <li>Masaje craneo facial</li>
                </ul>
                
            </div>
          </div>
        </div>
      </div>
      
      <button class="accordion">
        Fotorejuvenecimiento
      </button>
      <div class="panel">
        
        <div class="columns" name="fotoenvegece">
          <div class="column">
            <p class="title is-2 content-space"></p>
            <div class="content">
              <h3>INCLUYE</h3>
              <ul>
                <li>Limpieza</li>
                <li>Exfoliación</li>
                <li>Aplicacion de luz intensa, (SSR)</li>
                <li>Mascarilla de acuerdo a la necesidad de la piel </li>
                <li>Tónico</li>
                <li>Protector solar</li>
                <li>Masaje craneo facial</li>
              </ul>
              
            </div>
          </div>
          <div class="column">
            <img src="/assets/sections/faciales/envejecimiento.jpg" class="circle" loading="lazy" alt="tratamiento fotoenvegecimiento">
            <p class="title is-2 content-space" align="center">Fotorejuvenecimiento</p>
            <p class="content-tratamientos" align="center">Enfocado en estimular la regeneración de la piel estimulando la producción de
              colágeno y elastina con aplicación de luz intensa que ayuda a combatir los signos del envejecimiento.</p>
          </div>
        </div>
  
      </div>
      
      <button class="accordion">
        Antiacne
      </button>
      <div class="panel">
        
        <div class="columns" name="anti-acne">
          <div class="column">
            <img src="/assets/sections/faciales/antiacne.jpg" class="circle" loading="lazy" alt="tratamiento antiacne">
          </div>
          <div class="column">
            <p class="title is-2 content-space" align="center">Anti acne</p>
            <div class="content">
              <p class="content-tratamientos" align="center">Tratamiento especializado en pieles con problemas de acné que ayuda a
                disminuir gradualmente los brotes y poros dilatados dando una apariencia libre de impurezas</p>
            </div>
          </div>
        </div>
        
      </div>
      <button class="accordion">
        Limpieza profunda
      </button>
      <div class="panel">
        
        <div class="columns" name="limpieza">
          <div class="column">
            <p class="title is-2 content-space"></p>
            <div class="content">
              <h3>INCLUYE</h3>
              <ul>
                <li>Limpieza</li>
                <li>Exfoliación</li>
                <li>Extracciones con skin scrub</li>
                <li>Mascarilla purificadora</li>
                <li>Tónico</li>
                <li>Protector solar</li>
                <li>Masaje craneo facial</li>
              </ul>
            </div>
          </div>
          <div class="column">
            <img src="/assets/sections/faciales/limpieza.jpg" class="circle" loading="lazy" alt="tratamiento limpeza">
            <p class="title is-2 content-space" align="center">Limpieza profunda</p>
            <p class="content-tratamientos">Desintoxica la piel y limpia los poros con extracción de impurezas como
              espinillas y puntos negros </p>
          </div>
        </div>
  
      </div>
  
      <button class="accordion">
        Microdermoabrasion
      </button>
      <div class="panel">
        
        <div class="columns" name="micro">
          <div class="column">
            <img src="/assets/sections/faciales/micro.jpg" class="circle" loading="lazy" alt="tratamiento Microdermoabrasion">
            <p class="title is-2 content-space" align="center">Microdermoabrasion</p>
            <p class="content-tratamientos">Elimina celulas muertas y favorece la renovación celular, dejando la piel
              limpia, tersa y radiante </p>
          </div>
          <div class="column">
            <p class="title is-2 content-space"></p>
            <div class="content">
              <h3>INCLUYE</h3>
              <ul>
                <li>Limpieza</li>
                <li>Exfoliación</li>
                <li>Microdermoabrasion mecánica</li>
                <li>Mascarilla de acuerdo a la necesidad de la piel</li>
                <li>Tónico</li>
                <li>Protector solar</li>
                <li>Masaje craneo facial</li>
              </ul>              
            </div>
          </div>
        </div>
  
      </div>
  
      <button class="accordion">
        Despigmentante
      </button>
      <div class="panel">
        
        <div class="columns" name="despigmenta">
          <div class="column">
            <p class="title is-2 content-space"></p>
            <div class="content">
              <h3>INCLUYE</h3>
              <ul>
                <li>Limpieza</li>
                <li>Exfoliación</li>
                <li>Láser despigmentante</li>
                <li>Mascarilla despigmentante</li>
                <li>Tónico</li>
                <li>Protector solar</li>
                <li>Masaje craneo facial</li>
              </ul>              
            </div>
          </div>
          <div class="column">
            <img src="/assets/sections/faciales/despigmentante.jpg" class="circle" loading="lazy" alt="tratamiento despigmentante">
            <p class="title is-2 content-space" align="center">Despigmentante</p>
            <p class="content-tratamientos" align="center">Unifica el tono de piel y disminuye hasta eliminar el melasma o manchas de la
              piel causadas por el sol o la edad.</p>
          </div>
        </div>
  
      </div>
      </div>
      
      
    
      
      </div>

    `

    pintarSF(section_TF)
}

function pintarSF(componente){
    section_tratamientos_Faciales.appendChild(componente)
}