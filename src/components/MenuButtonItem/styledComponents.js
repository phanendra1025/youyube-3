import styled from 'styled-components'

export const PopupListItem = styled.li`
  list-style: none;
  width: 100vw;
  display: flex;
  align-items: center;
  margin: 0px;
  justify-content: center;
  background-color: ${props => {
    if (props.bgColor) {
      if (props.isDark) {
        return ' #606060'
      }
      return ' #e2e8f0'
    }
    return 'transparent'
  }};
  padding: 8px;
`
export const MenuDetailsButton = styled.button`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: transparent;
  border-width: 0px;
`

export const PopupMenuName = styled.p`
  font-family: 'Roboto';
  font-size: 19px;
  font-weight: ${props => (props.fontBgColor ? 'bold' : 400)};
  margin: 0px;
  text-align: left;
  width: 150px;
  color: ${props => (props.fontColor ? '#cccccc' : '#181818')};
`
