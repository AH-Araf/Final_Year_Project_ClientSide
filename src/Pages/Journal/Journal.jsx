import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import JournalHome from "./JournalHome";
import EditorialBoard from "./EditorialBoard";


const Journal = () => {
    return (
        <div>
            <Tabs>
                <TabList className='bg-blue-200'>
                    <Tab>Home</Tab>
                    <Tab>Editorial Board</Tab>
                    
                </TabList>



                <TabPanel>
                    <JournalHome></JournalHome>
                </TabPanel>
                
                <TabPanel>
                    <EditorialBoard></EditorialBoard>
                </TabPanel>


                
            </Tabs>
        </div>
    );
};

export default Journal;