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

import { useEffect ,useState} from 'react';
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'

const MemeComponent: React.FC = () => {
  const [data,setData]=useState<any>(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch("https://www.reddit.com/r/memes.json?limit=1000");
         response = await response.json();
         setData(response);
        
        console.log(response)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

 

  return (
    
    <div>
      {data && (
        <div className="grid grid-cols-3 grid-rows-2 gap-12 p-5 mx-auto items-center">
          <Gallery>
         {data.data.children.map((e:any,index:number)=>(
         <Item
         key={index}
         original={e.data.url}
         thumbnail={e.data.url}
         width="400"
         height="400"
       >
            {({ ref, open }) => (
        <img ref={ref} onClick={open} src={e.data.url} alt={e.data.thumbnail}  className="h-48 w-48" />
      )}
         
          </Item>
         ))}
        </Gallery>
         
        </div>
      )}
    </div>
  );
};

export default MemeComponent;

