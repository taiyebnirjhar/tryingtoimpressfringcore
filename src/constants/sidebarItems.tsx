import { v4 as uuidv4 } from "uuid";

import {
  SiCreatereactapp,
  SiJavascript,
  SiRedux,
  SiTypescript,
} from "react-icons/si";

const SidebarItems = [
  {
    id: uuidv4(),
    name: "Dive Into JavaScript",
    url: "/dive-into-javascript",
    value: "",
    icon: <SiJavascript />,
  },
  {
    id: uuidv4(),
    name: "Typescript & Generics",
    url: "/typescript-generics",
    value: "",
    icon: <SiTypescript />,
  },
  {
    id: uuidv4(),
    name: "Realm Of React",
    url: "/realm-of-react",
    value: "",
    icon: <SiCreatereactapp />,
  },
  {
    id: uuidv4(),
    name: "Reform With Redux",
    url: "/reform-with-redux",
    value: "",
    icon: <SiRedux />,
  },
];

export default SidebarItems;
