import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
// import AppTheme from '../shared-theme/AppTheme';
// import ColorModeSelect from "../shared-theme/ColorModeSelect";
import Content from "../components/Content";
import SignupCard from "../components/SignupCard";

export default function SignupSide(props) {
  return (
    <div className="
landingContainer
h-screen
w-screen
flex
items-center
justify-center
pt-1
bg-[url(/background.png)]
bg-no-repeat
bg-cover
">
     
          <Stack
            direction={{ xs: "column-reverse", md: "row" }}
            sx={{
              justifyContent: "center",
              gap: { xs: 6, sm: 12 },
              p: { xs: 2, sm: 4 },
              m: "auto",
            }}
          >
            
            <SignupCard />
            <Content />

          </Stack>
        {/* </Stack> */}
      {/* </Stack> */}
    </div>
  );
}
