import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Heart, DollarSign } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "../../supabaseClient";

export default function Donate() {
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const presetAmounts = ["50", "100", "250", "500", "1000"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const donationAmount = amount === "custom" ? customAmount : amount;

    try {
      const { error } = await supabase.from("donations").insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          amount: parseFloat(donationAmount),
          message: formData.message,
        },
      ]);

      if (error) throw error;

      toast.success("Thank you for your donation!", {
        description: `Your donation of GHS ${donationAmount} has been received.`,
      });
      setAmount("");
      setCustomAmount("");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#0d5a5a] p-4 rounded-full mb-4">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Support RYM
            </h1>
            <p className="text-xl text-gray-600">
              Your donation helps empower students across Ghana
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Make a Donation</CardTitle>
              <CardDescription>
                Every contribution makes a difference in a student's educational
                journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label>Select Amount (GHS)</Label>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mt-2">
                    {presetAmounts.map((amt) => (
                      <Button
                        key={amt}
                        type="button"
                        variant={amount === amt ? "default" : "outline"}
                        onClick={() => setAmount(amt)}
                        className={amount === amt ? "bg-[#0d5a5a]" : ""}
                      >
                        GHS {amt}
                      </Button>
                    ))}
                  </div>
                  <div className="mt-3">
                    <Button
                      type="button"
                      variant={amount === "custom" ? "default" : "outline"}
                      onClick={() => setAmount("custom")}
                      className={`w-full ${amount === "custom" ? "bg-[#0d5a5a]" : ""}`}
                    >
                      <DollarSign className="h-4 w-4 mr-2" />
                      Custom Amount
                    </Button>
                  </div>
                  {amount === "custom" && (
                    <div className="mt-3">
                      <Input
                        type="number"
                        placeholder="Enter custom amount"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        required
                      />
                    </div>
                  )}
                </div>

                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Leave a message of support..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#0d5a5a] hover:bg-[#0a4848]"
                  disabled={loading || !amount}
                >
                  {loading ? "Processing..." : "Donate Now"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
