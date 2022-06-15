let app = new Vue({
    el:'#app',
    data:{
        nome: 'Diego'
    },
    methods: {
     
    },
    beforeCreate:function() {
        //colocar function parar ter acesso ao 'this'
        alert(this.nome)
    },
    created:function() {
        //criado mas não renderizado
    },
    beforeMount:function() {
        
    },
    mounted:function() {
        
    },
    beforeUpdate: function() {
        
    },
    updated:function() {
        
    },
})

/*
ciclos de vida em ordem cronológica:

beforeCreate => não tem acesso nem aos elementos ainda, geralmente usado para influciar outros item que ja estão na tela
created => quando o elemento foi criado
beforeMount => ja foi criado mas não foi exibido
mounted
beforeUpdate => antes de modificar
Updated => ao modificar

beforeDestroy => antes de destruir o elemento
destroy => ao destruir o elemento
*/