const carusel = document.querySelector('#carusel')

document.addEventListener('DOMContentLoaded', generaCarusel)


function generaCarusel(){
    const item_carusel = document.createElement('div');
    item_carusel.innerHTML = `
    <section class="section">
    <div class="container-sm">
      <!-- Carousel wrapper -->
      <div id="carouselExampleCaptions" class="carousel slide" data-mdb-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-mdb-target="#carouselExampleCaptions" data-mdb-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-mdb-target="#carouselExampleCaptions" data-mdb-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-mdb-target="#carouselExampleCaptions" data-mdb-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            
          <img src="assets/promos/1.jpeg" class="d-block w-100" loading="lazy" alt="promoción 1" style="width: 100%;" />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
          <div class="carousel-item">
            
          <img src="assets/promos/2.jpeg" class="d-block w-100" loading="lazy" alt="promo 2" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div class="carousel-item">
            
          <img src="assets/promos/3.jpeg" class="d-block w-100" loading="lazy" alt="promo 3" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleCaptions"
          data-mdb-slide="prev"> 
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden"><i class="fas fa-chevron-left fa-3x"></i></span>
        </button>
        <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleCaptions"
          data-mdb-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden"><i class="fas fa-chevron-right fa-3x"></i></span>
        </button>
      </div>
    </div>
  </section>
    `
    imprimeCarusel(item_carusel)
}

function imprimeCarusel(component){
    carusel.appendChild(component)
}