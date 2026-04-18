import { Trophy, Sparkles, GraduationCap, HandHeart, Network, Medal } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Trophy,
      title: 'Prizes & Recognition',
      description: 'Winning schools receive trophies, certificates, and valuable prizes.',
    },
    {
      icon: GraduationCap,
      title: 'Academic Excellence',
      description: 'Enhanced learning outcomes and improved academic performance.',
    },
    {
      icon: Sparkles,
      title: 'Skill Development',
      description: 'Build critical thinking, problem-solving, and teamwork skills.',
    },
    {
      icon: Network,
      title: 'Networking',
      description: 'Connect with schools and educators from across Ghana.',
    },
    {
      icon: Medal,
      title: 'National Platform',
      description: 'Showcase your school\'s talent on a national stage.',
    },
    {
      icon: HandHeart,
      title: 'Community Impact',
      description: 'Contribute to educational development in your community.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Benefits of Participating
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of schools across Ghana and unlock opportunities for your students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-br from-[#0d5a5a] to-[#0a4848] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
