import styled from 'styled-components'

export const LoginRouteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => (props.bgColor ? '#212121' : '#ffffff')};
`
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 330px;
  padding: 30px;
  padding-top: 40px;
  padding-bottom: 45px;
  box-shadow: ${props =>
    props.formBgColor ? null : '0px 4px 16px 0px #bfbfbfbf'};
  border-radius: 8px;
  background-color: ${props => (props.formBgColor ? '#000000' : '#ffffff')};
`

export const WebsiteLogoImage = styled.img`
  width: 130px;
  height: 30px;
  margin-bottom: 10px;
`
export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 20px;
`

export const Labels = styled.label`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#ffffff' : '#7e858e')};
  font-size: 11.5px;
  margin-left: 2px;
  font-weight: bold;
`
export const LoginInputs = styled.input`
  width: 100%;
  height: 34px;
  border-radius: 3px;
  outline: none;
  font-size: 13px;
  font-family: 'Roboto';
  margin-top: 5px;
  padding: 5px;
  padding-left: 10px;
  border: ${props => (props.isDark ? '1px' : '2px')} solid
    ${props => (props.isDark ? '#475569' : '#e2e8f0')};
  margin-bottom: 5px;
  background-color: transparent;
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-top: 7px;
`
export const PasswordCheckBox = styled.input`
  width: 15px;
  height: 15px;
  cursor: pointer;
`
export const ShowPasswordLabel = styled.label`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#ffffff' : '##0f0f0f')};
  font-size: 13px;
  margin-left: 5px;
  cursor: pointer;
`
export const LoginButton = styled.button`
  font-family: 'Roboto';
  color: #ffffff;
  background-color: #3b82f6;
  width: 100%;
  height: 36px;
  font-weight: 550;
  border-width: 0px;
  border-radius: 5px;
  margin-top: 15px;
  cursor: pointer;
`
export const LoginErrorMessage = styled.p`
  font-family: 'Roboto';
  width: 100%;
  font-weight: 500;
  color: #ff0000;
  text-align: left;
  font-size: 12px;
  margin: 0px;
  margin-top: 3px;
`
