import { useEffect, useRef, useState } from "react"
import Icon from "@/components/ui/icon"

const advantages = [
  { icon: "GraduationCap", text: "Квалифицированный персонал, обученный у производителей" },
  { icon: "Package", text: "Оригинальные запчасти — только подлинные детали" },
  { icon: "Star", text: "Программа лояльности для каждого клиента" },
  { icon: "FileText", text: "Сохранение полной истории обслуживания автомобиля" },
  { icon: "ShieldCheck", text: "Гарантия на все работы и запчасти" },
  { icon: "Wrench", text: "Современное оборудование и профессиональный инструмент" },
  { icon: "User", text: "Персональный мастер-приёмщик для каждого клиента" },
  { icon: "CheckCircle", text: "Контроль качества на каждом этапе ремонта" },
]

export function Projects() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const loyaltyRef = useRef<HTMLDivElement | null>(null)
  const [loyaltyVisible, setLoyaltyVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === loyaltyRef.current) {
            if (entry.isIntersecting) setLoyaltyVisible(true)
            return
          }
          const index = itemRefs.current.indexOf(entry.target as HTMLDivElement)
          if (index !== -1 && entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.15 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })
    if (loyaltyRef.current) observer.observe(loyaltyRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-32 md:py-29 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">

        {/* Loyalty block */}
        <div
          ref={loyaltyRef}
          className={`mb-20 bg-foreground text-primary-foreground p-10 md:p-14 rounded-sm transition-all duration-700 ${
            loyaltyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-primary-foreground/60 text-sm tracking-[0.3em] uppercase mb-4">Программа лояльности</p>
              <h2 className="text-4xl md:text-5xl font-medium leading-[1.1] tracking-tight mb-6">
                Экономьте до <span className="text-orange-400">35%</span>
                <br />на обслуживании
              </h2>
              <p className="text-primary-foreground/70 leading-relaxed mb-8">
                Специальные условия для постоянных клиентов. Сезонные сервисные кампании со скидками на популярные работы и запчасти.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-sm font-medium tracking-wide transition-colors duration-300"
              >
                <Icon name="Tag" size={16} fallback="Tag" />
                Узнать об условиях
              </a>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white/10 p-6 rounded-sm flex gap-4 items-start">
                <Icon name="Percent" size={24} className="text-orange-400 flex-shrink-0 mt-1" fallback="Percent" />
                <div>
                  <h4 className="font-medium text-white mb-1">Постоянная скидка</h4>
                  <p className="text-primary-foreground/60 text-sm">Накопительная скидка для каждого клиента — растёт вместе с историей обслуживания</p>
                </div>
              </div>
              <div className="bg-white/10 p-6 rounded-sm flex gap-4 items-start">
                <Icon name="Leaf" size={24} className="text-orange-400 flex-shrink-0 mt-1" fallback="Leaf" />
                <div>
                  <h4 className="font-medium text-white mb-1">Сезонные акции</h4>
                  <p className="text-primary-foreground/60 text-sm">Специальные предложения каждый сезон: шиномонтаж, подготовка к зиме/лету и другие кампании</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advantages */}
        <div className="mb-12">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Почему выбирают нас</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-12">Наши преимущества</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                className={`flex items-start gap-4 p-6 bg-background border border-border rounded-sm transition-all duration-500 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon} size={18} className="text-background" fallback="Check" />
                </div>
                <p className="text-foreground font-medium leading-relaxed pt-1">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
