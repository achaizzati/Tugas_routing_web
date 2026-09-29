export default function Education() {
  return (
    <section className="section education">
      <div className="section-title">
        <p>MY JOURNEY</p>
        <h2>Education</h2>
      </div>

      <div className="timeline">

        {/* UNIVERSITAS */}
        <div className="timeline-item">
          <div className="dot"></div>

          <div className="education-card">
            <span>2025 — Present</span>
            <h3>Universitas Pendidikan Indonesia</h3>
            <p>Pendidikan Ilmu Komputer</p>
            <small>
              Fakultas Pendidikan Matematika dan Ilmu Pengetahuan Alam
            </small>
          </div>
        </div>

        {/* SMK */}
        <div className="timeline-item">
          <div className="dot"></div>

          <div className="education-card">
            <span>2022 — 2025</span>
            <h3>SMK Negeri 1 Mandau</h3>
            <p>Teknik Komputer dan Jaringan</p>
            <small>Duri, Riau, Indonesia</small>
          </div>
        </div>

        {/* SMP */}
        <div className="timeline-item">
          <div className="dot"></div>

          <div className="education-card">
            <span>SMP</span>
            <h3>SMP IT Al-Kautsar</h3>
            <p>Pendidikan Sekolah Menengah Pertama</p>
            <small>Riau, Indonesia</small>
          </div>
        </div>

        {/* SD */}
        <div className="timeline-item">
          <div className="dot"></div>

          <div className="education-card">
            <span>SD</span>
            <h3>SD Negeri 22 Bathin Solapan</h3>
            <p>Pendidikan Sekolah Dasar</p>
            <small>Bathin Solapan, Riau, Indonesia</small>
          </div>
        </div>

      </div>
    </section>
  );
}