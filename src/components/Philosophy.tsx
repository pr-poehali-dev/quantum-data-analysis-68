import { useEffect, useRef, useState } from "react"
import { HighlightedText } from "./HighlightedText"

const philosophyItems = [
  {
    title: "Официальный дилер",
    description:
      "Мы — официальный дилер Volkswagen, EXEED и EXLANTIX в Севастополе и Крыму. Гарантируем подлинность запчастей и соответствие заводским стандартам обслуживания.",
  },
  {
    title: "Сертифицированные специалисты",
    description:
      "Все мастера проходят регулярное обучение у производителей. Ваш автомобиль в руках профессионалов, аттестованных VW, EXEED и EXLANTIX.",
  },
  {
    title: "Современное оборудование",
    description:
      "Ремонтная зона оснащена гидропневматическими подъёмниками, профессиональным диагностическим стендом и фирменным инструментом.",
  },
  {
    title: "История обслуживания",
    description:
      "Сохраняем полную историю каждого автомобиля — вы всегда знаете, что было сделано, когда и на каком пробеге. Это ценность при продаже.",
  },
]

export function Philosophy() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.3 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">О компании</p>
            <h2 className="text-6xl md:text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
              15 лет
              <br />
              <HighlightedText>опыта</HighlightedText>
            </h2>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-secondary/50 p-6 rounded-sm">
                <div className="text-4xl font-bold text-foreground mb-1">15+</div>
                <div className="text-muted-foreground text-sm">лет на рынке</div>
              </div>
              <div className="bg-secondary/50 p-6 rounded-sm">
                <div className="text-4xl font-bold text-foreground mb-1">3</div>
                <div className="text-muted-foreground text-sm">бренда: VW, EXEED, EXLANTIX</div>
              </div>
              <div className="bg-secondary/50 p-6 rounded-sm">
                <div className="text-4xl font-bold text-foreground mb-1">35%</div>
                <div className="text-muted-foreground text-sm">экономия по программе лояльности</div>
              </div>
              <div className="bg-secondary/50 p-6 rounded-sm">
                <div className="text-4xl font-bold text-foreground mb-1">100%</div>
                <div className="text-muted-foreground text-sm">оригинальные запчасти</div>
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:pt-48">
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md mb-12">
              Наша компания — официальный дилер VW, EXEED, EXLANTIX в Севастополе и Крыму. Мы ремонтируем автомобили так, как того требует производитель — с оригинальными деталями, сертифицированными специалистами и гарантией на каждую работу.
            </p>

            {philosophyItems.map((item, index) => (
              <div
                key={item.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-6">
                  <span className="text-muted-foreground/50 text-sm font-medium">0{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
