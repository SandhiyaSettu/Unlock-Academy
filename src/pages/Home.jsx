import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="h-screen bg-gradient-to-r from-purple-600 to-pink-600 flex flex-col justify-center items-center text-white text-center px-6">
        <h1 className="text-5xl font-bold mb-4">
          Where Rhythm Meets Melody
        </h1>
        <p className="text-xl mb-6">
          Professional training in dance and music, on stage and online.
        </p>
        <div className="flex gap-6">
          <Link
            to="/dance"
            className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition"
          >
            💃 Explore Dance Institute
          </Link>
          <Link
            to="/music"
            className="bg-white text-pink-700 font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition"
          >
            🎸 Explore Music Institute
          </Link>
        </div>
      </section>

      {/* 2. About Us */}
      <section className="py-16 px-8 text-center bg-gray-50">
        <h2 className="text-3xl font-bold mb-4">About UNLOCK Academy</h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          At UNLOCK Academy of Dance and Music, we believe in creativity,
          accessibility, and performance opportunities. Our mission is to
          provide professional dance & music training both offline and online,
          empowering students everywhere to shine.
        </p>
      </section>

      {/* 3. Dance Institute Section */}
      <section className="py-16 px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">💃 Dance Institute</h2>
          <p className="text-gray-600 mb-4">
            Programs in Classical, Contemporary, Popping, Hip-Hop, Folk, and
            Zumba. Learn from professional choreographers in world-class
            studios, with special online classes for rural students.
          </p>
          <Link
            to="/dance"
            className="bg-purple-600 text-white px-5 py-3 rounded-xl shadow-lg hover:scale-105 transition"
          >
            Discover Dance Programs
          </Link>
        </div>
        <img
          src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91"
          alt="Dance"
          className="rounded-2xl shadow-lg"
        />
      </section>

      {/* 4. Music Institute Section */}
      <section className="py-16 px-8 grid md:grid-cols-2 gap-10 items-center bg-gray-50">
        <img
          src="https://images.unsplash.com/photo-1511379938547-c1f69419868d"
          alt="Music"
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">🎸 Music Institute</h2>
          <p className="text-gray-600 mb-4">
            Programs in Guitar, Piano, Vocals, Drums, and Music Theory.
            Experienced musicians guide you in recording rooms and practice
            studios, with online support for rural learners.
          </p>
          <Link
            to="/music"
            className="bg-pink-600 text-white px-5 py-3 rounded-xl shadow-lg hover:scale-105 transition"
          >
            Discover Music Programs
          </Link>
        </div>
      </section>

      {/* 5. Student Success Stories */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-3xl font-bold mb-8">🌟 Student Success Stories</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <p className="italic">
              “Unlock Academy helped me win my first dance competition!”
            </p>
            <h4 className="mt-4 font-semibold">– Priya, Dance Student</h4>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <p className="italic">
              “I can now play guitar confidently thanks to my mentors here.”
            </p>
            <h4 className="mt-4 font-semibold">– Arjun, Music Student</h4>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <p className="italic">
              “Online classes made it possible for me to learn from my village.”
            </p>
            <h4 className="mt-4 font-semibold">– Kavya, Online Student</h4>
          </div>
        </div>
      </section>

      {/* 6. Events & Workshops */}
      <section className="py-16 px-8 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-6">🎭 Events & Workshops</h2>
        <p className="text-gray-600 mb-6">
          Join our upcoming dance shows, music concerts, and interactive
          workshops (online & offline).
        </p>
        <Link
          to="/events"
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition"
        >
          Join Upcoming Event
        </Link>
      </section>

      {/* 7. Registration Section */}
<section className="py-16 px-8 text-center">
  <h2 className="text-3xl font-bold mb-6">📝 Student Registration</h2>

  <form
    onSubmit={(e) => {
      e.preventDefault();

      const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        program: e.target.program.value,
      };

      const existing =
        JSON.parse(localStorage.getItem("registrations")) || [];

      existing.push(formData);

      localStorage.setItem("registrations", JSON.stringify(existing));

      alert("Registration Successful!");
      e.target.reset();
    }}
    className="max-w-md mx-auto space-y-4"
  >
    <input
      type="text"
      name="name"
      placeholder="Full Name"
      required
      className="w-full p-3 border rounded-xl"
    />

    <input
      type="email"
      name="email"
      placeholder="Email Address"
      required
      className="w-full p-3 border rounded-xl"
    />

    <select
      name="program"
      required
      className="w-full p-3 border rounded-xl"
    >
      <option value="">Select Program</option>
      <option value="Dance">Dance</option>
      <option value="Music">Music</option>
    </select>

    <button
      type="submit"
      className="bg-purple-600 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition"
    >
      Register Now
    </button>
  </form>
</section>

      {/* 7. Contact & Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
        <p>Email: unlockacademy@gmail.com | Phone: +91 98765 43210</p>
        <p className="mt-2">Location: Chennai, Tamil Nadu</p>
        <div className="mt-6 flex justify-center gap-6">
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">YouTube</a>
          <a href="#" className="hover:text-white">Twitter</a>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} UNLOCK Academy of Dance & Music. All
          rights reserved.
        </p>
      </footer>
    </div>
  );
}
