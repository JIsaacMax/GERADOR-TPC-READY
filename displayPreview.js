// Seleciona os elementos de input
const nomeInput = document.getElementById("nome");
const singleQrInput = document.getElementById("single-qr");
const siteInput = document.getElementById("site");
const telefoneInput = document.getElementById("telefone");
const whatsappInput = document.getElementById("whatsapp");
const emailInput = document.getElementById("email");
const linkedinInput = document.getElementById("linkedin");
const enderecoSelect = document.getElementById("endereco");

// Seleciona os elementos de preview
const nomePreview = document.getElementById("p-nome");
const telefonePreview = document.getElementById("p-telefone");
const whatsappPreview = document.getElementById("p-whatsapp");
const emailPreview = document.getElementById("p-email");
const linkedinPreview = document.getElementById("p-linkedin");
const sitePreview = document.getElementById("p-site");
const enderecoPreview = document.getElementById("p-endereco");

// Variáveis para armazenar o innerText anterior de cada preview
let nomePreviewAnterior = nomePreview.innerText;
let telefonePreviewAnterior = telefonePreview.innerText;
let whatsappPreviewAnterior = whatsappPreview.innerText;
let emailPreviewAnterior = emailPreview.innerText;
let linkedinPreviewAnterior = linkedinPreview.innerText;
let sitePreviewAnterior = sitePreview.innerText;
let enderecoPreviewAnterior = enderecoPreview.innerText;


//Formatação de numero para preview
function formatPhone(number) {
    if(!number){
        return null;
    }

    // regex para encontrar apenas os números no número de telefone
    const regex = /(\d{2})(\d{5})(\d{4})/;
    
    // substitui o número pelo formato desejado
    return number.replace(regex, "($1) $2-$3");
}


function inputFormat(){
  nomeInput.value.replace(/[0-9.]/g,'');

  whatsappInput.value = whatsappInput.value
  .replace(/\D/g, "")
  .replace(/(\d{2})(\d)/, "($1) $2")
  .replace(/(\d{5})(\d{4})(\d)/, "$1-$2");
  
  telefoneInput.value = telefoneInput.value
  .replace(/\D/g, "")
  .replace(/(\d{2})(\d)/, "($1) $2")
  .replace(/(\d{4})(\d{4})(\d)/, "$1-$2");
}

function linkedinFormat(){
  let formattedNickList = linkedinInput.value.split('/')

  let formattedNick = formattedNickList[formattedNickList.length-2];

  return (formattedNick? '@'+formattedNick : null);
}

function siteUrlFormat(){
  let pureLink = siteInput.value.replace('https://','').split('/');
  let formatLink = `${(pureLink[0].split("."))[0]}/${pureLink[pureLink.length-2]}`;
  console.log(siteInput.value);
  console.log(formatLink);
  return formatLink;
}

// Função que atualiza os valores dos previews
function updatePreview() {
  
  // Verifica se o valor dos inputs está vazio e, se sim, retorna o valor anterior do preview
  /*
  Código opcional para formatar o nome entre o primeiro, segundo e ultimo apenas
    let nomeSplit = nomeInput.value.split(" ");


    if(nomeSplit.length < 3){
    nomePreview.textContent = nomeSplit[0].concat(' ').concat(nomeSplit[1] || '').concat(nomeSplit[2] || '').toString().toUpperCase() || nomePreviewAnterior;
    if(nomeSplit.length-1 ==''){
      nomePreview.textContent = nomeSplit[0].concat(' ').concat(nomeSplit[1] || '').concat(nomeSplit[2] || '').toString().toUpperCase() || nomePreviewAnterior;
    }
    }
    else{
    nomePreview.textContent = nomeSplit[0].concat(' '+nomeSplit[1] || '').concat(' '+nomeSplit[nomeSplit.length-1] || '').toString().toUpperCase() || nomePreviewAnterior;
    if(nomeSplit.length-1 ==''){
      nomePreview.textContent = nomeSplit[0].concat(' '+nomeSplit[1] || '').concat(' '+nomeSplit[nomeSplit.length-2] || '').toString().toUpperCase() || nomePreviewAnterior;
    }
    }
  */

    nomePreview.textContent = nomeInput.value.toUpperCase() || nomePreviewAnterior;
    //Atualiza visualmente os inputs inseridos
    telefonePreview.textContent = formatPhone(telefoneInput.value) || telefonePreviewAnterior;
    // whatsappPreview.textContent = formatPhone(whatsappInput.value) || whatsappPreviewAnterior;
    emailPreview.textContent = String(emailInput.value).toLowerCase() || emailPreviewAnterior;
    linkedinPreview.textContent = linkedinPreviewAnterior //linkedinFormat() || linkedinPreviewAnterior;
    sitePreview.textContent = siteUrlFormat() || sitePreviewAnterior;


    // Atualiza o valor do endereço do preview de acordo com a opção selecionada no select
    switch (enderecoSelect.value) {
      case "bh":
        enderecoPreview.innerText = "Rua Eduardo Porto, 599 Cidade Jardim Belo Horizonte MG CEP 30380 060";
        break;
      case "sp":
        enderecoPreview.innerText = "Rua Bandeira Paulista, 726\n17º andar Itaim Bibi São Paulo SP CEP 04532 002";
        break;
      case "jm":
        enderecoPreview.innerText = "Rua João Monlevade, 500, João Monlevade - MG";
        break;
      default:
        break;
    }
}

function siteEnable(){
  let Label = document.querySelector("#label-site")
  if(this.checked){
    Label.classList.remove("hidden");
    siteInput.classList.remove("hidden");
  }
  else
  {
    Label.classList.add("hidden")
    siteInput.classList.add("hidden");
  }
}
  


function callAllFunctions(){
  formatPhone();
  inputFormat();
  updatePreview();
}
            
// Adiciona um listener de input para cada elemento de input
nomeInput.addEventListener("input", callAllFunctions);
singleQrInput.addEventListener("input", siteEnable);
siteInput.addEventListener("input", callAllFunctions);
telefoneInput.addEventListener("input", callAllFunctions);
whatsappInput.addEventListener("input", callAllFunctions);
emailInput.addEventListener("input", callAllFunctions);
linkedinInput.addEventListener("input", callAllFunctions);
enderecoSelect.addEventListener("change", callAllFunctions);

// Atualiza o valor das variáveis que armazenam o innerText anterior dos previews
nomePreviewAnterior = nomePreview.innerText;
telefonePreviewAnterior = telefonePreview.innerText;
whatsappPreviewAnterior = whatsappPreview.innerText;
emailPreviewAnterior = emailPreview.innerText;
linkedinPreviewAnterior = linkedinPreview.innerText;
sitePreviewAnterior = sitePreview.innerText;
enderecoPreviewAnterior = enderecoPreview.innerText;