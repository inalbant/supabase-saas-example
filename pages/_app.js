import Nav from '../components/Nav';
import UserProvider from '../context/user';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Nav />
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
