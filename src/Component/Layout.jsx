import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            {/* Main content should expand to push footer down */}
            <main className="flex-1">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default MainLayout;
