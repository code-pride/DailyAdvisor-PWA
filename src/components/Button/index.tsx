import * as React from 'react';
import { NavLink } from 'react-router-dom';

import * as S from './styled';

const Button = ({ url, content, onClick, value, type }: any) =>
    type === 'submit' ? (
        <S.Button type={type}>{value}</S.Button>
    ) : url ? (
        <NavLink to={url}>
            <S.Button>{value}</S.Button>
        </NavLink>
    ) : (
        <S.Button onClick={onClick}>{content}</S.Button>
    );

export default Button;
