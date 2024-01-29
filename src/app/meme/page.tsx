"use client"
// import { useEffect} from "react"
// export default function page() {
//   useEffect(async () => {
//     try {
//       let response = await fetch("https://www.reddit.com/r/memes.json?limit=1000");
//       let data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }, []);
//   return (
//     <div>page</div>
//   )
// }
import { useEffect } from 'react';

const YourComponent: React.FC = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch("https://www.reddit.com/r/memes.json?limit=1000");
        let data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Your component logic...

  return (
    // Your component JSX...
    <div>Your component content</div>
  );
};

export default YourComponent;
