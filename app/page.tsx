import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 導航 */}
      <nav className="flex justify-between items-center px-8 py-8 max-w-6xl mx-auto">
        <div className="text-xl font-black italic text-blue-500">MY_MOAT</div>
        <div className="bg-white text-black px-4 py-2 rounded-lg text-sm font-bold cursor-pointer">
          立即報名
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto text-center pt-20 px-4">
        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
          建立你的<br/>技術護城河
        </h1>
        <p className="text-gray-400 text-xl mb-12">
          掌握現代大型系統設計，讓你的職涯更具競爭力。
        </p>
        
        {/* 價格區 */}
        <div className="bg-[#111] border border-white/10 p-10 rounded-3xl max-w-md mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-blue-400">實戰營完整方案</h3>
          <div className="text-5xl font-black mb-6">$999 <span className="text-sm text-gray-500 font-normal">USD</span></div>
          <div className="bg-blue-500/10 text-blue-400 p-3 rounded-lg text-sm mb-8 border border-blue-500/20">
            💳 支援信用卡分期付款 (3/6/12期)
          </div>
          <button className="w-full bg-white text-black py-4 rounded-xl font-bold text-lg hover:bg-gray-200 transition">
            前往結帳
          </button>
        </div>
      </section>
    </main>
  );
}
