
import React from "react";
import { Check, Video } from "lucide-react";
import { useNavigate } from "react-router-dom";

const products = {
  course: {
    name: 'Master Visa Class',
    description: 'كورس شامل ومتكامل يساعدك في إتقان جميع إجراءات الحصول على التأشيرات بخطوات احترافية',
    price: 1500,
    currency: 'جنيه',
    features: [
      '20+ فيديو تعليمي عالي الجودة',
      'شرح مفصل لجميع أنواع التأشيرات',
      'نماذج وأمثلة عملية',
      'دعم فني مستمر',
      'شهادة إتمام الكورس',
      'وصول مدى الحياة'
    ]
  }
};

const lessons = [
  { id: 1, title: 'مقدمة عن التأشيرات', duration: '15:30' },
  { id: 2, title: 'التأشيرة السياحية', duration: '22:45' },
  { id: 3, title: 'تأشيرة العمل', duration: '28:15' },
];

const Course = () => {
  const navigate = useNavigate();
  return (
    <div style={{ direction: 'rtl' }} className="py-12 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white">
            <h1 className="text-4xl font-bold mb-4">{products.course.name}</h1>
            <p className="text-xl">{products.course.description}</p>
          </div>
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">محتوى الكورس</h2>
            <div className="space-y-3">
              {lessons.map(l => (
                <div key={l.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center">
                      <span className="font-bold text-blue-600">{l.id}</span>
                    </div>
                    <div>
                      <div className="font-bold">{l.title}</div>
                      <div className="text-sm text-gray-600">{l.duration}</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">{l.duration}</div>
                </div>
              ))}
            </div>

            <div className="border-t pt-6 flex items-center justify-between">
              <div>
                <div className="text-4xl font-bold text-blue-600">{products.course.price} {products.course.currency}</div>
                <div className="text-gray-600">وصول مدى الحياة</div>
              </div>
              <button onClick={() => navigate('/checkout')} className="bg-blue-600 text-white px-8 py-4 rounded-lg text-xl font-bold">اشترِ الكورس الآن</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
