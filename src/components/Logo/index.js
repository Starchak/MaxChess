import './styles.css'

const Logo = ({uri}) => {
    return (
        <div className="logo">
          <img src={uri} alt="Chess on a bed" className="logo_img"/>
        </div>
    )
  }

export {Logo}
  