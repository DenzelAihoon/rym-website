import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router";
import { Button } from "../components/ui/button";
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
import { School, Users, Heart, Mail, LogOut } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "../../supabaseClient";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [schools, setSchools] = useState<any[]>([]);
  const [donations, setDonations] = useState<any[]>([]);
  const [contacts, setContacts] = useState<any[]>([]);
  const [students, setStudents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

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
      const [schoolsRes, donationsRes, contactsRes, studentsRes] =
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
        ]);

      setSchools(schoolsRes.data || []);
      setDonations(donationsRes.data || []);
      setContacts(contactsRes.data || []);
      setStudents(studentsRes.data || []);
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
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
                  <p className="text-3xl font-bold">
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
          </Tabs>
        )}
      </main>
    </div>
  );
}
