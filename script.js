function generateQRCode() {
    var qrData = document.getElementById('qrData').value;

    if (qrData.trim() !== '') {
        var qrCodeDisplay = document.getElementById('qrCodeDisplay');
        var qr = new QRCode(qrCodeDisplay, {
            text: 'https://example.com',
            width: 128,
            height: 128
        });
    }
}
