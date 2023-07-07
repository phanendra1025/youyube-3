import styled from 'styled-components'

export const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: ${props => props.bgColor};
`
export const NavContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`
export const WebsiteLogo = styled.img`
  width: 100px;
  height: 30px;
  @media screen and (min-width: 768px) {
    width: 120px;
    height: 35px;
  }
`

export const MobileNavItemsContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const MobileNavItem = styled.li`
  list-style: none;
`

export const NavItemsContainer = styled.ul`
  @media screen and (max-width: 576px) {
    display: none;
  }
  @media screen and (min-width: 576px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    padding-left: 0px;
    display: flex;
    align-items: center;
    width: 230px;
    justify-content: space-between;
  }
`
export const NavItem = styled.li`
  list-style: none;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NavItemButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
  margin-right: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
`
export const LogoutButton = styled.button`
  width: 100px;
  height: 32px;
  background-color: transparent;
  color: ${props => (props.isDark === true ? '#ffffff' : '#3b82f6')};
  border: 1px solid ${props => (props.isDark === true ? '#ffffff' : '#3b82f6')};
  border-radius: 3px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 17px;
  cursor: pointer;
`
export const PopupContainer = styled.div`
  width: 330px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  background-color: ${props => (props.bgColor ? '#231f20' : '#ffffff')};
`

export const LogoutPopupMessage = styled.p`
  font-family: 'Roboto';
  font-size: 17px;
  color: ${props => (props.textColor ? '#ffffff' : '#00306e')};
  font-weight: 500;
`
export const LogoutPopupButtonsContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
`

export const LogoutPopupCancelButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: transparent;
  color: #94a3b8;
  cursor: pointer;
  outline: none;
  border-radius: 4px;
  font-weight: 550;
  font-size: 16px;
  border: 1px solid #94a3b8;
`
export const LogoutPopupButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #3b82f6;
  color: #ffffff;
  border-width: 0px;
  cursor: pointer;
  outline: none;
  border-radius: 4px;
  font-weight: 550;
  font-size: 16px;
`

export const PopupMenuContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => (props.bgColor ? '#212121' : '#ffffff')};
  padding: 30px;
`
export const PopupMenuCloseButton = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items : flex-start
  border-width: 0px;
  align-self: flex-end;
  border-width : 0px;
`
export const PopupMenuItemsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  align-items: center;
`
export const PopupMenuListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const PopupListItem = styled.li`
  list-style: none;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const MenuDetailsContainer = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const PopupMenuName = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
`
