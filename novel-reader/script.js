document.addEventListener("DOMContentLoaded", function () {
  const selector = document.getElementById("novelSelector");
  const contentDiv = document.getElementById("novelContent");

  selector.addEventListener("change", function () {
    const file = this.value;

    fetch(file)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.text();
      })
      .then((text) => {
        contentDiv.textContent = text;
      })
      .catch((err) => {
        contentDiv.textContent = "⚠️ Failed to load novel.";
        console.error(err);
      });
  });
});
