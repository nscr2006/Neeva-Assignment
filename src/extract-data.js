import axios from 'axios';
const json_Files = [
    './jsondata/calendar.json',
    './jsondata/contacts.json',
    './jsondata/dropbox.json',
    './jsondata/slack.json',
    './jsondata/tweet.json'
];

function extractData() {
    let hash_Map = new Map();

    return {
        fetchData : async () => await _helperExtractData(hash_Map),
        getObject : (key) => {return hash_Map.get(key)},
        getObjects : () => {
            let objMap = new Map(hash_Map);
            return objMap;
        }
    }
}

async function _helperExtractData(hash_Map){
    for(let file of json_Files){
        let req = await axios.get(`${file}`);
        let res = req.data[Object.keys(req.data)[0]]; 
     
        for(let data of res){
            const matchingTerms = data.matching_terms;

            for(let word of matchingTerms){
                if(!hash_Map.has(word)){
                    const arr = [];
                    hash_Map.set(word, arr);
                }
                hash_Map.get(word).push(data);
            }
        }
    }
}

export default extractData();