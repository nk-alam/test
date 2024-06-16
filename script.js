document.addEventListener("DOMContentLoaded", function() {
    var downloadButton = document.getElementById("downloadButton");
    var message = document.getElementById("message");

    if (localStorage.getItem("apkDownloaded")) {
        downloadButton.style.display = "none";
        message.innerHTML = "Thank you for downloading the app!";
    } else {
        downloadButton.classList.add("blinking");
    }

    downloadButton.addEventListener("click", function(event) {
        setTimeout(function() {
            if (confirm("Did you complete the download?")) {
                localStorage.setItem("apkDownloaded", "true");
                downloadButton.style.display = "none";
                message.innerHTML = "Thank you for downloading the app!";
            }
        }, 3000); // Wait 3 seconds before asking for download completion
    });
});
