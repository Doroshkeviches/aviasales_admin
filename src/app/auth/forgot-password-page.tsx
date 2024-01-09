import { useFormik } from 'formik';
import React from 'react'
import { forgotPassword, signin } from './store/auth.actions';
import { useAppDispatch, useAppSelector } from 'src/storeTypes';
import * as Yup from 'yup'
import { resetTokenErrorsSelector, resetTokenPendingSelector, resetTokenSelector } from './store/auth.selector';
import { Box, Button, CircularProgress, Container, Stack, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
// @ts-ignore
import image from './plane1.png';
import AlertMessage from './components/alert-message';

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
        <Container>
            <Box sx={{
                borderRadius: '24px',
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                minWidth: 500,
                minHeight: 550,
            }}
                display={'flex'}
                justifyContent={'center'}
            >
                <Stack direction="column" sx={{ width: 400, paddingTop: 2 }} useFlexGap flexWrap="nowrap" gap={2}>
                    <form onSubmit={formik.handleSubmit}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: '140px',
                            padding: '0px 10px',
                            textAlign: 'center',
                            gap: '10px'
                        }}>
                        <Typography variant='h1' color='whitesmoke'>ENTER YOUR EMAIL</Typography>
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
                            {pending ? <CircularProgress /> : 'CONTINUE'}
                        </Button>
                        {errors ? <AlertMessage errorMessage={errors} /> : null}
                    </form>
                </Stack>
            </Box>
        </Container>
    )
}
