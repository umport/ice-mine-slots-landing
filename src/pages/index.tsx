import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// Динамический импорт для 3D-компонентов (оптимизация)
const IceMineScene = dynamic(() => import('@/components/IceMineScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] flex items-center justify-center">
      <div className="text-cyan-400 text-xl">Загрузка 3D-сцены...</div>
    </div>
  ),
});

export const metadata: Metadata = {
  title: 'Ice Mine Slots | Бесплатная социальная игра',
  description: 'Окунитесь в мир ледяных сокровищ! Ice Mine Slots - бесплатная социальная слот-игра для развлечения',
  keywords: 'слоты, игра, бесплатно, развлечение, социальная игра',
  openGraph: {
    type: 'website',
    title: 'Ice Mine Slots',
    description: 'Бесплатная социальная слот-игра',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ice Mine Slots',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ice Mine Slots',
    description: 'Бесплатная социальная слот-игра',
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cyan-950 via-gray-900 to-black">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            ICE MINE SLOTS
          </h1>
          <p className="text-xl md:text-2xl text-cyan-200 mb-8 max-w-2xl mx-auto">
            Бесплатная социальная игра с ледяными сокровищами
          </p>
        </div>
        
        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-cyan-900/30">
          <IceMineScene />
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-cyan-800/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Скоро в релизе!
            </h2>
            <p className="text-cyan-200 mb-6 max-w-xl">
              Готовьтесь к захватывающему приключению в ледяных шахтах. 
              Собирайте бриллианты, открывайте бонусы и наслаждайтесь игрой!
            </p>
            <div className="text-sm text-gray-400">
              Бесплатно • Для развлечения • Без реальных ставок
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Особенности игры
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900/50 p-8 rounded-2xl border border-cyan-800/30 hover:border-cyan-500/50 transition-all">
            <div className="text-cyan-400 text-3xl mb-4">❄️</div>
            <h3 className="text-xl font-bold text-white mb-3">Ледяная графика</h3>
            <p className="text-gray-300">
              Потрясающие визуальные эффекты и анимация кристаллов
            </p>
          </div>
          
          <div className="bg-gray-900/50 p-8 rounded-2xl border border-cyan-800/30 hover:border-cyan-500/50 transition-all">
            <div className="text-cyan-400 text-3xl mb-4">🎮</div>
            <h3 className="text-xl font-bold text-white mb-3">Социальная игра</h3>
            <p className="text-gray-300">
              Играйте бесплатно в увлекательной социальной атмосфере
            </p>
          </div>
          
          <div className="bg-gray-900/50 p-8 rounded-2xl border border-cyan-800/30 hover:border-cyan-500/50 transition-all">
            <div className="text-cyan-400 text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-white mb-3">Быстрый геймплей</h3>
            <p className="text-gray-300">
              Динамичные раунды и захватывающие бонусные уровни
            </p>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            Важная информация
          </h2>
          <div className="space-y-4">
            <p className="text-cyan-200">
              <span className="font-bold text-white">Ice Mine Slots</span> — это полностью бесплатная социальная игра, предназначенная исключительно для развлечения.
            </p>
            <p className="text-gray-300">
              Игра не содержит элементов азартных игр на реальные деньги и не требует финансовых вложений.
            </p>
            <p className="text-gray-300">
              Контент предназначен для аудитории 18+ и носит исключительно развлекательный характер.
            </p>
          </div>
          
          <div className="mt-8 pt-8 border-t border-cyan-800/30">
            <a
              href="/privacy-policy"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span className="mr-2">🔒</span>
              <span>Политика конфиденциальности</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-gray-800">
        <div className="text-center text-gray-400">
          <p>© {new Date().getFullYear()} Ice Mine Slots. Все права защищены.</p>
          <p className="text-sm mt-2">Игра предназначена только для развлечения.</p>
        </div>
      </footer>
    </main>
  );
}
