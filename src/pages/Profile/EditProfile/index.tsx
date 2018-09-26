import * as React from 'react';

import * as S from './styled';

const EditProfile = (props: any) => {
    return (
        <React.Fragment>
            {true ? <S.Container>twoja stara edytuje</S.Container> : <div>niezaladowane :(</div>}
        </React.Fragment>
    );
};

export default EditProfile;
