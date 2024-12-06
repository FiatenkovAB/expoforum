import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import './index.css'

const HomePage = () => {
    return(
        <div>
            <div className="header">
                <Header/>
            </div>
            <div className="main">
                <Main/>
            </div>
            <div className="footer">
            <Footer/>
            </div>
        </div>
    );
}
export default HomePage;