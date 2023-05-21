import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ScienceToy from './ScienceToy';
import BuildingToy from './BuildingToy';
import LanguageToy from './LanguageToy';

const ToyCategory = () => {
    
    return (
        <section>
        <Tabs>
          <TabList>
            <Tab>Science Toy</Tab>
            <Tab>Building Toy</Tab>
            <Tab>language Toy</Tab>
          </TabList>
  
          <TabPanel>
           <ScienceToy></ScienceToy>
          </TabPanel>
          <TabPanel>
           <BuildingToy></BuildingToy>
          </TabPanel>
          <TabPanel>
            <LanguageToy></LanguageToy>
          </TabPanel>
        </Tabs>
      </section>
    );
};

export default ToyCategory;