import './User.css';

export default function UserCard ({item: {
  userName,
  firstName,
  lastName,
  email,
  userType
}}
) {
  return(
    <div className={'user-card-box'}>
      <span className={'table-title__element table-title__element_font'}>{userName}</span>
      <span className={'table-title__element table-title__element_font'}>{firstName}</span>
      <span className={'table-title__element table-title__element_font'}>{lastName}</span>
      <span className={'table-title__element table-title__element_font'}>{email}</span>
      <span className={'table-title__element table-title__element_font'}>{userType}</span>
    </div>
  )
}