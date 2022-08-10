import React from "react";
import "./style.css"

const UserLogin = () => {
    return (
        <div className="loginContainerComponent">
            <h1 className="title">Acessar o sistema</h1>
            <form>
                <div className="containerLabels">
                    <label className="titleLabel">E-mail</label>
                    <input 
                        className="input"
                        type="email" 
                        id="email"
                        pattern=".+@globex\.com"
                        size="30" 
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
                        required></input>
                </div>
                <button className="buttonLoginUser" type="submit" value="Entrar">Entrar</button>
            </form>

        </div>
    )
}

export default UserLogin