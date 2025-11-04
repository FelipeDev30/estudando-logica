class formaDeBolo{
    constructor(saborMassa, saborRecheio){
        this.saborMassa = saborMassa
        this.saborRecheio = saborRecheio
    }

    toString(){
        console.log(`Um delicioso bolo de : ${this.saborMassa}, com recheio de: ${this.saborRecheio}`)
    }

    assar(){
        console.log(`Bolo assando de ${this.saborMassa} com cobertura de ${this.saborRecheio}`)
    }
}

let boloFesta = new formaDeBolo("Chocolate", "Nutela")
let boloPremium = new formaDeBolo("Chocolate", "Morango com Nutela");

boloPremium.assar()
boloFesta.toString()
boloPremium.toString()