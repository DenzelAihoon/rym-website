import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Badge } from "../components/ui/badge";
import {
  School,
  Users,
  Heart,
  Mail,
  LogOut,
  Star,
  Trash2,
  Eye,
  EyeOff,
} from "lucide-react";
import { toast } from "sonner";
import { supabase } from "../../supabaseClient";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [schools, setSchools] = useState<any[]>([]);
  const [donations, setDonations] = useState<any[]>([]);
  const [contacts, setContacts] = useState<any[]>([]);
  const [students, setStudents] = useState<any[]>([]);
  const [sponsors, setSponsors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [sponsorForm, setSponsorForm] = useState({
    name: "",
    type: "brand",
    image_url: "",
    amount: "",
  });
  const [addingsponsor, setAddingSponsor] = useState(false);

  useEffect(() => {
    const isAdmin = localStorage.getItem("rym-admin");
    if (!isAdmin) {
      navigate("/admin-login");
      return;
    }
    fetchAllData();
  }, [navigate]);

  const fetchAllData = async () => {
    try {
      const [schoolsRes, donationsRes, contactsRes, studentsRes, sponsorsRes] =
        await Promise.all([
          supabase
            .from("schools")
            .select("*")
            .order("created_at", { ascending: false }),
          supabase
            .from("donations")
            .select("*")
            .order("created_at", { ascending: false }),
          supabase
            .from("contacts")
            .select("*")
            .order("created_at", { ascending: false }),
          supabase
            .from("students")
            .select("*")
            .order("created_at", { ascending: false }),
          supabase
            .from("sponsors")
            .select("*")
            .order("amount", { ascending: false }),
        ]);

      setSchools(schoolsRes.data || []);
      setDonations(donationsRes.data || []);
      setContacts(contactsRes.data || []);
      setStudents(studentsRes.data || []);
      setSponsors(sponsorsRes.data || []);
    } catch (error) {
      toast.error("Error loading dashboard data");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const updateSchoolStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from("schools")
        .update({ status })
        .eq("id", id);
      if (error) throw error;
      toast.success(`School ${status} successfully!`);
      fetchAllData();
    } catch (error) {
      toast.error("Error updating school status");
    }
  };

  const addSponsor = async () => {
    if (!sponsorForm.name) {
      toast.error("Please enter a name");
      return;
    }
    setAddingSponsor(true);
    try {
      const { error } = await supabase.from("sponsors").insert([
        {
          name: sponsorForm.name,
          type: sponsorForm.type,
          image_url: sponsorForm.image_url || null,
          amount: sponsorForm.amount ? parseFloat(sponsorForm.amount) : null,
          is_visible: true,
        },
      ]);
      if (error) throw error;
      toast.success("Sponsor added successfully!");
      setSponsorForm({ name: "", type: "brand", image_url: "", amount: "" });
      fetchAllData();
    } catch (error) {
      toast.error("Error adding sponsor");
      console.error(error);
    } finally {
      setAddingSponsor(false);
    }
  };

  const toggleSponsorVisibility = async (id: string, current: boolean) => {
    try {
      const { error } = await supabase
        .from("sponsors")
        .update({ is_visible: !current })
        .eq("id", id);
      if (error) throw error;
      toast.success(`Sponsor ${!current ? "shown" : "hidden"} on donate page!`);
      fetchAllData();
    } catch (error) {
      toast.error("Error updating sponsor");
    }
  };

  const deleteSponsor = async (id: string) => {
    try {
      const { error } = await supabase.from("sponsors").delete().eq("id", id);
      if (error) throw error;
      toast.success("Sponsor deleted!");
      fetchAllData();
    } catch (error) {
      toast.error("Error deleting sponsor");
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    localStorage.removeItem("rym-admin");
    navigate("/admin-login");
  };

  const totalDonations = donations.reduce((sum, d) => sum + (d.amount || 0), 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-[#0d5a5a] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link to="/">
              <h1 className="text-2xl font-bold">RYM Admin Dashboard</h1>
            </Link>
            <Button
              variant="outline"
              className="bg-white/10 text-white border-white hover:bg-white/20"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Schools</p>
                  <p className="text-3xl font-bold">{schools.length}</p>
                </div>
                <School className="h-8 w-8 text-[#0d5a5a]" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Students</p>
                  <p className="text-3xl font-bold">{students.length}</p>
                </div>
                <Users className="h-8 w-8 text-[#0d5a5a]" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Donations</p>
                  <p className="text-2xl font-bold">
                    GHS {totalDonations.toLocaleString()}
                  </p>
                </div>
                <Heart className="h-8 w-8 text-[#0d5a5a]" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Messages</p>
                  <p className="text-3xl font-bold">{contacts.length}</p>
                </div>
                <Mail className="h-8 w-8 text-[#0d5a5a]" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Sponsors</p>
                  <p className="text-3xl font-bold">{sponsors.length}</p>
                </div>
                <Star className="h-8 w-8 text-[#0d5a5a]" />
              </div>
            </CardContent>
          </Card>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Loading dashboard data...</p>
          </div>
        ) : (
          <Tabs defaultValue="schools" className="space-y-4">
            <TabsList>
              <TabsTrigger value="schools">
                Schools ({schools.length})
              </TabsTrigger>
              <TabsTrigger value="students">
                Students ({students.length})
              </TabsTrigger>
              <TabsTrigger value="donations">
                Donations ({donations.length})
              </TabsTrigger>
              <TabsTrigger value="contacts">
                Messages ({contacts.length})
              </TabsTrigger>
              <TabsTrigger value="sponsors">
                Sponsors ({sponsors.length})
              </TabsTrigger>
            </TabsList>

            {/* Schools Tab */}
            <TabsContent value="schools">
              <Card>
                <CardHeader>
                  <CardTitle>Registered Schools</CardTitle>
                  <CardDescription>
                    Manage and approve school registrations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {schools.length === 0 ? (
                    <p className="text-center text-gray-500 py-8">
                      No schools registered yet.
                    </p>
                  ) : (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>School Name</TableHead>
                          <TableHead>Region</TableHead>
                          <TableHead>Contact</TableHead>
                          <TableHead>Students</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {schools.map((school) => (
                          <TableRow key={school.id}>
                            <TableCell className="font-medium">
                              {school.name}
                            </TableCell>
                            <TableCell>{school.region}</TableCell>
                            <TableCell>{school.principal_name}</TableCell>
                            <TableCell>{school.student_count}</TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  school.status === "approved"
                                    ? "default"
                                    : "secondary"
                                }
                              >
                                {school.status}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              {school.status === "pending" && (
                                <div className="flex gap-2">
                                  <Button
                                    size="sm"
                                    className="bg-green-600 hover:bg-green-700 text-white"
                                    onClick={() =>
                                      updateSchoolStatus(school.id, "approved")
                                    }
                                  >
                                    Approve
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="destructive"
                                    onClick={() =>
                                      updateSchoolStatus(school.id, "rejected")
                                    }
                                  >
                                    Reject
                                  </Button>
                                </div>
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Students Tab */}
            <TabsContent value="students">
              <Card>
                <CardHeader>
                  <CardTitle>Registered Students</CardTitle>
                  <CardDescription>
                    All students participating in RYM 2026
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {students.length === 0 ? (
                    <p className="text-center text-gray-500 py-8">
                      No students registered yet.
                    </p>
                  ) : (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Grade</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Date Registered</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {students.map((student) => (
                          <TableRow key={student.id}>
                            <TableCell className="font-medium">
                              {student.name}
                            </TableCell>
                            <TableCell>{student.grade}</TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  student.status === "approved"
                                    ? "default"
                                    : "secondary"
                                }
                              >
                                {student.status}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              {new Date(
                                student.created_at,
                              ).toLocaleDateString()}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Donations Tab */}
            <TabsContent value="donations">
              <Card>
                <CardHeader>
                  <CardTitle>Donations</CardTitle>
                  <CardDescription>All donations received</CardDescription>
                </CardHeader>
                <CardContent>
                  {donations.length === 0 ? (
                    <p className="text-center text-gray-500 py-8">
                      No donations yet.
                    </p>
                  ) : (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Phone</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Message</TableHead>
                          <TableHead>Date</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {donations.map((donation) => (
                          <TableRow key={donation.id}>
                            <TableCell className="font-medium">
                              {donation.name}
                            </TableCell>
                            <TableCell>{donation.email}</TableCell>
                            <TableCell>{donation.phone}</TableCell>
                            <TableCell>
                              GHS {donation.amount?.toLocaleString()}
                            </TableCell>
                            <TableCell>{donation.message || "—"}</TableCell>
                            <TableCell>
                              {new Date(
                                donation.created_at,
                              ).toLocaleDateString()}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Contacts Tab */}
            <TabsContent value="contacts">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Messages</CardTitle>
                  <CardDescription>
                    Messages from website visitors
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {contacts.length === 0 ? (
                    <p className="text-center text-gray-500 py-8">
                      No messages yet.
                    </p>
                  ) : (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Subject</TableHead>
                          <TableHead>Message</TableHead>
                          <TableHead>Date</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {contacts.map((contact) => (
                          <TableRow key={contact.id}>
                            <TableCell className="font-medium">
                              {contact.name}
                            </TableCell>
                            <TableCell>{contact.email}</TableCell>
                            <TableCell>{contact.subject}</TableCell>
                            <TableCell className="max-w-xs truncate">
                              {contact.message}
                            </TableCell>
                            <TableCell>
                              {new Date(
                                contact.created_at,
                              ).toLocaleDateString()}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Sponsors Tab */}
            <TabsContent value="sponsors">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Add New Sponsor</CardTitle>
                  <CardDescription>
                    Add a brand or individual donor to the donate page
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Name *</Label>
                      <Input
                        placeholder="e.g. MTN Ghana or John Mensah"
                        value={sponsorForm.name}
                        onChange={(e) =>
                          setSponsorForm({
                            ...sponsorForm,
                            name: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <Label>Type *</Label>
                      <Select
                        value={sponsorForm.type}
                        onValueChange={(v) =>
                          setSponsorForm({ ...sponsorForm, type: v })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="brand">Brand / Company</SelectItem>
                          <SelectItem value="individual">Individual</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Image URL (logo or photo)</Label>
                      <Input
                        placeholder="https://example.com/logo.png"
                        value={sponsorForm.image_url}
                        onChange={(e) =>
                          setSponsorForm({
                            ...sponsorForm,
                            image_url: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <Label>Amount (GHS)</Label>
                      <Input
                        type="number"
                        placeholder="e.g. 5000"
                        value={sponsorForm.amount}
                        onChange={(e) =>
                          setSponsorForm({
                            ...sponsorForm,
                            amount: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <Button
                    className="mt-4 bg-[#0d5a5a] hover:bg-[#0a4848]"
                    onClick={addSponsor}
                    disabled={addingsponsor}
                  >
                    {addingsponsor ? "Adding..." : "Add Sponsor"}
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>All Sponsors & Donors</CardTitle>
                  <CardDescription>
                    Manage visibility on the donate page
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {sponsors.length === 0 ? (
                    <p className="text-center text-gray-500 py-8">
                      No sponsors added yet.
                    </p>
                  ) : (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Image</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Visible</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {sponsors.map((sponsor) => (
                          <TableRow key={sponsor.id}>
                            <TableCell>
                              {sponsor.image_url ? (
                                <img
                                  src={sponsor.image_url}
                                  alt={sponsor.name}
                                  className="h-10 w-10 object-contain rounded"
                                />
                              ) : (
                                <div className="h-10 w-10 bg-[#0d5a5a] rounded flex items-center justify-center text-white font-bold">
                                  {sponsor.name.charAt(0)}
                                </div>
                              )}
                            </TableCell>
                            <TableCell className="font-medium">
                              {sponsor.name}
                            </TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  sponsor.type === "brand"
                                    ? "default"
                                    : "secondary"
                                }
                              >
                                {sponsor.type}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              {sponsor.amount
                                ? `GHS ${sponsor.amount.toLocaleString()}`
                                : "—"}
                            </TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  sponsor.is_visible ? "default" : "secondary"
                                }
                              >
                                {sponsor.is_visible ? "Visible" : "Hidden"}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() =>
                                    toggleSponsorVisibility(
                                      sponsor.id,
                                      sponsor.is_visible,
                                    )
                                  }
                                >
                                  {sponsor.is_visible ? (
                                    <EyeOff className="h-4 w-4" />
                                  ) : (
                                    <Eye className="h-4 w-4" />
                                  )}
                                </Button>
                                <Button
                                  size="sm"
                                  variant="destructive"
                                  onClick={() => deleteSponsor(sponsor.id)}
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        )}
      </main>
    </div>
  );
}
