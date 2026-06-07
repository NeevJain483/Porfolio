import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage.tsx";
import ProjectDetailPage from "./pages/ProjectDetailPage.tsx";
import StackPage from "./pages/StackPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import TopAppBar from "./components/TopAppBar.tsx";
import Footer from "./components/Footer.tsx";
import BottomNav from "./components/BottomNav.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <TopAppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/project-detail" element={<ProjectDetailPage />} />
        <Route path="/stack" element={<StackPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Footer />
      <BottomNav />
    </BrowserRouter>
  );
}
