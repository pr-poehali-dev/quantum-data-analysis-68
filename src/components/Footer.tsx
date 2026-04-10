export function Footer() {
  return (
    <footer className="py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="/" className="inline-block mb-6">
              <span className="font-bold text-xl tracking-tight text-foreground">КРЫМ АВТО ХОЛДИНГ</span>
            </a>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Официальный дилер Volkswagen, EXEED и EXLANTIX в Севастополе и Крыму. Сервисный центр с опытом более 15 лет.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">Навигация</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-foreground transition-colors">О компании</a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">Услуги</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-foreground transition-colors">Преимущества</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-foreground transition-colors">Отзывы</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition-colors">Контакты</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">Связь</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="tel:+79180151015" className="hover:text-foreground transition-colors">
                  +7 (918) 015 10 15
                </a>
              </li>
              <li className="text-muted-foreground">
                Фиолентовское шоссе, 5Б, Севастополь
              </li>
              <li className="text-muted-foreground">Пн–Вс 9:00–20:00</li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">Telegram</a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">ВКонтакте</a>
              </li>
              <li>
                <a href="https://wa.me/79180151015" className="hover:text-foreground transition-colors">WhatsApp</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 КРЫМ АВТО ХОЛДИНГ. Официальный дилер VW / EXEED / EXLANTIX. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
