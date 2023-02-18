import React, {useState, useEffect} from 'react';

function StopWatcher() {
    const [stopWatch, setStopWatch] = useState(0);
    useEffect(() => {
        console.log('component DidMount');
    }, [])
    const stopWatchHandler = () => {
        setStopWatch(stopWatch + 1);
    };
    useEffect(() => {
        console.log('component DidUpdate');
        let id = setInterval(stopWatchHandler, 1000);
        return () => {        // Very Very Important!
            clearInterval(id);
        };
    })
    return (
        <div>
            {stopWatch}
        </div>
    );
}

export default StopWatcher;
