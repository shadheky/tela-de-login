function clicar(){
 
var input1 = document.querySelector('input#ipnt1')
if(input1.value==0){document.querySelector('p#p1').innerHTML ='Cheque os dados e tente novamente'
document.querySelector('p#p1').style.color ='red'

}else{document.querySelector('p#p1').innerHTML ='Recebemos o seu pedido, se este email esta vinculado a alguma conta você recebera uma solicitação de troca de senha !!'
document.querySelector('p#p1').style.color = 'black'

}


}