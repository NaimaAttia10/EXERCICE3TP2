const boutton = document.getElementById("boutton");
const items = document.querySelector(".Items");
let nom;
let prenom;
const addItem = () => {
    nom = document.querySelector("#name").value;
    prenom = document.querySelector("#surname").value;
    if (prenom && nom) {
        const nouv = document.createElement("div");
        nouv.setAttribute("class", "item");
        const neww = document.createTextNode(prenom + " : " + nom);
        nouv.append(neww);
        nouv.addEventListener("click", () => {
            items.removeChild(nouv);
        })
        return nouv;
    }
    else
        alert("Erreur")
}
boutton.addEventListener("click", () => {
    const newItem = addItem();
    items.appendChild(newItem);
});
const m = document.querySelectorAll(".item");
