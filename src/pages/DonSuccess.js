import React from 'react';
import { CheckCircle } from 'lucide-react';
import { ButtonLink, PageState } from '../components/DesignSystem';

export default function DonSuccess() {
  return (
    <div className="page-surface min-h-[65vh] bg-sky-50/70 py-16 sm:py-24">
      <div className="site-container">
        <PageState
          icon={CheckCircle}
          title="Votre don a bien été reçu"
          action={<ButtonLink to="/">Retour à l'accueil</ButtonLink>}
        >
          Merci pour votre générosité. Votre soutien contribue directement aux actions
          menées auprès des personnes autistes et de leurs familles.
        </PageState>
      </div>
    </div>
  );
}
