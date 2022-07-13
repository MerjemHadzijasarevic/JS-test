//vezba 1
unos = prompt("Unesite niz: ");

niz = [];

for (let i = 0; i < unos; i++) {
  niz[i] = prompt("Unesite broj");
}
function myfunc(niz) {
  for (let i = 0; i < niz.length; i++) {
    niz[i] = niz[i] * niz[i];
  }
  console.log(niz);
}
myfunc();

//vezba 2
fetch("https://reqres.in/api/users").then((res) => {
  res.json().then((data) => {
    console.log(data);
  });
});
