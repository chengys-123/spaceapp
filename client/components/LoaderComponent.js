import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

export default LoaderComponent => {
  return (
    <Loader 
      type="ThreeDots"
      color="#00BFFF"
      height={50}
      width={50}>
    </Loader>
  )
}