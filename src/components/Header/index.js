import React from 'react';
import styles  from './style.module.scss';
import links from './links';
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div className={`${styles.header}`}>
            {links.map(element =>
                <Link className={`${styles.header_nav}`}
                      to={element.href}
                      key={element.href}
                      url={element.href}
                >
                    {element.title}
                </Link>
            )}
        </div>
    )
}
