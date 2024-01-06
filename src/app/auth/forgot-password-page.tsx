import { useFormik } from 'formik';
import React from 'react'
import { forgotPassword, signin } from './store/auth.actions';
import { useAppDispatch, useAppSelector } from 'src/storeTypes';
import * as Yup from 'yup'
import { resetTokenErrorsSelector, resetTokenPendingSelector, resetTokenSelector } from './store/auth.selector';
import { Button, CircularProgress, TextField } from '@mui/material';
import { useNavigate } from 'react-router';

export default function ForgorPasswordPage() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const token = useAppSelector(resetTokenSelector)
    const pending = useAppSelector(resetTokenPendingSelector)
    const errors = useAppSelector(resetTokenErrorsSelector)
    const SigninSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: SigninSchema,
        onSubmit: async (value) => {
            const result = await dispatch(forgotPassword(value)).unwrap()
            if (result) {
                sessionStorage.setItem('reset-token', result.token)
                navigate('/admin/auth/reset-password')
            }
        },
    });


    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
            />
            <Button color="primary" variant="contained" fullWidth type="submit">
                {pending ? <CircularProgress /> : 'Login'}
            </Button>
            {errors}
        </form>
    )
}
