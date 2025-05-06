document.getElementById("novelSelector").addEventListener("change", function () {
    const file = this.value;
    fetch(file)
      .then((response) => response.text())
      .then((text) => {
        document.getElementById("novelContent").textContent = text;
      })
      .catch((error) => {
        document.getElementById("novelContent").textContent = "Error loading novel.";
        console.error(error);
      });
  });
  