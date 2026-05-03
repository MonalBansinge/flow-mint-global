import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AuthLayout, FormField } from "@/components/auth/AuthLayout";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { countries } from "@/mock-data";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const currencies = ["USD", "EUR", "GBP", "SGD", "IDR", "PHP", "MYR", "THB"];

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from("users").insert({ name, email });
    setLoading(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Account created successfully!");
    setTimeout(() => navigate("/dashboard"), 800);
  };

  return (
    <AuthLayout
      title="Start free today"
      subtitle="Build your global income command center"
      footer={<>Already have an account? <Link to="/login" className="text-accent hover:underline">Sign in</Link></>}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormField label="Full name" placeholder="Maya Rahmadani" required value={name} onChange={(e) => setName(e.target.value)} />
        <FormField label="Email" type="email" placeholder="you@studio.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <FormField label="Password" type="password" placeholder="At least 8 characters" required />
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <Label className="text-xs text-muted-foreground">Country</Label>
            <Select defaultValue="ID">
              <SelectTrigger className="bg-secondary/50 h-11"><SelectValue /></SelectTrigger>
              <SelectContent>{countries.map(c => <SelectItem key={c.code} value={c.code}>{c.name}</SelectItem>)}</SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs text-muted-foreground">Currency</Label>
            <Select defaultValue="USD">
              <SelectTrigger className="bg-secondary/50 h-11"><SelectValue /></SelectTrigger>
              <SelectContent>{currencies.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
            </Select>
          </div>
        </div>
        <Button type="submit" variant="hero" className="w-full" size="lg" disabled={loading}>
          {loading ? "Creating account…" : "Create account"}
        </Button>
      </form>
    </AuthLayout>
  );
};

export default Signup;
