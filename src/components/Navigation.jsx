
import React, { useState } from "react";
import { Video, ShoppingCart, User, LogOut, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isLoggedIn] = useState(false);
  const [cart] = useState([]);
  const navigate = useNavigate();

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-lg" style={{ direction: "rtl" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
            <Video className="w-8 h-8 text-yellow-400" />
            <span className="text-xl font-bold">Master Visa Class</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => navigate("/")} className="hover:text-yellow-400 transition">الرئيسية</button>
            <button onClick={() => navigate("/course")} className="hover:text-yellow-400 transition">الكورس</button>
            <button onClick={() => navigate("/ebook")} className="hover:text-yellow-400 transition">الكتاب</button>
            <button onClick={() => navigate("/consultation")} className="hover:text-yellow-400 transition">الاستشارات</button>
            <button onClick={() => navigate("/contact")} className="hover:text-yellow-400 transition">تواصل معنا</button>

            {isLoggedIn ? (
              <>
                <button onClick={() => navigate("/dashboard")} className="flex items-center gap-2 bg-yellow-500 text-blue-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-400 transition">
                  <User className="w-4 h-4" />
                  لوحة التحكم
                </button>
                <button className="flex items-center gap-2 hover:text-yellow-400 transition">
                  <LogOut className="w-4 h-4" />
                </button>
              </>
            ) : (
              <button onClick={() => navigate("/login")} className="bg-yellow-500 text-blue-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-400 transition">
                تسجيل الدخول
              </button>
            )}

            <button onClick={() => navigate("/checkout")} className="relative">
              <ShoppingCart className="w-6 h-6" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
          </div>

          <button onClick={() => setShowMobileMenu(!showMobileMenu)} className="md:hidden">
            {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {showMobileMenu && (
          <div className="md:hidden pb-4 space-y-2">
            <button onClick={() => { navigate("/"); setShowMobileMenu(false); }} className="block w-full text-right py-2 hover:text-yellow-400">الرئيسية</button>
            <button onClick={() => { navigate("/course"); setShowMobileMenu(false); }} className="block w-full text-right py-2 hover:text-yellow-400">الكورس</button>
            <button onClick={() => { navigate("/ebook"); setShowMobileMenu(false); }} className="block w-full text-right py-2 hover:text-yellow-400">الكتاب</button>
            <button onClick={() => { navigate("/consultation"); setShowMobileMenu(false); }} className="block w-full text-right py-2 hover:text-yellow-400">الاستشارات</button>
            <button onClick={() => { navigate("/contact"); setShowMobileMenu(false); }} className="block w-full text-right py-2 hover:text-yellow-400">تواصل معنا</button>
            {!isLoggedIn ? (
              <button onClick={() => { navigate("/login"); setShowMobileMenu(false); }} className="block w-full text-right py-2 bg-yellow-500 text-blue-900 rounded">تسجيل الدخول</button>
            ) : null}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
