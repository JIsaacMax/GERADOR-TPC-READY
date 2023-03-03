
// mapeamento de inputs individuais
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const telefone = document.querySelector("#telefone");
const whatsapp = document.querySelector("#whatsapp");
const site = document.querySelector("#site");
const linkedin = document.querySelector("#linkedin");
const endereco = document.querySelector("#endereco");
const possuiPagina = document.querySelector("#single-qr");
const btnGerar = document.querySelector("#gerar");

// mapeamento de outputs

const pNome = document.getElementById("p-nome");

// mapemanto de inputs geral
const inputs = document.querySelectorAll("input");

// mapeamento de elementos

const viewportHeight = window.innerHeight - 60;
const preview = document.getElementById("preview");

function scalePreviewToFit() {
    const previewHeight = preview.offsetHeight;
    const scale = viewportHeight / previewHeight;
    preview.style.transform = `scale(${scale})`;
}

window.addEventListener("resize", scalePreviewToFit);

scalePreviewToFit();

var jsPDF = window.jspdf.jsPDF;

function generatePDF() {
    preview.style.transform = `scale(1)`;
    // Define a altura do PDF como a altura da janela do navegador
    const pdfHeight = preview.offsetHeight;

    // Captura o elemento "preview" em uma imagem com html2canvas
    html2canvas(document.getElementById("preview")).then(function (canvas) {
        var imgData = canvas.toDataURL("image/png");

        // Calcula a largura do PDF proporcional à altura e largura da imagem
        var pdfWidth = (pdfHeight * canvas.width) / canvas.height;

        // Cria um novo objeto jsPDF com a largura e altura calculadas
        var doc = new jsPDF("p", "px", [pdfWidth, pdfHeight]);


    //!ADIÇÂO DE LINKS
        // Adiciona o link para o elemento com id "pNome"
        var pNome = document.getElementById("p-nome");
        var pTelefone = document.getElementById("p-telefone");
        var pWhatsapp = document.getElementById("p-whatsapp");
        var pEmail = document.getElementById("p-email");
        var pLinkedin = document.getElementById("p-linkedin");
        let linkedinCorrect = linkedinInput.value;

        if(!linkedinCorrect.includes('https')){
            linkedinCorrect = `https://${linkedinCorrect}`;
        }
    
        var pSite = document.getElementById("p-site");
        let siteCorrect = siteInput.value;

        if(!siteCorrect.includes('https')){
            siteCorrect = `https://${siteCorrect}`;
        }

        var pEndereco = document.getElementById("p-endereco");

        doc.link(
            pNome.offsetLeft,
            pNome.offsetTop,
            pNome.offsetWidth,
            pNome.offsetHeight,
            {
                type: "link",
                url: "https://tpcadvogados.com.br/equipe",
            }
        );

        doc.link(
            pEndereco.offsetLeft,
            pEndereco.offsetTop,
            pEndereco.offsetWidth,
            pEndereco.offsetHeight,
            {
                type: "link",
                url: "https://tpcadvogados.com.br/contato",
            }
        );

        doc.link(
            pLinkedin.offsetLeft,
            pLinkedin.offsetTop,
            pLinkedin.offsetWidth,
            pLinkedin.offsetHeight,
            {
                type: "link",
                url: linkedinCorrect,
            }
        );

        doc.link(
            pSite.offsetLeft,
            pSite.offsetTop,
            pSite.offsetWidth,
            pSite.offsetHeight,
            {
                type: "link",
                url: siteCorrect,
            }
        );
    
        doc.link(
            pWhatsapp.offsetLeft,
            pWhatsapp.offsetTop,
            pWhatsapp.offsetWidth,
            pWhatsapp.offsetHeight,
            {
                type: "link",
                url: `https://api.whatsapp.com/send?phone=${whatsappInput.value.replace(/[^0-9]/g, "")}`,
            }
        );

        doc.link(
            pTelefone.offsetLeft,
            pTelefone.offsetTop,
            pTelefone.offsetWidth,
            pTelefone.offsetHeight,
            {
                type: "link",
                url: `tel:${telefoneInput.value.replace(/[^0-9]/g, "")}`,
            }
        );

        doc.link(
            pEmail.offsetLeft,
            pEmail.offsetTop,
            pEmail.offsetWidth,
            pEmail.offsetHeight,
            {
                type: "link",
                url: `mailto:${emailInput.value}`,
            }
        );

        // Adiciona a imagem capturada no PDF e salva o arquivo
        doc.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        doc.save("preview.pdf");
    });
}

btnGerar.addEventListener("click", () => {
    generatePDF();
});

// Função para gerar um PDF com imagens e links clicáveis de um elemento HTML
// function generatePDF() {
//     // Define a altura do PDF como a altura da janela do navegador
//     const pdfHeight = window.innerHeight;

//     // Captura o elemento "preview" em uma imagem com html2canvas
//     html2canvas(document.getElementById("preview"), { scale: 1 }).then(
//         function (canvas) {
//             var imgData = canvas.toDataURL("image/png");

//             // Calcula a largura do PDF proporcional à altura e largura da imagem
//             var pdfWidth = (pdfHeight * canvas.width) / canvas.height;

//             // Cria um novo objeto jsPDF com a largura e altura calculadas
//             var doc = new jsPDF("p", "mm", [pdfWidth, pdfHeight]);

//             doc.addLink(
//                 pNome.offsetLeft,
//                 pNome.offsetTop,
//                 pNome.offsetWidth,
//                 pNome.offsetHeight,
//                 { url: "https://exemplo.com/" }
//             );
//             // Adiciona a imagem capturada no PDF e salva o arquivo
//             doc.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
//             doc.save("preview.pdf");
//         }
//     );
// }

// btnGerar.addEventListener("click", () => {
//     generatePDF();
// });

/* // Cria um novo documento PDF
const pdfDoc = await PDFDocument.create();

// Adiciona uma nova página ao documento
const page = pdfDoc.addPage();

// Adiciona um link à página
const link = page.createLink({
  x: 100, // posição x do link
  y: 100, // posição y do link
  width: 100, // largura do link
  height: 20, // altura do link
  url: 'https://www.example.com', // URL para o link
});

// Adiciona o link ao documento
page.addLink(link);

// Salva o documento em um arquivo PDF
const pdfBytes = await pdfDoc.save(); 
*/
