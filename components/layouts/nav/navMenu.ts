interface InterfaceNavMenu {
  id: number;
  name: string;
  link: string;
}

const navMenu: InterfaceNavMenu[] = [
  {
    id: 1,
    name: "Beranda",
    link: "./",
  },
  {
    id: 2,
    name: "Tentang",
    link: "./a",
  },
  {
    id: 3,
    name: "Ruangan",
    link: "./b",
  },
  {
    id: 4,
    name: "Faq",
    link: "./c",
  },
];

export default navMenu;
