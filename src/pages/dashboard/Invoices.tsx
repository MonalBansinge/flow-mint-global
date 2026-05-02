import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Download } from "lucide-react";
import { mockInvoices, currencySymbol, type Invoice } from "@/mock-data";
import { StatusBadge } from "@/components/dashboard/StatCard";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Invoices = () => {
  const [items, setItems] = useState<Invoice[]>(mockInvoices);
  const [open, setOpen] = useState(false);

  const create = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const num = `INV-2026-${String(items.length + 14).padStart(3, '0')}`;
    setItems([{
      id: Math.random().toString(36).slice(2),
      number: num,
      client: String(fd.get("client")),
      amount: Number(fd.get("amount")),
      currency: fd.get("currency") as Invoice["currency"],
      status: "draft",
      issueDate: new Date().toISOString().slice(0, 10),
      dueDate: String(fd.get("dueDate")),
    }, ...items]);
    setOpen(false);
    toast.success(`${num} created`);
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">Auto-numbered, status-tracked, ready for clients.</p>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild><Button variant="hero"><Plus className="w-4 h-4" /> New invoice</Button></DialogTrigger>
          <DialogContent className="bg-card border-border">
            <DialogHeader><DialogTitle>Create invoice</DialogTitle></DialogHeader>
            <form onSubmit={create} className="space-y-3">
              <div><Label className="text-xs">Client</Label><Input name="client" required className="bg-secondary/50" /></div>
              <div className="grid grid-cols-2 gap-3">
                <div><Label className="text-xs">Amount</Label><Input name="amount" type="number" step="0.01" required className="bg-secondary/50" /></div>
                <div><Label className="text-xs">Currency</Label><Input name="currency" defaultValue="USD" required className="bg-secondary/50" /></div>
              </div>
              <div><Label className="text-xs">Due date</Label><Input name="dueDate" type="date" required className="bg-secondary/50" /></div>
              <Button type="submit" variant="hero" className="w-full">Create invoice</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((inv) => (
          <div key={inv.id} className="glass-strong rounded-2xl p-5 hover:-translate-y-1 transition">
            <div className="flex items-center justify-between">
              <div className="text-xs font-mono text-muted-foreground">{inv.number}</div>
              <StatusBadge status={inv.status} />
            </div>
            <div className="mt-3 font-medium">{inv.client}</div>
            <div className="font-display text-2xl font-bold mt-1">{currencySymbol[inv.currency]}{inv.amount.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground mt-2">Issued {inv.issueDate} · Due {inv.dueDate}</div>
            <Button variant="glass" size="sm" className="w-full mt-4" onClick={() => toast("PDF export coming soon")}>
              <Download className="w-3.5 h-3.5" /> Download PDF
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Invoices;
