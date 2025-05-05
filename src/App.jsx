import './App.css';

function App() {
  return (
    <>
      <header className="header">
        <div className="logo-site">BNG CARGO</div>
        <nav>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">(666) 412-2323</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>
            MAKING GREAT THINGS HAPPEN WITH <br />
            <span>BNG CARGO</span>
          </h1>
          <h4>NEWER TRUCKS</h4>
          <h4>FAST AND SAFE DELIVERY</h4>
          <h4>DEDICATED DISPATCHERS</h4>

          <div className="hero-set">
            <div className="set-item">
              <img src="https://cdn-icons-png.flaticon.com/512/235/235861.png" alt="Delivered More" />
              <h3>Delivered More</h3>
              <b>1,200 +</b>
              <p>Loads Per Week On Average and Many Deliver More</p>
            </div>
            <div className="set-item">
              <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt="Earn More" />
              <h3>Earn More</h3>
              <b>30%</b>
              <p>~ 30% More than the Industry Average</p>
            </div>
            <div className="set-item">
              <img src="https://cdn-icons-png.flaticon.com/512/1828/1828885.png" alt="Live More" />
              <h3>Live More</h3>
              <b>95%</b>
              <p>BNG Cargo's Home-On-Time Goal for Drivers</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
