import {Component} from 'react'
import {
  LeftNavbarContainer,
  LeftNavbarContentContainer,
  LeftNavbarMenuContainer,
} from './styledComponents'
import MenuButtonItem from '../MenuButtonItem'
import NxtWatchContext from '../../Context/NxtWatchContext'

const LeftMenuItemsList = [
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

class LeftNavBar extends Component {
  state = {
    activeLeftMenuButtonId: LeftMenuItemsList[0].menuId,
  }

  changeActiveMenuButton = id => {
    const filterList = LeftMenuItemsList.filter(
      eachItem => eachItem.menuId === id,
    )
    const menu = filterList[0]
    this.setState({activeLeftMenuButtonId: menu.menuId})
  }

  render() {
    const {activeLeftMenuButtonId} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <LeftNavbarContainer darkMode={darkTheme}>
              <LeftNavbarContentContainer>
                <LeftNavbarMenuContainer>
                  {LeftMenuItemsList.map(eachItem => (
                    <MenuButtonItem
                      details={eachItem}
                      key={eachItem.menuId}
                      isActive={eachItem.menuId === activeLeftMenuButtonId}
                      changeActiveMenuButton={this.changeActiveMenuButton}
                    />
                  ))}
                </LeftNavbarMenuContainer>
              </LeftNavbarContentContainer>
            </LeftNavbarContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default LeftNavBar
