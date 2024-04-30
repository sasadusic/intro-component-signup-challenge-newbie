const inputs = document.querySelectorAll('.input')
const form = document.querySelector('.form')
form.onsubmit = (e) => {
    inputs.forEach((input) => {
        if(input.classList.contains('email')){
            if (isEmail(input.value) === false) {
                input.parentElement.classList.add('error')
            }
            else{
                if(input.parentElement.classList.contains('error')){
                    input.parentElement.classList.remove('error')
                }
                
            }
        }
        else{

            if (input.value === '') {
                input.parentElement.classList.add('error')
            }
            else{
                if(input.parentElement.classList.contains('error')){
                    input.parentElement.classList.remove('error')
                }
                
            }
        }
            
    })
        return false
}

function isEmail(emailAdress){
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailAdress.match(regex)) 
    return true; 

   else 
    return false; 
}