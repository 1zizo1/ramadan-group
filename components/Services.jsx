export default function Services() {
  const services = [
    { title: "Import Solutions", desc: "Reliable sourcing and delivery worldwide 123." },
    { title: "Export Services", desc: "Expand your business across global markets." },
    { title: "Logistics", desc: "Smooth shipping and customs clearance." },
  ]

  return (
    <section className="py-16 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-amber-400">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div key={i} className="bg-blue-700 shadow p-6 rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
