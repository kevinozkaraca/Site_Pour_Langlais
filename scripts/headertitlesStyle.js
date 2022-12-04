let headertitles = document.querySelectorAll("a");

headertitles.forEach(() => {
  for (let i = 0; i < 6; i++) {
    headertitles[i].style.background = `rgb(${i * 30.5}, ${i * 0.5}, ${i * 5.5})`;
  }
});
