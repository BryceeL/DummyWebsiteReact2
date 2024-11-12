import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import AuthProvider from './hooks/AuthProvider.js';
import PrivateRoute from './router/PrivateRoute.js';

//Pages
import DummyDataPage from './pages/DummyDataPage.js';
import SignUpPage from './pages/SignUpPage.js';
import LoginPage from './pages/LoginPage.js';
import HomePage from './pages/HomePage.js';
import CreatePostPage from './pages/CreatePostPage.js';
import PostPage from './pages/PostPage.js';
import MessagesPage from './pages/MessagesPage.js';
import SearchPage from './pages/SearchPage.js';
import ProfilePage from './pages/ProfilePage.js';
import DefaultPage from './pages/DefaultPage.js';
import SettingsPage from './pages/SettingsPage.js';

//css
import './css/App.css'

function App() {
  return (
    //Establish routes to be used for navigating
    <div className="App">
      <AuthProvider>
        <Routes>
            <Route path="/" element={<DefaultPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
      
            {/* These routes are protected via PrivateRoute for authentication */}
            <Route element={<PrivateRoute />}>
              <Route path="/home" element={<HomePage />} />
              <Route path="/create-post" element={<CreatePostPage />} />
              <Route path="/profile/:userId" element={<ProfilePage/>}/>
              <Route path="/post/:postId" element={<PostPage />} />
              <Route path="/messages" element={<MessagesPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/dum" element={<DummyDataPage />} />
            </Route>
        </Routes>
      </AuthProvider>
    </div>
    
    
  )
}

export default App;