import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { countries } from "@/mock-data";
import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

const Settings = () => {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    document.documentElement.classList.toggle("light", !dark);
  }, [dark]);

  return (
    <div className="grid lg:grid-cols-3 gap-5">
      <div className="lg:col-span-2 space-y-5">
        <div className="glass-strong rounded-2xl p-6">
          <h3 className="font-display font-semibold mb-1">Profile</h3>
          <p className="text-xs text-muted-foreground mb-5">Keep your details current for accurate compliance tips.</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div><Label className="text-xs">Full name</Label><Input defaultValue="Maya Rahmadani" className="bg-secondary/50 mt-1.5" /></div>
            <div><Label className="text-xs">Email</Label><Input defaultValue="maya@studio.com" className="bg-secondary/50 mt-1.5" /></div>
            <div>
              <Label className="text-xs">Country</Label>
              <Select defaultValue="ID"><SelectTrigger className="bg-secondary/50 mt-1.5"><SelectValue /></SelectTrigger>
                <SelectContent>{countries.map(c => <SelectItem key={c.code} value={c.code}>{c.name}</SelectItem>)}</SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-xs">Preferred currency</Label>
              <Select defaultValue="USD"><SelectTrigger className="bg-secondary/50 mt-1.5"><SelectValue /></SelectTrigger>
                <SelectContent>{["USD","EUR","GBP","SGD","IDR","PHP"].map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
              </Select>
            </div>
          </div>
          <Button variant="hero" className="mt-5">Save changes</Button>
        </div>

        <div className="glass-strong rounded-2xl p-6">
          <h3 className="font-display font-semibold mb-4">Preferences</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium">Dark mode</div>
                <div className="text-xs text-muted-foreground">Easier on the eyes for long ledger sessions</div>
              </div>
              <Switch checked={dark} onCheckedChange={setDark} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium">Email tax reminders</div>
                <div className="text-xs text-muted-foreground">Get pinged before filing deadlines</div>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium">AI weekly digest</div>
                <div className="text-xs text-muted-foreground">A short summary every Sunday</div>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </div>
      </div>

      <div className="glass-strong rounded-2xl p-6 h-fit relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10" />
        <div className="relative">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-accent" />
            <div className="text-xs text-accent font-semibold uppercase tracking-wider">Pro plan</div>
          </div>
          <div className="font-display text-2xl font-bold mt-2">$12 <span className="text-sm font-normal text-muted-foreground">/ month</span></div>
          <div className="text-xs text-muted-foreground mt-1">Renews May 28, 2026</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>• Unlimited payments & invoices</li>
            <li>• AI compliance assistant</li>
            <li>• Multi-currency analytics</li>
          </ul>
          <Button variant="glass" className="w-full mt-5">Manage subscription</Button>
        </div>
      </div>
    </div>
  );
};
export default Settings;
