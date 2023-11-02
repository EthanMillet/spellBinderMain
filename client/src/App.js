import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Nav from './components/nav.js';
import Footer from './components/footer.js'
import Landing from './components/landing/landing';
import Profile from './components/profile/profile';
import Binder from './components/profile/binder';
import MapPage from './components/profile/map';
import Note from './components/profile/note';
import MapCreatePage from './components/profile/createMap';
import NoteCreatePage from './components/profile/createNote'
import Login from './components/login.js';
import SignUp from './components/signup.js';

const httpLink = createHttpLink({
  uri: process.env.herokuLink || 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
      <Nav />
      <Routes>

        <Route path="/" element={<Landing />}></Route>

        <Route path="/profile" element={<Profile />}></Route>

        <Route path="/binder" element={<Binder/>}></Route>

        <Route path="/map" element={<MapPage/>}></Route>
        <Route path="/note" element={<Note/>}></Route>
        <Route path="/createNote" element={<NoteCreatePage/>}></Route>
        <Route path="/createMap" element={<MapCreatePage/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>


      </Routes>
      <Footer/>

      </ApolloProvider>
  );
}

export default App;
