import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";

type TLogo = {
  color?: 'black' | 'white',
  type?: "small" | "full"
}
const Logo = ({
  color = "black",
  type = "full"
}: TLogo) => {
  const matches = useMediaQuery('(max-width: 992px)')
  let DATA_LOGO = "/logo/logo-full-black.png";
  if (color === "black" && type === "full") {
    DATA_LOGO = !matches ? "/logo/logo-full-black.png" : '/logo/logo-small-black.png'
  }
  if (color === "white" && type === "full") {
    DATA_LOGO = !matches ? "/logo/logo-full-white.png" : '/logo/logo-small-white.png'
  }
  if (color === "black" && type === "small") {
    DATA_LOGO = "/logo/logo-small-black.png"
  }
  if (color === "white" && type === "small") {
    DATA_LOGO = "/logo/logo-small-white.png"
  }

  return (
    <Link to={"/"} className="flex">
      {type === "full" ? (
        <img className={cn(
          !matches ? "w-24" : "w-12"
        )} src={DATA_LOGO} alt="LOGO" />
      ) : (
        <img className="w-10" src={DATA_LOGO} alt="LOGO" />
      )}
    </Link>
  )
}

export default Logo