
import style from './login.module.css';
import { useState, useContext } from "react";
import { ShoppingCartContext } from '../context/ShoppingCartContext';
import { useNavigate } from "react-router-dom"


function Login() {
    const navigate = useNavigate()
    const login = useContext(ShoppingCartContext)
    const [error, setError] = useState(true)
    const [user, setUser] = useState({ name: '', password: '' })
    const arr = login.value.userData
    const handleLogin = (event) => {
        event.preventDefault();
        const name = user.name;
        const password = user.password
        const use = arr.find(item => (item.name === name && item.password === password))
        console.log(use);
        if (use === undefined) {
            setError(false)
        } else {
            setError(true)
            login.value.setUserLogin(use);
            setUser({ name: '', password: '' })
            navigate('/store')
        }
    }


    return (
        <div className={style.Login}>
            <form className={style.LoginForm}>
                <input className={style.inputLogin} type='text' value={user.name} onChange={e => { setUser({ ...user, name: e.target.value }) }} placeholder="Usename" />
                <input className={style.inputLogin} type='password' value={user.password} onChange={e => { setUser({ ...user, password: e.target.value }) }} placeholder='Password' />
                {error === false && <p>Tên đăng nhập , mật khẩu sai</p>}
                <button className={style.btn} onClick={handleLogin}>LOGIN</button>
            </form>
        </div>
    )
}

export default Login;
