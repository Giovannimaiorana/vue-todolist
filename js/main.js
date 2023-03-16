const { createApp } = Vue

createApp({
  data() {
    
    return {
      nuovoImpegno:"",

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
},
remove(index){
this.impegni.splice(index, 1);
},
aggiungi(){
  this.impegni.unshift({testo:this.nuovoImpegno,done:false});
  this.nuovoImpegno="";
}

  }
}).mount('#app')