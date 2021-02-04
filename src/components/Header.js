import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title,OnAdd,showAdd}) => {

    

    return (
        <header className='header'>
            <h1 >{title}</h1>
            <Button color={showAdd ?'red':'green'} text={showAdd ?'Close':'Add'} onClick={OnAdd}/>         
        </header>
    )
}

Header.defaultProps={
    title:'Task Tracker'
  }




export default Header
