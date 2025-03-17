import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar.jsx";
import Hero from "../components/Hero/Hero.jsx";
import { PageContainer } from "../components/PageContainer/PageContainer.jsx";
import Footer from "../components/Footer/Footer.jsx"

function PageLayout() {
  return (
    <PageContainer>
        <div style={{flex:1}}>  
          <NavBar />
          <Hero />
          <Outlet />
        </div>
        <Footer/>
    </PageContainer>
  );
}

export default PageLayout;
