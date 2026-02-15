import React from 'react';

export default function MyCourseSite() {
  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-blue-600">
      {/* 頂部裝飾條 */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>

      {/* 導航 */}
      <nav className="flex justify-between items-center px-6 py-8 max-w-6xl mx-auto">
        <div className="text-xl font-black tracking-tighter italic">BUILD_YOUR_MOAT</div>
        <div className="space-x-6 text-sm text-gray-400 font-medium hidden md:block">
          <a href="#content" className="hover:text-white transition">課程內容</a>
          <a href="#pricing" className="hover:text-white transition">方案與分期</a>
          <a href="#faq" className="hover:text-white transition">常見問題</a>
        </div>
        <a href="#pricing" className="bg-white text-black px-5 py-2 rounded-lg text-sm font-bold hover:bg-gray-200 transition">
          立即加入
        </a>
      </nav>

      {/* Hero 核心區 */}
      <section className="max-w-4xl mx-auto text-center pt-20 pb-32 px-4">
        <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight leading-[0.9]">
          建立不可替代的<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-700">技術護城河</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          不只是寫 Code，我們要教你如何設計支撐千萬用戶的系統。
          <span className="block mt-2 text-blue-500 font-semibold italic text-sm underline underline-offset-4">支援信用卡分期付款，減輕你的入學負擔。</span>
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a href="#pricing" className="bg-blue-600 text-white px-10 py-5 rounded-xl font-black text-xl hover:bg-blue-500 transition shadow-[0_0_30px_rgba(37,99,235,0.3)]">
            領取優惠報名入學
          </a>
        </div>
      </section>

      {/* 價格區 (金流整合位置) */}
      <section id="pricing" className="py-24 bg-[#0A0A0A] border-y border-white/5">
        <div className="max-w-xl mx-auto px-6">
          <div className="bg-gradient-to-b from-white/10 to-transparent p-[1px] rounded-3xl">
            <div className="bg-[#050505] p-10 rounded-[calc(1.5rem-1px)]">
              <h3 className="text-3xl font-black mb-2 tracking-tight">實戰營完整方案</h3>
              <p className="text-gray-500 mb-8">一次性付費，終身存取</p>
              
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-black">$999</span>
                <span className="text-xl text-gray-500 font-medium uppercase">USD</span>
              </div>

              <div className="bg-blue-900/20 border border-blue-800/50 p-4 rounded-xl mb-8">
                <p className="text-blue-400 text-sm font-bold">💳 台灣學員專屬分期優惠：</p>
                <p className="text-blue-300 text-sm">支援 3 / 6 / 12 期分期，每月最低只要 $83 USD (約 NT$2,600)</p>
              </div>

              <button className="w-full bg-white text-black py-5 rounded-xl font-extrabold text-xl hover:bg-gray-200 transition mb-6">
                前往安全結帳 (Stripe/藍新)
              </button>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-xs text-gray-500 flex items-center gap-2">🛡️ 7天不滿意退款</div>
                <div className="text-xs text-gray-500 flex items-center gap-2">⚡ 支付後立即開通</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 底部 */}
      <footer className="py-20 text-center border-t border-white/5">
        <p className="text-gray-600 text-sm">© 2026 Your Moat Studio. Built with Next.js.</p>
      </footer>
    </div>
  );
}
