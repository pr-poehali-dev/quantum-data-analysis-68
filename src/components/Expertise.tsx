import { useEffect, useRef, useState } from "react"
import { HighlightedText } from "./HighlightedText"
import Icon from "@/components/ui/icon"

const expertiseAreas = [
  {
    title: "Ремонт АКПП",
    description: "Ремонт всех типов автоматических коробок передач. Диагностика, замена масла, капремонт — с гарантией.",
    icon: "Settings",
  },
  {
    title: "Диагностика",
    description: "Компьютерная диагностика на оригинальном оборудовании VW Group. Выявляем скрытые неисправности.",
    icon: "ScanLine",
  },
  {
    title: "ТО и расходники",
    description: "Плановое техническое обслуживание с использованием оригинальных масел, фильтров и запчастей.",
    icon: "Wrench",
  },
  {
    title: "Электрооборудование",
    description: "Диагностика и ремонт электрики, систем управления, датчиков и блоков управления.",
    icon: "Zap",
  },
  {
    title: "Кузовной ремонт",
    description: "Устранение вмятин, покраска, восстановление геометрии кузова в фирменной малярной камере.",
    icon: "Car",
  },
  {
    title: "Шиномонтаж",
    description: "Сезонная замена шин, балансировка, хранение резины. Подбор колёс под любую модель.",
    icon: "Circle",
  },
  {
    title: "Двигатель и подвеска",
    description: "Ремонт двигателя, рулевого управления, подвески, трансмиссии и тормозной системы.",
    icon: "Cog",
  },
  {
    title: "Тонировка и оклейка",
    description: "Профессиональная тонировка, защитная оклейка плёнкой, антигравий — сохраним внешний вид.",
    icon: "Layers",
  },
  {
    title: "Доп. оборудование",
    description: "Установка сигнализаций, камер, парктроников, фаркопов и любого дополнительного оборудования.",
    icon: "PlusCircle",
  },
  {
    title: "Проверка перед покупкой",
    description: "Профессиональная проверка автомобиля с пробегом: диагностика, осмотр кузова, история ТО.",
    icon: "ClipboardCheck",
  },
]

export function Expertise() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
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
      { threshold: 0.1 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Сервисный центр</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
            <HighlightedText>Услуги</HighlightedText>, которым
            <br />
            доверяют
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Полный спектр услуг для автомобилей Volkswagen, EXEED и EXLANTIX — и не только. Обслуживаем все марки.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {expertiseAreas.map((area, index) => {
            return (
              <div
                key={area.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`relative pl-8 border-l border-border transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <Icon name={area.icon} className="w-10 h-10 mb-4 text-foreground" fallback="Wrench" />
                <h3 className="text-xl font-medium mb-4">{area.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-sm font-medium tracking-wide hover:bg-foreground/80 transition-colors duration-300"
          >
            <Icon name="Calendar" size={16} fallback="Calendar" />
            Записаться на сервис
          </a>
        </div>
      </div>
    </section>
  )
}
