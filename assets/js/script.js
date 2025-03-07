function mudaFoto(item){
    if (item == 1){
        document.getElementById("icone").src="assets/img/home.png";
        console.log("Logo mudou para home!")
    }else if (item == 2){
        document.getElementById("icone").src="assets/img/cardapio.png";
        console.log("Logo mudou para cardápio!")
    }else if (item == 3){
        document.getElementById("icone").src="assets/img/sobre.png";
        console.log("Logo mudou para sobre!")
    }else if (item == 4){
        document.getElementById("icone").src="assets/img/contato.png";
        console.log("Logo mudou para contato!")
    }else if (item == 5){
        document.getElementById("icone").src="assets/img/logo.png";
        console.log("Logo voltou para a logo normal!")
    }
}