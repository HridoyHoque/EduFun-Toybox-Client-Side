import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ToyCategory = () => {
    
    return (
        <section>
        <Tabs>
          <TabList>
            <Tab>Category 1</Tab>
            <Tab>Category 2</Tab>
            <Tab>Category 3</Tab>
          </TabList>
  
          <TabPanel>
            <h2>Category 1 Content</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit delectus, fuga vel iure incidunt nisi. Magnam doloremque ab, quo, totam illo modi dolorem, necessitatibus saepe qui cum doloribus ut odit.</p>
          </TabPanel>
          <TabPanel>
            <h2>Category 2 Content</h2>
            {/* Add your category-specific content here */}
          </TabPanel>
          <TabPanel>
            <h2>Category 3 Content</h2>
            {/* Add your category-specific content here */}
          </TabPanel>
        </Tabs>
      </section>
    );
};

export default ToyCategory;