import { motion } from 'framer-motion';

const fleet = [
  {
    name: 'Force Urbania',
    image: '/force-urbania.avif',
  },
  {
    name: 'Toyota Innova Crysta',
    image: '/white-innova.png',
  }
];

function FleetCard({ vehicle, index }: { vehicle: { name: string; image: string }, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      className="group relative bg-[#111] border border-white/5 rounded-2xl overflow-hidden hover:luxury-shadow transition-all duration-700 hover:-translate-y-2 flex flex-col"
    >
      {/* Image Container */}
      <div className="relative h-56 sm:h-72 md:h-80 lg:h-96 overflow-hidden">
        <img 
          src={vehicle.image} 
          alt={vehicle.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 z-10">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-heading text-white mb-1 drop-shadow-md">{vehicle.name}</h3>
          <div className="w-8 h-[2px] bg-accent mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    </motion.div>
  );
}

export function FleetSection() {
  return (
    <section id="fleet" className="pt-10 pb-12 sm:pt-12 sm:pb-16 md:py-24 bg-primary relative">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center mb-8 sm:mb-10 md:mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block"
          >
            The Fleet
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading text-white mb-4 sm:mb-6"
          >
            Arrive in <span className="text-gradient">Style</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-textSecondary max-w-2xl mx-auto text-sm sm:text-base"
          >
            Our meticulously maintained fleet offers unparalleled comfort and elegance for<br />
            <span className="text-accent font-medium">"every journey originating from Nagpur."</span>
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-stretch">
          {fleet.map((vehicle, index) => (
            <FleetCard key={vehicle.name} vehicle={vehicle} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
