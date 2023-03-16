const { createApp } = Vue

createApp({
  data() {
    return {
      impegni:[
        {
          testo:'Fare spesa',
          done: false
        },

        {
          testo:'Consegnare Esercizio',
          done: true
        },

        {
          testo:'Scattare foto al tramonto',
          done: false
        }
      ]
    }
  },
  methods:{
eseguito(impegno){
  if (impegno.done == false){
    impegno.done == true;
  }else{
    impegno.done == false;
  }
}
  }
}).mount('#app')