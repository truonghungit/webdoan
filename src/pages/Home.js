import image1 from "../images/popular-dish-image-1.jpg";
import image2 from "../images/popular-dish-image-2.jpg";
import image3 from "../images/popular-dish-image-3.jpg";
import image4 from "../images/popular-dish-image-4.jpg";
import blogThumbnail1 from "../images/blog-thumbnail-image-1.jpg";
import blogThumbnail2 from "../images/blog-thumbnail-image-2.jpg";
import logoBrand from "../images/logo-brand.svg";
import sliderImage from "../images/slider.jpg";
import serviceIcon1 from "../images/service-icon-1.svg";
import serviceIcon2 from "../images/service-icon-2.svg";
import serviceIcon3 from "../images/service-icon-3.svg";

const dishItem = [
  {
    img: image1,
    name: "Chicken Manjoori",
    price: "$15",
    desc: "Dish relished by all age groups as a starter dish at parties.",
  },
  {
    img: image2,
    name: "Hotdog",
    price: "$10",
    desc: "Grilled sausage served in the slit of a partially sliced bun.",
  },
  {
    img: image1,
    name: "Chicken Manjoori",
    price: "$15",
    desc: "Dish relished by all age groups as a starter dish at parties.",
  },
  {
    img: image3,
    name: "Fresh Salmon",
    price: "$5",
    desc: "Beat the health blues with our Super Immune Blue Juice Recipe.",
  },
  {
    img: image4,
    name: "Veg Burger",
    price: "$10",
    desc: "Burgers may be made from ingredients like beans.",
  },
  {
    img: image3,
    name: "Fresh Salmon",
    price: "$5",
    desc: "Beat the health blues with our Super Immune Blue Juice Recipe.",
  },
];

const blogItems = [
  {
    img: blogThumbnail1,
    title: "The Legend Of US Cuisine: The Story Of Hungry People",
    desc: "Capitalize on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.",
  },
  {
    img: blogThumbnail2,
    title: "The Most Popular Delicious Food Of Mediterranean Cuisine ",
    desc: "Strategies on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.",
  },
];

const Home = () => {
  return (
    <div className="home-page">
      <div id="header">
        <div className="banner">
          <div className="phone">Call - 123 456 789</div>
          <div className="logo">
            <img src={logoBrand} alt="" />
          </div>
          <div className="reservation">Reservation</div>
        </div>
        {/* <div className="header__menu">
          <nav>
            <ul className="menu">
              <li className="menu__item">
                <a href="#"> Home </a>
              </li>
              <li className="menu__item">
                <a href="./store/index.html"> Store </a>
              </li>
              <li className="menu__item">
                <a href="./about/index.html"> About </a>
              </li>
              <li className="menu__item">
                <a href="./contact/index.html"> Contact Us </a>
              </li>
            </ul>
            <div className="nav-icon">
              <i className="fa-solid fa-bars" />
            </div>
            <ul className="social-media">
              <li className="social__item">
                <a href>
                  <i className="fa-brands fa-instagram" />
                </a>
              </li>
              <li className="social__item">
                <a href>
                  <i className="fa-brands fa-facebook" />
                </a>
              </li>
              <li className="social__item">
                <a href>
                  <i className="fa-brands fa-linkedin" />
                </a>
              </li>
              <li className="social__item">
                <a href>
                  <i className="fa-brands fa-github" />
                </a>
              </li>
            </ul>
          </nav>
        </div> */}
      </div>
      {/* End header */}
      <div id="slider">
        <div className="container">
          <div className="content">
            <h2 className="title">Welcome to Restaurant</h2>
            <p className="desc">
              The people, food and the prime location make the perfect place for
              good friends &amp; family to come together and have great time.
            </p>
            <button>View Menu</button>
          </div>
          <div className="image">
            <div className="image-wrapper">
              <img src={sliderImage} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* End Slider */}
      <div id="content">
        <div className="popular-dishes">
          <h3 className="category">menu</h3>
          <h2 className="title">Popular Dishes</h2>
          <p className="desc">
            There is a game between the waiters in restaurant to see who serves
            the food to each table fastest. That led to attempting the Guinness
            Record.
          </p>
          {/* Carousel */}
          <div className="menu-wrapper">
            <div className="menu__list">
              {dishItem.map((item) => {
                return (
                  <div className="item">
                    <div className="image">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="info">
                      <h3 className="name">{item.name}</h3>
                      <p className="price">{item.price}</p>
                    </div>
                    <p className="desc">{item.desc}</p>
                  </div>
                );
              })}
            </div>
            <div className="menu-action">
              <div className="left-icon">
                <i className="fa-solid fa-arrow-left" />
              </div>
              <div className="right-icon">
                <i className="fa-solid fa-arrow-right" />
              </div>
            </div>
          </div>
          {/* <button>See all dishes</button> */}
        </div>
        <div className="whatweoffer">
          <div className="content">
            <h3 className="category">what we offer</h3>
            <h2 className="title">Our Great Services</h2>
            <p className="desc">
              The atmosphere sets the stage. It’s more than just a dining room
              away from your home. Food takes the spotlight as guests.
            </p>
          </div>
          <div className="service-item-wrap">
            <img src={serviceIcon1} alt="" />
            <p className="text">Open 24/7</p>
          </div>
          <div className="service-item-wrap">
            <img src={serviceIcon2} alt="" />
            <p className="text">Special Menu</p>
          </div>
          <div className="service-item-wrap">
            <img src={serviceIcon3} alt="" />
            <p className="text">Home Delivery</p>
          </div>
        </div>
        <div className="blog">
          <h3 className="category">blog</h3>
          <h3 className="title">Be The First To Read The News</h3>
          <p className="desc">
            Explore the latest stories about our dishes, offers, events and
            future plans here.
          </p>
          <div className="blog-wrapper">
            <div className="blog-list">
              {blogItems.map((item) => (
                <>
                  <div className="blog-item">
                    <div className="blog-img">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="blog-content">
                      <h2 className="title">${item.title}</h2>
                      <p className="desc">${item.desc}</p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* End Content */}
      <div className="parallax" />
      <div id="footer">
        <div className="footer-top">
          <div className="tagname">#TheTastEat</div>
          <div className="logo">
            <img src="./images/logo-brand.svg" alt="" />
          </div>
          <ul className="social-media">
            <li className="social__item">
              <a href>
                <i className="fa-brands fa-instagram" />
              </a>
            </li>
            <li className="social__item">
              <a href>
                <i className="fa-brands fa-facebook" />
              </a>
            </li>
            <li className="social__item">
              <a href>
                <i className="fa-brands fa-linkedin" />
              </a>
            </li>
            <li className="social__item">
              <a href>
                <i className="fa-brands fa-github" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-container">
          <div className="contact">
            <h3 className="title">contact</h3>
            <p>Rochester, New York</p>
            <span>+123 456 789</span>
            <span>abcxyz@ur.com</span>
          </div>
          <div className="subcribe">
            <p className="title">
              Join our mailing list for updates, <br />
              Get news about our offers and events.
            </p>
            <div className="action">
              <input type="text" maxLength={256} placeholder="Email" />
              <button>Subscribe</button>
            </div>
          </div>
          <div className="timework">
            <h3 className="title">working hours</h3>
            <p>
              <span>Mon - Fri:</span> 7.00am - 6.00pm
            </p>
            <p>
              <span>Sat:</span> 7.00am - 6.00pm
            </p>
            <p>
              <span>Sun:</span> 8.00am - 6.00pm
            </p>
          </div>
        </div>
        <div className="copyright">
          <h3>© Copyright - TastEat |</h3>
          <ul>
            <li>
              <a href> Styleguide </a>
            </li>
            <li>
              <a href> Licenses </a>
            </li>
            <li>
              <a href> Protected </a>
            </li>
          </ul>
        </div>
      </div>
      {/* End footer */}
    </div>
  );
};
export default Home;
