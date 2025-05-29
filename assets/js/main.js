document.addEventListener("DOMContentLoaded", function () {
    const textInput = document.getElementById("textInput");
    const currentCount = document.getElementById("currentCount");
    const humanizeBtn = document.getElementById("humanizeBtn");
    const copyBtn = document.getElementById("copyBtn");
    const resultText = document.getElementById("resultText");
  
    function updateCharCount() {
      const count = textInput.value.length;
      currentCount.textContent = count;
    }
  
    function showNotification(message) {
      const notification = document.createElement("div");
      notification.className =
        "fixed top-4 right-4 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg transition-opacity duration-300";
      notification.textContent = message;
      document.body.appendChild(notification);
      setTimeout(() => {
        notification.style.opacity = "0";
        setTimeout(() => notification.remove(), 300);
      }, 2000);
    }
  
    humanizeBtn.addEventListener("click", function () {
    const inputText = textInput.value.trim();
    if (!inputText) {
        showNotification("Please enter some text first");
        return;
    }

    resultText.textContent = "Processing...";

    fetch("https://humanizer.pythonanywhere.com/rewrite", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: inputText })
    })
        .then(response => {
        if (!response.ok) {
            throw new Error("Failed to get response from server");
        }
        return response.json();
        })
        .then(data => {
        resultText.textContent = data.rewritten || "No result received";
        showNotification("Text has been humanized");
        })
        .catch(error => {
        console.error(error);
        resultText.textContent = "An error occurred while processing";
        showNotification("Error communicating with the server");
        });
    });

      
  
    copyBtn.addEventListener("click", function () {
        const result = resultText.textContent;
        if (result && result !== "Your rewritten text will appear here...") {
          navigator.clipboard.writeText(result).then(() => {
            showNotification("Result copied to clipboard");
          }).catch(() => {
            showNotification("Failed to copy");
          });
        } else {
          showNotification("No result to copy");
        }
      });
      
  
    textInput.addEventListener("input", updateCharCount);
  });
  