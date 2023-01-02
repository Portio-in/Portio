import Image from "next/image";
import logo from "../assets/img/logo.png";
import googleIcon from "../assets/img/google-icon.png";
import githubIcon from "../assets/img/github-icon.png";
import buildIcon from "../assets/img/build-icon.png";
import OAuthButton from "../components/oauth_btn";
import { GITHUB_OAUTH_URL, GOOGLE_OAUTH_URL } from "../config";
import { useEffect } from "react";
import { getCookies} from 'cookies-next';
import { useRouter } from "next/router";

function HomePage({loggedIn}) {
  const router = useRouter();
  function initGoogleOAuth() {
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
              <OAuthButton icon={googleIcon} label="Continue with Google" onClick={initGoogleOAuth} />
              <OAuthButton icon={githubIcon} label="Continue with Github" onClick={initGithubOAuth} />
            </>
            : <OAuthButton icon={buildIcon} label="Start Building Portfolio" onClick={goToDashboard} />
          }

        </div>
        <div className="mt-[12vh] md:mt-[14vh] text-center">
            <p className="font-medium">Built by developers | Built for developers</p>
            <p>created by @Tanmoy741127 with ❤️</p>
        </div>
    </div>
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
