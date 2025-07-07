import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const weddingDate = new Date("2026-06-06T16:00:00"); // Дата свадьбы

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-light text-gray-800 mb-6 font-['Montserrat']">
            Анна & Дмитрий
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 font-['Open_Sans']">
            6 июня 2026
          </p>

          {/* Countdown Timer */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-light text-gray-800 mb-2">
                {timeLeft.days}
              </div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">
                дней
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-light text-gray-800 mb-2">
                {timeLeft.hours}
              </div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">
                часов
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-light text-gray-800 mb-2">
                {timeLeft.minutes}
              </div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">
                минут
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-light text-gray-800 mb-2">
                {timeLeft.seconds}
              </div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">
                секунд
              </div>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 text-lg font-['Open_Sans']"
          >
            Подробнее
          </Button>
        </div>
      </div>

      {/* Photo Gallery */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 text-center mb-16 font-['Montserrat']">
            Наша История
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src="/img/6ccd56cf-48c9-468f-a207-17b94006305f.jpg"
                alt="Романтичная пара"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src="/img/b721ca6b-baef-4f8e-b637-e4123b967472.jpg"
                alt="Свадебные кольца"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Details */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 text-center mb-16 font-['Montserrat']">
            Детали Свадьбы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-gray-200 shadow-sm">
              <CardHeader className="text-center">
                <Icon
                  name="Church"
                  size={48}
                  className="text-gray-600 mx-auto mb-4"
                />
                <CardTitle className="text-2xl font-light text-gray-800">
                  Церемония
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Венчание в церкви
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700 mb-2">6 июня 2026</p>
                <p className="text-gray-700 mb-2">16:00</p>
                <p className="text-gray-600">Храм Христа Спасителя</p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 shadow-sm">
              <CardHeader className="text-center">
                <Icon
                  name="PartyPopper"
                  size={48}
                  className="text-gray-600 mx-auto mb-4"
                />
                <CardTitle className="text-2xl font-light text-gray-800">
                  Банкет
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Праздничный ужин
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700 mb-2">6 июня 2026</p>
                <p className="text-gray-700 mb-2">19:00</p>
                <p className="text-gray-600">Ресторан «Метрополь»</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gifts Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 text-center mb-16 font-['Montserrat']">
            Подарки
          </h2>
          <div className="text-center">
            <Icon
              name="Gift"
              size={64}
              className="text-gray-600 mx-auto mb-8"
            />
            <p className="text-xl text-gray-700 mb-8 font-['Open_Sans']">
              Ваше присутствие — это самый дорогой подарок для нас
            </p>
            <p className="text-gray-600 mb-8">
              Если вы хотите поздравить нас подарком, будем рады денежному
              конверту
            </p>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 max-w-md mx-auto">
              <p className="text-gray-700 mb-2">Банковская карта</p>
              <p className="text-2xl font-mono text-gray-800">
                2202 2020 2020 2020
              </p>
              <p className="text-gray-600 text-sm mt-2">Анна Иванова</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 text-center mb-16 font-['Montserrat']">
            Как Добраться
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Icon name="MapPin" size={24} className="text-gray-600 mt-1" />
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    Церемония
                  </h3>
                  <p className="text-gray-600">
                    Храм Христа Спасителя
                    <br />
                    ул. Волхонка, 15
                    <br />
                    Москва, 119019
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Icon name="MapPin" size={24} className="text-gray-600 mt-1" />
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    Банкет
                  </h3>
                  <p className="text-gray-600">
                    Ресторан «Метрополь»
                    <br />
                    Театральный проезд, 2<br />
                    Москва, 109012
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Icon name="Car" size={24} className="text-gray-600 mt-1" />
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    Парковка
                  </h3>
                  <p className="text-gray-600">
                    Бесплатная парковка доступна
                    <br />в центре города
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-6 text-center">
              <Icon
                name="Navigation"
                size={48}
                className="text-gray-600 mx-auto mb-4"
              />
              <p className="text-gray-700 mb-4">Интерактивная карта</p>
              <Button
                variant="outline"
                className="border-gray-300 hover:bg-gray-50"
              >
                Открыть в картах
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Icon name="Heart" size={32} className="text-red-400 mx-auto mb-4" />
          <p className="text-xl font-light mb-2">Анна & Дмитрий</p>
          <p className="text-gray-400">6 июня 2026</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
