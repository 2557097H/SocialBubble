import axios_instance from "./configureAxios";

//create 

export const deleteUserAPI = (user_id, new_password) => {
  let form = new FormData();
  form.append("user_id", user_id );
  form.append("email", new_password);
  
  return axios_instance.post("api/user/delete-user", form, {
      headers: {
        "Content-Type": "user/form-data",
      },
    })
    .then(({ data }) => {
      return data;
    });
};