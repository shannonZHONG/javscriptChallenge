const conversions = {
    kg:{
        lb: 2.2,
        oz: 35.274,
        st: 0.157
        
    },
    lb:{
        kg:0.0454
    }
}

const fromInput = document.getElementById("metric-input")
fromInput.addEventListener("input",convert)


const toInput = document.getElementById("imperial-input")




function convert(){
   const amounts = {from: "kg", to: "lb", amount:fromInput.value}
   const multipler = conversions[amounts.from][amounts.to]
   const result = amounts.amount * multipler;
   toInput.value = parseFloat(result.toFixed(3))
   
}



