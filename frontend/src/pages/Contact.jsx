import { Phone, MessageCircle, MapPin, Navigation } from "lucide-react";

function Contact() {
  const phone = "917026123457";

  const address = "Sri Sugureshwara Khanavali, Near Sadappa Hotel";

  const mapLink =
    "https://www.google.com/maps/dir/?api=1&destination=16.21708695489086,77.35972893178968";

  const whatsappMessage = encodeURIComponent(
    "Hello Sri Sugureshwara Khanavali! I would like to know more about your menu."
  );

  return (
    <div className="contact-page">

      <section className="contact-header">
        <h1>Contact Us</h1>
        <p>We are happy to serve you!</p>
      </section>

      <section className="contact-container">

        <div className="contact-card">

          <Phone size={35} />

          <h2>Call Us</h2>

          <p>+91 7026123457</p>

          <a href={`tel:+${phone}`} className="contact-btn">
            <Phone size={18} />
            Call Now
          </a>

        </div>

        <div className="contact-card">

          <MessageCircle size={35} />

          <h2>WhatsApp</h2>

          <p>Chat with us directly.</p>

          <a
            href={`https://wa.me/${phone}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn whatsapp-btn"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>

        </div>

        <div className="contact-card">

          <MapPin size={35} />

          <h2>Our Location</h2>

          <p>{address}</p>

          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            <Navigation size={18} />
            Get Directions
          </a>

        </div>

      </section>

      <section className="location-section">

        <h2>Find Our Khanavali</h2>

        <iframe
          title="Sri Sugureshwara Khanavali Location"
          src="https://maps.google.com/maps?q=16.21708695489086,77.35972893178968&z=16&output=embed"
          width="100%"
          height="350"
          style={{ border: 0, borderRadius: "15px" }}
          loading="lazy"
          allowFullScreen
        />

      </section>

    </div>
  );
}

export default Contact;