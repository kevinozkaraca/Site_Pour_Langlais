let pagestitles = document.querySelectorAll("a");

pagestitles.forEach(() => {
  for (let i = 6; i < pagestitles.length; i++) {
    pagestitles[i].style.background = `rgb(${i * 0.2}, ${i * 0.5}, ${i * 5})`;
  }
});

//rgb(8, 0, 114);
