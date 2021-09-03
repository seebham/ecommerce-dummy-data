# ecommerce-dummy-data

Data URL - https://gitcdn.link/repo/seebham/ecommerce-dummy-data/main/data.json

### Fetch in Javascript

```Javascript
fetch("https://gitcdn.link/repo/seebham/ecommerce-dummy-data/main/data.json", {
  method: "GET",
})
  .then((response) => response.json().then((res) => console.log(res)))
  .catch((err) => console.error(err));
```
