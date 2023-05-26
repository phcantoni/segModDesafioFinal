import React from "react";
import Header from "../components/Header"
import styled from "styled-components";
import backgroundLogin from "../components/assets/backgroundLogin.jpg";
import facebook from "../components/assets/Facebook_logo.png";

const MainSection = styled.section`

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-image: url(${backgroundLogin});

        .login_body {
            padding: 50px;
            z-index: 90;
            position: relative;
            max-width: 400px;
            height: 450px;
            margin-left: 30%;
            margin-top: 75px;
            background-color: rgb(0, 0, 0, 0.75);
            border-radius: 10px;
            box-sizing: border-box;
            transform: translateX(-50%);
        }

        .login_body h2 {
            font-size: 32px;
            color: #fff;
            margin-top: 0;
        }

        .login_body input {
            height: 50px;
            width: 100%;
            color: #fff;
            background-color: #333;
            border: none;
            border-radius: 5px;
            padding-left: 15px;
            box-sizing: border-box;
            outline: none;
        }

        .login_body input:hover {
            background-color: #444;
        }

        .input_box {
            margin-bottom: 25px;
        }

        .login_body button {
            height: 50px;
            width: 100%;
            color: #fff;
            background-color: #e50914;
            border-radius: 3px;
            font-weight: bold;
            font-size: 16px;
            border: none;
            margin-bottom: 10px;
        }

        .login_body button:hover {
            background-color: #fc1722;
            cursor: pointer;
        }

        .support {
            display: flex;
            color: #b3b3b3;
            justify-content: space-between;
            font-size: 12px;
            margin-bottom: 5px;
        }

        .support input {
            width: 15px;
            height: 15px;
        }

        .remember {
            display: flex;
            align-items: center;
        }

        .remember span {
            margin-right: 5px;
            height: 25px;
        }

        .help a {
            text-decoration: none;
            color: #737373;
        }

        .help a:hover {
            text-decoration: underline;
        }

        .login_facebook {
            display: flex;
            align-items: center;
            width: 100%;
            color: #737373;
        }

        .login_facebook span {
            margin-right: 5px;
            font-size: 13px;
        }

        .login_facebook span a {
            text-decoration: none;
            color: #737373;
        }

        .sign_up {
            color: #737373;
            font-size: 16px;
        }

        .sign_up a {
            color: #fff;
            font-size: 16px;
            text-decoration: none;
        }

        .sign_up a:hover {
            text-decoration: underline;
        }

        .terms {
            color: #737373;
            font-size: 13px;
        }

        .terms a {
            text-decoration: none;
            color: #0071eb;
        }

        .terms a:hover {
            text-decoration: underline;
        }

`

function Login() {
  return (
    <div>
        <Header />
        <MainSection>
        <div class="login_body" style={{backgroundImage: "cover", backgroundRepeat: "no-repeat"}}>
        <div class="login_box">
            <h2>Entrar</h2>
            <form>
                <div class="input_box">
                    <input required type="email" placeholder="Email ou número de telefone"/>
                </div>

                <div class="input_box">
                    <input required type="password" placeholder="Senha"/>
                </div>

                <div>
                    <button class="submit">
                        Entrar
                    </button>
                </div>
            </form>

            <div class="support">
                <div class="remember">
                    <span><input type="checkbox" style={{margin: "0", padding: "0", height: "13px"}}/></span>
                    <span>Lembre-se de mim</span>
                </div>
                <div class="help">
                    <a href="#">
                        Precisa de ajuda?
                    </a>
                </div>
            </div>

            <div class="login_footer">
                <div class="login_facebook">
                    <span><img height="20px" src={facebook} alt="facebook"/></span>
                    <span><a href="#">Conectar com Facebook</a></span>
                </div>

                <div class="sign_up">
                    <p>Novo por aqui? <a href="#">Assine agora.</a></p>
                </div>

                <div class="terms">
                    <p>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. <a href="#">Saiba mais</a></p>
                </div>
            </div>
        </div>
        </div>
        </MainSection>
    </div>
  )
}

export default Login