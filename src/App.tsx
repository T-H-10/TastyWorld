import { Provider } from 'react-redux';
import './App.css'
import { router } from './Router'
import { RouterProvider } from 'react-router'
import Store from './store/Store';
import { useReducer, useState } from 'react';
import UserReducer from './components/Login/UserReducer';
import { IsLogin, UserContext } from './components/Header';
import { initialUserState } from './types/userTypes';

function App() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [user, userDispatch] = useReducer(UserReducer, initialUserState);
  return (
    <>
    <title>TastyWorld</title>
     <IsLogin value={[isLogin, setIsLogin]}>
     <UserContext value={{ user, userDispatch }}>
      <Provider store={Store}>
        <RouterProvider router={router} />
      </Provider>
      </UserContext>
      </IsLogin>
    </>
  )
}

export default App;
