import Header from './Header.js'
import Footer from './Footer.js'

const Layout = props => (
    <div>
        <Header/>
        {props.children}
        <Footer/>
    </div>
);

export default Layout