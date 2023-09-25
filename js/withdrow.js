document.getElementById('btn-withdraw').addEventListener('click', function () {

    const inputField = document.getElementById("withdraw-field");
    const inputFieldValueString = inputField.value;
    const newwithdrawFieldAmount = parseFloat(inputFieldValueString);

    inputField.value = ""
 


    const withdrawFieldElement = document.getElementById("withdraw-total");
    const textElementValueString = withdrawFieldElement.innerText;
    const previouswithdrawFieldTotal = parseFloat(textElementValueString);
 

    const newwithdrawFieldTotal = previouswithdrawFieldTotal + newwithdrawFieldAmount;
    withdrawFieldElement.innerText = newwithdrawFieldTotal;


    const blanceElement = document.getElementById("balance-total");
    const blanceElementValueString = blanceElement.innerText;
    const previousblanceTotal = parseFloat(blanceElementValueString);

    const newblanceTotal = previousblanceTotal - newwithdrawFieldAmount;
    blanceElement.innerText = newblanceTotal;

})
 