import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from 'react';
import ToyCategoryCart from './ToyCategoryCart';

const ToyCategory = () => {
  const [categoryToys, setCategoryToys] = useState([])
  const [activeTab, setActiveTab] = useState("Science")

  useEffect(() => {
    fetch(`http://localhost:5000/category/${activeTab}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setCategoryToys(data)
      })
  }, [activeTab])
  const handleTabScience = (TabName) => {
    setActiveTab(TabName)
  }

  return (
    <section>
      <Tabs>
        <TabList>
          <Tab onClick={() => handleTabScience("Science")}>Science</Tab>
          <Tab onClick={() => handleTabScience("Education")}>Education</Tab>
          <Tab onClick={() => handleTabScience("Language")}>Language</Tab>
        </TabList>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {categoryToys?.map(categoryToy => (
            <ToyCategoryCart
            key={categoryToy._id}
            categoryToy={categoryToy}
            ></ToyCategoryCart>))}
        </div>
        <TabPanel>
        </TabPanel>
        <TabPanel>
        </TabPanel>
        <TabPanel>
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default ToyCategory;