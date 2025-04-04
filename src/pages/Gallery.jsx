import { Box, Container, Typography, Grid, Card, CardMedia, CardActionArea } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Gallery = () => {
  const { t } = useTranslation();

  const galleryItems = [
    {
      title: 'काव्य संध्या 2023',
      image: '/gallery/kavya-sandhya-2023.svg',
      date: '2023-11-15'
    },
    {
      title: 'हिंदी दिवस समारोह',
      image: '/gallery/hindi-diwas-2023.svg',
      date: '2023-09-14'
    },
    {
      title: 'Literary Workshop',
      image: '/gallery/workshop-2023.svg',
      date: '2023-08-20'
    },
    {
      title: 'कवि सम्मेलन',
      image: '/gallery/kavi-sammelan-2023.svg',
      date: '2023-07-25'
    },
    {
      title: 'Cultural Performance',
      image: '/gallery/cultural-event-2023.svg',
      date: '2023-06-30'
    },
    {
      title: 'साहित्य गोष्ठी',
      image: '/gallery/sahitya-gosthi-2023.svg',
      date: '2023-05-15'
    }
  ];

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Typography variant="h2" component="h1" gutterBottom align="center">
          {t('gallery.title')}
        </Typography>

        {/* Gallery Grid */}
        <Grid container spacing={3}>
          {galleryItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card elevation={3}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    image={item.image}
                    alt={item.title}
                    sx={{
                      '&:hover': {
                        transform: 'scale(1.05)',
                        transition: 'transform 0.3s ease-in-out'
                      }
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      bgcolor: 'rgba(0, 0, 0, 0.7)',
                      color: 'white',
                      p: 2
                    }}
                  >
                    <Typography variant="h6" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body2">
                      {new Date(item.date).toLocaleDateString()}
                    </Typography>
                  </Box>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Gallery;