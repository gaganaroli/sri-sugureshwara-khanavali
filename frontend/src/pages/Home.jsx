import { Link } from "react-router-dom";
import {
  Phone,
  MapPin,
  MessageCircle,
  ArrowRight
} from "lucide-react";

function Home() {

  const phone = "917026123457";

  const mapLink =
    "https://www.google.com/maps/dir/?api=1&destination=16.21708695489086,77.35972893178968";

  const whatsappLink =
    `https://wa.me/${phone}?text=Hello%20Sri%20Sugureshwara%20Khanavali`;

  const foods = [
    { name: "Meals", quantity: "1 Plate", price: 100, icon: "🍛" },
    { name: "Holige", quantity: "1 Piece", price: 25, icon: "🫓" },
    { name: "Chapati", quantity: "2 Pieces", price: 50, icon: "🫓" },
    { name: "Roti", quantity: "2 Pieces", price: 50, icon: "🫓" }
  ];

  return (
    <div className="home">

      {/* HERO SECTION */}

      <section className="hero">

        <div className="hero-content">

          <span className="tagline">
            WELCOME TO OUR KHANAVALI
          </span>

          <h1>
            Sri Sugureshwara
            <span> Khanavali</span>
          </h1>

          <p>
            Enjoy delicious traditional Karnataka food.
            Quality food, affordable prices and warm hospitality.
          </p>

          <div className="hero-buttons">

            <Link to="/menu" className="btn primary">
              Explore Menu <ArrowRight size={18} />
            </Link>

            <a href={`tel:+${phone}`} className="btn secondary">
              <Phone size={18} /> Call Now
            </a>

          </div>

        </div>

        <div className="hero-image">

          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554?w=900"
            alt="Traditional Indian food"
          />

        </div>

      </section>

      {/* WELCOME */}

      <section className="welcome">

        <h2>Welcome to Sri Sugureshwara Khanavali</h2>

        <p>
          Experience the taste of traditional Karnataka food.
          We look forward to serving you!
        </p>

      </section>

      {/* MENU */}

      <section className="menu-preview">

        <h2>Our Popular Menu</h2>

        <p>Delicious food at affordable prices</p>

        <div className="food-grid">

          {foods.map((food, index) => (

            <div className="food-card" key={index}>

              <span>{food.icon}</span>

              <h3>{food.name}</h3>

              <p>{food.quantity}</p>

              <h4>₹{food.price}</h4>

            </div>

          ))}

        </div>

        <Link to="/menu" className="btn primary view-menu">
          View Full Menu
        </Link>

      </section>

      {/* CONTACT */}

      <section className="contact-banner">

        <h2>Visit Our Khanavali Today!</h2>

        <p>We are happy to serve you.</p>

        <div className="quick-actions">

          <a href={`tel:+${phone}`}>
            <Phone size={20} /> Call
          </a>

          <a href={whatsappLink} target="_blank" rel="noreferrer">
            <MessageCircle size={20} /> WhatsApp
          </a>

          <a href={mapLink} target="_blank" rel="noreferrer">
            <MapPin size={20} /> Directions
          </a>

        </div>

      </section>

      {/* ADDRESS */}

      <section className="home-address">

        <MapPin size={30} />

        <h2>Find Our Location</h2>

        <p>Sri Sugureshwara Khanavali, Near Sadappa Hotel</p>

        <a href={mapLink} target="_blank" rel="noreferrer">
          Get Google Maps Directions
        </a>

      </section>

    </div>
  );
}

export default Home;