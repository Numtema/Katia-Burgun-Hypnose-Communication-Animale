const https = require('https');

https.get('https://screenapp.io/app/v/xGZBd7zS1H', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const urls = data.match(/https:\/\/[^"'\s]+\.(mp4|m3u8)[^"'\s]*/gi);
    if(urls) {
      console.log("Found:", [...new Set(urls)].join('\n'));
    } else {
      console.log('No raw video URLs found directly in the HTML. Might be loaded dynamically via JS.');
    }
  });
}).on('error', err => {
  console.log('Error: ', err.message);
});
