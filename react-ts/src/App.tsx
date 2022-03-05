
import { useState } from 'react';
import Tweet  from './components/Tweet';
import { AppRoutes } from './AppRoutes';

function App() {

  // const [tweets, setTweets] = useState<string[]>([
  //   'Tweet 1',
  //   'Tweet 2',
  //   'Tweet 3',
  //   'Tweet 4'
  // ]);

  // function createTweet() {
  //   setTweets([...tweets, 'Tweet 5'])
  // }



  return(
    //   <>
    //   <h1>
    //     Hello HugolrjDev
    //   </h1>

    //   {tweets.map((tweet, index) =>{
    //     return <Tweet text={tweet} />
    //   })}

    //   <button onClick={createTweet}>+Add tweet</button>
    // </>
    <AppRoutes />
  )
}

export default App;
