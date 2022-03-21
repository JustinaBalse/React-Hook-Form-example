import React from "react";
import { useForm } from "react-hook-form";

export default function StudentAddForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  // watch input value by passing the name of it
  console.log(watch("firstName"));

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="col-8 offset-2">
      <h2> Add New Student</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            Firstname
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            {...register("firstName", { required: true })}
            defaultValue="Jonas"
          />
          {errors.firstName && (
            <span className="text-danger fw-light">This field is required</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="lastname" className="form-label">
            Firstname
          </label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            {...register("lastname", { required: true })}
            defaultValue="Jonaitis"
          />
          {errors.lastname && (
            <span className="text-danger fw-light">This field is required</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="program" className="form-label">
            Firstname
          </label>
          <input
            type="text"
            className="form-control"
            id="program"
            {...register("program", { required: true })}
            defaultValue="JavaScript"
          />
          {errors.program && (
            <span className="text-danger fw-light">This field is required</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="group" className="form-label">
            Firstname
          </label>
          <input
            type="text"
            className="form-control"
            id="group"
            {...register("group", { required: true })}
            defaultValue="JS1"
          />
          {errors.group && (
            <span className="text-danger fw-light">This field is required</span>
          )}
        </div>

        <button type="submit" className="btn btn-success">
          Add Student
        </button>
      </form>
    </div>
  );
}
