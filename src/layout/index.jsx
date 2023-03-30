import Header from "../components/Header"
import Footer from "../components/Footer"
// sections
import Intro from "../components/sections/Intro"
import Categories from "../components/sections/Categories"
import Collections from "../components/sections/Collections"
import Nfts from "../components/sections/Nfts"
import Download from "../components/sections/Download"

const Layout = () => {
    return (
        <>
            <Header />
            <Intro />
            <Categories />
            <Collections />
            <Nfts />
            <Download />
            <Footer />
        </>
    )
}

export default Layout