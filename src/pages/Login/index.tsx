import * as React from 'react';
import { connect } from 'react-redux';

import unknown from '../../assets/unknown.png';
import { loginUser } from '../../auth/actions';

import Button from 'components/Button';
import Image from 'components/Image';
import SocialLogin from 'components/SocialLogin';
import { LoginForm } from './components/LoginForm';

import * as S from './styled';

class Login extends React.Component<any, any> {
    public state: any = {
        isLoginFormDisplayed: false,
    };

    public toggleLogin = () => {
        this.setState({
            isLoginFormDisplayed: !this.state.isLoginFormDisplayed,
        });
    };

    public render(): JSX.Element {
        return (
            <S.Container>
                <S.LoginContainer>
                    <S.LoginBox>
                        <S.MainHeading>daily advisor</S.MainHeading>
                        <SocialLogin url="http://localhost:8091/login/google" mediaType="google" />
                        <Image
                            src={unknown}
                            alt="Unknown person profile picture"
                            width="150"
                            onClick={this.toggleLogin}
                        />

                        {this.state.isLoginFormDisplayed ? (
                            <LoginForm onSubmit={this.props.loginUser} />
                        ) : null}

                        <div style={{ color: 'white' }}>lub</div>

                        <Button value="Zarejestruj" url={`/register`} />
                    </S.LoginBox>
                </S.LoginContainer>
            </S.Container>
        );
    }
}

export default connect(
    null,
    { loginUser },
)(Login);
