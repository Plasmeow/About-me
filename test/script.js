//console.log viser om koden virker i terminalen, deretter kan en bytte det ut med
//andre ting som f.eks. alert

console.log("hei verden!")

let x = 5;
let y = 10;
let z = x + y;
console.log (z);

let FirstName="Oliver", LastName="Rydsaa",age=19;
console.log ("Hei på deg,", FirstName, LastName, age)


//viser hvor mye som er igjen etter at tallet har blitt delt
//21/9=2, 21-18=3
console.log(21 % 9);

let lastName = "Johnson"; // 
const a = {
  1: "John",
  2: "Doe"
};                        // 
console.log("Vent nå litt, er det",a[1], a[2], lastName + "?")


//a = alt som er mellom { }, vi bruker [ ] for å vise til hvilken del av a
//man vil skal vises i terminalen

//, = med mellomrom, + = uten mellomrom


//i javascript begynner man på 0, så det går 0 1 2 3 4 ...


//vi refererer til List og ber den lese opp det første elementet
let List = ["mat", "drikke"]
console.log(List[0])

//vi refererer til List1 og ber den lese opp antall symbol i det første elementet
let List1 = ["mat", "drikke"]
console.log(List1[0].length)

//vi refererer til List2 og ber den lese opp det første elementet
//om man endrer let til const, vil den ikke kunne bli redefinert senere

let List2 = ["mat", "drikke"]
console.log(List2[1][0])

//f.eks: om du skriver List2 = 10 etter const er definert, vil du få en feilmelding
//i terminalen


const List3 = ["blåbær", "koksnøtter", "brokkoli"]
console.log(List3)

const List4 = ["blåbær", "koksnøtter", "brokkoli"] //pop tar vekk
List4.pop();
console.log(List4)

const List5 = ["blåbær", "koksnøtter", "brokkoli"] //push legger til
List5.push("kiwi");
console.log(List5)
console.log(List5.length)

let farger = ("lilla", "rød", "hvit");
let result = farger.includes("gul");
console.log(result)



//hvordan vise hermetegn:
let txt = "We are \"Vikings\""
console.log(txt)



let matte = Math.sqrt(78) //finne kvadratroten
console.log(matte)

const tall = ["1", "2", "3", "4", "5"]
let text = "";
for (let i = 0; i < tall.length; i++) {
  text += tall[i] + "\n";
}
text = text.trim()
console.log(text)



const tall1 = [1, 2 ,3 ,4 ,5] //uten hermetegn = integer, brukes til matte
let tekst = 0;                //man kan ikke bruke " " fordi det ikke er en string
for (let i = 0; i < tall1.length; i++) {
  tekst += tall1[i];
}
console.log(tekst)

let string = ["filmproduksjon", "mattelærer", "krokodilletårer", "krabbeklør", "begrunnelsene"];
function longestString() {
  return string.sort(function (a, b) {        //finn ut av hvorfor dette virker...
    return b.length - a.length;               //dette finner lengste elementet i en string
})[0];
}
console.log(longestString())

for (var i = 1; i < 51; i++) {
  if (i % 15 == 0) console.log("FizzBuzz");
  else if (i % 3 == 0) console.log("Fizz");
  else if (i % 5 == 0) console.log("Buzz");
  else console.log(i);
}

let tall3 = 5
let tall4 = 2
let op = "*"
console.log(tall3, op, tall4)

function reverseString(str) {
  return str.split("").reverse("").join("");   //split deler streng til individuelle tegn,reverse snur rekkefølgen, join gjør om til streng
}
console.log(reverseString("Du duger"))



function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([1, 2, 3, 4]))

function multiTabell(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  
} }

multiTabell(5);

// <= sjekker om en verdi er mindre enn eller like stor som
// i++ øker verdien av i med 1

// num definerer man etter funksjonen er skrevet
// `` er en type streng som lar deg skrive inn variabler og uttryk
// Alt mellom ${} evalueres og resultatet settes i strengen