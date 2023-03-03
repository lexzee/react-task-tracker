import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({name, onAdd, showAdd}) => {    
  return (
    <header className='header'>
        <h1>{name}</h1>
        <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
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