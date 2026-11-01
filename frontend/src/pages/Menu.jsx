import { Utensils, IndianRupee } from "lucide-react";
function Menu() {

  const items = [
    {
      name: "Meals",
      kannada: "ಊಟ",
      quantity: "1 Plate",
      price: 100,
      icon: "🍛"
    },
    {
      name: "Holige",
      kannada: "ಹೋಳಿಗೆ",
      quantity: "1 Piece",
      price: 25,
      icon: "🫓"
    },
    {
      name: "Chapati",
      kannada: "ಚಪಾತಿ",
      quantity: "2 Pieces",
      price: 50,
      icon: "🫓"
    },
    {
      name: "Roti",
      kannada: "ರೊಟ್ಟಿ",
      quantity: "2 Pieces",
      price: 50,
      icon: "🫓"
    }
  ];

  return (
    <div className="menu-page">

      <section className="menu-header">
        <span>OUR FOOD COLLECTION</span>
        <h1>Our Menu</h1>
        <p>Delicious traditional Karnataka food.</p>
      </section>

      <section className="menu-container">

        <div className="menu-grid">

          {items.map((item, index) => (

            <div className="menu-item-card" key={index}>

              <div className="menu-food-icon">
                {item.icon}
              </div>

              <h3>{item.name}</h3>

              <p className="kannada-name">
                {item.kannada}
              </p>

              <p className="menu-quantity">
                {item.quantity}
              </p>

              <div className="menu-price">
                ₹{item.price}
              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}

export default Menu;