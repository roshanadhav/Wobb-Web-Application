import { useState } from 'react'
import './App.css'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import BrandCard from './CatagaryPage.jsx';


function App() {
  let [count, setCount] = useState(0) ;

  return (
    <>
    
     <Navbar />
     {  (count%2 == 0) ?
      <div className="app">
      {/* Hero Section: Image of Influencer & Heading */}
      <div className="hero">
        <img
          src="/images/How-to-Become-a-Fashion-Influencer-1920x1080-1-1024x576.jpg" // Replace with your influencer PNG image
          alt="Influencer"
          className="hero-image"
        />
        <div className="hero-content">
          <h1>The Ultimate Solution For Collaboration</h1>
          <p>
            Partner with leading influencers and top brands to elevate your
            business to the next level.
          </p>
          <button className="btn" onClick={()=>{setCount(count++)}}>Start Your Free Campaign</button>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="how-it-works">
        <h2 className="section-title">How It Works</h2>
        <div className="steps">
          <div className="step">
            <h3>Step 1</h3>
            <p>Register on our platform and create a campaign</p>
          </div>
          <div className="step">
            <h3>Step 2</h3>
            <p>Browse influencers and select the best fit for your campaign</p>
          </div>
          <div className="step">
            <h3>Step 3</h3>
            <p>Launch your campaign and track results in real-time</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="how-it-works">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="steps">
          <div className="step">
            <h3>Expertise</h3>
            <p>We have years of experience in influencer-brand collaborations.</p>
          </div>
          <div className="step">
            <h3>Global Reach</h3>
            <p>Our platform connects you with influencers globally.</p>
          </div>
          <div className="step">
            <h3>Tailored Campaigns</h3>
            <p>Custom campaigns designed to fit your brands unique needs.</p>
          </div>
        </div>
      </div>
     

      {/* Our Top Brands Section */}
      <div className="how-it-works">
          <h2 className="section-title">Our Top Brands </h2>
          <div className="brands">
            <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-sva-scholarship-20.png" alt="brands img" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png" alt="brands img" />
            <img src="https://png.pngtree.com/png-vector/20220708/ourmid/pngtree-skin-care-logo-png-image_5774040.png" alt="brands img" />
            <img src="https://png.pngtree.com/png-vector/20221014/ourmid/pngtree-skincare-logo-png-image_6325549.png" alt="brands img" />
            <img src="https://i.pinimg.com/originals/6e/0c/ce/6e0cce3bf57f63bf582921286edd1dc7.png" alt="brands img" />
          </div>
      </div>
      </div>
      : <div>
        <BrandCard/>
      </div>
     }
     <Footer/>
    </>
  )
}

export default App
