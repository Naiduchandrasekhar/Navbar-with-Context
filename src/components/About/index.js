// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const classHomeText = isDarkTheme ? 'textDarkHead' : 'textLightHead'
      const classBackGroundColor = isDarkTheme
        ? 'backgroundBlack'
        : 'backgroundWhite'
      return (
        <div className="aboutMainContainer">
          <Navbar />
          {isDarkTheme ? (
            <div className={`aboutContainer ${classBackGroundColor}`}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="about"
                className="about"
              />
              <h1 className={`homeText ${classHomeText}`}>About</h1>
            </div>
          ) : (
            <div className={`aboutContainer ${classBackGroundColor}`}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="about"
                className="about"
              />
              <h1 className={`homeText ${classHomeText}`}>About</h1>
            </div>
          )}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
