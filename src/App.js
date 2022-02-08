import AboutMe from './components/AboutMe'
import PersonalInformation from './components/PersonalInformation'
import Education from './components/Education'
import WorkExperience from './components/WorkExperience'
import Skills from './components/Skills'
import References from './components/References'

function App() {
  return (
    <div className="card text-center my-3 pb-3 w-75">
      <PersonalInformation />
      <AboutMe />
      <Education />
      <WorkExperience />
      <Skills />
      <References />
    </div>
  );
}

export default App;
