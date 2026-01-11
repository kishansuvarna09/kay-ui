import React, { useState } from 'react'
import { Button, Input, Card } from '@kay-ui/core'
import { Search, Favorite, Share, Send } from '@mui/icons-material'
import { Container, Typography, Grid, Box } from '@mui/material'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [cardClicked, setCardClicked] = useState(false)

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h2" gutterBottom align="center">
        Kay UI Playground
      </Typography>

      <Typography variant="h4" gutterBottom sx={{ mt: 4, mb: 2 }}>
        Buttons
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" color="error" startIcon={<Favorite />}>
          Like
        </Button>
        <Button variant="text" color="info" endIcon={<Send />}>
          Send
        </Button>
        <Button size="small" variant="contained">
          Small
        </Button>
        <Button size="large" variant="contained">
          Large
        </Button>
        <Button disabled variant="contained">
          Disabled
        </Button>
      </Box>

      <Typography variant="h4" gutterBottom sx={{ mt: 4, mb: 2 }}>
        Inputs
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 4, maxWidth: '500px' }}>
        <Input
          label="Search"
          placeholder="Search something..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          startAdornment={<Search />}
          fullWidth
        />

        <Input
          label="Email"
          placeholder="Enter your email"
          type="email"
          variant="filled"
          helperText="We'll never share your email"
          fullWidth
        />

        <Input
          label="Password"
          placeholder="Enter your password"
          type="password"
          error
          helperText="Password must be at least 8 characters"
          fullWidth
        />

        <Input
          placeholder="Disabled input"
          disabled
          value="Cannot edit this"
        />
      </Box>

      <Typography variant="h4" gutterBottom sx={{ mt: 4, mb: 2 }}>
        Cards
      </Typography>

      <Grid container spacing={4} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6} lg={4}>
          <Card
            elevation={3}
            hoverable
            header={
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                Basic Card
              </Typography>
            }
          >
            <Typography variant="body1" paragraph>
              This is a basic card with some content. It demonstrates the default
              styling and behavior of the KayCard component.
            </Typography>
            <Button variant="contained" size="small">
              Learn More
            </Button>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Card
            variant="outlined"
            header={
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  Outlined Card
                </Typography>
                <Favorite color="error" />
              </div>
            }
            actions={
              <>
                <Button size="small">Like</Button>
                <Button size="small" variant="outlined">
                  Share
                </Button>
              </>
            }
          >
            <Typography variant="body1" paragraph>
              This card uses the outlined variant and includes header, content,
              and actions sections.
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Card
            elevation={5}
            hoverable
            clickable
            onClick={() => setCardClicked(!cardClicked)}
            header={
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                Interactive Card
              </Typography>
            }
            footer={
              <Typography variant="caption">
                Click me to toggle state
              </Typography>
            }
          >
            <Typography variant="body1" paragraph>
              {cardClicked
                ? 'Card was clicked! 🎉'
                : 'Click this card to see an interaction.'}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              State: {cardClicked ? 'Active' : 'Inactive'}
            </Typography>
          </Card>
        </Grid>
      </Grid>

      <Typography variant="h4" gutterBottom sx={{ mt: 4, mb: 2 }}>
        Complex Example
      </Typography>

      <Card
        elevation={4}
        hoverable
        backgroundColor="#f5f5f5"
        borderRadius="16px"
        padding="24px"
        gap="24px"
      >
        <div>
          <img
            src="https://source.unsplash.com/random/1200x400"
            alt="Featured"
            style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '16px' }}
          />
          <Typography variant="h4" gutterBottom>
            Featured Content
          </Typography>
          <Typography variant="body1" paragraph>
            This is a comprehensive example showing how multiple Kay UI components
            can work together to create complex interfaces.
          </Typography>
          <Typography variant="body2" paragraph color="text.secondary">
            The card component provides structure, while buttons and inputs enable
            user interaction. All components share the same design system and theme.
          </Typography>
        </div>

        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Input
            placeholder="Add a comment..."
            startAdornment={<Search />}
            sx={{ flex: 1, minWidth: '200px' }}
          />
          <Button variant="contained" startIcon={<Send />}>
            Submit
          </Button>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button size="small" startIcon={<Favorite />}>Like</Button>
            <Button size="small" startIcon={<Share />}>Share</Button>
          </Box>
          <Typography variant="caption" color="text.secondary">
            Updated 2 hours ago
          </Typography>
        </Box>
      </Card>

      <Box sx={{ mt: 4, p: 3, backgroundColor: 'background.default', borderRadius: 1 }}>
        <Typography variant="body2" color="text.secondary" align="center">
          Kay UI Playground - Demonstrating Button, Input, and Card components
        </Typography>
      </Box>
    </Container>
  )
}

export default App