
import { useState } from 'react';

export default function DemoForm() {
  const [status, setStatus] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      company: e.target.company.value,
      message: e.target.message.value,
    };

    const res = await fetch('/api/demo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus('Thank you! We will contact you shortly.');
      e.target.reset();
    } else {
      setStatus('Something went wrong. Please try again.');
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Request a Demo</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Your Name" required className="w-full border p-2 rounded" />
        <input type="email" name="email" placeholder="Email Address" required className="w-full border p-2 rounded" />
        <input type="text" name="company" placeholder="Company Name" className="w-full border p-2 rounded" />
        <textarea name="message" placeholder="Tell us about your needs" rows="4" className="w-full border p-2 rounded"></textarea>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Submit Request
        </button>
      </form>
      {status && <p className="mt-4 text-green-600">{status}</p>}
    </div>
  );
}
