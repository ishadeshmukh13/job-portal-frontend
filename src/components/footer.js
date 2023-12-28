import React from 'react'

const footer = () => {
  return (
    <Box
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      position: "absolute",
      bottom: 0,
      background: "#2841a58a",
      width: "100%",
    }}
  >
    <HomeIcon style={{ paddingLeft: "20px", fontSize: "30px" }} />
    <Typography
      style={{ fontSize: "20px", color: "black", paddingRight: "20px" }}
    >
      privcy policy
    </Typography>
    <Typography
      style={{ fontSize: "20px", color: "black", paddingRight: "20px" }}
    >
      terms and condition
    </Typography>
    <Typography
      style={{ fontSize: "20px", color: "black", paddingRight: "20px" }}
    >
      @jobPortal
    </Typography>
  </Box>
  )
}

export default footer