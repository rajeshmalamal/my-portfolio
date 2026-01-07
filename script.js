function handlePhotoError(img) {
  img.style.display = "none";
  img.nextElementSibling.style.display = "flex";
}

function handleCvClick() {
  fetch("Rajesh_Malamal_CV.pdf", { method: "HEAD" })
    .then(res => {
      if (!res.ok) {
        alert(
          "CV is temporarily unavailable.\n\nPlease email rajeshm888@gmail.com and I will share it immediately."
        );
      }
    })
    .catch(() => {
      alert(
        "CV is temporarily unavailable.\n\nPlease email rajeshm888@gmail.com and I will share it immediately."
      );
    });
  return true;
}
