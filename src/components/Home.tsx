import { Box, Typography, Paper } from "@mui/material";

const Home = () => {
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
        }}
      >
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
        >
          אנו שמחים לקבל את פניכם באתר המתכונים שלנו, מקום שבו תוכלו למצוא מגוון רחב של מתכונים שיתאימו לכל טעם ולכל אירוע. 
          בין אם אתם מחפשים מתכון לארוחת בוקר מפנקת, מנה עיקרית מרשימה או קינוח מתוק, הגעתם למקום הנכון!
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            lineHeight: 1.7,
            color: "#555",
          }}
        >
          האתר שלנו נועד להעניק לכם חווית בישול מהנה ומעשירה. 
          אנו מאמינים שבישול הוא לא רק צורך, אלא גם אמנות שיכולה להביא שמחה לכל שולחן. 
          לכן, אנחנו מציעים לכם מתכונים עם הוראות ברורות, טיפים שימושיים ודימויים מעוררי תיאבון שיגרמו לכם לרצות להתחיל לבשל מיד.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            lineHeight: 1.7,
            color: "#555",
          }}
        >
          כל מתכון באתר שלנו נבחר בקפידה, עם דגש על מרכיבים איכותיים וטעמים עשירים. 
          צוות השפים שלנו עובד tirelessly כדי להביא לכם מתכונים חדשים ומרגשים, כך שתמיד תמצאו משהו חדש לנסות. 
          אנו גם מקפידים על מתכונים שמתאימים לדיאטות שונות, כך שכל אחד יוכל למצוא את המתכון המושלם בשבילו.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            lineHeight: 1.7,
            color: "#555",
          }}
        >
          אנחנו מזמינים אתכם להצטרף לקהילת הבישול שלנו, לשתף מתכונים, רעיונות וטיפים עם אחרים. 
          אל תהססו להשאיר תגובות על המתכונים, לשאול שאלות או לשתף את החוויות שלכם מהבישול. 
          יחד, נוכל ליצור חווית בישול מהנה ומעוררת השראה עבור כולם!
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mt: 3,
            fontStyle: "italic",
            color: "#777",
          }}
        >
          מחכים לכם עוד המון מתכונים טעימים ומהנים באתר!  
        </Typography>
      </Paper>
    </Box>
  );
};

export default Home;
