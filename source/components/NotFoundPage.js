import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => (
		<div>
			404!!Exception Caught <Link to = "/" activeClassName = "is-active" > Go Home</Link>
		</div>
	);	

export default NotFoundPage;