
// Im Warenkorb wird die Gesamtsumme angezeigt
// ggf. mit Zwischensumme zwecks Lieferkosten etc. (optional)
// Man kann auf den bestellen Button drücken, danach sollte der Warenkorb geleert werden und eine Meldung kommen, dass man eine Testbestellung vorgenommen hat (kein Alert!).
// Wenn viele Gerichte im Warenkorb sind, sollte nichts aus dem Container herauslaufen.
// Der Desktop-Warenkorb sollte immer oben an der Seite angeheftet sein, außer man ist ganz oben oder unten auf der Seite. (sticky)

// cart_item = [name, amount, price, totalPrice]
let cart = [];

let cartItemBox = document.getElementById("render_cart");

document.addEventListener("DOMContentLoaded", renderAllContent());


function addNavMenuTitles() {
    for (let i = 0; i < arrayOfCategories.length; i++) {
        let getTitle = document.getElementById(`menuItem${i}`);
        let setTitle = arrayOfCategories[i];
        getTitle.innerHTML = setTitle;
        getTitle.setAttribute("href", `#${setTitle}`);
    }

}

function addMenuImgs() {
    for (let i = 0; i < arrayOfCategories.length; i++) {
        let img = document.getElementById(`img${i}`);
        let path = arrayOfCategories[i];
        let imgPath = orderItems[path].titleImage;
        img.setAttribute("src", `${imgPath}`);
    }
}

function addMenuTitles() {
    for (let i = 0; i < arrayOfCategories.length; i++) {
        let getHeader = document.getElementById(`header${i}`);
        let setHeader = arrayOfCategories[i];
        getHeader.innerHTML = setHeader;
    }
}

arrayOfCategories.forEach(addItemsNameDescPrice);

function addItemsNameDescPrice(currentValue) {
    let length = orderItems[currentValue].items.length;
    for (let i = 0; i < length; i++) {
        let getItemName = document.getElementById(`${currentValue}itemName${i}`);
        let getItemDescrip = document.getElementById(`${currentValue}itemDescrip${i}`);
        let getItemPrice = document.getElementById(`${currentValue}itemPrice${i}`);
        let setItemName = orderItems[currentValue].items[i].name;
        let setItemDescrip = orderItems[currentValue].items[i].description;
        let setItemPrice = orderItems[currentValue].items[i].price;
        getItemName.innerHTML = setItemName;
        getItemDescrip.innerHTML = setItemDescrip;
        getItemPrice.innerHTML = setItemPrice.toFixed(2) + "€";
    }
}

function addItemtoCart(btn) {
    let parentDiv = btn.parentElement;
    let grandParentDivId = parentDiv.parentElement.id;
    let itemName = parentDiv.querySelector("h3").textContent;
    let foundItem = orderItems[grandParentDivId].items.find(item => item.name === itemName);
    let itemArray = [String(foundItem.name), 1, Number(foundItem.price), Number(foundItem.price)];
    let alreadyInCart = cart.findIndex(item => item[0] === String(foundItem.name));
    if (alreadyInCart !== -1) {
        cart[alreadyInCart][1] += 1;
        cart[alreadyInCart][3] += cart[alreadyInCart][2];
    } else {
        cart.push(itemArray);
    }
    renderCart();
}

function findItemInCart(btn) {
    let parentDiv = btn.parentElement;
    let grandParentDivId = parentDiv.parentElement;
    let itemName = grandParentDivId.querySelector("h3").textContent;
    let alreadyInCart = cart.findIndex(item => item[0] === itemName);
    return alreadyInCart
}

function removeItemFromCart(btn) {
    cart.splice(findItemInCart(btn), 1);
    renderCart();
}

function increaseAmount(btn) {
    let index = findItemInCart(btn);
    cart[index][1] += 1;
    cart[index][3] += cart[index][2];
    renderCart();
}

function decreaseAmount(btn) {
    let index = findItemInCart(btn);
    cart[index][1] -= 1;
    if(cart[index][1] === 0){removeItemFromCart(btn)}
    else {cart[index][3] -= cart[index][2];}
    renderCart();
}


