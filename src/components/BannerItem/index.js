import {Component} from 'react'
import {IoIosClose} from 'react-icons/io'
import {
  BannerContainer,
  BannerWebsiteLogo,
  BannerItemsContainer,
  BannerText,
  BannerGetItNowButton,
  BannerCloseButton,
} from './styledComponents'

class BannerItem extends Component {
  state = {
    isBannerVisible: true,
  }

  removeBannerItem = () => {
    this.setState({isBannerVisible: false})
  }

  render() {
    const {isBannerVisible} = this.state
    return (
      <>
        {' '}
        {isBannerVisible && (
          <BannerContainer>
            <BannerItemsContainer>
              <BannerWebsiteLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="nxt watch logo"
              />
              <BannerText>
                Buy Nxt Watch Premium prepaid plans With UPI
              </BannerText>
              <BannerGetItNowButton type="button">
                GET IT NOW
              </BannerGetItNowButton>
            </BannerItemsContainer>
            <BannerCloseButton type="button" onClick={this.removeBannerItem}>
              <IoIosClose size="30px" color="#000000" />
            </BannerCloseButton>
          </BannerContainer>
        )}{' '}
      </>
    )
  }
}

export default BannerItem
