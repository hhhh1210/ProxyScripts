// 删除 func_area[1] 和 [2]
let obj = JSON.parse($response.body);
if (obj?.data?.func_area?.length >= 3) {
  obj.data.func_area.splice(2, 1);
  obj.data.func_area.splice(1, 1);
}
$done({ body: JSON.stringify(obj) });

