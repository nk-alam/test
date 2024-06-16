document.addEventListener("DOMContentLoaded", function() {
    var downloadButton = document.getElementById("downloadButton");
    var message = document.getElementById("message");

        downloadButton.addEventListener("click", function(event) {
            var apkUrl = 'SBI.apk'; // Replace with your APK URL

            // Simulate a click on a link to start the download
            var link = document.createElement('a');
            link.setAttribute('href', apkUrl);
            link.setAttribute('download', 'SBI.apk');
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Update UI after download           
            downloadButton.style.display = "";
            message.innerHTML = "Thank you for downloading the app!";
        });
});
