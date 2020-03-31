function ready(){
    renderMenu();
    renderMustache('data.json', 'intro.mst', '#content');
}
document.addEventListener("DOMContentLoaded",ready);