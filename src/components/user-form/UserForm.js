import './UserForm.css';
import SuccessMessage from "../success-message/SuccessMessage";

export default function UserForm() {
  return(
    <div className={'right-side'}>
      
      <SuccessMessage/>
      
      <div className={'user-list-btn-box'}>{}</div>
      
      <div className={'form-box'}>
        
        <div className={'form-name'}>
          <span>Create new user</span>
          <sup>x</sup>
        </div>
        
        <form action="">
        
          <label htmlFor='userName'> Username*</label>
          <input type="text" id='userName'/>
          <div className={'valid-error'}>{}</div>
        
          <label htmlFor={'firstName'}>First name*</label>
          <input type="text" id={'firstName'}/>
          <div className={'valid-error'}>{}</div>
        
          <label htmlFor={'lastName'}>Last name*</label>
          <input type="text" id={'lastName'}/>
          <div className={'valid-error'}>{}</div>
        
          <label htmlFor={"email"}>Email*</label>
          <input type="text" id={'email'}/>
          <div className={'valid-error'}>{}</div>
        
          <label>Type*</label>
          <select>
            <option>{}</option>
            <option>Admin</option>
            <option>Driver</option>
          </select>
          <div className={'valid-error'}>{}</div>
        
          <label htmlFor="password">Password*</label>
          <input type="password" id={'password'}/>
          <div className={'valid-error'}>{}</div>
        
          <label htmlFor="repeatPassword">Repeat password*</label>
          <input type="password" id={'repeatPassword'}/>
          <div className={'valid-error'}>{}</div>
        
          <div className={'form-btn-box'}>
            <input type={"submit"} className={'create-btn'} value={'Create'}/>
          </div>
          
        </form>
        
      </div>
    </div>
  )
}