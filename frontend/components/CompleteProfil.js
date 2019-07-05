import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
    group: {
      margin: theme.spacing(1, 0),
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

export default function CompleteProfil(){
    const classes = useStyles();
    const [value, setValue] = React.useState('female');

    const [values, setValues] = React.useState({
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
      });
    
      const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
      };

    return (
    <FormControl component="fieldset">
        <FormLabel component="legend">ACCOUNT TYPE</FormLabel>
        <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} column>
            <FormControlLabel value="independant" control={<Radio />} label="Independant" />
            <FormControlLabel value="company" control={<Radio />} label="Company" />
        </RadioGroup>

        <FormLabel component="legend">PERSONAL INFORMATION</FormLabel>
        <TextField
        id="company-name"
        label="Company name"
        className={classes.textField}
        onChange={handleChange('name')}
        margin="normal"
        />
        <TextField
        id="first-name"
        label="First name"
        className={classes.textField}
        onChange={handleChange('name')}
        margin="normal"
        />
        <TextField
        id="last-name"
        label="Last name"
        className={classes.textField}
        onChange={handleChange('name')}
        margin="normal"
        />
        <TextField
        id="address"
        label="Address"
        className={classes.textField}
        onChange={handleChange('name')}
        margin="normal"
        />
        <TextField
        id="postal-code"
        label="Postal code"
        className={classes.textField}
        onChange={handleChange('name')}
        margin="normal"
        />
        <TextField
        id="state"
        label="State"
        className={classes.textField}
        onChange={handleChange('name')}
        margin="normal"
        />
        <TextField
        id="city"
        label="City"
        className={classes.textField}
        onChange={handleChange('name')}
        margin="normal"
        />
        <TextField
        id="country"
        label="Country"
        className={classes.textField}
        onChange={handleChange('name')}
        margin="normal"
        />

        <FormLabel component="legend">ROCKET INFORMATION</FormLabel>
        <TextField
        id="rocket"
        label="rocket"
        className={classes.textField}
        onChange={handleChange('name')}
        margin="normal"
        />
        <TextField
        id="license"
        label="License"
        className={classes.textField}
        onChange={handleChange('name')}
        margin="normal"
        />
        <Select
          value={values.age}
          onChange={handleChange}
          label="Color"
        >
          <MenuItem value="red">Red</MenuItem>
          <MenuItem value="orange">Orange</MenuItem>
          <MenuItem value="yellow">Yellow</MenuItem>
          <MenuItem value="purple">Purple</MenuItem>
          <MenuItem value="green">Green</MenuItem>
          <MenuItem value="blue">Blue</MenuItem>
        </Select>
    </FormControl>
    );
}