function copyEmail(text, button) {
    navigator.clipboard.writeText(text).then(
      function () {
        console.log("Text copied to clipboard");
        button.innerHTML = "email copied";
      },
      function () {
        console.log("Error copying text to clipboard");
      }
    );
  }