import { TextField, CircularProgress, IconButton, Stack, Typography, Container } from '@mui/material';
import { useFormik } from 'formik';
import { useState } from 'react'
import { resetPassword } from './store/auth.actions';
import { sessionErrorsSelector, sessionPendingSelector } from './store/auth.selector';
import { useAppDispatch, useAppSelector } from 'src/storeTypes';
import * as Yup from 'yup'
import { useNavigate } from 'react-router';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import AlertMessage from '../../components/alert-message';

export default function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const errors = useAppSelector(sessionErrorsSelector)
  const pending = useAppSelector(sessionPendingSelector)

  const SigninSchema = Yup.object().shape({
    password: Yup.string()
      .required('Password is required')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    password_confirm: Yup.string()
      .required('Please retype your password.')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
      .oneOf([Yup.ref('password')], 'Your passwords do not match.')
  });

  const formik = useFormik({
    initialValues: {
      password: '',
      password_confirm: '',
    },
    validationSchema: SigninSchema,
    onSubmit: async (value) => {
      const result = await dispatch(resetPassword(value)).unwrap()
      if (result) {
        navigate('/admin/flights')
      }
    },
  });
  const handleShowPassword = () => {
    setShowPassword(prev => !prev)
  }
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(prev => !prev)
  }

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
          }}
        >
          <Typography variant='h1' className='main'>RESET PASSWORD</Typography>
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            placeholder='Enter your password'
            InputLabelProps={{ shrink: true }}
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
          <TextField
            fullWidth
            id="password_confirm"
            name="password_confirm"
            label="Confirm Password"
            placeholder='Confirm your password'
            InputLabelProps={{ shrink: true }}
            value={formik.values.password_confirm}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password_confirm && Boolean(formik.errors.password_confirm)}
            helperText={formik.touched.password_confirm && formik.errors.password_confirm}
            type={showConfirmPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: <IconButton
                aria-label="toggle password visibility"
                onClick={handleShowConfirmPassword}
                edge="end"
              >
                {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>,
            }}
          />
          <LoadingButton loading={pending} loadingIndicator={<CircularProgress />} variant="contained" fullWidth type="submit" sx={{ height: 50 }}>
            SIGN IN
          </LoadingButton>
        </form>
        {errors ? <AlertMessage errorMessage={errors} /> : null}
      </Stack>
    </Container>
  )
}
