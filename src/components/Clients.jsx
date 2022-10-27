import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={styles.flexCenter} my-4>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
        >
          <img
            src={client.logo}
            alt={`${client.id}-icon`}
            className="sm:w-[192px] h-[100px] object-contain invert-0 hover:invert "
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
