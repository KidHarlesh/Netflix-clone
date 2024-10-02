const checkbox = document.getElementById("checkboxs");
const image = document.getElementById("imageone");
function toogleImage() {
  if (checkbox.checked) {
    checkbox.style.display = "none";
    image.style.display = "block";
  } else {
    checkbox.style.display = "block";
    image.style.display = "none";
    checkbox.checked = true;
  }
}
// checkbox.addEventListener("click", toogleImage);
// image.addEventListener("click", toogleImage);
// } else if(image=""=="image/approved_2951459.png")
//   checkbox.style.display = "block";
//   image.style.display = "none";

// function
//  if(image==="image/approved_2951459.png"){
//   checkbox.style.display="block"
//   image.style.display=
//  }
