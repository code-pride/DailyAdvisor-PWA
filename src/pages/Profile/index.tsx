import * as React from 'react';
import { connect } from 'react-redux';

import Button from 'components/Button';
import Tile from 'components/Tile';

import { userUpgradeToCoach } from '../../user/actions';
import { user } from '../../user/selectors';

import { imageStorage } from 'constants/urls';

import * as boxCoach from 'assets/boxCoach.png';
import * as S from './styled';

interface UserData {
    name: string;
    lastName: string;
    city: string;
    about: string;
    favDiscipline: string;
    lvl: string;
    dateOfBirth: string;
    userId: string;
    userType: string;
    email: string;
    profilePictureId: string;
}
interface Props {
    user: UserData;
    userUpgradeToCoach: typeof userUpgradeToCoach;
}

const Profile = (props: Props) => {
    return (
        <React.Fragment>
            {props.user ? (
                <S.Container>
                    <S.UserData>
                        <React.Fragment>
                            <S.Image
                                src={`${imageStorage}${props.user.profilePictureId}.png`}
                                width="150"
                                alt="Person profile picture"
                            />
                            <S.H1>
                                {props.user.name}
                                &nbsp;
                                {props.user.lastName}
                            </S.H1>
                            <S.H3>{props.user.email}</S.H3>
                            <S.H4>
                                {props.user.lvl}, {props.user.favDiscipline}
                            </S.H4>
                            <Button url="profile/edit" value="Edit profile" />
                            <p>{props.user.about}</p>
                        </React.Fragment>
                    </S.UserData>
                    {props.user.userType === 'client' ? (
                        <div onClick={props.userUpgradeToCoach}>
                            <Tile width="344px" height="150px" backgroundImage={boxCoach} />
                        </div>
                    ) : null}
                </S.Container>
            ) : (
                <div>niezaladowane :(</div>
            )}
        </React.Fragment>
    );
};

function mapStateToProps(state: any): any {
    return {
        user: user(state),
    };
}

const mapDispatchToProps = { userUpgradeToCoach };

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Profile);
