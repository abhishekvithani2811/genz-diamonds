import FormInput from "../../layout/formInput";


export default function LoginPage() {
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-160px)] bg-white sm:my-10">
            <div className="bg-white sm:px-14 sm:py-14 px-6 py-10 shadow-login max-w-[640px] w-full border border-[#F2F2F7]">
                <h2 className="text-2xl font-semibold md:mb-12 mb-6 text-center text-[#333333] md:text-[32px]">Log in or sign up</h2>
                <form>
                    <FormInput name="email" label="Email" />
                    <button type="submit" className="w-full md:py-4 py-3 px-4 bg-[#111111]/25 text-white font-semibold md:text-[20px] text-lg leading-[28.2px] cursor-pointer tracking-wider" disabled>Continue</button>
                </form>
                <div className="md:my-9 my-6 flex items-center opacity-50">
                    <div className="flex-grow border-t-[2px] border-[#E5E5EA]"></div>
                    <span className="mx-6 text-gray-500 font-bold">OR</span>
                    <div className="flex-grow border-t-[2px] border-[#E5E5EA]"></div>
                </div>
                <div>
                    <button className="w-full md:py-4 py-3 px-4 mb-4 flex items-center justify-center bg-white border border-gray-300 text-black font-medium md:text-[20px] text-lg leading-[28.2px] hover:bg-gray-50 tracking-normal">
                        <img src="https://www.google.com/favicon.ico" alt="Google" className="w-7 h-7 mr-2" />
                        Continue with Google
                    </button>
                    <button className="w-full md:py-4 py-3 mb-4 flex items-center justify-center bg-white border border-gray-300 text-black font-medium md:text-[20px] text-lg leading-[28.2px] hover:bg-gray-50 tracking-normal">
                        <img src="https://www.facebook.com/favicon.ico" alt="Facebook" className="w-7 h-7 mr-2" />
                        Continue with Facebook
                    </button>
                </div>
            </div>
        </div>
    )
}