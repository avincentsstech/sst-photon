import React from "react"
import { Link, withRouter } from "react-router-dom"
import { getCurrentUser, isLoggedIn, logout } from "../../utils/auth"
import styles from "./status.module.css"

export default withRouter(({ history }) => {
  let details
  if (!isLoggedIn()) {
  } else {
    const { name, email } = getCurrentUser()

    details = (
      <p className={styles[`status__text`]}>
        Logged in as {name} ({email}) {` `}
        <a
          href="/"
          onClick={event => {
            event.preventDefault()
            logout(() => history.push(`/app/login`))
          }}
        > log out
        </a>
      </p>
    )
  }
  return <div style={{float: "right", color: "#fff"}}>{details}</div>
})