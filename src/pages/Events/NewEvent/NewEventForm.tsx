import { Field, Form, withFormik } from 'formik';
import { omit as _omit } from 'lodash';
import * as moment from 'moment';
import * as React from 'react';
import * as yup from 'yup';

import Button from 'components/Button';
import { Datepicker } from 'components/DatePicker';

class EventForm extends React.Component<any, any> {
    public onChange = (field: string) => value => {
        this.props.setFieldValue(field, value);
    };

    public render(): JSX.Element {
        const { errors, touched } = this.props;
        return (
            <Form>
                <div>
                    Type:
                    <label>
                        <Field type="radio" name="type" value="training" />
                        Training
                    </label>
                    <label>
                        <Field type="radio" name="type" value="diet" />
                        Diet
                    </label>
                    <label>
                        <Field type="radio" name="type" value="meeting" />
                        Meeting
                    </label>
                    {touched.type && errors.type && errors.type}
                </div>
                <div>
                    Start:
                    <Datepicker
                        selected={this.props.values.start}
                        onChange={this.onChange('start')}
                    />
                    {touched.start && errors.start && errors.start}
                </div>
                <div>
                    End:
                    <Datepicker selected={this.props.values.end} onChange={this.onChange('end')} />
                    {touched.end && errors.end && errors.end}
                </div>
                <div>
                    Repeat:
                    <label>
                        <Field type="radio" name="repeat" value="daily" />
                        Daily
                    </label>
                    <label>
                        <Field type="radio" name="repeat" value="weekly" />
                        Weekly
                    </label>
                    <label>
                        <Field type="radio" name="repeat" value="monthly" />
                        Monthly
                    </label>
                    {touched.repeat && errors.repeat && errors.repeat}
                </div>
                <Button type="submit" value="Add event" />
            </Form>
        );
    }
}

const schema = yup.object().shape({
    type: yup
        .string()
        .oneOf(['training', 'diet', 'meeting'])
        .required('required'),
    start: yup.date().required('required'),
    end: yup.date().required('required'),
    repeat: yup
        .string()
        .oneOf(['daily', 'weekly', 'monthly'])
        .required('required'),
});

export const NewEventForm = withFormik<any, any>({
    mapPropsToValues: () => ({
        type: '',
        start: moment(),
        end: moment(),
        repeat: '',
    }),
    validationSchema: schema,
    handleSubmit: (values, { props }) => {
        console.log(values);
    },
})(EventForm);
