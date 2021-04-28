import './styles.css'

const BackgroundImg = props => {
    return (  
      <div className="bgimg_container">
        <img src={props.uri} alt="Chess on a bed" className="bgimg"/>
        <div className="cover"/>
      </div>
    )
  }

export {BackgroundImg}
  