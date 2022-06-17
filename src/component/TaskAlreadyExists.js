import React from 'react'
import { Alert } from "@mui/material";


const TaskAlreadyExists = (props) => {
  return (
    props.duplicate ? (
        <Alert
          style={{ width: "35vh", alignSelf: "center", marginTop: "2vh" }}
          severity="error"
        >
          Task already exists !
        </Alert>
      ) : null
  )
}

export default TaskAlreadyExists