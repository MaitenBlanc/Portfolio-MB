import AboutMe from './About-me/aboutMe';
import './App.css';
import Education from './Education/education';
import './Header/header';
import Header from './Header/header';
import Hobbies from './Hobbies/hobbies';
import Buttons from './Menu/menu';
import Presentation from './Presentation/presentation';
import Projects from './Projects/projects.jsx';
import Skills from './Skills/skills';
import './Skills/skills.css';
import './Projects/projects.css';
import Footer from './Footer/footer.jsx';

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
        <h5 className='titleSkills' id='titleSkills'>Skills: </h5>
        <div className='skillsCard'>
          <Skills></Skills>
        </div>
        <div className='hobbies' id='hobbies'>
          <h5 className='titleHobbies'>Hobbies: </h5>
          <div className='hobbiesCard'>
            <Hobbies></Hobbies>
          </div>
        </div>
        <div className='education' id='education'>
          <h5 className='titleEducation'>Formación: </h5>
          <div className='EducationCard'>
            <Education></Education>
          </div>
        </div>
        <div className='projects' id='projects'>
          <h5 className='titleProjects'>Proyectos: </h5>
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