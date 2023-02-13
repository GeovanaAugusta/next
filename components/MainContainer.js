import Footer from "./Footer";
import NavBar from "./Navbar";

export default function Maincontainer({ children }) {
  return (
    <>
    <NavBar />
    <div>
      {children}
    </div>
    <footer>
      <Footer />
    </footer>
    </>
  )

}