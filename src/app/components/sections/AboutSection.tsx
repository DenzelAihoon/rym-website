import { Target, Users, Award, Heart } from 'lucide-react';

export default function AboutSection() {
  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To enhance literacy and numeracy skills among Ghanaian students through engaging competitions.',
    },
    {
      icon: Users,
      title: 'Nationwide Reach',
      description: 'Connecting schools across all 16 regions of Ghana in one unified academic event.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Celebrating academic achievement and fostering a culture of healthy competition.',
    },
    {
      icon: Heart,
      title: 'Community Impact',
      description: 'Building stronger educational communities through collaboration and support.',
    },
  ];

  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Rack Your Mind
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A transformative initiative by the Omnicare Foundation dedicated to promoting
            academic excellence and educational development across Ghana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="bg-[#0d5a5a] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
