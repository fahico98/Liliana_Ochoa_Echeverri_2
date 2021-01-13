
const matrixDiv = document.getElementById("matrix-div");
const form = document.getElementById("form");
const input = document.getElementById("input");

form.addEventListener("submit", (event) => {
   
   event.preventDefault();

   let N = Number(input.value);

   if(N){

      while(matrixDiv.firstChild){
         matrixDiv.removeChild(matrixDiv.firstChild);
      }
      
      let matrix = [];

      for(let i = 0; i < N; i++){
         matrix[i] = [];
         for(let j = 0; j < N; j++){
            matrix[i][j] = (i == j) ? 1 : 0;
         }
      }

      let toAdd = "<table>";

      for(let i = 0; i < N; i++){
         toAdd += "<tr>";
         for(let j = 0; j < N; j++){
            toAdd += `<td>${matrix[i][j]}</td>`;
         }
         toAdd += "</tr>";
      }

      toAdd += "</table>"
      matrixDiv.insertAdjacentHTML("afterbegin", toAdd);

   }else{
      alert("El valor ingresado debe ser un número entero !");
   }
});
