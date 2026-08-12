import { Star } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: "Ahmed M.",
    review: "المكان جميل وهادئ وخدمة ممتازة، كانت اول تجربة لينا وان شاء الله مش هتكون الاخيرة👏🤍",
    rating: 5
  },
  {
    name: "Youssef K.",
    review: "The private rooms are insane! Perfect setup for FC 25 with the boys. The screens are top-notch and zero lag.",
    rating: 5
  },
  {
    name: "Karim S.",
    review: "Booked the all-night pass and had an absolute blast. The food from the cafe kept us going till morning. Best gaming lounge in El Nozha.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-950 relative border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Players Say</h2>
          <p className="text-gray-400 text-lg">
            Don't just take our word for it. Here is what the community has to say about their experience at ROOM 101.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-900 border border-gray-800 rounded-3xl p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6 text-blue-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p 
                  className="text-gray-300 mb-8 italic leading-relaxed text-lg" 
                  dir={testimonial.review.match(/[\u0600-\u06FF]/) ? 'rtl' : 'ltr'}
                >
                  "{testimonial.review}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <span className="font-bold text-white block">{testimonial.name}</span>
                  <span className="text-sm text-gray-500 block">Verified Customer</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
