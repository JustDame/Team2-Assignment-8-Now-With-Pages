import { Container, Typography, Box, Fade } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  heroContainer: {
    position: 'relative',
    marginBottom: 20
  },
  heroText: {
    color: 'white',
  },
  heroTitle: {
    fontWeight: '600'
  }, 
  heroOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  heroSubtitle: {
    fontSize: 18,
    maxWidth: '25%',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
})

export default function Hero(props) {
  const classes = useStyles()
  return (
    <Container
      maxWidth={false}
      style={{
        backgroundImage: `url(${props.image || '/assets/images/hero-bg.jpg'})`,
        backgroundPosition: '80% center',
        minHeight: 400,
      }}
      className={classes.heroContainer}
    >
      <Box className={classes.heroOverlay} textAlign="center">
        <Fade in={true} timeout={1000}>
          <Typography
            className={`${classes.heroText} ${classes.heroTitle}`}
            variant='h2'
            gutterBottom
          >
            {props.title || 'FoxFiles'}
          </Typography>
        </Fade>
        <Fade in={true} timeout={1500}>
          <Typography
              variant='body1'
              gutterBottom
              className={`${classes.heroText} ${classes.heroSubtitle}`}
            >
              { props.description || 'We provide you with state of the art self-hosted file server software. Enter in the new privacy age.' }
            </Typography>
        </Fade>
      </Box>
    </Container>
  )
}
