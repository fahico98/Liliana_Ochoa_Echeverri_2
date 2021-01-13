
const val1 = document.getElementById("val1");
const val2 = document.getElementById("val2");
const buttonSuma = document.getElementById("button-suma");
const buttonResta = document.getElementById("button-resta");
const buttonMult = document.getElementById("button-mult");
const buttonDiv = document.getElementById("button-div");
const resultDiv = document.getElementById("result-div");

function validation(str1, str2){

   let num1 = Number(str1);
   let num2 = Number(str2);

   if(num1 && num2){
      return true;
   }else{
      alert("Los valor ingresados deben ser números !");
   }
}

buttonSuma.addEventListener("click", (event) => {

   event.preventDefault();
   let str1 = val1.value;
   let str2 = val2.value;

   if(validation(str1, str2)){
      
      while(resultDiv.firstChild){
         resultDiv.removeChild(resultDiv.firstChild);
      }

      let result = Number(str1) + Number(str2);
      let toAdd = (result < 0)
         ? `<p style='color: red; margin-top: 20px'>Resultado de la suma: ${result}</p>`
         : `<p style='margin-top: 20px;'>Resultado de la suma: ${result}</p>`;
      resultDiv.insertAdjacentHTML("afterbegin", toAdd);
   }
});

buttonResta.addEventListener("click", (event) => {
   
   event.preventDefault();
   let str1 = val1.value;
   let str2 = val2.value;

   if(validation(str1, str2)){
      
      while(resultDiv.firstChild){
         resultDiv.removeChild(resultDiv.firstChild);
      }

      let result = Number(str1) - Number(str2);
      let toAdd = (result < 0)
         ? `<p style='color: red; margin-top: 20px'>Resultado de la resta: ${result}</p>`
         : `<p style='margin-top: 20px;'>Resultado de la resta: ${result}</p>`;
      resultDiv.insertAdjacentHTML("afterbegin", toAdd);
   }
});

buttonMult.addEventListener("click", (event) => {
   
   event.preventDefault();
   let str1 = val1.value;
   let str2 = val2.value;

   if(validation(str1, str2)){
      
      while(resultDiv.firstChild){
         resultDiv.removeChild(resultDiv.firstChild);
      }

      let result = Number(str1) * Number(str2);
      let toAdd = (result < 0)
         ? `<p style='color: red; margin-top: 20px'>Resultado de la multiplicación: ${result}</p>`
         : `<p style='margin-top: 20px;'>Resultado de la multiplicación: ${result}</p>`;
      resultDiv.insertAdjacentHTML("afterbegin", toAdd);
   }
});

buttonDiv.addEventListener("click", (event) => {
   
   event.preventDefault();
   let str1 = val1.value;
   let str2 = val2.value;

   if(validation(str1, str2)){
      
      while(resultDiv.firstChild){
         resultDiv.removeChild(resultDiv.firstChild);
      }

      let result = Number(str1) / Number(str2);
      let toAdd = (result < 0)
         ? `<p style='color: red; margin-top: 20px'>Resultado de la división: ${result}</p>`
         : `<p style='margin-top: 20px;'>Resultado de la división: ${result}</p>`;
      resultDiv.insertAdjacentHTML("afterbegin", toAdd);
   }
});
