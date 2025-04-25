import React from "react";

function NavBar() {
  return <nav>NavBar</nav>;
}

function Home() {
  return <div id="home">Home</div>;
}

function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;