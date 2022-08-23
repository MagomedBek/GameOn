function editNav() {
  var x = document.getElementById("myTopnav");
  
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


function validation(){
 

}
validModal();



// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.querySelector(".close");
const submit = document.querySelector(".btn-submit");
const body =document.querySelector(".modal-body");
const form = document.querySelectorAll('.formData');
const msg = document.querySelectorAll('.invidForm')
let n = 0;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
close.addEventListener("click", closeModal); 

//valid event
//submit.addEventListener("click", validModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


//close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Validation
function validModal() {
  document.querySelector('#reserve input[type="submit"]' ).addEventListener("click", 
  (event) => {
    
    event.preventDefault();
    
    let valid = true;
    document.querySelectorAll('.formData input, .formData textarea ').forEach(field =>{
      field.closest('.formData').classList.remove('error');
      let check = field.checkValidity();
      valid &= check;
      
      if(!check){
        field.closest('.formData').classList.add('error');
        field.closest('.formData').querySelector('.invidForm').innerHTML = field.validationMessage;
      }
    })
      if(valid)
      {
        // form Apres la validation 
        body.innerHTML = '<p class = "valMsg" >Merci pour votre inscription.</p> <input class="btn-submit validation" type="submit" value="Fermer">';
        body.className += '  validated';
        document.querySelector('.validation').addEventListener('click',closeModal)
        
      }

  })
  
}


