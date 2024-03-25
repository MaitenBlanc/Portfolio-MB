import { useTranslation } from 'react-i18next';
import './App.css';
import AboutMe from './components/About-me/aboutMe.jsx';
import Education from './components/Education/education.js';
import Footer from './components/Footer/footer.jsx';
import Header from './components/Header/header.jsx';
import Hobbies from './components/Hobbies/hobbies.js';
import Buttons from './components/Menu/menu.jsx';
import Presentation from './components/Presentation/presentation.jsx';
import Projects from './components/Projects/projects.jsx';
import './components/Skills/skills.css';
import Skills from './components/Skills/skills.js';

function App() {

  const [t, i18n] = useTranslation('global');

  return (
    <div className="App">
      <header className="App-header">
        <Buttons></Buttons>
        <Header></Header>
        <Presentation></Presentation>
        <div className='aboutMe' id='aboutMe'>
          <AboutMe></AboutMe>
        </div>
        <h5 className='title' id='titleSkills'>Skills: </h5>
        <div className='skillsCard'>
          <Skills></Skills>
        </div>
        <div className='hobbies' id='hobbies'>
          <h5 className='title'>Hobbies: </h5>
          <div className='hobbiesCard'>
            <Hobbies></Hobbies>
          </div>
        </div>
        <div className='education' id='education'>
          <h5 className='title'>{t("education.title")}: </h5>
          <div className='EducationCard'>
            <Education></Education>
          </div>
        </div>
        <div className='projects' id='projects'>
          <h5 className='title'>{t("projects.title")}: </h5>
          <div className='projectsCard'>
            <Projects></Projects>
          </div>
        </div>
        <div className='contact' id='contact'>
          <Footer></Footer>
        </div>
      </header>
    </div>
  );
}

export default App;