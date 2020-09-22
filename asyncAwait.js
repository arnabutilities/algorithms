const fetch = require('node-fetch');

function delayFetch(url, delay){
    return new Promise((resolve, error) => {
        try{
            setTimeout(() => {
                resolve(fetch(url));
            }, delay);
        } catch(err) {
            error(err);
        }
   })
}

async function testCalls(){
    let time = new Date().getTime();
    let [gitUsers, gists]  = await Promise.all([
        delayFetch('https://api.github.com/search/users?q=arnab', 4500).then(res=>res.json()),
        delayFetch('https://api.github.com/gists/public', 5000).then(res=>res.json())
    ]);
    let newT1 = new Date().getTime();
    console.log((newT1-time)/1000);

    // let gists =  delayFetch('https://api.github.com/gists/public', 5000).then(res=>res.json());
    // let newT2 = new Date().getTime();
    // console.log((newT2-newT1)/1000);

  
    return new Promise((resolve, error) => {
         if(gitUsers && gists){
             let newT = new Date().getTime();
             console.log((newT-time)/1000);
            resolve([gitUsers.items.length, gists.length]);
        } else {
            error(err)
        } 
    })
}

testCalls().then((val) => {console.log(val)}, (e)=> {
    console.log(e);
});