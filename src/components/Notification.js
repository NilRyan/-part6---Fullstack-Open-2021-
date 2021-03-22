import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  const notification = props.notification
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  const hide = {
    display: 'none'
  }
  return (
      <div style={ notification ? style : hide}>
        {notification}
      </div>
    )
 
}
const mapStateToProps = (state) => {
  return {
    notification: state.notifications
  }
}
const ConnectedNotification = connect(mapStateToProps)(Notification)
export default ConnectedNotification