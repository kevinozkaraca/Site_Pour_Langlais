let h1Title = document.querySelectorAll("h1");
// travail effectué sur les "div"
h1Title.forEach((divs) => {
  for (i = 0; i < divs.textContent.length; i++) {
    divs.style.color = "blue";
  }
});
