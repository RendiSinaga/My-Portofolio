export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <p className="text-[#38BDF8] tracking-[0.3em] uppercase text-sm mb-4">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Exploring Technology Like a Universe
          </h2>

          <p className="text-slate-400 leading-relaxed mb-6">
            Saya adalah mahasiswa Informatika program studi Teknologi Rekayasa
            Perangkat Lunak di Politeknik Negeri Batam yang memiliki minat dalam
            pengembangan website, aplikasi mobile, backend system, dan teknologi
            IoT.
          </p>

          <p className="text-slate-400 leading-relaxed">
            Saya suka membangun aplikasi yang modern, responsif, dan memiliki
            pengalaman pengguna yang baik dengan memadukan desain yang clean dan
            teknologi yang scalable.
          </p>
        </div>

        {/* Right Cards */}
        <div className="grid grid-cols-2 gap-5">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:border-[#38BDF8]/50 transition">
            <h3 className="text-3xl font-bold text-[#38BDF8]">Web</h3>

            <p className="text-slate-400 mt-2">Frontend & Backend</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:border-[#38BDF8]/50 transition">
            <h3 className="text-3xl font-bold text-[#38BDF8]">Mobile</h3>

            <p className="text-slate-400 mt-2">Android Development</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:border-[#38BDF8]/50 transition">
            <h3 className="text-3xl font-bold text-[#38BDF8]">IoT</h3>

            <p className="text-slate-400 mt-2">Smart Connected System</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:border-[#38BDF8]/50 transition">
            <h3 className="text-3xl font-bold text-[#38BDF8]">API</h3>

            <p className="text-slate-400 mt-2">REST Integration</p>
          </div>
        </div>
      </div>
    </section>
  );
}
