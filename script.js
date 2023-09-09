document.addEventListener("DOMContentLoaded", function () {
  const generateButton = document.getElementById("generate");
  const downloadButton = document.getElementById("download-format");
  const qrImage = document.getElementById("qr-image");

  generateButton.addEventListener("click", function () {
    const data = document.getElementById("data").value;
    const width = parseInt(document.getElementById("width").value);
    const height = parseInt(document.getElementById("height").value);
    const qrColor = document.getElementById("qr-color").value;
    const bgColor = document.getElementById("bg-color").value;
    const format = document.getElementById("format").value;

    // Construct the API URL with your data and options
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${width}x${height}&data=${encodeURIComponent(
      data
    )}&color=${encodeURIComponent(
      qrColor.substring(1)
    )}&bgcolor=${encodeURIComponent(bgColor.substring(1))}&format=${format}`;

    // Set the src attribute of the qrImage element to the generated QR code URL
    qrImage.src = apiUrl;
    qrImage.style.display = "block";
  });

  downloadButton.addEventListener("click", function () {
    const format = document.getElementById("format").value;

    // Check if the QR code image is displayed
    if (qrImage.style.display === "block") {
      // Create a download link
      const downloadLink = document.createElement("a");
      downloadLink.href = qrImage.src;
      downloadLink.download = `qrcode.${format}`;

      // Trigger the download
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } else {
      alert("Please generate the QR code first.");
    }
  });
});
