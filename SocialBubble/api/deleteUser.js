import axios_instance from "./configureAxios";

//create 

export const deleteUserAPI = (user_id) => {
  let form = new FormData();
  form.append("user_id", user_id );
  
  return axios_instance.post("api/user/delete-user", form, {
      headers: {
        "Content-Type": "user/form-data",
      },
    })
    .then(({ data }) => {
      return data;
    });
};