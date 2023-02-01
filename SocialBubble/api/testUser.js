import axios_instance from "./configureAxios";

//create 

export const createTestUserAPI = (email, date_of_birth, profession, name, password) => {
  console.log("calling API..");
  let form = new FormData();
  form.append("name", name );
  form.append("email", email);
  form.append("profession", profession);
  form.append("date_of_birth", date_of_birth);
  form.append("password", password);

  return axios_instance.post("api/user/create-user", form, {
      headers: {
        "Content-Type": "user/form-data",
      },
    })
    .then(({ data }) => {
        console.log("success!");
      return data;
    });
};