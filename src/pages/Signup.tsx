import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AuthLayout, FormField } from "@/components/auth/AuthLayout";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { countries } from "@/mock-data";

const currencies = ["USD", "EUR", "GBP", "SGD", "IDR", "PHP", "MYR", "THB"];

const Signup = () => {
  const navigate = useNavigate();
  return (
    <AuthLayout
      title="Start free today"
      subtitle="Build your global income command center"
      footer={<>Already have an account? <Link to="/login" className="text-accent hover:underline">Sign in</Link></>}
    >
      <form onSubmit={(e) => { e.preventDefault(); navigate("/dashboard"); }} className="space-y-4">
        <FormField label="Full name" placeholder="Maya Rahmadani" required />
        <FormField label="Email" type="email" placeholder="you@studio.com" required />
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
        <Button type="submit" variant="hero" className="w-full" size="lg">Create account</Button>
      </form>
    </AuthLayout>
  );
};

export default Signup;
