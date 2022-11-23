"use client";

// import { useDispatch, useSelector } from "react-redux";

import { Burger, Box, NavLink, Drawer } from "@mantine/core";
import { IconBuildingSkyscraper } from "@tabler/icons";

import { showHamburgerNav } from "../app/store/actions/modalAction";

import Image from "next/image";

import styles from "../styles/components/Navbar.module.scss";
import DrawerNav from "./DrawerNav";
import { useState } from "react";

export default function NavBar() {
  const [opened, setOpened] = useState(false);

  // const dispatch = useDispatch();

  // const { showingHamburgerNav } = useSelector((state) => state.modalReducer);

  return (
    <div className={styles.nav}>
      <div className={styles.nav__contact}>
        <p>Carrera: 80D # 22 - 72</p>
        <p>Cel: 305 801 0485</p>
      </div>
      <div className={styles.nav__navBar}>
        <Burger
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          color="#d1aa65"
        />
        <Image src="/Sevgi.png" alt="Sevgi Logo" width={150} height={80} />
        <Box sx={{ width: 240 }}>
          <NavLink
            label="Conocenos"
            icon={
              <IconBuildingSkyscraper size={16} stroke={1.5} color="#d1aa65" />
            }
            childrenOffset={28}
          >
            <NavLink label="First child link" />
            <NavLink label="Second child link" />
            <NavLink label="Third child link" />
          </NavLink>
        </Box>
      </div>
      <Drawer
        opened={opened}
        onClose={() => setOpened((o) => !o)}
        size="xl"
        position="bottom"
      >
        <DrawerNav />
      </Drawer>
    </div>
  );
}
