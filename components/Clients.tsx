import Image from "next/image";

type Brand =
  | { name: string; src: string; type: "image" }
  | { name: string; type: "wordmark" };

const clients: Brand[] = [
  { name: "Mr Khaman", src: "/brands/mr-khaman.webp", type: "image" },
  { name: "Panchvati", type: "wordmark" },
  { name: "Pizza Hut", src: "/brands/pizza-hut.webp", type: "image" },
  { name: "Osmow's", src: "/brands/osmows.webp", type: "image" },
  { name: "Pizza Pizza", src: "/brands/pizza-pizza.webp", type: "image" },
  { name: "Meltwich", src: "/brands/meltwich.webp", type: "image" },
];

export default function Clients() {
  const loop = [...clients, ...clients];

  return (
    <section id="clients" className="border-y border-[#E5E2DA] bg-[#F4F2EC]/40">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-14">
        <p className="text-center text-[11px] tracking-[0.22em] uppercase text-[#6B6B68] font-medium mb-12">
          Trusted by leading restaurant brands across the GTA
        </p>

        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex marquee-track gap-14 lg:gap-20 items-center">
            {loop.map((c, i) => (
              <div
                key={`${c.name}-${i}`}
                className="shrink-0 h-16 lg:h-20 w-32 lg:w-40 relative grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center"
              >
                {c.type === "image" ? (
                  <Image
                    src={c.src}
                    alt={c.name}
                    fill
                    sizes="160px"
                    className="object-contain"
                  />
                ) : (
                  <span className="font-serif italic text-[24px] lg:text-[28px] tracking-tight text-[#0A0A0A] whitespace-nowrap">
                    {c.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
