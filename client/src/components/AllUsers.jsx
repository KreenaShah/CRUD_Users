import {Table , TableHead , TableBody , TableRow , TableCell, Button } from '@mui/material';
import {getUsers , deleteUser} from '../service/api.js';
import { useEffect , useState } from 'react';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const AllUsers = () => {

    const [users , setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    } , []);

    const getAllUsers =  async () => {
        let response = await getUsers();
        setUsers(response.data);
        // console.log(response.data);
    }

    const deleteUserDetails = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    return (
        <Table sx={{marginTop:1}}>
            <TableHead>
                <TableRow>
                    <TableCell sx = {{fontWeight:600 , fontSize:18}}>Id</TableCell>
                    <TableCell sx = {{fontWeight:600 , fontSize:18}}>Name</TableCell>
                    <TableCell sx = {{fontWeight:600 , fontSize:18}}>Username</TableCell>
                    <TableCell sx = {{fontWeight:600 , fontSize:18}}>Email</TableCell>
                    <TableCell sx = {{fontWeight:600 , fontSize:18}}>PhoneNo</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                        <TableRow  key={user._id}>
                            <TableCell>{user._id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phoneNo}</TableCell>
                            <TableCell>
                                <Button sx={{backgroundColor:'#800080'}} variant='contained' component={Link} to={`/edit/${user._id}`}><BorderColorIcon/>Edit</Button>
                                <Button  sx={{marginLeft:3 , backgroundColor:'#ff0000'}} variant='contained' onClick={() => deleteUserDetails(user._id)}><DeleteIcon/>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}

export default AllUsers;