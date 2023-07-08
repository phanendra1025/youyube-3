import styled from 'styled-components'

export const ThumbnailItem = styled.li`
  list-style: none;
  width: 100%;
  margin: 15px;
  @media screen and (min-width: 576px) {
    max-width: 300px;
  }
`
export const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  @media screen and (min-width: 576px) {
    max-width: 300px;
  }
`
export const ThumbnailImage = styled.img`
  width: 100%;
`
export const ThumbnailDetailsContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: transparent;
  align-self: flex-start;
  padding-top: 15px;
`
export const ThumbnailChannelImage = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`
export const ThumbnailDetails = styled.div`
  display: flex;
  flex-direction: column;
`
export const ThumbnailTitle = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  margin: 0px;
  color: ${props => (props.dark ? '#ffffff' : '#0f0f0f')};
`
export const ThumbnailBottomContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`
export const ThumbnailText = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  margin-right: 20px;
  color: #616e7c;
`
export const ThumbnailListItem = styled.li`
  list-style: disc;
  font-family: 'Roboto';
  font-size: 12px;
  margin-right: 25px;
  color: #616e7c;
`
export const ThumbnailDetailsList = styled.ul`
  padding: 0px;
  display: flex;
  align-items: center;
`
