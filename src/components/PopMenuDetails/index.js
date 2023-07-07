import {Component} from 'react'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'

import NxtWatchContext from '../../Context/NxtWatchContext'

import MenuButtonItem from '../MenuButtonItem'

import {
  PopupMenuContainer,
  NavItemMenuButton,
  PopupMenuCloseButton,
  PopupMenuItemsContainer,
  PopupMenuListContainer,
} from './styledComponents'

const menuItemsList = [
  {
    menuId: 'HOME',
    displayText: 'Home',
  },
  {
    menuId: 'TRENDING',
    displayText: 'Trending',
  },
  {
    menuId: 'GAMING',
    displayText: 'Gaming',
  },
  {
    menuId: 'SAVED_VIDEOS',
    displayText: 'Saved Videos',
  },
]

class PopMenuDetails extends Component {
  state = {
    activeMenuButtonId: menuItemsList[0].menuId,
  }

  changeActiveMenuButton = id => {
    const filterList = menuItemsList.filter(eachItem => eachItem.menuId === id)
    const menu = filterList[0]
    this.setState({activeMenuButtonId: menu.menuId})
  }

  render() {
    const {activeMenuButtonId} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkTheme} = value
          const iconsColor = darkTheme ? '#ffffff' : '#0f0f0f'
          return (
            <Popup
              trigger={
                <NavItemMenuButton type="button">
                  <GiHamburgerMenu color={iconsColor} size="25px" />
                </NavItemMenuButton>
              }
              modal
            >
              {close => (
                <PopupMenuContainer bgColor={darkTheme}>
                  <PopupMenuCloseButton onClick={close}>
                    <AiOutlineClose
                      size="25px"
                      color={darkTheme ? '#ffffff' : '#231f20'}
                    />
                  </PopupMenuCloseButton>
                  <PopupMenuItemsContainer>
                    <PopupMenuListContainer>
                      {menuItemsList.map(eachItem => (
                        <MenuButtonItem
                          details={eachItem}
                          key={eachItem.menuId}
                          isActive={eachItem.menuId === activeMenuButtonId}
                          changeActiveMenuButton={this.changeActiveMenuButton}
                        />
                      ))}
                      {/* <PopupListItem>
                    <MenuDetailsButton>
                      <AiFillHome size="20px" />
                      <PopupMenuName>Home</PopupMenuName>
                    </MenuDetailsButton>
                  </PopupListItem>
                  <PopupListItem>
                    <MenuDetailsButton>
                      <FaFire size="20px" />
                      <PopupMenuName>Trending</PopupMenuName>
                    </MenuDetailsButton>
                  </PopupListItem>
                  <PopupListItem>
                    <MenuDetailsButton>
                      <FaGamepad size="20px" />
                      <PopupMenuName>Gaming</PopupMenuName>
                    </MenuDetailsButton>
                  </PopupListItem>
                  <PopupListItem>
                    <MenuDetailsButton>
                      <BiListPlus size="20px" />
                      <PopupMenuName>Saved Videos</PopupMenuName>
                    </MenuDetailsButton>
                  </PopupListItem> */}
                    </PopupMenuListContainer>
                  </PopupMenuItemsContainer>
                </PopupMenuContainer>
              )}
            </Popup>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default PopMenuDetails
