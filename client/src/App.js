import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { ApolloProvider } from '@apollo/react-hooks';
// import ApolloClient from 'apollo-boost';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import SavedPets from './pages/SavedPets';
import Mission from './pages/Mission';
import SubmitPet from './pages/SubmitPet';
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
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/saved' component={SavedPets} />
            <Route exact path='/mission' component={Mission} />
            <Route exact path='/submit_pet' component={SubmitPet} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
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
