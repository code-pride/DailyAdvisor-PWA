import { Field, Form, withFormik } from 'formik';
import * as React from 'react';
import * as yup from 'yup';

import * as S from './styled';

class Add extends React.Component {
    public render(): JSX.Element {
        return (
            <S.Container>
                <Form>
                    <S.Input type="text" placeholder="Name..." />
                    <S.Input type="text" placeholder="Something more..." />
                    <S.Input type="text" placeholder="Something more..." />
                    <S.Input type="text" placeholder="Something more..." />
                    <S.Input type="text" placeholder="Something more..." />
                    <S.Input type="text" placeholder="Something more..." />
                    <S.Textarea
                        name="long_description"
                        id="long_description"
                        cols="30"
                        rows="10"
                        value="Long description"
                    />
                    <Button accent={'primary'} value="Save" url={`/register`} />
                    <Button accent={'secondary'} value="Cancel" url={`/register`} />
                </Form>
            </S.Container>
        );
    }
}

export default Add;

import Button from 'components/Button';

// const InnerForm = ({ touched, errors }) => (
//     <Form>
//         <div>
//             <Field type="text" name="username" />
//             {touched.username && errors.username && errors.username}
//         </div>

//         <div>
//             <Field type="password" name="password" />
//             {touched.password && errors.password && errors.password}
//         </div>
//         <Button type="submit" value="Zaloguj" />
//     </Form>
// );

// const schema = yup.object().shape({
//     username: yup
//         .string()
//         .email()
//         .required(),
//     password: yup.string().required(),
// });

// export const LoginForm = withFormik<any, any>({
//     mapPropsToValues: () => ({
//         username: '',
//         password: '',
//     }),
//     validationSchema: schema,
//     handleSubmit: (values, { props }: any) => {
//         props.onSubmit(values);
//     },
// })(InnerForm);
