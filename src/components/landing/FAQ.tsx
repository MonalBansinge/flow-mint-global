import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Which countries do you support?", a: "FlowLedger works globally. Compliance content is currently optimized for Indonesia, Singapore, the Philippines, Malaysia, Thailand and Vietnam, with more coming." },
  { q: "Is FlowLedger a tax filing tool?", a: "No — we don't file for you. We help you stay organized, estimate what's owed and never miss a deadline. We integrate well with local accountants." },
  { q: "Can I import payments automatically?", a: "Manual logging is the MVP focus. Auto-sync with Wise, Stripe and PayPal is on the roadmap for Pro." },
  { q: "Is my financial data safe?", a: "All data is encrypted at rest and in transit. We never sell or share your data. You can export or delete it anytime." },
  { q: "Do I need a credit card to start?", a: "Nope. The Starter plan is free forever, no card required." },
];

export const FAQ = () => (
  <section id="faq" className="container mx-auto px-6 py-24">
    <div className="text-center max-w-2xl mx-auto mb-12">
      <div className="text-xs uppercase tracking-widest text-accent mb-3">FAQ</div>
      <h2 className="font-display text-4xl md:text-5xl font-bold">Common questions</h2>
    </div>
    <div className="max-w-2xl mx-auto glass-strong rounded-2xl p-2">
      <Accordion type="single" collapsible>
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-border/40 px-4">
            <AccordionTrigger className="text-left font-medium">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
