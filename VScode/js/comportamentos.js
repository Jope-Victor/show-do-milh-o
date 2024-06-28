window.onload = function() {
    tratar_eventos();
    tocar_audio('abertura');
}

function tratar_eventos() {

    document.getElementById("btn-comecar").onclick = function() {
        tocar_audio('comecar');
        document.getElementById("comecar").style.display = "none";
        document.getElementById("pergunta1000").style.display = "block";       
    }

    document.getElementById("form-pergunta1000").onsubmit = function() {
        var opcao_correta = "3";
        var opcao_selecionada = this.pergunta1000.value;

        if(opcao_selecionada == opcao_correta) {
            tocar_audio('pergunta-2000');
            document.getElementById("pergunta1000").style.display = "none";
            document.getElementById("pergunta2000").style.display = "block";           
        } else {
            document.getElementById("pergunta1000").style.display = "none";
            tocar_audio('errou');
            reinicia_jogo();
        }

        return false;
    }

    document.getElementById("form-pergunta2000").onsubmit = function() {
        var opcao_correta = "4";
        var opcao_selecionada = this.pergunta2000.value;

        if( opcao_selecionada == opcao_correta ) {
            tocar_audio('pergunta-3000');
        } else {
            document.getElementById("pergunta2000").style.display = "none";
            tocar_audio('errou');
            reinicia_jogo();
        }

        return false;
    }

    document.getElementById("form-pergunta3000").onsubmit = function() {
        var opcao_correta = "4";
        var opcao_selecionada = this.pergunta3000.value;

        if( opcao_selecionada == opcao_correta ) {
            tocar_audio('pergunta-3000');
        } else {
            document.getElementById("pergunta2000").style.display = "none";
            tocar_audio('errou');
            reinicia_jogo();
        }

        return false;
    }
}

function reinicia_jogo() {
    document.getElementById("comecar").style.display = "block";
    document.getElementById("btn-comecar").innerHTML = "Jogar Novamente";
}

function tocar_audio(qual_tocar) {

    var audio = document.getElementById("silvio-santos");

    switch(qual_tocar) {
        case 'abertura':
            audio.src="audio/abertura-show-do-milhao.mp3";
        break;
        
        case 'comecar':
            audio.src="audio/1000.wav";
        break;
        
        case 'acertou':
            audio.src="audio/parabens.wav";
        break;

        case 'ganhou':
            audio.src="audio/ganhou.wav";
        break;

        case 'errou':
            audio.src="audio/errou.wav";
        break;

        case 'pergunta-2000':
            audio.src="audio/2000.wav";
        break;
        
        case 'pergunta-3000':
            audio.src="audio/3000.wav";
        break;
    }

    audio.play();
}