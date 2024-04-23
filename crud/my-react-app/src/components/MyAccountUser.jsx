// Saas UI & Chakra UI Imports
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { UserSettings } from "./UserSettings";
import { SaasProvider } from "@saas-ui/react";

// My Components

export default function MyAccountUser() {
  return (
    <Box width="100%" padding="1em" backgroundColor="gray.100"> {/* Added background color */}
      <Tabs isFitted variant="enclosed">
        <TabList justifyContent="center"> {/* Center aligning the tab list */}
          <Tab _selected={{ color: "black", bg: "blue.500" }}> {/* Updated selected tab style */}
            <h2>user</h2>
          </Tab>
          <Tab _selected={{ color: "white", bg: "blue.500" }}>
          <h2>user</h2>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SaasProvider>
              <UserSettings />
            </SaasProvider>
          </TabPanel>
          <TabPanel>
            <p>Integrations Here!</p>
          </TabPanel>
          <TabPanel>
            <p>Security Here!</p>
          </TabPanel>
          <TabPanel>
            <p>Billing Here!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
