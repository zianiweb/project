import { styled } from "../../stitches.config";

export const Crad = styled("div", {
  fontFamily: "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  margin: "5px",
  backgroundColor: "#fff",
  border: "1px solid rgba(0,0,0,.125)",
  borderRadius: ".2rem",
  width: "320px",
  minHeight: "450px",
});
  
export const HeaderCrad = styled("div", {
  padding: "20px",
  borderBottom: "1px solid rgba(0,0,0,.125)",
  [`& h3`]: {
    color: "white",
    fontSize: "25px",
    fontWeight: "600",
    height: "95px",
    margin: 0,
  },
  [`& ul`]: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
    padding: "0",
    margin: "0",
    listStyle: "none",
  },
  [`& ul li`]: {
    fontSize: "15px",
  },
  [`& ul li:last-child`]: {
    textAlign: "right",
  },
  [`& ul li.light p`]: {
    color: "white",
  },
  [`& ul li.dark p`]: {
    color: "black",
  },
  [`& ul li label`]: {
    color: "white",
    padding: "4px 8px",
    border: "1px solid white",
  },
  [`& ul li label.pass`]: {
    backgroundColor: "#578f83",
  },
  [`& ul li label.fail`]: {
    backgroundColor: "#c36f7b",
  },
});
  
export const BodyCrad = styled("div", {
  backgroundColor: "white",
  padding: "20px",
  [`& ul`]: {
    listStyle: "none",
    fontSize: "15px",
    padding: "0",
    margin: "0",
  },
  [`& ul li:not(:last-child)`]: {
    paddingBottom: "10px",
  },
  [`& ul li label`]: {
    textTransform: "uppercase",
    color: "#99a0ac",
  },
  [`& ul li p`]: {
    margin: "5px 0",
  },
});
  
export const TestColor = styled("span", {
  color: "white",
  padding: "4px 8px",
  border: "1px solid white",
  textAlign: "center",
  textTransform: "uppercase",
  fontSize: "13px",
  width: "52px",
  variants: {
    color: {
      pass: {
        backgroundColor: "#578f83",
      },
      fail: {
        backgroundColor: "#c36f7b",
      },
    },
  },
});
  
export const LoadingCard = styled("span", {
  position: "absolute",
  background: "whitesmoke",
  width: "100%",
  height: "100%",
  ['& p']: {
    position: "absolute",
    textAlign: "center",
    top: "45%",
    width: "100%",
    fontWeight: "500",
    color: "rgba(0, 0, 0, 0.4)"
  }
});