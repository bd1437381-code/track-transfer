import { useState } from "react";

const WULogo = () => (
  <svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="2" y="24" fontFamily="Arial Black, Arial" fontWeight="900" fontSize="26" fill="#FFCC00" letterSpacing="-2">W</text>
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="22" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export default function App() {
  const [activeTab, setActiveTab] = useState<"sender" | "receiver">("sender");
  const [mtcn, setMtcn] = useState("");
  const [firstName, setFirstName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!mtcn.trim()) {
      setError("الرجاء إدخال رقم التتبع (MTCN)");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  const footerLinks = [
    ["الصفحة الرئيسية", "نبذة عنا", "المدونة", "الإبلاغ عن خطأ في الأمان"],
    ["معلومات حول الشركة", "العلاقات بين المستثمرين", "الوظائف", "مؤسسة WU"],
    ["الملكية الفكرية", "بيان الخصوصية عبر شبكة الإنترنت", "الأحكام والشروط", "التوعية"],
    ["معلومات حول ملف تعريف الارتباط", "الحماية من الاحتيال", "التواصل معنا"],
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white" dir="rtl">
      {/* Header */}
      <header className="bg-[#1a1f36] flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <WULogo />
        </div>
        <button className="border border-white text-white text-sm px-3 py-1 rounded hover:bg-white hover:text-[#1a1f36] transition-colors">
          القائمة
        </button>
      </header>

      {/* Main content */}
      <main className="flex-1 px-5 pt-6 pb-10 max-w-lg mx-auto w-full">
        {/* Country selector */}
        <div className="flex justify-end mb-4">
          <span className="text-[#5b6280] text-sm cursor-pointer hover:underline">
            عربي/المملكة العربية السعودية
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-5">تتبع تحويل</h1>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            onClick={() => { setActiveTab("sender"); setSubmitted(false); setError(""); }}
            className={`flex items-center gap-2 pb-3 px-4 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "sender"
                ? "border-[#1a1f36] text-[#1a1f36]"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15l-9-9-9 9"/>
              <path d="M12 6v18"/>
            </svg>
            أنا الفرسل
          </button>
          <button
            onClick={() => { setActiveTab("receiver"); setSubmitted(false); setError(""); }}
            className={`flex items-center gap-2 pb-3 px-4 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "receiver"
                ? "border-[#1a1f36] text-[#1a1f36]"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9 9 9-9"/>
              <path d="M12 18V0"/>
            </svg>
            أنا المستلم
          </button>
        </div>

        {submitted ? (
          /* Result card */
          <div className="border border-gray-200 rounded-lg p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <span className="font-semibold text-gray-800">التحويل قيد التنفيذ</span>
            </div>
            <p className="text-sm text-gray-600 mb-1">
              رقم التتبع (MTCN): <span className="font-mono font-semibold">{mtcn}</span>
            </p>
            {firstName && (
              <p className="text-sm text-gray-600 mb-4">
                اسم {activeTab === "sender" ? "المرسل" : "المستلم"}: <span className="font-semibold">{firstName}</span>
              </p>
            )}
            <p className="text-sm text-gray-500">
              يتم معالجة تحويلك حالياً. يمكن استلامه خلال دقائق.
            </p>
            <button
              onClick={() => { setSubmitted(false); setMtcn(""); setFirstName(""); }}
              className="mt-4 text-sm text-[#3a4db1] hover:underline"
            >
              تتبع تحويل آخر
            </button>
          </div>
        ) : (
          <>
            {/* MTCN label */}
            <label className="block text-xs text-gray-500 mb-1 font-medium tracking-wide">
              {activeTab === "sender"
                ? "رقم التتبع (MTCN) للتحويل"
                : "رقم التتبع (MTCN) الخاص بك"}
            </label>

            {/* MTCN Input */}
            <div className="mb-4">
              <input
                type="text"
                value={mtcn}
                onChange={(e) => {
                  setMtcn(e.target.value.replace(/\D/g, "").slice(0, 10));
                  setError("");
                }}
                placeholder="_ _ _ _ _ _ _ _ _ _"
                className={`w-full border-b ${error ? "border-red-500" : "border-gray-400"} py-2 text-base outline-none focus:border-[#3a4db1] transition-colors bg-transparent text-right tracking-widest placeholder-gray-300`}
                maxLength={10}
                inputMode="numeric"
              />
              {error && (
                <p className="text-red-500 text-xs mt-1">{error}</p>
              )}
            </div>

            {/* First name input */}
            <div className="mb-6">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder={activeTab === "sender" ? "الاسم الأول للفرسل" : "اسمك الأول"}
                className="w-full border-b border-gray-300 py-2 text-base outline-none focus:border-[#3a4db1] transition-colors bg-transparent text-right placeholder-gray-400"
              />
            </div>

            {/* Submit button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-[#3a4db1] hover:bg-[#2d3d96] active:bg-[#1a2870] text-white py-3 rounded text-base font-medium transition-colors"
            >
              المتابعة
            </button>

            {/* Help link */}
            <div className="text-center mt-5">
              <button className="text-sm text-[#3a4db1] hover:underline">
                لا تعرف رقم التتبع (MTCN)؟
              </button>
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 px-5 pt-6 pb-5">
        <div className="max-w-lg mx-auto">
          {/* Footer links */}
          <div className="text-xs text-gray-500 leading-7 text-center mb-6">
            {footerLinks.map((row, i) => (
              <div key={i} className="flex flex-wrap justify-center gap-x-1">
                {row.map((link, j) => (
                  <span key={j} className="flex items-center gap-1">
                    {j > 0 && <span className="text-gray-300">|</span>}
                    <button className="hover:underline hover:text-gray-700 transition-colors">
                      {link}
                    </button>
                  </span>
                ))}
              </div>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-500 text-center mb-4">
            حقوق النسخ والنشر 2026 .Western Union Holdings, Inc جميع الحقوق محفوظة
          </p>

          {/* Social + follow */}
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-3">تابعنا على</p>
            <div className="flex justify-center gap-5 text-gray-600">
              <button className="hover:text-[#1877F2] transition-colors" aria-label="Facebook">
                <FacebookIcon />
              </button>
              <button className="hover:text-[#FF0000] transition-colors" aria-label="YouTube">
                <YoutubeIcon />
              </button>
              <button className="hover:text-[#E1306C] transition-colors" aria-label="Instagram">
                <InstagramIcon />
              </button>
              <button className="hover:text-black transition-colors" aria-label="X">
                <XIcon />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
