import { BookOpen, Calculator, Zap, Lightbulb } from 'lucide-react';

export default function CompetitionSection() {
  const challenges = [
    {
      icon: BookOpen,
      title: 'Word Puzzle',
      description: 'Test your vocabulary and language skills with challenging word puzzles and literacy questions.',
      color: 'bg-blue-500',
    },
    {
      icon: Calculator,
      title: 'Number Crunch',
      description: 'Solve mathematical problems and showcase your numeracy prowess under time pressure.',
      color: 'bg-green-500',
    },
    {
      icon: Zap,
      title: 'Speed Round',
      description: 'Quick-fire questions testing general knowledge, critical thinking, and rapid recall.',
      color: 'bg-yellow-500',
    },
    {
      icon: Lightbulb,
      title: 'Creative Challenge',
      description: 'Demonstrate problem-solving creativity and innovative thinking in unique scenarios.',
      color: 'bg-purple-500',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Four Challenges
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Students compete across four dynamic categories designed to test comprehensive
            academic skills and knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className={`${challenge.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                <challenge.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{challenge.title}</h3>
              <p className="text-gray-600 text-lg">{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
