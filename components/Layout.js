import Header from "./Header";
import Footer from "./Footer"

import { Affix} from "antd";

function Layout(params) {
    return(
        <>
        <Affix >
        <Header />
        </Affix>
       
        <div>{params.children}</div>
        
        <Footer/>
        </>
    )
}
export default Layout
  
