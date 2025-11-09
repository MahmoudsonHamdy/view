
import React, { useState } from "react";
import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: ''});
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // demo login
      if (formData.email === 'ahmed@example.com' && formData.password === '123456') {
        navigate('/dashboard');
      } else {
        setError('البريد الإلكتروني أو كلمة المرور غير صحيحة');
      }
    } else {
      if (formData.password !== formData.confirmPassword) {
        setError('كلمات المرور غير متطابقة');
        return;
      }
      navigate('/dashboard');
    }
  };

  return (
    <div style={{ direction: 'rtl' }} className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-6">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-blue-900">{isLogin ? 'تسجيل الدخول' : 'إنشاء حساب جديد'}</h2>
          </div>

          {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm font-bold mb-2">الاسم الكامل</label>
                <input type="text" required className="w-full px-4 py-3 border rounded-lg" value={formData.name} onChange={e=>setFormData({...formData, name:e.target.value})} />
              </div>
            )}

            <div>
              <label className="block text-sm font-bold mb-2">البريد الإلكتروني</label>
              <input type="email" required className="w-full px-4 py-3 border rounded-lg" value={formData.email} onChange={e=>setFormData({...formData, email:e.target.value})} />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">كلمة المرور</label>
              <input type="password" required className="w-full px-4 py-3 border rounded-lg" value={formData.password} onChange={e=>setFormData({...formData, password:e.target.value})} />
            </div>

            {!isLogin && (
              <div>
                <label className="block text-sm font-bold mb-2">تأكيد كلمة المرور</label>
                <input type="password" required className="w-full px-4 py-3 border rounded-lg" value={formData.confirmPassword} onChange={e=>setFormData({...formData, confirmPassword:e.target.value})} />
              </div>
            )}

            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold">{isLogin ? 'تسجيل الدخول' : 'إنشاء حساب'}</button>
          </form>

          <div className="mt-6 text-center">
            <button onClick={()=>{ setIsLogin(!isLogin); setError(''); }} className="text-blue-600 font-bold">{isLogin ? 'ليس لديك حساب؟ سجل الآن' : 'لديك حساب؟ سجل الدخول'}</button>
          </div>

          {isLogin && (
            <div className="mt-4 p-4 bg-blue-50 rounded-lg text-sm">
              <p className="font-bold mb-2">للتجربة استخدم:</p>
              <p>البريد: ahmed@example.com</p>
              <p>كلمة المرور: 123456</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
