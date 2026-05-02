import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Wallet, Github, Chrome } from "lucide-react";

export const AuthLayout = ({ title, subtitle, children, footer }: {
  title: string; subtitle: string; children: React.ReactNode; footer: React.ReactNode;
}) => (
  <div className="min-h-screen relative grid lg:grid-cols-2 bg-background">
    <div className="absolute inset-0 bg-mesh pointer-events-none lg:hidden" />
    <div className="hidden lg:flex relative bg-gradient-to-br from-primary/20 via-background to-accent/10 p-12 flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <Link to="/" className="relative flex items-center gap-2 font-display font-bold text-lg z-10">
        <div className="w-8 h-8 rounded-lg bg-gradient-primary grid place-items-center">
          <Wallet className="w-4 h-4 text-primary-foreground" />
        </div>
        FlowLedger
      </Link>
      <div className="relative z-10 max-w-md">
        <h2 className="font-display text-4xl font-bold leading-tight">
          One ledger for <span className="text-gradient">every currency</span> you earn in.
        </h2>
        <p className="text-muted-foreground mt-4">
          Join the freelancers in 40+ countries who handle global income with calm, not chaos.
        </p>
        <div className="mt-8 glass-strong rounded-xl p-4 max-w-sm animate-float">
          <div className="text-xs text-muted-foreground">This month</div>
          <div className="font-display text-3xl font-bold mt-1">$8,930.50</div>
          <div className="text-xs text-success mt-1">▲ 21% vs last month</div>
        </div>
      </div>
      <div className="relative z-10 text-xs text-muted-foreground">© 2026 FlowLedger</div>
    </div>

    <div className="flex items-center justify-center p-6 md:p-12 relative">
      <div className="w-full max-w-md">
        <Link to="/" className="lg:hidden flex items-center gap-2 font-display font-bold text-lg mb-8">
          <div className="w-8 h-8 rounded-lg bg-gradient-primary grid place-items-center">
            <Wallet className="w-4 h-4 text-primary-foreground" />
          </div>
          FlowLedger
        </Link>
        <h1 className="font-display text-3xl font-bold">{title}</h1>
        <p className="text-muted-foreground mt-2">{subtitle}</p>

        <div className="grid grid-cols-2 gap-3 mt-8">
          <Button variant="glass"><Chrome className="w-4 h-4" /> Google</Button>
          <Button variant="glass"><Github className="w-4 h-4" /> GitHub</Button>
        </div>
        <div className="flex items-center gap-3 my-6 text-xs text-muted-foreground">
          <div className="flex-1 h-px bg-border" /> or continue with email <div className="flex-1 h-px bg-border" />
        </div>

        {children}

        <div className="text-sm text-muted-foreground text-center mt-6">{footer}</div>
      </div>
    </div>
  </div>
);

export const FormField = ({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) => (
  <div className="space-y-1.5">
    <Label className="text-xs text-muted-foreground">{label}</Label>
    <Input {...props} className="bg-secondary/50 border-border h-11" />
  </div>
);
