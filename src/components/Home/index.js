// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const classHomeText = isDarkTheme ? 'textDarkHead' : 'textLightHead'

      const classBackGroundColor = isDarkTheme
        ? 'backgroundBlack'
        : 'backgroundWhite'

      return (
        <div className="homeMainContainer">
          <Navbar />
          <div className={`homeContainer ${classBackGroundColor}`}>
            {isDarkTheme ? (
              <>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                  alt="home"
                  className="home"
                />
                <h1 className={`homeText ${classHomeText}`}>Home</h1>
              </>
            ) : (
              <>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                  alt="home"
                  className="home"
                />
                <h1 className={`homeText ${classHomeText}`}>Home</h1>
              </>
            )}
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
