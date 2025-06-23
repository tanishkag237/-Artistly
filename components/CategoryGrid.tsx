const categories = [
  {
    name: 'Singer',
    image:
      'https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=600&q=60'
  },
  {
    name: 'Dancer',
    image:
      '/artist/dancer.jpg'
  },
  {
    name: 'DJ',
    image:
      '/artist/dj.jpg'
  },
  {
    name: 'Speaker',
    image:
      '/artist/speaker.jpeg'
  }
];

export default function CategoryGrid() {
  return (
    <section id="categories" className="py-16 px-10 ">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-4xl font-semibold mb-8 text-center">Popular Categories</h3>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2  gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="relative h-40 rounded-xl shadow-md overflow-hidden group cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl"
              style={{
                backgroundImage: `url(${cat.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0  group-hover:bg-opacity-60 transition duration-300" />

              {/* Text */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <h4 className="text-white text-xl font-semibold drop-shadow-lg">{cat.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
