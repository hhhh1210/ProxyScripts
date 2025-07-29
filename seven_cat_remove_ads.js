let body = $response.body;
let obj = JSON.parse(body);
if (obj.data && obj.data.func_area) {
    delete obj.data.func_area[1];
    delete obj.data.func_area[2];
}
$done({ body: JSON.stringify(obj) });
