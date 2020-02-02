import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Resources from './components/Resources';

function App() {
  const [resources, setResources] = useState([])
  useEffect(() => {
    async function fetchData() {
      const result = await fetch('https://projectseedpoc.herokuapp.com/api/v1/resources')
      const data = await result.json();
      setResources(data.data);
    }
    fetchData()
  }, [])
  console.log(resources)
  return (
    <View style={styles.container}>
      {resources.map((resource =>
        <Resources resource={resource} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;