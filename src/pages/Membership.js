import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Plan from '../components/Plan' 
import Grid from '@material-ui/core/Grid';
import Hero from '../components/Hero'
export default function Membership() {
        return (
          <Box>
            <Hero title="Membership" description="Plans"/>
          <Container maxWidth="lg">
            <Box >
              <Typography align="center" variant="h3" component="h3" gutterBottom>
                Membership
              </Typography>
              <Grid container spacing={3}>
                <Grid item md={4}><Plan name="Free Tier" description="Trial" price="$0.00/MO"/></Grid>
                <Grid item md={4}><Plan name="One month" description="Monthly" price=" $9.99/MO"/></Grid>
                <Grid item md={4}><Plan name="12 months" description="Yearly" price="$109.99/MO"/></Grid>
              </Grid>
            </Box>
          </Container>
          </Box>
        );
      }
      