import {
  Grid,
  Box,
  Paper,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
import "./App.css";
import BTree from "./component/BTreePage/BTree";

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            BTree Visualizer
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2}>
        <Grid size={6}>
          <Paper elevation={3} />
          <div>Hello</div>
        </Grid>
        <Grid size={6}>
          <Paper elevation={3} />
          <div>world</div>
        </Grid>
        <Grid size={12}>
          <Box display="flex">
            <BTree />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
