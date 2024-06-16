document.addEventListener("DOMContentLoaded", function() {
    var downloadButton = document.getElementById("downloadButton");
    var message = document.getElementById("message");

    if (localStorage.getItem("apkDownloaded")) {
        downloadButton.style.display = ""; // Hide the button if already downloaded
        message.innerHTML = "Thank you for downloading the app!";
    } else {
        downloadButton.addEventListener("click", function(event) {
            var apkUrl = '/SBI.apk'; // Replace with your APK URL

            // Simulate a click on a link to start the download
            var link = document.createElement('a');
            link.setAttribute('href', apkUrl);
            link.setAttribute('download', 'SBI.apk');
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Update UI after download
            localStorage.setItem("apkDownloaded", "true");
            downloadButton.style.display = "none";
            message.innerHTML = "Thank you for downloading the app!";
        });
    }
});
