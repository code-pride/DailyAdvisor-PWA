import { Formik } from 'formik';
import { compose, withProps } from 'recompact';

export const withFormik = options =>
    compose(
        new Formik(options),
        withProps(({ setFieldValue, setFieldTouched }) => ({
            handleChangeFor: field => ({ value }) => {
                setFieldValue(field, value);
            },
            handleBlurFor: field => () => {
                setFieldTouched(field, true);
            },
        })),
    );
