import AboutMe from './About-me/aboutMe';
import './App.css';
import Education from './Education/education';
import Footer from './Footer/footer.jsx';
import './Header/header';
import Header from './Header/header';
import Hobbies from './Hobbies/hobbies';
import Buttons from './Menu/menu';
import Presentation from './Presentation/presentation';
import './Projects/projects.css';
import Projects from './Projects/projects.jsx';
import Skills from './Skills/skills';
import './Skills/skills.css';

function App() {
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
          <h5 className='title'>Formación: </h5>
          <div className='EducationCard'>
            <Education></Education>
          </div>
        </div>
        <div className='projects' id='projects'>
          <h5 className='title'>Proyectos: </h5>
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