import * as React from 'react';
import { connect } from 'react-redux';

import { registerUserConfirm } from '../../../auth/actions';

class RegisterConfirm extends React.Component<any, {}> {
    public componentDidMount(): void {
        const token = this.props.match.params.token;
        this.props.registerUserConfirm(token);
    }

    public render(): JSX.Element {
        return <div>RegisterConfirm component. Wysyłam token do potwierdzenia</div>;
    }
}

export default connect(
    null,
    { registerUserConfirm },
)(RegisterConfirm);
