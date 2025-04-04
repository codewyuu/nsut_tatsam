import { Box, Container, Typography, Button, TextField, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const Home = () => {
  const { t } = useTranslation();
  const [selectedLabel, setSelectedLabel] = useState('all');

  const labels = [
    { id: 'literature', name: 'Literature', icon: '📚' },
    { id: 'culture', name: 'Culture', icon: '🎭' },
    { id: 'events', name: 'Events', icon: '📅' }
  ];

  const articles = [
    {
      title: 'Vitae ut leo lorem in turpis',
      image: '/events/kavya-sandhya.svg',
      date: 'Monday 17 August 2023',
      label: 'literature',
      description: 'Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.'
    },
    {
      title: 'Sagittis in neque habitasse',
      image: '/events/sahitya-utsav.svg',
      date: 'Monday 17 August 2023',
      label: 'culture',
      description: 'Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat.'
    },
    {
      title: 'Curabitur voluptat sed prom',
      image: '/blog/hindi-literature.svg',
      date: 'Monday 17 August 2023',
      label: 'events',
      description: 'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam.'
    },
  ];

  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Featured Title Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 6,
          mb: 4
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom>
            Featured Title
          </Typography>
          <Typography variant="h6">
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Main Content */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={3}>
              {articles
                .filter(article => selectedLabel === 'all' || article.label === selectedLabel)
                .map((article, index) => (
                <Grid item xs={12} key={index}>
                  <Card sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
                    <CardMedia
                      component="img"
                      sx={{
                        width: { xs: '100%', sm: 240 },
                        height: { xs: 200, sm: 200 }
                      }}
                      image={article.image}
                      alt={article.title}
                    />
                    <CardContent sx={{ flex: 1 }}>
                      <Typography variant="caption" color="text.secondary">
                        {article.date}
                      </Typography>
                      <Typography variant="h5" component="h2" gutterBottom>
                        {article.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {article.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Sidebar */}
          <Grid item xs={12} md={4}>
            <Card sx={{ mb: 4 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Labels
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Button
                    variant={selectedLabel === 'all' ? 'contained' : 'outlined'}
                    onClick={() => setSelectedLabel('all')}
                    fullWidth
                  >
                    All
                  </Button>
                  {labels.map((label) => (
                    <Button
                      key={label.id}
                      variant={selectedLabel === label.id ? 'contained' : 'outlined'}
                      onClick={() => setSelectedLabel(label.id)}
                      startIcon={<span>{label.icon}</span>}
                      fullWidth
                    >
                      {label.name}
                    </Button>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;