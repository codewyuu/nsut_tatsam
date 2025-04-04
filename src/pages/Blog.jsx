import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Blog = () => {
  const { t } = useTranslation();

  const blogPosts = [
    {
      title: 'हिंदी साहित्य का महत्व',
      image: '/blog/hindi-literature.svg',
      date: '2024-01-15',
      excerpt: 'आधुनिक युग में हिंदी साहित्य की भूमिका और महत्व पर एक विस्तृत चर्चा',
      author: 'डॉ. राजेश कुमार'
    },
    {
      title: 'The Evolution of Hindi Poetry',
      image: '/blog/hindi-poetry.svg',
      date: '2024-01-10',
      excerpt: 'Exploring the journey of Hindi poetry from classical to contemporary forms',
      author: 'Priya Sharma'
    },
    {
      title: 'कविता का सौंदर्य',
      image: '/blog/poetry-beauty.svg',
      date: '2024-01-05',
      excerpt: 'हिंदी कविता में प्रयुक्त विभिन्न काव्य रूपों और उनके सौंदर्य का विश्लेषण',
      author: 'अमित वर्मा'
    },
    {
      title: 'Cultural Impact of Hindi Literature',
      image: '/blog/cultural-impact.svg',
      date: '2023-12-28',
      excerpt: 'Understanding how Hindi literature shapes our cultural identity',
      author: 'Dr. Meera Singh'
    }
  ];

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Typography variant="h2" component="h1" gutterBottom align="center">
          {t('blog.title')}
        </Typography>
        <Typography variant="h4" gutterBottom align="center" color="text.secondary">
          {t('blog.latest')}
        </Typography>

        {/* Blog Posts Grid */}
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {blogPosts.map((post, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card elevation={3}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={post.image}
                    alt={post.title}
                  />
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {post.title}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                      {new Date(post.date).toLocaleDateString()} | {post.author}
                    </Typography>
                    <Typography variant="body1">
                      {post.excerpt}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Blog;