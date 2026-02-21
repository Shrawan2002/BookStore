import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useRef } from "react"


export default function Login() {
   const dialogRef = useRef(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    dialogRef.current?.close()
  }

  return (
    <dialog ref={dialogRef} id="my_modal_4" className="modal">
      <div className="modal-box w-11/12 max-w-md">
        <h3 className="font-bold text-lg">Login</h3>

        <form  onSubmit={handleSubmit(onSubmit)}>
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
            {errors.email && <span className="text-sm text-red-500" >This field is required</span>}
          </div>

          {/* password */}
          <div className="mt-4 space-y-2">
            <span >Password</span>
            <br />
            <input
              type="password"
               {...register("password", { required: true })}
              placeholder="enter your password"
              className="py-1 w-80 px-3 border rounded-md outline-none shadow-sm"
            />
            <br/>
            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
          </div>

          {/* buttons */}
          <div className="flex justify-around mt-4">
            <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300">
              Login
            </button>

            <div>
              Not registered?{" "}
              <Link to="/signup" className="underline text-blue-500 cursor-pointer">
                Signup
              </Link>
            </div>
          </div>

          <div className="modal-action">
            <button type="button" 
            className="btn"
            onClick={()=> dialogRef.current?.close()}
            >Close</button>
          </div>
        </form>
      </div>
    </dialog>
  )
}