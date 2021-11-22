import React from 'react';
import './Login.css';

export default function Login(){
    return(
        <div>
            <section>
                <img src="https://png.pngtree.com/png-vector/20191003/ourlarge/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg"/>
            </section>
            <section className="direita">
                <form>
                    <h1>Member Login</h1>
                    <input className="email" placeholder="email" type="text" maxLength="30"/>
                
                    <br/>

                    <input className="senha" placeholder="senha" type="password" maxLength="6"/>

                    <br/>

                    <button>
                    Login
                    </button>
                    <p>
                        Esqueceu sua senha?
                        <a href="#">
                            Clique aqui.
                        </a>
                    </p>
                </form>
            </section>
        </div>
    );
}