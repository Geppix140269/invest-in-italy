'use client';

import { Tab } from '@headlessui/react';
import { ReactNode } from 'react';

interface TabItem {
  label: string;
  content: ReactNode;
}

interface WidgetsTabsProps {
  tabs: TabItem[];
}

export function WidgetsTabs({ tabs }: WidgetsTabsProps) {
  return (
    <Tab.Group>
      <Tab.List className="flex space-x-1 rounded-lg bg-muted p-1 mb-6">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            className={({ selected }) =>
              `w-full rounded-md py-2.5 text-sm font-medium leading-5 transition-all
              focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2
              ${
                selected
                  ? 'bg-white text-accent shadow'
                  : 'text-muted-foreground hover:bg-white/[0.12] hover:text-foreground'
              }`
            }
          >
            {tab.label}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {tabs.map((tab, index) => (
          <Tab.Panel
            key={index}
            className="rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          >
            {tab.content}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}
