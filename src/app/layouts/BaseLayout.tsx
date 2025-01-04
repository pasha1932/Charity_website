
// import Header from "@/widgets/header/ui/Header/Header";
// import { useTheme } from "@/app/providers/ThemeProvider";

import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { Outlet } from "react-router-dom";

function BaseLayout() {
  // const { isDark } = useTheme();
  return (
    <div>
      {/* className={`app ${isDark ? "dark" : "light"}`} */}
      <Header />

      
        <Outlet />
      
      
      <Footer />
    </div>
  );
}

export default BaseLayout;
