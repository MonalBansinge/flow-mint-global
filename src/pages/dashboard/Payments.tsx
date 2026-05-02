import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, Pencil } from "lucide-react";
import { mockPayments, currencySymbol, type Payment } from "@/mock-data";
import { StatusBadge } from "@/components/dashboard/StatCard";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Payments = () => {
  const [items, setItems] = useState<Payment[]>(mockPayments);
  const [open, setOpen] = useState(false);

  const addPayment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setItems([{
      id: Math.random().toString(36).slice(2),
      client: String(fd.get("client")),
      amount: Number(fd.get("amount")),
      currency: fd.get("currency") as Payment["currency"],
      status: "pending",
      date: new Date().toISOString().slice(0, 10),
      source: String(fd.get("source")),
    }, ...items]);
    setOpen(false);
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">All your incoming payments, across every currency.</p>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild><Button variant="hero"><Plus className="w-4 h-4" /> Add payment</Button></DialogTrigger>
          <DialogContent className="bg-card border-border">
            <DialogHeader><DialogTitle>New payment</DialogTitle></DialogHeader>
            <form onSubmit={addPayment} className="space-y-3">
              <div><Label className="text-xs">Client</Label><Input name="client" required className="bg-secondary/50" /></div>
              <div className="grid grid-cols-2 gap-3">
                <div><Label className="text-xs">Amount</Label><Input name="amount" type="number" step="0.01" required className="bg-secondary/50" /></div>
                <div><Label className="text-xs">Currency</Label><Input name="currency" defaultValue="USD" required className="bg-secondary/50" /></div>
              </div>
              <div><Label className="text-xs">Source</Label><Input name="source" placeholder="Wise / Stripe / PayPal" required className="bg-secondary/50" /></div>
              <Button type="submit" variant="hero" className="w-full">Save payment</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="glass-strong rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-secondary/40 text-muted-foreground text-xs uppercase tracking-wider">
            <tr>
              <th className="text-left p-4">Client</th>
              <th className="text-left p-4">Source</th>
              <th className="text-left p-4">Date</th>
              <th className="text-right p-4">Amount</th>
              <th className="text-left p-4">Status</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody>
            {items.map((p) => (
              <tr key={p.id} className="border-t border-border/40 hover:bg-secondary/20">
                <td className="p-4 font-medium">{p.client}</td>
                <td className="p-4 text-muted-foreground">{p.source}</td>
                <td className="p-4 text-muted-foreground">{p.date}</td>
                <td className="p-4 text-right font-semibold">{currencySymbol[p.currency]}{p.amount.toLocaleString()} <span className="text-xs text-muted-foreground">{p.currency}</span></td>
                <td className="p-4"><StatusBadge status={p.status} /></td>
                <td className="p-4 text-right">
                  <Button variant="ghost" size="icon"><Pencil className="w-3.5 h-3.5" /></Button>
                  <Button variant="ghost" size="icon" onClick={() => setItems(items.filter(i => i.id !== p.id))}><Trash2 className="w-3.5 h-3.5" /></Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Payments;
