import React, { useState, useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formError, setFormError] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [buttonColor, setButtonColor] = useState(''); // Nuevo estado para controlar el color del botón

  const handleSubmit = async (e) => {
    e.preventDefault();

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

    if (Object.keys(errors).length > 0) {
      setFormError(errors);
    } else {
      setIsLoading(true);
      setButtonColor('#49AF73'); // Cambiar el color del botón cuando se muestra el icono de carga

      try {
        const response = await fetch('https://getform.io/f/aeae574a-9610-4065-93cf-69f937d1d9dc', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setFormData({
            name: '',
            email: '',
            message: '',
          });
          setFormError({});
          setConfirmationVisible(true);
        } else {
          console.error('Error al enviar el formulario');
        }
      } catch (error) {
        console.error('Error al enviar el formulario:', error);
      } finally {
        setIsLoading(false);
        setButtonColor(''); // Devolver el color del botón a su estado original
      }
    }
  };

  useEffect(() => {
    if (confirmationVisible) {
      const timer = setTimeout(() => {
        setConfirmationVisible(false);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [confirmationVisible]);

  return (
    <div name="contact" className="w-full h-screen bg-[#1C1C1D] flex justify-center items-center p-4">
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
          disabled={isLoading}
          style={{ backgroundColor: buttonColor }} // Establecer el color del botón dinámicamente
        >
          {isLoading ? <FaSpinner className="animate-spin" /> : "Let's Collaborate"}
        </button>
        {confirmationVisible && (
          <p className="text-green-500">Form submitted successfully! Message will disappear in 5 seconds.</p>
        )}
      </form>
    </div>
  );
}

export default Contact;
