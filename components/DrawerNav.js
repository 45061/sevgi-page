import styles from "../styles/components/DrawerNav.module.scss";
import RoomsData from "./RoomsData";

export default function DrawerNav() {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <h2>Home</h2>
        <h2>Nosotros</h2>
        <h2>Contacto</h2>
        <h2>Perfil</h2>
      </div>
      <div className={styles.rooms}>
        <RoomsData />
      </div>
    </div>
  );
}
