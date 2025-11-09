
import React from "react";
import { Users, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Consultation = () => {
  const navigate = useNavigate();
  return (
    <div style={{ direction: 'rtl' }} className="py-12 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-8 text-white">
            <h1 className="text-4xl font-bold mb-4">جلسة استشارة شخصية</h1>
            <p className="text-xl">جلسة استشارية فردية مع خبير التأشيرات</p>
          </div>
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-purple-900">ما ستحصل عليه</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">مراجعة مستنداتك</li>
                  <li className="flex items-start gap-3">خطة عمل واضحة</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-purple-900">كيف تعمل الجلسة؟</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                    <div><div className="font-bold">احجز موعدك</div></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t pt-6 flex items-center justify-between">
              <div>
                <div className="text-4xl font-bold text-purple-600">800 جنيه</div>
                <div className="text-gray-600">جلسة واحدة - 60 دقيقة</div>
              </div>
              <button onClick={() => navigate('/checkout')} className="bg-purple-600 text-white px-8 py-4 rounded-lg text-xl font-bold">احجز جلستك الآن</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
