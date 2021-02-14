import logo from './logo.svg';
import './App.css';
import React from 'react';
import { 
  makeStyles, FormLabel, FormControl, FormGroup, FormControlLabel, FormHelperText, Checkbox,
  TextField,
  Grid, Typography 
  } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   formControl: {
//     margin: theme.spacing(3),
//   },
// }));



function App() {
//   const classes = useStyles();
//   const [state, setState] = React.useState({
//     gilad: true,
//     jason: false,
//     antoine: false,
//   });
//   const handleChange = (event) => {
//     setState({ ...state, [event.target.name]: event.target.checked });
//   };
//   const { gilad, jason, antoine } = state;
//   const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
     


<React.Fragment>      
      <Typography variant="h6" gutterBottom>
        Send Help Please    
      </Typography>
      

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            
            // onChange = {this.sayHello}
            // value= {this.state.textFieldValue}            

            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12} sm = {6}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
    
    </div>
    
  );
}


export default App;
