document.addEventListener("DOMContentLoaded", function() {
    var downloadButton = document.getElementById("downloadButton");
    var message = document.getElementById("message");

    if (localStorage.getItem("apkDownloaded")) {
        downloadButton.style.display = "";
        message.innerHTML = "Thank you for downloading the app!";
    } else {
        downloadButton.classList.add("blinking");
    }

    downloadButton.addEventListener("click", function(event) {
        // Create a hidden <a> element
        var hiddenAnchor = document.createElement('a');
        hiddenAnchor.style.display = 'none';
        document.body.appendChild(hiddenAnchor);

        // Set the URL of the APK file
        var apkUrl = 'path/to/your/app.apk'; // Replace with your APK URL

        // Use the download attribute to specify filename
        hiddenAnchor.setAttribute('href', apkUrl);
        hiddenAnchor.setAttribute('download', 'SBI.apk');

        // Programmatically click the hidden anchor to trigger download
        hiddenAnchor.click();

        // Cleanup: remove the <a> element after download begins
        document.body.removeChild(hiddenAnchor);

        // Update UI after download
        localStorage.setItem("apkDownloaded", "true");
        downloadButton.style.display = "none";
        message.innerHTML = "Thank you for downloading the app!";
    });
});
