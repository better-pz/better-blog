import Header from "./Header";
import Footer from "./Footer"
import styles from "../styles/Home.module.css";

function Layout(params) {
    return(
        <>
        <Header />
       
        <div >{params.children}</div>
        
        <Footer/>
        </>
    )
}
export default Layout
  
