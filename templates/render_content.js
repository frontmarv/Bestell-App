let itemsAmount = Object.keys(orderItems).length;
let Pizza = orderItems.Pizza.items;
let Burger = orderItems.Burger.items;
let Getraenke = orderItems.Getraenke.items;
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

}

function renderNavMenu() {
    let navmenu = "";
    for (let i = 0; i < itemsAmount; i++) {
        navmenu += `<td><a id="menuItem${i}">Item</a></td>`
    }
    document.getElementById("itemRow").innerHTML = navmenu;
}

function renderCategories() {
    let category = arrayOfCategories
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
    let itemcontainer = "";
    for (let i = 0; i < sectionname.length; i++) {
        itemcontainer += `
        <div class="singleItem">
        <h3>Name</h3>
        <p>Description</p>
        <p>Preis</p>
        <button class="addToCart">Add</button>
        </div>`
    }
    return itemcontainer
}

