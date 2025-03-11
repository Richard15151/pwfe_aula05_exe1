function mudaFoto(item){
    let logo = document.getElementById('icone')
    if (item == 1){
        logo.src="assets/img/computadores.png";
        console.log("Logo mudou para computadores!")
    }else if (item == 2){
        logo.src="assets/img/videogames.png";
        console.log("Logo mudou para vídeo games!")
    }else if (item == 3){
        logo.src="assets/img/celulares.png";
        console.log("Logo mudou para celulares!")
    }else if (item == 4){
        logo.src="assets/img/contato.png";
        console.log("Logo mudou para contato!")
    }else if (item == 5){
        logo.src="assets/img/quemsomos.png";
        console.log("Logo mudou para quem somos!")
    }else if (item == 6){
        logo.src="assets/img/principal.png";
        console.log("Logo voltou para a logo normal!")
    }
}