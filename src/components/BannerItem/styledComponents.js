import styled from 'styled-components'

export const BannerContainer = styled.div`
  width: 100%;
  height: 245px;
  padding: 10px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  padding-left: 26px;
  padding-right: 26px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;

  @media screen and (min-width: 768px) {
    background-position: left;
    padding: 30px;
  }
`
export const BannerItemsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const BannerWebsiteLogo = styled.img`
  width: 140px;
  height: 36px;
`
export const BannerText = styled.div`
  font-family: 'Roboto';
  color: #0f0f0f;
  font-size: 18px;
  max-width: 250px;
  font-weight: 480;
  @media screen and (min-width: 768px) {
    max-width: 350px;
  }
`
export const BannerGetItNowButton = styled.button`
  width: 120px;
  height: 37px;
  bottom: 1px solid #0f0f0f;
  background-color: transparent;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
`
export const BannerCloseButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  height: 30px;
`
