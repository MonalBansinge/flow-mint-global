import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/flowledger-logo.png";

export const Navbar = () => {
  const { pathname } = useLocation();
  if (pathname.startsWith("/dashboard") || pathname.startsWith("/login") || pathname.startsWith("/signup"))
    return null;

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <nav className="glass-strong rounded-2xl px-5 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center" aria-label="FlowLedger home">
            <img src={logo} alt="FlowLedger logo" className="h-9 w-auto" />
          </Link>
          <div className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition">Features</a>
            <a href="#how" className="hover:text-foreground transition">How it works</a>
            <a href="#pricing" className="hover:text-foreground transition">Pricing</a>
            <a href="#faq" className="hover:text-foreground transition">FAQ</a>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild><Link to="/login">Sign in</Link></Button>
            <Button size="sm" variant="hero" asChild><Link to="/signup">Start free</Link></Button>
          </div>
        </nav>
      </div>
    </header>
  );
};
