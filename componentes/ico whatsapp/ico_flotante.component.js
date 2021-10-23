const burble_whatsapp = document.querySelector('#burble_whatsapp');

document.addEventListener('DOMContentLoaded', generaBurbleWAP);

function generaBurbleWAP(){
    const item_wha = document.createElement('div');
    item_wha.innerHTML = `
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <a href="https://api.whatsapp.com/send?phone=5215582580457&text=Hola%20!%0AEstoy%20interesado%2C%20me%20podr%C3%ADas%20apoyar%3F%20" rel="noreferrer" class="float" target="_blank">
    <i class="fa fa-whatsapp my-float"></i>
    </a>
    `
    imprimeIconWha(item_wha);
}

function imprimeIconWha(component){
    burble_whatsapp.appendChild(component);
}