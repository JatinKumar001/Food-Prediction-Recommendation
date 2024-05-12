import React, { useEffect, useState } from 'react'
import RecommendationItem from './RecommendationItem'
import useFetch from '../hooks/useFetch'
import axios from 'axios';

export default function Recommendation() {

    const { data, loading, error } = useFetch("http://localhost:8080/api/prediction")

    const [choice, setChoice] = useState("");
    const [refreshRecommendation, setRefreshRecommendation] = useState(false);

    useEffect(() => {
        if (data && data.length > 0) {
            setChoice(data[0].title);
        }
    }, [data]);

    useEffect(() => {
        if (choice) {
            axios.post("http://localhost:8080/api/recommendation", { title1: choice })
                .then(response => {
                    console.log("POST request successful:", response);
                    setRefreshRecommendation(prevState => !prevState);
                })
                .catch(error => {
                    console.error("Error making POST request:", error);
                });

        }
    }, [choice]);

    return (
        <div>
            <RecommendationItem key={refreshRecommendation}/>
        </div>
    )
}
