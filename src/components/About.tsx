import { Box, Typography, Paper, Stack } from "@mui/material";
const About = () => {
  const style={ 
    p: 2,
    textAlign: "center",
    backgroundColor: "#FFF",
    borderRadius: 1,}
  return (
    <Box sx={{ p: 4, maxWidth: 800, mx: "auto", fontFamily: "revert" }}>
      <Paper
        elevation={3} 
        sx={{
          p: 4,
          textAlign: "center",
          backgroundColor: "#F7F7F7",
          borderRadius: 2,
          border: "1px solid #E0E0E0",
        }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "#333", fontWeight: "bold", borderBottom: "3px solid #FF7043", display: "inline-block", pb: 0.5 }}
        >
          ברוכים הבאים לאתר המתכונים שלנו!
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            lineHeight: 1.7,
            color: "#555",
          }}
        > באתר שלנו תוכלו למצוא מתכונים מגוונים שמתאימים לכל מטרה:  
          <strong> ארוחות בוקר מפנקות, מנות עיקריות מיוחדות, קינוחים מושקעים ועוד.</strong>
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 3, lineHeight: 1.7, color: "#555" }}
        > הנה כמה דוגמאות למתכונים פופולריים:
        </Typography>
        <Stack spacing={2}>
          <Paper
            elevation={1}
            sx={{ p: 2, style, borderLeft: "5px solid #FF7043" }}
          ><Typography variant="h6" sx={{ color: "#333" }}>לזניה גבינות עשירה</Typography>
          </Paper>
          <Paper
            elevation={1}
            sx={{p: 2, style, borderLeft: "5px solid #29B6F6"}}
          > <Typography variant="h6" sx={{ color: "#333" }}>עוף בתנור עם ירקות שורש</Typography>
          </Paper>
          <Paper
            elevation={1}
            sx={{p: 2,style,borderLeft: "5px solid #66BB6A"}}
          ><Typography variant="h6" sx={{ color: "#333" }}> מרק ירקות קרמי</Typography>
          </Paper>
          <Paper
            elevation={1}
            sx={{ p: 2,style, borderLeft: "5px solid #AB47BC"}}
          ><Typography variant="h6" sx={{ color: "#333" }}>  עוגת גבינה אפויה קלאסית</Typography>
          </Paper>
        </Stack>
        <Typography
          variant="body2"
          sx={{
            mt: 3,
            fontStyle: "italic",
            color: "#777",
          }}
        >מחכים לכם עוד המון מתכונים טעימים ומהנים באתר!  
        </Typography>
      </Paper>
    </Box>
  );
};
export default About;
