
const age = prompt('Età passeggero')
const Km = prompt('Km da percorrere')
const pricePerK = 0.21;
const totPrice = Km * pricePerK;
const discount20 = ((totPrice /100)*20).toFixed(2); 
const discount40 = ((totPrice /100)*40).toFixed(2); 
const lastPrice20 = totPrice - discount20;
const lastPrice40 = totPrice - discount40;

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
  `euro ${pricePerK}
  `;

  document.getElementById('dc-tot').innerHTML=
  `euro ${totPrice.toFixed(2)}
  `;

  const  scontoVenti=prompt('codice sconto del 20% digita SCONTO20');
  
  if(age>=0 && age<=20){
    if(scontoVenti=='SCONTO20'){
    document.getElementById('dc-discount').innerHTML=

    `<h2>Sconto</h2>
     Hai uno sconto di euro ${discount20} <br>
     pari al 20% del totale<br>
     Il prezzo del biglietto è pari a euro ${lastPrice20.toFixed(2)} 
    `;
     }else{
      document.getElementById('invalid').innerHTML=
      `<h1 class="error">Codice errato reinserisci il codice</h1>
      `;
     }
  }
  // else if(age>65){
    
  //   document.getElementById('dc-discount').innerHTML=

  //   `<h2>Sconto</h2>
  //    Hai uno sconto di euro ${discount40} <br>
  //    pari al 40% del totale<br>
  //    Il prezzo del biglietto è pari a euro ${lastPrice40.toFixed(2)} 
  //   `;
  // }
  else{
    
    document.getElementById('dc-discount').innerHTML=
    `Codice non valido per la tua fascia di età
    `;
  }
}



