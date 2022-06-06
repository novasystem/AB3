import { API } from 'aws-amplify';
import React from 'react';
import { View, Button, TextInput, ScrollView } from 'react-native';

async function AddTrip() {
  const data = {
    body: {
      name: AB3Trips.name,
      flight: AB3Trips.flight,
      airline: AB3Trips.airline,
      origin: AB3Trips.origin,
      destination: AB3Trips.destination
    }
  };

  console.log(data);
  const apiData = await API.post('amplifytrips', '/reserve', data);
  console.log({ apiData });
  alert('Data submitted');
}

const AB3Trips = { name: '', flight:'', airline:'', origin:'', destination:''};

function updateAB3Trips(key, value){
  AB3Trips[key] = value;
}
class AddProductScreen extends React.Component {
    /*constructor()
    {
        super();
        this.state={
          name:'',
          flight:'',
          airline:'',
          origin:'',
          destination:'',
        }
    }*/
    render(){
        return (<ScrollView style={{margin:20}}>
            <TextInput
            placeholder="Name"
            onChangeText={newText  => { updateAB3Trips('name', newText) }}
            style={{borderWidth:2,borderColor:'skyblue',margin:15}}
            />
            <TextInput
            placeholder="Flight"
            onChangeText={newText => { updateAB3Trips('flight', newText) }}
            style={{borderWidth:2,borderColor:'skyblue',margin:15}}
            />
            <TextInput
            placeholder="Airline"
            onChangeText={newText => { updateAB3Trips('airline', newText) }}
            style={{borderWidth:2,borderColor:'skyblue',margin:15}}
            />
            <TextInput
            placeholder="Origin"
            onChangeText={newText => { updateAB3Trips('origin', newText) }}
            style={{borderWidth:2,borderColor:'skyblue',margin:15}}
            />
            <TextInput
            placeholder="Destination"
            onChangeText={newText => { updateAB3Trips('destination', newText) }}
            style={{borderWidth:2,borderColor:'skyblue',margin:15}}
            />
            <Button title="submit" onPress={()=>{AddTrip()}} />
        </ScrollView>)
    }
}

/*
const AddProductScreen = (props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Home</Text>
      </SafeAreaView>
    </>
  );
};

*/

export default AddProductScreen;