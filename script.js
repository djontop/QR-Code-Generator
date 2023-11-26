document.addEventListener('DOMContentLoaded', function() {
    var qrCodeDisplay = document.getElementById('qrCodeDisplay');
    var qr = new QRCode(qrCodeDisplay, {
        text: '',
        width: 128,
        height: 128,
        correctLevel: QRCode.CorrectLevel.M
    });

    function generateQRCode() {
        var qrData = document.getElementById('qrData').value;

        if (qrData.trim() !== '') {
            qr.clear();
            var logoPath = 'secret.jpg';
            var logoImage = new Image();
            logoImage.src = logoPath;
            
            logoImage.onload = function() {
                qr.makeCode(qrData);
                var canvas = document.querySelector('.qrcode canvas');
                var context = canvas.getContext('2d');
                var logoSize = 30;
                var logoPosX = 50;
                var logoPosY = 50;

                context.save();
                context.beginPath();
                context.arc(logoPosX + logoSize / 2, logoPosY + logoSize / 2, logoSize / 2, 0, 2 * Math.PI);
                context.clip();
                context.drawImage(logoImage, logoPosX, logoPosY, logoSize, logoSize);
                context.restore();

                document.getElementById('downloadButton').removeAttribute('disabled');
            };
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
