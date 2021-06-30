new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed:{
        resultado(){
            console.log(this.valor)
            return this.valor != 37 ?
                'Valor diferente' : 'Valor Igual'
        }
    }, watch:{
        valor(novo, antigo){
            setTimeout(() => {
                this.valor = 0
            }, 5000)
        }
    }
});