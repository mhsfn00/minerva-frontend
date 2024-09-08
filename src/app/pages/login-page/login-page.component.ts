import { Component } from '@angular/core';
import { FunctionButtonComponent } from "../../components/function-button/function-button.component";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FunctionButtonComponent],
  template: `
    <div class="page-container"> 
        <div class="left-side">
            <img class="minerva" src="/app/assets/minerva.png" />
        </div>
        <div class="right-side">
            <div class="login-form">
                <div class="logo-container">
                    <img class="logo" src="/app/assets/logoBig.png" />
                </div>
                <div class="form">
                    <div class="login-input">
                        <label for="login">Usuário</label>
                        <input type="text" name="login" id="login"/>
                    </div>
                    <div class="login-input">
                        <label for="password">Senha</label>
                        <input type="password" name="password" id="password" />
                    </div>
                </div>
                <div class="recovery">
                    <a href="/">Esqueceu sua senha?</a>
                </div>
                <div class="activity">
                    <a href="/home">
                        <div class="login-button">
                            Entrar
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  `,
  styleUrl: './login-page.component.scss'
})

export class LoginPageComponent {

}
