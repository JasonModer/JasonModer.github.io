function hello(){
    var inputText = $('#text-input').val();
    var NameifiedText = "Hello, "+ inputText ;
    document.getElementById('text-output').innerHTML = NameifiedText;
}
function abcd(){
  document.getElementById("text-input").value = "";
  document.getElementById("text-output").innerHTML = "";
}    
