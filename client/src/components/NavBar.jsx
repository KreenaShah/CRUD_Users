import {AppBar , Toolbar , styled} from '@mui/material';
import { NavLink } from 'react-router-dom';

const Tabs = styled(NavLink)`
margin-right:10px;
text-decoration:none;
color : #fff;
`;

const NavBar = () => {
    return (
        <AppBar sx={{backgroundColor:'#20b2aa'}} position='static'>
            <Toolbar>
                <Tabs to='/'>CRUD_users</Tabs>
                <Tabs to='/add'>AddUser</Tabs>
                <Tabs to='/all'>AllUsers</Tabs>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;