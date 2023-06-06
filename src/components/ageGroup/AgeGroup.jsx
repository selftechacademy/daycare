import "./ageGroup.style.css";
import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";

const tiers = [
  {
    title: "Infant",
    ageGroupPic: "https://source.unsplash.com/random/?cute-infant&1",
    description: [
      "+ Safe and secure environment",
      "+ Expert caregivers",
      "+ Milestone support",
      "+ Sensory experiences",
      "+ Happy childhood",
    ],
    buttonText: "Want more info?",
    buttonVariant: "outlined",
  },
  {
    title: "Toddler",
    ageGroupPic: "https://source.unsplash.com/random/?toddler-playing&1",
    description: [
      "+ Individual growth",
      "+ Language development",
      "+ Sharing and following directions",
      "+ Movement and play",
      "+ Engaging activities",
    ],
    buttonText: "Want more info?",
    buttonVariant: "outlined",
  },
  {
    title: "Pre-School",
    ageGroupPic: "https://source.unsplash.com/random/?pre-school&3",
    description: [
      "+ Whole child development",
      "+ Child-centered curriculum",
      "+ Individualized lesson plans",
      "+ Varied interaction settings",
      "+ Diverse learning environments",
    ],
    buttonText: "Want more info?",
    buttonVariant: "outlined",
  },
  {
    title: "Pre-Kindergarten",
    ageGroupPic: "https://source.unsplash.com/random/?pre-k&4",
    description: [
      "+ Kindergarten readiness",
      "+ Professional educators",
      "+ Child-centered curriculum",
      "+ Varied interaction settings",
      "+ Diverse learning centers",
    ],
    buttonText: "Want more info?",
    buttonVariant: "outlined",
  },
  {
    title: "School Age",
    ageGroupPic: "https://source.unsplash.com/random/?learning-kids&5",
    description: [
      "+ Programming school",
      "+ Summer program",
      "+ Homework assistance",
      "+ Interest-based activities",
      "+ Exciting field trips",
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
              xs={13}
              sm={tier.title === "Enterprise" ? 13 : 6}
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
                    {/* <Typography
                      component="h2"
                      variant="h4"
                      color="text.primary"
                    > */}
                    <img
                      className="ageProgrImg"
                      src={tier.ageGroupPic}
                      alt="infant"
                      height="200px"
                      width="200px"
                    />
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
