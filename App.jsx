import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      <h1 className="text-3xl font-bold mb-6">Yangın Raporu AI</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-semibold">Proje Adı:</label>
          <input type="text" className="w-full border p-2 rounded" placeholder="Proje adı girin" />
        </div>

        <div>
          <label className="block font-semibold">Bina Yüksekliği (m):</label>
          <input type="number" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-semibold">Yapı Yüksekliği (m):</label>
          <input type="number" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-semibold">Kat Sayısı:</label>
          <input type="number" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-semibold">Bina Kullanım Sınıfı:</label>
          <input type="text" className="w-full border p-2 rounded" placeholder="Örn: Büro, Konut" />
        </div>

        <div>
          <label className="block font-semibold">Görsel Yükle:</label>
          <input type="file" className="w-full" />
        </div>

        <div>
          <label className="block font-semibold">Kısa Açıklama:</label>
          <textarea className="w-full border p-2 rounded" rows="3" placeholder="Tespit açıklaması girin" />
        </div>

        <div>
          <label className="block font-semibold">İlgili Sistem:</label>
          <select className="w-full border p-2 rounded">
            <option>Yangın dolabı ve hortum</option>
            <option>Sprinkler</option>
            <option>Dedektör</option>
            <option>Gazlı Söndürme</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold">AI Sağlayıcı Seçimi:</label>
          <select className="w-full border p-2 rounded">
            <option>ChatGPT-4o (OpenAI)</option>
            <option>OpenAI GPT-4</option>
            <option>Yerel Model (Beta)</option>
          </select>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
          Projenin Raporunu Oluştur
        </button>

        <button className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded">
          Projeyi Kaydet / Sonra Devam Et
        </button>
      </div>
    </div>
  );
}
