let app = new Vue({
    el:'#app',
    data:{
       nome:'Diego',
       idade:17
    },
    methods: {
        mostrar:(nome,idade)=>{
            return `O nome do usuário é ${nome} e ele tem ${idade} anos`
        },
        testar:()=>{
            console.log('testando funções')
        }
    },
})
