import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      address: "",
      phone: 0,
      city: "",
    },
  });
  const onSubmit = (data) => console.log(data);
  console.log("errors", errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          {...register("name", {
            required: {
              value: true,
              message: "name is required",
            },
          })}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...register("email", {
            pattern: {
              value: /[w._%+-]+@[\w.-J+1.[a-zA-z]{2,4}/,
              message: "must be a valid email address",
            },
          })}
        />
      </div>
      <div>
        <label htmlFor="address">address</label>
        <input
          id="address"
          type="text"
          {...register("address", {
            required: {
              value: true,
              message: "address required",
            },
          })}
        />
      </div>
      <div>
        <label htmlFor="phone">address</label>
        <input
          id="phone"
          type="number"
          {...register("phone", {
            required: {
              value: true,
              message: "phone is required",
            },
          })}
        />
      </div>
      <div>
        <label htmlFor="city">City</label>
        <input
          id="city"
          type="text"
          {...register("city", {
            required: {
              value: true,
              message: "city is required",
            },
          })}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
