import { Navigate, Route, Routes } from "react-router-dom";
import { Button } from "./components/ui/button";
import { Toaster } from "react-hot-toast";

//pages
import Auth from "./pages/auth/Auth";
import Chat from "./pages/chat/Chat";
import Profile from "./pages/profile/Profile";

const App = () => {
    return (
        <>
            <Toaster position="top-right" />
            <Routes>
                <Route path="/auth" element={<Auth />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<Navigate to={"/auth"} />} />
            </Routes>
        </>
    );
};
export default App;
