import "./Highlight.css";
import Title from "../Title/Title";
function Highlight(){
  return(
    <section className="container">
      <div className="highlight">
        <div className="highlight-header">
          <Title 
            title="Special of the week" 
            description="Discover a perfect blend of local tradition and modern culinary art, made with the freshest ingredients."
          />
          <a href="#" className="highlight-button">
            Explore our full menu menu 
            <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.3333 16.0002H6.66663" stroke="#F4CE14" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18.6666 22.6667L25.3333 16" stroke="#F4CE14" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18.6666 9.3335L25.3333 16.0002" stroke="#F4CE14" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Highlight;