export let getArchitects = () => {
  let res = [];
  let res2 = [];
  let arr1 = document.getElementsByTagName("a");
  let arr2 = document.getElementsByTagName(":not(a)");
  for (let i = 0; i < arr1.length; i++) {
    res.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    res2.push(arr2[i]);
  }
  return [res, res2];
};

export let getClassical = () => {
  let res = [];
  let res2 = [];
  let arr1 = document.getElementsByClassName("classical");
  let arr2 = document.getElementsByClassName(":not(classical)");
  for (let i = 0; i < arr1.length; i++) {
    res.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    res2.push(arr2[i]);
  }
  return [res, res2];
};

export let getActive = () => {
  let res = [];
  let res2 = [];
  let arr1 = document.getElementsByClassName("classical.active");
  let arr2 = document.getElementsByClassName(":not(classical.active)");
  for (let i = 0; i < arr1.length; i++) {
    res.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    res2.push(arr2[i]);
  }
  return [res, res2];
};

export let getBonannoPisano = () => {
  let arr1 = document.getElementById("BonannoPisano");
  let arr2 = document.querySelectorAll(":not(BonannoPisano)");

  return [arr1, arr2];
};
