
import React, { useState } from "react";
import { Mail, Phone, MapPin, Check } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name:'', email:'', subject:'', message:''});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(()=> {
      setSubmitted(false);
      setFormData({ name:'', email:'', subject:'', message:''});
    }, 2000);
  };

  return (
    <div style={{ direction: 'rtl' }} className="py-12 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-blue-900">تواصل معنا</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-center">
                <Check className="w-8 h-8 mx-auto mb-2" />
                <p className="font-bold">تم إرسال رسالتك بنجاح!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div><label className="block text-sm font-bold mb-2">الاسم</label><input className="w-full px-4 py-3 border rounded-lg" required value={formData.name} onChange={e=>setFormData({...formData,name:e.target.value})} /></div>
                <div><label className="block text-sm font-bold mb-2">البريد الإلكتروني</label><input className="w-full px-4 py-3 border rounded-lg" required value={formData.email} onChange={e=>setFormData({...formData,email:e.target.value})} /></div>
                <div><label className="block text-sm font-bold mb-2">الموضوع</label><input className="w-full px-4 py-3 border rounded-lg" required value={formData.subject} onChange={e=>setFormData({...formData,subject:e.target.value})} /></div>
                <div><label className="block text-sm font-bold mb-2">الرسالة</label><textarea className="w-full px-4 py-3 border rounded-lg" rows="5" required value={formData.message} onChange={e=>setFormData({...formData,message:e.target.value})} /></div>
                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold">إرسال الرسالة</button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center"><Mail className="w-6 h-6 text-blue-600" /></div>
                <div><h3 className="font-bold text-lg mb-1">البريد الإلكتروني</h3><p className="text-gray-600">support@mastervisaclass.com</p></div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center"><Phone className="w-6 h-6 text-green-600" /></div>
                <div><h3 className="font-bold text-lg mb-1">الهاتف / واتساب</h3><p className="text-gray-600" dir="ltr">+20 123 456 7890</p></div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center"><MapPin className="w-6 h-6 text-purple-600" /></div>
                <div><h3 className="font-bold text-lg mb-1">العنوان</h3><p className="text-gray-600">القاهرة، مصر</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
