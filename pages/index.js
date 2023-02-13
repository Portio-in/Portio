import Image from "next/image";
import logo from "../assets/img/logo.png";
import googleIcon from "../assets/img/google-icon.png";
import githubIcon from "../assets/img/github-icon.png";
import buildIcon from "../assets/img/build-icon.png";
import OAuthButton from "../components/independent/oauth_btn";
import { GITHUB_OAUTH_URL, GOOGLE_OAUTH_URL } from "../config";
import { getCookies} from 'cookies-next';
import { useRouter } from "next/router";
import {Head} from "next/head";

function HomePage({loggedIn}) {

  const router = useRouter();
  function initGoogleOAuth() {
      alert("Login with Google is coming soon. Please use Github to login.")
      return;
      window.location.href = GOOGLE_OAUTH_URL;
  }

  function initGithubOAuth() {
    window.location.href = GITHUB_OAUTH_URL;
  }

  function goToDashboard() {
    router.push("/dashboard");
  }


  return (
    <>
        <div className="md:px-[5vw] px-[1vw] md:py-6 py-4">
            <Image src={logo} alt="portio image" className="md:h-[110px] h-[80px] w-auto" />
            <div className="w-100 flex flex-col justify-center items-center md:mt-[13vh] md:mb-[9vh] mt-[10vh] mb-[8vh]">
                <p className="text-3xl md:text-6xl text-brand font-courgette mb-4">Create Portfolio</p>
                <p className="text-3xl md:text-6xl font-courgette">In Fewer Clicks</p>
            </div>
            <div className="w-100  text-xl md:text-3xl font-medium text-center">{
                loggedIn ? "Don't Wait !!" : "Get Started"
            }</div>
            <div className="w-100 flex flex-col md:flex-row justify-center items-center mt-8 mb-4 md:mb-0 gap-4">
                {
                    !loggedIn ?
                        <>
                            <OAuthButton  icon={googleIcon} label="Continue with Google" onClick={initGoogleOAuth} />
                            <OAuthButton icon={githubIcon} label="Continue with Github" onClick={initGithubOAuth} />
                        </>
                        : <OAuthButton icon={buildIcon} label="Start Building Portfolio" onClick={goToDashboard} />
                }
            </div>
            <div className="mt-[12vh] md:mt-[14vh] text-center">
                <p className="font-medium">Built by developers | Built for developers</p>
                <p>created by Team Portio with ❤️</p>
            </div>
        </div>
        {/* <footer class="bg-gray-900 text-white w-[100vw] md:w-full md:static absolute bottom-0 inset-x-0">
          <div class="w-full p-4">
            <div className="w-[100vw] text-center md:w-fit md:text-left md:inline">
              © 2023 Copyright: 
              <a class="text-whitehite" href="https://portio.in/"> PORTIO</a>      
            </div>    
            <div className="w-[100vw] text-center md:w-fit md:text-right md:inline">
              <a class="text-whitehite md:float-right" href="https://portio.in/terms-and-condition/"> Terms and Conditions</a>
              <a class="text-whitehite md:float-right md:px-4" href="https://portio.in/privacy-policy/"> Privacy Policy</a>
            </div>  
          </div>
        </footer> */}
    </>
  )
}

export async function getServerSideProps(context) {
  const { req, res } = context;
  const cookies = getCookies({ req });
  let loggedIn = false;
  if(cookies.token){
    loggedIn = true;
  }
  return {
    props: {
      loggedIn
    },
  };
}

export default HomePage;
