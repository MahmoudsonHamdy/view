
import React from "react";
import { Video, BookOpen, Users, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  // demo purchases
  const purchases = ['course','ebook','consultation'];
  const completedLessons = [1,2];

  return (
    <div style={{ direction: 'rtl' }} className="py-12 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 mb-8 text-white">
          <h1 className="text-4xl font-bold mb-2">مرحباً، أحمد محمد</h1>
          <p className="text-xl">لوحة التحكم الخاصة بك</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {purchases.includes('course') && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-3">Master Visa Class</h3>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2"><span>التقدم</span><span>{Math.round((completedLessons.length/3)*100)}%</span></div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${(completedLessons.length/3)*100}%` }}></div>
                </div>
              </div>
              <button onClick={() => navigate('/lessons')} className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2"><Play className="w-5 h-5" />فتح الدروس</button>
            </div>
          )}

          {purchases.includes('ebook') && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-3">دليل التأشيرات الشامل</h3>
              <button onClick={() => alert('تحميل...')} className="w-full bg-green-600 text-white py-3 rounded-lg font-bold">تحميل الكتاب (PDF)</button>
            </div>
          )}

          {purchases.includes('consultation') && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-3">جلسة استشارة شخصية</h3>
              <button onClick={() => alert('سيتم التواصل معك')} className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold">حجز الموعد</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
