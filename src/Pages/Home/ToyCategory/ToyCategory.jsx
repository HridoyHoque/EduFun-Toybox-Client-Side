
import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ToyCategory = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [filteredToys, setFilteredToys] = useState([]);
    useEffect(() => {
        fetch('/category.json')
            .then(res => res.json())
            .then(toysData => {
                const filteredData = toysData.filter((toy) => toy.category === `Category ${selectedTab + 1}`);
                setFilteredToys(filteredData);
            })

    }, [selectedTab]);
    return (
        <section>
            <Tabs selectedIndex={selectedTab} onSelect={(index) => setSelectedTab(index)}>
                <TabList>
                    <Tab>Category 1</Tab>
                    <Tab>Category 2</Tab>
                    {/* Add more tab headers for other categories */}
                </TabList>

                {filteredToys.map((toy) => (
                    <TabPanel key={toy.name}>
                        <h2>{toy.name}</h2>
                        <img src={toy.picture} alt={toy.name} />
                        <p>Price: ${toy.price}</p>
                        <button>View Details</button>
                    </TabPanel>
                ))}
            </Tabs>
        </section>
    );
};

export default ToyCategory;