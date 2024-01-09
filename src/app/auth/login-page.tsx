import { Box, Button, CircularProgress, Container, IconButton, Stack, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { signin } from './store/auth.actions';
import { sessionErrorsSelector, sessionPendingSelector, sessionSelector } from './store/auth.selector';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from 'src/storeTypes';
import { Link } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { signout } from 'src/utils/signout';
// @ts-ignore
import image from './plane1.png';
import AlertMessage from './components/alert-message';

export default function LoginPage() {
    const dispatch = useAppDispatch()
    const errors = useAppSelector(sessionErrorsSelector)
    const pending = useAppSelector(sessionPendingSelector)
    const session = useAppSelector(sessionSelector)
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState<boolean>()
    useEffect(() => {
        if (session) {
            signout(dispatch)
        }
    }, [])

    const SigninSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        password: Yup.string()
            .required('No password provided.')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
            ),

    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: SigninSchema,
        onSubmit: async (value) => {
            const result = await dispatch(signin(value)).unwrap()
            if (result) {
                navigate('/admin/flights')
            }
        },
    });

    const handleShowPassword = () => {
        setShowPassword(prev => !prev)
    }

    return (
        <Container>
            <Box sx={{
                borderRadius: '24px',
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                minWidth: 500,
                minHeight: 650,
            }}
                display={'flex'}
                justifyContent={'center'}
            >
                <Stack direction="column" sx={{ width: 400 }} useFlexGap flexWrap="nowrap" gap={2}>
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
                        <Typography variant='h1' color='whitesmoke'>SIGN IN TO CONTINUE</Typography>
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
                            type={showPassword ? 'text' : 'password'}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                            InputProps={{
                                endAdornment: <IconButton
                                    sx={{ color: 'whitesmoke' }}
                                    aria-label="toggle password visibility"
                                    onClick={handleShowPassword}
                                    edge="end"
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>,
                            }}
                        />
                        <Button color="primary" variant="contained" fullWidth type="submit">
                            {pending ? <CircularProgress /> : 'SIGNIN'}
                        </Button>
                        <Link to='/admin/auth/forgot-password' style={{ textDecoration: 'none' }}>
                            <Typography variant='h5' color='whitesmoke'>Forget password?</Typography>
                        </Link>
                    </form>
                    {errors ? <AlertMessage errorMessage={errors} /> : null}
                </Stack>
            </Box>
        </Container>
    )
}
