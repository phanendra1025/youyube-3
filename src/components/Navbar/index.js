import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import {CgSun} from 'react-icons/cg'

import {FiLogOut} from 'react-icons/fi'
import NxtWatchContext from '../../Context/NxtWatchContext'
import PopMenuDetails from '../PopMenuDetails'
import {
  NavContainer,
  NavContentContainer,
  WebsiteLogo,
  MobileNavItemsContainer,
  MobileNavItem,
  NavItemButton,
  NavItemsContainer,
  NavItem,
  ProfileImage,
  LogoutButton,
  PopupContainer,
  LogoutPopupMessage,
  LogoutPopupButtonsContainer,
  LogoutPopupCancelButton,
  LogoutPopupButton,
} from './styledComponents'

class Navbar extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkTheme, changeTheTheme} = value
          const websiteLogo = darkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          const iconsColor = darkTheme ? '#ffffff' : '#0f0f0f'
          const backgroundColor = darkTheme ? '#0f0f0f' : '#ffffff'
          const logout = () => {
            const {history} = this.props
            Cookies.remove('jwt_token')
            history.replace('/login')
          }
          return (
            <NavContainer bgColor={backgroundColor}>
              <NavContentContainer>
                <WebsiteLogo src={websiteLogo} alt="website logo" />

                <MobileNavItemsContainer>
                  <MobileNavItem>
                    <NavItemButton type="button" onClick={changeTheTheme}>
                      {darkTheme ? (
                        <CgSun color={iconsColor} size="21px" />
                      ) : (
                        <FaMoon color={iconsColor} size="21px" />
                      )}
                    </NavItemButton>
                  </MobileNavItem>

                  <MobileNavItem>
                    <PopMenuDetails />
                  </MobileNavItem>

                  <MobileNavItem>
                    <Popup
                      trigger={
                        <NavItemButton type="button">
                          <FiLogOut color={iconsColor} size="25px" />
                        </NavItemButton>
                      }
                      modal
                      className="popup-content"
                    >
                      {close => (
                        <PopupContainer bgColor={darkTheme}>
                          <LogoutPopupMessage textColor={darkTheme}>
                            Are you sure want to logout?
                          </LogoutPopupMessage>
                          <LogoutPopupButtonsContainer>
                            <LogoutPopupCancelButton onClick={close}>
                              Cancel
                            </LogoutPopupCancelButton>
                            <LogoutPopupButton onClick={logout}>
                              Logout
                            </LogoutPopupButton>
                          </LogoutPopupButtonsContainer>
                        </PopupContainer>
                      )}
                    </Popup>
                  </MobileNavItem>
                </MobileNavItemsContainer>

                <NavItemsContainer>
                  <NavItem>
                    <NavItemButton type="button" onClick={changeTheTheme}>
                      {darkTheme ? (
                        <CgSun color={iconsColor} size="25px" />
                      ) : (
                        <FaMoon color={iconsColor} size="25px" />
                      )}
                    </NavItemButton>
                  </NavItem>

                  <NavItem>
                    <NavItemButton type="button">
                      <ProfileImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                        atl="profile"
                      />
                    </NavItemButton>
                  </NavItem>

                  <NavItem>
                    <Popup
                      trigger={
                        <LogoutButton
                          type="button"
                          isDark={darkTheme}
                          onClick={logout}
                        >
                          Logout
                        </LogoutButton>
                      }
                      modal
                      className="popup-content"
                    >
                      {close => (
                        <PopupContainer bgColor={darkTheme}>
                          <LogoutPopupMessage textColor={darkTheme}>
                            Are you sure want to logout?
                          </LogoutPopupMessage>
                          <LogoutPopupButtonsContainer>
                            <LogoutPopupCancelButton onClick={close}>
                              Cancel
                            </LogoutPopupCancelButton>
                            <LogoutPopupButton onClick={logout}>
                              Logout
                            </LogoutPopupButton>
                          </LogoutPopupButtonsContainer>
                        </PopupContainer>
                      )}
                    </Popup>
                  </NavItem>
                </NavItemsContainer>
              </NavContentContainer>
            </NavContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default withRouter(Navbar)
