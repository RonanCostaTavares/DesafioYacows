const BASE_API = 'https://api.jsonbin.io/b/5fba7143a825731fc0a11d80';
const Key_Api = '$2b$10$bJQLGSrpS.Ws.4Dkhu/5ruAJf55nT6ch7wYm.mIhOUaq5qylGaLQi'

export default {

    getProducts: async () => {
        const req = await fetch(`${BASE_API}`,{
            headers:{
                'secret-key':`${Key_Api}`
            }
        });
        const json = await req.json();

        return json;
    },


}