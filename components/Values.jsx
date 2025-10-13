"use client";
export default function ValuesGrid({ t ,icons = [] }) {
  const icons_prop = icons || [];
  const values = Object.values(t.raw("members"));
  return (
    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((item, index) => {
          const Icon = icons_prop[index] || null;
          return (
            <div
              key={index}
              className="p-6 bg-gray-100/60 rounded-2xl shadow-md flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
            >
              <div className="mb-4">
                {Icon ? <Icon className="w-10 h-10 text-blue-700" /> : null}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          );
        })}
      </div>
   
  );
}
