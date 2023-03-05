import './FormFooter.css'

import {Link} from 'react-router-dom'
export function FormFooter({account, link, page}){
    return <div className='FormFooter'>
        <p>
            {account} <Link to={page}>{link}</Link>
            {/* No tenes cuenta broder? <Link to='/register'> Unite gratis hoy!</Link>  */}
        </p>
    </div>
}