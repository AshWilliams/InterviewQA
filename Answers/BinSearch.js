let binS = (arreglo,valor) =>{
    let ini = 0
    let ult = arreglo.length - 1
    let medio = 0
    
    while(ini <= ult){
        medio = Math.floor((ini + ult) / 2)
        if(arreglo[medio] == valor){
            return `Elemento ${valor} encontrado en posición ${medio}`
        }

        if(valor < arreglo[medio]){
            ult = medio - 1
        }
        else{
            ini = medio + 1
        }        
    }

    return `Elemento ${valor} no encontrado`
}

let arr = [8,5,7,1,0,707,20,25,3,4]
//ordenamos
arr.sort(function(a,b){
    return a - b
})

console.log(arr)
console.log(binS(arr,707))

