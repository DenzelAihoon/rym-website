export default function TrustStrip() {
  const partners = [
    'Ministry of Education',
    'Ghana Education Service',
    'Omnicare Foundation',
    'Regional Education Offices',
    'Community Partners',
  ];

  return (
    <section className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-600 mb-6 font-semibold">Trusted By</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="text-gray-700 font-semibold text-sm md:text-base hover:text-[#0d5a5a] transition-colors"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
