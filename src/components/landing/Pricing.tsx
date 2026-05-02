import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const tiers = [
  {
    name: "Starter", price: "$0", period: "free forever",
    features: ["Up to 10 payments/mo", "5 invoices/mo", "Basic compliance tips", "1 currency"],
  },
  {
    name: "Pro", price: "$12", period: "per month", featured: true,
    features: ["Unlimited payments", "Unlimited invoices", "AI compliance assistant", "Multi-currency", "Tax estimation widget", "Priority support"],
  },
  {
    name: "Studio", price: "$32", period: "per month",
    features: ["Everything in Pro", "Up to 5 team seats", "Custom branding", "API access", "Dedicated manager"],
  },
];

export const Pricing = () => (
  <section id="pricing" className="container mx-auto px-6 py-24">
    <div className="text-center max-w-2xl mx-auto mb-16">
      <div className="text-xs uppercase tracking-widest text-accent mb-3">Pricing</div>
      <h2 className="font-display text-4xl md:text-5xl font-bold">Simple, scales with you</h2>
      <p className="text-muted-foreground mt-4">Start free. Upgrade when global income hits the gas.</p>
    </div>
    <div className="grid md:grid-cols-3 gap-5">
      {tiers.map((t) => (
        <div key={t.name} className={`relative rounded-2xl p-7 ${t.featured ? 'glass-strong glow-primary border border-primary/30' : 'glass-strong'}`}>
          {t.featured && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
              Most popular
            </div>
          )}
          <h3 className="font-display text-xl font-semibold">{t.name}</h3>
          <div className="mt-3 flex items-baseline gap-1.5">
            <span className="font-display text-4xl font-bold">{t.price}</span>
            <span className="text-sm text-muted-foreground">{t.period}</span>
          </div>
          <ul className="mt-6 space-y-3 text-sm">
            {t.features.map((f) => (
              <li key={f} className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-primary/15 grid place-items-center"><Check className="w-3 h-3 text-accent" /></div>
                {f}
              </li>
            ))}
          </ul>
          <Button variant={t.featured ? "hero" : "glass"} className="w-full mt-7" asChild>
            <Link to="/signup">Get started</Link>
          </Button>
        </div>
      ))}
    </div>
  </section>
);
