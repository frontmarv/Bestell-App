let itemsAmount = Object.keys(orderItems).length;
let gerichte = document.getElementById("render_meals");
let arrayOfCategories = Object.keys(orderItems)


function renderAllContent() {
    renderNavMenu();
    let content = "";
    content += renderCategories();
    gerichte.innerHTML = content;
    addNavMenuTitles();
    addMenuTitles();
    addMenuImgs();
    renderCart();

}

function renderNavMenu() {
    let navmenu = "";
    for (let i = 0; i < itemsAmount; i++) {
        navmenu += `<td><a id="menuItem${i}">Item</a></td>`
    }
    document.getElementById("itemRow").innerHTML = navmenu;
}

function renderCategories() {
    let category = arrayOfCategories;
    let categorySection = "";
    for (let i = 0; i < itemsAmount; i++) {
        let sectioninput = renderSection(category[i]);
        categorySection += `
        <section>
            <div class="imgCropper"><img class="section_img" id="img${i}"></div>
            <h2 id="header${i}"></h2> 
            <div id="${category[i]}">${sectioninput}</div>
        </section>`
    }
    return categorySection
}

function renderSection(sectionname) {
    let index = orderItems[sectionname].items.length;
    let itemcontainer = "";
    for (let i = 0; i < index; i++) {
        itemcontainer += `
        <div class="singleItem">
        <h3 id="${sectionname}itemName${i}"></h3>
        <p id="${sectionname}itemDescrip${i}"></p>
        <p id="${sectionname}itemPrice${i}" class="orange_paragraph"></p>
        <button class="addToCart orange_paragraph" onclick="addItemtoCart(this)">&#43</button>
        </div>`
    }
    return itemcontainer
}

function renderCart() {
    let cartItems = "";
    for (let i = 0; i < cart.length; i++) {
        cartItems += `
        <div id="cartItem">
        <h3 id="cartItemName">${cart[i][0]}</h3>
        <div id="amountAndPrice">
        <button class="orange_paragraph" onclick="decreaseAmount(this)">&#8722</button><p>${cart[i][1]}</p><button class="orange_paragraph" onclick="increaseAmount(this)">&#43</button><p>${cart[i][3]}€</p><button class="orange_paragraph" onclick="removeItemFromCart(this)">&#128465</button></div>
        </div>`
    }
    cartItemBox.innerHTML = cartItems;
}