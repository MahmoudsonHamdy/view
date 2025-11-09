
import React, { useState } from "react";
import { Play, Check, Lock } from "lucide-react";

const lessonsData = [
  { id: 1, title: 'مقدمة عن التأشيرات', duration: '15:30' },
  { id: 2, title: 'التأشيرة السياحية', duration: '22:45' },
  { id: 3, title: 'تأشيرة العمل', duration: '28:15' },
];

const Lessons = () => {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [completedLessons, setCompletedLessons] = useState([]);

  const lesson = lessonsData[currentLesson];

  const markComplete = (id) => {
    if (!completedLessons.includes(id)) setCompletedLessons([...completedLessons, id]);
  };

  return (
    <div style={{ direction: 'rtl' }} className="bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto py-6 px-4">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-black rounded-xl overflow-hidden mb-4" style={{ aspectRatio: '16/9' }}>
              <div className="w-full h-full flex items-center justify-center text-white">
                <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-xl">فيديو الدرس {lesson.id}</p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 text-white">
              <h1 className="text-3xl font-bold mb-2">{lesson.title}</h1>
              <p className="text-gray-400 mb-4">{lesson.duration}</p>

              <div className="flex gap-4">
                <button onClick={() => { markComplete(lesson.id); if (currentLesson < lessonsData.length-1) setCurrentLesson(currentLesson+1);} } className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold">الدرس التالي</button>
                {!completedLessons.includes(lesson.id) && <button onClick={() => markComplete(lesson.id)} className="border border-gray-600 text-white px-6 py-3 rounded-lg font-bold">وضع علامة كمكتمل</button>}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-xl p-4 sticky top-4">
              <h3 className="text-xl font-bold mb-4 text-white">قائمة الدروس</h3>
              <div className="space-y-2">
                {lessonsData.map((l, idx) => (
                  <button key={l.id} onClick={() => setCurrentLesson(idx)} className={`w-full text-right p-3 rounded-lg ${currentLesson===idx ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${completedLessons.includes(l.id)?'bg-green-500':'bg-gray-600'}`}>
                          {completedLessons.includes(l.id) ? <Check className="w-5 h-5 text-white"/> : <span className="text-sm">{l.id}</span>}
                        </div>
                        <div><div className="font-bold text-sm">{l.title}</div><div className="text-xs opacity-75">{l.duration}</div></div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
