import React from 'react'

const Contact = () => {
return (
<section id="contact" className="bg-gray-100 py-20 px-4">
<div className="max-w-4xl mx-auto">
<h3 className="text-3xl font-bold mb-4 text-center">Get In Touch</h3>
<p className="text-gray-600 text-center mb-10">
Have a project, a question, or just want to say hi? Let’s talk.
</p>


<div className="bg-white rounded-2xl shadow-lg p-8">
<form className="grid gap-6">
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium mb-1">Name</label>
<input
type="text"
placeholder="Your name"
className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
</div>


<div>
<label className="block text-sm font-medium mb-1">Email</label>
<input
type="email"
placeholder="you@example.com"
className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
</div>
</div>


<div>
<label className="block text-sm font-medium mb-1">Message</label>
<textarea
rows="5"
placeholder="Tell me about your project..."
className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
></textarea>
</div>


<button
type="submit"
className="self-start bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition"
>
Send Message
</button>
</form>
</div>
</div>
</section>
)
}

export default Contact