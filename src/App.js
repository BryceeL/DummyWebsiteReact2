import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import AuthProvider from './hooks/AuthProvider.js';
import PrivateRoute from './router/PrivateRoute.js';

//Pages
import DummyDataPage from './pages/DummyDataPage.js';
import SignUpPage from './pages/SignUpPage.js';
import SignInPage from './pages/SignInPage.js';
import HomePage from './pages/HomePage.js';
import CreatePostPage from './pages/CreatePostPage.js';
import PostPage from './pages/PostPage.js';

//css
import './App.css'

function App() {
  return (
    //Establish routes to be used for navigating
    <div className="App">
      <AuthProvider>
        <Routes>
            <Route path="/" element={<DummyDataPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/sign-in" element={<SignInPage />} />

            {/* These routes are protected via AuthProvider for authentication */}
            <Route element={<PrivateRoute />}>
              <Route path="/home" element={<HomePage />} />
              <Route path="/create-post" element={<CreatePostPage />} />
              <Route path="/post" element={<PostPage />} />
            </Route>
        </Routes>
      </AuthProvider>
    </div>
    
    
  )
}

export default App;