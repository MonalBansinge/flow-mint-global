import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AuthLayout, FormField } from "@/components/auth/AuthLayout";

const Login = () => {
  const navigate = useNavigate();
  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to your FlowLedger account"
      footer={<>Don't have an account? <Link to="/signup" className="text-accent hover:underline">Sign up</Link></>}
    >
      <form onSubmit={(e) => { e.preventDefault(); navigate("/dashboard"); }} className="space-y-4">
        <FormField label="Email" type="email" placeholder="you@studio.com" required />
        <div>
          <FormField label="Password" type="password" placeholder="••••••••" required />
          <div className="text-right mt-1.5">
            <Link to="#" className="text-xs text-accent hover:underline">Forgot password?</Link>
          </div>
        </div>
        <Button type="submit" variant="hero" className="w-full" size="lg">Sign in</Button>
      </form>
    </AuthLayout>
  );
};

export default Login;
