const string1 = "Saat meng*ecat tembok, Agung dib_antu oleh Raihan"
const string2 = 'Berapa u(mur minimal[ untuk !mengurus ktp?'
const string3 = 'Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda'

function character(str) {
    const character = "[`!@#$%^&*()_+=[]{};':\"\\|.<>/~]/"
    return character
    .split("")
    .some((character) => str.includes(character));
}

const count = (string1) => {
    const sentence = [];
    let data = string1.split(" ");
    for (let i = 0; i < data.length; i++) {
        if (!character(data[i])) {
            sentence.push(data[i]);
        }
    }
    return sentence.length;
}

console.log(count(string1));
console.log(count(string2));
console.log(count(string3));