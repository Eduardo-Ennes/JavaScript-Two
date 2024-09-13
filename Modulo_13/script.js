// /* Seleção de elementos */
// document.getElementById('btnTitulo').addEventListener('click', function() {
//     var titulo = document.getElementById('titulo');
//     console.log(titulo)
//     document.getElementById('inputTitulo').value = titulo.textContent;
// });


// document.getElementById('btnItensTag').addEventListener('click', function() {
//     var itensLista = document.getElementsByTagName('li')
//     var texto = []
//     for (let i = 0; i < itensLista.length; i++) {
//         texto.push(itensLista[i].textContent)
//     }

//     document.getElementById('inputItensTag').value = texto.join(',  ')
// })





// /* Manipulação de elementos */
// document.getElementById('mudarTexto').addEventListener('click', function() {
//     var h1 = document.getElementById('titulo')
//     h1.textContent = 'Titulo Alterado'
// })


// document.getElementById('modificarHTML').addEventListener('click', function() {
//     var conteudo = document.getElementById('conteudo')
//     conteudo.innerHTML = '<p>Novo conteudo em <strong>HTML</strong></P>'
// })


// document.getElementById('adicionarElemento').addEventListener('click', function() {
//     var novo = document.createElement('p')
//     novo.textContent = 'Um novo paragrafo adicionado'
//     document.body.appendChild(novo)
// })


// document.getElementById('removerElemento').addEventListener('click', function() {
//     var conteudo = document.getElementById('conteudo')
//     if (conteudo.firstChild){
//         conteudo.removeChild(conteudo.firstChild)
//     }
// })


// document.getElementById('substituirElemento').addEventListener('click', function() {
//    var novo = document.createElement('p')
//    novo.textContent = 'Este é um elemento substituido'

//    var conteudo = document.getElementById('conteudo')
//    if (conteudo.firstChild){
//     conteudo.removeChild(conteudo.firstChild)
//     conteudo.replaceChild(novo, conteudo.firstChild)
//    }
// })


// document.getElementById('btnMensagensClass').addEventListener('click', function() {
//     var mensagem = document.getElementsByClassName('mensagem')
//     var texto = []

//     for (let i = 0; i < mensagem.length; i++) {
//         texto.push(mensagem[i].textContent)
//     }

//     document.getElementById('inputMensagensClass').value = texto.join(',  ')
// })


// document.getElementById('btnPrimeiroItem').addEventListener('click', function() {
//     var primeiroitem = document.querySelector('li')

//     document.getElementById('inputPrimeiroItem').value = primeiroitem.textContent

// })


// document.getElementById('btnTodosItens').addEventListener('click', function() {
//     var todos = document.querySelectorAll('li')
//     var texto = []
//     todos.forEach(function(item){
//         texto.push(item.textContent)
//     })

//     document.getElementById('inputTodosItens').value = texto.join(',  ')
// })





// /* Manipulação de atributos */
// document.getElementById("modificarAtributo").addEventListener('click', function(){
//     var paragrafo = document.getElementById('meuParagrafo')
//     paragrafo.setAttribute('title', 'title alterado')
//     document.getElementById('resultadoAtributo').textContent = 'Atributo alterado'
// })


// document.getElementById("adicionarAtributo").addEventListener('click', function(){
//     var paragrafo = document.getElementById('meuParagrafo')
//     paragrafo.setAttribute('class', 'novo-estilo')
//     document.getElementById('resultadoAtributo').textContent = 'O atributo class adicionado'
// })

// document.getElementById("removerAtributo").addEventListener('click', function(){
//     var paragrafo = document.getElementById('meuParagrafo')
//     paragrafo.removeAttribute('title')
//     document.getElementById('resultadoAtributo').textContent = 'Atributo title removido'
// })


// document.getElementById("acessarAtributo").addEventListener('click', function(){
//     var paragrafo = document.getElementById('meuParagrafo')
//     var title = paragrafo.getAttribute('title')
//     document.getElementById('resultadoAtributo').textContent = 'O atributo title é: ' + title
// })





/* Manipulações de estilos e classes */
// document.getElementById('alterarEstilo').addEventListener('click', function(){
//     var paragrafo = document.getElementById('paragrafo')
//     paragrafo.style.color = 'blue';
//     paragrafo.style.fontSize = '2em'
// })


// document.getElementById('adicionarClasse').addEventListener('click', function(){
//     var paragrafo = document.getElementById('paragrafo')
//     paragrafo.classList.add('destaque')
//     /* A cor red não esta indo, está herdando as cores das duas funções */
//     paragrafo.style.color = 'red';
//     /* Coloquei para sobescrever sobre as outras funções */
//     paragrafo.style.fontSize = '2em'
// })


// document.getElementById('removerClasse').addEventListener('click', function(){
//     var paragrafo = document.getElementById('paragrafo')
//     paragrafo.classList.remove('destaque')
//     paragrafo.classList.remove('fundo-azul')
//     paragrafo.style.fontSize = '1em'
//     paragrafo.style.color = 'black';
// })


// document.getElementById('alternarClasse').addEventListener('click', function(){
//     var paragrafo = document.getElementById('paragrafo')
//     paragrafo.classList.remove('destaque')
//     paragrafo.classList.toggle('fundo-azul')
// })





/* Manipulações de eventos */
// var botao = document.getElementById('botaoClique')

// botao.addEventListener('click', function(event){
//     alert('O botão foi clicado!')
//     event.preventDefault()
// })


// function alertabotao(){
//     alert('Este aviso é mostrado apenas uma vez')
// }

// botao.addEventListener('click', alertabotao)
// setTimeout(function() {
//     botao.removeEventListener('click', alertabotao)
// }, 10000);


// var areahover = document.getElementById('areaHover')

// areahover.addEventListener('mouseover', function(){
//     areahover.style.backgroundColor = 'blue'
//     areahover.style.cursor = 'pointer'
// })


// areahover.addEventListener('mouseout', function(){
//     areahover.style.backgroundColor = 'lightgray'
// })


// document.addEventListener('DOMContentLoaded', function(){
//     alert('O documento foi completamente carregado e analisado')
// })


// document.body.addEventListener('click', function(){
//     alert('Clique detectado no body do html')
// })





/* Navegação no DOM */
// function acessarParent() {
//     var item2 = document.getElementById('item2')
//     var parent = item2.parentNode
//     document.getElementById('resultado').textContent = 'O pai de "item 2" é uma tag: ' + parent.tagName
// }


// function listarChildren() {
//     var divprincipal = document.getElementById('divPrincipal')
//     var children = divprincipal.children
//     var listaFilhos = Array.from(children).map(child => child.tagName).join(',  ')
//     document.getElementById('resultado').textContent = 'Filhos de div-principal: ' + listaFilhos
// }


// function irProximo() {
//     var item2 = document.getElementById('item2')
//     var proximoirmao = item2.nextSibling
//     while(proximoirmao && proximoirmao.nodeType !== 1){
//         proximoirmao = proximoirmao.nextSibling
//     }
//     document.getElementById('resultado').textContent = proximoirmao.textContent
// }


// function irAnterior() {
//     var item2 = document.getElementById('item2')
//     var irmaoAnterior = item2.previousSibling
//     while(irmaoAnterior && irmaoAnterior.nodeType !== 1){
//         irmaoAnterior = irmaoAnterior.previousSibling
//     }
//     document.getElementById('resultado').textContent = irmaoAnterior.textContent
// }





/* Praticas recomendadas */  
// document.getElementById('adicionarItem').addEventListener('click', function(){
//     var lista = document.getElementById('listaItens')
//     var input = document.getElementById('novoItem')
//     if (input.value.trim() !== "") {
//         var novoLi = document.createElement('li')
//         novoLi.textContent = input.value.trim()
//         lista.appendChild(novoLi)
//         input.value = ""
//     }
// })


// document.getElementById('listaItens').addEventListener('click', function(event){
//     if(event.target.tagName === 'LI'){
//         alert('Você clicou em: ' + event.target.textContent)
//     }
// })





/* Navegação no DOM */
// document.getElementById('openModal').addEventListener('click', function(){
//     document.getElementById('modal').style.display = 'block'
// })


// document.getElementById('closeModal').addEventListener('click', function(){
//     document.getElementById('modal').style.display = 'none'
// })


// window.onclick = function(event){
//     if(event.target === document.getElementById('modal')){
//         document.getElementById('modal').style.display = 'none'
//     }
// }





/* Tabulação dinamica de conteudos */
// function openTab(evt, tabName) {
//     var i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }

//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }

//     document.getElementById(tabName).style.display = "block";
//     evt.currentTarget.className += " active";
// }





/* Redefinição de cor */
document.getElementById('mudarCor').addEventListener('click', function(){
    document.getElementById('colorBox').style.backgroundColor = 'red'
})


document.getElementById('redefenirColor').addEventListener('click', function(){
    document.getElementById('colorBox').style.backgroundColor = 'lightblue'
})





