
    var data = new Date();
    var dia = String(data.getDate())
    var mes = String(data.getMonth()+1) 
    var ano = String(data.getFullYear())
    var sano = String(document.querySelector('select#ano'))
    var smes = String(document.querySelector('select#mes'))
    var sdia = String(document.querySelector('select#Dia'))
    var mimg = document.querySelector('img#imge2')
    var dimg = document.querySelector('img#imge1')
    var aimg = document.querySelector('img#imge3')




function clicar(){
    let senha1 = document.querySelector('input#senha1')
    let senha2 =document.querySelector('input#senha2')
    if(document.querySelector('input#senha2').value == 0 || document.querySelector('input#senha1').value == 0||document.querySelector('input#nome').value == 0 || document.querySelector('input#email').value == 0) {
    document.querySelector('p#p1').innerHTML ='Verifique os dados e tente novamente' } 
    else if(senha1.value != senha2.value){document.querySelector('p#p1').innerHTML ='Digite a mesma senha nos dois campos'
    document.querySelector('input#senha1').style.borderColor = 'red'
    document.querySelector('input#senha2').style.borderColor = 'red'
   
}

 
}
 function clicar1(){
    if(document.querySelector('input#email').value == 0){document.querySelector('input#email').style.borderColor = "#ff0000"}
    
}
function sair1(){if(document.querySelector('input#email').value != 0){document.querySelector('input#email').style.borderColor = "black"}}
function clicar2(){
    if(document.querySelector('input#nome').value == 0){document.querySelector('input#nome').style.borderColor = "#ff0000"}
}   
function sair2(){
    if(document.querySelector('input#nome').value != 0){document.querySelector('input#nome').style.borderColor = "black"}
}
function clicar3(){
    if(document.querySelector('input#senha1').value == 0){
        document.querySelector('input#senha1').style.borderColor = 'red'
    }}
function sair3(){
    if(document.querySelector('input#senha1').value != 0){document.querySelector('input#senha1').style.borderColor = 'black'}
}

function clicar4(){ if(document.querySelector('input#senha2').value == 0){
    document.querySelector('input#senha2').style.borderColor = 'red'}}
function sair4(){
    if(document.querySelector('input#senha2').value != 0){
        document.querySelector('input#senha2').style.borderColor = 'black'


    }
}
function MM_openBrWindow(theUrl, winName, features) {
    window.open(theUrl, winName, features);
    }
function mes1(){
    if(document.querySelector('select#mes').value > mes && document.querySelector('select#ano') >= ano ){

    mimg.setAttribute("src","../imagens")
    }
}