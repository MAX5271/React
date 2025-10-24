import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const Header = () => {
  //   const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast Pizza Co.</h1>;
    </header>
  );
};
const Menu = () => {
  const isPizzaZero = pizzaData.length == 0;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {!isPizzaZero ? (
        // <></> this is know as react fragment. Use this when you want to send to elements but do not want to bind them together as binding together will give them same properties.
        <React.Fragment key={"OrderMenu"}>
          <p>
            Home of the best pizza's in Agra. Come and feast on these mouthwatering pizza's or order online and dine on them with the comfortablity of your home.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>We are still working on our menu. Please come back later </p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        price={12}
        photoName="pizzas/spinaci.jpg"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
      />
      <Pizza
        name="Pizza Prosciutto"
        price={18}
        photoName="pizzas/prosciutto.jpg"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
      /> */}
    </main>
  );
};
//Destructuring object
function Pizza({ pizzaObj }) {

  return (
    // Using ternary operators to change the style by applying classes conditionally
    <li className={`pizza ${pizzaObj.soldOut? "sold-out":""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.photoName} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut?<span>SOLD OUT</span>:<span>{pizzaObj.price}$</span>}</span>
      </div>
    </li>
  );
}
const Footer = () => {
  const time = new Date().getHours();
  const isOpen = time <= 22 && time >= 7;
  return (
    <footer>
      {isOpen ? (
        <div className="order">
          <p>We're currently open!</p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>We are open from 7AM to 10PM.</p>
      )}
    </footer>
  );
};

//react-v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
