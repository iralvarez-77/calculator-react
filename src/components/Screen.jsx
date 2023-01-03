import { useSelector } from 'react-redux'
import '../assets/css/screen.css'

const Screen = () => {

  const screen =  useSelector( state => state.myValue.value );

  return (
    <section className="screen-container">
      {screen}
    </section>
  )
}

export default Screen
