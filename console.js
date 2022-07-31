for (const key in $request) {
  console.log(key, $request[key]);
}

if ($response) {
  for (const key in $response) {
    console.log(key, $response[key]);
  }
}


// url.replace('purchase=0', 'purchase=1');

$done({});