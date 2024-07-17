const maaslar =[50000, 35000, 120000, 44000]
let sum = 0
for(let i=0; i< maaslar.length; i++){
    sum += maaslar[i]
}
console.log("SUM", sum);


const notlar = [50,45,67,76,15]
const ellidenkucukler=[]
const ellidenbuyukler=[]


for(let i=0; i< notlar.length ; i++){
     if (notlar[i] < 50) {
        ellidenkucukler.push(notlar[i])
      
     } else {
        ellidenbuyukler.push(notlar[i])
     }
}
console.log(ellidenbuyukler);
console.log(ellidenkucukler);

/* ------------- FOR IN ------------- */
const notlar1 = [50,45,67,76,15];

const ellidenbuyukler1 = []
const ellidenkucukler1= []

for(let i in notlar1){
notlar1[i] <50 ? ellidenkucukler1.push(notlar1[i]) : ellidenbuyukler1.push(notlar1[i])   
}
console.log(ellidenkucukler1);
console.log(ellidenbuyukler1);

/* -------------- ÖRNEK ------------- */

const salaries =[50000, 35000, 120000, 44000]
let total = 0 
for (let i in salaries){
    total += salaries[i]
}
const average = total / salaries.length

console.log(total, average);

/* ------------- FOR OF ------------- */
const notlar2 = [50,45,67,76,15, 22,86,12]
const büyükler =[]
const küçükler = []

for(let not of notlar2 ){
    not <50 ? küçükler.push(not): büyükler.push(not)
}
console.log(küçükler);
console.log(büyükler);
//TODO:
//*-------------------------------------------------------
//* SORU: ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu ana programa dondurecek bir
//* fonksiyon yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//*--------------------------------------------------------

//! ogrenciAra("ahmet")  ===> "Ahmet 2 adet bulundu"
//! ogrenciAra("canan")  ===> "Canan bulunamadı"

/* ---------------------------------- */
/*           Array Iteration          */
/* ---------------------------------- */


const sayilar = [4,5,6,7,8,,1]

sayilar.forEach((x)=> console.log(x));

console.log("****************");

// alternatif 1
sayilar.forEach(function(x){
    console.log(x);
})

// alternatif 2
sayilar.forEach(yazdir)
function yazdir(x){
    console.log(x);
}

// 2 parametreli
sayilar.forEach((x,index)=> console.log("değer", x, "sıra", index));

// Örnek
let toplam = 0
sayilar.forEach((sayi => toplam +=sayi));
console.log("toplam:", toplam);

// Örnek 3 parametreli

const notlar3=[40,50,25,70,80]

notlar3.forEach((not,index,dizi)=>{
    dizi[index] = not * 1.1 
})

//  forEach return yapmaz (void function)
const kare = notlar3.forEach(x=> x*x)
console.log(kare); // undefined

/* ---------------------------------- */
/*             MAP METHODU            */
/* ---------------------------------- */

const names = ["Mustafa","Murat", "Ahmet", "Ayşe", "Canan"];

const copiedNames = names.map((name) => name.toUpperCase());
console.log(copiedNames);

const copiedNames2 = names.map((name)=> {return name.toUpperCase()});
console.log(copiedNames);

const macbooktl=[ 90000, 75000, 60000, 40000, 30000]

const euro = 36.29
const dolar = 33.06

const macbookdolar = macbooktl.map((fiyat)=> Math.trunc(fiyat / dolar));
const macbookeuro = macbooktl.map((fiyat)=> Math.trunc(fiyat / euro));

console.log(macbookdolar);
console.log(macbookeuro);


/* ---------- FILTER METODU --------- */

/* -------------- ÖRNEK ------------- */

const maas=[ 90000, 75000, 60000, 40000, 30000]

const büyük = maas.filter((net)=> net >= 50000);
console.log(büyük);

/* ------- CHAINING (PIPELINE) ------ */

const salary = [ 90000, 75000, 60000, 40000, 30000]
const düşükler = salary.filter((net) => net<50000);
console.log(düşükler);
const zamliMaaslar = düşükler.map(net => net * 1.2)
console.log(zamliMaaslar);

const zamli = salary.filter((net) => net<50000).map(ücret => ücret*1.2)
console.log(zamli);