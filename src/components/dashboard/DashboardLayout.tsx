import { NavLink, Outlet, useLocation, Link } from "react-router-dom";
import { LayoutDashboard, CreditCard, FileText, ShieldCheck, BarChart3, Settings, Wallet, Bell, Search, LogOut } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/dashboard", label: "Overview", icon: LayoutDashboard, end: true },
  { to: "/dashboard/payments", label: "Payments", icon: CreditCard },
  { to: "/dashboard/invoices", label: "Invoices", icon: FileText },
  { to: "/dashboard/compliance", label: "Compliance", icon: ShieldCheck },
  { to: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/dashboard/settings", label: "Settings", icon: Settings },
];

const titles: Record<string, string> = {
  "/dashboard": "Overview",
  "/dashboard/payments": "Payments",
  "/dashboard/invoices": "Invoices",
  "/dashboard/compliance": "Compliance",
  "/dashboard/analytics": "Analytics",
  "/dashboard/settings": "Settings",
};

export const DashboardLayout = () => {
  const { pathname } = useLocation();
  return (
    <div className="min-h-screen bg-background flex w-full">
      <aside className="hidden md:flex w-64 flex-col border-r border-border/60 bg-sidebar p-4 sticky top-0 h-screen">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg px-2 py-2 mb-6">
          <div className="w-8 h-8 rounded-lg bg-gradient-primary grid place-items-center">
            <Wallet className="w-4 h-4 text-primary-foreground" />
          </div>
          FlowLedger
        </Link>
        <nav className="flex-1 space-y-1">
          {nav.map((n) => (
            <NavLink
              key={n.to} to={n.to} end={n.end}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition ${
                  isActive
                    ? "bg-gradient-to-r from-primary/20 to-accent/10 text-foreground border border-primary/20"
                    : "text-muted-foreground hover:bg-sidebar-accent hover:text-foreground"
                }`}
            >
              <n.icon className="w-4 h-4" /> {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="glass-strong rounded-xl p-4 mt-4">
          <div className="text-xs text-accent font-semibold">PRO PLAN</div>
          <div className="text-sm mt-1">All AI features unlocked</div>
          <Button variant="hero" size="sm" className="w-full mt-3">Manage plan</Button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-border/60 flex items-center justify-between px-6 sticky top-0 bg-background/80 backdrop-blur-xl z-30">
          <div>
            <h1 className="font-display text-xl font-semibold">{titles[pathname] ?? "Dashboard"}</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 bg-secondary/50 rounded-lg px-3 h-9 w-64">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input className="bg-transparent outline-none text-sm flex-1" placeholder="Search…" />
            </div>
            <Button variant="ghost" size="icon"><Bell className="w-4 h-4" /></Button>
            <div className="w-9 h-9 rounded-full bg-gradient-primary grid place-items-center text-sm font-semibold text-primary-foreground">M</div>
          </div>
        </header>
        <main className="flex-1 p-6 overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
