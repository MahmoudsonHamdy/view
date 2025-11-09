
import React from "react";
import { BookOpen, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const products = {
  ebook: {
    name: 'دليل التأشيرات الشامل',
    description: 'كتاب إلكتروني متكامل يحتوي على كل ما تحتاجه من معلومات عن التأشيرات والإجراءات',
    price: 500,
    currency: 'جنيه',
    features: [
      '200+ صفحة من المعلومات القيمة',
      'جداول ومخططات توضيحية',
      'قوائم مرجعية للمستندات',
    ]
  }
};

const Ebook = () => {
  const navigate = useNavigate();
  return (
    <div style={{ direction: 'rtl' }} className="py-12 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-green-800 p-8 text-white">
            <h1 className="text-4xl font-bold mb-4">{products.ebook.name}</h1>
            <p className="text-xl">{products.ebook.description}</p>
          </div>
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="bg-gradient-to-br from-green-100 to-green-200 h-96 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-32 h-32 text-green-600" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-green-900">محتويات الكتاب</h2>
                <ul className="space-y-3">
                  {products.ebook.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-green-500" />
                      <span className="text-lg">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t pt-6 flex items-center justify-between">
              <div>
                <div className="text-4xl font-bold text-green-600">{products.ebook.price} {products.ebook.currency}</div>
                <div className="text-gray-600">تحميل فوري بعد الشراء</div>
              </div>
              <button onClick={() => navigate('/checkout')} className="bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold">اشترِ الكتاب الآن</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ebook;
