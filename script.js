document.addEventListener('DOMContentLoaded', function () {
    var qrCodeDisplay = document.getElementById('qrCodeDisplay');
    var qr = new QRCode(qrCodeDisplay, {
        text: '',
        width: 128,
        height: 128,
        correctLevel: QRCode.CorrectLevel.M,
    });

    function generateQRCode() {
        var qrData = document.getElementById('qrData').value;

        if (qrData.trim() !== '') {
            qr.clear();
            qr.makeCode(qrData);
            document.getElementById('downloadButton').removeAttribute('disabled');
        }
    }

    function downloadQRCode() {
        var qrCodeCanvas = document.querySelector('.qrcode canvas');
        var imageDataURL = qrCodeCanvas.toDataURL('image/png');
        var downloadLink = document.createElement('a');
        downloadLink.href = imageDataURL;
        downloadLink.download = 'qrcode.png';
        downloadLink.click();
    }

    var generateButton = document.getElementById('generateButton');
    generateButton.addEventListener('click', generateQRCode);

    var downloadButton = document.getElementById('downloadButton');
    downloadButton.addEventListener('click', downloadQRCode);
});
