const section_tratamientos_Corporales = document.querySelector(
  "#section_tratamientos_Corporales"
);

document.addEventListener("DOMContentLoaded", generaSTC);

function generaSTC() {
  const section_TC = document.createElement("div");
  section_TC.innerHTML = `
    <div class="container" style="margin-top: 10%;">
 
    <div id="">
      <button class="accordion active">
      Reductivo
        </button>
      <div class="panel" style="max-height: 750px;">
      <div class="columns" name="reductivo">
      <div class="column">
        <img src="/assets/sections/corporal/reductivo.jpg" class="circle" loading="lazy" alt="tratamiento Reductivo">
      </div>
      <div class="column">
        <p class="title is-2 content-space">Reductivo</p>
        <div class="content">
          <p class="content-tratamientos">Disminuye la acumulación de células adiposas y estiliza el contorno de la figura  mediante aparatologia, masajes reductivos y maderoterapia, sin poner en riesgo la salud del paciente, ideal para disminuir esos rollitos de grasa localizadas en: abdomen, cintura, gorditos del brasier, chaparreras, brazos, espalda baja.</p>
        </div>
      </div>
    </div>
      </div>
      
      <button class="accordion">
      Reafirmante
      </button>
      <div class="panel">
      <div class="columns" name="reafirmante">
      <div class="column">
        <p class="title is-2 content-space">Reafirmante</p>
        <div class="content">
          <p class="content-tratamientos">Recupera la firmeza de la piel mediante aparatologia que estimula la producción de colágeno y elastina mejorando la textura y apariencia de la piel de abdomen, brazos, piernas etc. Mediante radiofrecuencia, gimnasia pasiva,  masajes reafirmantes, vendas frías reafirmantes y más. </p>
        </div>
      </div>
      <div class="column">
        <img src="/assets/sections/corporal/page/reafirmante.jpg" class="circle" loading="lazy" alt="tratamiento reafirmante">
      </div>
    </div>
      </div>
      
      <button class="accordion">
      Levantamiento de glúteos
      </button>
      <div class="panel">    
      <div class="columns" name="gluteos">
      <div class="column">
        <img src="/assets/sections/corporal/gluteos.jpg" class="circle" loading="lazy" alt="tratamiento gluteos">
      </div>
      <div class="column">
        <p class="title is-2 content-space">Levantamiento de glúteos</p>
        <div class="content">
          <p class="content-tratamientos">Tratamiento integral que moldea y tonifica los glúteos mediante aparatologia de vanguardia, masajes y maderoterapia logrando así una lipo transferencia manual.</p>
        </div>
      </div>
    </div>
      </div>

      <button class="accordion">
      Celulitis
      </button>
      <div class="panel">    
      <div class="columns" name="celulitis">
      <div class="column">
        <p class="title is-2 content-space">Celulitis</p>
        <div class="content">
          <p class="content-tratamientos">Enfocado en combatir la piel de naranja y mejorar la apariencia de la piel, disminuyendo las células adiposas y reafirmando la piel con la ayuda de equipos de grado médico con el cual verás resultados a partir de la primera sesión. </p>
        </div>
      </div>
      <div class="column">
        <img src="/assets/sections/corporal/page/celulitis.jpg" class="circle" loading="lazy" alt="tratamiento celulitis">
      </div>
    </div>
      </div>
      <button class="accordion">
      Estrías
      </button>
      <div class="panel">
      <div class="columns" name="estrias">
      <div class="column">
        <img src="/assets/sections/corporal/estria.jpg" class="circle" loading="lazy" alt="tratamiento estrias">
      </div>
      <div class="column">
        <p class="title is-2 content-space">Estrías</p>
        <div class="content">
          <p class="content-tratamientos">Disminuye la apariencia de las estrías de cualquier zona del cuerpo.</p>
        </div>
      </div>
    </div>
</div>
  <button class="accordion">
  Depilación
  </button>
  <div class="panel">
  <div class="columns" name="depilacion">
  <div class="column">
    <p class="title is-2 content-space">Depilación</p>
    <div class="content">
      <p class="content-tratamientos">Elimina los bellos del cuerpo mediante la tecnología SHR, disminución a partir
        de la primera sesión</p>
    </div>
  </div>
  <div class="column">
    <img src="/assets/sections/corporal/depilacion.jpg" class="circle" loading="lazy" alt="tratamiento depilacion">
  </div>
</div>
  </div>
      <button class="accordion">
      Drenaje linfático y piernas Cansadas
    </button>
    <div class="panel">
    <div class="columns" name="linfatico">
      <div class="column">
        <img src="/assets/sections/corporal/page/masajes-reductivos.jpg" class="circle" loading="lazy" alt="tratamiento linfatico">
      </div>
      <div class="column">
        <p class="title is-2 content-space">Drenaje linfático</p>
        <div class="content">
          <p class="content-tratamientos">
          Tratamiento que mejora la circulación de la linfa, elimina la hinchazón en las piernas y todo el cuerpo ya que se drenan los líquidos retenidos, depurando el organismo y más.</p>
        </div>
      </div>
    </div>
    </div>
  


    



    <button class="accordion">
      Criolipólisis
    </button>
    <div class="panel">
    <div class="columns" name="linfatico">
      <div class="column">
        <p class="title is-2 content-space">Criolipólisis</p>
        <div class="content">
          <p class="content-tratamientos">Con este procedimiento las células  que forman el tejido adiposo se congelan, se  destruyen y son eliminados del cuerpo de manera eficaz y segura, para ver resultados solo basta con aplicarla una sola vez en la zona por una hora, ideal para personas que no pueden tomar un tratamiento extenso por falta de tiempo y colesterol alto.</p>
        </div>
        
      </div>
      <div class="column">
        <img src="/assets/sections/corporal/Criolipolisis.png" class="circle" loading="lazy" alt="tratamiento linfatico">
      </div>
    </div>
    </div>


    
    <button class="accordion">
    Masaje descontracturante
    </button>
    <div class="panel">
    <div class="columns" name="linfatico">
      <div class="column">
        <img src="/assets/sections/corporal/Masaje descontracturante.png" class="circle" loading="lazy" alt="tratamiento linfatico">
      </div>
      <div class="column">
        <p class="title is-2 content-space">Masaje descontracturante</p>
        <div class="content">
          <p class="content-tratamientos">Tratamiento que ayudara a relajar los músculos eliminando contracturas en espalda, cuello o piernas, causados por estrés o deporte de alto rendimiento.</p>
        </div>
      </div>
      </div>
    </div>
    


     <button class="accordion">
     Mesoterapia virtual 
    </button>
    <div class="panel">
    <div class="columns" name="linfatico">
      <div class="column">
        <p class="title is-2 content-space">Mesoterapia virtual</p>
        <div class="content">
          <p class="content-tratamientos">Mediante aparatologia se infiltran activos de acuerdo a las necesidades de tu piel, contamos con mesoterapia Anti celulitis, reductoras, reafirmantes y más.</p>
        </div>
        
      </div>
      <div class="column">
        <img src="/assets/sections/corporal/page/mesoterapia.jpg" class="circle" loading="lazy" alt="tratamiento linfatico">
      </div>
      </div>
    </div>



    <button class="accordion">
    Masaje relajante
   </button>
   <div class="panel">
   <div class="columns" name="linfatico">
     <div class="column">
       <img src="/assets/sections/corporal/Masaje relajante.png" class="circle" loading="lazy" alt="tratamiento linfatico">
     </div>
     <div class="column">
       <p class="title is-2 content-space">Masaje relajante</p>
       <div class="content">
         <p class="content-tratamientos">Tratamiento enfocado en disminuir la tensión muscular, estrés, cansancio e insomnio, conciente a tu cuerpo con un masaje de cuerpo completo, con aromaterapia y musicoterapia, incluye masaje craneo facial.</p>
       </div>
     </div>
     </div>
   </div>


  
  
        </div>
  

      
    
      
      </div>

    `;

  pintarSC(section_TC);
}

function pintarSC(componente) {
  section_tratamientos_Corporales.appendChild(componente);
}
