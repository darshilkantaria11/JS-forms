alert("NOTE:- Password should contain minimum 8 character which include Uppercase,lowercase and Special character");
let password = document.getElementById('password');
let showHideBtn = document.getElementById('show-hide');

function showHide() {
  const fieldAtt = password.getAttribute('type');
  // console.log(fieldAtt);
  if (fieldAtt === 'password') {
    password.setAttribute('type', 'text');
    showHideBtn.innerHTML = 'hide';
  } else {
    password.setAttribute('type', 'password');
    showHideBtn.innerHTML = 'show';
  }
}



// function validateform(){  
//   var name=document.myform.name.value;  
//   var password=document.myform.password.value;  
    
//   if (name==null || name==""){  
//     alert("Name can't be blank");  
//     return false;  
//   }else if(password.length<6){  
//     alert("Password must be at least 6 characters long.");  
//     return false;  
//     }  
//   }  



showHideBtn.onclick = showHide;
