import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.css";
import cls from "classnames";

interface ICard {
  name: string;
  href: string;
  imageUrl: string;
}

const Card: React.FC<ICard> = ({ name, href, imageUrl }) => {
  return (
    <Link href={href} className={styles.cardLink}>
      <div className={cls("glass", styles.container)}>
        <div className={styles.cardHeaderWrapper}>
          <h2>{name}</h2>
        </div>
        <div className={styles.cardImageWrapper}>
          <Image
            className={styles.cardImage}
            src={imageUrl}
            width={260}
            height={160}
            alt="card-image"
            unoptimized
          />
        </div>
      </div>
    </Link>
  );
};

export default Card;
