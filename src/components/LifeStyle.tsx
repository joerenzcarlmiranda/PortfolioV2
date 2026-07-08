import CircularGallery from "../reactbits/Components/CircularGallery/CircularGallery";

const galleryItems = [
  { image: "/circ1.jfif", text: "Coffee Time" },
  { image: "/circ2.jfif", text: "Coffee Time" },
  { image: "/circ3.jfif", text: "Coffee Time" },
  { image: "/circ4.jfif", text: "Coffee Time" },
  { image: "/circ14.jfif", text: "Coffee Time" },
  { image: "/icecream.jpg", text: "Ice Cream!" },
  { image: "/icecream2.jpg", text: "Ice Cream!" },
  { image: "/baguio2.jpg", text: "Baguio!" },
  { image: "/baguio3.jpg", text: "Baguio!" },
  { image: "/baguio4.jpg", text: "Baguio!" },
  { image: "/baguio5.jpg", text: "Baguio!" },
  { image: "/baguio6.jpg", text: "Baguio!" },
  { image: "/baguio7.jpg", text: "Baguio!" },
  { image: "/baguio8.jpg", text: "Baguio!" },
  { image: "/coding.jpg", text: "Coding!" },
];

export default function LifeStyle() {
  return (
    <section id="lifestyle" className="py-24 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-4">
          Life Style
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-center">
          A glimpse into my life, hobbies, and adventures outside of coding.
        </p>
      </div>

      <div className="w-full h-[600px] relative overflow-hidden rounded-3xl">
        <CircularGallery
          items={galleryItems}
          bend={3}
          textColor="#000000"
          borderRadius={0.05}
        />
      </div>
    </section>
  );
}
