import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import imageKotlin from '../../assets/images/skills/logo-android.png';
import imageBootstrap from '../../assets/images/skills/logo-bootstrap.svg';
import imageCSS from '../../assets/images/skills/logo-css.svg';
import imageGit from '../../assets/images/skills/logo-git.svg';
import imageGitHub from '../../assets/images/skills/logo-github.svg';
import imageHTML from '../../assets/images/skills/logo-html.svg';
import imageJava from '../../assets/images/skills/logo-java.svg';
import imageJS from '../../assets/images/skills/logo-js.svg';
import imageMySQL from '../../assets/images/skills/logo-mysql.png';
import imageNode from '../../assets/images/skills/logo-node.svg';
import imagePython from '../../assets/images/skills/logo-python.svg';
import imageReact from '../../assets/images/skills/logo-react.svg';
import './skills.css';

const data = [
  {
    "id": 1,
    "image": imageHTML,
    "title": "HTML"
  },
  {
    "id": 2,
    "image": imageJS,
    "title": "JavaScript"
  },
  {
    "id": 3,
    "image": imageCSS,
    "title": "CSS"
  },
  {
    "id": 4,
    "image": imageBootstrap,
    "title": "Bootstrap"
  },
  {
    "id": 5,
    "image": imageReact,
    "title": "React"
  },
  {
    "id": 6,
    "image": imageNode,
    "title": "Node.Js"
  },
  {
    "id": 7,
    "image": imageJava,
    "title": "Java"
  },
  {
    "id": 8,
    "image": imagePython,
    "title": "Python"
  },
  {
    "id": 9,
    "image": imageMySQL,
    "title": "MySQL"
  },
  {
    "id": 10,
    "image": imageGit,
    "title": "Git"
  },
  {
    "id": 11,
    "image": imageGitHub,
    "title": "GitHub"
  },
  {
    "id": 12,
    "image": imageKotlin,
    "title": "Kotlin"
  }
];

function skillsIteration() {
  return (
    data.map((data) => {
      return (
        <Container fluid className='fluid'>
          <Card>
            <div className="imgBody">
              <Card.Img variant="top" src={data.image} className="imageCard" />
            </div>
            <Card.Body className="cardBody">
              <Card.Title className="cardTitle">{data.title}</Card.Title>
            </Card.Body>
          </Card>
        </Container>
      );
    }
    ))
};

export default skillsIteration;