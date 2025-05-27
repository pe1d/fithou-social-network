import { Routes, Route } from "react-router-dom";
import MainLayout from "../../layout/app/MainLayout";
import HomeScreen from "../../screens/home/HomeScreen";
import MessagesScreen from "../../screens/messages/MessagesScreen";
import RegisterScreen from "../../screens/register/RegisterScreen";
import ScheduleScreen from "../../screens/schedule/ScheduleScreen";
import ExternalPageScreen from "../../screens/external/ExternalPageScreen";
import LmsScreen from "../../screens/lms/LmsScreen";

const AppRoute = () => {
    return (
        <Routes>
            {/* Gói tất cả route trong layout chính */}
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomeScreen />} />
                <Route path="messages" element={<MessagesScreen />} />
                <Route path="register" element={<RegisterScreen />} />
                <Route path="schedule" element={<ScheduleScreen />} />
                <Route path="external" element={<ExternalPageScreen />} />
                <Route path="lms" element={<LmsScreen />} />
            </Route>
        </Routes>
    );
};

export default AppRoute;
