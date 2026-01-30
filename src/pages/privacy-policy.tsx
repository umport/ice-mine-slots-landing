import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Политика конфиденциальности | Ice Mine Slots',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-4 md:p-8">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            ← Назад на главную
          </Link>
        </div>
        
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-cyan-800/30">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-400">
            Политика конфиденциальности
          </h1>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="mb-8 p-6 bg-gray-800/50 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Основная информация
              </h2>
              <p className="mb-4">
                <strong>Ice Mine Slots</strong> является полностью бесплатной социальной игрой и предназначена исключительно для развлекательных целей.
              </p>
              <p className="mb-6">
                Игра не содержит элементов азартных игр на реальные деньги и не требует финансовых вложений.
              </p>
              
              <div className="mt-6 p-4 bg-cyan-900/20 border border-cyan-700/30 rounded-lg">
                <p className="font-semibold text-cyan-300 mb-2">
                  Полный текст политики конфиденциальности:
                </p>
                <a
                  href="https://www.freeprivacypolicy.com/live/ba49458d-ab4f-42ae-b543-f1bd1cd8da4f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-cyan-700 hover:bg-cyan-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  <span className="mr-2">📄</span>
                  Открыть полную политику конфиденциальности
                </a>
              </div>
            </div>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">
                Ключевые положения
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Приложение не требует реальных денежных ставок</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Все игровые элементы носят исключительно развлекательный характер</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Игра не собирает персональные данные без явного согласия пользователя</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Контент предназначен для аудитории 18+</span>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">
                Развлекательный контент
              </h3>
              <p>
                Ice Mine Slots предоставляет игровой контент исключительно для целей развлечения. 
                Игра имитирует игровой процесс слот-машины без возможности выигрыша реальных денег или ценностей.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">
                Возрастные ограничения
              </h3>
              <p>
                Доступ к игре разрешен лицам, достигшим 18 лет. Игра не предназначена для детей 
                и не содержит контента, ориентированного на детскую аудиторию.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">
                Ответственность
              </h3>
              <p>
                Разработчики игры не несут ответственности за любые возможные последствия, 
                связанные с использованием приложения. Игра предоставляется "как есть" 
                исключительно для развлекательных целей.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-700">
              <p className="text-gray-400 text-sm">
                Последнее обновление: {new Date().toLocaleDateString('ru-RU', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
