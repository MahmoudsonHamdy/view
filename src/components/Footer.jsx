
import React from "react";
import { Video } from "lucide-react";

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12 px-4" style={{ direction: 'rtl' }}>
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Video className="w-8 h-8 text-yellow-400" />
            <span className="text-xl font-bold">Master Visa Class</span>
          </div>
          <p className="text-gray-400 text-sm">
            منصتك الشاملة للتميز في عالم التأشيرات والسفر
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4">روابط سريعة</h4>
          <div className="space-y-2 text-sm">
            <div className="block hover:text-yellow-400 transition">الرئيسية</div>
            <div className="block hover:text-yellow-400 transition">الكورس</div>
            <div className="block hover:text-yellow-400 transition">الكتاب</div>
            <div className="block hover:text-yellow-400 transition">الاستشارات</div>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-4">الحساب</h4>
          <div className="space-y-2 text-sm">
            <div className="block hover:text-yellow-400 transition">تسجيل الدخول</div>
            <div className="block hover:text-yellow-400 transition">تواصل معنا</div>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-4">تواصل معنا</h4>
          <div className="space-y-2 text-sm text-gray-400">
            <p>support@mastervisaclass.com</p>
            <p dir="ltr">+20 123 456 7890</p>
            <p>القاهرة، مصر</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
        <p>&copy; 2024 Master Visa Class. جميع الحقوق محفوظة.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
