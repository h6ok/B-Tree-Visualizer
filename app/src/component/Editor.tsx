import React from "react";
import { Card, TextField, Grid, Button, Tabs, Tab, Box } from "@mui/material";

type TabPanelProps = {
  children: React.ReactNode;
  index: number;
  value: number;
};

export default function Editor() {
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (_: React.SyntheticEvent, value: number) => {
    setValue(value);
  };

  return (
    <Card sx={{ height: "250px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Insert" />
          <Tab label="Search" />
          <Tab label="Delete" />
        </Tabs>
      </Box>
      <Box m={2}>
        <TabPanel children={<Insert />} index={0} value={value} />
        <TabPanel children={<Search />} index={1} value={value} />
        <TabPanel children={<Delete />} index={2} value={value} />
      </Box>
    </Card>
  );
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function Insert() {
  const [name, setName] = React.useState<string | null>(null);
  const [age, setAge] = React.useState<number | string | null>();
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid container spacing={2}>
        <Grid size={6}>
          <TextField
            label="Name"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setName(event.target.value)
            }
            value={name}
            variant="outlined"
          />
        </Grid>
        <Grid size={6}>
          <TextField
            label="Age"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setAge(event.target.value)
            }
            value={age}
            variant="outlined"
          />
        </Grid>
      </Grid>
      <Box mt={4}>
        <Button size="medium" variant="contained">
          Insert
        </Button>
      </Box>
    </Box>
  );
}

function Search() {
  const [id, setId] = React.useState<string | null>(null);
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box>
        <TextField
          label="Id"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setId(event.target.value)
          }
          value={id}
          variant="outlined"
        />
      </Box>
      <Box mt={4}>
        <Button size="medium" variant="contained">
          Search
        </Button>
      </Box>
    </Box>
  );
}

function Delete() {
  const [id, setId] = React.useState<string | null>(null);
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box>
        <TextField
          label="Id"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setId(event.target.value)
          }
          value={id}
          variant="outlined"
        />
      </Box>
      <Box mt={4}>
        <Button size="medium" variant="contained">
          Delete
        </Button>
      </Box>
    </Box>
  );
}
