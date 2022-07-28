function contar(){
    var inicio = document.getElementById('numI')
    var fim = document.getElementById('numF')
    var passo = document.getElementById('numP')
    var res = document.getElementById('res')
    var um = Number(inicio)
    var dois = Number(fim)
    var p = Number(passo)
  
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1

        }
        if (i < f){
            // Contagem crescente
            for(let c = i; c <= f; c+= p){
                res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        } else {
            // Contagem regressiva
            for(let c = i; c >= f; c-= p){
                res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        }
        
    }
    
}
