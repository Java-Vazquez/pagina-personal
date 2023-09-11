import React, { useState } from 'react';
import { HiOutlineMail } from 'react-icons/hi';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formError, setFormError] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene la recarga de la página por defecto

    // Realiza la validación
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Please enter your name';
    }

    if (!formData.email.trim()) {
      errors.email = 'Please enter your email';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }

    if (!formData.message.trim()) {
      errors.message = 'Please enter your message';
    }

    // Si hay errores, muestra los mensajes de error
    if (Object.keys(errors).length > 0) {
      setFormError(errors);
    } else {
      // Si no hay errores, envía el formulario a Getform.io
      try {
        const response = await fetch('https://getform.io/f/aeae574a-9610-4065-93cf-69f937d1d9dc', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          // El formulario se envió correctamente
          setFormSubmitted(true);

          // Reinicia los valores del formulario y los errores
          setFormData({
            name: '',
            email: '',
            message: '',
          });
          setFormError({});
        } else {
          // Manejar errores de envío aquí
          console.error('Error al enviar el formulario');
        }
      } catch (error) {
        console.error('Error al enviar el formulario:', error);
      }
    }
  };

  return (
    <div name="contact" className="w-full sm:h-screen bg-[#1C1C1D] flex justify-center items-center p-4">
      <form onSubmit={handleSubmit} className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#49AF73] text-[#F8FBFF]">Contact</p>
          <p className="sm:text-xl text-[#F8FBFF] py-4">Submit the form below or shoot me an email by clicking the mail icon on the left menu </p>
        </div>
        <input
          className="bg-white p-2 rounded-lg"
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        {formError.name && <p className="text-red-500">{formError.name}</p>}
        <input
          className="my-4 p-2 bg-white rounded-lg"
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {formError.email && <p className="text-red-500">{formError.email}</p>}
        <textarea
          className="bg-white p-2 rounded-lg"
          name="message"
          rows="10"
          placeholder="Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
        {formError.message && <p className="text-red-500">{formError.message}</p>}
        <button
          type="submit"
          className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center rounded-lg"
          disabled={formSubmitted}
        >
          {formSubmitted ? 'Form Submitted' : "Let's Collaborate"}
        </button>
      </form>
    </div>
  );
}

export default Contact;
