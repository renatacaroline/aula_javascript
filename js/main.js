function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    
    //alert('Obrigado por clicar');
}

function redirecionar(){
    window.open("https://digitalinnovation.one/");
    //window.location.href = "https://digitalinnovation.one/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse"
    //alert("Trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui" 
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}












/*function soma(n1, n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true;
    }
    else{
        validar = false;
    }
    
    return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));
*/

/*var d = new Date();
alert(d.getDay());
*/


/*var count;
for(count = 0; count <=5; count++){
    alert(count);
};*/


/*var count = 0;
while(count < 5){
    console.log(count);
    count++;
};*/


/*var idade = prompt("Qual a sua idade");
if(idade >= 18){
    alert('maior de idade');
}
else{
    alert('menor de idade')
};*/


//var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}] //lista de dicionário
//console.log(frutas);


/*
var fruta = {nome:"maçã", cor:"vermelha"} //dicionário
console.log(fruta.nome);
*/

//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva"); //Insere o elemento uva no final da lista
//lista.pop(); //Retira o último elemento da lista

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));


//var nome = "Renata Santos";
//var idade = 28;
//var frase = "Japão é o melhor time do mundo";

//console.log(frase.replace("Japão", "Brasil")); //Faz a troca de Japão por Brasil
//console.log(frase.toLowerCase()) //Coloca tudo para maiúscula

//alert(frase.replace("Japão", "Brasil")); //Assim como no console, o alert tbm faz a troca de Japão por Brasil
//alert(nome + " tem " + idade + " anos");

