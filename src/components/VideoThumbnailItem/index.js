import {formatDistanceToNow} from 'date-fns'

import NxtWatchContext from '../../Context/NxtWatchContext'

import {
  ThumbnailItem,
  ThumbnailContainer,
  ThumbnailImage,
  ThumbnailDetailsContainer,
  ThumbnailChannelImage,
  ThumbnailDetails,
  ThumbnailTitle,
  ThumbnailText,
  ThumbnailBottomContainer,
  ThumbnailDetailsList,
  ThumbnailListItem,
} from './styledComponents'

const VideoThumbnailItem = props => {
  const {thumbnailDetails} = props
  const {
    id,
    channel,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = thumbnailDetails
  const {name, profileImageUrl} = channel
  const newDate = formatDistanceToNow(new Date(publishedAt))
  const splitedDate = newDate.split(' ')
  const years = splitedDate[1]
  console.log(id)
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <ThumbnailItem>
            <ThumbnailContainer>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <ThumbnailDetailsContainer>
                <ThumbnailChannelImage
                  src={profileImageUrl}
                  alt="channel logo"
                />
                <ThumbnailDetails>
                  <ThumbnailTitle dark={darkTheme}>{title}</ThumbnailTitle>
                  <ThumbnailBottomContainer>
                    <ThumbnailText>{name}</ThumbnailText>
                    <ThumbnailDetailsList>
                      <ThumbnailListItem>{viewCount}</ThumbnailListItem>
                      <ThumbnailListItem>{years} years ago</ThumbnailListItem>
                    </ThumbnailDetailsList>
                  </ThumbnailBottomContainer>
                </ThumbnailDetails>
              </ThumbnailDetailsContainer>
            </ThumbnailContainer>
          </ThumbnailItem>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideoThumbnailItem
