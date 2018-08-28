import React from 'react';
import { connect } from 'react-redux';

import { getAllAdverts, getAdvert } from '../../../advertisement/actions';
import { adverts, advert } from '../../../advertisement/selectors';

import * as S from './styled';

class Show extends React.Component {
    componentDidMount() {
        this.props.getAdvert();
        this.props.getAllAdverts();
    }

    render() {
        return (
            <S.Container>
                <div>Show advertisement</div>
            </S.Container>
        );
    }
}

const mapStateToProps = state => ({
    adverts: adverts(state),
    advert: advert(state),
});

const mapDispatchToProps = { getAllAdverts, getAdvert };

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Show);
