
var age = prompt('Età passeggero')
var Km = prompt('Km da percorrere')
const pricePerK = 0.21;
var totPrice = Km * pricePerK;
var discount20 = ((totPrice /100)*20).toFixed(2); 
var discount40 = ((totPrice /100)*40).toFixed(2); 
var lastPrice20 = totPrice - discount20;
var lastPrice40 = totPrice - discount40;

console.log(age);
console.log(Km);
console.log(totPrice);
console.log(discount20);
console.log(discount40);


if((age<0 || age>100||isNaN(age))||(Km<0||isNaN(Km))){
  document.getElementById('invalid').innerHTML=
    `<h1 class="error">Dati non validi</h1>
    `;
}else{
  document.getElementById('dc-age').innerHTML=
  `${age}
  `;

  document.getElementById('dc-km').innerHTML=
  `${Km}
  `;

  document.getElementById('dc-price-km').innerHTML=
  `${pricePerK}
  `;

  document.getElementById('dc-tot').innerHTML=
  `${totPrice}
  `;

  if(age>=0 && age<18){
    document.getElementById('dc-discount').innerHTML=
    `Hai uno sconto di ${discount20} euro<br>
     pari al 20% del totale<br>
     Il prezzo del biglietto è pari a ${lastPrice20.toFixed(2)} euro
    `;
  }else if(age>65){
  
    document.getElementById('dc-discount').innerHTML=
    `Hai uno sconto di ${discount40} euro<br>
     pari al 40% del totale<br>
     Il prezzo del biglietto è pari a ${lastPrice40.toFixed(2)} euro
    `;
  }
}



