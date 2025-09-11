// Die auszuwählenden Gerichte (mindestens 5 Stück) werden dynamisch über JS aus einem Objekt gerendert.
// Es gibt einen Gerichte-slider, der zu den jeweiligen Sektionen verlinkt, es sollte mindestens 3 verschiedene Kategorien geben mit jeweils mindestens 3 Gerichten, diese sollten von Bildern zur jeweiligen Kategorie getrennt sein. (optional)
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
for(let i = 0; i < arrayOfCategories.length; i++){
    let getTitle = document.getElementById(`menuItem${i}`);
    let setTitle = arrayOfCategories[i];
    getTitle.innerHTML = setTitle;
    getTitle.setAttribute("href", `#${setTitle}`);
}

}

function addMenuImgs(){
for(let i = 0; i < arrayOfCategories.length; i++){
    let img = document.getElementById(`img${i}`);
    let path = arrayOfCategories[i];
    let imgPath = orderItems[path].titleImage;
    img.setAttribute("src",`${imgPath}`);
}
}

function addMenuTitles() {
    for(let i = 0; i < arrayOfCategories.length; i++){
    let getHeader = document.getElementById(`header${i}`);
    let setHeader = arrayOfCategories[i];
    getHeader.innerHTML = setHeader;
}
}

// function addItemsNameDescPrice(){
//     for(let i = 0; i < ; i++){
// let getItemName = document.getElementById(`itemName${i}`);
// let getItemDescrip = document.getElementById(`itemDescrip${i}`);
// let getItemPrice = document.getElementById(`itemPrice${i}`);
// let setItemName = 
//  <h3 id="itemName${i}">Name</h3>
//         <p id="itemDescrip${i}">Description</p>
//         <p id="itemPrice${i}">Preis</p>
// }
// }

       
