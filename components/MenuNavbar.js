import { Menu, Divider, createStyles, Modal } from "@mantine/core";
import { UserCheck, UserOff, User } from "tabler-icons-react";
// import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
// import dayjs from "dayjs";

import { useMediaQuery } from "@mantine/hooks";
import Login from "./Login";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
  item: {
    "&[data-hovered]": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.green[9],
      color: theme.white,
    },
  },
}));

export default function MenuNavbar() {
  const [opened, setOpened] = useState(false);
  // const dispatch = useDispatch();
  // const thisDay = dayjs().$d.toString().substr(0, 24);

  // const largeScreen = useMediaQuery("(min-width: 1024px)");
  // const { isAuth } = useSelector((state) => state.authReducer);
  // const { boxActive, balance } = useSelector((state) => state.boxReducer);

  const { classes } = useStyles();

  const handleClick = (event) => {
    event.preventDefault();
    // dispatch(showLoginForm());
  };
  const handleClick2 = (event) => {
    // event.preventDefault();
    // if (!boxActive) {
    //   return dispatch(logout());
    // }
    // const dataBox = boxActive._id;
    // const dataClosed = {
    //   lastClosing: thisDay,
    //   dataBox,
    //   balanceClosed: balance,
    // };
    // dispatch(closedBox(dataClosed));
    // dispatch(logout());
  };
  return (
    <>
      <Menu
        ff="raustila"
        position="right"
        offset={10}
        radius="lg"
        trigger="hover"
        openDelay={100}
        closeDelay={400}
        transition="rotate-right"
        transitionDuration={150}
        withArrow
        classNames={classes}
        // control={<button type="button">Perfil</button>}
      >
        <Menu.Target>
          <button type="button">Perfil</button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Label>User</Menu.Label>

          <Menu.Item onClick={handleClick2} icon={<UserOff size={14} />}>
            Logout
          </Menu.Item>

          <Menu.Item
            onClick={() => setOpened(true)}
            icon={<UserCheck size={14} />}
          >
            Login
          </Menu.Item>

          <Divider />

          {/* <Link href="/userProfile"> */}
          <Menu.Item icon={<User size={14} />}>Perfil</Menu.Item>
          {/* </Link> */}

          <Menu.Item onClick={handleClick} icon={<User size={14} />}>
            Perfil
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
      {/* <PublicModal
        opened={showingRegisterForm}
        onClose={() => dispatch(hiddeRegisterForm())}
        size={largeScreen ? "50%" : "90%"}
      >
        <Register />
      </PublicModal>
      <PublicModal
        opened={showingLoginForm}
        onClose={() => dispatch(hiddeLoginForm())}
        size={largeScreen ? "30%" : "90%"}
      >
        <Login />
      </PublicModal>
      <PublicModal
        opened={showRecoverPassword}
        onClose={() => dispatch(hiddeRecoverPassword())}
      >
        <GetEmail />
      </PublicModal> */}
      <style jsx>
        {`
          button {
            border: none;
            background: trasparent;
            font-family: raustila;
            color: #638337;
            display: block;
            font-size: 36px;
            margin-block-start: 1em;
            margin-block-end: 1em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
            direction: ltr;
            font-weight: 400;
            font-style: normal;
            cursor: pointer;
            text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
          }
        `}
      </style>
      <Modal opened={opened} onClose={() => setOpened(false)}>
        <Login />
      </Modal>
    </>
  );
}
