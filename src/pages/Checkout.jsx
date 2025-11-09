
import React, { useState } from "react";
import { ShoppingCart, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();
  // For demo: static cart
  const cart = [{ id: 'course', name: 'Master Visa Class', price: 1500 }];

  const totalAmount = cart.reduce((s,p)=>s+p.price,0);

  const handleCheckout = () => {
    setProcessing(true);
    setTimeout(()=> {
      setProcessing(false);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div style={{ direction: 'rtl' }} className="py-12 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-900">إتمام الطلب</h1>
        {cart.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <ShoppingCart className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <h2 className="text-2xl font-bold mb-4">عربة التسوق فارغة</h2>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <h2 className="text-2xl font-bold mb-4">ملخص الطلب</h2>
                <div className="space-y-4">
                  {cart.map(item=>(
                    <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">{item.name[0]}</div>
                        <div>
                          <div className="font-bold">{item.name}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-bold text-lg">{item.price} جنيه</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4">طريقة الدفع</h2>
                <div className="space-y-3 mb-6">
                  <label className={`flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer ${paymentMethod==='card'?'border-blue-600 bg-blue-50':'border-gray-200'}`}>
                    <input type="radio" name="payment" value="card" checked={paymentMethod==='card'} onChange={e=>setPaymentMethod(e.target.value)} className="w-5 h-5" />
                    <div>
                      <div className="font-bold">بطاقة ائتمان</div>
                    </div>
                  </label>
                </div>
                {paymentMethod==='card' && (
                  <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                    <div><label className="block text-sm font-bold mb-2">رقم البطاقة</label><input className="w-full px-4 py-2 border rounded-lg" /></div>
                  </div>
                )}
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
                <h3 className="text-xl font-bold mb-4">الإجمالي</h3>
                <div className="space-y-2 mb-4 pb-4 border-b">
                  <div className="flex justify-between"><span>المجموع الفرعي</span><span>{totalAmount} جنيه</span></div>
                </div>
                <div className="flex justify-between text-xl font-bold mb-6">
                  <span>الإجمالي</span>
                  <span className="text-blue-600">{totalAmount} جنيه</span>
                </div>
                <button onClick={handleCheckout} disabled={processing} className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold">{processing ? 'جاري المعالجة...' : 'إتمام الشراء'}</button>
                <div className="text-xs text-gray-600 text-center mt-3"><Lock className="w-4 h-4 inline mx-1" /> الدفع آمن ومشفر</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
