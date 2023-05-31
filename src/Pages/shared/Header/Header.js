import React, { useContext } from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBrain, FaMoon, FaSun, FaUserAlt } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider';
import { setThemeToLocalStorage } from '../../../utilities/setThemeToLocalStorage';




const Header = () => {

    const { user, theme, setTheme } = useContext(AuthContext);


    const toggleTheme = (theme) => {
        setTheme(theme)
        setThemeToLocalStorage(theme);
    }

    return (
        <Navbar className='navbar' collapseOnSelect expand="lg" variant="dark">
            <Container className=''>
                <Link className='me-5' to='/'>
                    <FaBrain className='text-white fs-1 me-3 ms-1'></FaBrain>
                    <img src={require('../../../images/learners.png')} alt='site-name' width='130px' height='60px'></img>
                </Link>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <div className='theme-btn fs-5 mt-1 me-3 d-flex justify-content-center'>
                            {
                                theme === 'light' ?
                                    <FaMoon onClick={() => toggleTheme('dark')} ></FaMoon>
                                    :
                                    <FaSun onClick={() => toggleTheme('light')} ></FaSun>

                            }
                        </div>
                        <Link to='/' className='me-3'>Home</Link>
                        <Link to='/courses' className='me-3'>Courses</Link>
                        <Link to='/faq' className='me-3'>FAQ</Link>
                        <Link to='/blog' className='me-3'>Blog</Link>
                    </Nav>
                    <Nav>
                        {
                            user ?
                                <div className='d-flex justify-content-center mt-1 mb-1'>
                                    <Button style={{ width: '100px' }} className='me-3 mt-2'>Log Out</Button>
                                    <OverlayTrigger
                                        key='bottom'
                                        placement='bottom'
                                        overlay={
                                            <Tooltip id={'tooltip-bottom'}>
                                                {user.displayName}
                                            </Tooltip>
                                        }
                                    >
                                        {
                                            user.photoURL ?
                                                <Image src={user.photoURL} height='50px' width='50px' roundedCircle></Image>
                                                :
                                                <FaUserAlt className='text-white fs-2 mt-2'></FaUserAlt>
                                        }

                                    </OverlayTrigger>

                                </div>

                                :

                                <div className='d-flex justify-content-center'>
                                    <Link to='/login'>
                                        <Button style={{ width: '100px' }} className='me-2 mt-2'>Login</Button>
                                    </Link>

                                    <Link to='/register'>
                                        <Button style={{ width: '100px' }} className='mt-2'>Register</Button>
                                    </Link>

                                </div>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}



export default Header;