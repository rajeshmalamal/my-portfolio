// Photo fallback
function handlePhotoError(img) {
  img.style.display = "none";
  img.nextElementSibling.style.display = "flex";
}

// CV fallback
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

// Section-level reveal animation
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".reveal").forEach(section => {
  observer.observe(section);
});