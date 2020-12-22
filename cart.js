if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready(){
    var addToCartButton = document.getElementsByClassName('button')
    addToCartButton.addEventListener('click', addToCartClicked)
}
function addToCartClicked(event){
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title').innerText
    var price = shopItem.getElementsByClassName('shop-item-price').innerText
    console.log(title, price)
}