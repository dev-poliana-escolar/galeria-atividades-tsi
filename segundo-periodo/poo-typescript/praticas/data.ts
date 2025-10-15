class Data{
    dia: number;
    mes: number;
    ano: number;

    constructor(diaData : number , mesData :number, anoData:number){
        this.dia = diaData;
        this.mes = mesData;
        this.ano = anoData;

    }

    obterFormatacao() : string {
        if (this.mes<10){
            return `${this.dia}/0${this.mes}/${this.ano}`

        }
        else{
            return `${this.dia}/${this.mes}/${this.ano}`
        }     
        
        // const dia = this.dia <10 ? '0'+this.dia : this.dia
        
    }


}

let hoje= new Data(31,5,2005)
console.log(hoje.obterFormatacao())