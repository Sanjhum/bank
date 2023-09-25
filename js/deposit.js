document.getElementById('btn-deposit').addEventListener('click', function(){

    const inputField = document.getElementById("deposit-field");
  const inputFieldValueString = inputField.value;
  const newDepositAmount = parseFloat(inputFieldValueString);

  inputField.value = ""


  const depositElement = document.getElementById("deposit-total");
  const textElementValueString = depositElement.innerText;
  const previousDepositTotal = parseFloat(textElementValueString);

  const newDepositTotal = previousDepositTotal + newDepositAmount; 
  depositElement.innerText = newDepositTotal;


  const blanceElement = document.getElementById("balance-total");
  const blanceElementValueString = blanceElement.innerText;
  const previousblanceTotal = parseFloat(blanceElementValueString);

  const newblanceTotal = previousblanceTotal + newDepositAmount; 
  blanceElement.innerText = newblanceTotal;
 
})





