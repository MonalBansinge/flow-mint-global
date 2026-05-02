import { mockAlerts } from "@/mock-data";
import { Sparkles, AlertTriangle, Info, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";

const sevConfig = {
  urgent: { icon: AlertTriangle, color: "text-destructive", bg: "bg-destructive/10 border-destructive/30" },
  warning: { icon: AlertTriangle, color: "text-warning", bg: "bg-warning/10 border-warning/30" },
  info: { icon: Info, color: "text-accent", bg: "bg-accent/10 border-accent/30" },
};

const Compliance = () => (
  <div className="space-y-6">
    <div className="grid lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2 space-y-3">
        <h3 className="font-display font-semibold mb-2">Active alerts</h3>
        {mockAlerts.map((a) => {
          const cfg = sevConfig[a.severity];
          return (
            <div key={a.id} className={`glass-strong rounded-2xl p-5 border ${cfg.bg}`}>
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-xl bg-background/40 grid place-items-center ${cfg.color}`}>
                  <cfg.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold">{a.title}</h4>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-background/40 border border-border">{a.country}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{a.description}</p>
                  {a.dueDate && <div className="text-xs text-muted-foreground mt-2">Due {a.dueDate}</div>}
                </div>
                <Button variant="glass" size="sm">Resolve</Button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="space-y-4">
        <div className="glass-strong rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-3">
            <Calculator className="w-4 h-4 text-accent" />
            <h3 className="font-display font-semibold">Tax estimate</h3>
          </div>
          <div className="text-xs text-muted-foreground">Estimated owed for Q2 2026</div>
          <div className="font-display text-4xl font-bold mt-2 text-gradient">$1,072</div>
          <div className="text-xs text-muted-foreground mt-1">Based on 12% PPh bracket · Indonesia</div>
          <div className="mt-4 h-2 rounded-full bg-secondary overflow-hidden">
            <div className="h-full bg-gradient-primary" style={{ width: '64%' }} />
          </div>
          <div className="text-xs text-muted-foreground mt-2">$685 set aside · 64%</div>
        </div>

        <div className="glass-strong rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-accent" />
            <h3 className="font-display font-semibold">AI tip of the week</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            With ~62% of your income in USD, consider invoicing in your home currency for clients who allow it — you'll reduce FX risk and simplify your bookkeeping.
          </p>
        </div>
      </div>
    </div>
  </div>
);
export default Compliance;
