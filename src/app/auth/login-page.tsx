import { Alert, Button, CircularProgress, IconButton, Stack, TextField } from '@mui/material'
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
                navigate('/store/catalog')
            }
        },
    });

    const handleShowPassword = () => {
        setShowPassword(prev => !prev)
    }
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
                    label="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                        endAdornment: <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleShowPassword}
                            edge="end"
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>,
                    }}
                />
                <Button color="primary" variant="contained" fullWidth type="submit">
                    {pending ? <CircularProgress /> : 'Login'}
                </Button>
            </form>
            <Link to={'/admin/auth/forgot-password'}>forgot password ?</Link>
            {errors ? <Alert severity="error">{errors}</Alert> : null}

        </Stack>
    )
}
