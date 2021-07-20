import Footer from './Footer'
import Navbar from './Navbar'

function Layout(props) {
  return (
    <main className="App-header" className={props.className}>
      <Navbar />
      {props.children}
      <Footer />
    </main>
  )
}

export default Layout
