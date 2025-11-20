import Image from 'next/image';
import Link from 'next/link';

const experiences = [
  {
    title: 'Wildlife Safaris',
    image: 'https://images.unsplash.com/photo-1521360183187-8e6a3f03f738?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    href: '/packages',
  },
  {
    title: 'Cultural Tours',
    image: 'https://images.unsplash.com/photo-1588614959066-444090013b82?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    href: '/packages',
  },
  {
    title: 'Beach Retreats',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    href: '/packages',
  },
  {
    title: 'Adventure & Hiking',
    image: 'https://images.unsplash.com/photo-1619771343812-1f73b9e40638?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    href: '/packages',
  },
];

export default function ExperienceTypes() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">Find Your Perfect Trip</h2>
          <p className="text-lg text-stone-600">
            Whether you seek adventure, relaxation, or cultural immersion, we have an experience for you.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp) => (
            <Link
              key={exp.title}
              href={exp.href}
              className="relative h-96 rounded-lg overflow-hidden shadow-lg group"
            >
              <Image
                src={exp.image}
                alt={exp.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-3xl font-bold text-white transition-transform duration-300 group-hover:-translate-y-1">
                  {exp.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
