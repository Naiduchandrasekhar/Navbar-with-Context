// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const className = isDarkTheme ? 'darkThemeClass' : 'lightThemeClass'

      const classNameText = isDarkTheme ? 'textDark' : 'textLight'

      const themeImageURL = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const onThemeChange = () => {
        toggleTheme()
      }

      return (
        <div className={`navBarContainer ${className}`}>
          <div className="navbar">
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                alt="website logo"
                className="websiteLogo"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                alt="website logo"
                className="websiteLogo"
              />
            )}

            <ul className="homeAboutContainer">
              <Link to="/" className={`link ${classNameText}`}>
                <li>Home</li>
              </Link>
              <Link to="/about" className={`link ${classNameText}`}>
                <li>About</li>
              </Link>
            </ul>
            <button testid="theme" type="button" className="button">
              <img
                src={themeImageURL}
                alt="theme"
                className="theme"
                onClick={onThemeChange}
              />
            </button>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
