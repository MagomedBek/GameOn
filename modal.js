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
const el = document.querySelectorAll('.formData');
const msg = document.querySelectorAll('.invidForm')


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
close.addEventListener("click", closeModal); 

//valid event
submit.addEventListener("click", validModal);

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
  (e) => {
    
    e.preventDefault();
    
    let valid = document.querySelector('#reserve').reportValidity();
    
      if(valid)
      {
        // form Apres la validation 
        body.innerHTML = '<p class = "valMsg" >Merci pour votre inscription.</p> <input class="btn-submit validation" type="submit" value="Fermer">';
        body.className += '  validated';
        document.querySelector('.validation').addEventListener('click',closeModal)
        
      }
      else {
        //les champs non remplies
        let n = 0;
        el.forEach(query => {
          if(!query.required){
            msg[n].style.display ='block';
            

          }else{
            msg[n].style.display ='none';
            n++;
            
          }

          
         });
        


        
      }
  })
  
}
function resetListener(){
  document.querySelector('#reserve input[type="submit"]' ).removeEventListener("click",(e)=>{})

}

