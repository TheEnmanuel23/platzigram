var yo = require('yo-yo');
var landing = require('../landing');
var translate = require('../translate');

var singupForm = yo`
<div class="col s12 m7">
	<div class="row">
		<div class="singup-box">
			<h1 class="platzigram">Platzigram</h1>
			<form action="" class="singup-form">
				<h2>${translate.message('singup.subheading')}</h2>
				<div class="section">
					<a href="" class="btn btn-fb hide-on-small-only">${translate.message('singup.facebook')}</a>
					<a href="" class="btn btn-fb hide-on-med-and-up"><i class="fa fa-facebook-official"></i> ${translate.message('singup.text')}</a>
				</div>
				<div class="divider"></div>
				<div class="section">
					<input type="email" name="email" placeholder="${translate.message('email')}">
					<input type="text" name="name" placeholder="${translate.message('fullname')}">
					<input type="text" name="username" placeholder="${translate.message('username')}"">
					<input type="password" name="password" placeholder="${translate.message('password')}">
					<button class="btn waves-effect waves-light btn-singup" type="submit">${translate.message('singup.call-to-action')}</button>
				</div>
			</form>
		</div>
	</div>
	<div class="row">
		<div class="login-box">
			${translate.message('singup.have-account')} <a href="/singin">${translate.message('singin')}</a>
		</div>
	</div>						
</div>`;

module.exports = landing(singupForm);