import Layout from '../components/MyLayout.js'
import Papper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/styles'
import Typography from '@material-ui/core/Typography';
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import React from 'react'
import SignUp from '../components/SignUp.js'
import CompleteProfil from '../components/CompleteProfil.js'

const useStyles = makeStyles(theme => ({
  main: {
    width: 600,
    margin: 'auto',
  },
  papper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(3),
  },
}));

const steps = ['Create your account', 'Complete your profile', 'Step 3'];

function getStepContent(step) {
  switch (step) {
    case 0:
      // SignUp page
      return <SignUp/>;
    case 1:
      // Complete your profil page
      return <CompleteProfil/>;
    default:
      throw new Error('Unknown step');
  }
}

export default function Index(){
  const classes = useStyles();
  const [activeStep] = React.useState(0);

  return (
    <Layout>
      <main className={classes.main}>
        <Papper className={classes.papper}>
          {/* <Typography component="h1" variant="h4" align="center">
           Create your account
          </Typography> */}
          <Stepper activeStep={activeStep} alternativeLabel={true}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div>
            {/* Step Content */}
            {getStepContent(activeStep)}
          </div>
        </Papper>
      </main>
    </Layout>
  );
}
