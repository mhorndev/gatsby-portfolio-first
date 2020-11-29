import React from "react"
import links from "./links"

const Navbar = (props) => {

  const onNavigate = (e,path) => {
    e.preventDefault()
    props.onNavigate(path)
  }

  return(
    <nav>
      <section>
        <div id="brand">
          <img 
            width="40"
            alt="Gatsby"
            onClick={e => onNavigate(e,"/")}
            src="https://www.gatsbyjs.com/Gatsby-Monogram.svg"  
            />
        </div>
        <ul>
          { links.map((item,index) => {
            return (
              <li key={index}>
                <a href={item.path} onClick={e => onNavigate(e, item.path)}>
                  {item.name}
                </a>
              </li>
            )
          })}
        </ul>
      </section>
    </nav>
  )
}

export default Navbar