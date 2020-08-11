import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import * as Updates from 'expo-updates';

import Home from './screens/Home';

export default function App() {
  useEffect(() => {
    async function updateApp() {
      const { isAvailable } = await Updates.checkForUpdateAsync();

      if (isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    }

    updateApp();
  }, []);

  return (
    <>
      <Home />
      <StatusBar style="auto" />
    </>
  );
}
