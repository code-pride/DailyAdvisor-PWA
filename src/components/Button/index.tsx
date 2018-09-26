import * as React from 'react';
import { NavLink } from 'react-router-dom';

import * as S from './styled';

interface Props {
    type?: string;
    url?: string;
    content?: string;
    value?: string;
    onClick?: () => void;
}

const Button = (props: Props) =>
    props.type === 'submit' ? (
        <S.Button type={props.type}>{props.value}</S.Button>
    ) : props.url ? (
        <NavLink to={props.url}>
            <S.Button>{props.value}</S.Button>
        </NavLink>
    ) : (
        <S.Button onClick={props.onClick}>{props.content}</S.Button>
    );

export default Button;
