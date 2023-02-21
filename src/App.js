import MainLayout from "./layouts/MainLayout";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import NewsFeed from "./pages/NewsFeed";
import ProfileLayout from "./layouts/ProfileLayout";
import Profile from "./pages/Profile";
import Photos from "./pages/Photos";
import People from "./pages/People";
import Setting from "./pages/Setting";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="sign-in" />} />
      <Route element={<MainLayout />}>
        <Route path="/news-feed" index element={<NewsFeed />} />
        <Route path="/photos" index element={<Photos />} />
        <Route path="/peoples" index element={<People />} />
        <Route path="/settings" index element={<Setting />} />
      </Route>
      <Route element={<ProfileLayout />}>
        <Route path="/profile/:id" index element={<Profile />} />
      </Route>
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  );
}

export default App;
