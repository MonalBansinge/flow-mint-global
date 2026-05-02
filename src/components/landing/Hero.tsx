import { ArrowRight, Sparkles, Globe2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-dashboard.png";

export const Hero = () => (
  <section className="relative pt-36 pb-24 overflow-hidden">
    <div className="absolute inset-0 bg-mesh pointer-events-none" />
    <div className="absolute inset-0 grid-bg pointer-events-none" />
    <div className="container mx-auto px-6 relative">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            AI-powered tax compliance, now in beta
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Get paid globally.<br />
            <span className="text-gradient">Stay compliant</span> locally.
          </h1>
          <p className="text-lg text-muted-foreground mt-6 max-w-xl leading-relaxed">
            FlowLedger is the financial command center for SEA freelancers. Track international payments, generate invoices, and let AI handle the tax headache.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Button variant="hero" size="xl" asChild>
              <Link to="/signup">Start free <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
            <Button variant="glass" size="xl">Watch demo</Button>
          </div>
          <div className="flex flex-wrap gap-6 mt-10 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><Globe2 className="w-4 h-4 text-accent" /> 130+ currencies</div>
            <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-accent" /> Bank-grade security</div>
            <div className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-accent" /> AI compliance</div>
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: '0.15s' }}>
          <div className="absolute -inset-10 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
          <img
            src={heroImg}
            alt="FlowLedger dashboard preview with global payments and AI compliance"
            width={1280} height={1024}
            className="relative rounded-2xl shadow-elevated"
          />
          {/* Floating cards */}
          <div className="absolute -left-4 top-12 glass-strong rounded-xl p-3 w-52 shadow-card animate-float">
            <div className="text-xs text-muted-foreground">New payment</div>
            <div className="font-display font-semibold mt-0.5">$2,400.00 USD</div>
            <div className="text-xs text-success mt-1">● Acme Studios · Wise</div>
          </div>
          <div className="absolute -right-4 bottom-16 glass-strong rounded-xl p-3 w-56 shadow-card animate-float-delayed">
            <div className="flex items-center gap-2 text-xs text-warning">
              <Sparkles className="w-3.5 h-3.5" /> AI Compliance Alert
            </div>
            <div className="text-sm mt-1 font-medium">Set aside 12% for Q2 PPh</div>
            <div className="text-xs text-muted-foreground mt-1">Indonesia · Due in 18 days</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
