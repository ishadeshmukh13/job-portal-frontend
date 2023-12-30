import React, { useContext, useEffect } from "react";
import Header from "../components/Header";
import { Grid, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { useNavigate } from "react-router";
const wallpaper = require("../assests/landingpageCandidate.webp");
import CheckIcon from "@mui/icons-material/Check";
import ListOfData from "../components/ListOfData";
import { AppContext } from "../context/createContext";
export const MainGrid = styled(Grid)({
  overflowY: "auto",
  maxWidth: "100vw",
  height: "100vh",
});
const image = require("../assests/landingpage.webp");
const LandingPage = () => {
  const token = localStorage.getItem("token");
  const userType = localStorage.getItem("userType");
  const context = useContext(AppContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (token == null) {
      navigate("/");
    }
  });
  return (
    <MainGrid>
      <Header />
      <Box
        style={{
          background: "rgb(221 203 227 / 52%)",
          paddingBlock: "50px",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Box style={{ paddingInline: "50px" }}>
            <Typography
              style={{ marginTop: "20px", fontSize: "38px", fontWeight: 500 }}
            >
              Get hired
              <br />
              by the popular
              <br />
              candidates.
            </Typography>
            <Typography
              style={{
                marginBlock: "20px",
                fontSize: "18px",
                fontWeight: 500,
              }}
            >
              Find Jobs, Employment &amp; Career Opportunities.
              <br />
              Some of the companies weve helped recruit excellent <br></br>
              applicants over the years.
            </Typography>
          </Box>
          <Box style={{ paddingInline: "50px" }}>
            <img src={image} width={"400px"} />
          </Box>
        </Box>
      </Box>
      {userType === "candidate" ? (
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            paddingBlock: "50px",
            flexDirection: "column",
          }}
        >
          <Typography
            style={{ fontSize: "45px", fontWeight: 700, textAlign: "center" }}
          >
            Recent Jobs
          </Typography>
          {context.companyData?.data?.length > 0 && (
            <ListOfData
              data={context.companyData.data.slice(0, 3)}
              pagination={false}
            />
          )}
        </Box>
      ) : (
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            paddingBlock: "50px",
            flexDirection: "column",
          }}
        >
          <Typography
            style={{ fontSize: "45px", fontWeight: 700, textAlign: "center" }}
          >
            Recent Company
          </Typography>
          {context.companyData?.data?.length > 0 && (
            <ListOfData
              data={context.companyData.data.slice(0, 3)}
              pagination={false}
            />
          )}
        </Box>
      )}
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          paddingBlock: "50px",
          flexWrap:"wrap",
        }}
      >
        <Box style={{ paddingInline: "50px" }}>
          <img src={wallpaper} />
        </Box>
        <Box style={{ paddingInline: "50px" }}>
          <Typography style={{ fontSize: "45px", fontWeight: 700 }}>
            Millions of Jobs.
            <br /> Find the one that suits you.
          </Typography>
          <Typography
            style={{ fontSize: "17px", fontWeight: 400, marginBlock: "20px" }}
          >
            Search all the open positions on the web. Get your own personalized<br/>
            salary estimate. Read reviews on over 600,000 companies worldwide.
          </Typography>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              marginBlock: "20px",
            }}
          >
            <CheckIcon style={{ marginRight: "10px" }} />
            <Typography style={{ fontSize: "18px", fontWeight: 500 }}>
              Bring to the table win-win survival
            </Typography>
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              marginBlock: "20px",
            }}
          >
            <CheckIcon style={{ marginRight: "10px" }} />
            <Typography style={{ fontSize: "18px", fontWeight: 500 }}>
              Capitalize on low hanging fruit to identify
            </Typography>
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              marginBlock: "20px",
            }}
          >
            <CheckIcon style={{ marginRight: "10px" }} />
            <Typography style={{ fontSize: "18px", fontWeight: 500 }}>
              But I must explain to you how all this
            </Typography>
          </Box>
        </Box>
      </Box>
    </MainGrid>
  );
};

export default LandingPage;
