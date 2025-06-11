import React from 'react';

export default function AboutSection() {
  return (
    <section id="AboutSection" className="bg-white text-center py-20 px-6">
      {/* Emojis */}
      <div className="text-3xl mb-4">
        🦕 🐮
      </div>

      {/* Title */}
      <h2 className="text-4xl font-semibold text-[#023121] mb-6">
        Quiénes somos
      </h2>

      {/* Paragraph */}
      <p className="max-w-2xl mx-auto text-[#023121] text-base leading-relaxed">
        Somos una plataforma creada para que personas y otras fundaciones puedan donar y apoyar proyectos de arqueología,
        agropecuaria y educación rural. Cada contribución ayuda a preservar el pasado, fortalecer el campo y sembrar futuro.
      </p>
    </section>
  );
}
