import * as React from 'react';
import { connect } from 'react-redux';

import Image from 'components/Image';
import Tile from 'components/Tile';

import { user } from '../../user/selectors';

import { imageStorage } from 'constants/urls';

import boxCoach from '../../assets/boxCoach.png';

import * as S from './styled.js';

const Profile = props => {
    return (
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

            {props.user && props.user.userType === 'client' ? (
                <Tile width="344px" height="150px" backgroundImage={boxCoach} />
            ) : null}
        </S.Container>
    );
};

function mapStateToProps(state) {
    return {
        user: user(state),
    };
}

export default connect(
    mapStateToProps,
    null,
)(Profile);
