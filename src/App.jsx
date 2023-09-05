import HomeView from './views/HomeView.jsx'
import ProjectView from './views/ProjectView.jsx'
import AboutView from './views/AboutView.jsx'
import Footer from './components/Footer.jsx'
import './App.css'


function App() {
  return (
    <div className='container'>
      <HomeView />
      <ProjectView />
      <AboutView />
      <Footer />
    </div>
  )
}

export default App