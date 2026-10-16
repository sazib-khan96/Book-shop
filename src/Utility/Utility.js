const getData = () => {
  const datastring = localStorage.getItem("wishList");
  if (datastring) {
    return JSON.parse(datastring);
  }

  return [];
};

export const setData = (id) => {
  const saveData = getData();
  if (saveData.includes(id)) {
    alert("already exit");
    return
  }

  saveData.push(id)
  localStorage.setItem('wishList', JSON.stringify(saveData))

//   const setitem = localStorage.setItem("wishList", "setvalue");
//   JSON.stringify(setitem);
};
