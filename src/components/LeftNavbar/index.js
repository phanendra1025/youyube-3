import {Component} from 'react'
import NxtWatchContext from '../../Context/NxtWatchContext'
import {
  LeftNavbarContentContainer,
  LeftNavbarMenuContainer,
} from './styledComponents'
import MenuButtonItem from '../MenuButtonItem'

const leftNavbarMenuItemsList = [
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
    activeLeftNavbarMenuButtonId: leftNavbarMenuItemsList[0].menuId,
  }

  changeActiveMenuButton = id => {
    const filterList = leftNavbarMenuItemsList.filter(
      eachItem => eachItem.menuId === id,
    )
    const menu = filterList[0]
    this.setState({activeLeftNavbarMenuButtonId: menu.menuId})
  }

  render() {
    const {activeLeftNavbarMenuButtonId} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkTheme} = value
          console.log(darkTheme)
          return (
            <LeftNavBar>
              <LeftNavbarContentContainer>
                <LeftNavbarMenuContainer>
                  {leftNavbarMenuItemsList.map(eachItem => (
                    <MenuButtonItem
                      details={eachItem}
                      key={eachItem.menuId}
                      isActive={
                        eachItem.menuId === activeLeftNavbarMenuButtonId
                      }
                      changeActiveMenuButton={this.changeActiveMenuButton}
                    />
                  ))}
                </LeftNavbarMenuContainer>
              </LeftNavbarContentContainer>
            </LeftNavBar>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default LeftNavBar
