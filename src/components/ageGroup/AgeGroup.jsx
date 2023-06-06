import "./ageGroup.style.css";
import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";

const tiers = [
  //   {
  //     title: "Infant",
  //     ageGroupPic: "Picture",
  //     description: [
  //       "The relationship that your infant will form with the nurturing caregivers at Hamilton Heights will contribute to a strong sense of safety and security that is the foundation for a healthy, happy childhood. Our infant caregivers are not only top-notch nurturers, they are also experts in infant development. They work hard to support your child's individual milestones and create hands-on sensory experiences that encourage babies to grow and learn.",
  //     ],
  //     buttonText: "Want more info?",
  //     buttonVariant: "outlined",
  //   },
  {
    title: "Toddler",
    ageGroupPic: "Picture",
    description: [
      "Our toddler program focuses on nurturing each child's individual growth and encouraging them to make new discoveries. Toddlers at Hamilton Heights learn self-help skills, build language, and begin to share, follow directions, and learn from others. Each day is filled with movement, play and fun! Our toddler teachers are trained experts in helping toddlers grow and learn. Teachers plan daily activities that engage each child's natural sense of curiosity to gather information about their world.",
    ],
    buttonText: "Want more info?",
    buttonVariant: "outlined",
  },
  {
    title: "Pre-School",
    ageGroupPic: "Picture",
    description: [
      "Our preschool focuses on the development of the whole child- physical, intellectual, social and emotional. The classroom curriculum is child-centered, and teachers design lesson plans based on the actual interests of the children. Each day your preschooler will spend time in large group interactions, small group interactions, and individual child choice time. The classroom environment is set up in learning centers like blocks, dramatic play, art, library, discovery, sand and water, music and movement. Preschoolers at Hamilton Heights play and explore outdoors everyday on our playgrounds and in our natural classrooms.",
    ],
    buttonText: "Want more info?",
    buttonVariant: "outlined",
  },
  {
    title: "Pre-Kindergarten",
    ageGroupPic: "Picture",
    description: [
      "Our Pre-K program is designed for children who will be attending kindergarten the following fall. Our Pre-K teachers are professional educators that help your child become kindergarten-ready — emotionally, socially and academically. Our Pre-K curriculum is child-centered, and teachers design lesson plans based on the actual interests of the children. Each day your preschooler will spend time in large group interactions, small group interactions, and individual child choice time. The classroom environment is set up in learning centers like building, dramatic play, art, library, discovery, sand and water, music and movement. Pre-kindergarteners at Hamilton Heights play and explore outdoors everyday on our playgrounds and in our natural classrooms.",
    ],
    buttonText: "Want more info?",
    buttonVariant: "outlined",
  },
  {
    title: "School Age",
    ageGroupPic: "Picture",
    description: [
      "For school age children, we offer before and after school programming during the school year as well as a full day, action-packed summer program. Our before and after school program complements the school day by offering a variety of relaxing and recreational activities, as well as a snack and the opportunity to work on homework. Hamilton Heights also offers bus transportation to and from designated schools throughout the area." +
        "During the summer, school age children engage in activities and clubs that are determined by their interests. Teachers then help cultivate these interests by planning engaging experiences, games, and hands-on activities. These activities may include cooking, woodworking, science, art, math, dramatic play, and sports. In addition, our schoolagers go on weekly field trips all summer long",
    ],
    buttonText: "Want more info?",
    buttonVariant: "outlined",
  },
];

const defaultTheme = createTheme();

function AgeGroup() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      {/* Hero unit */}
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Infant to School Age Programs
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        >
          At Helen Lucy Daycare, we believe that every child is unique and
          deserves the best care possible. That's why we offer personalized
          attention, flexible schedules, and affordable rates. Whether you need
          full-time or part-time care, we have a spot for your child.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "Enterprise" ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  titleTypographyProps={{ align: "center" }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      mb: 2,
                    }}
                  >
                    <Typography
                      component="h2"
                      variant="h4"
                      color="text.primary"
                    >
                      {tier.ageGroupPic}
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default AgeGroup;
