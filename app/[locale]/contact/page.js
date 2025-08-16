export default function Contact() {
  return (
    <section className="py-16 max-w-4xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full p-3 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-3 border rounded" />
        <textarea placeholder="Message" className="w-full p-3 border rounded h-32"></textarea>
        <button type="submit" className="w-full bg-blue-900 text-white py-3 rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </section>
  )
}
