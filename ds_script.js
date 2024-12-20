// Optional JavaScript functionality for additional interactivity
document.querySelectorAll('.gallery img').forEach((img) => {
  img.addEventListener('click', () => {
    alert(`You clicked on: ${img.alt}`);
  });
});
