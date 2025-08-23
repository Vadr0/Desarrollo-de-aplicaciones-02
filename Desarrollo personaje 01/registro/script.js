document.getElementById('regForm').addEventListener('submit',function(e){
 e.preventDefault();
 const pass=this.pass.value;
 const pass2=this.pass2.value;
 if(pass!==pass2){
   document.getElementById('msg').textContent='Las contraseñas no coinciden';
   document.getElementById('msg').style.color='red';
   return;
 }
 if(this.checkValidity()){
   document.getElementById('msg').textContent='Registro exitoso';
   document.getElementById('msg').style.color='green';
 } else {
   document.getElementById('msg').textContent='Formulario incompleto o con errores';
   document.getElementById('msg').style.color='red';
 }
});
