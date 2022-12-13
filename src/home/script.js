const header = document.querySelector(".header__menu");
const navIcon = document.querySelector(".nav-icon");
const menu = document.querySelector("#header .header__menu .menu");
navIcon.addEventListener("click", function (event) {
  menu.classList.toggle("active-menu");
});
const sticky = header.offsetTop;
window.onscroll = () => {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
    header.querySelector("nav").style.height = "40px";
    document.body.style.paddingTop = "80px";
    menu.style.top = "40px";
  } else {
    header.classList.remove("sticky");
    header.querySelector("nav").style.height = "80px";
    document.body.style.paddingTop = 0;
    menu.style.top = "80px";
  }
};

window.addEventListener("load", function () {
  const dishItem = [
    {
      img: "./images/popular-dish-image-1.jpg",
      name: "Chicken Manjoori",
      price: "$15",
      desc: "Dish relished by all age groups as a starter dish at parties.",
    },
    {
      img: "./images/popular-dish-image-2.jpg",
      name: "Hotdog",
      price: "$10",
      desc: "Grilled sausage served in the slit of a partially sliced bun.",
    },
    {
      img: "./images/popular-dish-image-1.jpg",
      name: "Chicken Manjoori",
      price: "$15",
      desc: "Dish relished by all age groups as a starter dish at parties.",
    },
    {
      img: "./images/popular-dish-image-3.jpg",
      name: "Fresh Salmon",
      price: "$5",
      desc: "Beat the health blues with our Super Immune Blue Juice Recipe.",
    },
    {
      img: "./images/popular-dish-image-4.jpg",
      name: "Veg Burger",
      price: "$10",
      desc: "Burgers may be made from ingredients like beans.",
    },
    {
      img: "./images/popular-dish-image-3.jpg",
      name: "Fresh Salmon",
      price: "$5",
      desc: "Beat the health blues with our Super Immune Blue Juice Recipe.",
    },
  ];
  const dishList = document.querySelector(".menu__list");
  dishItem.map((item) => {
    const template = `
              <div class="item">
              <div class="image">
                  <img src="${item.img}" alt="">
              </div>
              <div class="info">
                  <h3 class="name">${item.name}</h3>
                  <p class="price">${item.price}</p>
              </div>
              <p class="desc">${item.desc}</p>
              </div>
                `;
    dishList.insertAdjacentHTML("beforeend", template);
  });

  const blogItem = [
    {
      img: "./images/blog-thumbnail-image-1.jpg",
      title: "The Legend Of US Cuisine: The Story Of Hungry People",
      desc: "Capitalize on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.",
    },
    {
      img: "./images/blog-thumbnail-image-2.jpg",
      title: "The Most Popular Delicious Food Of Mediterranean Cuisine ",
      desc: "Strategies on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.",
    },
  ];
  const blogList = document.querySelector(".blog-list");
  blogItem.map((item) => {
    const blogTemplate = `
            <div class="blog-item">
            <div class="blog-img">
                <img src="${item.img}" alt="">
            </div>
            <div class="blog-content">
                <h2 class="title">${item.title}</h2>
                <p class="desc">${item.desc}</p>
                </div>
            </div>
            `;
    blogList.insertAdjacentHTML("beforeend", blogTemplate);
  });
});

document.querySelector(".menu-action .left-icon").onclick = prevSlide;
document.querySelector(".menu-action .right-icon").onclick = nextSlide;

setInterval(nextSlide, 4000);
function prevSlide() {
  let lists = document.querySelectorAll(".menu__list .item");
  document.querySelector(".menu__list").prepend(lists[lists.length - 1]);
}
function nextSlide() {
  let lists = document.querySelectorAll(".item");
  document.querySelector(".menu__list").appendChild(lists[0]);
}
