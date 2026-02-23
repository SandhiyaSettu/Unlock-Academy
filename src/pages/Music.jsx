export default function Music() {
  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative bg-black text-white h-[80vh] flex items-center justify-center">
        <img 
          src="https://source.unsplash.com/1600x900/?guitar,performance" 
          alt="Guitar Performance" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Master the Guitar – From Basics to Stage
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Learn from expert musicians with decades of experience
          </p>
          <div className="space-x-4">
            <button 
             onClick={() => alert("Feature Coming Soon!")}
             className="px-6 py-3 bg-red-500 text-white rounded-xl shadow-lg hover:bg-red-600">
              Book a Free Trial Lesson
            </button>
            <button 
             onClick={() => alert("Feature Coming Soon!")}
             className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow-lg hover:bg-blue-600">
              Explore Courses
            </button>
          </div>
        </div>
      </section>

      {/* 2. About the Institute */}
      <section className="p-10 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Our Music Institute</h2>
        <p className="mb-4">
          At UNLOCK Academy, we specialize in **guitar education only**. Our philosophy blends structured lessons with fun learning, ensuring every student enjoys their journey from their first chord to their first stage performance.
        </p>
        <p className="italic">Recognized by top studios & featured in music competitions nationwide.</p>
      </section>

      {/* 3. Guitar Programs Offered */}
      <section className="p-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Guitar Programs Offered</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <ProgramCard title="Beginner" desc="Basic chords, strumming, simple songs." />
          <ProgramCard title="Intermediate" desc="Scales, improvisation, music theory." />
          <ProgramCard title="Advanced" desc="Fingerstyle, jazz, classical, metal, stage performance." />
          <ProgramCard title="Workshops" desc="Songwriting, recording sessions, live performance prep." />
        </div>
        <div className="text-center mt-6">
          <button 
           onClick={() => alert("Feature Coming Soon!")}
           className="px-6 py-3 bg-green-500 text-white rounded-xl shadow-lg hover:bg-green-600">
            View All Courses
          </button>
        </div>
      </section>

      {/* 4. Faculty / Mentors */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-6">Meet Our Guitar Mentors</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <FacultyCard name="John Doe" spec="Acoustic Guitar" />
          <FacultyCard name="Jane Smith" spec="Electric Guitar" />
          <FacultyCard name="Mark Johnson" spec="Bass & Fingerstyle" />
        </div>
      </section>

      {/* 5. Student Performances & Testimonials */}
      <section className="p-10 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Student Performances & Stories</h2>
        <p className="mb-4">Watch our students shine on stage and listen to what they say about us.</p>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <video controls className="rounded-xl shadow-lg">
            <source src="student-performance.mp4" type="video/mp4" />
          </video>
          <blockquote className="p-6 bg-white rounded-xl shadow-lg">
            “I started as a beginner and now I perform live shows! Unlock Academy changed my life.” – Student A
          </blockquote>
        </div>
      </section>

      {/* 6. Events & Workshops */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-6">Events & Workshops</h2>
        <ul className="list-disc list-inside max-w-md mx-auto text-left">
          <li>Masterclasses by guest artists</li>
          <li>Student jam sessions</li>
          <li>National & local competitions</li>
        </ul>
      </section>

      {/* 7. Learning Facilities */}
      <section className="p-10 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Facilities</h2>
        <p className="mb-4">Practice rooms, amps, pedals, recording studios, and performance stage.</p>
        <img 
          src="https://source.unsplash.com/1200x600/?music,studio" 
          alt="Music Studio" 
          className="rounded-xl shadow-lg mx-auto"
        />
      </section>

      {/* 8. Enrollment Section */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Guitar Classes Today!</h2>
        <form
  onSubmit={(e) => {
    e.preventDefault();
    alert("Enrollment Successful!");
    e.target.reset();
  }}
  className="max-w-md mx-auto space-y-4"
>
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" />
          <button
          
          className="w-full py-3 bg-blue-600 text-white rounded-lg">Sign Up</button>
        </form>
      </section>

      {/* 9. Gallery */}
      <section className="p-10 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="https://source.unsplash.com/300x300/?guitar" className="rounded-lg" />
          <img src="https://source.unsplash.com/301x301/?concert" className="rounded-lg" />
          <img src="https://source.unsplash.com/302x302/?music" className="rounded-lg" />
          <img src="https://source.unsplash.com/303x303/?band" className="rounded-lg" />
        </div>
      </section>

      {/* 10. Blog */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-6">From Our Blog</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <BlogCard title="Top 5 Beginner Guitar Exercises" />
          <BlogCard title="Choosing Your First Electric Guitar" />
          <BlogCard title="How to Build Finger Speed" />
        </div>
      </section>

      {/* 11. Contact */}
      <section className="p-10 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p>Email: info@unlockacademy.com | Phone: +91-9876543210</p>
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
        src="https://source.unsplash.com/200x200/?musician,guitar" 
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
