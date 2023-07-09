import styled from 'styled-components'

export const LeftNavbarContainer = styled.nav`
  width: 25%;
  background-color: ${props => (props.darkMode ? ' #212121' : '#ffffff')};
  width: 240px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const LeftNavbarContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const LeftNavbarMenuContainer = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
`
