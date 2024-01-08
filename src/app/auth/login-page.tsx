import { Alert, Box, Button, CircularProgress, Container, Stack, TextField, Typography } from '@mui/material'
import { useEffect } from 'react'
import { signin } from './store/auth.actions';
import { authSelector } from './store/auth.selector';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { signout } from 'src/utils/signout';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from 'src/storeTypes';
// @ts-ignore
import image from './plane1.png';

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
        <Container sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh'
        }}>
            <Box sx={{
                borderRadius: '24px',
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                minWidth: 500,
                // maxWidth: 600,
                minHeight: 650,
                // maxHeight: 800,
            }}
                display={'flex'}
                justifyContent={'center'}
            >
                <Stack direction="column" sx={{ width: 400 }} useFlexGap flexWrap="nowrap">
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
                        <Typography variant='h1' color='whitesmoke'>SIGN IN TO CONTINUE </Typography>
                        <TextField
                            variant='outlined'
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
                            variant='outlined'
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
                            {pending ? <CircularProgress /> : 'LOGIN'}
                        </Button>
                    </form>
                    {errors ? <Alert severity="error">{errors}</Alert> : null}
                </Stack>
            </Box>
        </Container>
    )
}
