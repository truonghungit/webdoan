import style from './login.module.css';
import { useState } from 'react';
import { ShoppingCartContext } from '../context/ShoppingCartContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'

function Register() {
    const navigate = useNavigate()
    const Reg = useContext(ShoppingCartContext)
    const [user, setUser] = useState({ name: '', password: '', confimPassword: '' })
    const [register, setRegister] = useState(0)
    const arr = Reg.value.userData
    const handleRegister = (event) => {
        event.preventDefault();
        if (user.password === user.confimPassword) {
            if (arr.every(item => item.name !== user.name)) {
                Reg.value.setUserData(prev => [...prev, user])
                Reg.value.setUserLogin(user)
                setRegister(0)
                setUser({ name: '', password: '', confimPassword: '' })
                navigate('/store')

            }
            else { setRegister(1) }
        } else { setRegister(2) }
    }
    console.log(user);
    console.log(Reg.value.userData);

    return (
        <div className={style.Login}>
            <form className={style.LoginForm}>
                <input className={style.inputLogin} type='text' value={user.name} onChange={e => { setUser({ ...user, name: e.target.value }) }} placeholder="Usename" />
                <input className={style.inputLogin} type='password' value={user.password} onChange={e => { setUser({ ...user, password: e.target.value }) }} placeholder='Password' />
                <input className={style.inputLogin} type='password' value={user.confimPassword} onChange={e => { setUser({ ...user, confimPassword: e.target.value }) }} placeholder="Confirm password" />
                {register === 2 && <p>Mật khẩu không trung nhau</p>}
                {register === 1 && <p>Tên đăng nhập đã có</p>}
                <button className={style.btn} onClick={handleRegister}>REGISTER</button>
            </form>
        </div>
    )
}

export default Register;
