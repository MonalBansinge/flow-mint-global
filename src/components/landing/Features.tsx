import { Globe2, Sparkles, FileText, BarChart3, ShieldCheck, Wallet } from "lucide-react";

const features = [
  { icon: Globe2, title: "Multi-currency tracking", desc: "Log payments in 130+ currencies. Auto FX conversion to your home base." },
  { icon: Sparkles, title: "AI compliance assistant", desc: "Country-aware reminders and tax estimates tuned to your income mix." },
  { icon: FileText, title: "Smart invoicing", desc: "Beautiful invoices with auto-numbering, status tracking and PDF export." },
  { icon: BarChart3, title: "Revenue analytics", desc: "Visualize earnings, currency mix and pending pipeline at a glance." },
  { icon: ShieldCheck, title: "Privacy first", desc: "Your data stays yours. Encrypted at rest and in transit, always." },
  { icon: Wallet, title: "Works with everything", desc: "Wise, Stripe, PayPal, bank transfers — log it all in one ledger." },
];

export const Features = () => (
  <section id="features" className="container mx-auto px-6 py-24">
    <div className="text-center max-w-2xl mx-auto mb-16">
      <div className="text-xs uppercase tracking-widest text-accent mb-3">Features</div>
      <h2 className="font-display text-4xl md:text-5xl font-bold">Everything a global freelancer needs</h2>
      <p className="text-muted-foreground mt-4">Replace five spreadsheets and a tax FAQ tab with one calm dashboard.</p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {features.map((f, i) => (
        <div key={f.title} className="glass-strong rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 group">
          <div className="w-11 h-11 rounded-xl bg-gradient-primary grid place-items-center mb-4 group-hover:scale-110 transition">
            <f.icon className="w-5 h-5 text-primary-foreground" />
          </div>
          <h3 className="font-display font-semibold text-lg mb-1.5">{f.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);
