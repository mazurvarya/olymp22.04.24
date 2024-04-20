//  let items = document.querySelectorAll(".item");
// // const blockWidth = 20;
// // let S = Math.ceil(blocks.offsetWidth * blocks.offsetHeight)/(blockWidth*blockWidth);
// // console.log(S);


//  for (let i = 0; i < 9; i++) {
//    item.insertAdjacentHTML("afterbegin", '<div class="block"></div>')
//  }
//  let color = document.getElementById("color");
//  console.log((color.value));

//  let blocksList = document.querySelectorAll(".block");

// let isDraw = false

// blocks.addEventListener("mousedown", () => {
//   isDraw = true
// })

// blocks.addEventListener("mouseup", () => {
//   isDraw = false
// })

//  blocksList.forEach(block => {
//   block.addEventListener("mouseenter", () => {
//     if (isDraw) {
//       block.style.backgroundColor = color.value
//     } 
//   })
//  })

  // blocks[i].addEventListener("mouseenter", function () {
  //   console.log("жмакнули", i);
  //   blocks[i].classList.add("--active");
  // setTimeout(() => {
  //   blocks[i].classList.remove("--active");
  // }, 1000);
  //    });

let items = document.querySelectorAll(".item")
items.forEach((element) => {
  element.onclick = () => {
    element.classList.remove("--active");
  };
})
function random(min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
const game = setInterval(() => {
  let randNum = random(0, 9);
  items
})