function generateQRCode() {
    var qrData = document.getElementById('qrData').value;

    if (qrData.trim() !== '') {
        var qrCodeDisplay = document.getElementById('qrCodeDisplay');
        qrCodeDisplay.innerHTML = ''; // Clear previous QR code

        var qr = new QRCode(qrCodeDisplay, {
            text: qrData,
            width: 128,
            height: 128
        });
    }
}
