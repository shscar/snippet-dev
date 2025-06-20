function preview() {
  const input = document.getElementById("file-input");
  const container = document.getElementById("images");
  const numOfFiles = document.getElementById("num-of-files");

  const files = Array.from(input.files);
  updateFileCount(files.length);

  files.forEach((file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const figure = document.createElement("figure");

      figure.innerHTML = `
        <img src="${e.target.result}" alt="${file.name}">
        <figcaption>${file.name}</figcaption>
        <button class="remove-btn"><i class="fas fa-trash"></i></button>
      `;

      figure.querySelector(".remove-btn").onclick = () => {
        container.removeChild(figure);
        updateFileCount(container.querySelectorAll("figure").length);
      };

      container.appendChild(figure);
    };
    reader.readAsDataURL(file);
  });

  function updateFileCount(count) {
    numOfFiles.textContent =
      count > 0 ? `${count} file(s) dipilih` : "Tidak ada file yang dipilih";
  }
}
