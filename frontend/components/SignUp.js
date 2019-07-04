import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    // width: 1,
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    // email: '',
    // password: '',
    // confirmPassword: '',
    showPassword: false,
  });

//   const handleChange = prop => event => {
//     setValues({ ...values, [prop]: event.target.value });
//   };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
    <Typography variant="h6" gutterBottom>
        Create your account
    </Typography>
      <Grid container spacing={2} alignItems="flex-end">
        <Grid item xs={12}>
            <TextField
            id="outlined-email-input"
            label="Email"
            className={classes.textField}
            fullWidth 
            type="email"
            name="email"
            autoComplete="email"
            margin="dense"
            variant="outlined"
            // value={values.email}
            // onChange={handleChange('email')}
            />
        </Grid>
        <Grid item xs={5}>
            <TextField
            id="outlined-password-input"
            label="Password"
            className={classes.textField}
            type={values.showPassword ? 'text' : 'password'} 
            autoComplete="current-password"
            margin="dense"
            variant="outlined"
            fullWidth
            // value={values.password}
             />
        </Grid>
        <Grid item xs={5}>
            <TextField
            id="outlined-password-input"
            label="Confirm password"
            className={classes.textField}
            type={values.showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            margin="dense"
            variant="outlined"
            fullWidth
            // value={values.confirmPassword}
             />
        </Grid>
        <Grid item>
            <IconButton
                edge="end"
                aria-label="Toggle password visibility"
                onClick={handleClickShowPassword}
            >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
        </Grid>
        <Grid item xs={12} item>
            <Button fullWidth variant="contained" color="primary" >
                Continue
            </Button>
        </Grid>
      </Grid>
    </form>
  );
}