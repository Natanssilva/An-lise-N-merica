
let num = document.getElementById('fnum') // ou querySelector('input#fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = [];

function isNumero(n){
    if (Number(n)>= 1 && Number(n) <= 100) {
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    }else{
        return false
    }
}


function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    }else{
        let totalElementos = valores.length
        let maiorNota = valores[0]
        let menorNota = valores[0]
        let soma = 0
        let media = 0
        for (let pos = 0; pos < valores.length; pos++) {
            const notas = valores[pos];
            
        
            soma = soma + valores[pos] // soma+= valore[pos] msm coisa
        
            if (notas>maiorNota) {
                maiorNota = notas
            }else if(notas<menorNota){
                menorNota = notas
            }
        }
        media = soma / totalElementos

        res.innerHTML = ''
        res.innerHTML += `<p>Total de ${totalElementos} valores cadastrados</p>`
        res.innerHTML += `<p> O maior valor informado foi ${maiorNota}. `
        res.innerHTML += `<p> O menor valor informado foi ${menorNota}. `
        res.innerHTML += `<p> A soma de todos os  valores informado foi ${soma}. `
        res.innerHTML += `<p> A média de todos os  valores informado foi ${media} `
    }
}


