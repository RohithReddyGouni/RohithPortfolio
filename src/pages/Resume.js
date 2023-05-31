import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../styles/ResumeStyles.css";
import "../App.css";
import resumeData from "../utils/resumeData.js";
import { Paper, Typography, Button, Grid, TextField } from "@mui/material";

import { Work, School, LocalCafe } from "@mui/icons-material";
import CustomTimeline from "../components/CustomTimeline";
//import { Avatar } from "@mui/material";
// eslint-disable-next-line
import { TimelineContent, TimelineItem, TimelineDot } from "@mui/lab";
import CustomTimelineSeparator from "../components/CustomTimelineSeparator";
import CustomButton from "../components/CustomButton";

function Resume(props) {
  const form = useRef();
  // eslint-disable-next-line
  let sentFlag = false;
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_22fd4y9",
        "template_1sps5j9",
        e.target,
        "FudVH24QNJYCS9pWH"
      )
      .then(
        (result) => {
          console.log(result.text + " - Email Sent");
          sentFlag = true;
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();

    // if (sentFlag) {
    //   return (
    //     <Alert severity="success">
    //       <AlertTitle>Message Sent</AlertTitle>
    //       <strong>Email sent to Thirunaavukkarasu. Thank you!</strong>
    //     </Alert>
    //   );
    // } else {
    //   return (
    //     <Alert severity="error">
    //       <AlertTitle>Error</AlertTitle>
    //       There was an error while trying to send the message — <strong>Please retry after sometime.</strong>
    //     </Alert>
    //   );
    // }
  };

  return (
    <>
      {/* About me */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h2>About Me</h2>
        </Grid>

        <Grid container className="top_30">
          <Grid item>
            <Typography
              variant="body2"
              style={{
                color: "darkslategray",
                fontSize: "smaller",
                lineHeight: "22px",
                whiteSpace: "pre-line",
              }}
            >
              {resumeData.data.aboutme}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {/* Resume */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h2>Resume</h2>
        </Grid>

        <Grid item xs={12} container>
          {/* Work Experience */}
          <Grid item md={6}>
            <CustomTimeline title="Work Experience" icon={<Work />}>
              {resumeData.data.experiences.map((experience) => (
                <TimelineItem key={experience.title}>
                  <CustomTimelineSeparator />
                  <TimelineContent
                    className="timeline_content"
                    style={{ paddingTop: "0px", marginBottom: "20px" }}
                  >
                    <Typography
                      className="timeline_title"
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      {experience.title}
                    </Typography>
                    <Typography
                      variant="caption"
                      className="timeline_date"
                      style={{ color: "darkslategray" }}
                    >
                      {experience.date}
                    </Typography>
                    <Typography
                      variant="body2"
                      className="timeline_description"
                      style={{
                        color: "gray",
                        fontSize: "small",
                        marginTop: "6px",
                        whiteSpace: "pre-line",
                      }}
                    >
                      {experience.description}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </CustomTimeline>
          </Grid>

          {/* Education */}
          <Grid item md={6}>
            <CustomTimeline title="Education" icon={<School />}>
              {resumeData.data.education.map((education) => (
                <TimelineItem key={education.title}>
                  <CustomTimelineSeparator />
                  <TimelineContent
                    className="timeline_content"
                    style={{ paddingTop: "0px", marginBottom: "20px" }}
                  >
                    <Typography
                      className="timeline_title"
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      {education.title}
                    </Typography>
                    <Typography
                      variant="caption"
                      className="timeline_date"
                      style={{ color: "darkslategray" }}
                    >
                      {education.date}
                    </Typography>
                    <Typography
                      variant="body2"
                      className="timeline_description"
                      style={{
                        color: "gray",
                        fontSize: "small",
                        marginTop: "6px",
                        whiteSpace: "pre-line",
                      }}
                    >
                      {education.description}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </CustomTimeline>
          </Grid>
        </Grid>
      </Grid>

      {/* Recommendations */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_45">
          <span></span>
          <h2>Testimonials</h2>
        </Grid>
      </Grid>

      {/* Skillset */}
      <Grid container className="section graybg p_50 pb_50">
        <Grid container spacing={3} justify={"space-between"}>
          {resumeData.data.skills.map((skill) => (
            <Grid item key={skill.title} xs={12} sm={6} md={3}>
              <Paper
                elevation={0}
                className="skills"
                style={{
                  borderRadius: "8px",
                  padding: "20px",
                  boxShadow: "0px 0px 48px 0px rgba(4, 6, 4, 0.08)",
                  minHeight: "186px",
                  height: "100%",
                }}
              >
                <Typography
                  variant="h6"
                  className="skills_title"
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    lineHeight: "35px",
                  }}
                >
                  {skill.title}
                </Typography>
                {skill.description.map((el) => (
                  <Typography
                    variant="body2"
                    key={el}
                    className="skills_description"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: "#989898",
                      fontWeight: "400",
                      lineHeight: "18px",
                    }}
                  >
                    <TimelineDot
                      variant="outlined"
                      className="skills_description_timeline_dot"
                      style={{
                        color: "black",
                        borderColor: "#ffc500",
                        padding: "2px",
                        marginRight: "5px",
                      }}
                    />
                    {el}
                  </Typography>
                ))}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
      {/* Contact */}

      <Grid container className="section p_50 pb_50" spacing="10">
        <Grid item xs={12} lg={7}>
          <Grid container>
            <Grid item className="section_title top_30">
              <span></span>
              <h2>Contact Form</h2>
            </Grid>

            <form ref={form} onSubmit={sendEmail}>
              <Grid item className="top_30">
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      name="name"
                      label="Name"
                    ></TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      name="email"
                      label="E-mail"
                    ></TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="message"
                      label="Message"
                      multiline
                      minRows={4}
                    ></TextField>
                  </Grid>
                  <Grid item xs={12}>
                    {/* <CustomButton type="submit" text={"Submit"}></CustomButton> */}
                    <Button
                      type="submit"
                      className="custom_btn"
                      style={{
                        backgroundColor: "#ffc500",
                        fontSize: "14px",
                        fontWeight: "500",
                        border: "0",
                        borderRadius: "50px",
                        padding: "1px 12px",
                        lineHeight: "35px",
                        minWidth: "100px",
                        outline: "none",
                      }}
                    >
                      <span
                        className="btn_txt"
                        style={{
                          fontSize: "14px",
                          textTransform: "none",
                          textAlign: "center",
                          width: "100%",
                          marginRight: "5px",
                          marginLeft: "5px",
                        }}
                      >
                        {"Submit"}
                      </span>
                    </Button>
                  </Grid>
                  <br />

                  <Grid item xs={12}>
                    <div
                      onClick={() =>
                        window.open(
                          "https://www.buymeacoffee.com/rohithgouni",
                          "mywindow"
                        )
                      }
                    >
                      <CustomButton
                        text={"Buy me a coffee"}
                        icon={<LocalCafe />}
                      />
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>

        <Grid item xs={12} lg={5}>
          <Grid container>
            {/*  */}
            <Grid item className="section_title top_30">
              <span></span>
              <h2>Contact Information</h2>
            </Grid>

            {/*  */}
            <Grid item xs={12} className="top_30">
              <Grid container>
                <Grid item>
                  <Typography
                    className="contactInfo_item"
                    style={{
                      lineHeight: "34px",
                      fontSize: "14px",
                      color: "#787878",
                    }}
                  >
                    <span>Address:</span> {resumeData.data.place}
                  </Typography>
                  <Typography
                    className="contactInfo_item"
                    style={{
                      lineHeight: "34px",
                      fontSize: "14px",
                      color: "#787878",
                    }}
                  >
                    <span>Phone:</span> {resumeData.data.phone}
                  </Typography>
                  <Typography
                    className="contactInfo_item"
                    style={{
                      lineHeight: "34px",
                      fontSize: "14px",
                      color: "#787878",
                    }}
                  >
                    <span>Email:</span>{" "}
                    <a
                      href={`mailto:${resumeData.data.email}`}
                      style={{
                        textDecoration: "none",
                        color: "#ffc500",
                      }}
                    >
                      {resumeData.data.email}
                    </a>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            {
              <Grid item xs={12} className="top_30">
                <Grid container>
                  <Grid item>
                    <Typography
                      className="contactInfo_item"
                      style={{
                        lineHeight: "34px",
                        fontSize: "14px",
                        color: "#787878",
                      }}
                    >
                      <span>Follow Me:</span>
                    </Typography>
                    <div>
                      {resumeData.data.social.map((socials) => (
                        <a
                          key={socials.name}
                          href={socials.link}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            color: "black",
                            marginRight: "8px",
                            marginLeft: "8px",
                          }}
                        >
                          {socials.icon}
                        </a>
                      ))}
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            }
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Resume;
