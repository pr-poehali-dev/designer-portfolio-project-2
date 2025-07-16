import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">Portfolio</div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-black transition-colors">Главная</a>
            <a href="#services" className="text-gray-600 hover:text-black transition-colors">Услуги</a>
            <a href="#cases" className="text-gray-600 hover:text-black transition-colors">Кейсы</a>
            <a href="#blog" className="text-gray-600 hover:text-black transition-colors">Блог</a>
            <a href="#contact" className="text-gray-600 hover:text-black transition-colors">Контакты</a>
          </nav>
          <Button variant="outline" size="sm">
            <Icon name="Menu" size={16} />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Дизайнер<br/>
                <span className="text-gray-500">для цифрового</span><br/>
                мира
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Создаю визуальные решения для социальных сетей, маркетплейсов и веб-сайтов. 
                Помогаю брендам выделиться в цифровом пространстве.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-black text-white hover:bg-gray-800">
                  Посмотреть работы
                </Button>
                <Button variant="outline" size="lg">
                  Обсудить проект
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                <img 
                  src="https://v3.fal.media/files/lion/u6lWtavte6Djh2RHJjqO0_output.png" 
                  alt="Design System Components"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр дизайн-услуг для развития вашего бизнеса в цифровой среде
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                  <Icon name="Instagram" size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Оформление соцсетей</h3>
                <p className="text-gray-600 mb-6">
                  Создание визуального стиля для Instagram, Telegram, VK. 
                  Посты, сторис, обложки и аватары.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Дизайн постов и сторис</li>
                  <li>• Фирменные шаблоны</li>
                  <li>• Аватары и обложки</li>
                  <li>• Брендинг профиля</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                  <Icon name="ShoppingBag" size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Карточки товаров</h3>
                <p className="text-gray-600 mb-6">
                  Дизайн карточек для Wildberries, Ozon, Яндекс.Маркет. 
                  Инфографика и продающие макеты.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Главное фото товара</li>
                  <li>• Инфографика преимуществ</li>
                  <li>• Размерные сетки</li>
                  <li>• А+ контент</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                  <Icon name="Globe" size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Дизайн сайтов</h3>
                <p className="text-gray-600 mb-6">
                  UI/UX дизайн лендингов, корпоративных сайтов и интернет-магазинов. 
                  Современные и конверсионные решения.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Лендинги и промо-сайты</li>
                  <li>• Корпоративные сайты</li>
                  <li>• Интернет-магазины</li>
                  <li>• Мобильная адаптация</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Cases */}
      <section id="cases" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Избранные кейсы</h2>
            <p className="text-xl text-gray-600">
              Реальные проекты с измеримыми результатами
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case 1 */}
            <Card className="group cursor-pointer border-0 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="aspect-[4/3] bg-gradient-to-br from-purple-100 to-pink-100 rounded-t-lg overflow-hidden">
                <img 
                  src="/img/f12cee16-4e1d-4bc4-b38d-543a88dd293a.jpg" 
                  alt="Instagram социальные сети дизайн"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-3">Соцсети</Badge>
                <h3 className="font-bold mb-2">Ребрендинг Instagram косметического бренда</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Полное обновление визуального стиля, рост охватов на 250%
                </p>
                <Button variant="ghost" size="sm" className="p-0 h-auto">
                  Подробнее <Icon name="ArrowRight" size={16} className="ml-1" />
                </Button>
              </CardContent>
            </Card>

            {/* Case 2 */}
            <Card className="group cursor-pointer border-0 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-cyan-100 rounded-t-lg overflow-hidden">
                <img 
                  src="/img/c5809137-e154-4d91-99eb-f2d2fb2b468b.jpg" 
                  alt="Карточки товаров маркетплейс дизайн"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-3">Маркетплейс</Badge>
                <h3 className="font-bold mb-2">Карточки товаров для спортбренда</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Дизайн 50+ карточек, увеличение конверсии в 2 раза
                </p>
                <Button variant="ghost" size="sm" className="p-0 h-auto">
                  Подробнее <Icon name="ArrowRight" size={16} className="ml-1" />
                </Button>
              </CardContent>
            </Card>

            {/* Case 3 */}
            <Card className="group cursor-pointer border-0 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-emerald-100 rounded-t-lg overflow-hidden">
                <img 
                  src="/img/7156c060-b705-45fb-8298-bbd9eb53d00e.jpg" 
                  alt="Веб-дизайн лендинг сайт"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-3">Веб-дизайн</Badge>
                <h3 className="font-bold mb-2">Лендинг IT-стартапа</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Современный дизайн с анимациями, конверсия 15%
                </p>
                <Button variant="ghost" size="sm" className="p-0 h-auto">
                  Подробнее <Icon name="ArrowRight" size={16} className="ml-1" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Посмотреть все работы
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Блог</h2>
            <p className="text-xl text-gray-600">
              Делюсь опытом и полезными материалами о дизайне
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="aspect-[16/9] bg-gradient-to-r from-orange-100 to-red-100 rounded-t-lg"></div>
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-3">Тренды</Badge>
                <h3 className="font-bold mb-2">Тренды дизайна соцсетей в 2024</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Разбираем актуальные стили и подходы для создания современного контента
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>5 мин чтения</span>
                  <span>15 июля</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="aspect-[16/9] bg-gradient-to-r from-purple-100 to-blue-100 rounded-t-lg"></div>
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-3">Практика</Badge>
                <h3 className="font-bold mb-2">Как создать продающую карточку товара</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Пошаговое руководство по дизайну карточек для маркетплейсов
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>8 мин чтения</span>
                  <span>10 июля</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="aspect-[16/9] bg-gradient-to-r from-teal-100 to-green-100 rounded-t-lg"></div>
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-3">Инструменты</Badge>
                <h3 className="font-bold mb-2">Мой набор инструментов дизайнера</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Программы, плагины и ресурсы для эффективной работы
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>3 мин чтения</span>
                  <span>5 июля</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Обсудим ваш проект?</h2>
            <p className="text-xl text-gray-600">
              Расскажите о задаче, и я предложу решение
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6">Как мы работаем</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-semibold mb-1">Обсуждение задачи</h4>
                    <p className="text-gray-600 text-sm">Выясняем цели, целевую аудиторию и требования к проекту</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-semibold mb-1">Создание концепции</h4>
                    <p className="text-gray-600 text-sm">Разрабатываем визуальную концепцию и согласовываем с вами</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-semibold mb-1">Реализация</h4>
                    <p className="text-gray-600 text-sm">Создаем финальные макеты с возможностью 2 правок</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <h4 className="font-semibold mb-1">Передача материалов</h4>
                    <p className="text-gray-600 text-sm">Предоставляем все файлы в нужных форматах</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-4">Свяжитесь со мной</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" size={18} />
                    <span>design@example.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" size={18} />
                    <span>+7 (999) 123-45-67</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MessageCircle" size={18} />
                    <span>@designer_telegram</span>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Оставить заявку</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="email@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Тип проекта</label>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="cursor-pointer hover:bg-black hover:text-white">Соцсети</Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-black hover:text-white">Маркетплейс</Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-black hover:text-white">Веб-дизайн</Badge>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Описание проекта</label>
                    <Textarea placeholder="Расскажите о вашей задаче..." rows={4} />
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Portfolio</h3>
              <p className="text-gray-400 mb-4">
                Дизайнер для цифрового мира. Создаю визуальные решения, которые работают.
              </p>
              <div className="flex gap-4">
                <Button variant="ghost" size="sm" className="text-white hover:text-gray-300">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:text-gray-300">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:text-gray-300">
                  <Icon name="Dribbble" size={20} />
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Дизайн для соцсетей</li>
                <li>Карточки товаров</li>
                <li>Веб-дизайн</li>
                <li>Брендинг</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>design@example.com</li>
                <li>+7 (999) 123-45-67</li>
                <li>@designer_telegram</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Portfolio. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;