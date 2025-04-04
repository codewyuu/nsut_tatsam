import { Box, Container, Typography, Grid, Paper, Button, Card, CardContent, Avatar } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Members = () => {
  const { t } = useTranslation();

  const memberBenefits = [
    {
      title: 'Literary Workshops',
      description: 'Access to exclusive workshops and seminars'
    },
    {
      title: 'Event Participation',
      description: 'Priority participation in all society events'
    },
    {
      title: 'Networking',
      description: 'Connect with Hindi literature enthusiasts'
    },
    {
      title: 'Resources',
      description: 'Access to Hindi literature resources and materials'
    }
  ];

  const coreMembers = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Faculty Advisor',
      image: '/members/advisor.svg'
    },
    {
      name: 'Priya Sharma',
      role: 'President',
      image: '/members/president.svg'
    },
    {
      name: 'Amit Verma',
      role: 'Secretary',
      image: '/members/secretary.svg'
    }
  ];

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Typography variant="h2" component="h1" gutterBottom align="center">
          {t('members.title')}
        </Typography>

        {/* Core Members */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
            Core Members
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {coreMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card elevation={3}>
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Avatar
                      src={member.image}
                      alt={member.name}
                      sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }}
                    />
                    <Typography variant="h6" gutterBottom>
                      {member.name}
                    </Typography>
                    <Typography color="text.secondary">
                      {member.role}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Member Benefits */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
            {t('members.benefits')}
          </Typography>
          <Grid container spacing={3}>
            {memberBenefits.map((benefit, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center'
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    {benefit.title}
                  </Typography>
                  <Typography>
                    {benefit.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Join Us Section */}
        <Box
          sx={{
            bgcolor: 'primary.main',
            color: 'white',
            py: 6,
            px: 4,
            borderRadius: 2,
            textAlign: 'center'
          }}
        >
          <Typography variant="h4" gutterBottom>
            {t('members.join')}
          </Typography>
          <Typography variant="body1" paragraph sx={{ maxWidth: 600, mx: 'auto', mb: 4 }}>
            Join our vibrant community of Hindi literature enthusiasts and be part of our cultural journey.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{ px: 4 }}
          >
            Apply Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Members;