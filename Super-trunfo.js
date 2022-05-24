
    //*Abaixo, array cartas com cada uma das 60 cartas do jogo. Qualquer atualização ou alteração deve ser feita direto nesta array*//
    var cartas = [
        {
            time: "Vasco",
            Jogador: "Roberto Dinamite",
            Photo: "RobertoDinamite",
            atributos: {Gols: 708,
            Jogos: 1110,
            Títulos: 30,
            Carreira: 21,
            Seleção: 26
        }}, 
        {
            time: "Vasco",
            Jogador: "Juninho P.",
            Photo: "JuninhoPernambucano",
            atributos: {Gols: 76,
            Jogos: 391,
            Títulos: 11,
            Carreira: 9,
            Seleção: 6
        }},
        {
            time: "Vasco",
            Jogador: "Edmundo",
            Photo: "Edmundo",
            atributos: {Gols: 137,
            Jogos: 241,
            Títulos: 6,
            Carreira: 7,
            Seleção: 10
        }},
        {
            time: "Santos",
            Jogador: "Pelé",
            Photo: "Pele",
            atributos: {Gols: 1091,
            Jogos: 1116,
            Títulos: 45,
            Carreira: 18,
            Seleção: 95
        }},
        {
            time: "Santos",
            Jogador: "Neymar",
            Photo: "Neymar",
            atributos: {Gols: 138,
            Jogos: 230,
            Títulos: 6,
            Carreira: 4,
            Seleção: 69
        }},
        {
            time: "Santos",
            Jogador: "Pepe",
            Photo: "Pepe",
            atributos: {Gols: 403,
            Jogos: 741,
            Títulos: 27,
            Carreira: 15,
            Seleção: 22
        }},
        {
            time: "Palmeiras",
            Jogador: "Ademir da Guia",
            Photo: "AdemirDaGuia",
            atributos: {Gols: 153,
            Jogos: 902,
            Títulos: 18,
            Carreira: 15,
            Seleção: 0
        }},
        {
            time: "Palmeiras",
            Jogador: "Marcos",
            Photo: "Marcos",
            atributos: {Gols: 0,
            Jogos: 533,
            Títulos: 13,
            Carreira: 19,
            Seleção: 0
        }},
        {
            time: "Palmeiras",
            Jogador: "Evair",
            Photo: "Evair",
            atributos: {Gols: 126,
            Jogos: 245,
            Títulos: 6,
            Carreira: 4,
            Seleção: 2
        }},
        {
            time: "Sao_Paulo",
            Jogador: "Raí",
            Photo: "Rai",
            atributos: {Gols: 128,
            Jogos: 395,
            Títulos: 9,
            Carreira: 9,
            Seleção: 30
        }},
        {
            time: "Sao_Paulo",
            Jogador: "Rogério Ceni",
            Photo: "RogerioCeni",
            atributos: {Gols: 131,
            Jogos: 1237,
            Títulos: 18,
            Carreira: 26,
            Seleção: 0
        }},
        {
            time: "Sao_Paulo",
            Jogador: "Cafu",
            Photo: "Cafu",
            atributos: {Gols: 38,
            Jogos: 273,
            Títulos: 10,
            Carreira: 6,
            Seleção: 5
        }},
        {
            time: "Corinthians",
            Jogador: "Neto",
            Photo: "Neto",
            atributos: {Gols: 80,
            Jogos: 228,
            Títulos: 3,
            Carreira: 6,
            Seleção: 7
        }},
        {
            time: "Corinthians",
            Jogador: "Ronaldo",
            Photo: "Ronaldo",
            atributos: {Gols: 35,
            Jogos: 69,
            Títulos: 2,
            Carreira: 2,
            Seleção: 67
        }},
        {
            time: "Corinthians",
            Jogador: "Sócrates",
            Photo: "Socrates",
            atributos: {Gols: 172,
            Jogos: 298,
            Títulos: 5,
            Carreira: 6,
            Seleção: 25
        }},
        {
            time: "Flamengo",
            Jogador: "Zico",
            Photo: "Zico",
            atributos: {Gols: 508,
            Jogos: 732,
            Títulos: 25,
            Carreira: 17,
            Seleção: 66 
        }},
        {
            time: "Flamengo",
            Jogador: "Junior",
            Photo: "Junior",
            atributos: {Gols: 77,
            Jogos: 874,
            Títulos: 21,
            Carreira: 15,
            Seleção: 6
        }},
        {
            time: "Flamengo",
            Jogador: "Leandro",
            Photo: "Leandro",
            atributos: {Gols: 14,
            Jogos: 415,
            Títulos: 29,
            Carreira: 12,
            Seleção: 2
        }},
        {
            time: "Gremio",
            Jogador: "Renato Gaúcho",
            Photo: "RenatoGaucho",
            atributos: {Gols: 74,
            Jogos: 261,
            Títulos: 5,
            Carreira: 8,
            Seleção: 5
        }},
        {
            time: "Gremio",
            Jogador: "Hugo de León",
            Photo: "HugoDeLeon",
            atributos: {Gols: 11,
            Jogos: 242,
            Títulos: 3,
            Carreira: 4,
            Seleção: 0
        }},
        {
            time: "Gremio",
            Jogador: "Paulo Nunes",
            Photo: "PauloNunes",
            atributos: {Gols: 7,
            Jogos: 44,
            Títulos: 6,
            Carreira: 3,
            Seleção: 0
        }},
        {
            time: "Internacional",
            Jogador: "Falcão",
            Photo: "Falcao",
            atributos: {Gols: 22,
            Jogos: 107,
            Títulos: 8,
            Carreira: 7,
            Seleção:7 
        }},
        {
            time: "Internacional",
            Jogador: "Fernandão",
            Photo: "Fernandao",
            atributos: {Gols: 62,
            Jogos: 148,
            Títulos: 7,
            Carreira: 4,
            Seleção: 0
        }},
        {
            time: "Internacional",
            Jogador: "D'Alessandro",
            Photo: "Dalessandro",
            atributos: {Gols: 97,
            Jogos: 529,
            Títulos: 12,
            Carreira: 13,
            Seleção: 1
        }},
        {
            time: "Fluminense",
            Jogador: "Castilho",
            Photo: "Castilho",
            atributos: {Gols: 0,
            Jogos: 698,
            Títulos: 35,
            Carreira: 19,
            Seleção: 0
        }},
        {
            time: "Fluminense",
            Jogador: "Fred",
            Photo: "Fred",
            atributos: {Gols: 198,
            Jogos: 375,
            Títulos: 8,
            Carreira: 11,
            Seleção: 18
        }},
        {
            time: "Fluminense",
            Jogador: "Romerito",
            Photo: "Romerito",
            atributos: {Gols: 59,
            Jogos: 211,
            Títulos: 13,
            Carreira: 5,
            Seleção: 10
        }},
        {
            time: "Botafogo",
            Jogador: "Nílton Santos",
            Photo: "NiltonSantos",
            atributos: {Gols: 11,
            Jogos: 723,
            Títulos: 18,
            Carreira: 16,
            Seleção: 3 
        }},
        {
            time: "Botafogo",
            Jogador: "Jairzinho",
            Photo: "Jairzinho",
            atributos: {Gols: 189,
            Jogos: 412,
            Títulos: 17,
            Carreira: 15,
            Seleção: 44
        }},
        {
            time: "Botafogo",
            Jogador: "Garrincha",
            Photo: "Garrincha",
            atributos: {Gols: 245,
            Jogos: 612,
            Títulos: 18,
            Carreira: 12,
            Seleção: 17
        }},
        {
            time: "Cruzeiro",
            Jogador: "Ricardinho",
            Photo: "Ricardinho",
            atributos: {Gols: 46,
            Jogos: 441,
            Títulos: 15,
            Carreira: 8,
            Seleção: 0
        }},
        {
            time: "Cruzeiro",
            Jogador: "Dirceu Lopes",
            Photo: "DirceuLopes",
            atributos: {Gols: 228,
            Jogos: 608,
            Títulos: 13,
            Carreira: 13,
            Seleção: 4
        }},
        {
            time: "Cruzeiro",
            Jogador: "Marcelo Ramos",
            Photo: "MarceloRamos",
            atributos: {Gols: 163,
            Jogos: 365,
            Títulos: 16,
            Carreira: 8,
            Seleção: 0
        }},
        {
            time: "Atletico_MG",
            Jogador: "Toninho Cerezo",
            Photo: "ToninhoCerezo",
            atributos: {Gols: 53,
            Jogos: 400,
            Títulos: 12,
            Carreira: 13,
            Seleção: 5
        }},
        {
            time: "Atletico_MG",
            Jogador: "Dadá Maravilha",
            Photo: "DadaMaravilha",
            atributos: {Gols: 211,
            Jogos: 290,
            Títulos: 8,
            Carreira: 8,
            Seleção: 0
        }},
        {
            time: "Atletico_MG",
            Jogador: "Reinaldo",
            Photo: "Reinaldo",
            atributos: {Gols: 255,
            Jogos: 475,
            Títulos: 23,
            Carreira: 12,
            Seleção: 14
        }},
        {
            time: "Sport",
            Jogador: "Leonardo",
            Photo: "Leonardo",
            atributos: {Gols: 136,
            Jogos: 367,
            Títulos: 9,
            Carreira: 10,
            Seleção: 0
        }},
        {
            time: "Sport",
            Jogador: "Durval",
            Photo: "Durval",
            atributos: {Gols: 33,
            Jogos: 472,
            Títulos: 12,
            Carreira: 8,
            Seleção: 0
        }},
        {
            time: "Sport",
            Jogador: "Magrão",
            Photo: "Magrao",
            atributos: {Gols: 0,
            Jogos: 732,
            Títulos: 10,
            Carreira: 14,
            Seleção: 0
        }},
        {
            time: "Bahia",
            Jogador: "Carlito",
            Photo: "Carlito",
            atributos: {Gols: 233,
            Jogos: 378,
            Títulos: 11,
            Carreira: 15,
            Seleção: 0
        }},
        {
            time: "Bahia",
            Jogador: "Nadinho",
            Photo: "Nadinho",
            atributos: {Gols: 0,
            Jogos: 421,
            Títulos: 7,
            Carreira: 10,
            Seleção: 0
        }},
        {
            time: "Bahia",
            Jogador: "Biriba",
            Photo: "Biriba",
            atributos: {Gols: 113,
            Jogos: 529,
            Títulos: 7,
            Carreira: 11,
            Seleção: 0
        }},
        ]

    /**Audios do jogo */
        var tema = new Audio(), apito = new Audio(), comemorar = new Audio(), derrota = new Audio(), vaia = new Audio(), vitoria = new Audio();
        var TrilhaSonora = document.getElementById("temaJogo")
        var EfeitosSonoros = document.getElementById("efeitoJogo")
            
            tema.src = "./Musicas/Tema.mp3"
            vitoria.src = "./Musicas/Vitoria.mp3"
            vaia.src = "./Musicas/Vaia.mp3"
            derrota.src = "./Musicas/Derrota.mp3"
            comemorar.src = "./Musicas/Comemorar.mp3"
            apito.src = "./Musicas/Apito.mp3"

        TrilhaSonora.onclick = function(){ /**Função para play/pause na música tema */  
            TrilhaSonora.classList.toggle("sonson")
            tema.paused ? tema.play() : tema.pause()
            if (typeof tema.loop == 'boolean'){ /**Esse if é para que a musica toque infinitamente */
                tema.loop = true;
            }else {
                tema.addEventListener('ended', function() {
                    this.currentTime = 0;
                    this.play();
                    }, false);
            }
        }

        EfeitosSonoros.onclick = function(){            
            EfeitosSonoros.classList.toggle("sonson")
        }

        /*Abaixo, array para selecionar as cartas do jogo, através de uma função que seleciona 20 números aleatórios, onde 10 serão as cartas do player e 10 do computador*/
        var CartasSelecionadas = []
        for (i = 0; i<20; i++){
            var n = parseInt(Math.random() * cartas.length)
        
            if (CartasSelecionadas.indexOf(n) < 0){
                CartasSelecionadas.push(n)
            } else {
                i--
            }
        }
        
        /*E abaixo, distribuimos as cartas selecionadas entre o Player e a máquina */
        var cartasPlayer = []
        var cartasMaquina = []
            for (i = 0; i<20; i++){
                i%2 == 0? cartasPlayer.push(CartasSelecionadas[i]) : cartasMaquina.push(CartasSelecionadas[i])
            }
    
        var LevelJogo = 0;
        const Menuajuda = document.querySelector(".GameBoard");
        var jogoPage1 = document.querySelector(".Jogo");

        var pontosJogador = 0
        var pontosMaquina = 0

        /*Função para ativar o campo de ajuda*/
        function ajuda() {
            Menuajuda.classList.remove("Opcoeson");
            Menuajuda.classList.toggle("Ajudaon");
        }
    
        /*Função para ativar o campo de opções */
        function opcoes() {
            Menuajuda.classList.remove("Ajudaon");
            Menuajuda.classList.toggle("Opcoeson");
        }
      
        jogoPage1.innerHTML = `
        <button class="ComecarJogo" onclick="ComecaJogo()"> Jogar </button>
        `
        /*Função para reinciar o jogo*/
        function reiniciaJogo(){
            return location.reload();
        }   
    
        /*Função para definir Level do jogo*/
            function Level1() {
                LevelJogo = 1
                return ComecaJogo2(LevelJogo)
            }
    
            function Level2() {
                LevelJogo = 2
                return ComecaJogo2(LevelJogo)
            }
    
            function Level3() {
                LevelJogo = 3
                return ComecaJogo2(LevelJogo)
            }
    
        /*Abaixo a tela que aparece quando o player clica em "Jogar", para escolher o level*/
        function ComecaJogo() {
            jogoPage1.classList.add("LevelPage")
            jogoPage1.innerHTML = `
            <div class="levelpart">
            <p class="pLevel">Escolha uma dificuldade</p>
            <div class="divLevel">
                <button class="btnLevel" onclick="Level1()"> Fácil </button>
                <button class="btnLevel" onclick="Level2()"> Médio </button>
                <button class="btnLevel" onclick="Level3()"> Difícil </button>
            </div>
            
            <button class="btnVoltar" onclick="reiniciaJogo()">Voltar</button>
            </div>`
        }
    
        /*O Jogo após definir a dificultade*/
        var i = 0
       
        var pagePart2 = `
            <div class="botoesJogo">
                <button class="btnVoltar" onclick="reiniciaJogo()">Reiniciar</button>
                <input type="submit" class="btnVoltar" value="Desafiar" onclick="Desafiar()">
            </div>`

        function ComecaJogo2(LevelJogo){
            if (i == 0) {
                if(EfeitosSonoros.classList.contains("sonson")){
                    apito.play()
                }
            }

            if (i > 9){
                if(EfeitosSonoros.classList.contains("sonson")){
                    apito.play()
                }
                return checaEmpate()
            }

            if (i%2 > 0){
                return vezDaMaquina()
            }

            var textoAtributos = ""
            for (var atributo in cartas[cartasPlayer[i]].atributos){
                textoAtributos += 
                `<input type="radio" name="atributos" id="${atributo}" class="atributosCarta" value="${atributo}">
                    <label for="${atributo}" class="LabelAtributos"><span>${atributo}</span> <span>${cartas[cartasPlayer[i]].atributos[atributo]}</span></label>`
            }

            jogoPage1.classList.remove("LevelPage")
            jogoPage1.classList.add("_jogo")

            var pagePart1 = `
            <div class="escudoTime"> 
                <img src="./Imagens/Escudos/${cartas[cartasPlayer[i]].time}.png">
                <p class="NomeJodagor"> ${cartas[cartasPlayer[i]].Jogador} </p> 
            </div>
            <div class="FotoJogador">
                <img src="./Imagens/Jogadores/${cartas[cartasPlayer[i]].Photo}.jpg">
            </div>`

            jogoPage1.innerHTML = pagePart1 + textoAtributos + pagePart2
        }
    
       
        function Desafiar(){
            var atributoSelecionado = document.querySelector("input[type='radio']:checked")

            if (!atributoSelecionado) { // se nenhum radio foi marcado
                return alert("Você deve escolher uma opção para desafiar seu oponente.");
            }

            var desafio1 = `
            <div class="escudoTime"> 
                <img src="./Imagens/Escudos/${cartas[cartasPlayer[i]].time}.png">
                <p class="NomeJodagor"> ${cartas[cartasPlayer[i]].Jogador} </p> 
            </div>
            <div class="FotoDesafio">
                <img src="./Imagens/Jogadores/${cartas[cartasPlayer[i]].Photo}.jpg">
            </div>
                <label class="LabelAtributos LabelDesafio"><span>${atributoSelecionado.value}</span> <span>${cartas[cartasPlayer[i]].atributos[atributoSelecionado.value]}</span></label>

            <span class="VersusDesafio">VS</span>

            <div class="escudoTime2"> 
                <img src="./Imagens/Escudos/${cartas[cartasMaquina[i]].time}.png">
                <p class="NomeJodagor"> ${cartas[cartasMaquina[i]].Jogador} </p> 
            </div>
            <div class="FotoDesafio">
                <img src="./Imagens/Jogadores/${cartas[cartasMaquina[i]].Photo}.jpg">
            </div>
                <label class="LabelAtributos LabelDesafio"><span>${atributoSelecionado.value}</span> <span>${cartas[cartasMaquina[i]].atributos[atributoSelecionado.value]}</span></label>
        `
        if (cartas[cartasPlayer[i]].atributos[atributoSelecionado.value] > cartas[cartasMaquina[i]].atributos[atributoSelecionado.value]){
            pontosJogador++
            if(EfeitosSonoros.classList.contains("sonson")){
                comemorar.play()
            }
                    
        } else if(cartas[cartasPlayer[i]].atributos[atributoSelecionado.value] < cartas[cartasMaquina[i]].atributos[atributoSelecionado.value]){
            pontosMaquina++
            if(EfeitosSonoros.classList.contains("sonson")){
                vaia.play()
            }
        }

            jogoPage1.innerHTML = `${desafio1} 
            
            <div class="Placar"><p>Placar</p>
            <span id="PlacarPlayer">Você <br> ${pontosJogador}</span> <span>Rodada <br> ${i+1}/10</span> <span id="PlacarMaquina">Máquina <br> ${pontosMaquina}</span>
            </div>
                <div class="botoesJogo">
                    <button class="btnVoltar" onclick="reiniciaJogo()">Reiniciar</button>
                    <input type="submit" class="btnVoltar" value="Continuar" onclick="continuar()">
                </div>`

            
        let placarPlayer = document.querySelector("#PlacarPlayer")
        let placarMaquina = document.querySelector("#PlacarMaquina")
        if (cartas[cartasPlayer[i]].atributos[atributoSelecionado.value] > cartas[cartasMaquina[i]].atributos[atributoSelecionado.value]){
            placarPlayer.classList.add("PiscaVerde")
        } else if(cartas[cartasPlayer[i]].atributos[atributoSelecionado.value] < cartas[cartasMaquina[i]].atributos[atributoSelecionado.value]){
            placarMaquina.classList.add("PiscaVermelho")
        } else {
            placarPlayer.classList.add("PiscaAmarelo")
            placarMaquina.classList.add("PiscaAmarelo")
        }
            i++
        }

        function continuar(){
            return ComecaJogo2(LevelJogo)
        }

        function checaEmpate(){ /**Função do fim do jogo, checa quem ganhou e dá a mensagem. */
            var reinicia = `
                    <button class="btnVoltar" onclick="reiniciaJogo()">Reiniciar</button>
                    `
            var PlacarFinal = `<div id="PlacarFinal"><p>Placar Final</p>
            <span>Você</span> <span>Máquina</span>
            <span>${pontosJogador}</span> <span>${pontosMaquina}</span>
            </div>`

            if(pontosJogador > pontosMaquina){
                jogoPage1.classList.remove("_jogo")
                jogoPage1.classList.add("Vitoria")
                jogoPage1.innerHTML = `${PlacarFinal}<div><p>Parabéns, você venceu! </p> ${reinicia}</div>`
                    TrilhaSonora.classList.remove("sonson")
                    tema.pause()
                    if(EfeitosSonoros.classList.contains("sonson")){
                        vitoria.play()
                    }

                    EfeitosSonoros.onclick = function(){ /**Função para play/pause na música final */  
                        EfeitosSonoros.classList.toggle("sonson")
                        vitoria.paused ? vitoria.play() : vitoria.pause()
                    }

            }else if (pontosJogador < pontosMaquina){
                jogoPage1.classList.remove("_jogo")
                jogoPage1.classList.add("Derrota")
                jogoPage1.innerHTML = `${PlacarFinal}<div><p>Que pena, você perdeu! </p> ${reinicia}</div>`
                    TrilhaSonora.classList.remove("sonson")
                    tema.pause()
                    if(EfeitosSonoros.classList.contains("sonson")){
                        derrota.play()
                    }

                    EfeitosSonoros.onclick = function(){ /**Função para play/pause na música final */  
                        EfeitosSonoros.classList.toggle("sonson")
                        derrota.paused ? derrota.play() : derrota.pause()
                    }
                    
            } 
            else {
                jogoPage1.classList.remove("_jogo")
                jogoPage1.classList.add("Empate")
                jogoPage1.innerHTML = `${PlacarFinal}<div><p>Empate!</p> ${reinicia}</div>`
            }
        }

        function Desafiado(AtributoEscolhido){ /**Aqui é para quando for a vez da máquina jogar, após o atributo que ela for jogar ser escolhido */
            var desafio2 = `
            <div class="escudoTime"> 
                <img src="./Imagens/Escudos/${cartas[cartasPlayer[i]].time}.png">
                <p class="NomeJodagor"> ${cartas[cartasPlayer[i]].Jogador} </p> 
            </div>
            <div class="FotoDesafio">
                <img src="./Imagens/Jogadores/${cartas[cartasPlayer[i]].Photo}.jpg">
            </div>
                <label class="LabelAtributos LabelDesafio"><span>${AtributoEscolhido}</span> <span>${cartas[cartasPlayer[i]].atributos[AtributoEscolhido]}</span></label>

            <span class="VersusDesafio"> X </span>

            <div class="escudoTime2"> 
                <img src="./Imagens/Escudos/${cartas[cartasMaquina[i]].time}.png">
                <p class="NomeJodagor"> ${cartas[cartasMaquina[i]].Jogador} </p> 
            </div>
            <div class="FotoDesafio">
                <img src="./Imagens/Jogadores/${cartas[cartasMaquina[i]].Photo}.jpg">
            </div>
                <label class="LabelAtributos LabelDesafio"><span>${AtributoEscolhido}</span> <span>${cartas[cartasMaquina[i]].atributos[AtributoEscolhido]}</span></label>
        `
        if (cartas[cartasPlayer[i]].atributos[AtributoEscolhido] > cartas[cartasMaquina[i]].atributos[AtributoEscolhido]){
            pontosJogador++
            if(EfeitosSonoros.classList.contains("sonson")){
                comemorar.play()
            }
                    
        } else if(cartas[cartasPlayer[i]].atributos[AtributoEscolhido] < cartas[cartasMaquina[i]].atributos[AtributoEscolhido]){
            pontosMaquina++
            if(EfeitosSonoros.classList.contains("sonson")){
                vaia.play()
            }
                    
        }

            jogoPage1.innerHTML = `${desafio2} 
            
                <div class="Placar"><p>Placar</p>
                <span id="PlacarPlayer">Você <br> ${pontosJogador}</span> <span>Rodada <br> ${i+1}/10</span> <span id="PlacarMaquina">Máquina <br> ${pontosMaquina}</span>
                </div>
                <div class="botoesJogo">
                    <button class="btnVoltar" onclick="reiniciaJogo()">Reiniciar</button>
                    <input type="submit" class="btnVoltar" value="Continuar" onclick="continuar()">
                </div>`

                let placarPlayer2 = document.querySelector("#PlacarPlayer")
                let placarMaquina2 = document.querySelector("#PlacarMaquina")

                if (cartas[cartasPlayer[i]].atributos[AtributoEscolhido] > cartas[cartasMaquina[i]].atributos[AtributoEscolhido]){
                    placarPlayer2.classList.add("PiscaVerde")
                } else if(cartas[cartasPlayer[i]].atributos[AtributoEscolhido] < cartas[cartasMaquina[i]].atributos[AtributoEscolhido]){
                    placarMaquina2.classList.add("PiscaVermelho")
                } else {
                    placarPlayer2.classList.add("PiscaAmarelo")
                    placarMaquina2.classList.add("PiscaAmarelo")
                }
            i++
        }

        /*Função para quando for a vez da máquina jogar */
        function vezDaMaquina(){ /**Aqui o código analisa todos os atributos da carta da máquina */
            var AtributosMaquina = []
            for (var atributo in cartas[cartasMaquina[i]].atributos){
                AtributosMaquina.push(cartas[cartasMaquina[i]].atributos[atributo])  
            } 
            var AtributosMaquina2 = []
            for (var atributo in cartas[cartasMaquina[i]].atributos){
                AtributosMaquina2.push(cartas[cartasMaquina[i]].atributos[atributo])  
            } 
            /**Aqui, o código coloca os atributos da carta da máquina em ordem crescente */
            AtributosMaquina.sort(function (a, b){
                return a - b
              })

            var AtributoEscolhido;
            
            /**Aqui começamos a avaliar a decição da máquina, conforme o Level escolhido pelo jogador */
            if (LevelJogo == 1){ /**Aqui, como estamos no level Facil, a máquina vai escolher o atributo de menor valor sempre */
                AtributoEscolhido = AtributosMaquina2.indexOf(AtributosMaquina[0])
                AtributoEscolhido

            } else if (LevelJogo == 2) { /**Aqui, no Level Médio, o jogo escolhe aleatoriamente o atributo */
                AtributoEscolhido = parseInt(Math.random() * 5)

            } else { /**Aqui, no Level difícil, o jogo analisa os atributos escolhendo um de valor alto para o atributo em questão */
                if (AtributosMaquina2[0] > 500){
                    AtributoEscolhido = 0
                } else if (AtributosMaquina2[1] > 700){
                    AtributoEscolhido = 1
                } else if (AtributosMaquina2[2] > 20){
                    AtributoEscolhido = 2
                } else if (AtributosMaquina2[3] > 10) {
                    AtributoEscolhido = 3
                } else if (AtributosMaquina2[4] > 30) {
                    AtributoEscolhido = 4
                } else {
                    AtributoEscolhido = AtributosMaquina2.indexOf(AtributosMaquina[4])
                }
            }
            switch (AtributoEscolhido){ /**Aqui, o valor do atributo escolhido é convertido na string do atributo */
                case 0: AtributoEscolhido = "Gols"
                break;

                case 1: AtributoEscolhido = "Jogos"
                break;

                case 2: AtributoEscolhido = "Títulos"
                break;

                case 3: AtributoEscolhido = "Carreira"
                break;

                case 4: AtributoEscolhido = "Seleção"
                break;
            }

            jogoPage1.classList.add("Transicao")
            jogoPage1.innerHTML = `
            <div id="_transicao"> <p>Vez do computador</p><div>
            <div id="loading"></div>`

            setTimeout(JogadaDoComputador, 1500);

            function JogadaDoComputador(){
                jogoPage1.innerHTML = `<div id="PCEscolha"> <p> O computador escolheu <br><span>${AtributoEscolhido}</span></p></div>`;
                setTimeout(Desafiado, 1500, AtributoEscolhido)
            }
        }