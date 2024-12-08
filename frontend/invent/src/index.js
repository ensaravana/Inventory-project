import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles.css';
import "@radix-ui/themes/styles.css";
import { Grid, Theme ,Box} from "@radix-ui/themes";
import Sidebar from './layout/sidebar';
import { Flex,TextField } from "@radix-ui/themes";



import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
  

  <React.StrictMode>

  <Grid
      style={{
        display: 'grid',
        gridTemplateColumns: '20% 80%', // Sidebar takes 20%, App takes 80%
        gap: '16px', // Optional gap between items
      }}
    >
      <Box>
        <Sidebar />
      </Box>
      <Box>
        <App />
      </Box>
    </Grid>
  
    
  </React.StrictMode>
  </Theme>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
