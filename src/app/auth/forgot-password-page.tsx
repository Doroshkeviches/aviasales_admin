import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useNavigate } from 'react-router';

// ======= store ======= //
import { forgotPassword } from './store/auth.actions';
import { useAppDispatch, useAppSelector } from 'src/storeTypes';
import { resetTokenErrorsSelector, resetTokenPendingSelector } from './store/auth.selector';

// ======= mui ======= //
import { Button, CircularProgress, Container, Stack, TextField, Typography } from '@mui/material';

// ======= components ======= //
import AlertMessage from '../../components/alert-message';


export default function ForgorPasswordPage() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
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
        <Container className='auth'>
            <Stack className='auth-stack'>
                <form onSubmit={formik.handleSubmit}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '20px 20px',
                        textAlign: 'center',
                        gap: '10px'
                    }}>
                    <Typography variant='h1' className='main'>ENTER YOUR EMAIL</Typography>
                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        placeholder='Enter your email'
                        InputLabelProps={{ shrink: true }}
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
        </ Container>
    )
}
