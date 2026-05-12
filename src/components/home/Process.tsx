import React from 'react';

export default function Process() {
  return (
    <section className="bg-[var(--site-surface-solid)] py-24 sm:py-32 px-6 lg:px-16 border-y border-site transition-colors duration-500">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <h2 className="text-3xl sm:text-4xl text-site font-heading italic leading-tight">Comment se déroule <span className="text-[var(--text-sage)]">l'accompagnement&nbsp;?</span></h2>
            <p className="mt-8 text-[var(--site-muted)] font-light leading-relaxed">Chaque séance est personnalisée. Le déroulement varie selon qu'il s'agit d'une séance d'hypnose ou d'une communication animale, mais l'intention reste la même : vous accueillir avec clarté, douceur et sérieux.</p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { n: '01', t: 'Premier échange', d: 'Nous faisons le point sur votre besoin, pour vous ou pour votre animal, afin de choisir l\'accompagnement le plus juste.' },
              { n: '02', t: 'Préparation', d: 'Pour une communication animale, vous m\'envoyez une photo de votre animal ainsi que vos questions. Pour une séance d\'hypnose, nous clarifions votre objectif ensemble.' },
              { n: '03', t: 'La séance', d: 'Je vous accompagne en hypnose Ericksonienne, ou je réalise la communication animale dans un cadre calme et concentré.' },
              { n: '04', t: 'Restitution et intégration', d: 'Nous échangeons sur ce qui a émergé pendant la séance, les ressentis, les prises de conscience et les pistes d\'apaisement.' }
            ].map(step => (
              <div key={step.n} className="p-8 rounded-3xl border border-site bg-[var(--site-surface)] hover:border-[#8ba394]/50 transition-all group">
                 <div className="text-5xl font-heading italic text-[#8ba394]/10 group-hover:text-[#8ba394]/30 transition-colors mb-6">{step.n}</div>
                 <h3 className="text-site font-body font-medium text-lg mb-3">{step.t}</h3>
                 <p className="text-[var(--site-muted)] text-sm font-light leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
