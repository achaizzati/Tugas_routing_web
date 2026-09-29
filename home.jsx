import { useState } from "react";
import heroImg from "../assets/foto-aca.jpg";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <section id="home" className="home">
      <div className="home-text">
        <p className="welcome">WELCOME TO MY SPACE ✦</p>

        <h1>
          Haiii! I'm
          <br />
          <span>Acha.</span>
        </h1>

        <p className="description">
          Mahasiswa Pendidikan Ilmu Komputer yang sedang belajar, berkembang,
          dan mengeksplorasi dunia teknologi.
        </p>

        <div className="home-buttons">
          <button
            className="hello-button"
            onClick={() => setCount(count + 1)}
          >
            ♡ {count}
          </button>
        </div>
      </div>

      <div className="home-photo">
        <div className="circle-bg"></div>

        <div className="photo-wrapper">
          <img src={heroImg} alt="Acha" />
        </div>

        <div className="floating-card">
          <span>✦</span>
          <div>
            <b>Creative Mind</b>
            <small>Always learning</small>
          </div>
        </div>
      </div>
    </section>
  );
}