import { Alert, Button, CircularProgress, Stack, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { signin } from './store/auth.actions';
import { authSelector } from './store/auth.selector';
import { Navigate, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { signout } from 'src/utils/signout';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from 'src/storeTypes';

export default function LoginPage() {
    const dispatch = useAppDispatch()
    const { errors, pending, session } = useAppSelector(authSelector)
    const navigate = useNavigate();

    useEffect(() => {
        if (session) {
            signout(dispatch)
        }
    }, [])

    const SigninSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('No password provided.').min(8, 'Password is too short - should be 8 chars minimum.')

    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: SigninSchema,
        onSubmit: async (value) => {
            const { payload } = await dispatch(signin(value))
            if (payload) {
                navigate('/store/catalog')
            }
        },
    });

    return (
        <Stack spacing={{ xs: 2 }} direction="column" sx={{ width: 300 }} useFlexGap flexWrap="nowrap">
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
                <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <Button color="primary" variant="contained" fullWidth type="submit">
                    {pending ? <CircularProgress /> : 'Login'}
                </Button>
            </form>
            {errors ? <Alert severity="error">{errors}</Alert> : null}

        </Stack>
    )
}
