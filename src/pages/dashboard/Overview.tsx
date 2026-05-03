import { DollarSign, Wallet, FileWarning, ShieldAlert, Sparkles, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { StatCard, StatusBadge } from "@/components/dashboard/StatCard";
import { mockPayments, mockAlerts, currencySymbol, revenueData, currencyDistribution } from "@/mock-data";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, AreaChart, Area, PieChart, Pie, Cell } from "recharts";
import { supabase } from "@/integrations/supabase/client";

interface SignupUser { id: string; name: string; email: string; created_at: string; }

const Overview = () => {
  const [users, setUsers] = useState<SignupUser[]>([]);

  useEffect(() => {
    supabase.from("users").select("*").order("created_at", { ascending: false }).then(({ data }) => {
      if (data) setUsers(data as SignupUser[]);
    });
  }, []);

  return (
  <div className="space-y-6">
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard label="Total revenue" value="$32,540" change={18} icon={<DollarSign className="w-5 h-5" />} accent />
      <StatCard label="This month" value="$8,930" change={21} icon={<Wallet className="w-5 h-5" />} />
      <StatCard label="Pending invoices" value="3" change={-12} icon={<FileWarning className="w-5 h-5" />} />
      <StatCard label="Compliance alerts" value="2" icon={<ShieldAlert className="w-5 h-5" />} />
    </div>

    <div className="grid lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2 glass-strong rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-display font-semibold">Revenue trend</h3>
            <p className="text-xs text-muted-foreground">Last 6 months · in USD</p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={260}>
          <AreaChart data={revenueData}>
            <defs>
              <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(240 90% 66%)" stopOpacity={0.5} />
                <stop offset="100%" stopColor="hsl(240 90% 66%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 12 }} />
            <Area type="monotone" dataKey="revenue" stroke="hsl(240 90% 66%)" strokeWidth={2.5} fill="url(#rev)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="glass-strong rounded-2xl p-6">
        <h3 className="font-display font-semibold">Currency mix</h3>
        <p className="text-xs text-muted-foreground">Earnings by currency</p>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie data={currencyDistribution} dataKey="value" innerRadius={50} outerRadius={75} paddingAngle={3}>
              {currencyDistribution.map((c) => <Cell key={c.name} fill={c.color} />)}
            </Pie>
            <Tooltip contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 12 }} />
          </PieChart>
        </ResponsiveContainer>
        <div className="space-y-1.5 mt-2">
          {currencyDistribution.map((c) => (
            <div key={c.name} className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full" style={{ background: c.color }} /> {c.name}</div>
              <div className="text-muted-foreground">{c.value}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="grid lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2 glass-strong rounded-2xl p-6">
        <h3 className="font-display font-semibold mb-4">Recent transactions</h3>
        <div className="space-y-2">
          {mockPayments.slice(0, 5).map((p) => (
            <div key={p.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-secondary/40 transition">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-primary grid place-items-center text-xs font-semibold text-primary-foreground">
                  {p.client.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="text-sm font-medium">{p.client}</div>
                  <div className="text-xs text-muted-foreground">{p.source} · {p.date}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-sm font-semibold">{currencySymbol[p.currency]}{p.amount.toLocaleString()}</div>
                <StatusBadge status={p.status} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="glass-strong rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-4 h-4 text-accent" />
          <h3 className="font-display font-semibold">AI insights</h3>
        </div>
        <div className="space-y-3">
          {mockAlerts.slice(0, 3).map((a) => (
            <div key={a.id} className="p-3 rounded-xl bg-secondary/40 border border-border/40">
              <div className="text-sm font-medium">{a.title}</div>
              <div className="text-xs text-muted-foreground mt-1 leading-relaxed">{a.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Overview;
