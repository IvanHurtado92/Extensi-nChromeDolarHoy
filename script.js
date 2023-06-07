function currencyApi(){
    fetch("https://api.currencyapi.com/v3/latest?apikey=bETgXDlFM1GJ7UPFWUddZ4UR374fbjXtWfT3spgJ&currencies=EUR%2CJPY%2CCAD%2CMXN%2CCNY%2CARS")
    .then(res => res.json())
    .then((data) => {
        console.log(data)
        printData(data);
    })
}

currencyApi();

//create a function to print the data
function printData(info){
    const {EUR, CAD, MXN, ARS, JPY, CNY} = info.data;
    console.log(EUR, CAD, MXN, ARS, JPY, CNY);
  document.getElementById("tabla").innerHTML += `
<tr>
  <td scope="col">Pesos Mexicano</td>
  <td scope="col">${MXN.value} ${MXN.code}</td>
</tr>
<tr>
  <td scope="col">Euros</td>
  <td scope="col">${EUR.value} ${EUR.code}</td>
</tr>
<tr>
  <td scope="col">Dolar Canadiense</td>
  <td scope="col">${CAD.value} ${CAD.code}</td>
</tr>
<tr>
  <td scope="col">Pesos Argentinos</td>
  <td scope="col">${ARS.value} ${ARS.code}</td>
</tr>
<tr>
  <td scope="col">Yen Japones</td>
  <td scope="col">${JPY.value} ${JPY.code}</td>
</tr>
<tr>
  <td scope="col">Yuan Chino</td>
  <td scope="col">${CNY.value} ${CNY.code}</td>
</tr>
<br>
<b class="text-center">Info en: ${info.meta.last_updated_at}</b>
`
}