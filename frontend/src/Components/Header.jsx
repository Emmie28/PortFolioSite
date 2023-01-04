import React, {useState, useEffect} from 'react';
import { Button, Menu, Typography, Avatar, Dropdown } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { HomeOutlined, LoginOutlined, MenuOutlined, 
        LogoutOutlined, UserAddOutlined, AppstoreOutlined, 
        IdcardOutlined, FundOutlined, LockOutlined, FilePdfOutlined, 
        CommentOutlined, 
        ProfileOutlined,
        DatabaseOutlined} from '@ant-design/icons';

import {useSelector, useDispatch} from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'



function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user} = useSelector((state) => state.auth)

    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);

    const items = (
        <Menu>
          <Menu.Item icon={<IdcardOutlined />}><Link to='/ResumeBuilder'>Resume Builder</Link></Menu.Item>
          <Menu.Item icon={<FundOutlined />}><Link to='/Cryptocurrencies'>Crypto News</Link></Menu.Item>
          <Menu.Item icon={<LockOutlined />}><Link to='/CyberSecurityNews'>Cyber Security News</Link></Menu.Item>
          <Menu.Item icon={<FilePdfOutlined />}>Pdf Editor</Menu.Item>
          <Menu.Item icon={<CommentOutlined />}>Random Quotes</Menu.Item>
          <Menu.Item icon={<DatabaseOutlined />}><Link to='/NetflixMovieDatabase'>Netflix Movies</Link></Menu.Item>
        </Menu>
      );


    useEffect(() =>{
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() =>{
        if(screenSize < 768) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize])

    const onLogout = () => {

        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Typography.Title level={2} className='logo'>
                My PortFolio
            </Typography.Title>
        </div>
        <Button className='menu-control-container' onClick={() => setActiveMenu(!activeMenu)}>
            <MenuOutlined />
        </Button>

        {activeMenu && (
                 <Menu theme='dark'>
                 <Menu.Item icon={<HomeOutlined />}>
                     <Link to='/'>Home</Link>
                 </Menu.Item>
                 
                { user ? (<>
                    <Menu.Item icon={<ProfileOutlined />}><Link to='/Profile'>Profile</Link></Menu.Item>
                    <Menu.Item icon={<LogoutOutlined />} onClick={onLogout}>
                    Logout
                    </Menu.Item>
                    <Menu.Item icon={<AppstoreOutlined />}><Dropdown overlay={items}><a>Apps</a></Dropdown></Menu.Item>
                </>) : (
                    <>
                    <Menu.Item icon={<LoginOutlined />}>
                            <Link to='/Login'>Login</Link>
                    </Menu.Item>
                    <Menu.Item icon={<UserAddOutlined />}>
                     <Link to='/Register'>Register</Link>
                    </Menu.Item>
                    </>
                )} 
                  
             </Menu>
            )}
        
    </div>
  )
}

export default Header