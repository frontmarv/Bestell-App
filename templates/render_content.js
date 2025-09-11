let itemsAmount = Object.keys(orderItems).length;
let Pizza = orderItems.Pizza.items;
let Burger = orderItems.Burger.items;
let Getraenke = orderItems.Getraenke.items;
let gerichte = document.getElementById("render_meals");



function renderAllContent() {
    renderNavMenu();
    let content = "";
    content += renderCategories();
    gerichte.innerHTML = content;


}

function renderNavMenu() {
    let navmenu = "";
    for (let i = 0; i < itemsAmount; i++) {
        navmenu += `<td><a href="" id="menuItem${i}">Item</a></td>`
    }
    document.getElementById("itemRow").innerHTML = navmenu;
}

function renderCategories() {
    let category = Object.keys(orderItems);
    let categorySection = "";
    for (let i = 0; i < itemsAmount; i++) {
        let sectioninput = renderSection(category[i]);
        categorySection += `
        <section>
            <img src="" class="section_img" id="img${i}">
            <h3 id="header${i}"></h3> 
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


