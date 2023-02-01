import axios_instance from "./configureAxios";

//create 

export const changePasswordAPI = (user_id, new_password, possible_current_password ) => {
  let form = new FormData();
  form.append("user_id", user_id );
  form.append("new_password", new_password);
  form.append("possible_current_password", possible_current_password);
  
  return axios_instance.post("api/user/change-password", form, {
      headers: {
        "Content-Type": "user/form-data",
      },
    })
    .then(({ data }) => {
      return data;
    });
};