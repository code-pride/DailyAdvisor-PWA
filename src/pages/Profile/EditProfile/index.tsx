import { Field, Form, withFormik } from 'formik';
import * as React from 'react';
import * as yup from 'yup';

import Button from 'components/Button';

import * as S from './styled';

const EditProfile = (props: any) => {
    return (
        <React.Fragment>
            {true ? (
                <S.Container>
                    <Form>
                        <div>
                            <Field type="text" name="profilePictureId" />
                            profilePictureId
                        </div>
                        <div>
                            <Field type="text" name="name" />
                            name
                        </div>
                        <div>
                            <Field type="text" name="lastName" />
                            lastName
                        </div>
                        <div>
                            <Field type="text" name="email" />
                            email
                        </div>
                        <div>
                            <Field type="text" name="city" />
                            city
                        </div>
                        <div>
                            <Field type="textarea" name="about" />
                            about
                        </div>
                        <div>
                            <Field type="text" name="favDiscipline" />
                            favDiscipline
                        </div>
                        <div>
                            <Field type="text" name="lvl" />
                            lvl
                        </div>
                        <div>
                            <Field type="date" name="dateOfBirth" />
                            dateOfBirth
                        </div>
                        <Button type="submit" value="Save" />
                        <Button type="button" onClick={props.history.goBack} content="Cancel" />
                    </Form>
                </S.Container>
            ) : (
                <div>niezaladowane :(</div>
            )}
        </React.Fragment>
    );
};

const schema = yup.object().shape({
    name: yup.string(),
    lastName: yup.string(),
    email: yup.string(),
    city: yup.string(),
    about: yup.string(),
    favDiscipline: yup.string(),
    lvl: yup.string(),
    dateOfBirth: yup.string(),
    userId: yup.string(),
    userType: yup.string(),
    profilePictureId: yup.string(),
});

export default withFormik<any, any>({
    mapPropsToValues: () => ({
        name: '',
        lastName: '',
        email: '',
        city: '',
        about: '',
        favDiscipline: '',
        lvl: '',
        dateOfBirth: '',
        userId: '',
        userType: '',
        profilePictureId: '',
    }),
    validationSchema: schema,
    handleSubmit: (values, { props }: any) => {
        console.log('handle submit from formik: ');
        console.log(values);
    },
})(EditProfile);
