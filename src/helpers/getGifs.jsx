

     export const getGifs = async(category) => {

        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=5&api_key=5NAV8g9VftKYatfmtBSwQdoK1CNavdKP`;

        const resp = await fetch(url);
        const {data} = await resp.json(); 

        const gifs = data.map( img => {
            return{
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

      return gifs;
    }