import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Lock } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "../../supabaseClient";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      // Check if user is an admin
      const { data: adminData, error: adminError } = await supabase
        .from("admin_users")
        .select("*")
        .eq("email", email)
        .single();

      if (adminError || !adminData) {
        await supabase.auth.signOut();
        toast.error("Access denied", {
          description: "You are not authorized to access the admin dashboard.",
        });
        setLoading(false);
        return;
      }

      localStorage.setItem("rym-admin", "true");
      toast.success("Login successful!");
      navigate("/admin");
    } catch (error: any) {
      toast.error("Invalid credentials", {
        description: "Please check your email and password.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d5a5a] to-[#0a4848] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-block bg-white/10 backdrop-blur-sm p-4 rounded-full mb-4">
            <Lock className="h-12 w-12 text-white" />
          </div>
          <Link to="/">
            <h1 className="text-3xl font-bold text-white mb-2">RYM Admin</h1>
          </Link>
          <p className="text-gray-200">Sign in to access the dashboard</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Admin Login</CardTitle>
            <CardDescription>
              Enter your credentials to continue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="admin@rackyourmind.org"
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#0d5a5a] hover:bg-[#0a4848]"
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <Link to="/" className="text-white hover:text-[#fbbf24]">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
