import Body from '@/components/layout/body';
import FloatMenu from '@/components/layout/float-menu';
import TabPanel from '@/components/layout/tab-panel';
import Loading from '@/components/Loading';
import { Tune } from '@mui/icons-material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import React, { useEffect, useState } from 'react';
import Products from '../components/products';
import Welcome from '../components/welcome';
import { useSE } from '../context/SEProvider';

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

export default function Home() {
  const se = useSE();

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>();
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    setIsAuthenticated(se.state.isAuthenticated);
  }, [se.state.isAuthenticated]);

  if (isAuthenticated === undefined) {
    return <Loading />;
  }

  if (!isAuthenticated) {
    return <Welcome />;
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Body withImgBackground={true}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Tabs
            value={activeTab}
            onChange={handleChange}
            aria-label="products tab list"
          >
            <Tab value={1} label="Following" {...a11yProps} />
            <Tab value={2} label="All" {...a11yProps} />
          </Tabs>
          <IconButton aria-label="filter" color="success">
            <Tune />
          </IconButton>
        </Box>
        <TabPanel index={1} value={activeTab}>
          <Products showAll={false} />
        </TabPanel>
        <TabPanel index={2} value={activeTab}>
          <Products showAll={true} />
        </TabPanel>
        <FloatMenu />
      </Box>
    </Body>
  );
}
