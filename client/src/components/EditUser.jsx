import { useState , useEffect } from "react";
import { FormControl, FormGroup, InputLabel ,Input, Typography , Button , styled} from "@mui/material";
import {editUser, getUser} from '../service/api';
import {useNavigate , useParams} from 'react-router-dom';

const Container = styled(FormGroup)`
width:50%;
margin : 5% auto 0 auto;
& > div {
    margin-top : 15px;
}
`;

const defaultValue = {
        name : "",
        username : "",
        email : "",
        phoneNo : ""
    }

const EditUser = () => {

    const [user , setUser] = useState(defaultValue);

    const navigate = useNavigate();
    const {id} =useParams();

    useEffect(() => {
        console.log("In useEffect, before loadUserDetails");
        loadUserDetails();
         // eslint-disable-next-line react-hooks/exhaustive-deps
    } , []);

    const loadUserDetails = async () => {
        console.log("In loadUserDetails");
        const response = await getUser(id);
        console.log(response);
        setUser(response.data);
        consoleDetails();
    }

    const consoleDetails = () => {
        console.log("vsgh",user);
    }

    const onValueChange = (e) => {
        console.log(e.target.name , e.target.value);
        setUser({...user ,[e.target.name] : e.target.value})
        console.log(user);
    }

    const editUserDetails = async () => {
        console.log("In edit user details , before calling edituser api");
        console.log(user)
        await editUser(user);
        console.log("In edit user details , after calling edituser api");
        navigate('/all');
    }

    return (
        <Container>
            <Typography variant='h4'>Edit User</Typography>

            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange = {(e) => onValueChange(e)} name = "name" value={user.name} defaultValue={user.name}/>
            </FormControl>

            <FormControl>
                <InputLabel>UserName</InputLabel>
                <Input onChange = {(e) => onValueChange(e)} name = "username" value={user.username}/>
            </FormControl>

            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange = {(e) => onValueChange(e)} name = "email" value={user.email}/>
            </FormControl>

            <FormControl>
                <InputLabel>PhoneNo</InputLabel>
                <Input onChange = {(e) => onValueChange(e)} name = "phoneNo" value={user.phoneNo}/>
            </FormControl>

            <FormControl>
                <Button sx={{backgroundColor:'#20b2aa'}} variant="contained" onClick={() => editUserDetails(user)}>Edit User</Button>
            </FormControl>

        </Container>
    )
}

export default EditUser;