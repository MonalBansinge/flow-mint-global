import { Link } from "react-router-dom";
import { Twitter, Github, Linkedin } from "lucide-react";
import logo from "@/assets/flowledger-logo.png";

export const Footer = () => (
  <footer className="border-t border-border/50 mt-32">
    <div className="container mx-auto px-6 py-14">
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="flex items-center" aria-label="FlowLedger home">
            <img src={logo} alt="FlowLedger logo" className="h-9 w-auto" />
          </Link>
          <p className="text-sm text-muted-foreground mt-3 max-w-xs">
            Get paid globally. Stay compliant locally.
          </p>
          <div className="flex gap-3 mt-5">
            {[Twitter, Github, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-lg glass grid place-items-center hover:text-primary transition">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        {[
          { title: "Product", links: ["Features", "Pricing", "Changelog", "Roadmap"] },
          { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
          { title: "Legal", links: ["Privacy", "Terms", "Security", "Compliance"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-semibold mb-4 text-sm">{col.title}</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {col.links.map((l) => <li key={l}><a href="#" className="hover:text-foreground transition">{l}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12 pt-6 border-t border-border/50 text-xs text-muted-foreground flex flex-col md:flex-row gap-2 justify-between">
        <span>© 2026 FlowLedger. All rights reserved.</span>
        <span>Made for global freelancers.</span>
      </div>
    </div>
  </footer>
);
