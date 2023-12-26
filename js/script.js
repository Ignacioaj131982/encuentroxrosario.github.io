function activarAnimacion() {
    var elemento1 = document.querySelector('.encontrarnos');
    var elemento2 = document.querySelector('.barrioxbarrio')
    elemento1.classList.toggle('animado');
    elemento2.classList.toggle('animado');
}

const imagen1 = document.getElementById('imagen1');
const imagen2 = document.getElementById('imagen2');

const cargarImagen = (entradas, observador) =>  {
    //console.log(entradas)
    //console.log(observador);
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visible');
        } else {
            entrada.target.classList.remove('visible');

        }
    });
}

const observador = new IntersectionObserver(cargarImagen, {
    root: null,
    rootMargin: '0px', //'0px 0px 0px 0px' si queres que se active la funcion con otro margen que no sea el de la pantalla
    threshold: 1.0 //quiero que ejecute el codigo cuando la imagen esta completa en el viewport
});

observador.observe(imagen1);
observador.observe(imagen2);









