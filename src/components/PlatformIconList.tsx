import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";

interface PlatformIconListProps {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
  // In this object we are going to have keys that represent the slug each platform
  // Each platform has a like name: PlayStation
  // But each platform also has a slug where all the letters are in lowercase slug: playstation .(slug is like a textual ID)
  // It is better to rely on the slug because it's not suppsed to change
  const iconMap: { [key: string]: IconType } = {
    // In this object we are going to have any number of strng keys. This is called an index signature. Each key is mapped to a value of type icon type.
    // Map the slug of each platform to an icon component
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    // The deafult space in chakra is 4px => 1=4px
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
