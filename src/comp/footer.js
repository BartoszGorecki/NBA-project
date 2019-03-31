import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const CURR_YEAR = (new Date()).getFullYear();

const Footer = () => {
   
    return (
        <footer>
            <div className="footer">
                <div className="media">
                    <a href="#" className="iconback">
                        <FontAwesomeIcon className="iconmedia" icon={['fab', 'facebook-f']} />
                    </a>
                    <a href="#" className="iconback">
                        <FontAwesomeIcon className="iconmedia" icon={['fab', 'twitter']} />
                    </a>
                    <a href="#" className="iconback">
                        <FontAwesomeIcon className="iconmedia" icon={['fab', 'google']} />
                    </a>
                    <a href="#" className="iconback">
                        <FontAwesomeIcon className="iconmedia" icon={['fab', 'instagram']} />
                    </a>
                    <a href="#" className="iconback">
                        <FontAwesomeIcon className="iconmedia" icon={['fab', 'youtube']} />
                    </a>
                </div>
                <div className="copy"> &copy; {CURR_YEAR} Bartosz Górecki</div>
            </div>
        </footer>
    )
}

export default Footer