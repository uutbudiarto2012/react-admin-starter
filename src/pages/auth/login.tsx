import FormLogin from "@/components/features/auth/form-login"

const LoginPage = () => {
  return (
    <div className="h-full flex">
      <div className="w-full md:max-w-xl bg-white md:rounded-r-[30px] relative z-10 flex items-center justify-center">
        <FormLogin />
      </div>
      <div className="absolute md:relative md:-ml-12 z-0 h-screen">
        <img src="/images/bg-auth.png" className="w-full h-full object-cover" alt="bg" />
      </div>
    </div>
  )
}

export default LoginPage