import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

function Layout({children}) {
    return(
    <div className="min-h-screen bg-gradient-to-b from-gray-600 to-gray-900 font-sans text-white overflow-hidden">
        <Navbar/>
        {children}
        <Footer/>
    </div>
    )
}

export default Layout;