const elements = {
    H: {num: 1, name: "Hydrogen"},
    He: {num: 2, name: "Helium"},
    Li: {num: 3, name: "Lithium"},
    Be: {num: 4, name: "Beryllium"},
    B: {num: 5, name: "Boron"},
    C: {num: 6, name: "Carbon"},
    N: {num: 7, name: "Nitrogen"},
    O: {num: 8, name: "Oxygen"},
    F: {num: 9, name: "Fluorine"},
    Ne: {num: 10, name: "Neon"},
    Na: {num: 11, name: "Sodium"},
    Mg: {num: 12, name: "Magnesium"},
    Al: {num: 13, name: "Aluminum"},
    Si: {num: 14, name: "Silicon"},
    P: {num: 15, name: "Phosphorus"},
    S: {num: 16, name: "Sulfur"},
    Cl: {num: 17, name: "Chlorine"},
    Ar: {num: 18, name: "Argon"},
    K: {num: 19, name: "Potassium"},
    Ca: {num: 20, name: "Calcium"},
    Sc: {num: 21, name: "Scandium"},
    Ti: {num: 22, name: "Titanium"},
    V: {num: 23, name: "Vanadium"},
    Cr: {num: 24, name: "Chromium"},
    Mn: {num: 25, name: "Manganese"},
    Fe: {num: 26, name: "Iron"},
    Co: {num: 27, name: "Cobalt"},
    Ni: {num: 28, name: "Nickel"},
    Cu: {num: 29, name: "Copper"},
    Zn: {num: 30, name: "Zinc"},
    Ga: {num: 31, name: "Gallium"},
    Ge: {num: 32, name: "Germanium"},
    As: {num: 33, name: "Arsenic"},
    Se: {num: 34, name: "Selenium"},
    Br: {num: 35, name: "Bromine"},
    Kr: {num: 36, name: "Krypton"},
    Rb: {num: 37, name: "Rubidium"},
    Sr: {num: 38, name: "Strontium"},
    Y: {num: 39, name: "Yttrium"},
    Zr: {num: 40, name: "Zirconium"},
    Mo: {num: 42, name: "Molybdenum"},
    Cs: {num: 55, name: "Cesium"},
    Ba: {num: 56, name: "Barium"},
    W: {num: 74, name: "Tungsten"},
    Ir: {num: 77, name: "Iridium"},
    Au: {num: 79, name: "Gold"},
    Hg: {num: 80, name: "Mercury"},
    Pb: {num: 82, name: "Lead"},
    U: {num: 92, name: "Uranium"}
};

function convertText() {
    const text = document.getElementById("inputText").value;
    const output = document.getElementById("output");
    output.innerHTML = "";

    let i = 0;
    while (i < text.length) {
        let two = text.substring(i, i+2);
        let one = text.substring(i, i+1);

        if (elements[two]) {
            addTile(two);
            i += 2;
        } else if (elements[one]) {
            addTile(one);
            i += 1;
        } else {
            addNormal(one);
            i += 1;
        }
    }
}

function addTile(sym) {
    const el = elements[sym];
    const div = document.createElement("div");
    div.className = "tile";
    div.innerHTML = `<div class='num'>${el.num}</div>
                     <div class='symbol'>${sym}</div>
                     <div class='name'>${el.name}</div>`;
    document.getElementById("output").appendChild(div);
}

function addNormal(ch) {
    const div = document.createElement("div");
    div.className = "normal";
    div.innerText = ch;
    document.getElementById("output").appendChild(div);
}
