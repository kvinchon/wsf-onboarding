import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
    title:{
        flexGrow: 1,
    }
  });

  export default function Header() {
    const classes = useStyles();
  
    return (
        <div>
          <AppBar position="relative" color="primary">
            <Toolbar>
              <Typography variant="h6" className={classes.title} color="inherit" noWrap>
                Stripe Onboarding
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
      </div>
    );
  }