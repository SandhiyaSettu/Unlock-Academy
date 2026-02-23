export default function Dance() {
  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative bg-black text-white h-[80vh] flex items-center justify-center">
        <video 
          autoPlay 
          loop 
          muted 
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        >
          <source src="dance-hero.mp4" type="video/mp4" />
        </video>
        <div className="relative text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Dance Without Limits – Learn Anywhere, Anytime
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            From Studio to Online, bringing world-class dance to everyone.
          </p>
          <button
            onClick={() => alert("Feature Coming Soon!")}
           className="px-6 py-3 bg-pink-500 text-white rounded-xl">
         Join Online or In-Studio Classes
        </button>
        </div>
      </section>

      {/* 2. About the Institute */}
      <section className="p-10 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Our Dance Institute</h2>
        <p className="mb-4">
          Unlock Academy was founded to make dance accessible to everyone, everywhere. 
          Our philosophy blends **traditional forms with modern styles**, allowing students 
          to learn Bharatanatyam alongside Hip-Hop, or Ballet with Contemporary.
        </p>
        <p className="italic">
          “Bringing dance education to rural areas through our online platform.”
        </p>
      </section>

      {/* 3. Dance Programs */}
      <section className="p-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Dance Programs Offered</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <ProgramCard title="Classical" desc="Bharatanatyam, Kathak, Ballet" />
          <ProgramCard title="Contemporary & Modern" desc="Jazz, Lyrical, Modern" />
          <ProgramCard title="Urban Styles" desc="Popping, Hip-Hop, Breaking, Street Dance" />
          <ProgramCard title="Folk & Cultural" desc="Indian Folk, Flamenco, African" />
          <ProgramCard title="Special Programs" desc="Zumba, Kids, Wedding choreography" />
        </div>
        <div className="text-center mt-6">
       <button
            onClick={() => alert("Feature Coming Soon!")}
           className="px-6 py-3 bg-green-500 text-white rounded-xl">
          Explore Dance Styles
        </button>           
          
        </div>
      </section>

      {/* 4. Faculty / Choreographers */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-6">Meet Our Choreographers</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <FacultyCard name="Arjun Kumar" spec="Popping & Hip-Hop" />
          <FacultyCard name="Meera Nair" spec="Classical Bharatanatyam" />
          <FacultyCard name="Sara Lee" spec="Contemporary & Jazz" />
        </div>
      </section>

      {/* 5. Student Performances & Testimonials */}
      <section className="p-10 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Student Performances & Stories</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <video controls className="rounded-xl shadow-lg">
            <source src="student-dance.mp4" type="video/mp4" />
          </video>
          <blockquote className="p-6 bg-white rounded-xl shadow-lg">
            “Even from my rural village, I joined Unlock’s online classes. 
            Today, I perform in local shows thanks to their guidance!” – Student B
          </blockquote>
        </div>
      </section>

      {/* 6. Events & Workshops */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-6">Events & Workshops</h2>
        <ul className="list-disc list-inside max-w-md mx-auto text-left">
          <li>Popping & Hip-Hop Battles</li>
          <li>Virtual Online Showcases</li>
          <li>Annual Dance Competitions</li>
        </ul>
        <div className="mt-6">
          <button
          onClick={() => alert("Feature Coming Soon!")}
          className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow-lg hover:bg-blue-600">
            Register for Next Event
          </button>
        </div>
      </section>

      {/* 7. Facilities & Online Learning */}
      <section className="p-10 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Facilities & Online Learning</h2>
        <p className="mb-4">
          Our offline studios feature mirrored halls, sound systems & costumes.  
          Online classes are delivered via Zoom with recorded lessons for flexibility.
        </p>
        <p className="italic mb-6">
          “Affordable pricing & easy mobile access for rural learners.”
        </p>
        <button 
        onClick={() => alert("Feature Coming Soon!")}
        className="px-6 py-3 bg-pink-500 text-white rounded-xl shadow-lg hover:bg-pink-600">
          Join Online Dance Class
        </button>
      </section>

      {/* 8. Gallery */}
<section className="p-10 text-center">
  <h2 className="text-3xl font-bold mb-6">Gallery</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <img 
      src="https://source.unsplash.com/300x300/?dance" 
      alt="Dance performance" 
      className="rounded-lg" 
    />
    <img 
      src="https://source.unsplash.com/301x301/?hiphop" 
      alt="Hip hop dance style" 
      className="rounded-lg" 
    />
    <img 
      src="https://source.unsplash.com/302x302/?classical-dance" 
      alt="Classical dance performance" 
      className="rounded-lg" 
    />
    <img 
      src="https://source.unsplash.com/303x303/?stage,dance" 
      alt="Stage dance show" 
      className="rounded-lg" 
    />
  </div>
</section>

      {/* 9. Admissions / Registration */}
      <section className="p-10 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Admissions Open</h2>
        <div className="space-x-4">
          <button 
          onClick={() => alert("Feature Coming Soon!")}
          className="px-6 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600">
            Join In-Studio
          </button>
          <button
          onClick={() => alert("Feature Coming Soon!")}
          className="px-6 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600">
            Join Online
          </button>
        </div>
        <p className="mt-4 text-gray-600">Scholarships available for rural learners.</p>
      </section>

      {/* 10. Blog */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-6">From Our Blog</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <BlogCard title="How to Learn Popping Dance at Home" />
          <BlogCard title="Benefits of Dance for Rural Students" />
          <BlogCard title="From Stage to Screen: Online Dance Training" />
        </div>
      </section>

      {/* 11. Contact */}
      <section className="p-10 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <form
  onSubmit={(e) => {
    e.preventDefault();
    alert("Message Submitted Successfully!");
    e.target.reset();
  }}
  className="max-w-md mx-auto space-y-4"
>
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" />
          <select className="w-full p-3 border rounded-lg">
            <option>Inquiry Type</option>
            <option>Online Class</option>
            <option>In-Studio Class</option>
          </select>
          <button 
          
          className="w-full py-3 bg-blue-600 text-white rounded-lg">Submit</button>
        </form>
        <p className="mt-6">Phone: +91-9876543210 | WhatsApp: +91-9876543211</p>
        <iframe 
src="https://www.google.com/maps?q=Panimalar+Engineering+College+Chennai&output=embed"          width="100%" height="300" style={{ border: 0 }} 
          allowFullScreen="" loading="lazy" 
          className="rounded-lg mt-6">
        </iframe>
      </section>
    </div>
  );
}

/* ===== Reusable Components ===== */
function ProgramCard({ title, desc }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg text-left">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function FacultyCard({ name, spec }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <img 
        src="https://source.unsplash.com/200x200/?dancer" 
        alt={name} 
        className="rounded-full w-32 h-32 mx-auto mb-4 object-cover"
      />
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-gray-600">{spec}</p>
    </div>
  );
}

function BlogCard({ title }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">Read more →</p>
    </div>
  );
}
