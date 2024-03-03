import Navbar from "./componants/navBar/navbar";
import Intro from "./componants/intro/intro"
import Skills from "./componants/skills/skills"
import ContactMe from './componants/contactMe/contactme'



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <ContactMe/>
    </div>
  );
}

export default App;
