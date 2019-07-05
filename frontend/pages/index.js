import Layout from '../components/MyLayout.js'
import Papper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/styles'
import Typography from '@material-ui/core/Typography';
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import React from 'react'
import SignUp from '../components/SignUp.js'
import Button from '@material-ui/core/Button';
import CompleteProfil from '../components/CompleteProfil.js'
import Plan from '../components/Plan.js'

const useStyles = makeStyles(theme => ({
  main: {
    width: 900,
    margin: 'auto',
  },
  papper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(3),
  },
  root: {
    width: '90%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Create your account', 'Complete your profile', 'Select a plan'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      // SignUp page
      return <SignUp/>;
    case 1:
      // Complete your profil page
      return <CompleteProfil/>;
    case 2:
      // Plan page
      return <Plan/>;
    default:
      throw new Error('Unknown step');
  }
}

export default function Index(){
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }
  

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
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>

              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
          </div>
        </Papper>
      </main>
    </Layout>
  );
}
