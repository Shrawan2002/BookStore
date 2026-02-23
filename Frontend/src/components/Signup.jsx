import { useForm } from 'react-hook-form'
import Login from './Login.jsx'

export default function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="modal-box border-[2px] shadow-xl p-5 rounded-md">
          <h3 className="font-bold text-lg">Signup</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* name */}
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="enter your full name"
                className="py-1 w-80 px-3 border rounded-md outline-none shadow-sm"
              />
              <br/>
              {errors.name && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            {/* email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="enter your email"
                className="py-1 w-80 px-3 border rounded-md outline-none shadow-sm"
              />
              <br/>
              {errors.email && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            {/* password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                {...register("password", { required: true })}
                placeholder="enter your password"
                className="py-1 w-80 px-3 border rounded-md outline-none shadow-sm"
              />
              <br/>
              {errors.password && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300"
              >
                Signup
              </button>

              <div>
                Have account?{" "}
                <button
                  type="button"
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() => document.getElementById("my_modal_4").showModal()}
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Login modal lives OUTSIDE of text blocks */}
      <Login />
    </>
  )
}