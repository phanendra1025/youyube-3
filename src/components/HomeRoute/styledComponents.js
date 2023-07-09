import styled from 'styled-components'

export const LeftNavbarAndHomeRouteContainer = styled.div`
  display: flex;
  width: 100%;
`

export const HomeRouteContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const HomeContainer = styled.div`
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => (props.darkMode ? '#181818' : '#f4f4f4')};
  @media screen and (min-width: 768px) {
    padding: 20px;
  }
`
export const SearchContainer = styled.div`
  width: 100%;
  padding: 20px;
`
export const SearchBarContainer = styled.div`
  width: 100%;
  min-width: 350px;
  max-width: 500px;
  display: flex;
  align-items: center;
  background-color: ${props => (props.darkMode ? '#212121' : '#f1f1f1')};
  height: 35px;
  border: 1px solid ${props => (props.darkMode ? ' #909090' : '#ebebeb')};
  align-self: flex-start;
`
export const VideosSearchBar = styled.input`
  width: 85%;
  height: 100%;
  padding: 6px;
  font-family: 'Roboto';
  background-color: ${props => (props.darkMode ? '#212121' : '#ffffff')};
  border-width: 0px;
  padding-left: 10px;
  font-size: 16px;
  outline: none;
  color: ${props => (props.darkMode ? '#ffffff' : '#212121')};
`
export const SearchButton = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 15%;
  border-width: 0px;
  background-color: ${props => (props.darkMode ? '#424242' : '#ebebeb ')};
  border: 1.5px solid ${props => (props.darkMode ? ' #909090' : '#ebebeb')};
  border-right-width: 0px;
  border-top-width: 0px;
  border-bottom: 0px;
  outline: none;
  cursor: pointer;
`
export const VideosContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  width: 100%;
`
export const VideosListContainer = styled.ul`
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0px;
`
export const NoResultFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
export const NoResultImage = styled.img`
  width: 250px;
`
export const NoResultHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 19px;
  color: ${props => (props.darkMode ? '#ffffff' : '#212121')};
  font-weight: 480;
`
export const NoResultMessage = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #64748b;
  margin: 0px;
  font-weight: 480;
  width: 300px;
  text-align: center;
`
export const NoResultRetryButton = styled.button`
  width: 90px;
  height: 36px;
  color: #ffffff;
  font-family: 'Roboto';
  border-width: 0px;
  border-radius: 3px;
  background-color: #4f46e5;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
`
