import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { ApolloProvider } from '@apollo/react-hooks';
// import ApolloClient from 'apollo-boost';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Mission from './pages/Mission';
import Footer from './components/Footer';
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
        <header>
          <Navbar />
        </header>
        <hr></hr>
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/saved' component={SavedPets} />
            <Route exact path='/mission' component={Mission} />
            <Route exact path='/login' component={Login} />
            <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
          </Switch>
        </main>
        <Footer />
      </>
    </Router>
    // </ApolloProvider>
  );
}

export default App;
