// First, tell us your name
let yourName = "Zac Wilson"

// We'll use these variables to track the counts of each cookie type, I changed sugar to ss, also I performed this switch within the index.html file
let gb = 0;
let cc = 0;
let ss = 0;

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

//Plus and Minus buttons for Ginger Bread (gb), Chocolate Chip (cc) and Sugar Sprinkle (ss) 
let addgb = document.querySelector('#add-gb')
let minusgb = document.querySelector('#minus-gb')
let addcc = document.querySelector('#add-cc')
let minuscc = document.querySelector('#minus-cc')
let addss = document.querySelector('#add-ss')
let minusss = document.querySelector('#minus-ss')

// Quanity Totals for each cookie and the sum
let gbQty = document.querySelector('#qty-gb')
let ccQty = document.querySelector('#qty-cc')
let ssQty = document.querySelector('#qty-ss')
let totalQty = document.querySelector('#qty-total')

addgb.addEventListener('click', function(){
    gb = gb +1;
    gbQty.textContent = gb
    totalQty.textContent = ss + cc + gb
})

minusgb.addEventListener('click', function(){
    gb = gb -1;
    gbQty.textContent = gb 
    totalQty.textContent = ss + cc + gb
    if (gb < 0) { gb = 0
    }
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
    if (cc < 0) { cc = 0
    }
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
    if (ss < 0) { ss = 0
    }
})
