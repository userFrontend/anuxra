import './App.css'

function App() {
  return (
    <>
      <header>
        <div className="logo-site">
          <img src="/images/logo.png" alt="logo" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">(666) 412-2323</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className='hero'>
          <div className="content">
            <h1>MAKING GREAT THINGS HAPPEN WITH
            <span>BNG CARGO</span></h1>
            <h4>NEWER TRUCKS</h4>
            <h4>FAST AND SAFE DELIVERY</h4>
            <h4>DEDICATED DISPATCHERS</h4>
          </div>
          <div className="hero-set">
            <div className="set-item">
              <img src="" alt="" />
              <h3>Delivered More</h3>
              <b>1,200 +</b>
              <p>Loads Per Week On Average and Many Deliver More</p>
            </div>
            <div className="set-item">
              <img src="" alt="" />
              <h3>Earn More</h3>
              <b>30%</b>
              <p>~ 30% More than the Industry Average</p>
            </div>
            <div className="set-item">
              <img src="" alt="" />
              <h3>Live More</h3>
              <b>95%  </b>
              <p>BNG Cargo's Home-On-Time Goal for Drivers</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
