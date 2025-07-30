import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 border-b-2 border-blue-500 inline-block">Contact</h2>
      <p className="mb-4">Feel free to reach out to me via email or connect with me on LinkedIn.</p>
      <ul className="space-y-2">
        <li><strong>Email:</strong> <a className="text-blue-500 hover:underline" href="mailto:ashokyadav.workplace@gmail.com">ashokyadav.workplace@gmail.com</a></li>
        <li><strong>Phone:</strong> 7877885082</li>
        <li><strong>LinkedIn:</strong> <a className="text-blue-500 hover:underline" href="https://www.linkedin.com/in/ashokyadavworkplace/" target="_blank" rel="noopener noreferrer">ashokyadavworkplace</a></li>
        <li><strong>GitHub:</strong> <a className="text-blue-500 hover:underline" href="https://github.com/Ashokyadav88" target="_blank" rel="noopener noreferrer">Ashokyadav88</a></li>
      </ul>
    </section>
  );
};

export default Contact;