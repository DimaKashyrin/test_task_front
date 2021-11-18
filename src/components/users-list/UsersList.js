import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { usersServer } from "../../services/users.service";
import './User-list.css';
import UserCard from "../user-card/UserCard";
import ErrorMessage from "../error-massage/ErrorMessage";

export default function UsersList() {
 
  let { users } = useSelector(state => state );
  let dispatch = useDispatch();
  
  useEffect( () => {
    dispatch(usersServer());
  },[])
  
  return(
    <div className={'left-side'}>
      
      <ErrorMessage/>
      
      <div className={'user-list-btn-box'}>
          <button className={'create-btn'}>Create User</button>
      </div>
      
      <div className={'table'}>
        <div className={'table-title'}>
          <span className={'table-title__element'}>USER NAME</span>
          <span className={'table-title__element'}>FIRST NAME</span>
          <span className={'table-title__element'}>LAST NAME</span>
          <span className={'table-title__element'}>EMAIL</span>
          <span className={'table-title__element'}>TYPE</span>
        </div>
        {
          users.map(value => <UserCard key={value._id} item={value}/>)
        }
      </div>
      
    </div>
  )
}