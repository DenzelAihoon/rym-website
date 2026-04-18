import { useState } from 'react';
import { useNavigate } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Plus, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '../../supabaseClient';

const GHANA_REGIONS = [
  'Greater Accra', 'Ashanti', 'Western', 'Central', 'Eastern', 'Northern',
  'Upper East', 'Upper West', 'Volta', 'Bono', 'Bono East', 'Ahafo',
  'Western North', 'Oti', 'Savannah', 'North East'
];

interface Student {
  id: string;
  name: string;
  class: string;
  dob: string;
}

export default function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [schoolName, setSchoolName] = useState('');
  const [schoolType, setSchoolType] = useState('');
  const [region, setRegion] = useState('');
  const [district, setDistrict] = useState('');
  const [address, setAddress] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [students, setStudents] = useState<Student[]>([
    { id: '1', name: '', class: '', dob: '' }
  ]);

  const addStudent = () => {
    setStudents([...students, { id: Date.now().toString(), name: '', class: '', dob: '' }]);
  };

  const removeStudent = (id: string) => {
    if (students.length > 1) {
      setStudents(students.filter(s => s.id !== id));
    }
  };

  const updateStudent = (id: string, field: keyof Student, value: string) => {
    setStudents(students.map(s => s.id === id ? { ...s, [field]: value } : s));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Step 1: Insert school
      const { data: schoolData, error: schoolError } = await supabase
        .from('schools')
        .insert([{
          name: schoolName,
          email: email,
          phone: phone,
          address: address,
          region: region,
          principal_name: contactPerson,
          student_count: students.length,
          status: 'pending',
        }])
        .select()
        .single();

      if (schoolError) {
        console.error('School error:', schoolError);
        throw schoolError;
      }

      // Step 2: Insert students
      const studentsData = students.map(student => ({
        name: student.name,
        school_id: schoolData.id,
        grade: student.class,
        status: 'pending',
      }));

      const { error: studentsError } = await supabase
        .from('students')
        .insert(studentsData);

      if (studentsError) {
        console.error('Students error:', studentsError);
        throw studentsError;
      }

      toast.success('Registration submitted successfully!', {
        description: `${schoolName} registered with ${students.length} student(s).`,
      });

      navigate('/schools');

    } catch (error: any) {
      console.error('Full error:', error);
      toast.error(`Error: ${error?.message || 'Something went wrong. Please try again.'}`);
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              School Registration
            </h1>
            <p className="text-xl text-gray-600">
              Register your school for Rack Your Mind 2026
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>School Information</CardTitle>
                <CardDescription>Enter your school's basic details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="schoolName">School Name *</Label>
                  <Input
                    id="schoolName"
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>School Type *</Label>
                    <Select value={schoolType} onValueChange={setSchoolType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="public">Public</SelectItem>
                        <SelectItem value="private">Private</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Region *</Label>
                    <Select value={region} onValueChange={setRegion}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select region" />
                      </SelectTrigger>
                      <SelectContent>
                        {GHANA_REGIONS.map((r) => (
                          <SelectItem key={r} value={r.toLowerCase().replace(/\s+/g, '-')}>
                            {r}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="district">District *</Label>
                  <Input
                    id="district"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="address">Address</Label>
                  <Textarea
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="contactPerson">Contact Person *</Label>
                  <Input
                    id="contactPerson"
                    value={contactPerson}
                    onChange={(e) => setContactPerson(e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Student Information</CardTitle>
                <CardDescription>Add students participating in the competition</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {students.map((student, index) => (
                  <div key={student.id} className="p-4 border rounded-lg space-y-4">
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold">Student {index + 1}</h4>
                      {students.length > 1 && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeStudent(student.id)}
                        >
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label>Student Name *</Label>
                        <Input
                          value={student.name}
                          onChange={(e) => updateStudent(student.id, 'name', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label>Class *</Label>
                        <Input
                          value={student.class}
                          onChange={(e) => updateStudent(student.id, 'class', e.target.value)}
                          placeholder="e.g., Form 2"
                          required
                        />
                      </div>
                      <div>
                        <Label>Date of Birth *</Label>
                        <Input
                          type="date"
                          value={student.dob}
                          onChange={(e) => updateStudent(student.id, 'dob', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <Button type="button" variant="outline" onClick={addStudent} className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Another Student
                </Button>
              </CardContent>
            </Card>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-[#0d5a5a] hover:bg-[#0a4848]"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit Registration'}
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
