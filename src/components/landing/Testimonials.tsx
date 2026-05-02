const items = [
  { name: "Maya R.", role: "Brand designer · Jakarta", quote: "FlowLedger replaced three spreadsheets and finally made tax season feel boring. Best kind of tool." },
  { name: "Jin H.", role: "Full-stack dev · Singapore", quote: "I get paid in four currencies. The dashboard makes that feel… normal. The AI tax nudges are gold." },
  { name: "Aira S.", role: "Video editor · Manila", quote: "Sending invoices used to be a chore. Now it's two clicks and I look like a real studio." },
];

export const Testimonials = () => (
  <section className="container mx-auto px-6 py-24">
    <div className="text-center max-w-2xl mx-auto mb-16">
      <div className="text-xs uppercase tracking-widest text-accent mb-3">Loved by freelancers</div>
      <h2 className="font-display text-4xl md:text-5xl font-bold">Built with the SEA creator scene</h2>
    </div>
    <div className="grid md:grid-cols-3 gap-5">
      {items.map((t) => (
        <div key={t.name} className="glass-strong rounded-2xl p-7">
          <p className="text-sm leading-relaxed">"{t.quote}"</p>
          <div className="mt-5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-primary" />
            <div>
              <div className="font-semibold text-sm">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);
