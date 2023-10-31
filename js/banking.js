//multy-function call in single function

function getInput(inputId){
  const inputField= document.getElementById(inputId);
  const inputText = inputField.value;
  const inputAmmount = parseFloat(inputText);
 /*  console.log(inputAmmount); */
 inputField.value = '';
  return inputAmmount;

}
//balance update
function upDateTotal (updateId, newTotalAmmount){
  const updateTotal= document.getElementById(updateId);
  const previousDepositeText = updateTotal.innerText;
  const previousTotalAmmount = parseFloat(previousDepositeText);
  updateTotal.innerText = previousTotalAmmount + newTotalAmmount


}
//Balance update

function getCurrentBalance(){
  const balanceTotal= document.getElementById('balace-total')
  const balanceTotalTex = balanceTotal.innerText;
  const balanceTotalAmmount = parseFloat (balanceTotalTex);
  return balanceTotalAmmount
}

function updateBalance(ammount, isAdd){
  const balanceTotal= document.getElementById('balace-total')
 const previousBalanceTotalAmmount =  getCurrentBalance();
 if(isAdd == true){
  balanceTotal.innerText= previousBalanceTotalAmmount +ammount;

 } else{
  balanceTotal.innerText = previousBalanceTotalAmmount - ammount;
 }

 

}



//deposite button
document.getElementById('deposit-button').addEventListener('click', function()
{
  const newDepositeAmmount= getInput('deposit-input');
  if(newDepositeAmmount >0 ){
    
  upDateTotal ( 'deposit-total',newDepositeAmmount);
  updateBalance(newDepositeAmmount, true)
  }
  
 
 
})

//Withdraw Button
document.getElementById('withdra-button').addEventListener('click',function()
{
  const newWithdrawAmmount = getInput('withdraw-input')

if(newWithdrawAmmount >0 && newWithdrawAmmount <= getCurrentBalance() ){
  upDateTotal ( 'withdraw-total',newWithdrawAmmount);
updateBalance(newWithdrawAmmount, false)
}



})

