import { TextField, Button, CircularProgress, IconButton, Stack, Typography, Container } from '@mui/material';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { forgotPassword, resetPassword } from './store/auth.actions';
import { useAppDispatch } from 'src/storeTypes';
import * as Yup from 'yup'
import { useNavigate } from 'react-router';
import { VisibilityOff, Visibility } from '@mui/icons-material';

export default function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const SigninSchema = Yup.object().shape({
    // email: Yup.string()
    //   .email('Invalid email')
    //   .required('Required'),
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
      // email: '',
      password: '',
      password_confirm: '',
    },
    validationSchema: SigninSchema,
    onSubmit: async (value) => {
      const result = await dispatch(resetPassword(value)).unwrap()
      if (result) {
        navigate('/admin/auth/reset-password')
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
      <Stack direction="column" gap={2} className='auth-stack'>
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
          <Typography variant='h1' color='whitesmoke'>RESET PASSWORD</Typography>
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
                sx={{ color: 'whitesmoke' }}
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
                sx={{ color: 'whitesmoke' }}
                aria-label="toggle password visibility"
                onClick={handleShowConfirmPassword}
                edge="end"
              >
                {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>,
            }}
          />
          <Button color="primary" variant="contained" fullWidth type="submit">
            {false ? <CircularProgress /> : 'SIGN IN'}
          </Button>
        </form>
        {/* {errors ? <AlertMessage errorMessage={errors}/> : null} */}
      </Stack>
    </Container>
  )
}
