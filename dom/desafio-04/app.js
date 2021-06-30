new Vue({
	el: '#desafio',
	data: {
		efeito: false
	},
	computed:{
		iniciarEfeito() {
			return {
				destaque: this.efeito,
				encolher: !this.efeito
			}
		}
	},
	methods: {
		iniciarProgresso() {

		}
	}
})