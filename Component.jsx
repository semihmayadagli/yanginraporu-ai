import React, { useState } from "react";

export default function Component() {
  const [aiProvider, setAiProvider] = useState("open-source");

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-3xl font-bold mb-6 text-center">YANGIN RAPORU</h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Bina Bilgileri</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Proje Adı</label>
            <input type="text" className="w-full border rounded p-2" placeholder="Örnek Proje" />
          </div>
          <div>
            <label className="block text-sm font-medium">Bina Yüksekliği (m)</label>
            <input type="number" className="w-full border rounded p-2" placeholder="24.5" />
          </div>
          <div>
            <label className="block text-sm font-medium">Yapı Yüksekliği (m)</label>
            <input type="number" className="w-full border rounded p-2" placeholder="16.0" />
          </div>
          <div>
            <label className="block text-sm font-medium">Kat Sayısı</label>
            <input type="number" className="w-full border rounded p-2" placeholder="5" />
          </div>
          <div>
            <label className="block text-sm font-medium">Bina Kullanım Sınıfı</label>
            <input type="text" className="w-full border rounded p-2" placeholder="Büro" />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Görsel Yükle</h3>
        <input type="file" className="mb-2" />
        <input type="text" className="w-full border rounded p-2" placeholder="Kısa açıklama *" />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-1">İlgili Sistem</label>
        <select className="w-full border rounded p-2">
          <option>Yangın dolabı ve hortum</option>
          <option>Sprinkler sistemi</option>
          <option>Gazlı söndürme</option>
          <option>Yangın algılama</option>
        </select>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Referans Dokümanlar</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Yönetmelik Yükle</label>
            <input type="file" className="w-full border rounded p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Eski Rapor Yükle</label>
            <input type="file" className="w-full border rounded p-2" />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">AI Sağlayıcı Seçimi</h3>
        <select
          value={aiProvider}
          onChange={(e) => setAiProvider(e.target.value)}
          className="w-full border rounded p-2"
        >
          <option value="open-source">Açık Kaynak (varsayılan)</option>
          <option value="gpt-4o">GPT-4o (kendi API anahtarınızı girin)</option>
        </select>
        {aiProvider === "gpt-4o" && (
          <input
            type="text"
            className="mt-2 w-full border rounded p-2"
            placeholder="OpenAI API Anahtarınızı girin"
          />
        )}
      </div>

      <div className="flex flex-col gap-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">AI Yorumunu Getir</button>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Projenin Raporunu Oluştur</button>
        <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800">Projeyi Kaydet</button>
      </div>
    </div>
  );
}
