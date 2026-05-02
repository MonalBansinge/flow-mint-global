const steps = [
  { n: "01", title: "Connect your world", desc: "Add your country, base currency and how you get paid. Setup takes under a minute." },
  { n: "02", title: "Log every payment", desc: "Drop in invoices and incoming transfers. We handle the FX math and categorization." },
  { n: "03", title: "Stay tax-ready", desc: "Our AI watches your income, flags filings and estimates what to set aside, monthly." },
];

export const HowItWorks = () => (
  <section id="how" className="container mx-auto px-6 py-24">
    <div className="text-center max-w-2xl mx-auto mb-16">
      <div className="text-xs uppercase tracking-widest text-accent mb-3">How it works</div>
      <h2 className="font-display text-4xl md:text-5xl font-bold">Three steps to clarity</h2>
    </div>
    <div className="grid md:grid-cols-3 gap-5 relative">
      {steps.map((s, i) => (
        <div key={s.n} className="glass-strong rounded-2xl p-7 relative overflow-hidden">
          <div className="absolute -top-6 -right-4 font-display text-7xl font-bold text-gradient opacity-30">{s.n}</div>
          <div className="text-xs text-accent font-mono mb-4">STEP {s.n}</div>
          <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
        </div>
      ))}
    </div>
  </section>
);
