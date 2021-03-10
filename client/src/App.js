import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { ApolloProvider } from '@apollo/react-hooks';
// import ApolloClient from 'apollo-boost';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SavedPets from './pages/SavedPets';
import './index.css';

// const client = new ApolloClient({
// uri: '/graphql',
// uri: 'http://localhost:3001/graphql',
//   request:
//     (operation) => {
//       const token = Auth.getToken();
//       operation.setContext({
//         headers: {
//           authorization: token ? `Bearer ${token}` : ''
//         }
//       })
//     }
// });

function App() {
  return (
    // <ApolloProvider client={client}>
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/saved' component={SavedPets} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch>
      </>
    </Router>
    // </ApolloProvider>
  );
}

export default App;
