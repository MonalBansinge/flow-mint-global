import { revenueData, currencyDistribution, mockPayments, currencySymbol } from "@/mock-data";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, BarChart, Bar, CartesianGrid } from "recharts";
import { StatCard } from "@/components/dashboard/StatCard";
import { TrendingUp, Activity, Target } from "lucide-react";

const Analytics = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      <StatCard label="Avg invoice" value="$1,840" change={8} icon={<Target className="w-5 h-5" />} />
      <StatCard label="Active clients" value="14" change={16} icon={<Activity className="w-5 h-5" />} accent />
      <StatCard label="YTD growth" value="42%" change={42} icon={<TrendingUp className="w-5 h-5" />} />
    </div>

    <div className="grid lg:grid-cols-2 gap-4">
      <div className="glass-strong rounded-2xl p-6">
        <h3 className="font-display font-semibold mb-4">Revenue line</h3>
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
            <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 12 }} />
            <Line type="monotone" dataKey="revenue" stroke="hsl(190 95% 55%)" strokeWidth={3} dot={{ fill: 'hsl(240 90% 66%)', r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="glass-strong rounded-2xl p-6">
        <h3 className="font-display font-semibold mb-4">Currency volume</h3>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={currencyDistribution}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
            <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 12 }} cursor={{ fill: 'hsl(var(--muted) / 0.3)' }} />
            <Bar dataKey="value" fill="hsl(240 90% 66%)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>

    <div className="glass-strong rounded-2xl p-6">
      <h3 className="font-display font-semibold mb-4">Top clients</h3>
      <div className="space-y-2">
        {mockPayments.slice(0, 5).map((p, i) => (
          <div key={p.id} className="flex items-center gap-4 p-3 rounded-xl hover:bg-secondary/40 transition">
            <div className="text-xs text-muted-foreground w-6">#{i + 1}</div>
            <div className="flex-1 font-medium">{p.client}</div>
            <div className="flex-1 max-w-xs h-2 bg-secondary rounded-full overflow-hidden">
              <div className="h-full bg-gradient-primary" style={{ width: `${100 - i * 15}%` }} />
            </div>
            <div className="text-sm font-semibold tabular-nums">{currencySymbol[p.currency]}{p.amount.toLocaleString()}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
export default Analytics;
