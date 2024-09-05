import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SectionOne from "./components/SectionOne";
import happy from "./assets/happy.svg";
import social from "./assets/social.svg";
import mention from "./assets/mention.svg";
import Pricing from "./components/Pricing";


function App() {
  return (
    <>
      <Header />

      <main>
        <SectionOne />
        <div className="xl:pl-[150px] p-4 space-y-[100px] ">
          <Card img={happy} />
          <Card img={social}/>
          <Card img={mention} />
        </div>
        <Pricing />
      </main>
      <Footer />
    </>
  );
}

export default App;
