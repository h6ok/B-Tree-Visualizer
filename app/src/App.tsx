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
import Editor from "./component/Editor";
import Datatable from "./component/Datatable";

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
        <Grid size={8} mt={2}>
          <Paper elevation={3}>
            <Editor />
          </Paper>
        </Grid>
        <Grid size={4} mt={2}>
          <Paper elevation={3}>
            <Datatable />
          </Paper>
        </Grid>
        <Grid size={12}>
          <Paper elevation={3} sx={{ height: "550px" }}>
            <BTree />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
