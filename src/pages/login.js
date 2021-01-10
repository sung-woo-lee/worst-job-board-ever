import React from 'react';
import Layout from '../components/layout';

const Login = (props) => {
	return (
		<Layout>
			<form style={{ width: '60%' }}>
				<div
					className='form-control'
					style={{
						display: 'flex',
						flexDirection: 'column',
						height: '6rem',
						alignItems: 'space-evenly',
					}}>
					<label htmlFor='email'>Email</label>
					<input name='email'></input>
				</div>
				<div
					className='form-control'
					style={{
						display: 'flex',
						flexDirection: 'column',
						height: '6rem',
						alignItems: 'space-evenly',
					}}>
					<label htmlFor='password'>Password</label>
					<input name='password'></input>
				</div>
				<div
					className='form-control'
					style={{
						display: 'flex',
						flexDirection: 'column',
						height: '6rem',
						alignItems: 'space-evenly',
					}}>
					<input type='submit' value='Log In'></input>
				</div>
			</form>
		</Layout>
	);
};

export default Login;
