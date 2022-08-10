import React, {useState} from "react";
import "./style.css"

const UserLogin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log("submit", {email, password});
    }
    return (
        <div className="loginContainerComponent">
            <h1 className="title">Acessar o sistema</h1>
            <form onSubmit={handleSubmit}>
                <div className="containerLabels">
                    <label className="titleLabel">E-mail</label>
                    <input 
                        className="input"
                        type="email" 
                        id="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required></input>
                </div>
                <div className="containerLabels">
                    <label className="titleLabel">Senha</label>
                    <input 
                        className="input"
                        type="password" 
                        id="pass" 
                        name="password"
                        minlength="8"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        required></input>
                </div>
                <button className="buttonLoginUser" type="submit" value="Entrar">Entrar</button>
            </form>

        </div>
    )
}

export default UserLogin