let unit = document.getElementById("unit")
let convertbtn = document.getElementById("convert-btn")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

convertbtn.addEventListener("click", function() {
    const meterFeet = 3.281.toFixed(2)
    const literGallon = 0.264
    const kilogramPound = 2.204   
      
    let values = unit.value
    
    lengthEl.textContent = `${ values }  meter = ${values * meterFeet} feet | ${values} feet = ${(values / meterFeet).toFixed(2)} meter`
    
    volumeEl.textContent = `${ values } liter = ${values * literGallon} gallons | ${values} gallons = ${(values / literGallon).toFixed(2)} liter`
    
    massEl.textContent = `${ values } kilograms = ${values * literGallon} pounds | ${values} pounds = ${(values / literGallon).toFixed(2)} kilograms`
})
