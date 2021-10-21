// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Zac Wilson" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

document.getElementById('add-gb').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Ginger bread + button was clicked!')

})
document.getElementById('minus-gb').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Ginger bread - button was clicked!')


})

document.getElementById('add-cc').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Chocolate Chip + button was clicked!')

 
})
document.getElementById('minus-cc').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Chococlate Chip - button was clicked!')

})
document.getElementById('add-ss').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Sugar Sprinkle + button was clicked!')

})
document.getElementById('minus-ss').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Sugar Sprinkle - button was clicked!')


})
