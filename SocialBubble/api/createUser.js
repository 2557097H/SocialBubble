import axios_instance from "./configureAxios";

//create 

export const createUserAPI = (first_name, last_name, profile_photo,  email, friends, interests, profession, sex, password, outer_bubble_id, inner_bubble_id ) => {
  let form = new FormData();
  form.append("first_name", first_name );
  form.append("last_name", last_name );
  form.append("profile_photo", profile_photo);
  form.append("email", email);
  form.append("friends", friends);
  form.append("interests", interests);
  form.append("profession", profession);
  form.append("date_of_birth", date_of_birth);
  form.append("sex", sex);
  form.append("password", password);
  form.append("outer_bubble_id", outer_bubble_id);
  form.append("inner_bubble_id", inner_bubble_id);
  
  return axios_instance.post("api/user/create-user", form, {
      headers: {
        "Content-Type": "user/form-data",
      },
    })
    .then(({ data }) => {
      return data;
    });
};