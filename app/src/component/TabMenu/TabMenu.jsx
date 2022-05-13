import { useState } from 'react';
import styled from 'styled-components';
import TabItem from './TabItem';

function TabMenu({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0][0]);

  const isActive = tabKey => {
    return activeTab === tabKey;
  };

  return (
    <nav>
      <Tabs>
        {tabs.map(tab => {
          const tabKey = tab[0];
          return (
            <TabItem
              key={tabKey}
              tab={tab}
              numOfItem={tabs.length}
              isActive={isActive(tabKey)}
              setActiveTab={setActiveTab}
              role="button"
            />
          );
        })}
      </Tabs>
    </nav>
  );
}

const Tabs = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 2px;
  margin: 50px auto 0;
  width: 400px;
  height: 70px;
  border-radius: 10px;
  overflow: hidden;
  list-style: none;
  padding: 0;
`;

export default TabMenu;
