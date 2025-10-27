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
        <Grid size={6} mt={2}>
          <Paper elevation={3}>
            <Editor />
          </Paper>
        </Grid>
        <Grid size={6} mt={2}>
          <Paper elevation={3}>
            <Datatable />
          </Paper>
        </Grid>
        <Grid size={12} mt={1}>
          <Paper elevation={3} sx={{ minHeight: "50vh" }}>
            <Box
              sx={{
                margin: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: "100px",
              }}
            >
              <BTree />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
