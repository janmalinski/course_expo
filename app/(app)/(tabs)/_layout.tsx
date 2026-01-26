import React from 'react';

import { useAuth } from '@/context/auth';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Badge, Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';
import { ActivityIndicator, View } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

      const {loading } = useAuth();
  
      if(loading) return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
          <ActivityIndicator size="large"/>
      </View>);
  

  return (
    <NativeTabs>
      <NativeTabs.Trigger name='index'>
        <Label>Home</Label>
         <Icon sf="house.fill" drawable="alert_dark_frame" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name='explore'>
        <Label>Explore</Label>
        <Icon sf="house.fill" drawable="alert_dark_frame" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name='admin'>
        <Label>Admin</Label>
        <Icon sf="house.fill" drawable="alert_dark_frame" />
        <Badge>1</Badge>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
