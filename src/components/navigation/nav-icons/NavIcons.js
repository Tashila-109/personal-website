import React, { useContext } from 'react'

import BurgerContext from '../../../context/burger/burgerContext'

import iconStyles from './navicons.module.scss'

const NavIcons = () => {
    const burgerContext = useContext(BurgerContext)
    const { showMenu } = burgerContext

    const menuActive = showMenu ? iconStyles.navActive : ''

    return (
        <ul className={`${iconStyles.sideNavIcons} ${menuActive}`}>
            <li className={`${iconStyles.sideNavIcons__item} nav-links`}>
                <a
                    href="https://github.com/Tashila-109"
                    className={iconStyles.sideNavIcons__link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg
                        className={iconStyles.sideNavIcons__github}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 30 29.257"
                    >
                        <path
                            id="Icon_simple-github"
                            data-name="Icon simple-github"
                            d="M15,.445a15,15,0,0,0-4.744,29.231c.75.141,1.025-.322,1.025-.721,0-.356-.013-1.3-.019-2.55-4.173.9-5.053-2.013-5.053-2.013A3.976,3.976,0,0,0,4.541,22.2c-1.359-.93.105-.911.105-.911a3.145,3.145,0,0,1,2.3,1.545,3.2,3.2,0,0,0,4.369,1.248,3.2,3.2,0,0,1,.95-2.006C8.931,21.7,5.43,20.409,5.43,14.662a5.787,5.787,0,0,1,1.544-4.025,5.333,5.333,0,0,1,.131-3.97s1.256-.4,4.125,1.537a14.142,14.142,0,0,1,7.5,0c2.85-1.94,4.106-1.537,4.106-1.537a5.481,5.481,0,0,1,.15,3.97,5.811,5.811,0,0,1,1.538,4.025c0,5.762-3.506,7.031-6.844,7.4a3.591,3.591,0,0,1,1.012,2.775c0,2.007-.019,3.62-.019,4.107,0,.394.262.863,1.031.713A14.982,14.982,0,0,0,15,.445"
                            transform="translate(0 -0.445)"
                        />
                    </svg>
                </a>
            </li>
            <li className={`${iconStyles.sideNavIcons__item} nav-links`}>
                <a
                    href="https://www.instagram.com/tashila.io/"
                    className={iconStyles.sideNavIcons__link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg
                        className={iconStyles.sideNavIcons__instagram}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 28 28"
                    >
                        <path
                            id="Icon_simple-instagram"
                            data-name="Icon simple-instagram"
                            d="M14,0C10.2,0,9.722.017,8.228.084a10.323,10.323,0,0,0-3.4.651A6.856,6.856,0,0,0,2.35,2.35,6.831,6.831,0,0,0,.735,4.83a10.293,10.293,0,0,0-.651,3.4C.014,9.722,0,10.2,0,14s.017,4.278.084,5.771a10.33,10.33,0,0,0,.651,3.4A6.866,6.866,0,0,0,2.35,25.65a6.846,6.846,0,0,0,2.48,1.615,10.336,10.336,0,0,0,3.4.651C9.722,27.986,10.2,28,14,28s4.278-.017,5.771-.084a10.36,10.36,0,0,0,3.4-.651,7.155,7.155,0,0,0,4.095-4.095,10.33,10.33,0,0,0,.651-3.4C27.986,18.278,28,17.8,28,14s-.017-4.278-.084-5.771a10.354,10.354,0,0,0-.651-3.4A6.871,6.871,0,0,0,25.65,2.35,6.821,6.821,0,0,0,23.17.735a10.3,10.3,0,0,0-3.4-.651C18.278.014,17.8,0,14,0Zm0,2.52c3.737,0,4.183.019,5.658.083a7.713,7.713,0,0,1,2.6.484,4.607,4.607,0,0,1,2.658,2.656,7.73,7.73,0,0,1,.482,2.6c.066,1.477.082,1.92.082,5.658s-.017,4.183-.086,5.658a7.879,7.879,0,0,1-.491,2.6,4.445,4.445,0,0,1-1.049,1.612,4.368,4.368,0,0,1-1.61,1.045,7.787,7.787,0,0,1-2.608.482c-1.486.066-1.924.082-5.669.082S9.781,25.46,8.3,25.391A7.938,7.938,0,0,1,5.687,24.9a4.336,4.336,0,0,1-1.609-1.049,4.251,4.251,0,0,1-1.05-1.61,7.945,7.945,0,0,1-.49-2.608c-.053-1.47-.071-1.924-.071-5.651s.019-4.184.071-5.671a7.936,7.936,0,0,1,.49-2.606,4.15,4.15,0,0,1,1.05-1.611A4.141,4.141,0,0,1,5.687,3.046a7.749,7.749,0,0,1,2.591-.491c1.488-.053,1.925-.07,5.669-.07L14,2.52Zm0,4.291A7.189,7.189,0,1,0,21.189,14,7.189,7.189,0,0,0,14,6.811Zm0,11.856A4.667,4.667,0,1,1,18.667,14,4.665,4.665,0,0,1,14,18.667ZM23.154,6.527a1.68,1.68,0,1,1-1.68-1.679A1.681,1.681,0,0,1,23.154,6.527Z"
                        />
                    </svg>
                </a>
            </li>
            <li className={`${iconStyles.sideNavIcons__item} nav-links`}>
                <a
                    href="https://www.linkedin.com/in/tashila-fernando/"
                    className={iconStyles.sideNavIcons__link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg
                        className={iconStyles.sideNavIcons__linkedin}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 23.999"
                    >
                        <path
                            id="Icon_awesome-linkedin-in"
                            data-name="Icon awesome-linkedin-in"
                            d="M5.372,24H.4V7.977H5.372ZM2.882,5.791A2.9,2.9,0,1,1,5.763,2.882,2.906,2.906,0,0,1,2.882,5.791ZM23.995,24H19.03V16.2c0-1.859-.037-4.243-2.587-4.243-2.587,0-2.983,2.02-2.983,4.109V24H8.489V7.977h4.772v2.186h.07a5.228,5.228,0,0,1,4.708-2.587C23.074,7.575,24,10.891,24,15.2V24Z"
                            transform="translate(0 -0.001)"
                        />
                    </svg>
                </a>
            </li>
            <li className={`${iconStyles.sideNavIcons__item} nav-links`}>
                <a
                    href="https://twitter.com/Tashila_dev"
                    className={iconStyles.sideNavIcons__link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="39.158" height="31.803" viewBox="0 0 39.158 31.803" className={iconStyles.sideNavIcons__facebook}>
  <path id="Icon_awesome-twitter" data-name="Icon awesome-twitter" d="M35.133,11.307c.025.348.025.7.025,1.044,0,10.609-8.075,22.834-22.834,22.834A22.679,22.679,0,0,1,0,31.581a16.6,16.6,0,0,0,1.938.1A16.072,16.072,0,0,0,11.9,28.252a8.04,8.04,0,0,1-7.5-5.566,10.12,10.12,0,0,0,1.516.124,8.488,8.488,0,0,0,2.112-.273A8.026,8.026,0,0,1,1.59,14.661v-.1A8.082,8.082,0,0,0,5.218,15.58,8.037,8.037,0,0,1,2.733,4.847a22.812,22.812,0,0,0,16.548,8.4,9.06,9.06,0,0,1-.2-1.839A8.033,8.033,0,0,1,32.971,5.915a15.8,15.8,0,0,0,5.094-1.938A8,8,0,0,1,34.536,8.4a16.089,16.089,0,0,0,4.621-1.242,17.251,17.251,0,0,1-4.025,4.149Z" transform="translate(0 -3.381)"/>
</svg>

                </a>
            </li>
        </ul>
    )
}

export default NavIcons
