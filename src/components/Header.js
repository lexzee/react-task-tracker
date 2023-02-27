import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({name}) => {
    const onClick = () => {
        console.log('Click')
    }
    
  return (
    <header className='header'>
        <h1>{name}</h1>
        <Button color='green' text='Add' onClick={onClick}/>
    </header>
  )
}

Header.defaultProps = {
    name: 'Task Tracker',
}

Header.propTypes = {
    name: PropTypes.string.isRequired,
}

// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }
export default Header