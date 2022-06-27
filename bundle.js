const passowrdinput = document.querySelector('input#senha')
let img = document.querySelector("#olho")

function mostrar(){
  passowrdinput.setAttribute("type","text")
  img.setAttribute("src","imagens/olho.png")
}
function esconder(){
  passowrdinput.setAttribute("type","password")
  img.setAttribute("src","imagens/olhofechado.png")
}
function digitar(){
if(passowrdinput !=0){img.setAttribute("src","imagens/olhofechado.png")}


}





