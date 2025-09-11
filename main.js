

// Man soll Gerichte in den Warenkorb hinzufügen können, indem man auf das Plus beim jeweiligen Gericht drückt.
// Im Warenkorb kann man nun für jedes einzelne enthaltene Gericht die Mengen erhöhen oder verringern sowie einzelne Gerichte komplett aus dem Warenkorb löschen.
// Im Warenkorb wird die Gesamtsumme angezeigt
// ggf. mit Zwischensumme zwecks Lieferkosten etc. (optional)
// Man kann auf den bestellen Button drücken, danach sollte der Warenkorb geleert werden und eine Meldung kommen, dass man eine Testbestellung vorgenommen hat (kein Alert!).
// Wenn viele Gerichte im Warenkorb sind, sollte nichts aus dem Container herauslaufen.
// Der Desktop-Warenkorb sollte immer oben an der Seite angeheftet sein, außer man ist ganz oben oder unten auf der Seite. (sticky)

let cart = [];

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


