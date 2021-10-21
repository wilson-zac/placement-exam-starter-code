//Plus and Minus buttons for Ginger Bread (gb), Chocolate Chip (cc) and Sugar Sprinkle (ss) 
let addgb= document.querySelector('#add-gb')
let minusgb = document.querySelector('#minus-gb')
let addcc = document.querySelector('#add-cc')
let minuscc = document.querySelector('#minus-cc')
let addss = document.querySelector('#add-ss')
let minusss = document.querySelector('#minus-ss')

let gb = 0;
let cc = 0;
let ss = 0;

// Quatity Totals for each cookie and the sum
let gbQty = document.querySelector('#qty-gb')
let ccQty = document.querySelector('#qty-cc')
let ssQty = document.querySelector('#qty-ss')
let totalQty = document.querySelector('#qty-total')

document.getElementById.addgb.addEventListener('click', function(){
    gb = gb +1;
    gbQty.textContent = gb
    totalQty.textContent = ss + cc + gb
})

document.getElementById.minusgb.addEventListener('click', function(){
    gb = gb -1;
    gbQty.textContent = gb
    totalQty.textContent = ss + cc + gb
})


addcc.addEventListener('click', function(){
    cc = cc +1;
    ccQty.textContent = cc
    totalQty.textContent = ss + cc + gb
})

minuscc.addEventListener('click', function(){
    cc = cc -1;
    ccQty.textContent = cc
    totalQty.textContent = ss + cc + gb
})

addss.addEventListener('click', function(){
    ss = ss +1;
    ssQty.textContent = ss
    totalQty.textContent = ss + cc + gb
})

minusss.addEventListener('click', function(){
    ss = ss -1;
    ssQty.textContent = ss
    totalQty.textContent = ss + cc + gb
})