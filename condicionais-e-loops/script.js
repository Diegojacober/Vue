let placar = new Vue({
    el:'#placar',
    data:{
        n:0,
    }
})

let lista = new Vue({
    el:'#lista',
    data:{
        nomes: [
            {'nome':'Diego','sobrenome':'Alencar','idade':17},
            {'nome':'Paulo','sobrenome':'André','idade':37},
            {'nome':'Roberto','sobrenome':'Nascimento','idade':25},
            {'nome':'Joana','sobrenome':'Pereira','idade':18},
        ]
    }
})