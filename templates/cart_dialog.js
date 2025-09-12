let dialog = document.getElementById("mobileCart");
let contentFormCart = document.getElementById("contentFormCart");
let mobileCart = document.getElementById("mainCart")
dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
        closeDialog();
    } else {renderDialog()}
});

function openDialog() {
    renderDialog();
    dialog.showModal();
}

function renderDialog(){
    contentFormCart.innerHTML = mobileCart.innerHTML
}

function closeDialog() {
    dialog.close();
}