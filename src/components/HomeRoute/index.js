import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {BiSearch} from 'react-icons/bi'
import Navbar from '../Navbar'
import BannerItem from '../BannerItem'
import NxtWatchContext from '../../Context/NxtWatchContext'
import {
  LeftNavBarAndHomeContainer,
  HomeContainer,
  SearchBarContainer,
  VideosSearchBar,
  SearchButton,
  VideosContainer,
  VideosListContainer,
  SearchContainer,
  NoResultFoundContainer,
  NoResultImage,
  NoResultHeading,
  NoResultMessage,
  NoResultRetryButton,
} from './styledComponents'
import VideoThumbnailItem from '../VideoThumbnailItem'
import LeftNavBar from '../LeftNavbar'

const videoAPIConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProcess: 'IN_PROCESS',
}

class HomeRoute extends Component {
  state = {
    videosList: [],
    searchQuery: '',
    videoAPIStatus: videoAPIConstants.initial,
  }

  componentDidMount() {
    this.getTheVideosList()
  }

  getTheVideosList = async () => {
    this.setState({videoAPIStatus: videoAPIConstants.inProcess})
    const {searchQuery} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchQuery}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const {videos} = data
      const updatedVideoData = videos.map(eachData => ({
        channel: {
          name: eachData.channel.name,
          profileImageUrl: eachData.channel.profile_image_url,
        },
        id: eachData.id,
        publishedAt: eachData.published_at,
        thumbnailUrl: eachData.thumbnail_url,
        title: eachData.title,
        viewCount: eachData.view_count,
      }))
      this.setState({
        videosList: updatedVideoData,
        videoAPIStatus: videoAPIConstants.success,
      })
    } else {
      this.setState({videoAPIStatus: videoAPIConstants.failure})
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchQuery: event.target.value})
  }

  renderTheVideosSuccessView = () => {
    const {videosList} = this.state
    const videosListLength = videosList.length

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkTheme} = value
          if (videosListLength === 0) {
            return (
              <NoResultFoundContainer>
                <NoResultImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "
                  alt="no videos"
                />
                <NoResultHeading darkMode={darkTheme}>
                  No Search results found
                </NoResultHeading>
                <NoResultMessage>
                  Try different key words or remove search filter
                </NoResultMessage>
                <NoResultRetryButton type="button">Retry</NoResultRetryButton>
              </NoResultFoundContainer>
            )
          }
          return (
            <VideosListContainer>
              {videosList.map(eachVideo => (
                <VideoThumbnailItem
                  thumbnailDetails={eachVideo}
                  key={eachVideo.id}
                />
              ))}
            </VideosListContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderTheVideosFailureView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkTheme} = value
        const errorImageUrl = darkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <NoResultFoundContainer>
            <NoResultImage src={errorImageUrl} alt="no videos" />
            <NoResultHeading darkMode={darkTheme}>
              Oops! Something Went Wrong
            </NoResultHeading>
            <NoResultMessage>
              We are having some trouble to complete your request. Please try
              again.
            </NoResultMessage>
            <NoResultRetryButton type="button">Retry</NoResultRetryButton>
          </NoResultFoundContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderTheVideosLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

  renderTheVideosContainer = () => {
    const {videoAPIStatus} = this.state
    switch (videoAPIStatus) {
      case videoAPIConstants.success:
        return this.renderTheVideosSuccessView()
      case videoAPIConstants.failure:
        return this.renderTheVideosFailureView()
      case videoAPIConstants.inProcess:
        return this.renderTheVideosLoadingView()
      default:
        return null
    }
  }

  render() {
    const {searchQuery} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkTheme} = value
          console.log(darkTheme)
          return (
            <>
              <Navbar />
              <LeftNavBarAndHomeContainer>
                <LeftNavBar />
                <>
                  {' '}
                  <BannerItem />
                  <HomeContainer darkMode={darkTheme}>
                    <SearchContainer>
                      <SearchBarContainer darkMode={darkTheme}>
                        <VideosSearchBar
                          darkMode={darkTheme}
                          type="search"
                          placeholder="Search"
                          value={searchQuery}
                          onChange={this.onChangeSearchInput}
                        />
                        <SearchButton
                          onClick={this.getTheVideosList}
                          darkMode={darkTheme}
                        >
                          <BiSearch
                            size="21px"
                            color={darkTheme ? '#909090' : '#616e7c'}
                          />
                        </SearchButton>
                      </SearchBarContainer>
                    </SearchContainer>
                    <VideosContainer>
                      {this.renderTheVideosContainer()}
                    </VideosContainer>
                  </HomeContainer>
                </>
              </LeftNavBarAndHomeContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default HomeRoute
