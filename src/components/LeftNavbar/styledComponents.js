import styled from 'styled-components'

export const LeftNavbar = styled.nav`
  @media screen and (max-width: 576px) {
    display: none;
  }
  @media screen and (min-width: 576px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    height: 90vh;
    width: 250px;
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
