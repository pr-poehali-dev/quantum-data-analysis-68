import { useState } from "react"
import { HighlightedText } from "./HighlightedText"
import Icon from "@/components/ui/icon"

const services = [
  "Ремонт АКПП",
  "Диагностика автомобиля",
  "ТО и замена расходников",
  "Ремонт электрооборудования",
  "Кузовной ремонт",
  "Шиномонтаж",
  "Ремонт двигателя / подвески",
  "Тонировка и оклейка",
  "Установка доп. оборудования",
  "Проверка перед покупкой",
  "Другое",
]

export function CallToAction() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", comment: "" })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-32 md:py-29 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left — contacts */}
          <div>
            <p className="text-primary-foreground/60 text-sm tracking-[0.3em] uppercase mb-8">Контакты</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight mb-8 text-balance">
              Запись на <HighlightedText>сервис</HighlightedText>
            </h2>

            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-12 max-w-md">
              Оставьте заявку — мастер-приёмщик свяжется с вами в течение 15 минут и согласует удобное время.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={18} className="text-orange-400" fallback="MapPin" />
                </div>
                <div>
                  <div className="font-medium mb-1">Адрес</div>
                  <div className="text-primary-foreground/70">Севастополь, Фиолентовское шоссе, 5Б</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={18} className="text-orange-400" fallback="Phone" />
                </div>
                <div>
                  <div className="font-medium mb-1">Телефон</div>
                  <a href="tel:+79180151015" className="text-primary-foreground/70 hover:text-orange-400 transition-colors">
                    +7 (918) 015 10 15
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={18} className="text-orange-400" fallback="Clock" />
                </div>
                <div>
                  <div className="font-medium mb-1">Режим работы</div>
                  <div className="text-primary-foreground/70">Пн–Вс 9:00–20:00</div>
                </div>
              </div>
            </div>

            <div>
              <div className="text-primary-foreground/60 text-sm mb-4">Мы в соцсетях</div>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-orange-500 flex items-center justify-center transition-colors"
                  aria-label="Telegram"
                >
                  <Icon name="Send" size={16} className="text-white" fallback="Send" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-orange-500 flex items-center justify-center transition-colors"
                  aria-label="ВКонтакте"
                >
                  <Icon name="Users" size={16} className="text-white" fallback="Users" />
                </a>
                <a
                  href="https://wa.me/79180151015"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-orange-500 flex items-center justify-center transition-colors"
                  aria-label="WhatsApp"
                >
                  <Icon name="MessageCircle" size={16} className="text-white" fallback="MessageCircle" />
                </a>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-white/5 p-8 md:p-10 rounded-sm">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center mb-6">
                  <Icon name="Check" size={28} className="text-white" fallback="Check" />
                </div>
                <h3 className="text-2xl font-medium mb-4">Заявка отправлена!</h3>
                <p className="text-primary-foreground/70">
                  Мастер-приёмщик свяжется с вами в течение 15 минут.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm text-primary-foreground/70 mb-2">Ваше имя *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Иван Иванов"
                    className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/30 px-4 py-3 rounded-sm focus:outline-none focus:border-orange-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm text-primary-foreground/70 mb-2">Телефон *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+7 (918) 000-00-00"
                    className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/30 px-4 py-3 rounded-sm focus:outline-none focus:border-orange-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm text-primary-foreground/70 mb-2">Услуга</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-orange-400 transition-colors appearance-none"
                  >
                    <option value="" className="text-foreground bg-background">Выберите услугу</option>
                    {services.map((s) => (
                      <option key={s} value={s} className="text-foreground bg-background">{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-primary-foreground/70 mb-2">Комментарий</label>
                  <textarea
                    name="comment"
                    value={form.comment}
                    onChange={handleChange}
                    placeholder="Марка и модель автомобиля, описание проблемы..."
                    rows={3}
                    className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/30 px-4 py-3 rounded-sm focus:outline-none focus:border-orange-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 text-sm font-medium tracking-wide transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Icon name="Calendar" size={16} fallback="Calendar" />
                  Отправить заявку
                </button>

                <p className="text-primary-foreground/40 text-xs text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-16 rounded-sm overflow-hidden h-64 bg-white/5 flex items-center justify-center border border-white/10">
          <div className="text-center">
            <Icon name="MapPin" size={32} className="text-orange-400 mx-auto mb-3" fallback="MapPin" />
            <p className="text-primary-foreground/60 text-sm">Севастополь, Фиолентовское шоссе, 5Б</p>
            <a
              href="https://yandex.ru/maps/?text=Севастополь,+Фиолентовское+шоссе,+5Б"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-orange-400 hover:text-orange-300 text-sm transition-colors"
            >
              Открыть на карте →
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
