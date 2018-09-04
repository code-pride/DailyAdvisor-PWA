import * as React from 'react';

import coach from '../../assets/icons/coach.svg';
import client from '../../assets/icons/client.svg';

import * as S from './styled';

const FloatingSwitcher = ({ onClick, userMode }) => (
    <S.Container>
        <S.Switcher onClick={onClick}>
            {userMode === 'coach' ? (
                <img src={client} alt="Client icon" />
            ) : (
                <img src={coach} alt="Coach icon" />
            )}
        </S.Switcher>
    </S.Container>
);

export default FloatingSwitcher;
