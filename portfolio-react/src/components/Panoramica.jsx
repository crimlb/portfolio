function Panoramica() {
  const stats = [
    { value: "10+", label: "Tecnologie" },
    { value: "4", label: "Corsi completati" },
    { value: "2+", label: "Anni di studio" },
  ];

  return (
    <div className="container mt-4 mb-0 bg-sezione-pan rounded-4 p-5 pt-4 border border-warning border-2">
      <h1 className="text-warning text-uppercase text-center mb-4 fs-1 fw-normal mt-1" style={{ letterSpacing: "0.1em" }}>
        Panoramica
      </h1>
      <div className="row text-center justify-content-center g-4">
        {stats.map((s) => (
          <div key={s.label} className="col-12 col-md-4 d-flex justify-content-center">
            <div className="p-4 py-lg-3 py-xl-4 py-xxl-5 rounded-4 bg-panoramica text-light stat-card h-100 w-100 d-flex flex-column align-items-center justify-content-center">
              <h2 className="display-6 fw-bold mb-2 text-primary">
                {s.value}
              </h2>
              <p className="mb-0 text-uppercase small opacity-75 text-warning fs-6">
                {s.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Panoramica;