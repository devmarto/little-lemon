import "./Title.css";

function Title({title, description}){
  return(
    <div className="title-text">
        <h2 className="title-title">{title}</h2>
        <p className="title-description">{description}</p>
    </div>
  )
}

export default Title;