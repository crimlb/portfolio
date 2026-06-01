import imgHero from '../assets/imgHero.webp'

function Hero() {
    return (
        <div id="home" className="container-fluid px-lg-5 mt-3 bg-black border-bottom border-warning ">
            <div className="row flex-lg-row align-items-center g-5 py-5">

                <div className="col-10 col-sm-8 col-lg-6 mx-auto mx-lg-0 justify-content-center d-flex">
                    <img
                        src={imgHero}
                        className="d-block mx-lg-auto img-fluid w-75 mt-5"
                        alt="imgHero"
                        loading="lazy"
                    />
                </div>

                <div className="col-lg-6 ps-lg-5 text-center text-lg-start">
                    <h1 className="display-6 fw-normal text-secondary lh-1 mt-sm-2 mt-md-5 mb-5 titoloHero text-uppercase">
                        Il design parla.
                      <br />  Il codice ascolta.
                    </h1>
                    <p className="lead mb-4 fs-4 mb-5">
                        Sviluppo frontend con occhio da designer e mente da developer.
                       <br /> Benvenuto nel posto dove estetica e funzione non fanno a pugni.
                    </p>
                    <div className="d-grid gap-2 d-md-flex justify-content-center justify-content-lg-start">
                        <a href="#progetti" type="button" className="btn btn-outline-primary btn-lg px-4">
                            Scopri i miei progetti
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;