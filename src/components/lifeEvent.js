import React from "react"
import lifeEventStyles from "./lifeEvent.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendar } from "@fortawesome/free-regular-svg-icons"
import { faMapPin } from "@fortawesome/free-solid-svg-icons"

const Footer = ({ timePeriod, title, details, location, current }) => {
    const dot = current ? <div className={lifeEventStyles.dotCurrent}></div> : <div className={lifeEventStyles.dot}></div>
    return (
        <div className={lifeEventStyles.job}>
            {dot}
            <p className={lifeEventStyles.info}>
                <span className={lifeEventStyles.timePeriod}>
                    <FontAwesomeIcon icon={faCalendar} /> {timePeriod}
                </span>

                <span className={lifeEventStyles.location}>
                    <FontAwesomeIcon icon={faMapPin} /> {location}
                </span>
            </p>
            <h2 className={lifeEventStyles.title}>
                {title}
            </h2>
            <p className={lifeEventStyles.details}>{details}</p>
        </div>
    )
}

export default Footer
