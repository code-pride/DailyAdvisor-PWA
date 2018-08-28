import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Image from 'components/Image';
import Tile from 'components/Tile';
import Button from 'components/Button';

import { user, userModeSettings } from '../../user/selectors';

import { imageStorage } from 'constants/urls';

import boxCoach from '../../assets/boxCoach.png';

import * as S from './styled.js';

const Profile = props =>
    console.log(props) || (
        <S.Container>
            <S.UserData>
                <h1>Profile</h1>
                {props.user && (
                    <Image
                        src={`${imageStorage}${props.user.profilePictureId}.png`}
                        alt="Person profile picture"
                        width="150"
                    />
                )}
            </S.UserData>

            {props.settings.isItCoach ? (
                <Fragment>
                    <Button url={`/main/advertisement/add`} value="Dodaj advertisement" />
                    <Button url={`/main/advertisement/show`} value="Wyświetl advertisement" />
                </Fragment>
            ) : null}

            {props.user && props.user.userType === 'client' ? (
                <Tile width="344px" height="150px" backgroundImage={boxCoach} />
            ) : null}
        </S.Container>
    );

function mapStateToProps(state) {
    return {
        user: user(state),
        settings: userModeSettings(state),
    };
}

export default connect(
    mapStateToProps,
    null,
)(Profile);
