import React, { useState } from 'react';
import { Check, ChevronRight, CreditCard, GraduationCap, Heart, LoaderCircle, Shield, Smartphone, Users } from 'lucide-react';
import orangeLogo from '../assets/images/orange.png';
import mtnLogo from '../assets/images/mtn.jpeg';
import { PageHero, SectionHeading } from '../components/DesignSystem';

const impactCards = [
  {
    title: 'Éducation',
    text: "Financez des programmes éducatifs spécialisés et des ateliers d'apprentissage.",
    icon: GraduationCap,
  },
  {
    title: 'Accompagnement',
    text: "Soutenez l'accompagnement personnalisé des familles et des jeunes autistes.",
    icon: Users,
  },
  {
    title: 'Inclusion',
    text: "Favorisez l'inclusion sociale et professionnelle des personnes autistes.",
    icon: Heart,
  },
];

const directPayments = [
  {
    title: 'Orange Money',
    subtitle: 'Don direct et rapide',
    number: '+237 699 89 38 38',
    name: 'Jeanne Kiboum Tonye',
    logo: orangeLogo,
    logoAlt: 'Logo Orange Money',
    tone: 'icon-box--warm',
  },
  {
    title: 'MTN Mobile Money',
    subtitle: 'Don direct et rapide',
    number: '+237 675 95 31 23',
    name: 'Jules Dimitri Tonye',
    logo: mtnLogo,
    logoAlt: 'Logo MTN Mobile Money',
    tone: 'icon-box--warm',
  },
];

export default function Don() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setFormError('');

    try {
      const response = await fetch('/api/donations/initiate/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, amount }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Le paiement n'a pas pu être initié.");
      }

      if (!data.payment_url) {
        throw new Error("L'adresse de paiement n'a pas été reçue.");
      }

      window.location.href = data.payment_url;
    } catch (error) {
      console.error('Erreur requête:', error);
      setFormError(error.message || 'Une erreur est survenue. Veuillez réessayer.');
      setSubmitting(false);
    }
  };

  return (
    <div className="page-surface min-h-screen">
      <PageHero compact eyebrow="Soutenez notre mission" icon={Heart} title="Faire un don">
        Votre soutien finance des activités adaptées, l'accompagnement des familles
        et les actions de sensibilisation pour l'inclusion des personnes autistes.
      </PageHero>

      <div>
        <section className="section-pad bg-white">
          <div className="site-container">
            <SectionHeading eyebrow="Votre impact" icon={Shield} title="Votre don change des vies">
              Chaque contribution aide l'association à maintenir un accompagnement
              humain, régulier et concret.
            </SectionHeading>

            <div className="grid gap-5 md:grid-cols-3">
              {impactCards.map(({ title, text, icon: Icon }) => (
                <article key={title} className="soft-card p-6">
                  <span className="icon-box">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h2 className="mt-5 text-xl font-bold text-slate-900">{title}</h2>
                  <p className="mt-3 leading-7 text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-sky-50/70">
          <div className="site-container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-5">
              {directPayments.map((method) => (
                <article key={method.title} className="section-card p-6">
                  <div className="flex items-start gap-4">
                    <span className={`icon-box ${method.tone}`}>
                      <Smartphone className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h2 className="text-2xl font-extrabold text-slate-900">{method.title}</h2>
                      <p className="text-sm font-semibold text-slate-500">{method.subtitle}</p>
                    </div>
                    <img src={method.logo} alt={method.logoAlt} className="h-14 w-14 shrink-0 rounded-lg object-contain" loading="lazy" />
                  </div>

                  <div className="mt-6 rounded-lg border border-amber-100 bg-amber-50 p-5">
                    <p className="text-sm font-semibold text-slate-600">Envoyez votre don au numéro</p>
                    <a href={`tel:${method.number.replace(/\s/g, '')}`} className="mt-2 block text-2xl font-extrabold text-slate-950 hover:underline">
                      {method.number}
                    </a>
                    <p className="mt-2 text-sm text-slate-600">
                      <span className="font-bold">Nom :</span> {method.name}
                    </p>
                  </div>
                </article>
              ))}

              <div className="section-card border-l-4 border-l-blue-700 p-6">
                <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                  <Shield className="h-5 w-5 text-blue-700" aria-hidden="true" />
                  Pourquoi faire un don ?
                </h2>
                <ul className="mt-4 grid gap-3 text-slate-700">
                  <li className="flex gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true" /><span>Soutenir nos projets éducatifs et communautaires.</span></li>
                  <li className="flex gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true" /><span>Offrir des opportunités à ceux qui en ont besoin.</span></li>
                  <li className="flex gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true" /><span>Contribuer à un impact social durable.</span></li>
                </ul>
              </div>
            </div>

            <section className="section-card p-6 sm:p-8" aria-labelledby="don-online-title">
              <div className="mb-6 flex items-start gap-4">
                <span className="icon-box">
                  <CreditCard className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h2 id="don-online-title" className="text-2xl font-extrabold text-slate-900">
                    Don en ligne sécurisé
                  </h2>
                  <p className="text-sm font-semibold text-blue-700">Powered by CinetPay</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5" aria-busy={submitting}>
                <div>
                  <label htmlFor="don-name" className="form-label">Nom complet</label>
                  <input
                    id="don-name"
                    name="name"
                    type="text"
                    className="form-field"
                    placeholder="Entrez votre nom complet"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    autoComplete="name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="don-phone" className="form-label">Numéro de téléphone</label>
                  <input
                    id="don-phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    className="form-field"
                    placeholder="+237 6xx xxx xxx"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    autoComplete="tel"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="don-email" className="form-label">
                    Email <span className="form-help">(facultatif)</span>
                  </label>
                  <input
                    id="don-email"
                    name="email"
                    type="email"
                    className="form-field"
                    placeholder="votre@email.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    autoComplete="email"
                  />
                </div>

                <div>
                  <label htmlFor="don-amount" className="form-label">Montant (XAF)</label>
                  <div className="relative">
                    <input
                      id="don-amount"
                      name="amount"
                      type="number"
                      min="1"
                      inputMode="numeric"
                      className="form-field pr-16"
                      placeholder="Ex: 1000"
                      value={amount}
                      onChange={(event) => setAmount(event.target.value)}
                      required
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-500">
                      XAF
                    </span>
                  </div>
                </div>

                <div>
                  <p className="mb-3 text-sm font-semibold text-slate-600">Montants suggérés</p>
                  <div className="grid grid-cols-3 gap-3">
                    {[1000, 5000, 10000].map((suggestedAmount) => (
                      <button
                        key={suggestedAmount}
                        type="button"
                        onClick={() => setAmount(suggestedAmount.toString())}
                        aria-pressed={amount === suggestedAmount.toString()}
                        className={`rounded-lg border px-3 py-2 text-sm font-bold transition-colors ${
                          amount === suggestedAmount.toString()
                            ? 'border-blue-700 bg-blue-700 text-white'
                            : 'border-sky-100 bg-sky-50 text-blue-800 hover:bg-sky-100'
                        }`}
                      >
                        {suggestedAmount.toLocaleString('fr-FR')} XAF
                      </button>
                    ))}
                  </div>
                </div>

                {formError && (
                  <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm font-semibold leading-6 text-red-800" role="alert">
                    {formError}
                  </div>
                )}

                <button type="submit" className="btn btn-primary w-full" disabled={submitting}>
                  {submitting ? (
                    <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
                  ) : (
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  )}
                  <span>{submitting ? 'Redirection en cours...' : 'Procéder au paiement'}</span>
                </button>
              </form>

              <div className="mt-6 rounded-lg border border-emerald-100 bg-emerald-50 p-4">
                <p className="flex items-center gap-2 text-sm font-bold text-emerald-900">
                  <Shield className="h-5 w-5" aria-hidden="true" />
                  Paiement 100% sécurisé
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Vous serez redirigé vers CinetPay pour choisir votre moyen de
                  paiement : Orange Money, MTN Money, carte bancaire, etc.
                </p>
              </div>
            </section>
          </div>
        </section>

        <section className="section-pad-sm bg-white">
          <div className="site-container">
            <div className="section-card grid gap-5 border-l-4 border-l-[#d65f4a] p-6 sm:p-8 md:grid-cols-[auto_1fr] md:items-center">
              <span className="icon-box icon-box--coral"><Heart className="h-6 w-6" aria-hidden="true" /></span>
              <div>
                <h2 className="text-2xl font-extrabold text-blue-950">Chaque don compte</h2>
                <p className="mt-2 max-w-3xl text-lg leading-8 text-slate-600">
                  Grâce à votre générosité, nous continuons d'accompagner les familles
                  et de créer des opportunités pour les personnes autistes.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
