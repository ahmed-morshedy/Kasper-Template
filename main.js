const imgs = Array.from(
  document.querySelectorAll(".portfolio .content div img")
);
// div that contain imgs
const div = Array.from(document.querySelectorAll(".portfolio .content .imge"));
const lis = document.querySelectorAll(".shuffle ul li");
let active = document.querySelector(".portfolio .active");
let but = document.querySelector(".more");

//Hide images
const numOfImg = imgs.length;
const numOfShow = 4;
for (let i = 0; i < numOfImg; i++) {
  if (i > numOfShow - 1) {
    div[i].style.display = "none";
  }
}

if (numOfImg > numOfShow) {
  but.style.display = "block";
}

lis.forEach((li) => {
  li.addEventListener("click", remove);
  li.addEventListener("click", mangeImg);
});

function remove() {
  lis.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}
const message = document.querySelector(".portfolio .message");

function mangeImg() {
  div.forEach((img) => {
    img.style.display = "none";
  });
  message.style.display = "none";
  let select = document.querySelectorAll(this.dataset.cat);
  const numLiImgs = select.length;
  for (let j = 0; j < numLiImgs; j++) {
    if (j == numOfShow) {
      break;
    }
    select[j].style.display = "inline-block";
  }
  if (numLiImgs > numOfShow) {
    but.style.display = "block";
  } else {
    but.style.display = "none";
  }
  if (numLiImgs === 0) {
    message.style.display = "block";
    message.innerHTML = `<h2>Sorry, No images in this tab to show</h2>`;
  }
}

but.addEventListener("click", () => {
  lis.forEach((li) => {
    //select active list
    if (li.classList == "active") {
      //select active images
      let activeImg = document.querySelectorAll(li.dataset.cat);
      //show all hidden images
      for (let img of activeImg) {
        img.style.display = "inline";
        but.style.display = "none";
      }
    }
  });
});
