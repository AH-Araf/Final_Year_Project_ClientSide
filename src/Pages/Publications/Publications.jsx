import { Helmet } from "react-helmet-async";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CSE from "./CSE";
import EEE from "./EEE";
import CE from "./CE";
import DBA from "./DBA";
import Law from "./Law";
import English from "./English";
import ScandHum from "./ScandHum";
import './Publications.css'

const Publications = () => {
    return (
        <div className="scroll-smooth">
            <Helmet>
                <title>BAIUST | Publications</title>
            </Helmet>

            <Tabs>
                <TabList className='bg-blue-200'>
                    <Tab>CSE</Tab>
                    <Tab>EEE</Tab>
                    <Tab>CE</Tab>
                    <Tab>DBA</Tab>
                    <Tab>ENG</Tab>
                    <Tab>Law</Tab>
                    <Tab>Sc&Hum</Tab>
                </TabList>

                <TabPanel>
                    <CSE></CSE>
                </TabPanel>


                <TabPanel>
                    <EEE></EEE>
                </TabPanel>


                <TabPanel>
                    <CE></CE>
                </TabPanel>


                <TabPanel>
                    <DBA></DBA>
                </TabPanel>


                <TabPanel>
                    <English></English>
                </TabPanel>


                <TabPanel>
                    <Law></Law>
                </TabPanel>


                <TabPanel>
                    <ScandHum></ScandHum>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Publications;