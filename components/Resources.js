import React from 'react';
import { Text } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { Linking } from 'expo';

const Resources = ({ resource }) => {
  const handlepress = (link) => {
    Linking.openURL(link)
  }
  return (
    <Card key={resource.id}>
      <Text>Title: {resource.title}</Text>
      <Text>Author: {resource.author}</Text>
      <Text>Category: {resource.category}</Text>
      <Text>Description: {resource.title}</Text>
      <Button
        onPress={() => handlepress(resource.website)}
        title='View Resource'
      />
    </Card>
  )
}

export default Resources