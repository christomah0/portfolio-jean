import TextLanding from "../components/TextLanding.jsx"
import Button from "../components/Button.jsx"
import Header from "../components/Header.jsx"

function HomeView() {
  return (
    <div className="home-view-container">
      <Header />
      <div className="home-view">
        <TextLanding />
        <Button label="Download My CV" />
      </div>
    </div>
  )
}

export default HomeView