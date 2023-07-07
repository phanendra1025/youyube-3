import {FaFire, FaGamepad} from 'react-icons/fa'
import {BiListPlus} from 'react-icons/bi'
import {AiFillHome} from 'react-icons/ai'

import NxtWatchContext from '../../Context/NxtWatchContext'
import {
  PopupListItem,
  PopupMenuName,
  MenuDetailsButton,
} from './styledComponents'

const MenuButtonItem = props => {
  const {details, isActive, changeActiveMenuButton} = props
  const {displayText, menuId} = details
  const iconColor = isActive ? '#ff0000' : '#606060'

  const renderIcon = id => {
    switch (id) {
      case 'HOME':
        return <AiFillHome color={iconColor} size="22px" />
      case 'TRENDING':
        return <FaFire color={iconColor} size="22px" />
      case 'GAMING':
        return <FaGamepad color={iconColor} size="22px" />
      case 'SAVED_VIDEOS':
        return <BiListPlus color={iconColor} size="22px" />
      default:
        return null
    }
  }
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkTheme} = value
        const changeButton = () => {
          changeActiveMenuButton(menuId)
        }
        return (
          <PopupListItem bgColor={isActive} isDark={darkTheme}>
            <MenuDetailsButton onClick={changeButton}>
              {renderIcon(menuId)}
              <PopupMenuName fontColor={darkTheme} fontBgColor={isActive}>
                {displayText}
              </PopupMenuName>
            </MenuDetailsButton>
          </PopupListItem>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default MenuButtonItem
