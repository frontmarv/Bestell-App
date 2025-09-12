let dialog = document.getElementById("ueberUns");
dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
        closeDialog();
    }
});
function showRenderDialog() {
    dialog.innerHTML = `<div class="dialogBox" id="dialogBox">
    <h3>Über uns</h3>
    <p>Im Super Nice Restaurant verbinden wir Genuss, Qualität und Gastfreundschaft. Unsere
        Leidenschaft gilt dem, was wir am besten können: köstliche Pizzen, aromatische Burger und
        erfrischende Getränke, die wir mit Sorgfalt und Liebe zum Detail zubereiten.</p>
        <p>Wir möchten einen Ort schaffen, an dem sich unsere Gäste wohlfühlen – sei es für ein
        gemütliches Abendessen, einen entspannten Abend mit Freunden oder einfach, um sich etwas
        Gutes zu gönnen.</p>
        <p>Unser Ziel ist es, jedem Besuch bei uns einen besonderen Moment zu verleihen – frisch,
        herzlich und immer ein wenig „super nice“.</p>
        <button onclick="closeDialog()">Schließen</button>
    </div>`;
    dialog.showModal();
}

function closeDialog() {
    dialog.close();
}