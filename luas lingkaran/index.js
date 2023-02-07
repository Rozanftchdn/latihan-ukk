const luasLingkaran = document.getElementById("luasLingkaran");
const lingkaranContainer = document.getElementById("lingkaran");
const ruasInput = document.getElementById("ruas");

// conect localstorage
const hasilLingkaran = JSON.parse(localStorage.getItem("lingkaran")) || [];

const Hitung = (ruas, hasil) => {
    hasilLingkaran.push({
        ruas,
        hasil
    });
    localStorage.setItem("lingkaran", JSON.stringify(hasilLingkaran));
    return {ruas, hasil};
};
 const buatLingkaran = ({ruas, hasil})=> {
    const divLingkaran = document.createElement("div");
    const Ruas1 = document.createElement("p");
    const hasil1 = document.createElement("h2");

// fill content
    Ruas1.innerHTML = "Ruas :" + ruas;
    hasil1.innerHTML = "Luas Lingkaran :"+ hasil;


// convert
    divLingkaran.append(Ruas1, hasil1);
    lingkaranContainer.appendChild(divLingkaran);

 };
hasilLingkaran.forEach(buatLingkaran);

 luasLingkaran.onsubmit = e => {
    e.preventDefault();
    
    const Ruas = ruas.value;
    const Luas = (Ruas*Ruas)*3.14;

    const newLingkaran = Hitung(
        Ruas,
        Luas
    );
    buatLingkaran(newLingkaran);
    ruas.value = "";
 }