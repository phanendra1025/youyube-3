import styled from 'styled-components'

export const PopupMenuContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => (props.bgColor ? '#212121' : '#ffffff')};
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const NavItemMenuButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
  margin-right: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  margin : 15px;
`
export const PopupMenuItemsContainer = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-grow: 1;
  margin: 0px;
`
export const PopupMenuListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 0px;
`
