import { SvgIcon } from "@mui/material";

interface TiktokIconProps {
  color?: string;
  size?: string;
}

const TiktokIcon: React.FC<TiktokIconProps> = ({ color, size }) => {
  return (
    <SvgIcon viewBox="0 0 448 512" sx={{ fontSize: size || "inherit" }}>
      <path
        fill={color}
        d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"
      />
    </SvgIcon>
  );
};

export default TiktokIcon;