

const useHuggingFace = () => {

    let token = process.env.REACT_APP_API_TOKEN;
   
    async function getMessagesFromGPT2(data) {
        const response = await fetch(process.env.REACT_APP_API_URL, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          referrerPolicy: "no-referrer", 
          body: JSON.stringify(data)
        });
        return response.json();
      }
      
    return {
            getMessagesFromGPT2
    }
}


export default useHuggingFace
