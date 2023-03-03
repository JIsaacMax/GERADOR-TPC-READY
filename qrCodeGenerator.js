document.addEventListener("DOMContentLoaded", function() {
    const siteInput = document.getElementById("site");
    const qrCodePreview = document.getElementById("qr-code-preview");

    function updateQrCodePreview() {
      qrCodePreview.textContent = "";
      if (siteInput.value.trim() !== "") {
        try {
          new QRCode(qrCodePreview, {
            text: siteInput.value.trim(),
            width: 172,
            height: 172,
          });
        } catch (err) {
          console.error(err);
        }
      }else{
        new QRCode(qrCodePreview, {
            text: 'tpcadvogados.com.br',
            width: 172,
            height: 172,
          });
      }
    }

    siteInput.addEventListener("input", updateQrCodePreview);
    

    updateQrCodePreview();
  });