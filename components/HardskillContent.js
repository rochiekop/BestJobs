import React, { useState } from 'react';
import { Text, View } from 'react-native';
import database from '@react-native-firebase/database';
import { useEffect } from 'react';

function HardskillContent({navigation,route}) {
    const [jobs, setJobs] = useState({});
    const [hardskillsKey, setHardskillsKey] = useState([]);
    const idJob = route.params.id_job;
    const referenceJobs = database().ref(`job/${idJob}`);
    async function getJobs(){
        await referenceJobs.once('value')
        .then(snapshot => {
            let data = snapshot.val();
            let jobItem = {...data};
            let hardskillsItem = jobItem.hardskills;
            setJobs(jobItem);
            // setJobsKey(Object.keys(jobItem));
            setHardskillsKey(Object.keys(hardskillsItem));
        }).then(console.log(hardskillsKey));
    }
    
    useEffect(()=>{
        getJobs();
    },[]);
    return (
        
        <View>
            <Text>
            {(Object.keys(jobs).length === 0 && jobs.constructor === Object) ? 'Loading..' : jobs.nama}
            </Text>
            <Text>
            {hardskillsKey.length > 0 ? hardskillsKey[1] : 'Loading....'}
            </Text>
            {hardskillsKey.length > 0 ? (
                hardskillsKey.map((key, index) =>{
                    if(index % 2 == 0){
                        return <Text style={{color:'red'}} key={key}>Hello {hardskillsKey[index]}</Text>
                    }else{
                        return <Text style={{color:'blue',marginLeft:50}} key={key}>Hello {hardskillsKey[index]}</Text>
                    }
                }   
                )
            ) : (
                <Text> Hello </Text>
            )}
            
        </View>
    );
}

export default HardskillContent;