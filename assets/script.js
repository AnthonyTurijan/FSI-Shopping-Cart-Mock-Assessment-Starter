function updateQuantity(displayQuanitity){
    let quantity = document.querySelector('.total-quantity')
    quantity.innerHTML = displayQuanitity
}
let quantity = 1
let minus = document.querySelector('#quantity-down')
let plus = document.querySelector('#quantity-up')
 
plus.addEventListener('click', function(){
    quantity++
    updateQuantity(`Quantity: ${quantity}`)
})

minus.addEventListener('click', function(e){
    if (quantity > 0) {
        quantity--
    }
    updateQuantity(`Quantity: ${quantity}`)
})