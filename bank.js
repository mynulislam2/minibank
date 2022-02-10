document.getElementById('DepositBtn').addEventListener("click",()=>{
 let preDeposit=parseFloat(document.getElementById("preDeposit").innerText ) 
 let newDeposit=parseFloat(document.getElementById("Deposit").value) 
 if (typeof newDeposit==="number" && newDeposit>0) {
   
 document.getElementById("Deposit").value=""
const DepositSum= document.getElementById("preDeposit").innerText=preDeposit+newDeposit
const preBalance= parseFloat(document.getElementById("Balance").innerText)
const ulitmateBalance= document.getElementById("Balance").innerText=preBalance+DepositSum  
 }
})



document.getElementById("WidthdrawBtn").addEventListener("click",()=>{

const ulitmateBalance=parseFloat(document.getElementById("Balance").innerText) 
    const preWithdraw= parseFloat(document.getElementById("preWithdraw").innerText)
    const newWithdraw= parseFloat(document.getElementById("Withdraw").value)
    if ((typeof newWithdraw==="number" && newWithdraw>0) && ulitmateBalance>=newWithdraw) {
        document.getElementById("Withdraw").value=""
            document.getElementById("Balance").innerText-=newWithdraw
document.getElementById("preWithdraw").innerText=preWithdraw+newWithdraw
    }



})