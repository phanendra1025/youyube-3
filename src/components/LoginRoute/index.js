import {Component} from 'react'

import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import NxtWatchContext from '../../Context/NxtWatchContext'

import {
  LoginRouteContainer,
  LoginForm,
  WebsiteLogoImage,
  InputsContainer,
  Labels,
  LoginInputs,
  ShowPasswordContainer,
  PasswordCheckBox,
  ShowPasswordLabel,
  LoginButton,
  LoginErrorMessage,
} from './styledComponents'

class LoginRoute extends Component {
  state = {
    isPasswordVisible: true,
    username: '',
    password: '',
    errorMessage: '',
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    console.log(jwtToken)
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmissionFailure = Message => {
    this.setState({errorMessage: `*${Message}`})
    this.setState({username: '', password: ''})
  }

  submitCredentials = async () => {
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmissionFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeCheckBox = () => {
    this.setState(prevState => ({
      isPasswordVisible: !prevState.isPasswordVisible,
    }))
  }

  render() {
    const {isPasswordVisible, username, password, errorMessage} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkTheme} = value
          const loginWebsiteLogo = darkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <LoginRouteContainer bgColor={darkTheme}>
              <LoginForm formBgColor={darkTheme}>
                <WebsiteLogoImage src={loginWebsiteLogo} alt="website logo" />
                <InputsContainer>
                  <Labels isDark={darkTheme} htmlFor="username">
                    USERNAME
                  </Labels>
                  <LoginInputs
                    isDark={darkTheme}
                    id="username"
                    onChange={this.onChangeUsername}
                    type="text"
                    placeholder="Username"
                    value={username}
                  />
                </InputsContainer>
                <InputsContainer>
                  <Labels isDark={darkTheme} htmlFor="password">
                    PASSWORD
                  </Labels>
                  <LoginInputs
                    isDark={darkTheme}
                    id="password"
                    type={isPasswordVisible ? 'password' : 'text'}
                    placeholder="Password"
                    onChange={this.onChangePassword}
                    value={password}
                  />
                </InputsContainer>
                <ShowPasswordContainer>
                  <PasswordCheckBox
                    onChange={this.onChangeCheckBox}
                    id="showPassword"
                    type="checkbox"
                  />
                  <ShowPasswordLabel isDark={darkTheme} htmlFor="showPassword">
                    Show Password
                  </ShowPasswordLabel>
                </ShowPasswordContainer>
                <LoginButton onClick={this.submitCredentials} type="button">
                  Login
                </LoginButton>
                <LoginErrorMessage>{errorMessage}</LoginErrorMessage>
              </LoginForm>
            </LoginRouteContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default LoginRoute
