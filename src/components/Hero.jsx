import React from 'react';

const Hero = () => {
return (
<section className="h-screen flex items-center justify-center bg-gray-100 pt-20">
<div className="text-center">
  <img src="profileImg" alt="Marcus" />
<h2 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Marcus 👋</h2>
<p className="text-gray-600 mb-6">Frontend Developer | React | Tailwind</p>
<a href="#projects" className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">
View My Work
</a>
</div>
</section>
)
}


export default Hero