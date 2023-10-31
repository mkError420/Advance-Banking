/* console.log('connected'); */


//button

document.getElementById('submit-buttton').addEventListener('click', function(){

   const userEmailField= document.getElementById('user-email');
   const userEmail= userEmailField.value;

   //passward

   const userPasswordField= document.getElementById('user-password');

  const userPassWord= userPasswordField.value;

/* console.log (userEmail,userPassWord  ); */
if(userEmail == 'mk.rabbani.cse@gmail.com' && userPassWord == 1234567890 ){
    window.location.href = "banking.html";

} else{
    alert('Email or Password does not matched')
}

})