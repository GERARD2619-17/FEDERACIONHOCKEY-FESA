if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("SW fue Regsitrado!!");
        console.log(registration);
    }).catch(error => {

        console.log("el registro del sw Fallo!!");
        console.log(error);

    });
}
