import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const CTA = () => (
  <section className="container mx-auto px-6 py-24">
    <div className="relative glass-strong rounded-3xl p-12 md:p-16 overflow-hidden text-center">
      <div className="absolute inset-0 bg-gradient-primary opacity-10" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-primary opacity-30 blur-3xl rounded-full" />
      <div className="relative">
        <h2 className="font-display text-4xl md:text-5xl font-bold max-w-2xl mx-auto">
          Your global income, finally <span className="text-gradient">in flow</span>.
        </h2>
        <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
          Join thousands of freelancers turning currency chaos into clarity.
        </p>
        <Button variant="hero" size="xl" className="mt-8" asChild>
          <Link to="/signup">Start free <ArrowRight className="w-4 h-4 ml-1" /></Link>
        </Button>
      </div>
    </div>
  </section>
);
