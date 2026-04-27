

function Installation() {
  return (
    <div className="install">

      {/* HERO */}
      <section className="install-hero">
        <h1>React Installation Guide</h1>
        <p>Follow these simple steps to start your React project</p>
      </section>

      {/* STEPS */}
      <section className="steps">

        <div className="step">1. Create a folder on Desktop (React Course)</div>
        <div className="step">2. Click on folder path / Open CMD / Terminal</div>
        <div className="step">3. Run: npm create vite</div>
        <div className="step">4. Enter project name</div>
        <div className="step">5. Select React / JavaScript</div>
        <div className="step">6. Select Yes</div>
        <div className="step">7. Select No</div>
        <div className="step">8. cd "project name"</div>
        <div className="step">9. npm install</div>
        <div className="step">10. code .</div>
        <div className="step">11. npm run dev</div>

      </section>

    </div>
  );
}

export default Installation;