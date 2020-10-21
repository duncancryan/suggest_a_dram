export default class Request{
    // Get request for all the whiskies
    get(url){
        return fetch(url)
        .then(res => res.json());
    }
}