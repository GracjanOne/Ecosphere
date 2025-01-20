import "@/app/components/ContactForm/ContactForm.css";

export default function ContactForm() {
  return (
    <>
      <div className="contact-form-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d385.4953099169751!2d-2.6467332782091018!3d49.46007832663597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1735496531844!5m2!1spl!2spl"
            width="600"
            height="700"
            style={{ border: 0 }}
            
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="contact-form">
        <h1>Skontaktuj się</h1>
        <p>Wypełnij formularz kontaktowy, aby wysłać zapytanie.</p>
        <form id="contact-from-div">
            <label htmlFor="form-name">Imię</label>
            <input type="text" id="form-name" name="name" placeholder="Wpisz swoje imię" required />

            <label htmlFor="form-email">Email</label>
            <input type="email" id="form-email" name="email" placeholder="Wpisz swój email" required />

            <label htmlFor="form-message">Wiadomość</label>
            <textarea id="form-message" name="message" placeholder="Wpisz swoją wiadomość..." required></textarea>

         
            <button type="submit">Wyślij</button>
        </form>
    </div>
      </div>
    </>
  );
}
