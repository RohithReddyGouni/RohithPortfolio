import React, { useState } from "react";
import "../App.css";
//import "../styles/PortfolioStyles.css";
import {
  Typography,
  Grid,
  Tabs,
  Tab,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grow,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import resumeData from "../utils/resumeData";

function Portfolio() {
  const [tabValue, setTabValue] = useState("All");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Grid container className="section pb_45">
      <Grid item className="section_title mb_20">
        <span></span>
        <h2>Portfolio</h2>
      </Grid>

      <Grid item xs={12}>
        <Tabs
          value={tabValue}
          indicatorColor="white"
          className="custom_tabs"
          onChange={(event, newValue) => setTabValue(newValue)}
          style={{ marginBottom: "20px" }}
        >
          <Tab
            label="All"
            value="All"
            className={
              tabValue === "All" ? "customTabs_item_active" : "customTabs_item"
            }
            style={{
              padding: "0px",
              minWidth: "0px",
              marginRight: "20px",
              textTransform: "inherit",
              fontSize: "14px",
              fontWeight: "400",
              outlineWidth: "0px",
            }}
          />

          {[...new Set(resumeData.data.projects.map((item) => item.tag))].map(
            (tag) => (
              <Tab
                key={tag}
                label={tag}
                value={tag}
                className={
                  tabValue === tag
                    ? "customTabs_item_active"
                    : "customTabs_item"
                }
                style={{
                  padding: "0px",
                  minWidth: "0px",
                  marginRight: "20px",
                  textTransform: "inherit",
                  fontSize: "14px",
                  fontWeight: "400",
                  outlineWidth: "0px",
                }}
              />
            )
          )}
        </Tabs>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={3}>
          {resumeData.data.projects.map((project) => (
            <>
              {tabValue === project.tag || tabValue === "All" ? (
                <Grid key={project.title} item xs={12} sm={6} md={4} lg={3}>
                  <Grow in timeout={1000}>
                    <Card
                      className="custom_card"
                      onClick={() => setIsOpen(project)}
                      style={{
                        height: "100%",
                        maxWidth: "350px",
                        boxShadow: "0px 0px 48px 0px rgba(4, 6, 4, 0.08)",
                        borderRadius: "5px",
                        overflow: "hidden",
                        outlineWidth: "0px",
                      }}
                    >
                      <CardActionArea>
                        <CardMedia
                          className="custom_card_image"
                          image={project.imageUrl}
                          title={project.title}
                          style={{ height: "140px" }}
                        />
                        <CardContent>
                          <Typography
                            variant="outlined"
                            className="custom_card_title"
                            style={{ fontWeight: "500" }}
                          >
                            {project.title}
                          </Typography>
                          <br />
                          <Typography
                            variant="caption"
                            className="custom_card_caption"
                            style={{ color: "gray", fontWeight: "400" }}
                          >
                            {project.caption}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>

      <Dialog maxWidth="lg" open={isOpen} onClose={() => setIsOpen(false)}>
        <DialogTitle onClose={() => setIsOpen(false)}>
          {isOpen.title}
        </DialogTitle>
        <img
          src={isOpen.imageUrl}
          alt=""
          className="dialogbox_image"
          style={{
            maxHeight: "300px",
            width: "100%",
            objectFit: "cover",
            objectPosition: "center center",
          }}
        />
        <DialogContent>
          <Typography
            className="dialogbox_description"
            style={{ marginTop: "10px" }}
          >
            {isOpen.description}
          </Typography>
        </DialogContent>
        <DialogActions
          className="dialogbox_actions"
          style={{ justifyContent: "center", marginBottom: "10px" }}
        >
          {isOpen?.links?.map((link) => (
            <a
              key={link.link + isOpen.imageUrl}
              href={link.link}
              target="_blank"
              rel="noreferrer"
              className="dialogbox_icon"
              style={{
                color: "darkslategray",
                margin: "0px 12px",
                cursor: "pointer",
              }}
            >
              {" "}
              {link.icon}
            </a>
          ))}
        </DialogActions>
      </Dialog>
    </Grid>
  );
}

export default Portfolio;
