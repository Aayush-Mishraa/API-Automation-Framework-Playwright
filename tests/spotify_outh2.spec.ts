import {test, expect,request} from '@playwright/test';

const CLIENT_ID ="1044ea5901124f72b19ef35f4360dc04";
const CLIENT_SECRET="200e12dabb5741fe9301b94f0224c695";
let accessToken : string;

test.beforeEach(async({request})=>{

    const response = await request.post('https://accounts.spotify.com/api/token',{
    headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    form:{
        grant_type: 'client_credentials',
        client_id:CLIENT_ID,
        client_secret: CLIENT_SECRET,
    
    }
    });
    const jsondata = await response.json();
    accessToken = jsondata.access_token;
    console.log(jsondata);



});

test('Get Albums', async({request})=>{
    const response = await request.get('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy', {
        headers:{
            'Authorization': `Bearer ${accessToken}`
        },

    });
        if (!response.ok()) {
        const text = await response.text();
        console.log("Error response:", text);
        throw new Error(`API failed with status ${response.status()}: ${text}`);
    }

  const jsonData =   await response.json();
  console.log(jsonData)
   console.log("============================================")
  console.log(JSON.stringify(jsonData))

    

});


test('get tracks', async ({ request }) => {
    const response = await request.get('https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V', {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        },
       
    });

    expect(response.status()).toBe(200);
    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));

});