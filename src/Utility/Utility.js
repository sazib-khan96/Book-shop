import { toast } from "react-toastify";

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
    toast.error('already exist')
    return
  }

  saveData.push(id)
  localStorage.setItem('wishList', JSON.stringify(saveData))
  toast.success('successFully added')

//   const setitem = localStorage.setItem("wishList", "setvalue");
//   JSON.stringify(setitem);
};
