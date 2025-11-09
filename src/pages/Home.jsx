
import React from "react";
import { Video, BookOpen, Users, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const products = {
  course: { name: 'Master Visa Class', price: 1500, currency: 'جنيه', description: 'كورس شامل ومتكامل يساعدك في إتقان جميع إجراءات الحصول على التأشيرات' },
  ebook: { name: 'دليل التأشيرات الشامل', price: 500, currency: 'جنيه', description: 'كتاب إلكتروني متكامل' },
  consultation: { name: 'جلسة استشارة شخصية', price: 800, currency: 'جنيه', description: 'جلسة استشارية فردية' }
};

const Home = () => {
  const navigate = useNavigate();
  return (
    <div style={{ direction: 'rtl' }}>
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Master Visa Class</h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">منصتك الشاملة للتميز في عالم التأشيرات</p>
          <button onClick={() => navigate('/course')} className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg text-xl font-bold">ابدأ رحلتك الآن</button>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">منتجاتنا التعليمية</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-3">{products.course.name}</h3>
              <p className="text-gray-600 text-center mb-4">{products.course.description}</p>
              <div className="text-center mb-4">
                <span className="text-3xl font-bold text-blue-600">{products.course.price}</span>
                <span className="text-xl text-gray-500"> {products.course.currency}</span>
              </div>
              <button onClick={() => navigate('/course')} className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold">عرض التفاصيل</button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-3">{products.ebook.name}</h3>
              <p className="text-gray-600 text-center mb-4">{products.ebook.description}</p>
              <div className="text-center mb-4">
                <span className="text-3xl font-bold text-green-600">{products.ebook.price}</span>
                <span className="text-xl text-gray-500"> {products.ebook.currency}</span>
              </div>
              <button onClick={() => navigate('/ebook')} className="w-full bg-green-600 text-white py-3 rounded-lg font-bold">عرض التفاصيل</button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-3">{products.consultation.name}</h3>
              <p className="text-gray-600 text-center mb-4">{products.consultation.description}</p>
              <div className="text-center mb-4">
                <span className="text-3xl font-bold text-purple-600">{products.consultation.price}</span>
                <span className="text-xl text-gray-500"> {products.consultation.currency}</span>
              </div>
              <button onClick={() => navigate('/consultation')} className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold">عرض التفاصيل</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
