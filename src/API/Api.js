const API_KEY = "9gAVXVbvoeWbjKOpYZbbC4US4x73";

export const getMatches = () => {
  const url = `https://cricapi.com/api/matches?apikey=${API_KEY}`;
  console.log("URL", url);
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log("ERROR ", error);
    });
};

//get the score of the cuurent match

export const getMatchDetail = (id) => {
  const url = `https://cricapi.com/api/cricketScore?unique_id=${id}&apikey=${API_KEY}`;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};


// const API_KEY= "9gAVXVbvoeWbjKOpYZbbC4US4x73"

// export const getMatches=()=>{
//     const url= `https://cricapi.com/api/matches/?apikey=${API_KEY}`
//     return fetch(url)
//         .then((response)=> response.json())
//     .catch((error)=> console.log('Error',error));
// };