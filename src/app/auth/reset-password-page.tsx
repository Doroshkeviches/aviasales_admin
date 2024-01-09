import { TextField, Button, CircularProgress, IconButton, Box, Container, Stack, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { forgotPassword, resetPassword } from './store/auth.actions';
import { useAppDispatch } from 'src/storeTypes';
import * as Yup from 'yup'
import { useNavigate } from 'react-router';
import { VisibilityOff, Visibility } from '@mui/icons-material';
// @ts-ignore
import image from './plane1.png';

export default function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const SigninSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
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
      email: '',
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
    <Container>
      <Box sx={{
        borderRadius: '24px',
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minWidth: 500,
        minHeight: 700,
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
            <Typography variant='h1' color='whitesmoke'>RESET PASSWORD</Typography>
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
              {false ? <CircularProgress /> : 'SIGNIN'}
            </Button>
          </form>
          {/* {errors ? <AlertMessage errorMessage={errors}/> : null} */}
        </Stack>
      </Box>
    </Container>
  )
}
