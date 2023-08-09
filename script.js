if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
        .then(respuesta => console.log('se registro'))
        .catch(respuesta => console.log('No se registro'))
}else{
    console.log('No soporta service worker')
}