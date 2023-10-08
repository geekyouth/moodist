import { BiSolidTree, BiWater } from 'react-icons/bi/index';
import { FaCity, FaCloudShowersHeavy, FaWater } from 'react-icons/fa/index';
import { PiBirdFill } from 'react-icons/pi/index';
import { MdOutlineThunderstorm } from 'react-icons/md/index';
import { GiCricket } from 'react-icons/gi/index';
import { BsSoundwave } from 'react-icons/bs/index';

const defaultIcon = <BsSoundwave />;

export const sounds: {
  categories: Array<{
    id: string;
    title: string;
    icon: React.ReactNode;
    sounds: Array<{ label: string; src: string; icon: React.ReactNode }>;
  }>;
} = {
  categories: [
    {
      icon: <BiSolidTree />,
      id: 'nature',
      sounds: [
        {
          icon: <FaCloudShowersHeavy />,
          label: 'Rain',
          src: '/sounds/rain.mp3',
        },
        {
          icon: <PiBirdFill />,
          label: 'Birds',
          src: '/sounds/birds.mp3',
        },
        {
          icon: <BiWater />,
          label: 'River',
          src: '/sounds/river.mp3',
        },
        {
          icon: <MdOutlineThunderstorm />,
          label: 'Thunder',
          src: '/sounds/thunder.mp3',
        },
        {
          icon: <GiCricket />,
          label: 'Crickets',
          src: '/sounds/crickets.mp3',
        },
        {
          icon: <FaWater />,
          label: 'Waves',
          src: '/sounds/waves.mp3',
        },
        {
          icon: defaultIcon,
          label: 'Seagulls',
          src: '/sounds/seagulls.mp3',
        },
        {
          icon: defaultIcon,
          label: 'Campfire',
          src: '/sounds/campfire.mp3',
        },
      ],
      title: 'Nature',
    },
    {
      icon: <FaCity />,
      id: 'urban',
      sounds: [
        {
          icon: defaultIcon,
          label: 'Airport',
          src: '/sounds/airport.mp3',
        },
        {
          icon: defaultIcon,
          label: 'Cafe',
          src: '/sounds/cafe.mp3',
        },
        {
          icon: defaultIcon,
          label: 'Rain on Window',
          src: '/sounds/rain-on-window.mp3',
        },
      ],
      title: 'Urban',
    },
  ],
};