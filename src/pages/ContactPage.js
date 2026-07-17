import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Heart, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { PageHero, SectionHeading } from '../components/DesignSystem';

const contactCards = [
  {
    title: 'Téléphone',
    icon: Phone,
    lines: [
      { label: '+237 699 893 838', href: 'tel:+237699893838' },
      { label: '+237 675 953 123', href: 'tel:+237675953123' },
    ],
  },
  {
    title: 'Email',
    icon: Mail,
    lines: [
      { label: 'contact@lamaisonbleuedejulien.org', href: 'mailto:contact@lamaisonbleuedejulien.org' },
      { label: 'jeannekiboum@lamaisonbleuedejulien.org', href: 'mailto:jeannekiboum@lamaisonbleuedejulien.org' },
    ],
  },
  {
    title: 'Adresse',
    icon: MapPin,
    lines: [{ label: 'Nkoabang, Yaoundé, Cameroun' }],
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, phone, company, message } = formData;
    const whatsappMessage = `Bonjour, voici les détails du contact :
Nom : ${name}
Email : ${email}
Téléphone : ${phone}
Société : ${company}
Message : ${message}`;

    const phoneNumber = '237677098794';
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="page-surface min-h-screen">
      <PageHero compact eyebrow="Nous contacter" icon={MessageCircle} title="Contactez-nous">
        Une question, une demande d'accompagnement ou une proposition de partenariat ?
        Notre équipe vous répond avec attention.
      </PageHero>

      <div>
        <section className="section-pad bg-white">
          <div className="site-container">
            <SectionHeading eyebrow="Coordonnées" icon={Phone} title="Restons en contact">
              Choisissez le canal le plus simple pour vous joindre à l'association.
            </SectionHeading>

            <div className="grid gap-5 md:grid-cols-3">
              {contactCards.map(({ title, icon: Icon, lines }) => (
                <article key={title} className="soft-card p-6">
                  <span className="icon-box">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h2 className="mt-5 text-xl font-bold text-slate-900">{title}</h2>
                  <div className="mt-4 grid gap-2 text-slate-700">
                    {lines.map((line) =>
                      line.href ? (
                        <a key={line.label} href={line.href} className="break-words font-semibold hover:text-blue-800 hover:underline">
                          {line.label}
                        </a>
                      ) : (
                        <p key={line.label} className="font-semibold">{line.label}</p>
                      )
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-sky-50/70">
          <div className="site-container">
            <div className="section-card p-6 sm:p-8">
              <div className="mx-auto max-w-3xl text-center">
                <div className="section-kicker justify-center">
                  <Send className="h-4 w-4" aria-hidden="true" />
                  <span>Envoyez-nous un message</span>
                </div>
                <h2 className="text-3xl font-extrabold text-slate-900">Formulaire de contact</h2>
                <p className="mt-3 leading-7 text-slate-600">
                  Le formulaire ouvre WhatsApp avec votre message déjà préparé.
                </p>
              </div>

              <div id="whatsapp-help" className="mx-auto mt-8 max-w-3xl rounded-lg border border-blue-100 bg-blue-50 p-5">
                <div className="flex gap-3">
                  <CheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-emerald-700" aria-hidden="true" />
                  <p className="text-sm leading-6 text-slate-700">
                    Sur ordinateur, pensez à être connecté à WhatsApp Web. Sur mobile,
                    l'application WhatsApp ouvrira directement la conversation.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-4xl space-y-6" aria-describedby="whatsapp-help">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="form-label">Votre nom</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Entrez votre nom complet"
                      className="form-field"
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="form-label">Adresse e-mail</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Entrez votre adresse e-mail"
                      className="form-field"
                      autoComplete="email"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="form-label">Numéro de téléphone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Entrez votre numéro de téléphone"
                      className="form-field"
                      autoComplete="tel"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="form-label">
                      Nom de votre société <span className="form-help">(facultatif)</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Entrez le nom de votre société"
                      className="form-field"
                      autoComplete="organization"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Comment pouvons-nous vous aider ?"
                    rows="6"
                    className="form-field resize-y"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full">
                  <span>Envoyer le message</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="section-pad-sm bg-white">
          <div className="site-container">
            <div className="section-card grid gap-5 border-l-4 border-l-[#d65f4a] p-6 sm:p-8 md:grid-cols-[auto_1fr] md:items-center">
              <span className="icon-box icon-box--coral">
                <Heart className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-2xl font-extrabold text-blue-950">Nous sommes là pour vous accompagner</h2>
                <p className="mt-2 max-w-3xl text-lg leading-8 text-slate-600">
                  Notre équipe est dédiée à offrir le meilleur accompagnement possible,
                  avec écoute, respect et bienveillance.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
