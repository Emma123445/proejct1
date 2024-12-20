import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
        service_id: 'service_0f59srs',
        template_id: 'template_veb00iw',
        user_id: 'jmD0aBZl-7rCuuast',
        template_params: {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      });

      console.log('Message envoyé avec succès !', response.data);
      setSuccessMessage('Votre message a été envoyé avec succès !');
      setErrorMessage('');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message.', error);
      setErrorMessage('Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer.');
      setSuccessMessage('');
    }
  };

  return (
    <div id='contact' className="bg-gray-100 min-h-screen w-full">
      <section className="max-w-5xl mx-auto py-8 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">

          <div className="bg-[#3068B1] p-6 md:p-8 rounded-lg flex flex-col justify-between h-full">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-white">Comment nous joindre ?</h2>
              <p className="text-white mt-3 md:mt-4 text-sm md:text-base">
                Notre équipe est à votre écoute pour répondre à toutes vos questions.
              </p>
            </div>
            <div className="mt-6 space-y-4 md:space-y-6 flex-grow flex flex-col justify-evenly">
              <div className="flex items-center space-x-3">
                <span className="text-white text-lg md:text-xl">📧</span>
                <p className="text-white text-sm md:text-base">innov@innovquest.net</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-white text-lg md:text-xl">📞</span>
                <p className="text-white text-sm md:text-base">(+229) 47812579</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-white text-lg md:text-xl">📍</span>
                <p className="text-white text-sm md:text-base">UAC, Abomey Calavi, Bénin</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
            <h2 className="text-lg md:text-xl font-semibold">Envoyez-nous un message</h2>
            {successMessage && (
              <div className="text-green-500 text-sm md:text-base mt-2 p-2 bg-green-50 rounded">
                {successMessage}
              </div>
            )}
            {errorMessage && (
              <div className="text-red-500 text-sm md:text-base mt-2 p-2 bg-red-50 rounded">
                {errorMessage}
              </div>
            )}
            <form onSubmit={handleSubmit} className="mt-4 space-y-3">
              <div>
                <label className="block text-gray-700 text-sm md:text-base mb-1">Nom complet*</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 text-sm md:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Ex: Jean Dupont"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm md:text-base mb-1">Adresse email*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 text-sm md:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Ex: jean.dupont@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm md:text-base mb-1">Sujet*</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-2 text-sm md:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Ex: Demande de renseignements"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm md:text-base mb-1">Votre message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 text-sm md:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Écrivez votre message ici... N'hésitez pas à être précis dans votre demande."
                  rows="3"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 text-sm md:text-base rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-200"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;