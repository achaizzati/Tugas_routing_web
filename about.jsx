export default function About() {
  return (
    <section className="section about">
      <div className="section-title">
        <p>GET TO KNOW ME</p>
        <h2>About Me</h2>
      </div>

      <div className="about-content">
        <div className="about-card">
          <span className="quote">“</span>

          <p>
            Halo! Saya <b>Acha Izzati Dasyen</b>, mahasiswa Pendidikan Ilmu
            Komputer di Universitas Pendidikan Indonesia.
          </p>

          <p>
            Saya tertarik dengan teknologi, pemrograman, desain website, dan
            hal-hal kreatif lainnya.
          </p>
        </div>

        <div className="info-card">
          <div>
            <span>Nama</span>
            <b>Acha Izzati Dasyen</b>
          </div>

          <div>
            <span>Asal</span>
            <b>Riau, Indonesia</b>
          </div>

          <div>
            <span>Universitas</span>
            <b>Universitas Pendidikan Indonesia</b>
          </div>

          <div>
            <span>Program Studi</span>
            <b>Pendidikan Ilmu Komputer</b>
          </div>
        </div>
      </div>
    </section>
  );
}