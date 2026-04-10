import { useState } from "react"
import { Plus } from "lucide-react"

const reviews = [
  {
    name: "Алексей М.",
    car: "Volkswagen Tiguan",
    text: "Обслуживаюсь здесь уже 4 года. Сделали ТО быстро, по чётким ценам, ничего лишнего не «нашли». Мастер-приёмщик Дмитрий — профессионал, всё объясняет понятно.",
    rating: 5,
  },
  {
    name: "Наталья К.",
    car: "EXEED TXL",
    text: "Официальный сервис в Севастополе — большая редкость для EXEED. Очень рада, что нашла Крым Авто Холдинг. Всё по гарантии, оригинальные запчасти, история сохраняется.",
    rating: 5,
  },
  {
    name: "Игорь В.",
    car: "Volkswagen Polo",
    text: "Заменил АКПП — думал, это будет долго и дорого. Справились за 3 дня, цена вышла ниже, чем в других местах. Дали гарантию. Буду рекомендовать.",
    rating: 5,
  },
  {
    name: "Светлана Д.",
    car: "Volkswagen Touareg",
    text: "Привезла после ДТП на кузовной ремонт. Результат отличный — швы незаметны, цвет попали точь-в-точь. Машиной довольна, в сервисе тоже.",
    rating: 5,
  },
]

const faqs = [
  {
    question: "Вы обслуживаете только VW, EXEED и EXLANTIX?",
    answer:
      "Нет, мы работаем с автомобилями всех марок. Специализация на VW, EXEED и EXLANTIX означает, что у нас есть оригинальное оборудование и сертифицированные специалисты для этих брендов. Остальные марки также принимаем в сервис.",
  },
  {
    question: "Используете ли вы оригинальные запчасти?",
    answer:
      "Да, для гарантийного обслуживания — только оригинальные запчасти. По желанию клиента и для негарантийных работ можем использовать качественные аналоги с сохранением гарантии на работы.",
  },
  {
    question: "Как работает программа лояльности?",
    answer:
      "Накопительная скидка начинает действовать с первого визита. Дополнительно — сезонные акции на популярные работы: замена масла, шиномонтаж, подготовка к зиме. Уточняйте актуальные условия у мастера-приёмщика.",
  },
  {
    question: "Есть ли гарантия на работы?",
    answer:
      "Да, на все выполненные работы и установленные запчасти предоставляется гарантия. Срок зависит от вида работ — уточняйте при оформлении заказ-наряда.",
  },
  {
    question: "Как записаться на сервис?",
    answer:
      "Заполните форму на сайте — мастер-приёмщик свяжется с вами для подтверждения времени. Также можно позвонить по телефону +7 (918) 015 10 15 или написать в WhatsApp / Telegram.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">

        {/* Reviews */}
        <div className="mb-24">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Отзывы клиентов</p>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-12">Нам доверяют</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-secondary/50 p-8 rounded-sm border border-border">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} className="text-orange-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6">«{review.text}»</p>
                <div>
                  <div className="font-medium text-foreground">{review.name}</div>
                  <div className="text-muted-foreground text-sm">{review.car}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
