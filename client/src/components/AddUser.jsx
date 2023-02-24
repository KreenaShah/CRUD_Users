import { useState } from "react";
import { FormControl, FormGroup, InputLabel ,Input, Typography , Button , styled} from "@mui/material";
import {addUser} from '../service/api';
import {useNavigate} from 'react-router-dom';

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

const AddUser = () => {

    const [user , setUser] = useState(defaultValue);

    const navigate = useNavigate();

    const onValueChange = (e) => {
        console.log(e.target.name , e.target.value);
        setUser({...user ,[e.target.name] : e.target.value})
        // console.log(user);
    }

    const addUserDetails = async () => {
        await addUser(user);
        navigate('/all');
    }

    return (
        <Container>
            <Typography variant='h4'>Add User</Typography>

            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange = {(e) => onValueChange(e)} name = "name"/>
            </FormControl>

            <FormControl>
                <InputLabel>UserName</InputLabel>
                <Input onChange = {(e) => onValueChange(e)} name = "username"/>
            </FormControl>

            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange = {(e) => onValueChange(e)} name = "email"/>
            </FormControl>

            <FormControl type="tel">
                <InputLabel >PhoneNo</InputLabel>
                <Input onChange = {(e) => onValueChange(e)} name = "phoneNo"/>
            </FormControl>

            <FormControl>
                <Button sx={{backgroundColor:'#20b2aa'}} variant="contained" onClick={() => addUserDetails()}>Add User</Button>
            </FormControl>

        </Container>
    )
}

export default AddUser;