	import React from 'react'
	import { Link } from 'react-router-dom'
	import "./index.css"

	function Header() {
		return (
			<div className='nuv_header'>
						
			<div className='header'>
	
				<div className='nuv'>
					<button className='btn_nuv'><h1>Menu</h1></button>
				<div className='nuv_content'>
				<ul>
				<li><Link>О комплексе</Link></li>
					<li><Link>О компании</Link></li>
					<li><Link>Новости</Link></li>
					<li><Link>Медиа-банк</Link></li>
					<li><Link>Контакты</Link></li>
					</ul>
				</div>
				</div>
			</div>
			<div>
					<img src='./images/header/logo.png' alt='logo'/>
				</div>
			</div>
		)
	}

	export default Header;