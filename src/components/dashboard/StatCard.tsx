import { ReactNode } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

export const StatCard = ({ label, value, change, icon, accent }: {
  label: string; value: string; change?: number; icon: ReactNode; accent?: boolean;
}) => (
  <div className={`glass-strong rounded-2xl p-5 relative overflow-hidden ${accent ? 'border-primary/30' : ''}`}>
    {accent && <div className="absolute inset-0 bg-gradient-primary opacity-10" />}
    <div className="relative flex items-start justify-between">
      <div>
        <div className="text-xs text-muted-foreground uppercase tracking-wider">{label}</div>
        <div className="font-display text-3xl font-bold mt-2">{value}</div>
        {change !== undefined && (
          <div className={`text-xs mt-2 flex items-center gap-1 ${change >= 0 ? 'text-success' : 'text-destructive'}`}>
            {change >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            {Math.abs(change)}% vs last month
          </div>
        )}
      </div>
      <div className="w-10 h-10 rounded-xl bg-primary/15 grid place-items-center text-accent">{icon}</div>
    </div>
  </div>
);

const statusColors: Record<string, string> = {
  completed: "bg-success/15 text-success border-success/30",
  paid: "bg-success/15 text-success border-success/30",
  pending: "bg-warning/15 text-warning border-warning/30",
  sent: "bg-accent/15 text-accent border-accent/30",
  draft: "bg-muted/40 text-muted-foreground border-border",
  failed: "bg-destructive/15 text-destructive border-destructive/30",
  overdue: "bg-destructive/15 text-destructive border-destructive/30",
};

export const StatusBadge = ({ status }: { status: string }) => (
  <span className={`inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full border capitalize ${statusColors[status] ?? statusColors.draft}`}>
    {status}
  </span>
);
