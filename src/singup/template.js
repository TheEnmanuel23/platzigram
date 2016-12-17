var yo = require('yo-yo');
var landing = require('../landing');

var singupForm = yo`
<div class="col s12 m7">
	<div class="row">
		<div class="singup-box">
			<h1 class="platzigram">Platzigram</h1>
			<form action="" class="singup-form">
				<h2>Registrate para ver fotos de tus amigos estudiante en Platzi</h2>
				<div class="section">
					<a href="" class="btn btn-fb hide-on-small-only">Iniciar Sesión con Facebook</a>
					<a href="" class="btn btn-fb hide-on-med-and-up"><i class="fa fa-facebook-official"></i> Iniciar Sesión</a>
				</div>
				<div class="divider"></div>
				<div class="section">
					<input type="email" name="email" placeholder="Correo electrónico">
					<input type="text" name="name" placeholder="Nombre completo">
					<input type="text" name="username" placeholder="Nombre de usuario">
					<input type="password" name="password" placeholder="Contraseña">
					<button class="btn waves-effect waves-light btn-singup" type="submit">Regístrate</button>
				</div>
			</form>
		</div>
	</div>
	<div class="row">
		<div class="login-box">
			¿Tienes una cuenta? <a href="/singin">Entrar</a>
		</div>
	</div>						
</div>`;

module.exports = landing(singupForm);